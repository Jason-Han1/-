var rate =0.953;//0.4+0.2*Math.random();
var linear_color = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#6959CD'
    }, {
        offset: 1,
        color: '#ede0ff'
    }]
};
var option = {
    title: {
        text: "在线率%",
        textStyle: {
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold'
        },
        left: 'center',
        bottom: '20%'
    },
    backgroundColor:'#111c4e',
    series: [{
        type: 'pie',
        hoverAnimation: false,
        radius: ['79%', '80%'],
        startAngle: 225,
        labelLine: {
            show: false
        },
        data: [{
            value: rate * 270,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: (rate*100).toFixed(2) + '%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 60,
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: linear_color,
                    borderWidth: 20
                }
            }
        }, {
            value: 270 - rate * 270,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(250,250,250,1)',
                    borderWidth: 5
                }
            }
        }, {
            value: 90,
            itemStyle: {
                normal: {
                    color: "rgba(0,0,0,0)"
                }
            }
        }],
    }]
};