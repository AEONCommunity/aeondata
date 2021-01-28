python3 -m mkdocs build
rm -r /var/www/data.aeon.wiki/*
cp -r site/* /var/www/data.aeon.wiki/
sudo service nginx restart
date

#/etc/nginx/sites-enabled/default
#/var/www/
