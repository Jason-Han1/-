var hideStyle = {
    normal: {
        color: '#fff', //未完成的圆环的颜色
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        show: false
    }
};
var option = {
    backgroundColor: '#fff',
    // legend: {
    //     data: ['总数', '上报国网']
    // },
    tooltip: {
        show: true,
        formatter: "{b} : {c}"
    },
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true, //顺时针
        radius: [60, 70],
        label: {
            normal: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        hoverAnimation: false,
        data: [{
                value: 100,
                name: '总数',
                itemStyle: {
                    color: '#0078db'
                },
            }
            // , {
            //     value: 25,
            //     name: 'hide',
            //     itemStyle: hideStyle
            // }
        ]
    }, {
        name: 'Line 3',
        type: 'pie',
        clockWise: true, //顺时针
        radius: [40, 50],
        label: {
            normal: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        hoverAnimation: false,
        data: [{
            value: 70,
            name: '上报国网',
            itemStyle: {
                color: '#33c7e2'
            },
        }, {
            value: 30,
            name: 'hide',
            itemStyle: hideStyle,
            tooltip: {
                show: false
            }
        }]
    }]
};