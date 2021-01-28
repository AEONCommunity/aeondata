params = {
    'block_count_24h': {
        'title' : 'Aeon Block Count (Previous 24h)',
        'file-name' : 'block_count_24h',
        'x-axis' : 'date',
        'y-axis' : 'Blocks',
        'lineWidth' : '1',
        'logScale' : 'none',
        'curveType' : 'none',
        'format' : 'decimal',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '720',
        'end' : None,
    } , 
    'block_difficulty': {
        'title' : 'Aeon Difficulty (KangarooTwelve)',
        'file-name' : 'block_difficulty',
        'x-axis' : 'Date',
        'y-axis' : 'Hashes/Block',
        'logScale' : 'none',
        'lineWidth' : '1',
        'curveType' : 'function',
        'format' : 'scientific',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '75',
        'start' : '1146560',
        'end' : None,
    } , 
    'block_difficulty_old': {
        'title' : 'Aeon Difficulty (Early Algorithms)',
        'file-name' : 'block_difficulty_old',
        'x-axis' : 'Date',
        'y-axis' : 'Hashes/Block',
        'logScale' : 'true',
        'lineWidth' : '1',
        'curveType' : 'function',
        'format' : 'scientific',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '720',
        'end' : '1146200',
    } , 
    'block_height': {
        'title' : 'Aeon Block Height',
        'file-name' : 'block_height',
        'x-axis' : 'Date',
        'y-axis' : 'Blocks',
        'logScale' : 'none',
        'lineWidth' : '1',
        'curveType' : 'function',
        'format' : 'long',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '0',
        'end' : None,
    } , 
    'block_reward': {
        'title' : "Aeon Block Reward (Per Block)",
        'file-name' : 'block_reward',
        'x-axis' : 'Date',
        'y-axis' : 'Coins',
        'logScale' : 'true',
        'lineWidth' : '1',
        'curveType' : 'function',
        'format' : 'scientific',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '0',
        'end' : None,
    } , 
    'block_size_cum': {
        'title' : 'Aeon Blockchain Size',
        'file-name' : 'block_size_cum',
        'x-axis' : 'Date',
        'y-axis' : 'b',
        'logScale' : 'none',
        'lineWidth' : '1',
        'curveType' : 'function',
        'format' : 'long',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '0',
        'end' : None,
    } , 
    'block_size': {
        'title' : 'Aeon Blockchain Size Monthly Growth',
        'file-name' : 'block_size',
        'x-axis' : 'Date',
        'y-axis' : 'b',
        'logScale' : 'none',
        'curveType' : 'none',
        'lineWidth' : '1',
        'format' : 'decimal',
        'type': 'number',
        'chartType': 'ColumnChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '8',
        'end' : None,
    } , 
    'fee': {
        'title' : 'Aeon Average Transaction Fees',
        'file-name' : 'fee',
        'x-axis' : 'Date',
        'y-axis' : 'Coins',
        'lineWidth' : '1',
        'logScale' : 'none',
        'curveType' : 'function',
        'format' : 'decimal',
        'type': 'number',
        'chartType': 'ColumnChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '0',
        'end' : None,
    } , 
    'fee_usd': {
        'title' : 'Aeon Transaction Fees in USD',
        'file-name' : 'fee_usd',
        'x-axis' : 'Date',
        'y-axis' : '$',
        'logScale' : 'true',
        'lineWidth' : '1',
        'curveType' : 'function',
        'format' : 'scientific',
        'type': 'number',
        'chartType': 'ColumnChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '15',
        'end' : None,
    } , 
    'inflation_1Y': {
        'title' : 'Inflation Rate',
        'file-name' : 'inflation_1Y',
        'x-axis' : 'Date',
        'y-axis' : '% Coins Created in Past Year',
        'logScale' : 'none',
        'lineWidth' : '1',
        'curveType' : 'function',
        'format' : 'percent',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '0',
        'end' : None,
    } ,
    'inputs': {
        'title' : 'Aeon Transaction Inputs',
        'file-name' : 'inputs',
        'x-axis' : 'Date',
        'y-axis' : '#',
        'logScale' : 'true',
        'lineWidth' : '1',
        'curveType' : 'function',
        'format' : 'scientific',
        'type': 'number',
        'chartType': 'ColumnChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '8',
        'end' : None,
    } , 
    'marketcap': {
        'title' : 'Aeon Marketcap Value of Total Supply',
        'file-name' : 'marketcap',
        'x-axis' : 'Date',
        'y-axis' : '$',
        'logScale' : 'true',
        'lineWidth' : '1',
        'curveType' : 'none',
        'format' : 'scientific',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '595000',
        'end' : None,
    } , 
    'marketcap_btc': {
        'title' : 'Aeon Marketcap Value of Total Supply Measured in Bitcoins',
        'file-name' : 'marketcap_btc',
        'x-axis' : 'Date',
        'y-axis' : 'BTC',
        'logScale' : 'true',
        'lineWidth' : '1',
        'curveType' : 'none',
        'format' : 'scientific',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '595000',
        'end' : None,
    } , 
    'marketcap_xmr': {
        'title' : 'Aeon Marketcap Value of Total Supply Measured in Monero',
        'file-name' : 'marketcap_xmr',
        'x-axis' : 'Date',
        'y-axis' : 'XMR',
        'logScale' : 'true',
        'lineWidth' : '1',
        'curveType' : 'none',
        'format' : 'scientific',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '595000',
        'end' : None,
    } , 
    'miner_revenue': {
        'title' : "Aeon Miner's Revenue (Emission + Fees)",
        'file-name' : 'miner_revenue',
        'x-axis' : 'Date',
        'y-axis' : '$',
        'logScale' : 'true',
        'lineWidth' : '1',
        'curveType' : 'function',
        'format' : 'scientific',
        'type': 'number',
        'chartType': 'ColumnChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '15',
        'end' : None,
    } ,
    'nonce_dist': {
        'title' : 'Aeon Nonce Randomness (100 is most random, 0 is less random)',
        'file-name' : 'nonce_dist',
        'x-axis' : 'Date',
        'y-axis' : 'Uniformity',
        'lineWidth' : '1',
        'logScale' : 'none',
        'curveType' : 'function',
        'format' : 'percent',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '0',
        'end' : None,
    } , 
    'nonce': {
        'title' : 'Aeon Nonces',
        'file-name' : 'nonce',
        'x-axis' : 'Date',
        'y-axis' : 'Nonce Value Normalized by Maximum Nonce Value',
        'logScale' : 'none',
        'lineWidth' : '0',
        'pointSize' : '0.025',
        'curveType' : 'none',
        'format' : 'percent',
        'type': 'number',
        'chartType': 'ScatterChart',
        'interval' : '1',
        'start' : '-21600',
        'end' : None,
    } , 
    'outputs': {
        'title' : 'Aeon Transaction Outputs',
        'file-name' : 'outputs',
        'x-axis' : 'Date',
        'y-axis' : '#',
        'logScale' : 'true',
        'lineWidth' : '1',
        'curveType' : 'function',
        'format' : 'scientific',
        'type': 'number',
        'chartType': 'ColumnChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '8',
        'end' : None,
    } , 
    'outputs_inputs': {
        'title' : 'Aeon Transaction Outputs minus Inputs',
        'file-name' : 'outputs_inputs',
        'x-axis' : 'Date',
        'y-axis' : '#',
        'logScale' : 'none',
        'lineWidth' : '1',
        'curveType' : 'function',
        'format' : 'scientific',
        'type': 'number',
        'chartType': 'ColumnChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '2',
        'end' : None,
    } , 
    'price': {
        'title' : 'Aeon Price in Dollars',
        'file-name' : 'price',
        'x-axis' : 'Date',
        'y-axis' : '$',
        'logScale' : 'true',
        'lineWidth' : '1',
        'curveType' : 'none',
        'format' : 'scientific',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '595000',
        'end' : None,
    } , 
    'price_btc': {
        'title' : 'Aeon Price in Bitcoins',
        'file-name' : 'price_btc',
        'x-axis' : 'Date',
        'y-axis' : 'BTC',
        'logScale' : 'true',
        'lineWidth' : '1',
        'curveType' : 'none',
        'format' : 'scientific',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '595000',
        'end' : None,
        'tooltip-format' : {"fractionDigits": 8},
    } , 
    'price_xmr': {
        'title' : 'Aeon Price in Monero',
        'file-name' : 'price_xmr',
        'x-axis' : 'Date',
        'y-axis' : 'XMR',
        'logScale' : 'true',
        'lineWidth' : '1',
        'curveType' : 'none',
        'format' : 'scientific',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '595000',
        'end' : None,
        'tooltip-format' : {"fractionDigits": 8},
    } , 
    'reddit_posts': {
        'title' : '/r/aeon Monthly Post Count',
        'file-name' : 'reddit_posts',
        'x-axis' : 'Date',
        'y-axis' : '# of posts',
        'lineWidth' : '1',
        'logScale' : 'none',
        'curveType' : 'function',
        'format' : 'long',
        'type': 'number',
        'chartType': 'ColumnChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '8',
        'end' : None,
    } , 
    'reddit_comments': {
        'title' : '/r/aeon Monthly Comment Count',
        'file-name' : 'reddit_comments',
        'x-axis' : 'Date',
        'y-axis' : '# of comments',
        'lineWidth' : '1',
        'logScale' : 'none',
        'curveType' : 'function',
        'format' : 'long',
        'type': 'number',
        'chartType': 'ColumnChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '8',
        'end' : None,
    } , 
    'supply_circulating': {
        'title' : 'Aeon Circulating Supply',
        'file-name' : 'supply_circulating',
        'x-axis' : 'Date',
        'y-axis' : 'Coins',
        'logScale' : 'none',
        'lineWidth' : '1',
        'curveType' : 'function',
        'format' : 'long',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '0',
        'end' : None,
    } , 
    'supply_locked': {
        'title' : 'Locked Aeon Supply',
        'file-name' : 'supply_locked',
        'x-axis' : 'Date',
        'y-axis' : 'Coins',
        'logScale' : 'none',
        'lineWidth' : '1',
        'curveType' : 'none',
        'format' : 'decimal',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '0',
        'end' : None,
    } ,
    'supply_total': {
        'title' : 'Aeon Total Supply',
        'file-name' : 'supply_total',
        'x-axis' : 'Date',
        'y-axis' : 'Coins',
        'logScale' : 'none',
        'lineWidth' : '1',
        'curveType' : 'function',
        'format' : 'long',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '0',
        'end' : None,
    } , 
    'tx': {
        'title' : 'Aeon Transactions',
        'file-name' : 'tx',
        'x-axis' : 'Date',
        'y-axis' : 'Transactions',
        'lineWidth' : '1',
        'logScale' : 'none',
        'curveType' : 'function',
        'format' : 'long',
        'type': 'number',
        'chartType': 'ColumnChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '8',
        'end' : None,
    } , 
    'version': {
        'title' : 'Aeon Version',
        'file-name' : 'version',
        'x-axis' : 'Date',
        'y-axis' : '#',
        'logScale' : 'none',
        'curveType' : 'none',
        'lineWidth' : '1',
        'format' : '##.#',
        'type': 'number',
        'chartType': 'LineChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '0',
        'end' : None,
    } , 
    'volume': {
        'title' : 'Aeon Transaction Output Volume',
        'file-name' : 'volume',
        'x-axis' : 'Date',
        'y-axis' : 'Coins',
        'logScale' : 'none',
        'lineWidth' : '1',
        'curveType' : 'none',
        'format' : 'long',
        'type': 'number',
        'chartType': 'ColumnChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '0',
        'end' : None,
    } , 
    'tx_avg': {
        'title' : 'Aeon Average Transaction Output',
        'file-name' : 'tx_avg',
        'x-axis' : 'Date',
        'y-axis' : 'Coins',
        'logScale' : 'none',
        'lineWidth' : '1',
        'curveType' : 'none',
        'format' : 'long',
        'type': 'number',
        'chartType': 'ColumnChart',
        'pointSize' : '0',
        'interval' : '100',
        'start' : '0',
        'end' : None,
    } , 
}















