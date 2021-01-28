from params import params
import datetime
import os
def build_chart(x_data, y_data, key):
    if not os.path.exists("charts/"+key):
        os.makedirs("charts/"+key)
    if params[key]['end'] != None:
        x_data = x_data[int(params[key]['start']):int(params[key]['end'])]
        y_data = y_data[int(params[key]['start']):int(params[key]['end'])]
    else:
        x_data = x_data[int(params[key]['start']):]
        y_data = y_data[int(params[key]['start']):]
    with open("charts/"+key+'/chart.js','w',encoding='utf-8') as f:
        if params[key]['chartType'] != 'ColumnChart':
            f.write(
                """
	            google.charts.load('current', {'packages':['corechart']});
                  google.charts.setOnLoadCallback(drawChart);

                  function drawChart() {
                    var data = new google.visualization.DataTable();
                    data.addColumn('date',""" + "\""+ params[key]['x-axis'] +"\""+ """);
                    data.addColumn(""" + "\""+ params[key]['type'] +"\""+ """,""" + "\""+ params[key]['y-axis'] +"\""+ """);
                    data.addRows(
	                """
            )
            f.write(str([list(i) for i in zip(*[x_data,y_data])][::int(params[key]['interval'])]).replace("'",""))
            f.write(""" );
                  var options = {
                      title: """ + "\""+ params[key]['title'] +"\""+ """,
                      curveType: """ + "'"+ params[key]['curveType'] +"'"+ """,
                      legend: { position: 'bottom' },
                      lineWidth: """ + "'"+ params[key]['lineWidth'] +"'"+ """,
                      hAxis: {title:  """ + "\""+ params[key]['x-axis'] +"\""+ """,
                                viewWindow: {min:"""+x_data[0]+"""},
                      },
                      vAxis: {logScale : """ + "\""+ params[key]['logScale'] +"\""+ """,
                                title: """ + "\""+ params[key]['y-axis'] +"\""+ """,
                                format: """ + "\""+ params[key]['format'] +"\""+ """ },
                      pointSize: """ + "\""+ params[key]['pointSize'] +"\""+ """,
                      colors: ['#34515e'],
                    }
                    var chart = new google.visualization.LineChart(document.getElementById('line_div'));
                    """
            )
            if "tooltip-format" in params[key]:
                f.write(""" var formatter = new google .visualization.NumberFormat({ """)
                for key1 in params[key]["tooltip-format"]:
                    f.write(key1 + """ : '"""+ str(params[key]["tooltip-format"][key1]) + """',""")
                f.write("""});
                formatter.format(data,1);
                """)
            f.write(""" 
                    
                     document.getElementById('linear-scale').onclick = function() {
                          options['vAxis']['logScale'] = "none";
                          chart.draw(data, options);
                     };
                     document.getElementById('log-scale').onclick = function() {
                          options['vAxis']['logScale'] = "true";
                          chart.draw(data, options);
                     };
                     document.getElementById('1Y').onclick = function() {
                          options['hAxis']['viewWindow']['min'] = """+"new Date("+str(int(((datetime.date.today()-datetime.timedelta(365)-datetime.date(1970,1,1))/datetime.timedelta(seconds=1))*1000))+")"+""";
                       chart.draw(data, options);
                     };
                     document.getElementById('3Y').onclick = function() {
                          options['hAxis']['viewWindow']['min'] = """+"new Date("+str(int(((datetime.date.today()-datetime.timedelta(365*3)-datetime.date(1970,1,1))/datetime.timedelta(seconds=1))*1000))+")"+""";
                       chart.draw(data, options);
                     };
                     document.getElementById('all').onclick = function() {
                          options['hAxis']['viewWindow']['min'] = """+x_data[0]+""";
                       chart.draw(data, options);
                     };
                    chart.draw(data, options);
                }"""
            )
        else:
            f.write(
                """
	            google.charts.load('current', {'packages':['corechart']});
                  google.charts.setOnLoadCallback(drawChart);

                  function drawChart() {
                    var data = new google.visualization.DataTable();
                    data.addColumn('string',""" + "\""+ params[key]['x-axis'] +"\""+ """);
                    data.addColumn(""" + "\""+ params[key]['type'] +"\""+ """,""" + "\""+ params[key]['y-axis'] +"\""+ """);
                    
                    data.addRows(
	                """
            )
            f.write(str([list(i) for i in zip(*[x_data,y_data])]))
            f.write(""" );

                  var options = {
                      title: """ + "\""+ params[key]['title'] +"\""+ """,
                      legend: { position: 'bottom' },
                      hAxis: {title:  """ + "\""+ params[key]['x-axis'] +"\""+ """,
                                viewWindow: {min:0},
                      },
                      vAxis: {logScale : """ + "\""+ params[key]['logScale'] +"\""+ """,
                                title: """ + "\""+ params[key]['y-axis'] +"\""+ """,
                                format: """ + "\""+ params[key]['format'] +"\""+ """ },
                      colors: ['#34515e'],
                    };
                    var chart = new google.visualization.ColumnChart(document.getElementById('line_div'));
                    
                    """
            )
            if "tooltip-format" in params[key]:
                f.write(""" var formatter = new google .visualization.NumberFormat({ """)
                for key1 in params[key]["tooltip-format"]:
                    f.write(key1 + """ : '"""+ str(params[key]["tooltip-format"][key1]) + """',""")
                f.write("""});
                formatter.format(data,1);
                """)
            f.write(""" 
                    
                     document.getElementById('linear-scale').onclick = function() {
                      options['vAxis']['logScale'] = "none";
                       chart.draw(data, options);
                     };
                     document.getElementById('log-scale').onclick = function() {
                          options['vAxis']['logScale'] = "true";
                       chart.draw(data, options);
                     };
                     document.getElementById('1Y').onclick = function() {
                          options['hAxis']['viewWindow']['min'] = """+str(len(x_data)-12)+""";
                       chart.draw(data, options);
                     };
                     document.getElementById('3Y').onclick = function() {
                          options['hAxis']['viewWindow']['min'] = """+str(len(x_data)-36)+""";
                       chart.draw(data, options);
                     };
                     document.getElementById('all').onclick = function() {
                          options['hAxis']['viewWindow']['min'] = 0;
                       chart.draw(data, options);
                     };
                    chart.draw(data, options);
                }"""
            )














