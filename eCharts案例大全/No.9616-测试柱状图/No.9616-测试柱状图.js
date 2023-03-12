//app.title = '世界人口总量 - 条形图';

option = {
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
        show:false,
       // data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        position:'top',
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
            label:{
                show:true,
                position:'right'
            },
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        }
    ],
    color:['green']
};
