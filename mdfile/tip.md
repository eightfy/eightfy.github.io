- 调出窗口一览（不切换）
Ctrl + Alt + Tab
- 切换窗口
Alt + Tab
- 命令行验证校园网：
> curl 'http://101.76.193.1/cgi-bin/get_challenge' --data 'action=login&username=<学号>&password=<密码>'
- 删除文件元数据信息
> exiftool -all= <filename>
- 去除浏览器背景、水印

```javascript
// 去除所有body背景颜色
document.body.style.backgroundColor = "transparent";

// 去除所有元素的背景颜色/图片
var elements = document.getElementsByTagName("*");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = "transparent";
  elements[i].style.backgroundImage = "none";
}
```
- iptables开放端口
```bash
vim /etc/iptables/rules.v4
iptables-restore < /etc/iptables/rules.v4
```

- i3
```bash
sudo startx /usr/bin/i3
```

- win下批量修改当前目录文件+随机名称
```bat
@echo off
setlocal enabledelayedexpansion
for %%f in (*) do (
  set "fname=%%~nf"
  set "fname=!fname:[^a-zA-Z0-9_=+^&',`\s]=-!"
  set "newname=!random!-!fname!.gif"
  ren "%%~f" "!newname!"
)
endlocal
```

- 破解pdf
```bash
gswin64.exe -sDEVICE=pdfwrite  -o "1.pdf" "img.pdf"
```

- conda 基本操作
```bash
conda env list   // 查看已创建环境
conda env remove --name <环境名称>   // 删除环境
conda list     // 进入环境后查看包列表
conda list | grep numpy    // 查询包（numpy）
```

- pandoc md2pdf
``` bash
pandoc Untitled.md -o srs.pdf --pdf-engine=xelatex -V CJKmainfont=‘Microsoft YaHei’
```

- linux清理文件：列出当前目录最大的十个文件
```bash
du -ah . | sort -hr | head -n 10
```