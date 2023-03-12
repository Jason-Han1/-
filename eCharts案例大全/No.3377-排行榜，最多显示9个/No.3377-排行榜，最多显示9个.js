source = [
    ['品牌', '指标提及率', '变化'],
    ['realme12GT', 92, 2],
    ['realmeGT2', 102, 2],
    ['iQOO U3系1列', 143, 1],
    ['realmeGT', 182, 1],
    ['iQOO U3系列', 183, 1],
    ['iQOO Neo5系列', 184, 3],
    ['iQOO Z1系列', 191, 2],
    ['荣耀V40轻奢版', 192, 3],
    ['realmeX50', 200, 2],
    ['红米Note5A', 200, 1],
    ['X50Pro+', 211, 1],
    ['iQOO U1系列', 243, 3],
    ['X50Pro玩家版', 500, 2]
];
myChart.resize({width:432,height:408})

option = {
    // backgroundColor:'grey',
    dataset:{
        source:source
    },
    grid:{
        left:160,
        top:16,
        bottom:24,
        right:16
    },
    dataZoom:{
        type:'slider',
        yAxisIndex:[0],
        left:16,
        width:24,
        start:30,
        end:100
    },
    visualMap:{
        type:'piecewise',
        min:0,
        max:3,
        splitNumber:3,
        color:['red', '#027DB4','green', ],
        show:false,
        // categories:['上升','平稳','下降']
    },
    yAxis: {
        type:'category'
    },
    xAxis: {
        axisLine:{show:false},
        axisTick:{show:false},
        splitNumber:2,
        show:false
    },
    series: [{
        type: 'bar',
        barWidth:'60%',
        encode:{x:1,y:0},
        label:{
            show:true,
            position:'right',
        },
    }]
};