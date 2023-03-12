var score1 = [9.2, 9.3, 9.4, 9.2, 9.3];
var radius = [40, 55];

option = {
    series: []
};
for (var i = 0; i < score1.length; i++) {
    option.series.push({
        type: 'pie',
        clockWise: false,
        radius: radius,
        center: [10 + i * 15 + '%', '30%'],
        color: '#FF8C00',
        data: [{
            value: score1[i],
            label: {
                normal: {
                    formatter: function(params) {
                        return params.value
                    },
                    position: 'center',
                    textStyle: {
                        color: 'black',
                        fontSize: 30,
                    }
                }
            }
        }, {
            value: 10 - score1[i],
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                }
            },
        }]
    });
}