data = [{
        name: "常规",
        value: 175.17
    },
    {
        name: "紧急",
        value: 148.35
    },
    {
        name: "疑难",
        value: 95.36
    }
];
xAxisData = [];
seriesData1 = [];
sum = 0;
barTopColor = ["#02c3f1", "#53e568", "#a154e9"];
data.forEach(item => {
    xAxisData.push(item.name);
    seriesData1.push(item.value);
    sum += item.value;
});
option = {
    backgroundColor:'black',
    tooltip: {
        trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
        formatter: function(params, ticket, callback) {
                 const item = params[3]
                 return item.name + ' : ' + item.value;
             }
         },
    grid:{
        top: '5%',
        left: '1%',
        right: '1%',
        bottom: 0,
        containLabel: true
    },
    xAxis: {
        data: xAxisData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true
        },
        axisLabel: {
            show: true,
            margin: 15,
            textStyle: {
                fontSize: 14,
                color: '#ffffff'
            }
        },
        interval: 0
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: true
        },
        axisLine: {
            show: true
        },
        axisLabel: {
            show: true
        }
    },
    series: [{
        name: '柱顶部',
        type: 'pictorialBar',
        symbolSize: [26, 10],
        symbolOffset: [0, -5],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {
                    return barTopColor[params.dataIndex];
                },
                opacity: 0.5
            }
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 16,
            formatter: function(params, index) {
                return (params.value / sum * 100).toFixed(2) + '%';
            },
        },
        symbolPosition: 'end',
        data: seriesData1,
    }, {
        name: '柱底部',
        type: 'pictorialBar',
        symbolSize: [26, 10],
        symbolOffset: [0, 0],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {
                    return barTopColor[params.dataIndex];
                }
            }
        },
        data: seriesData1
    }, {
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {return barTopColor[params.dataIndex]},
                opacity: 0.3
            }
        },
        z: 16,
        silent: true,
        barWidth: 26,
        barGap: '-100%', // Make series be overlap
        data: seriesData1
    }, {
        name: '最上层立体圆',
        type: 'pictorialBar',
        symbolSize: [26, 10],
        symbolOffset: [0, -5],
        z: 12,
        itemStyle: {
            normal: {
                color: '#363F5E'
            }
        },
        data: [{
            value: sum,
            symbolPosition: 'end'
        },{
            value: sum,
            symbolPosition: 'end'
        },{
            value: sum,
            symbolPosition: 'end'
        }]
    },{
        //上部立体柱
        stack: '1',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#36405E',
                opacity: .7
            }
        },
        silent: true,
        barWidth: 26,
        barGap: '-100%', // Make series be overlap
        data: [sum,sum,sum]
    }]
};