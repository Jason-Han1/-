var dataAxis = [
    '实木111', '进口111', '非实111', '人字111', '拼花', '三层111', '常规',
    '常规', '三层111', '拼花', '进口111', '国产111', '脚线',
    '拼花', '国产111', '非实111', '混搭', '实木111', '人字111', '脚线', '三层111', '常规',
    '脚线', '进口111', '国产111',
];
var data = [
    2906, 2457, 4160, 930, 225, 363, 880,
    1050, 396, 2430, 2253, 465, 200,
    940, 171, 605, 185, 812, 1780, 150, 1432, 2827,
    48, 722, 673
];

option = {
    title: {
        text: '',
        subtext: ''
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
            textStyle: {
                color: '#000',
                fontSize: 8
            },
            formatter: function(value, index) {
                var v = value.substring(0, 2) + '...';
                return value.length > 2 ? v : value
            },
        },
        axisTick: {
            show: false
        }, 
        axisLine: {
            show: false
        },

        z: 10
    },
    yAxis: {
        type: 'value',
        name: '销售单价',
        nameLocation: 'center',
        nameTextStyle: {
            fontSize: 9,

        },
        nameGap: 50,
        minInterval: 968,
        interval: 968,
        max: 4840,
        axisLine: {
            show: false
        },
        //不显示坐标刻度
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#000'
            }
        }
    },
    series: [
        {
            type: 'bar',
            data: data,
            //显示柱状图数值
            label: {
                show: true, // 开启显示
                position: 'top', // 在上方显示
                distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
                verticalAlign: 'middle',
                textStyle: { // 数值样式
                    color: 'black',
                    fontSize: 10,
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            'rgb(219,152,76)','rgb(219,152,76)','rgb(219,152,76)','rgb(219,152,76)','rgb(219,152,76)','rgb(219,152,76)','rgb(219,152,76)',
                            'rgb(255,146,117)', 'rgb(255,146,117)', 'rgb(255,146,117)', 'rgb(255,146,117)', 'rgb(255,146,117)', 'rgb(255,146,117)',
                            'rgb(67,174,76)', 'rgb(67,174,76)', 'rgb(67,174,76)', 'rgb(67,174,76)', 'rgb(67,174,76)', 'rgb(67,174,76)', 'rgb(67,174,76)', 'rgb(67,174,76)', 'rgb(67,174,76)',
                            'rgb(141,140,131)', 
                        ];
                        return colorList[params.dataIndex]
                    },
                    
                }
            },

            markArea: {
                //设置具体区域的背景颜色，选择不同区间 设置图表对应的背景颜色
                silent: true,
                data: [
                    [{
                            name: '上海',
                            x: '10%',
                        },
                        {
                            x: '32.4%',
                        }
                    ],
                    [{
                            name: '内蒙古',
                            x: '32.4%',
                            itemStyle: {
                                color: '#C0C0C0',
                                opacity:0.5,
                            }
                        },
                        {
                            x: '51.6%',
                        }
                    ],
                    [{
                            name: '浙江',
                            x: '51.6%',
                        },
                        {
                            x: 723,
                        }
                    ],
                    [{
                            name: '未知',
                            x: '80.4%',
                            itemStyle: {
                                color: '#C0C0C0',
                                opacity:0.5,
                            }
                    }, {
                            x: '90%'
                    }]
                ]
            }
        }
    ]
};
