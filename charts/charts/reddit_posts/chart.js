
	            google.charts.load('current', {'packages':['corechart']});
                  google.charts.setOnLoadCallback(drawChart);

                  function drawChart() {
                    var data = new google.visualization.DataTable();
                    data.addColumn('string',"Date");
                    data.addColumn("number","# of posts");
                    
                    data.addRows(
	                [['October, 2014', 0], ['November, 2014', 0], ['December, 2014', 0], ['January, 2015', 0], ['February, 2015', 0], ['March, 2015', 0], ['April, 2015', 0], ['May, 2015', 0], ['June, 2015', 0], ['July, 2015', 0], ['August, 2015', 0], ['September, 2015', 0], ['October, 2015', 0], ['November, 2015', 0], ['December, 2015', 0], ['January, 2016', 0], ['February, 2016', 28], ['March, 2016', 29], ['April, 2016', 19], ['May, 2016', 6], ['June, 2016', 5], ['July, 2016', 9], ['August, 2016', 39], ['September, 2016', 26], ['October, 2016', 8], ['November, 2016', 11], ['December, 2016', 5], ['January, 2017', 18], ['February, 2017', 42], ['March, 2017', 22], ['April, 2017', 49], ['May, 2017', 50], ['June, 2017', 128], ['July, 2017', 82], ['August, 2017', 107], ['September, 2017', 144], ['October, 2017', 373], ['November, 2017', 290], ['December, 2017', 433], ['January, 2018', 301], ['February, 2018', 256], ['March, 2018', 135], ['April, 2018', 84], ['May, 2018', 62], ['June, 2018', 125], ['July, 2018', 46], ['August, 2018', 33], ['September, 2018', 46], ['October, 2018', 32], ['November, 2018', 32], ['December, 2018', 31], ['January, 2019', 29], ['February, 2019', 16], ['March, 2019', 18], ['April, 2019', 17], ['May, 2019', 17], ['June, 2019', 21], ['July, 2019', 14], ['August, 2019', 10], ['September, 2019', 21], ['October, 2019', 11], ['November, 2019', 7], ['December, 2019', 5], ['January, 2020', 3], ['February, 2020', 3], ['March, 2020', 2], ['April, 2020', 7], ['May, 2020', 6], ['June, 2020', 5], ['July, 2020', 3], ['August, 2020', 8], ['September, 2020', 7], ['October, 2020', 9], ['November, 2020', 9], ['December, 2020', 8], ['January, 2021', 13]] );

                  var options = {
                      title: "/r/aeon Monthly Post Count",
                      legend: { position: 'bottom' },
                      hAxis: {title:  "Date",
                                viewWindow: {min:0},
                      },
                      vAxis: {logScale : "none",
                                title: "# of posts",
                                format: "long" },
                      colors: ['#34515e'],
                    };
                    var chart = new google.visualization.ColumnChart(document.getElementById('line_div'));
                    
                     
                    
                     document.getElementById('linear-scale').onclick = function() {
                      options['vAxis']['logScale'] = "none";
                       chart.draw(data, options);
                     };
                     document.getElementById('log-scale').onclick = function() {
                          options['vAxis']['logScale'] = "true";
                       chart.draw(data, options);
                     };
                     document.getElementById('1Y').onclick = function() {
                          options['hAxis']['viewWindow']['min'] = 64;
                       chart.draw(data, options);
                     };
                     document.getElementById('3Y').onclick = function() {
                          options['hAxis']['viewWindow']['min'] = 40;
                       chart.draw(data, options);
                     };
                     document.getElementById('all').onclick = function() {
                          options['hAxis']['viewWindow']['min'] = 0;
                       chart.draw(data, options);
                     };
                    chart.draw(data, options);
                }