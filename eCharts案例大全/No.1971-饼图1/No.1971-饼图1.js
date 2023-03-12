var demoData = {
    name: '城镇化率',
    value: 60,
};
let trafficWay = [
    {
        name: '饶平县',
        value: '396',
    },
    {
        name: '潮安区',
        value: '160',
    },
    {
        name: '湘桥区',
        value: '141',
    },
];
let sum = 1308;
let color = ['#ffffff', '#FE693B', '#0277D1', '#F8456B', '#00FFFF', '#4AEAB0'];

option = {
    backgroundColor: '#091C2F',
    color: color,
    // 标题
    title: {
        text: '{a|' + sum + 'kM/W' + '}\n{c|' + '潮州总负荷' + '}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 36,
                    color: '#FFFFFF',
                },
                c: {
                    fontSize: 16,
                    color: '#EEEEEE',
                    padding: [5, 5],
                },
            },
        },
    },
    series: [
        {
            //内圆
            type: 'pie',
            radius: '75%',
            center: ['50%', '50%'],
            z: 0,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.RadialGradient(
                        0.5,
                        0.5,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(17,24,43,0)',
                            },
                            {
                                offset: 0.5,
                                // color: '#1E2B57'
                                color: 'rgba(28,42,91,.6)',
                            },
                            {
                                offset: 1,
                                color: '#141C33',
                                // color:'rgba(17,24,43,0)'
                            },
                        ],
                        false
                    ),
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            label: {
                show: false,
            },
            tooltip: {
                show: false,
            },
            data: [100],
        },
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['65%', '53%'],
            selectedMode: 'single',
            selectedOffset: 10,
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return color[params.dataIndex];
                    },
                },
            },
            label: {
                show: true,
                position: 'outside',
                padding:[12,0,0.0],
                fontSize:26,
               formatter: '{b|{b}}\n{a|{c}kM/W}\n{radius|●}',
            rich: {
                radius: {
                    padding: [0,0,-30,0]
                    
                },
                b: {
                    padding: [-20,20,25,20],
                    fontSize:18
                   
                },
               a: {
                    padding: [-20,20,-45,20],
                     fontSize:26
                }
            }
            },
            labelLine: {
                show: true,
                normal: {
                    length: 90,
                    length2: 70,
                    show: true,
                    lineStyle: {
                        width: 1,
                    },
                },
            },
            data: trafficWay,
        },
        {
            //刻度
            type: 'gauge',
            radius: '42%',
            center: ['50%', '50%'],
            min: 0,
            max: 100,
            splitNumber: 6, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                // 坐标轴线
                show: false,
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    width: 0,
                    shadowColor: '#67FFFC',
                    shadowBlur: 2,
                    color: [
                        [0.23, '#2EEAFF'],
                        [0.76, ' #148AFF'],
                        [1, '#2EEAFF'],
                    ],
                },
            },
            axisTick: {
                // 坐标轴小标记
                length: 20, // 属性length控制线长
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: 'auto',
                    width: 2,
                },
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                // 分隔线
                length: -25,
                lineStyle: {
                    color: 'auto',
                    width: 2,
                },
            },
            // 指针
            pointer: {
                show: false,
            },
            detail: {
                show: false,
            },
        },
    ],
};
