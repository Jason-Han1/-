option = {
    backgroundColor: "#fff",
    color: ["#9FE6B8", "#37A2DA"],
    legend: {
        left: 'center',
 
        data: ['Toys', 'Food']
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Q1', 'Q2', 'Q3', 'Q4', ]
    },
    grid: {
        containLabel: true
    },
    yAxis: {

    },
    series: [{
            name: 'Toys',
            type: 'line',
            symbol: 'circle',
            symbolSize: 0,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            areaStyle: {
                normal: {
                    opacity: "0.7",
                }
            },
            data: [18, 28, 16, 19]
        },
        {
            name: 'Food',
            type: 'line',
            symbolSize: 0,
            symbol: 'circle',
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            areaStyle: {
                normal: {
                    opacity: "0.5",
                }
            },
            data: [16, 11, 28, 32, ]
        }
    ]
};