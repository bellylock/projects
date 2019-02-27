$(function(){
    // Create the chart
    Highcharts.chart('chart', {
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b>'
        },

        "series": [
            {
                "name": "总资产",
                "colorByPoint": true,
                "data": [
                    {
                        "name": "金额",
                        "y": 56,
                        "drilldown": "Chrome"
                    },
                    {
                        "name": "收益",
                        "y": 35,
                        "drilldown": "Firefox"
                    },
                    {
                        "name": "佣金",
                        "y": 9,
                        "drilldown": "Internet Explorer"
                    }
                ],
                colors:["#40a3ff","#4ccfff","#944cff"]
            }
        ],

    });
})