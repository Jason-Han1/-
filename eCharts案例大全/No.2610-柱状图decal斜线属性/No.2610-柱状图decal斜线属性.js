option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {
        data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['Mon', 'Tue']
    },
    series: [
        {
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [{value:320,itemStyle: {
                // color: item.color,
                borderColor: 'transparent',
                borderWidth: 2,
                decal: {
                  symbol: 'line',
                  dashArrayX: [2, 0],
                  dashArrayY: [2, 4],
                  symbolSize: 1,
                  rotation: -1.1,
                  color: 'rgba(0, 0, 0, 0.3)',
                },
              },},400],
        },
        {
            name: 'Search Engine',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [820, {value:1290,itemStyle: {
                // color: item.color,
                borderColor: 'transparent',
                borderWidth: 2,
                decal: {
                  symbol: 'line',
                  dashArrayX: [2, 0],
                  dashArrayY: [2, 4],
                  symbolSize: 1,
                  rotation: -1.1,
                  color: 'rgba(0, 0, 0, 0.3)',
                },
              }}]
        }
    ]
};