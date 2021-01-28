
	            google.charts.load('current', {'packages':['corechart']});
                  google.charts.setOnLoadCallback(drawChart);

                  function drawChart() {
                    var data = new google.visualization.DataTable();
                    data.addColumn('string',"Date");
                    data.addColumn("number","Coins");
                    
                    data.addRows(
	                [['June, 2014', 0.0017647312204588969], ['July, 2014', 0.00520947878306485], ['August, 2014', 0.005328026285878673], ['September, 2014', 0.0], ['August, 2014', 0.0], ['September, 2014', 0.0], ['August, 2014', 0.0], ['September, 2014', 0.004674031769598289], ['October, 2014', 0.0045865321764232475], ['November, 2014', 0.0041246218734447265], ['December, 2014', 0.004143902342402325], ['January, 2015', 0.0004356775435487195], ['February, 2015', 0.0002247089681294118], ['March, 2015', 0.0029903841517735855], ['April, 2015', 0.00017369470047721872], ['May, 2015', 0.0001567025816475815], ['June, 2015', 0.0017661273530529043], ['July, 2015', 0.00031496616737398004], ['August, 2015', 0.0028941740656616404], ['September, 2015', 0.009184169192735285], ['October, 2015', 0.057548956517301506], ['November, 2015', 0.06296145951201072], ['December, 2015', 0.0471108968414077], ['January, 2016', 0.08723536564294807], ['February, 2016', 0.06432463803562796], ['March, 2016', 0.04796804447257794], ['April, 2016', 0.1105424386018474], ['May, 2016', 0.08553593465824925], ['June, 2016', 0.09489121992455873], ['July, 2016', 0.03941021967190728], ['August, 2016', 0.03170520773714501], ['September, 2016', 0.014527070145869308], ['October, 2016', 0.013922556473943071], ['November, 2016', 0.012831275821208797], ['December, 2016', 0.013124294666118568], ['January, 2017', 0.008729388361345427], ['February, 2017', 0.011582029321428376], ['March, 2017', 0.02012550891970259], ['April, 2017', 0.007867261313798425], ['May, 2017', 0.008613268357757994], ['June, 2017', 0.0136755990981466], ['July, 2017', 0.013720925949468906], ['August, 2017', 0.011841652451142375], ['September, 2017', 0.012814548618466098], ['October, 2017', 0.02003427414972149], ['November, 2017', 0.01698659015089355], ['December, 2017', 0.02138231814109313], ['January, 2018', 0.0729094815523295], ['February, 2018', 0.01695936094010364], ['March, 2018', 0.017681803687537946], ['April, 2018', 0.016056035326672997], ['May, 2018', 0.015496699289526775], ['June, 2018', 0.011900559979565338], ['July, 2018', 0.008123337771726462], ['August, 2018', 0.007299834449708201], ['September, 2018', 0.009312515288890296], ['October, 2018', 0.007181126006759803], ['November, 2018', 0.0072565729412698635], ['December, 2018', 0.00839955921653933], ['January, 2019', 0.006250987039667124], ['February, 2019', 0.006507052883660707], ['March, 2019', 0.00802100115392247], ['April, 2019', 0.009785446088005882], ['May, 2019', 0.01435222257807734], ['June, 2019', 0.009261716888268772], ['July, 2019', 0.007501763551368315], ['August, 2019', 0.008102661983836476], ['September, 2019', 0.005671340667397169], ['October, 2019', 0.007017046843225733], ['November, 2019', 0.005086335087102505], ['December, 2019', 0.007508953811169572], ['January, 2020', 0.007115892221352194], ['February, 2020', 0.005803746913359381], ['March, 2020', 0.004845155736258254], ['April, 2020', 0.01021224340181692], ['May, 2020', 0.006755373202558356], ['June, 2020', 0.006071095613813982], ['July, 2020', 0.005989838097000004], ['August, 2020', 0.007088665955873508], ['September, 2020', 0.006056038222290115], ['October, 2020', 0.005794064673601335], ['November, 2020', 0.007568633517355661], ['December, 2020', 0.00724650839213395], ['January, 2021', 0.007327388726937677]] );

                  var options = {
                      title: "Aeon Average Transaction Fees",
                      legend: { position: 'bottom' },
                      hAxis: {title:  "Date",
                                viewWindow: {min:0},
                      },
                      vAxis: {logScale : "none",
                                title: "Coins",
                                format: "decimal" },
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