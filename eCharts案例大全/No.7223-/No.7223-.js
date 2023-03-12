const set = [
    ['轮次', '数量'],
    ['毕业', 261],
    ['15天', 465],
    ['7天', 412],
    ['4天', 178],
    ['2天', 173],
    ['1天', 498],
    ['12小时', 176],
    ['30分钟', 237],
    ['5分钟', 186]
];

option = {
    // backgroundColor:"#ccc",
    dataset: {
        source: set
    },
    xAxis: {
        type: 'value',
        show:false
    },
    yAxis: {
        type: 'category',
        // name:'记忆轮次'
    },
    tooltip: {
        show:true,
        formatter: params => {
            const {
                dimensionNames:dimensionNames,
                marker:marker,
                data:data
            } = params;
            return [`${dimensionNames}`,
            `${marker} ${data[0]} : ${data[1]}%`
                ].join("</br>")
        }

    },
    grid: {
        left: 80,
        top: 16,
        right: 48,
        bottom: 24
    },
    visualMap: {
        type: 'piecewise',
        categories: ["OPPO", "华为", "vivo"],
        dimension: 0,
        show: false,
        inRange: {
            // color:["#D96969","#1A9E59" , "#262626"]
        }
    },
    series: [{
        type: 'bar',
        barWidth: "60%",
        smooth: true,
        color: '#4A90E2',
        label: {
            show: true,
            formatter: params => {
                // console.log(params);
                return params.data[1]
            },
            position: 'right',
            color: "#7F7F7F"
        }
    }]
};
myChart.resize({
    width: 335,
    height: 280
})