option = {
    title: {
        text: ''
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 10,
            color: '#565656'
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
         axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 10,
            color: '#929292',
            height: 38,
            padding: [20, 0, 0],
            inside: true
        },
        splitLine: {
            lineStyle: {
                color: '#eee'
            },
        },
    },
    series: [{
        type: 'line',
        symbol: 'none',
        lineStyle: {
            color: '#abb8d7'
        },
        data:[2200, 1802, 1091, 2034, 2090, 3030, 3100],
        markLine:{
            symbol:"none",
            label:{
                show:false,
            },
            lineStyle:{
                type:"dotted",
                width:2
            },
            data: [{
                lineStyle: {
                    color:'#16AC3E',
                },
                yAxis: 2000
            }, {
                lineStyle: {
                    color:'#F43939',
                },
                yAxis: 3000
            }]
        },
    }]
};