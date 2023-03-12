option = {
    // backgroundColor: '#000f1e',
   
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        top:'10px',
        left: '10px',
        right: '10px',
        bottom: '10px',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#273f55'
            }
        },
        axisLabel: {
            // interval: 0, //设置x轴的标签显示可自适应
            show: true,
            textStyle: {
                color: '#c1c3c6'
            }
        },
        data: ['4H', '6H', '8H', '10H', '12H', '14H', '16H', '18H', '20H', '现在']
    },
    yAxis: {
        type: 'value',
        axisLine: {
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
                color: '#c1c3c6' //字体颜色
            },
            formatter: function(value) {
                return value + 'A'
            },
        },
    },
    series: [{
            name: '辅助',
            type: 'bar',
            stack: '总量',
            barWidth: 15,
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },

            data: [100, 50, 80, 60, 80, 40, 30, 10, 50, 60]
        },
        {
            name: '运行电流检测',
            type: 'bar',
            stack: '总量',
            barWidth: 15,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(92,174,221,0.5)'
                    },
                    {
                        offset: 0.5,
                        color: 'rgba(92,174,221,0.3)'
                    },
                    {
                        offset: 0.8,
                        color: 'rgba(92,174,221,0.1)'
                    },
                    {
                        offset: 1,
                        color: 'transparent'
                    }
                ], false),
            },
            label: {
                show: true,
                position: 'inside'
            },
            data: [60, 40, 50, 30, 20, 20, 20, 30, 40, 20]
        }
    ]
};