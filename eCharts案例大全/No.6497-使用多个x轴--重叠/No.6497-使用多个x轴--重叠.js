option = {
    backgroundColor: '#0E2A43',
    title: {
        text: "使用多个x轴--重叠",
        left: "center",
        top:"10",
        textStyle: {
            color: '#0fa9ee',
            fontSize: 24,
        }
    },
    xAxis: [{
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            }
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },{
        show:false,
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }],
    
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#aaa',
            }
        },
    },
    color:["#cf78c2","#0985bd","#06a097","#C96DD8","#0fa9ee","#08c5cb"],
    series: [{
        type: "bar",
        barWidth: 20,
        itemStyle:{
            barBorderRadius:[10,10,0,0],
        },
        data:  ["20", "55", "50", "45", "55", "50", "45"],
    },{
        type: "bar",
        barWidth: 20,
        itemStyle:{
            barBorderRadius:[10,10,0,0],
        },
        data:  ["47", "40", "66", "74","40", "66", "74",],
    },{
        type: "bar",
        barWidth: 20,
        itemStyle:{
            barBorderRadius:[10,10,0,0],
        },
        data:  ["47", "59", "30", "74","59", "30", "64",],
    },{
        type: "bar",
        xAxisIndex:1,
        barWidth: 20,
        data:  [],
    },{
        type: "bar",
        xAxisIndex:1,
        barWidth: 20,
        itemStyle:{
            barBorderRadius:[10,10,0,0],
        },
        data:  ["20", "12", "45", "30","32", "45", "24",],
    },{
        type: "bar",
        xAxisIndex:1,
        barWidth: 20,
        itemStyle:{
            barBorderRadius:[10,10,0,0],
        },
        data:  ["8","","","40"],
    },]
};