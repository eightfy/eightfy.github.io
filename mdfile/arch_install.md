# 记一次Arch Linux安装
## 制作安装介质，自行验证
[Arch Linux 下载页](archlinux.org/download/)
使用 U 盘作为安装介质，制作工具是[Ventoy](https://github.com/ventoy/Ventoy)
安装过程将清空 U 盘全部内容（务必提前备份）。安装完毕后，将 Arch Linux 安装镜像复制到 U 盘中即可。
## 启动安装环境
Thinkpad e420的启动顺序调整：开机时狂按f1进入启动列表设置ThinkPad Setup，在startUp菜单Boot栏将USB HDD置顶。
保存并退出后进入GRUB引导界面中，选择第一项
> Arch Linux install medium (x86_64, UEFI)

出现如下字符，说明安装环境启动成功:
> Arch Linux 6.x.x-arch1-1 (tty1)
> 
> archiso login: root (automatic login)
> To install Arch Linux follow the installation guide:
> https: //wiki.archlinux.org/title/Installation_guide
> 
> ...

## 验证启动模式
```bash
root@archiso ~ # ls /sys/firmware/efi/efivars
```
输出
> ls: cannot access '/sys/firmware/efi/efivars': No such file or directory

该设备处于 BIOS 启动模式，尝试在开机按F2进入BIOS调整为uefi失败（调整后黑屏），保持 BIOS 启动模式继续。

## 连网
插入网线，摸索了一下山东大学校园网命令行验证：
```bash
curl 'http://101.76.193.1/cgi-bin/get_challenge' --data 'action=login&username=<学号>&password=<密码>'
```
无线网：
```bash
iwctl
device list
station wlan0 scan
station wlan0 get-networks
station wlan0 connect taffy
quit

```
## 更新系统时间
执行如下命令：（没有输出）
```bash
timedatectl set-ntp true
```
## 格式化分区
查看硬盘分区情况
```bash
fdisk -l
```
进入fdisk的操作环境， 输入m并回车可以查看各命令的作用
```bash
fdisk /dev/sda
```
输入o来创建一个全新的MBR分区表，输入n创建新分区，输入w来将之前所有的操作写入磁盘生效，输入p来查看新创建的分区。
格式化根分区、启动交换分区
```bash
mkfs.ext4 /dev/sda1
swapon /dev/sda2（交换空间分区）
```
## 挂载分区
创建/boot文件夹并将引导分区挂载到上面
```bash
mount /dev/sda1 /mnt
```
## 配置镜像源
```bash
reflector -p https -c China --delay 3 --completion-percent 95 --sort score --save /etc/pacman.d/mirrorlist
```

## 安装必需的软件包
```bash
pacstrap -K /mnt base linux linux-firmware
```
## 配置系统
- Fstab
用以下命令生成 fstab 文件 (用 -U 或 -L 选项设置 UUID 或卷标)：
```bash
genfstab -U /mnt >> /mnt/etc/fstab
```
- Chroot
chroot 到新安装的系统：
```bash
arch-chroot /mnt
```
把操纵权交给我们新安装（或已经存在）的Linux系统，执行了这步以后，我们的操作都相当于在磁盘上新装的系统中进行。
> 这里顺便说一下，如果以后我们的系统出现了问题，只要插入U盘并启动， 将我们的系统根分区挂载到了/mnt下（如果有efi分区也要挂载到/mnt/boot下），再通过这条命令就可以进入我们的系统进行修复操作。

- 时区&本地化
```bash
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
hwclock --systohc
pacman -S vim terminus-font
vim /etc/locale.gen
#取消掉 en_US.UTF-8 UTF-8、zh_CN.UTF-8 UTF-8的注释
locale-gen
```
创建/etc/locale.conf文件，添加“LANG=en_US.UTF-8
”

- 网络配置
创建 /etc/hostname 文件：
> myhostname（主机名）

编辑 /etc/hosts 文件：
> 127.0.0.1	localhost
::1		localhost
127.0.1.1	myhostname.localdomain	myhostname

安装一个网络管理器
```bash
pacman -S networkmanager
systemctl enable NetworkManager.service
```
- Root 密码
```bash
passwd
```
> 命令是以#或\$开头的，这两个符号就对应着命令行中的命令提示符，#代表以Root用户执行命令，\$代表以普通用户执行命令

- 安装引导程序

```bash
#安装Intel-ucode（IntelCPU）
pacman -S intel-ucode
#安装Bootloader
pacman -S os-prober ntfs-3g grub
grub-install --target=i386-pc /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg
#检查menuentry部分是否有 Arch Linux 系统入口
vim /boot/grub/grub.cfg
```
- 重启
```bash
exit
swapoff /mnt/swapfile
umount -R /mnt
reboot
```
**安装成功!**

# 安装后配置及GUI配置
## 联网
```bash
nmcli device wifi list  # 列出可连接的 WiFi
nmcli device wifi connect "SSID" password "password"  # 连接 WiFi
```
## 创建拥有root权限的普通用户
```bash
useradd -m -G wheel username  # 创建用户，并为其创建home目录，将其加入 wheel 组
passwd username  # 为新用户设置密码
pacman -S sudo
ln -s /usr/bin/vim /usr/bin/vi
visudo # 用专门的visudo命令来编辑sudo的配置文件
```
取消“# %wheel ALL=(ALL)ALL”的引用后重启
```bash
reboot
···
sudo pacman -Syu  # 系统更新
```
## 图形界面的安装
```bash
# intel的集成显卡驱动
sudo pacman -S xf86-video-intel
# xorg
sudo pacman -S xorg
sudo pacman -S sddm # 桌面管理器
sudo systemctl enable sddm
sudo systemctl enable NetworkManager
```
Tip：Arch下用于管理系统服务的命令systemctl：
```bash
sudo systemctl start   服务名 （启动一项服务）
sudo systemctl stop    服务名 （停止一项服务）
sudo systemctl enable  服务名 （开机启动一项服务）
sudo systemctl disable 服务名 （取消开机启动一项服务）
```

## 本地化
- 中文字体
- 中文输入法

```bash
sudo pacman -S noto-fonts-cjk noto-fonts-emoji
sudo pacman -S fcitx fcitx5-im fcitx5-rime
```
## 配置终端代理（已安装clash）
```bash
sudo pacman -S proxychains-ng
vim /etc/proxychains.conf
```
修改最后一行为
> socks5 127.0.0.1 端口号

然后可以通过proxychains-ng 启动程序
```bash
$ proxychains <program>
```
## 更换终端
```bash
sudo pacman -S zsh  # 安装zsh
chsh -s /bin/zsh    # 配置zsh
chsh -s /bin/bash   # 换回bash
```
各种配置各取所需。

## tip
- 彩色logo
```bash
eofetch | lolcat 
```
- 蓝牙
```
bluetoothctl
```
- secrets
```
$ ls -l | nms
$ ls -l | nms -a           // Set auto-decrypt flag
$ ls -l | nms -s           // Set flag to mask space characters
$ ls -l | nms -f green     // Set foreground color to green
$ ls -l | nms -c           // Clear screen
$ nms -v                   // Display version
```