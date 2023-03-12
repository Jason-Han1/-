option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    legend:{
        data:["销售额","利润额","销售成本"]
    },
    series: [{
        name: "销售额",
        type: 'scatter',
        data:[220, 182, 191, 234, 290, 330, 310],
        symbol:'circle'
    },{
        name: "利润额",
        type: 'scatter',
        data:[128, 94, 105, 100, 98, 84, 213],
        symbol: 'emptyArrow'
    },{
        name: "销售成本",
        type: 'scatter',
        data:[200, 166, 134, 211, 230, 298, 276],
        symbol: 'pin'
    }]
};