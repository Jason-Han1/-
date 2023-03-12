option={
    title:{text:"aaaa"},
    legend:{data:["cy"]},
    xAxis:{data:['aaa','bbb','ccc','ddd']},
    yAxis:[{},{}],
    series:[{
        type:'line',
        data:[123,231,132,180],
        markPoint:{
            data:[{type:'max'}]
        },
        markLine:{data:[{type:'average'}]}
        
    },{
        type:'bar',
        data:[13,21,32,18],
        yAxisIndex: 1,
        markPoint:{data:[{type:'min'}]},
        markLine:{data:[{type:'average'}]}
    }]
    
    
    
}