// Generate data
var category = ['202012','202101','202102','202103','202104','202105'];
var lineData = [150,70,80,110,100,120];
var barData = [100,20,30,60,50,70];
// option
option = {
    backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show:false
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{
        name: '折线',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        tooltip:{show:false},
        itemStyle: {color:'#3b54a8'},
        data: lineData
    }, {
        name: '当月满意率',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            barBorderRadius: 5,
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: '#14c8d4'},
                    {offset: 1, color: '#43eec6'}
                ]
            )
        },
        data: barData
    }, {
        name: '当月全市满意率',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: 'rgba(20,200,212,0.5)'},
                    {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                    {offset: 1, color: 'rgba(20,200,212,0)'}
                ]
            )
        },
        z: -12,
        data: lineData
    }, {
        name: '背景',
        type: 'pictorialBar',
        symbol: 'rect',
        tooltip:{show:false},
        itemStyle: {
            color: '#0f375f'
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
    }]
};