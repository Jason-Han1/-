let pipedata = [1917.96, 1917.47]
let seriesData = []
seriesData.push({
    value: pipedata[0],
    symbolSize: 11,
    itemStyle: {
        color: '#4272FF',
        borderWidth: 3
    },
    label: {
        show: true,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        position: 'bottom',
    }
})
seriesData.push({
    value: (pipedata[1] - pipedata[0]) / 2 + pipedata[0],
    symbol: 'arrow',
    symbolSize: 14,
    symbolRotate: 0.0177854 * 57.3 + 270,
    itemStyle: {
        color: '#FF9D3B',
    },
    label: {
        show: true,
        fontSize: 18,
        color: '#4272FF',
        formatter: function(params) {
            return 'a';
        }
    }
})
seriesData.push({
    value: pipedata[1],
    symbolSize: 11,
    itemStyle: {
        color: '#4272FF',
        borderWidth: 3
    },
    label: {
        show: true,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        position: 'bottom',
    }
})

option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: [0, 2, 4]
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: seriesData,
        lineStyle: {
            color: '#4272FF',
            width: 3
        }
    }]
};