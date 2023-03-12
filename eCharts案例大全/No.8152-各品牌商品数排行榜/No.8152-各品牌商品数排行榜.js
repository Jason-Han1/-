const set = [
    ['品牌', '商品数量'],
    ['格力', 800],
    ['海尔', 1200],
    ['小狗', 1400],
    ['华帝', 1899],
    ['美的', 2233]
];

option = {
    dataset:{
        source:set
    },
    grid:{
        left:80,
        right:8,
        bottom:32,
        top:40
    },
    xAxis: {
        show:false
    },
    tooltip:{
        
    },
    dataZoom:{
        type:'slider',
        yAxisIndex:0,
        width:16,
        left:8
    },
    yAxis: {
        name:'各品牌商品数量',
        type:'category'
    },
    series: [{
        type: 'bar',
        name:'商品数量',
        barWidth:'60%',
        encode:{
            x:1,
            y:0
        },
        markLine:{
             data : [
                    {type : 'average', name : '平均值'}
                ],
            symbol:'none',
            lineStyle:{
                color:'#AAAAAA'
            },
            label:{
                position:'start',
            }
        }
    }]
};
myChart.resize(
    {
        width:240,
        height:320
    }
)