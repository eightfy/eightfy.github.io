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