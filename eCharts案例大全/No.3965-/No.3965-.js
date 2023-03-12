option = {
    series: [{
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
            show: false
        },
        progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
                borderWidth: 1,
                borderColor: '#464646',
             color: {
    type: 'radial',
    x: 0,
    y: 0,
    r: 0.8,
    colorStops: [{
        offset: 0, color: 'red' // 0% 处的颜色
    },{
     offset: 0.2, color: 'red' // 0% 处的颜色
    },
    {
        offset: 1, color: 'blue' // 100% 处的颜色
    }],
    global: false // 缺省为 false
}
            }
        },
        axisLine: {

            lineStyle: {
                width: 120
            }
        },
        splitLine: {
            show: false,
            distance: 0,
            length: 10
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            distance: 50
        },
        data: [{
            value: 20,
            name: 'Perfect',
            title: {
                offsetCenter: ['0%', '-50%']
            },
            detail: {
                offsetCenter: ['0%', '-40%']
            }
        },
        {
            value: 40,
            name: 'Good',
            title: {
                offsetCenter: ['0%', '-30%']
            },
            detail: {
                offsetCenter: ['0%', '-20%']
            }
        },
        {
            value: 60,
            name: 'Commonly',
            title: {
                offsetCenter: ['0%', '-10%']
            },
            detail: {
                offsetCenter: ['0%', '0%']
            }
        },
        {
            value: 20,
            name: 'test1',
            title: {
                offsetCenter: ['0%', '10%']
            },
            detail: {
                offsetCenter: ['0%', '20%']
            }
        }, {
            value: 70,
            name: 'test2',
            title: {
                offsetCenter: ['0%', '30%']
            },
            detail: {
                offsetCenter: ['0%', '40%']
            }
        },
        ],
        title: {
            fontSize: 14
        },
        detail: {
            width: 50,
            height: 14,
            fontSize: 14,
            color: 'auto',
            borderColor: 'auto',
            borderRadius: 20,
            borderWidth: 1,
            formatter: '{value}%'
        }
    }]
};

setInterval(function () {
    option.series[0].pointer.show = false;
    option.series[0].data[0].value = (120).toFixed(2) - 0;
    option.series[0].data[1].value = (Math.random() * 100).toFixed(2) - 0;
    option.series[0].data[2].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
}, 2000);