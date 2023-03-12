option = {
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    backgroundColor: '#fff',
    title: {
        text: '年度工单完成趋势',
        left: 'center',
        top: 20
    },
    yAxis: {
        type: 'value'
    },
    legend: {
        data: ['去年','今年'],
        right: 50,
        top: 20
    },
    series: [{
        name: '去年',
        data: [220, 332, 201, 334, 290,230, 320,310, 250, 301, 234, 290, 330, 220],
        type: 'line'
    },{
        name: '今年',
        data: [250, 362, 221, 304, 200,250, 380],
        type: 'bar'
    }]
};
