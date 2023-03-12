option = {
    backgroundColor:'#FFF',
    tooltip: {
        show:true
    },
    radar: {
        radius: '60%',
        center: ['50%', '55%'],
        // startAngle: 0,
        splitNumber: 10,
        nameGap: '10',
        name: {
            textStyle: {
                color: '#646464',
            }
        },
        axisLine: {
            lineStyle: {
                color: '#076CFF'
            }
        },
        splitLine: {
            lineStyle: {
                width: 0,
            }
        },
        splitArea: {
            areaStyle: {
                color: [ 'rgb(125,200,242)', 'rgb(137,205,244)','rgb(143,210,246)','rgb(155,216,248)','rgb(167,220,250)','rgb(186,227,252)' ,'rgb(200,230,253)','rgb(216,235,254)','rgb(233,245,255)','#fff'],
                
            }
        },
        indicator: [{
                name: 'Sunday',
                max: 100
            },
            {
                name: 'Monday',
                max: 100
            },
            {
                name: 'Tuesday',
                max: 100
            },
            {
                name: 'Wednesday',
                max: 100
            },
            {
                name: 'Thursday',
                max: 100
            },
            {
                name: 'Friday',
                max: 100
            },
            {
                name: 'Saturday',
                max: 100
            }
        ]
    },
    series: [{
        name: '使用时段',
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
            normal: {
                width: 0,
                opacity: 0.4,
            },
        },
         lineStyle: {
                    normal: {
                        width:0,
                    },
                },
        data: [{
            itemStyle: {
                normal: {
                    color: '#0291FF',
                },
            },
            value: [20, 33, 80, 50, 30, 40, 80]
        }]
    }]
};