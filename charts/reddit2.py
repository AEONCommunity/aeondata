import time
import urllib.request, json 
from csv import reader, writer
def scrape(start):
    with urllib.request.urlopen("https://api.pushshift.io/reddit/search/submission/?subreddit=aeon&before="+str(start)+"&size=500") as url:
        data = json.loads(url.read().decode())
    return data
   
start = 1520213851
new = []
while True:    
    data = scrape(start)["data"]
    for post in data:
        new.append([post['created_utc'],post['num_comments']])
    start = data[-1]['created_utc']
    time.sleep(.33)
    if(start<=1455813718):
        break
    print(start)
    

with open("reddit"+".csv", 'a+') as f:
    write = writer(f) 
    write.writerows(new[::-1])
