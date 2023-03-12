var dataStore = [
    {
        name: '小区1',
        first: 25,
        second: 35,
        third: 45,
        fourth: 55
    },{
        name: '小区2',
        first: 10,
        second: 50,
        third: 70,
        fourth: 90
    },{
        name: '小区3',
        first: 25,
        second: 35,
        third: 45,
        fourth: 55
    },{
        name: '小区4',
        first: 25,
        second: 35,
        third: 45,
        fourth: 55
    },{
        name: '小区5',
        first: 25,
        second: 35,
        third: 45,
        fourth: 55
    },
];
var series = [];
dataStore.forEach((item,index)=>{
    let data = [];
    data.push({
        name: '第一周',
        value: item.first,
        offset: [10,10+index]
    })
    data.push({
        name: '第二周',
        value: item.second,
        offset: [10,10+2+index]
    })
    data.push({
        name: '第三周',
        value: item.third,
        offset: [10,10+3+index]
    })
    data.push({
        name: '第四周',
        value: item.fourth,
        offset: [10,10+4+index]
    })
    series.push({
        name: item.name,
        data: data
    })
})

option = {
    xAxis: {},
    yAxis: {},
    tooltip: {
        show: true
    },
    legend: {
        show: true,
        right: 15,
        top: 'center',
        orient: 'vertical'
    },
    series: series.map(item=>{
        return {
            type: 'scatter',
            data: item.data,
            name: item.name
        }
    })
};
