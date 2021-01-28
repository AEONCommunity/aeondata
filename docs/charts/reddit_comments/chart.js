
	            google.charts.load('current', {'packages':['corechart']});
                  google.charts.setOnLoadCallback(drawChart);

                  function drawChart() {
                    var data = new google.visualization.DataTable();
                    data.addColumn('string',"Date");
                    data.addColumn("number","# of comments");
                    
                    data.addRows(
	                [['October, 2014', 0], ['November, 2014', 0], ['December, 2014', 0], ['January, 2015', 0], ['February, 2015', 0], ['March, 2015', 0], ['April, 2015', 0], ['May, 2015', 0], ['June, 2015', 0], ['July, 2015', 0], ['August, 2015', 0], ['September, 2015', 0], ['October, 2015', 0], ['November, 2015', 0], ['December, 2015', 0], ['January, 2016', 0], ['February, 2016', 143.0], ['March, 2016', 111.0], ['April, 2016', 73.0], ['May, 2016', 33.0], ['June, 2016', 4.0], ['July, 2016', 33.0], ['August, 2016', 91.0], ['September, 2016', 100.0], ['October, 2016', 29.0], ['November, 2016', 23.0], ['December, 2016', 56.0], ['January, 2017', 63.0], ['February, 2017', 186.0], ['March, 2017', 103.0], ['April, 2017', 278.0], ['May, 2017', 284.0], ['June, 2017', 1107.0], ['July, 2017', 713.0], ['August, 2017', 803.0], ['September, 2017', 1254.0], ['October, 2017', 2998.0], ['November, 2017', 2572.0], ['December, 2017', 4052.0], ['January, 2018', 2556.0], ['February, 2018', 2649.0], ['March, 2018', 1625.0], ['April, 2018', 1204.0], ['May, 2018', 916.0], ['June, 2018', 1194.0], ['July, 2018', 648.0], ['August, 2018', 333.0], ['September, 2018', 467.0], ['October, 2018', 254.0], ['November, 2018', 214.0], ['December, 2018', 232.0], ['January, 2019', 206.0], ['February, 2019', 108.0], ['March, 2019', 185.0], ['April, 2019', 106.0], ['May, 2019', 141.0], ['June, 2019', 159.0], ['July, 2019', 110.0], ['August, 2019', 40.0], ['September, 2019', 95.0], ['October, 2019', 71.0], ['November, 2019', 27.0], ['December, 2019', 25.0], ['January, 2020', 8.0], ['February, 2020', 32.0], ['March, 2020', 4.0], ['April, 2020', 50.0], ['May, 2020', 28.0], ['June, 2020', 25.0], ['July, 2020', 14.0], ['August, 2020', 43.0], ['September, 2020', 30.0], ['October, 2020', 44.0], ['November, 2020', 55.0], ['December, 2020', 31.0], ['January, 2021', 112.0]] );

                  var options = {
                      title: "/r/aeon Monthly Comment Count",
                      legend: { position: 'bottom' },
                      hAxis: {title:  "Date",
                                viewWindow: {min:0},
                      },
                      vAxis: {logScale : "none",
                                title: "# of comments",
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