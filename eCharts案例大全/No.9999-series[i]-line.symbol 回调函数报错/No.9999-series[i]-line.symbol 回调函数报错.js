option = {
    title: {
        text: 'series[i]-line.symbol 回调函数测试'
    },
    xAxis: {
        data: ['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none']
    },
    yAxis: {},
    series: [{
        type: 'line',
        //symbol:function(value,params){
        //    console.log(params);
        //    return params.name  ;
        //},
        symbolSize:function(value,params){
            console.log(params)
            return params.name.length;
        },
        data:[220, 182, 191, 234, 290, 330, 310, 123, 231]
    }]
};