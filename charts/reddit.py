
import praw
import reddit_keys
def scrape(start):
    reddit = praw.Reddit(
        client_id=reddit_keys.API["client_id"],
        client_secret=reddit_keys.API["client_secret"],
        password=reddit_keys.API["password"],
        user_agent=reddit_keys.API["user_agent"],
        username=reddit_keys.API["username"],
    )
    newdata=[]
    for submission in reddit.subreddit("aeon").new(limit=100000):
        if(submission.created_utc>start):
            newdata.append([submission.created_utc,submission.num_comments])
        else:
            break
    return newdata
