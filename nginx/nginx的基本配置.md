---
title: nginx代理的基本配置
categories: nginx
tags: 学习笔记
---

##nginx的使用

* 首先安装nginx
* 用命令行在安装的nginx的目录下通过输入nginx可以启动nginx的服务
* 修改配置文件
* 找到conf文件夹 找到nginx.conf并打开，之后  把server中的内容都注释掉;
*  
		#user  nobody;
		# user root owner;
		worker_processes  1;
		
		#error_log  logs/error.log;
		#error_log  logs/error.log  notice;
		#error_log  logs/error.log  info;
		
		#pid        logs/nginx.pid;
		
		
		events {
		    worker_connections  1024;
		}
		
		
		http {
		    include       mime.types;
		    default_type  application/octet-stream;

		    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
		    #                  '$status $body_bytes_sent "$http_referer" '
		    #                  '"$http_user_agent" "$http_x_forwarded_for"';
		
		    #access_log  logs/access.log  main;
		
		    sendfile        on;
		    #tcp_nopush     on;
		
		    #keepalive_timeout  0;
		    keepalive_timeout  65;
		
		    #gzip  on;
		
		    include D:/nginx/conf/conf.d/*.conf;这是配置自定义的conf的的内容，引入的是conf.d下的所有的以.conf结尾的配置文件

		   #  server {
		   #      listen       8080;
		   #      server_name  localhost;
		   #
		   #      #charset koi8-r;
		   #
		   #      #access_log  logs/host.access.log  main;
		   #
		   #      location / {
		   #          root   html;
		   #          index  index.html index.htm;
		   #      }
		   #
		   #      #error_page  404              /404.html;
		   #
		   #      # redirect server error pages to the static page /50x.html
		   #      #
		   #      error_page   500 502 503 504  /50x.html;
		   #      location = /50x.html {
		   #          root   html;
		   #      }
		   #
		   #      # proxy the PHP scripts to Apache listening on 127.0.0.1:80
		   #      #
		   #      #location ~ \.php$ {
		   #      #    proxy_pass   http://127.0.0.1;
		   #      #}
		   #
		   #      # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
		   #      #
		   #      #location ~ \.php$ {
		   #      #    root           html;
		   #      #    fastcgi_pass   127.0.0.1:9000;
		   #      #    fastcgi_index  index.php;
		   #      #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
		   #      #    include        fastcgi_params;
		   #      #}
		   #
		   #      # deny access to .htaccess files, if Apache's document root
		   #      # concurs with nginx's one
		   #      #
		   #      #location ~ /\.ht {
		   #      #    deny  all;
		   #      #}
		   #  }
	
	
	    # another virtual host using mix of IP-, name-, and port-based configuration
	    #
	    #server {
	    #    listen       8000;
	    #    listen       somename:8080;
	    #    server_name  somename  alias  another.alias;
	
	    #    location / {
	    #        root   html;
	    #        index  index.html index.htm;
	    #    }
	    #}


	    # HTTPS server
	    #
	    #server {
	    #    listen       443 ssl;
	    #    server_name  localhost;
	
	    #    ssl_certificate      cert.pem;
	    #    ssl_certificate_key  cert.key;
	
	    #    ssl_session_cache    shared:SSL:1m;
	    #    ssl_session_timeout  5m;
	
	    #    ssl_ciphers  HIGH:!aNULL:!MD5;
	    #    ssl_prefer_server_ciphers  on;
	
	    #    location / {
	    #        root   html;
	    #        index  index.html index.htm;
	    #    }
	    #}
	
	}

在server的上面添加如下代码：

		include D:/nginx/conf/conf.d/*.conf;这是配置自定义的conf的的内容，引入的是conf.d下的所有的以.conf结尾的配置文件
conf.d文件夹是自己创建的

* 在conf.d的文件夹下创建一个以.conf结尾的文件，本例中创建的是hello.conf

		server{
		   listen 8080;//启动服务的端口号
		   server_name hello.dev;//服务的名子
		
		   location / {
			“/”代表直接进入的路径，在浏览器输入：hello.dev即可
		      root D:/HBuilder/bootstrap/back;//配置要加载的路径信息
		      index index.html idex.htm;//这是在上面路径下的index.html
		   }
		   location /v2 {
			//在浏览器输入：hello.dev/v2,创建一个v2的文件夹，
		      root D:/HBuilder/bootstrap/back;
		      index index.html idex.htm;
		   }
		   location \.(jpg|gif|png)$ {
		      expires 30d;
		   }
		   location /api {
			/配置反向代理服务，在浏览器输入hello.dev/api，它会自动走下边的代理路径，之后要配置代理的服务器
		      proxy_pass http://api.hello.dev;
		   }
		}
新建一个名为api.conf的文件夹，进行如下配置

		server{
		   listen 8080;
		   server_name api.hello.dev;
		   //要代理的内容在D:/nginx/mock路径之下，这样即可实现代理，实现数据的加载
		   root D:/nginx/mock;
		   index list.json;
		}

注意:(在启动服务之前要配置host，本例中配置的host如下：）

		127.0.0.1        hello.dev
		127.0.0.1        api.hello.dev