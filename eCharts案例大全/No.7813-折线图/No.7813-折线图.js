option = {
    color: ['#ed7a2c', '#5b9bd5', '#a5a5a5'],
    grid: {
        bottom: 60,
    },
    title: {
        text: '尾矿库溃坝风险指标动态评估趋势图',
        x: 'center',
        textStyle: {
            fontWeight: 400,
            fontSize: '13'
        }
    },
    tooltip: {
        trigger: 'axis',
        confine: true,
        textStyle: {
            fontSize: 12
        }
    },
    xAxis: {
        type: "category",
        data: ["17日", "18日", "19日", "20日", "21日", "22日", "23日", "24日"],
    },
    yAxis: {
        type: "value"
    },
    series: [{
        name: "远安县明宇矿业有限公司老林坡尾矿库",
        type: "line",
        markLine: {
            lineStyle: {
                width: 2
            },
            label: {
                position: "insideEndTop",
                formatter: "{b}",
                color: "#333"
            },
            symbolSize: 0,
            data: [{
                name: "红色风险",
                yAxis: 720,
                lineStyle: {
                    color: "#f60902"
                }
            }, {
                name: "橙色风险",
                yAxis: 240,
                lineStyle: {
                    color: "#f89933"
                }
            }, {
                name: "黄色风险",
                yAxis: 80,
                lineStyle: {
                    color: "#facc00"
                }
            }, {
                name: "蓝色风险",
                yAxis: 50,
                lineStyle: {
                    color: "#65a1d7"
                }
            }]
        },
        data: [102.3, 103.3, 10.3, 102.3, 110.3, 310.3, 610.3, 730.3]
    }, {
        name: "远安县明宇矿业有限公司老林坡尾矿库2",
        type: "line",
        data: [85.3, 15.3, 445.3, 225.3, 35.3, 15.3, 355.3, 335.3]
    }]
};