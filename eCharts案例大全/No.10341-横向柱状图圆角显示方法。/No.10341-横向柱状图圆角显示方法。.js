app.title = '世界人口总量 - 条形图';

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
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
    },
    yAxis: {
        type: 'category',
        data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [30, 60, 70, 80, 90, 30],
            itemStyle: {
                        normal: {
                            barBorderRadius: [0, 100, 100, 0],// 圓角
                          
                        }
                    },
            barGap: '-50%',
            z:100,
            
        },
        {
            name: '2012年',
            type: 'bar',
            barGap: '-100%',
            label: {
                normal: {
                    show: true,
                    formatter: function (param) {
                                   
                                    return (100 - param.value) + '%';
                                },
                }
            },
            data: [100, 100, 100, 100, 100, 100],
            z:50,
        }
    ]
};
