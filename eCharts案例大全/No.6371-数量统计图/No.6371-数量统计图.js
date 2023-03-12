let data = [10, 20, 40, 60, 80];
let xLabelArr = ['环境监测', '厕所监控', '能耗系统', '门禁系统', '其他'];
let series = [];
data.forEach((item) => {
    series.push({
        value: item,
        symbolPosition: 'end'
    });
});

let dataBar2 = [10, 20, 40, 60, 80];
let dataBarShadow2 = [];
let yMax2 = Math.max.apply(null, dataBar2);
for (var i = 0; i < dataBar2.length; i++) {
    dataBarShadow2.push(yMax2);
}

option = {
    backgroundColor: '#09102D',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "{b} :{c}",
    },
    grid: {
        left: 50,
        right: 50,
        bottom: 50,
        top: 50,
        containLabel: true,
    },
    xAxis: [{
        type: 'category',
        data: xLabelArr,
        axisTick: {
            alignWithLabel: true,
            show: false,
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            interval: 0, // 解决x轴名称过长问题
            textStyle: {
                color: '#fff'
            },
            formatter: function(data) {
                if (data.length > 3) {
                    return data.slice(0, 2) + '\n' + data.slice(2);
                }
                return data;
            }
        }
    }],
    yAxis: [{
        show: true,
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,.5)'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,.5)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.12)'
            }
        }
    }],
    series: [{
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [17, 3],
            symbolOffset: [-6, 0],
            zlevel: 3,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(25,228,221,1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,165,160,1'
                            }
                        ]
                    )
                }
            },
            data: series
        },
        {
            name: '动环资产',
            type: 'bar',
            zlevel: 2,
            barWidth: '18', //去掉这个则会显示柱状阴影
            label: {
                show: true,
                position: 'top',
                padding: [0, 0, 0, -38],
                textStyle: {
                    color: '#1AF6EE'
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(30,89,115,1)'
                            },
                            {
                                offset: 0,
                                color: 'transparent'
                            },
                            {
                                offset: 1,
                                color: 'transparent'
                            }
                        ]
                    )
                },

            },
            data: dataBar2,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 2,
            zlevel: 0,
            barGap: '-160%',
            data: dataBarShadow2,
            itemStyle: {
                color: 'rgba(255,255,255,.23)'
            },

        },

    ]
};