option = {
    backgroundColor: '#031245',
    legend:{
       show:true,
       color: ["#63caff", "#49beff"],
       data:['仓储量','存粮量'],
       textStyle:{
           color:'#fff'
       }
    },
    color: ["#63caff", "#49beff", "#03387a", "#03387a", "#03387a"],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params) {
            var res = '<div><p>&nbsp;&nbsp;单位：' + params[0].name + '</p></div>'
            res = res + '<p>存粮量：' + params[0].data + '</p>';
            res = res + '<p>仓储量：' + params[3].data + '</p>';
            res = res + '<p>剩余量：' + (params[3].data - params[0].data) + '</p>'
            return res;
        },
    },
    grid: {
        containLabel: true,
        left: 20,
        right: 20,
        bottom: 10,
        top: '5%'
    },
    xAxis: {
        type: "category",
        axisLabel: {
            color: "#c0c3cd",
            fontSize: 14
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#384267",
                width: 1,
                type: "dashed"
            },
            show: true
        },
        data: ["A", "B", "C", "D", "E", "F", "G", "H"]
    },
    yAxis: {

        axisLabel: {
            color: "#c0c3cd",
            fontSize: 14
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#384267",
                type: "dashed"
            }
        },
        axisLine: {
            lineStyle: {
                color: "#384267",
                width: 1,
                type: "dashed"
            },
            show: true
        }
    },
    series: [{
        name:'仓储量',
        data: [200, 85, 112, 275, 305, 415, 741, 405],
        type: "bar",
        barMaxWidth: 'auto',
        barWidth: 30,
        itemStyle: {
            color: {
                x: 0,
                y: 0,
                x: 0,
                y: 1,
                type: "linear",
                global: false,
                colorStops: [{
                    offset: 0,
                    color: "#0b9eff"
                }, {
                    offset: 1,
                    color: "#63caff"
                }]
            }
        },
        label: {
            show: true,
            position: "top",
            distance: 10,
            color: "#fff"
        }
    }, {
        data: [1, 1, 1, 1, 1, 1, 1, 1],
        type: "pictorialBar",
        barMaxWidth: "20",
        symbol: "circle",
        symbolOffset: [0, "50%"],
        symbolSize: [30, 15]
    }, {
        name:'仓储量',
        data: [200, 85, 112, 275, 305, 415, 741, 405],
        type: "pictorialBar",
        barMaxWidth: "20",
        symbolPosition: "end",
        symbol: "circle",
        symbolOffset: [0, "-50%"],
        symbolSize: [30, 12],
        zlevel: 2
    }, {
        name:'存粮量',
        data: [741, 741, 741, 741, 741, 741, 741, 741],
        type: "bar",
        barMaxWidth: "auto",
        barWidth: 30,
        barGap: "-100%",
        zlevel: -1
    }, {
        dat: [1, 1, 1, 1, 1, 1, 1, 1],
        type: "pictorialBar",
        barMaxWidth: "20",
        symbol: "circle",
        symbolOffset: [0, "50%"],
        symbolSize: [30, 15],
        zlevel: -2
    }, {
        name:'存粮量',
        data: [741, 741, 741, 741, 741, 741, 741, 741],
        type: "pictorialBar",
        barMaxWidth: "20",
        symbolPosition: "end",
        symbol: "circle",
        symbolOffset: [0, "-50%"],
        symbolSize: [30, 12],
        zlevel: -1
    }],
}