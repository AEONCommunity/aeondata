
	            google.charts.load('current', {'packages':['corechart']});
                  google.charts.setOnLoadCallback(drawChart);

                  function drawChart() {
                    var data = new google.visualization.DataTable();
                    data.addColumn('string',"Date");
                    data.addColumn("number","$");
                    
                    data.addRows(
	                [['May, 2015', 0.0], ['June, 2015', 0.0], ['July, 2015', 0.0], ['August, 2015', 4138.463239333196], ['September, 2015', 2123.081852646679], ['October, 2015', 2867.34961362252], ['November, 2015', 5134.338713333623], ['December, 2015', 3780.115200219682], ['January, 2016', 3753.002162532798], ['February, 2016', 3957.10093188058], ['March, 2016', 5585.475479534792], ['April, 2016', 3617.4438526273525], ['May, 2016', 2668.847492077533], ['June, 2016', 2122.7570157743235], ['July, 2016', 4096.682149629143], ['August, 2016', 8660.141428740348], ['September, 2016', 25528.73004326431], ['October, 2016', 14499.792540709443], ['November, 2016', 9631.79812862398], ['December, 2016', 14483.184893293927], ['January, 2017', 26593.37466613263], ['February, 2017', 28649.322978219254], ['March, 2017', 30189.029786921226], ['April, 2017', 41285.96852541128], ['May, 2017', 60900.31437462335], ['June, 2017', 117731.23511720715], ['July, 2017', 80825.522331091], ['August, 2017', 106069.61782791802], ['September, 2017', 141781.90020695838], ['October, 2017', 276761.7709556968], ['November, 2017', 291562.6973138855], ['December, 2017', 552621.2609415019], ['January, 2018', 771280.8785673495], ['February, 2018', 370810.61284844246], ['March, 2018', 290713.67196955846], ['April, 2018', 204721.85511654426], ['May, 2018', 204822.93595413433], ['June, 2018', 148624.29590884826], ['July, 2018', 146344.893156], ['August, 2018', 87052.90136531941], ['September, 2018', 70689.66129444], ['October, 2018', 48213.559223860764], ['November, 2018', 40850.9714445066], ['December, 2018', 23649.38795479291], ['January, 2019', 22529.12694116175], ['February, 2019', 19692.510980423966], ['March, 2019', 21516.752237766585], ['April, 2019', 25277.99527085698], ['May, 2019', 33228.15172388977], ['June, 2019', 58421.025590409365], ['July, 2019', 44049.06183600652], ['August, 2019', 39796.29458131331], ['September, 2019', 26517.851982501015], ['October, 2019', 10853.04299622742], ['November, 2019', 10559.534586311294], ['December, 2019', 8286.934326736531], ['January, 2020', 7204.017657196627], ['February, 2020', 8046.386808293282], ['March, 2020', 5095.488950114429], ['April, 2020', 11789.629438869011], ['May, 2020', 17477.49155244826], ['June, 2020', 20269.143229102425], ['July, 2020', 14914.308387645153], ['August, 2020', 18450.822358177968], ['September, 2020', 13582.965448304818], ['October, 2020', 12576.030149628721], ['November, 2020', 11506.797429206224], ['December, 2020', 9443.684764697888], ['January, 2021', 5031.779374555233]] );

                  var options = {
                      title: "Aeon Miner's Revenue (Emission + Fees)",
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