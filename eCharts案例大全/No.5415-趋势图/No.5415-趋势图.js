option = {
    // title: {
    //     text: 'Awesome Chart'
    // },
    dataset: {
        source: [
            ["month", "num"],
            ["20/08", 26],
            ["20/09", 51],
            ["20/10", 8],
            ["20/11", 28],
            ["20/12", 60],
            ["21/01", 24],
            ["21/02", 71],
            ["21/03", 29],
            ["21/04", 52],
            ["21/05", 54],
            ["21/06", 48],
            ["21/07", 26],
        ]
    },
    xAxis: {
        type: "category",
        // data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
         symbol: 'circle',
         symbolSize:7,
        lineStyle: {
            // color:"#ffc7be",
            // color: "#ff010d"
            width:1
        },
        itemStyle: {
            borderType: "dotted",
            color: "#ff010d"
        },
        label: {
            show: true,
            formatter: "{@num}",
            // color: "#ff010d",
            padding: 10
        }
    }]
};