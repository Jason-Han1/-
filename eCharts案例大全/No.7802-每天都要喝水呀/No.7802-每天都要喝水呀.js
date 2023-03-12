
let data = [
        {
            date:"04-27",
            value: 1+1+1+1+1,
        },
        {
            date:"04-28",
            value:1+1+1+1+1,
        },
        {
            date:"04-29",
            value:1+1+1+1,
        },
        {
            date:"04-30",
            value:1+1+1+1,
        },
        {
            date:"05-07",
            value: 1+1+1,
        },
        {
            date:"05-11",
            value:1+1+1+1+1+1+1+1
        },
        {
            date:"05-12",
            value:1+1+1
        },
        {
            date:"05-13",
            value:1+1+1+1
        },
        {
            date:"05-14",
            value:1+1+1+1+1+1
        },
        {
            date:"05-15",
            value:4
        },
        {
            date:"05-18",
            value:7
        },
    
        {
            date:"05-19",
            value:2
        },
    
    ];
    let xData = []
    let yData = []
    for(let i =0;i<data.length;i++){
        xData.push(data[i].date)
        yData.push(data[i].value)
    }

option = {
    title: {
        text: '每天都要喝水呀',
        x:'center'
    },
    tooltip:{},
    grid:{
        
    },
    xAxis: {
        data:xData
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data:yData,
        barWidth:20,
        label:{
            show:true,
            position:"top",
            fontSize:"24"
        }
    }]
};