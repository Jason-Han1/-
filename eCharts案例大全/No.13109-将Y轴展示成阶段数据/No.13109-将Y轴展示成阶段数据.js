option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            inside: true,
            verticalAlign: "top",
            margin: 20,
            fontSize: 30,
            padding: [50, 4, 5, 6],
            formatter: function(value, index) {
                if (index === 0) {
                    return "";
                }
                var result = value * (index - 1) / index + ' ~ ' + value + ' %';
                return result;
            },
            textStyle: {
                color: function(value, index) {
                    return value >= 60 ? 'RGBA(100,200,100,0.8)' : 'RGBA(255,0,0,0.5)';
                }
            }

        },
        splitArea: {
            show: true,
            areaStyle: {
                color: [
                    'rgba(230,230,230,0.6)',
                    'rgba(200,170,200,0.3)'
                ]
            }
        }
    },
    series: [{
        data: [20, 30, 80, 46, 32, 93, 77],
        type: 'line',
        smooth: true
    }]
};