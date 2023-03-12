var a = 22;//X fontSize
var b = 15;//轴数据 fontSize
var xAxisTextColor = '#FFFFFF';//'#4e7199';//字体颜色
var legendColor = '#FFFFFF';//legenmin            
var min=0;

 option = {
     backgroundColor:'#000000',
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'line' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                var html = '';
                if (params.length > 0) {
                    Xindex = params[0].dataIndex;
                    for (var int = 0; int < params.length; int++) {
                        html += params[int].seriesName + ':' + params[int].data[1] + '<br>';
                    }
                }
                return html;

            }
        },
        legend: {
            data: ['今年合格率', '去年合格率'],
            textStyle: {
                fontSize: a,
                color: legendColor
            },
        },
        xAxis: {
            data: ["1","2","3","4"],
            type: 'category',
            splitNumber: 1,//X轴间隔
            splitLine: {show: false},//去掉网格
            axisTick: {//去掉轴上面的刻度
                show: false
            },
            axisLine: {//轴坐标线
                show: false,
            },
            axisLabel: {
                textStyle: {//字体样式
                    fontSize: a,
                    color: xAxisTextColor,
                },
            },
        },
        yAxis: {
            name: '%',
            nameTextStyle: {
                color: xAxisTextColor,
                fontSize: a,
            },
            type: 'value',
            splitLine: {//网线
                show: false,
                lineStyle: {
                    type: 'dashed'
                }
            },
            min: min,//设置Y轴最小值
            max: 100,//设置Y轴最大值
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
        series: [{
            name: '今年合格率',
            type: 'scatter',
            data: [
            ["1", 87],
            ["2",55],
            ["3", 85],
            ["4", 87]
        ],
            symbolSize: function (data) {//气泡大小
                return 35;
            },
            itemStyle: {//气泡颜色
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',//阴影
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{//里面内容位置
                        offset: 0,
                        color: 'rgba(128, 206, 238,0)'//里面内容
                    }, {
                        offset: 1,
                        color: 'rgba(11, 166, 238,1)'//外面框
                    }])
                }
            }
        }, {
            name: '去年合格率',
            type: 'scatter',
            data: [
            ["1", 97],
            ["2",95],
            ["3", 95],
            ["4", 97]
        ],
            symbolSize: function (data) {//气泡大小
                return 35;
            },
            itemStyle: {//气泡颜色
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',//阴影
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.6, [{//里面内容位置
                        offset: 0,
                        color: 'rgba(230, 168, 255,0)'//里面内容
                    }, {
                        offset: 1,
                        color: 'rgb(191, 8, 255)'//外面框
                    }])
                }
            }
        }]
    };