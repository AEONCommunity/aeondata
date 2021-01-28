
	            google.charts.load('current', {'packages':['corechart']});
                  google.charts.setOnLoadCallback(drawChart);

                  function drawChart() {
                    var data = new google.visualization.DataTable();
                    data.addColumn('string',"Date");
                    data.addColumn("number","$");
                    
                    data.addRows(
	                [['May, 2015', 0], ['June, 2015', 0], ['July, 2015', 0], ['August, 2015', 0], ['September, 2015', 0], ['October, 2015', 0], ['November, 2015', 0], ['December, 2015', 0], ['January, 2016', 0], ['February, 2016', 0], ['March, 2016', 0], ['April, 2016', 0], ['May, 2016', 0], ['June, 2016', 0], ['July, 2016', 0], ['August, 2016', 0], ['September, 2016', 0], ['October, 2016', 0], ['November, 2016', 0], ['December, 2016', 0], ['January, 2017', 0], ['February, 2017', 0], ['March, 2017', 0], ['April, 2017', 0], ['May, 2017', 0], ['June, 2017', 0], ['July, 2017', 0], ['August, 2017', 0], ['September, 2017', 0], ['October, 2017', 0], ['November, 2017', 0], ['December, 2017', 0], ['January, 2018', 0], ['February, 2018', 0], ['March, 2018', 0], ['April, 2018', 0], ['May, 2018', 0], ['June, 2018', 0], ['July, 2018', 0], ['August, 2018', 0], ['September, 2018', 0], ['October, 2018', 0], ['November, 2018', 0], ['December, 2018', 0], ['January, 2019', 0], ['February, 2019', 0], ['March, 2019', 0], ['April, 2019', 0], ['May, 2019', 0], ['June, 2019', 0], ['July, 2019', 0], ['August, 2019', 0], ['September, 2019', 0], ['October, 2019', 0], ['November, 2019', 0], ['December, 2019', 0], ['January, 2020', 0], ['February, 2020', 0], ['March, 2020', 0], ['April, 2020', 0], ['May, 2020', 0], ['June, 2020', 0], ['July, 2020', 0], ['August, 2020', 0], ['September, 2020', 0], ['October, 2020', 0], ['November, 2020', 0], ['December, 2020', 0], ['January, 2021', 0]] );

                  var options = {
                      title: "Aeon Transaction Fees in USD",
                      legend: { position: 'bottom' },
                      hAxis: {title:  "Date",
                                viewWindow: {min:0},
                      },
                      vAxis: {logScale : "true",
                                title: "$",
                                format: "scientific" },
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
                          options['hAxis']['viewWindow']['min'] = 57;
                       chart.draw(data, options);
                     };
                     document.getElementById('3Y').onclick = function() {
                          options['hAxis']['viewWindow']['min'] = 33;
                       chart.draw(data, options);
                     };
                     document.getElementById('all').onclick = function() {
                          options['hAxis']['viewWindow']['min'] = 0;
                       chart.draw(data, options);
                     };
                    chart.draw(data, options);
                }