let barData = [{
        name: '设备正常',
        data: [50, 100, 79, 34, 78, 134],
        color: ['rgba(30,89,115,1)', 'rgba(30,89,115,0.5)', 'transparent']
    },
    {
        name: '设备异常',
        data: [120, 110, 130, 120, 120, 120],
        color: ['rgba(129,67,16,1)', 'rgba(129,67,16,0.5)', 'transparent']
    }
];

let pictorialBar1 = [],pictorialBar2 = [];

for (var i = 0; i < barData[0].data.length; i++) {
    pictorialBar1.push({
        value: barData[0].data[i],
        symbolPosition: 'end'
    })
    pictorialBar2.push({
        value: barData[1].data[i],
        symbolPosition: 'end'
    })
}

option = {
            backgroundColor: '#010d14',
            title: {
                // text: '支 / 发',
                textStyle: {
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#24c1ff' //标题颜色
                },
                top: '0%',
                left: '0%',
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '5px',
                right: '5px',
                bottom: '5px',
                top: '30px',
                containLabel: true,

            },
            legend: {
                icon: 'roundRect',
                orient: 'horizontal',
                itemWidth:20,
                itemHeight:15,
                textStyle: {
                    fontSize: 12, //字体大小
                    color: '#b9c8d4', //字体颜色
                },
                right: '3%', //距离右侧
                data:['设备正常','设备异常']
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                axisLabel: {
                    interval: 0, // 解决x轴名称过长问题
                    textStyle: {
                        color: '#c8d8e3'
                    }
                },
                axisLine: {
                    lineStyle: { //y轴网格线设置
                        color: '#032e42',
                        width: 1,

                    }
                },
                data: [' 喷淋头  ', '烟感 ', '消防栓  ', '灭火器', '指示牌', '应急照明灯'],

            }],
            yAxis: [{
                type: 'value',
                name: "单位/个",
                nameGap:8,
                nameTextStyle: {
                    color: "#d1d1d1",
                },

                axisTick:{
                    show: false,
                },
                axisLine: {
                    show: false,
                    lineStyle: { //y轴网格线设置
                        color: '#032e42',
                        width: 1,

                    }
                },
                splitLine: { //保留网格线
                    show: true,
                    lineStyle: { //y轴网格线设置
                        color: '#032e42',
                        width: 1,

                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#d1d1d1' //字体颜色
                    }
                },
            }],
            series: [

                {
                    name: '设备正常top',
                    type: 'pictorialBar',
                    symbol: 'rect',
                    symbolSize: [12, 2],
                    symbolOffset: [-8, 0],
                    z: 2,

                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#12bcff'
                        }
                    },
                    data: pictorialBar1
                },
                {
                    name: '设备异常top',
                    type: 'pictorialBar',
                    symbol: 'rect',
                    symbolSize: [12, 2],
                    symbolOffset: [8, 0],
                    z: 2,

                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#ff8a0c'
                        }
                    },
                    data: pictorialBar2
                },
                {
                    name: '设备正常',
                    type: 'bar',
                    barWidth: 12,

                    z: 1,
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#969a9d'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{
                                    offset: 0,
                                    color: 'rgba(8,97,148,1)'
                                },
                                    {
                                        offset: 0.5,
                                        color: 'rgba(8,97,148,0.5)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'transparent'
                                    }
                                ]
                            )
                        },

                    },
                    data: barData[0].data,

                },
                {
                    name: '设备异常',
                    type: 'bar',

                    z: 1,
                    barWidth: 12,
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#969a9d'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{
                                    offset: 0,
                                    color: 'rgba(129,67,16,1)'
                                },
                                    {
                                        offset: 0.5,
                                        color: 'rgba(129,67,16,0.5)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'transparent'
                                    }
                                ]
                            )
                        },

                    },
                    data:barData[1].data,

                }
            ]
        };