app.title = '世界人口总量 - 条形图';

option = {
    title: {
        text: '全市有效事件',
        subtext: '2019年4月23日'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['有效事件', '事件']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['成华区','青羊区','锦江区','金牛区','天府新区','全市']
    },
    series: [
        {
            name: '有效事件',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '事件',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};
