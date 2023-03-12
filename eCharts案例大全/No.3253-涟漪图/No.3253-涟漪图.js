option = {
    backgroundColor: "#0f375f",
    color: ["rgba(15,179,243,0.3)", "rgba(23,216,161,0.3)"],
    xAxis: {
        axisLine: {
            show:false
        },
        axisLabel: {
            show:false
        },
        splitLine: {
            show:false
        },
        max:10,
        min:0
    },
    yAxis: {
        axisLine: {
            show:false
        },
        axisLabel: {
            show:false
        },
        splitLine: {
            show:false
        },
        max:10,
        min:0
    },
    series: [{
        itemStyle: {
            color:"rgba(142,136,84,0)",
            borderColor: "rgba(142,136,84,1)",
            borderWidth: 2,
            shadowColor: "#17D8A1",
            shadowBlur: 10
        },
        symbol:'circle',
        symbolSize: function(val) {
            return val[1]*50;
        },
        showEffectOn: 'render',
        rippleEffect: {
            color:'rgba(142,136,84,0.5)',
            period:5,
            scale:2,
            brushType: 'fill'
        },
        data: [
            [5.0, 5.04]
        ],
        type: 'effectScatter'
    },{
        itemStyle: {
            color:"rgba(142,136,84,0)",
            borderColor: "rgba(142,136,84,1)",
            borderWidth: 2,
            shadowColor: "#17D8A1",
            shadowBlur: 10
        },
        symbol:'circle',
        symbolSize: function(val) {
            return val[1]*50;
        },
        showEffectOn: 'render',
        rippleEffect: {
            color:'rgba(142,136,84,1)',
            period:5,
            scale:2,
            brushType: 'stroke'
        },
        data: [
            [5.0, 5.04]
        ],
        type: 'effectScatter'
    }]
}