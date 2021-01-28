from parser import parse
from file_writer import build_chart
from data import *
from datetime import datetime
import gc
import time
import os.path


def block_charts(block_data):
    timestamp = ["new Date("+str(int(x*1000))+")" for x in block_data.pop(0)[1:]]
    while block_data:
        gc.collect()
        yaxis = block_data.pop()
        key = yaxis.pop(0)
        if(key=="block_difficulty"):
            build_chart(timestamp,yaxis,key)
            build_chart(timestamp,yaxis,"block_difficulty_old")
        build_chart(timestamp,yaxis,key)

def month_charts(month_data):
    timestamp = [datetime.fromtimestamp(x).strftime('%B, %Y') for x in month_data.pop(0)[1:]]
    while month_data:
        gc.collect()
        yaxis = month_data.pop()
        key = yaxis.pop(0)
        build_chart(timestamp,yaxis,key)
        
cache_blocks()
cache_price()
cache_reddit()
block_data,month_data = parse()
block_charts(block_data)
month_charts(month_data)


















    
    
    
