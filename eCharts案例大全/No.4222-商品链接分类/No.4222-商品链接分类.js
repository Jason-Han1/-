source = [
    ['商品链接状态', '数量', '颜色'],
    ['新发现', 1243, 1],
    ['已添加', 2231, 2],
    ['易忽略', 354, 3]
];
myChart.resize({width:296,height:160})

option = {
    dataset:{
        source:source
    },
    grid:{
        left:16,
        top:8,
        bottom:24,
        right:16
    },
    visualMap:{
        type:'piecewise',
        min:1,
        max:3,
        splitNumber:3,
        color:['#1574B3', '#CDB446', '#D07B49'],
        show:false
    },
    xAxis: {
        type:'category'
    },
    yAxis: {
        axisLine:{show:false},
        axisTick:{show:false},
        splitNumber:2,
        show:false
    },
    series: [{
        type: 'bar',
        barWidth:'60%',
        encode:{x:0,y:1},
        label:{
            show:true,
            position:'outside',
        },
    }]
};