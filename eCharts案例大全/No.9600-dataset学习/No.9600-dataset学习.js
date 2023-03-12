

option = {
    yAxis: {
        show: true,
        type: 'value'
    },
    xAxis: {
        show: true,
        type: 'category'
    },
    barWidth: 15,
    series: [{
        type: 'bar',
        encode: {
            x: 1,
            y: 0,
            // tooltip: [0, 2]
        },
    }, {
         type: 'line',
        encode: {
            x: 1,
            y: 2
        }
    }
    ],
    dataset: {
        source: [
            [12, '羊毛', 30, 40, 50],
            [10, '白菜', 20, 30, 40],
            [30, '毛衣', 40, 50,60]
        ]
    },
    tooltip: {
        show: true,
        formatter: (params) => {
            console.log(params, '--params')
        }
    }
    
};




// myChart.setOption(option)