let data = {
    num: [4312,3601,3920,3596,3389,1312],
    pct: [34.6, 27.31, 12.1, 10.8, 9.6, 7.6],
}

let colors = ['#1890FF', '#27CAFF'];
let splitNumber = 5;//分割线

option = {
    color: colors,
    backgroundColor: '#fff',
    title: {
        text: '质量问题排列图',
        x: 'center',
        textStyle: { color: '#2D527C', fontSize: '20', fontWeight: 'bold'},
        subtextStyle: { color: '#2D527C', fontSize: '14', fontWeight: 'bold' }
    },
    grid: {
        top: '20%',
        bottom: '10%',
        left: '15%',
        right: '15%',
    },
    legend: {
        top: '9%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
    },
    xAxis: {
        type: 'category',
        axisTick: { show: false },
        axisLabel: {
            textStyle: { color: '#333333', fontSize: 14 }
        },
        axisLine: {
            show: false,
            lineStyle: { color: '#1890FF' }
        },
        data: ['外观', '包装', '尺寸', '功能', '运输', '其他']
    },
    yAxis: [{
        name:'数量',
        type: 'value',
        position: 'left',
        min: 0,
        max: 5000,
        splitNumber: splitNumber,
        interval: (5000 - 0) / splitNumber,
        splitLine: {
            lineStyle: { type: 'dashed', color: '#707070' }
        },
        axisLine: { show: false },
        axisTick: { show: false }
    }, {
        name:'百分比',
        type: 'value',
        position: 'right',
        offset: 65,
        min: 0,
        max: 100,
        splitNumber: splitNumber,
        interval: (100 - 0) / splitNumber,
        splitLine: { show: false },
        axisLine: { show: false },
        axisLabel: {
            // formatter: '{value}°C',
            formatter: function(value, index) {
                return parseInt(value) + '%';
            },
            textStyle: { color: "#333333", fontSize: 14 }
        },
        axisTick: { show: false }
    }],
    series: [
        //柱状图数据来源
        {
            name: '质量问题数量',
            type: 'bar',
            barWidth: '40%',
            data: data.num,//可替换为mock
            label: {
              show: true,
              position: "top",
              distance: -20,
              color: "#FFF",
            },
        },
        //折线图数据来源
        {
            name: '质量问题百分比',
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,//折线图，节点圆圈大小
            yAxisIndex: 1,
            data: data.pct,//可替换为mock
            label: {
              show: true,
              position: "top",
              distance: 10,
              color: "#333333",
            },
        },
    ]
};