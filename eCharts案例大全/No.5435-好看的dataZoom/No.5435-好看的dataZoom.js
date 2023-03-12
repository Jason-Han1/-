let xAxisData = []
let startTime = +new Date(2020, 10, 10)
for (let i = 0; i < 1000; i++) {
    xAxisData.push(echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', startTime));
    startTime += 1000
}

function generateSeriesData () {
    let data = []
    for (let i = 0; i < 1000; i++) {
        data.push(i % 30 === 0
            ? Math.random() * 700
            : (600 + Math.random() * 500 - 250))
    }
    return data
}
let seriesData = []


option = {
    tooltip: {
        trigger: 'axis',
       backgroundColor: 'rgba(50,50,50,.2)',
       textStyle: {
           color: '#222'
       }
    },
    grid: {
        left: 60,
        right: 60
    },
    legend: {
        itemWidth: 14,
        itemHeight: 4
    },
    xAxis: [{
        axisLine: { show: false },
        axisTick: {length: 0},
        axisLabel: {
            color: 'rgba(0,0,0,0.45)'
        },
        data: xAxisData,
    }],
    yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: {show: false},
        axisLabel: {color: '#666'},
        splitLine: {
            lineStyle: {
                type: 'dotted',
                color: '#000',
                opacity: 0.23
            }
        }

    },
    color: ['#fcf', '#fc3', '#f63', '#fc9', '#0fc', '#ff9', '#966'],
    dataZoom: [{
        type: 'slider',
        height: 20,
        bottom: 8,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#409eff",
        },
        textStyle:{
            color:"#666",
        },
        fillerColor:"rgba(255,255,255,0.2)",
        borderColor: "rgba(64,158,225,0.3)",

    }, {
        type: 'inside'
    }],
    series: [{
        type: 'bar',
        name: '访问控制',
        symbol: 'none',
        barMaxWidth: 25,
        data: generateSeriesData()
    }, {
        type: 'bar',
        name: '访问限速',
        symbol: 'none',
        barMaxWidth: 25,
        data: generateSeriesData()
    }, {
        type: 'bar',
        name: '状态码限速',
        symbol: 'none',
        barMaxWidth: 25,
        data: generateSeriesData()
    }]
}


