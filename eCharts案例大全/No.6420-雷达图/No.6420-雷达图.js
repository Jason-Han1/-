var legends = ['多能力a', '多能力b', '多能力c'];
option = {
    color: ['#1D93FF', '#3AC564', '#FACF21', '#82C730'],
    tooltip: {
        trigger: 'item'
    },
    grid: { //控制上下左右的间距
        left: '5%',
        right: '5%',
        bottom: '15%',
        top: '10%',
        containLabel: true
    },
    legend: { //图例
        show: true,
        bottom: '3%',
        center: 'center',
        textStyle: {
            color: '#003a54'
        },
        data: legends
    },
    radar: [{
        center: ['50%', '50%'],
        radius: '75%',
        startAngle: 90, //坐标系起始角度，也就是第一个指示器轴的角度
        nameGap: 15, //指示器名称和指示器轴的距离。
        shape: 'circle', //雷达图绘制类型，支持 'polygon' 和 'circle'。
        silent: false, //坐标轴是否是静态无法交互。
        axisLine: {
            lineStyle: {
                color: '#333',
                width: 0,
                type: 'dotted' //'solid' 'dashed' 'dotted'
            }
        },
        axisLabel: {
            show: true,
            fontSize: 12,
            color: '#000'
        },
        splitLine: {
            lineStyle: {
                color: '#BFBFBF',
                width: 1,
                type: 'dotted' //'solid' 'dashed' 'dotted'
            }
        },
        splitArea: {
            areaStyle: {
                color: ['#fff', '#fff']
            }
        },
        indicator: [{
                name: '设计',
                max: 100
            },
            {
                name: '开发',
                max: 100,
                color: '#000'
            }, // 标签设置为白色
            {
                name: '市场',
                max: 100,
                color: '#000'
            }, // 标签设置为白色
            {
                name: '用户调研',
                max: 100,
                color: '#000'
            }, // 标签设置为白色
            {
                name: '测试',
                max: 100,
                color: '#000'
            }, // 标签设置为白色
            {
                name: '语言',
                max: 100,
                color: '#000'
            }, // 标签设置为白色
            {
                name: '销售',
                max: 100,
                color: '#000'
            }, // 标签设置为白色
            {
                name: '用户体验',
                max: 100,
                color: '#000'
            } // 标签设置为白色
        ]
    }],
    series: [{
        name: '雷达图',
        type: 'radar',
        symbol: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
        symbolOffset: [0, 0], //标记相对于原本位置的偏移
        areaStyle: {
            normal: {
                color: "rgba(19, 173, 255, 0.5)"
            }
        },

        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(params) {
                    if (params.value > 0) {
                        return params.value;
                    } else {
                        return ' ';
                    }
                }
            }
        },
        data: [{
                value: [80, 40, 55, 80, 50, 80, 48, 43],
                name: legends[0],
                areaStyle: {
                    color: '#1D93FF'
                }
            },
            {
                value: [40, 40, 55, 80, 50, 80, 48, 43],
                name: legends[1],
                areaStyle: {
                    color: '#3AC564'
                }
            },
            {
                value: [40, 20, 55, 80, 50, 80, 48, 43],
                name: legends[2],
                areaStyle: {
                    color: '#FACF21'
                }
            }
        ]
    }]
};