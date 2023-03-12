option = {
    backgroundColor: "#fff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],

    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
    },
    yAxis: {
        type: 'value'
    },
    series: [{

        type: 'line',
        smooth: true,
        symbolSize: 1,
        symbol: 'circle',
        areaStyle: {
            normal: {
                opacity: "0.4",
            }
        },
        data: [20, 82, 101, 134, 90, 230, 210]
    }, {
        type: 'line',
        smooth: true,
        symbolSize: 1,
        symbol: 'circle',
        areaStyle: {
            normal: {
                opacity: "0.4",
            }
        },
        data: [25, 72, 131, 114, 110, 270, 250]
    }, {
        type: 'line',
        smooth: true,
        symbolSize: 1,
        symbol: 'circle',
        areaStyle: {
            normal: {
                opacity: "0.4",
            }
        },
        data: [17, 62, 71, 94, 190, 150, 76]
    }, {
        type: 'line',
        smooth: true,
        symbolSize: 1,
        symbol: 'circle',
        areaStyle: {
            normal: {
                opacity: "0.4",
            }
        },
        data: [8, 36, 71, 134, 60, 198, 131]
    }, {
        type: 'line',
        smooth: true,
        symbolSize: 1,
        symbol: 'circle',
        areaStyle: {
            normal: {
                opacity: "0.4",
            }
        },
        data: [32, 121, 164, 90, 80, 187, 120, ]
    }]
};