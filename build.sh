cd charts/
python3 exec.py
cd ..
rm -r docs/charts/*/
cp -r charts/charts/* docs/charts/

#./node-scraper/moneriote.sh
#mv node-scraper/open-nodes.md docs/network-info/

python3 -m mkdocs build
rm -r /var/www/data.aeon.wiki/*
cp -r site/* /var/www/data.aeon.wiki/
sudo service nginx restart
date

#/etc/nginx/sites-enabled/default
#/var/www/
