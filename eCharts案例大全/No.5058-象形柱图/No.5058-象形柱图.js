option = {
  tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function (params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {
        data: ['驯鹿', '火箭', '飞机', '高铁', '轮船', '汽车', '跑步', '步行', ],
        axisTick: {show: true},
        axisLine: {show: true},
        axisLabel: {
            textStyle: {
                color: '#e54035'
            }
        }
    },
    yAxis: {
        splitLine: {show: true},
        axisTick: {show: true},
        axisLine: {show: true},
        axisLabel: {show: true}
        
    },
    color: ['#F23BD0'],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        //位置偏移
        barCategoryGap: '-10%',
        //图形宽度
        barWidth:50,
        //图形形状
        symbol: 'path:// M549.3,735.9c-23.9-168-38.9-583.1-42.2-680.3c0-0.3-0.5-0.3-0.5,0c-3.3,97.2-18.3,512.3-42.2,680.3c-27.1,191-96.3,241.4-96.3,241.4h277.5C645.6,977.3,576.5,926.9,549.3,735.9z',
        itemStyle: {
            normal: {
                opacity: 0.9
            },
            emphasis: {
                opacity: 1
            }
        },
        data: [123, 60, 25, 18, 12, 9, 20, 111],
        z: 10
    }, {
        name: 'glyph',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'end',
        symbolSize: 50,
        symbolOffset: [0, '-120%']
    }]
};
