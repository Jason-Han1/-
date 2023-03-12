data = (function(){
    let ret = [];
    for (var i = 0; i < 2000; i++) {
        ret.push([i, Math.random()]);
    }
    return ret;
})();

dataAverage = data.map(function(item){
    return [item[0], item[1] + 1];
});

dataSum = data.map(function(item){
    return [item[0], item[1] + 2];
});

dataMax = data.map(function(item){
    return [item[0], item[1] + 3];
});

dataMin = data.map(function(item){
    return [item[0], item[1] + 4];
});

dataAll = {
    'none': data,
    'average': dataAverage,
    'sum': dataSum,
    'max': dataMax,
    'min': dataMin
};

option = {
    title: {
        text: 'series[i]-line.sampling'
    },
    legend:{
        top: '5%'
    },
    tooltip:{},
    xAxis: {},
    yAxis: {},
    series: ['none', 'average', 'sum', 'max', 'min'].map(function(item){
        return {
            type: 'line',
            name: item,
            sampling: item,
            data: dataAll[item]
        };
        
    })
};