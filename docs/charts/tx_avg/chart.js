
	            google.charts.load('current', {'packages':['corechart']});
                  google.charts.setOnLoadCallback(drawChart);

                  function drawChart() {
                    var data = new google.visualization.DataTable();
                    data.addColumn('string',"Date");
                    data.addColumn("number","Coins");
                    
                    data.addRows(
	                [['June, 2014', 5.550343138012582], ['July, 2014', 13.174260822334487], ['August, 2014', 58.568410028633295], ['September, 2014', 0], ['August, 2014', 0], ['September, 2014', 0], ['August, 2014', 0], ['September, 2014', 162.7793205339613], ['October, 2014', 220.60003778524197], ['November, 2014', 172.03160664496758], ['December, 2014', 358.6268046046804], ['January, 2015', 432.82630270213815], ['February, 2015', 1046.8345422439731], ['March, 2015', 2894.3912201525204], ['April, 2015', 293.20291873960105], ['May, 2015', 396.53983535520416], ['June, 2015', 292.0731479513883], ['July, 2015', 462.711389159598], ['August, 2015', 223.68276121865114], ['September, 2015', 257.79531528085874], ['October, 2015', 1449.7305196391458], ['November, 2015', 901.1604211467206], ['December, 2015', 1658.3263827371632], ['January, 2016', 1382.617018510973], ['February, 2016', 1122.7714886395593], ['March, 2016', 383.8201756226089], ['April, 2016', 839.2496716017059], ['May, 2016', 457.15648063962755], ['June, 2016', 552.2517596118997], ['July, 2016', 449.14793629203547], ['August, 2016', 434.4975036863091], ['September, 2016', 354.4180396158918], ['October, 2016', 283.88927860701597], ['November, 2016', 374.189723502429], ['December, 2016', 150.27488298163703], ['January, 2017', 107.81527290048543], ['February, 2017', 261.3268952375837], ['March, 2017', 177.27383435959143], ['April, 2017', 135.79360506191748], ['May, 2017', 177.4824303923785], ['June, 2017', 121.47841151891836], ['July, 2017', 98.84024540206745], ['August, 2017', 57.93370635699763], ['September, 2017', 59.1313935481569], ['October, 2017', 185.8340049192131], ['November, 2017', 211.01420012506316], ['December, 2017', 173.03214402054095], ['January, 2018', 138.61922449033443], ['February, 2018', 148.21473857659396], ['March, 2018', 180.8405050555714], ['April, 2018', 56.60422758738704], ['May, 2018', 82.47713619649811], ['June, 2018', 35.45679864953411], ['July, 2018', 37.89597378029887], ['August, 2018', 63.89260424775588], ['September, 2018', 112.56403905553368], ['October, 2018', 78.55715046449026], ['November, 2018', 48.63005120062758], ['December, 2018', 75.26902293621968], ['January, 2019', 88.18420095566796], ['February, 2019', 45.12484007343936], ['March, 2019', 45.84651214604594], ['April, 2019', 146.05929500051192], ['May, 2019', 169.09131275655264], ['June, 2019', 199.4338003342954], ['July, 2019', 154.04849441163566], ['August, 2019', 236.8616485966158], ['September, 2019', 197.59164662452483], ['October, 2019', 217.68663227111236], ['November, 2019', 39.064415331579575], ['December, 2019', 239.33231073989919], ['January, 2020', 81.50546505642447], ['February, 2020', 132.43073446425348], ['March, 2020', 99.48033846648406], ['April, 2020', 520.0150651099145], ['May, 2020', 219.83256601933988], ['June, 2020', 164.34558533402506], ['July, 2020', 235.126018854499], ['August, 2020', 269.6598066926798], ['September, 2020', 182.18663289762367], ['October, 2020', 279.5612655128059], ['November, 2020', 246.7263206449858], ['December, 2020', 306.79457539629533], ['January, 2021', 366.95010464260224]] );

                  var options = {
                      title: "Aeon Average Transaction Output",
                      legend: { position: 'bottom' },
                      hAxis: {title:  "Date",
                                viewWindow: {min:0},
                      },
                      vAxis: {logScale : "none",
                                title: "Coins",
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
                          options['hAxis']['viewWindow']['min'] = 72;
                       chart.draw(data, options);
                     };
                     document.getElementById('3Y').onclick = function() {
                          options['hAxis']['viewWindow']['min'] = 48;
                       chart.draw(data, options);
                     };
                     document.getElementById('all').onclick = function() {
                          options['hAxis']['viewWindow']['min'] = 0;
                       chart.draw(data, options);
                     };
                    chart.draw(data, options);
                }