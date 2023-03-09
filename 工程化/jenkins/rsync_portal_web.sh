#!/bin/bash
rsync -av /home/wwwroot/portal-web/*  root@10.6.2.9:/home/wwwroot/portal-web/  --exclude-from=/home/wwwroot/rsync_exclude/exclude_portal_web.conf 

#rsync -av /home/wwwroot/pm2.*.json  root@10.6.2.9:/home/wwwroot/
#qq5411123