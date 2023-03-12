app.title = '世界人口总量 - 条形图';

option = {
    color:["#FF514C","#DA46F3","#51B7FF","#47DD5E","#FFE13A","#0000D0"],
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年',"2013年","2014年","2015年","2016年"]
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
        data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            stack:"a",
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '2012年',
            type: 'bar',
            stack:"a",
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        },
        {
            name: '2013年',
            type: 'bar',
            stack:"5",
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        },
        {
            name: '2014年',
            type: 'bar',
            stack:"5",
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '2015年',
            type: 'bar',
            stack:"k",
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        },
        {
            name: '2016年',
            type: 'bar',
            stack:"k",
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};
