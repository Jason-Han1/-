var chartData = 78;
var getvalue=1123;
var gradient = new echarts.graphic.LinearGradient(
    0, 0, 1, 0, [{
            offset: 0,
            color: "#1890FF",
        },
        {
            offset: 1,
            color: "#53ACFF",
        }
    ]
);

option = {
    backgroundColor: '#fff',
    legend: {
        show: false
    },
    title: [{
        text: chartData+'%',
        x: '50%',
        y: '40%',
        textAlign: 'center',
        textStyle: {
            fontSize: '16',
            fontWeight: '400',
            color: '#3286EC',
            textAlign: 'center',
        },
    }, {
        text: '宿舍检查优秀率\n\n'+getvalue+'名',
        left: '50%',
        top: '80%',
        textAlign: 'center',
        textStyle: {
            fontSize: '12',
            fontWeight: '400',
            color: '#666666',
            textAlign: 'center',
        },
    }],
    series: [{
            type: 'pie',
            clockwise: false,
            radius: ['48%', '50%'],
        	center: ['50%', '45%'],
            zlevel: 3,
            hoverAnimation: false,
            label: {
                show: false,
            },
            data: [{
                value: 100 - chartData,
                itemStyle: {
                    color: 'transparent',
                }
            }, {
                value: chartData,
                itemStyle: {
                    normal: {
                        borderWidth: 7,
                        borderColor: gradient,
                        color: gradient
                    }
                },
            }, ]
        },
        {
            type: 'pie',
            clockwise: false,
            radius: ['48%', '50%'],
        	center: ['50%', '45%'],
            hoverAnimation: false,
            zlevel: 2,
            label: {
                show: false,
            },
            itemStyle: {
                color: '#DBE9F6',
                borderWidth: 7,
                borderColor: '#DBE9F6'
            },
            emphasis: {
                itemStyle: {
                    color: '#DBE9F6',
                    borderWidth: 7,
                    borderColor: '#DBE9F6'
                }
            },
            data: [100]
        }
    ]

};
