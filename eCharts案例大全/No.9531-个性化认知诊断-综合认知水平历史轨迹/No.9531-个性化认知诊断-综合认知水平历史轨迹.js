option = {
    backgroundColor:'#fff',
    title: {
        text: '综合认知水平历史轨迹',
        left:'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温','最低气温'],
        right:'20',
        top:'10',
        orient:'vertical'
    },
    xAxis:  {
        name:'日期',
        type: 'category',
        boundaryGap: false,
        data: ['10-01','10-02','10-03','10-04','10-05','10-06','10-07']
    },
    yAxis: {
        name:'认知能力值',
        type: 'value',
    },
    series: [
        {
            name:'最高气温',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                ]
            },
        },
        {
            name:'最低气温',
            type:'line',
            data:[1, 8, 2, 5, 3, 2, 0],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                ]
            },

        }
    ]
};
