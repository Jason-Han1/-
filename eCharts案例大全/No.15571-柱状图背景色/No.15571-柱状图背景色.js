option = {
    title: {
        text: "222",
        subtext: "数据来自网络",
        sublink: "http://"
    },
    tooltip: {
        trigger: "axis",
        show:false
    },
    legend: {
        data: ["2011年"]
    },
    calculable: true,
    xAxis: [{
        type: "value",
        boundaryGap: [0, 0],

        show: false,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }

    }],
    yAxis: [{
        type: "category",
        data: ["巴西", "印尼", "美国", "印度", "中国", "非洲"],
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },{
        type: "category",
        data: [18203, 23489, 29034, 104970, 131744, 630230],
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
            name: "2011年",
            type: "bar",
            z: 10,
            tooltip:{
             show:false
            },
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        }, {
            type: "bar",
            silent: true,
            itemStyle: {
                normal: {
                    color: '#ddd'
                }
            },
            tooltip:{
             show:false
            },
            barGap: '-100%',
            data: [700000, 700000, 700000, 700000, 700000, 700000]
        }

    ]
};