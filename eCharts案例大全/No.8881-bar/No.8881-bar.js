option = {
    backgroundColor: "#1A1835",
    color: ["#6F7DE3"],
    grid: {
        top: "8%",
        right: "8%",
        left: "8%",
        bottom: "10%",
        textStyle: {
            color: "#fff"
        }
    },
    xAxis: [{
        type: 'category',
        show: true,
        axisLabel: {
            fontSize: 18,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(204,187,225,0.6)',
            }
        },
        data: ['北京', '上海', '深圳', '杭州', '南京', '武汉', '苏州', '重庆', '大连', '天津', '青岛', ],
        axisPointer: {
            type: 'shadow'
        },
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                fontSize: 18,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(204,187,225,0.6)'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(204,187,225,0.2)",
                }
            },
            min: 0,
            max: 300,
            interval: 100,

        },

    ],
    series: [{

        type: 'bar',
        barWidth: '62%',
        data: [{
            value: 288,
        }, {
            value: 264,
        }, {
            value: 250,
        }, {
            value: 241,
        }, {
            value: 207,
        }, {
            value: 190,
        }, {
            value: 141,
        }, {
            value: 127,
        }, {
            value: 111,
        }, {
            value: 107,
        }, {
            value: 85,
        },]
},]
};