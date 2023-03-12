var charts = {
    unit: '数值',
    names: ['负压/Kpa', '正压/Mpa','电压/V'],
    lineX: ['15:00','15:01','15:02','15:03','15:04','15:05','15:06','15:07','15:08','15:09','15:10','15:11','15:12','15:13','15:14','15:15'],
    value: [
        [4510, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236],
        [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325],
        [220, 125, 80, 192, 120, 180, 192, 80, 150, 153, 152, 128, 125, 145, 65, 125]
    ]

}
var color = ['rgba(23, 255, 243', 'rgba(119,61,190','rgba(0,0,255']
var lineY = []

for (var i = 0; i < charts.names.length; i++) {
    var x = i
    
    var data = {
        name: charts.names[i],
        type: 'line',
        color: color[x] + ')',
        smooth: true,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color[x] + ', 0.3)'
                }, {
                    offset: 0.8,
                    color: color[x] + ', 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        symbol: 'circle',
        symbolSize: 5,
        data: charts.value[i]
    }
    lineY.push(data)
}
var option = {
    backgroundColor:'#0d235e',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: charts.names,
        textStyle: {
            fontSize: 12,
            color: 'rgb(0,253,255,0.6)'
        },
        right: '4%'
    },
    grid: {
        top: '14%',
        left: '4%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: charts.lineX,
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        },
        axisLabel: {
            textStyle: {
                color: 'rgb(0,253,255,0.6)'
            },
            formatter: function(params) {
                return params.split(' ')[0] 
            }
        }
    },
    yAxis: {
        name: charts.unit,
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: 'rgb(0,253,255,0.6)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(23,255,243,0.3)'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    dataZoom:{
        type:'inside',
        start:50,
        end:100
    },
    series: lineY
}