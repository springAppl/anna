小程序<br/>
在启动前端项目之前，需要先启动后端项目[kuboot](https://github.com/springAppl/kuboot)<br/>
对应的小程序管理前端[hulk](https://github.com/springAppl/hulk)<br/>

nginx配置:
1在本地/etc/hosts文件中添加
```
admin.mini.com 127.0.0.1
```
2创建  mini.conf
```
server {
listen 80;
server_name  www.news.com admin.mini.com;
location ^~ /api/ {
        proxy_pass http://127.0.0.1:8080;
}
location / {
        proxy_pass  http://127.0.0.1:3000;

}
}
```
3nginx.conf中包含 mini.conf
```
http {
  .....
  include path/mini.conf
}
```
在小程序开发工具的详情选项里关闭校验域名的选项。