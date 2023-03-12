 var a = 15;//X fontSize
    var b = 18;//轴数据 fontSize
    var xAxisTextColor = '#FFFFFF';//'#4e7199';//字体颜色
    var legendColor = '#FFFFFF';//legend颜色
    var option = {
        backgroundColor:'#000000',
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            //top:'10%',
            left: '20%',

        },
        legend: {
            data: [{name: '1', icon: "circle"},
                {name: '2', icon: "circle"},
                {name: '3', icon: "roundRect"}],//rect
            orient: 'vertical',
            x: '60',
            y: '70',
            //icon: "circle",
            //x: 'left',
            textStyle: {
                fontSize: a,
                color: legendColor
            },
        },
        xAxis: {
            type: 'category',
            data: [1, 2, 3, 4, 5, 6, 7],
            axisLabel: {
                textStyle: {//字体样式
                    fontSize: a,
                    color: xAxisTextColor,
                },
            },
            splitLine: {show: false},//去掉网格
            axisTick: {//去掉轴上面的刻度
                show: false
            },
            axisLine: {//轴坐标线
                show: false,
            }
        },
        yAxis: [
            {//第一个Y轴
                name: '条',
                nameTextStyle: {
                    color: xAxisTextColor,
                    fontSize: a,
                },
                type: 'value',
                splitLine: {//网线
                    show: false,
                    lineStyle: {
                        type: 'dotted'
                    }
                },
                //min: min,//设置Y轴最小值
                //max: 100,//设置Y轴最大值
                axisLabel: {//左边Y轴字
                    formatter: '{value}',
                    textStyle: {
                        color: xAxisTextColor,
                        fontSize: a,
                    }
                },
                axisTick: {//去掉轴上面的刻度
                    show: false
                },
                axisLine: {//右边Y轴坐标线
                    show: false,
                }
            },
            {//第二个Y轴
                name: '%',
                nameTextStyle: {
                    color: xAxisTextColor,
                    fontSize: a,
                },
                type: 'value',
                splitLine: {//网线
                    show: false,
                },
                axisLabel: {//左边Y轴字
                    formatter: '{value}',
                    textStyle: {
                        color: xAxisTextColor,
                        fontSize: a,
                    }
                },
                axisTick: {//去掉轴上面的刻度
                    show: false
                },
                axisLine: {//右边Y轴坐标线
                    show: false,
                }
            },
        ],
        series: [
            {
                name: '1',
                type: 'bar',
                yAxisIndex: 0,
                barWidth: 20,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(//柱子渐变色
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#8ed877'},
                                {offset: 1, color: '#3ec0b3'}
                            ]
                        ),
                        /*    color: '#5bfff8',//柱子颜色*/
                        barBorderRadius: 100,//温度计样式
                        label: {
                            show: false,//柱子上是否显示数据
                            position: 'top',
                            textStyle: {//字体
                                color: '#fffff5',
                                fontSize: b
                            },
                        }
                    }
                },
                data: [1, 2, 3, 4, 5, 6, 7],
            },
            {
                name: '2',
                type: 'bar',
                yAxisIndex: 0,
                barWidth: 20,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(//柱子渐变色
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#3f96fb'},
                                {offset: 1, color: '#6b4aef'}
                            ]
                        ),
                        /*color: '#ffda33',//柱子颜色*/
                        barBorderRadius: 100,//温度计样式
                        label: {
                            show: false,//柱子上是否显示数据
                            position: 'top',
                            textStyle: {//字体
                                color: '#fffff5',
                                fontSize: b
                            },
                        }
                    }
                },
                data: [1, 2, 3, 4, 5, 6, 7],
            },
            {
                name: '3',
                type: 'line',
                yAxisIndex: 1,
                symbol: 'emptyCircle',//拐点样式
                symbolSize: 0,//拐点大小
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 3,//折线宽度
                            type: 'solid',//实线
                        },
                        color: '#BF55C7',//柱子颜色
                        label: {
                            show: false,//柱子上是否显示数据
                            position: 'top',
                            textStyle: {//字体
                                color: '#fffff5',
                                fontSize: b
                            },
                        }
                    }
                },
                data: [1, 2, 3, 4, 4, 3, 2],
            },
        ],
    };