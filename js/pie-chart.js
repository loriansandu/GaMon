google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Collection Point', 'Ocupation'],
    ['Location 1',     50],
    ['Location 2',      50],
    ['Location 3',      50],
    
  ]);

  var phoneView = window.matchMedia("(max-width: 600px)");
  if (!(phoneView.matches))
  var options = {'title': 'Collection Points',
    'width':800, 'height':400,'slices':[{color: 'black'}, {color: 'blue'}, {color: 'green'}, {color: 'red'}, {color: 'white'}]
  };
  else
  var options = {'title': 'Collection Points','slices':[{color: 'black'}, {color: 'blue'}, {color: 'green'}, {color: 'red'}, {color: 'white'}]
  };


  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}