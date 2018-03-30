$(function(){
	        $('#container').highcharts({
	            title: {
	                text: '',
	                x: -20 //center
	            },
	            subtitle: {
	                text: '',
	                x: -20
	            },
	            xAxis: {
	                categories: ['3-й день', '5-й день', '7-ой день', '10-й день', '12-й день', '15-й день', '18-й день', '22-й день', '25-й день']
	            },
	            yAxis: {
	                title: {
	                    text: ''
	                },
	                plotLines: [{
	                    value: 0,
	                    width: 1,
	                    color: '#808080'
	                }]
	            },
	            tooltip: {
	                valueSuffix: '%'
	            },
	            legend: {
	                layout: 'vertical',
	                align: 'right',
	                verticalAlign: 'middle',
	                borderWidth: 0
	            },
	            series: [ {
	                name: 'Мужчины',
	                data: [3, 9, 13, 37, 45, 68, 75, 81, 91]
	            },
	            {
	                name: 'Женщины',
	                data: [3, 7, 11, 30, 40, 55, 70, 75, 94]
	            }
	                    ]
	        });
		$('.pagination, .highcharts-button').hide();	
		$( "tspan:contains('Highcharts.com')").hide();
 });