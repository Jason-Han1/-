// timeseries 折线图

var data = {
    // x轴时间数据
    ts: ["2017-10-01", "2017-10-02", "2017-10-03"],
    // 系列数据（每个系列的数据项数量需要与ts保持一致）
    series:{
        A: [1 ,2 ,3],
        B: [1 ,6 ,7],
        C: [2 ,2 ,5]
    }
}

var legends = Object.keys(data.series)
var series = legends.map(key => {
    return {
        name: key,
        data: data.series[key].map((d,i) => [data.ts[i], d]),
        type: 'line'
    }
})

option = {
    legend: {
        data: legends
    },
    xAxis: {
        type: 'time'
    },
    yAxis: {
        show: true
    },
    tooltip: {
        show: true  
    },
    series: series
}