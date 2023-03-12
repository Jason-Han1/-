option = {
    backgroundColor: "#ffffff",
    color: ["#FFC25C", "#FD666D"],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        left: 'center',
        y: "2%",
        data: ['Coffee', 'Tea']
    },
    xAxis: {
        type: 'category',

        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0
        },
        data: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
    },
    grid: {
        containLabel: true
    },
    yAxis: {

    },
    series: [{
            name: 'Coffee',
            type: 'line',
            symbol: 'circle',
            symbolSize: 0,
            smooth: true,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            areaStyle: {
                normal: {
                    opacity: "0.6",
                }
            },
            data: [13, 25, 18, 20, 60, 30, 37, 50, 76, 30, 46, 75, 87, ]
        },

        {
            name: 'Tea',
            type: 'line',
            symbolSize: 0,
            symbol: 'circle',
            smooth: true,
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
            data: [7, 18, 28, 14, 30, 50, 32, 36, 50, 70, 36, 56, 70, 72]
        }
    ]
};