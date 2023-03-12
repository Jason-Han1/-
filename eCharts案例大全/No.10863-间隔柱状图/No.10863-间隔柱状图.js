var a = 18;//X fontSize
var b = 20;//轴数据 fontSize
var xAxisTextColor = '#FFFFFF';//'#4e7199';//字体颜色
var legendColor = '#FFFFFF';//legend颜色

var company=["1","2","3","4","5","6","7"]
var value=["1","2","3","4","5","6","7"]

option = {
    backgroundColor:'#000000',
        /*        title: {
                    text: '个',
                    textStyle: {
                        fontSize: a,
                        color: legendColor
                    }
                },*/
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                var html = '';
                if (params.length > 0) {
                    Xindex = params[0].dataIndex;
                    for (var int = 0; int < params.length; int++) {
                        html += params[int].seriesName + ':' + params[int].data + '<br>';
                    }
                }
                return html;

            }
        },
        legend: {
            data: ['落雷数'],
            textStyle: {
                fontSize: a,
                color: legendColor
            },
        },
        xAxis: {
            type: 'category',
            splitLine: {show: false},//去掉网格
            data: company,
            axisLabel: {
                textStyle: {//字体样式
                    fontSize: 17,
                    color: xAxisTextColor,
                },
            },
            axisTick: {//去掉轴上面的刻度
                show: false
            },
            axisLine: {//轴坐标线
                show: false,
            }
        },
        yAxis: [
            {//第一个Y轴
                name: '个',
                nameTextStyle: {
                    color: xAxisTextColor,
                    fontSize: 17,
                },
                type: 'value',
                splitLine: {//网线
                    show: false,
                    lineStyle: {
                        type: 'dotted'
                    }
                },
                axisLabel: {//左边Y轴字
                    formatter: '{value}',
                    textStyle: {
                        color: xAxisTextColor,
                        fontSize: 17,
                    }
                },
                axisTick: {//去掉轴上面的刻度
                    show: false
                },
                axisLine: {//右边Y轴坐标线
                    show: false,
                }
            }
        ],
        series: [
            {
                name: '落雷数',
                /*type: 'bar',*/
                barGap: '5%',//柱间距离
                type: 'pictorialBar',
                symbol: 'roundRect',//图形类型
                symbolRepeat: true,//元素是否重复
                symbolSize: [33, 15],//宽高
                symbolMargin: 3,//上下柱块间隔
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(//柱子渐变色
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#4BF1DE'},
                                {offset: 1, color: '#42A4F1'}
                            ]
                        ),
                        /* color: '#95caff',//柱子颜色*/
                        label: {
                            show: false,//柱子上是否显示数据
                            position: 'top',
                            textStyle: {//字体
                                color: '#e7f0ed',
                                fontSize: b
                            },
                            formatter: function (params) {//值为0的不显示
                                if (params.value == 0) {
                                    return '';
                                } else {
                                    return params.value;
                                }
                            }
                        }
                    }
                },
                data: value,
            }
        ]
    };