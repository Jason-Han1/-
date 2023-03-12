var data = [{
    "name": "20年6月",
    "value": 10
}, {
    "name": "20年7月",
    "value": 20
}, {
    "name": "20年8月",
    "value": 10
}, {
    "name": "20年9月",
    "value": 5
}, {
    "name": "20年10月",
    "value": 5
}, {
    "name": "20年11月",
    "value": 55.5
}];
let max = Math.ceil(Math.max.apply(Math,data.map(item => { return item.value })))

var xData = [],
    yData = [],
    maxData= [];
data.map(function(a, b) {
    xData.push(a.name);
    yData.push(a.value);
    maxData.push(max);
});
option = {
    backgroundColor: "#111c4e",
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function(params) {
            console.log(params)
            return  params[0].data + "%"
            
        },
        borderRadius : 5,
        padding: [5, 10],    // [5, 10, 15, 20]
        textStyle : {
            color: '#FFF04C',
            decoration: 'none',
            fontSize: 12,
            fontWeight: 'bold',
            padding: [10, 20]
        },
    },
    legend: {
        data: ['直接访问', '背景'],
        show: false
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '6%',
        top: '6%',
        containLabel: true,
        z: 22
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
            show: false,
            alignWithLabel: false
        },
        axisLine: {
            lineStyle: {
                type: 'dashed',
                color: '#CEDDF2'
            }
        },
        axisLabel: {
            show: true,
            color: '#E5F2FF',
            fontSize: 12
        },
    }],
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            axisTick: {
                show: false
            },
            // max: max,
            splitNumber: 2,
            axisLine: {
                show: false
            },
            axisLabel: {
                color: '#E5F2FF',
                formatter: '{value} %',
                fontSize: 12
            },
            splitLine: {
                show: true, //网格线显示
                lineStyle: {
                    type: 'dashed',
                    color: '#CEDDF2'
                }
            },
        },
        {
            type: 'value',
            gridIndex: 0,
            max: max,
            splitNumber: 12,
            splitLine: {
                show: false
            },

        }
    ],
    series: [{
            name: '合格率',
            type: 'bar',
            barWidth: '30%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#B0BABF'
                            },
                            {
                                offset: 1,
                                color: '#EDF6FA'
                            }
                        ]
                    )
                }
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#A69129"
                  },
                  {
                    offset: 1,
                    color: "#FFFF80"
                  }
                ])
              }
            },
            data: yData,
            zlevel: 11

        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barGap: '-135%',
            data: maxData,
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        },

    ]
};