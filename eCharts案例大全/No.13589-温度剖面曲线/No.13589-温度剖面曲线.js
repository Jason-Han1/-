option = {
    legend: {
        data:['温度剖面曲线']
    },
    tooltip: {
        trigger: 'axis',
        formatter: "Temperature : <br/>{b}km : {c}°C"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        position:'top',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {onZero: false},
        axisLabel: {
            formatter: '{value} m'
        },
        boundaryGap: false,
        data: [ '-40', '-35', '-30', '-25', '-20', '-15', '-10', '-5','0']
    },
      toolbox: {
        left:20,
        show: true,
        feature: {
            saveAsImage: {
                pixelRatio:2
            }
        }
    },
    series: [
        {
            name: '温度剖面曲线',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(0,0,0,0.4)',
                    shadowBlur: 10,
                    shadowOffsetY: 10
                }
            },
            data:[5.4, 8.5, 5.8,9.6, 12.2, 12.8,13.5, 15, 18.1]
        }
    ]
};