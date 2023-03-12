/*中间显示的数据*/
var myData = ['彝族', '德昂族', '哈尼族', '傣族', '壮族', '苗族', '傈僳族', '拉祜族', '佤族', '纳西族', '瑶族', '景颇族', '布依族', '布朗族', '阿昌族', '独龙族'];
option = {
    backgroundColor:'#000',
        title: {
            text: '左右两边柱状对比图',
            x: 'center',
            textStyle: {
                color: '#ffffff'
            }
        },
        legend: {
                data: ['左边数据', '右边数据'],
                bottom: 10,
                center: true,
                textStyle: {
                    color: '#fff',
                    textAlign :'center'
                },
                itemGap:80,
                itemWidth: 0
        },
        grid: [{
            show: false,
            left: '4%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '46%'
        }, {
            show: false,
            left: '50.5%',
            top: 60,
            bottom: 80,
            width: '0%'
        }, {
            show: false,
            right: '4%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '46%'
        }, ],
        xAxis: [{
            splitNumber:2,
            type: 'value',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 12
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#57617f',
                    width: 1,
                    type: 'solid'
                }
            }
        }, {
            gridIndex: 1,
            show: false,
        }, {
            gridIndex: 2,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#57617f',
                    width: 1,
                    type: 'solid',
                },
            },
        }, ],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
            },
            data: [],

        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
            },
            data:myData.map(function(value) {
                return {
                    value: value,
                    textStyle:{
                        align: 'center',
                        color:'#ffffff',
                        fontSize: 12,

                    }
                }
            }),
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
            },
            data: [],
        }, ],
        series: [{
            name: '左边数据',
            type: 'bar',
            barGap: 20,
            barWidth: '80%',
            label: {
                normal: {
                    show: true,
                    color: 'red',
                    position: 'insideLeft',
                    textStyle: {
                        color: '#ffffff',
                    }

                },
                emphasis: {
                    show: false,
                },
            },
            itemStyle: {
                normal: {
                    color: '#36c5e7',
                    barBorderRadius: [8, 0, 0, 8],
                },
                emphasis: {
                    show: false,
                },
            },
            data: ['6666','5700','5600','4000','2500','2400','2100','1700','1500','1000']
        }, {
            name: '右边数据',
            type: 'bar',
            barGap: 20,
            barWidth: '80%',
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
                normal: {
                    show: true,
                    color: 'red',
                    position: 'insideRight',
                    textStyle: {
                        color: '#ffffff',
                    }

                },
            },
            itemStyle: {
                normal: {
                    color: '#e68b55',
                    barBorderRadius: [0, 8, 8, 0],

                },
                emphasis: {
                    show: false,
                },
            },
            data: ['6000','5700','5600','4000','2500','2400','2100','1700','1500','1000'],
        }]
    };

myChart.on('click', function (params) {
    console.log(params);
});


