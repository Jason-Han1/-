option = {
    title: {
        text: 'series[i]-line.smooth'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    legend:{},
    tooltip:{
        formatter:'{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>{a}<br/>{c}<br/>',
        enterable:true,
        confine:true,
        //triggerOn:'click',
        extraCssText:'height:50%;overflow-Y:scroll;'
    },
    series: [{
        name:'smooth = 0.5',
        type: 'line',
        //id: 'test1',
        smooth: 0.5,
        data:[220, 182, 191, 234, 290, 230, 310]
    }, {
        name:'smooth = 0',
        type: 'line',
        //id: 'test1',
        smooth: 0,
        data:[220, 182, 191, 234, 290, 230, 310].map(x=>x-60)
    }, {
        type: 'line',
        name:'smooth = 1',
        //id: 'test1',
        smooth: 1,
        data:[220, 182, 191, 234, 290, 230, 310].map(x=>x-120)
    }]
};

myChart.on('click',function(params){
    console.log(params);
});