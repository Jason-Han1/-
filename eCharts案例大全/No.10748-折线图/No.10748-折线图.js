  var a = 15;//X fontSize
var b = 15;//轴数据 fontSize
var xAxisTextColor = '#FFFFFF';//'#4e7199';//字体颜色
var legendColor = '#FFFFFF';//legend颜色
 
 option = {
     backgroundColor:'#000000',
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'line' // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        legend: {
            textStyle: {
                fontSize: a,
                color: legendColor
            },
            data: ['油中气体', '微水', '铁芯接地', 'SF₆气体压力', 'SF₆气体水分', "避雷器"]
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',//填充部分
            boundaryGap: false,//填充部分
            splitLine: {show: false},//去掉网格
            axisLabel: {
                textStyle: {//字体样式
                    fontSize: a,
                    color: xAxisTextColor,
                },
                interval: 0
            },
            data: ["1","2","3","4","5"]
        },
        yAxis: [
            {//第一个Y轴
                name: '%',
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
               // max: 100,//设置Y轴最大值
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
                name: '油中气体',
                type: 'line',
                symbolSize: 8,//拐点大小
                symbol: 'circle',//拐点样式
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 2,//折线宽度
                            //type: 'dotted',//虚线
                        },
                        color: '#DF595A',//柱子颜色
                    }
                },
                data: ["11","12","10","9","8"]
            },
            {
                name: '微水',
                type: 'line',
                symbolSize: 8,//拐点大小
                symbol: 'circle',//拐点样式
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 2,//折线宽度
                            //type: 'dotted',//虚线
                        },
                        color: '#DFCD5B',//柱子颜色
                    }
                },
                data: ["8","11","12","10","9"]
            },
            {
                name: '铁芯接地',
                type: 'line',
                symbolSize: 8,//拐点大小
                symbol: 'circle',//拐点样式
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 2,//折线宽度
                            //type: 'dotted',//虚线
                        },
                        color: '#2DF7F2',//柱子颜色
                    }
                },
                data: ["9","8","11","12","10"]
            },
            {
                name: 'SF₆气体压力',
                type: 'line',
                symbolSize: 8,//拐点大小
                symbol: 'circle',//拐点样式
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 2,//折线宽度
                            //type: 'dotted',//虚线
                        },
                        color: '#DE5BC5',//柱子颜色
                    }
                },
                data: ["10","9","8","11","12"]
            },
            {
                name: 'SF₆气体水分',
                type: 'line',
                symbolSize: 8,//拐点大小
                symbol: 'circle',//拐点样式
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 2,//折线宽度
                            //type: 'dotted',//虚线
                        },
                        color: '#A35AE0',//柱子颜色
                    }
                },
                data: ["12","10","9","8","11"]
            },
            {
                name: '避雷器',
                type: 'line',
                symbolSize: 8,//拐点大小
                symbol: 'circle',//拐点样式
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 2,//折线宽度
                            //type: 'dotted',//虚线
                        },
                        color: '#2DC6F2',//柱子颜色
                    }
                },
                data: ["11","12","10","9","8"]
            }
        ]
    };