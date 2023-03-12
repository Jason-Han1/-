// Generate data
var category = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var lineData = [10,15,20,27,19,16,8,15,12,30,17,9,15,6,18,24,29,19,10,26];
var barData = [5,4,3,4,10,6,8,9,7,10,6,6,5,3,6,4,2,2,3,1];

// option
option = {
    backgroundColor: '#000D2E',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#333'
            }
        }
    },
    legend: {
        data: ['现场人员', '现场设备'],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        name :'时间',
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        name:'数量',
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{
        name: '现场人员',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
    }, {
        name: '现场设备',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#14c8d4'},
                        {offset: 1, color: '#43eec6'}
                    ]
                )
            }
        },
        data: barData
    }, {
        
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(20,200,212,0.5)'},
                        {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                        {offset: 1, color: 'rgba(20,200,212,0)'}
                    ]
                )
            }
        },
        z: -12,
        data: lineData
    }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: 'rgba(15,55,95,0.4)',
                opacity:0.1
            }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
    }]
};