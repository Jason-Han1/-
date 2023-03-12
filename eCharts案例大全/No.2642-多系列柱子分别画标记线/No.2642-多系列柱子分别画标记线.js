option = {
    legend: {top: 10},
    tooltip: {trigger: 'axis'},
    xAxis: [{
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7'],
    },{
        //为了同系统的柱子叠一起 多加一个x轴
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7'],
        show: false 
    }],
    yAxis: [{}],
    series: [{
        name: '2020',
        type: 'bar',
        data: [80, 80, 97, 53, 95, 86, 52],
        barWidth: 20,
        
    },{
        name: '2021',
        type: 'bar',
        data: [80, 80, 97, 53, 95, 26, 52],
        barWidth: 20
    },
    {//目标值
        name: '2020',
        type: 'bar',
        data: [60, 50, 40, '', '', 60, ''],//放数据的时候判断一下  对应月份没有超标的时候放个空值
        barWidth: 20,
        xAxisIndex: 1, //指定新增的x轴
        tooltip: { 
            show: false
        },
        itemStyle: {//柱子透明
            color: 'rgba(0,0,0, 0)'
        },
        label: {//用label画一个线
            show: true,
            position: 'top',
            width: 30,
            height: 0,
            borderColor: '#f00',
            borderWidth: 1,
            borderType: [2, 5],
            offset: [0, 5],
            formatter: ''
        }
    },{//目标值
        name: '2021',
        type: 'bar',
        data: [70, 70, 70, '', 70, '',''],
        barWidth: 20,
        xAxisIndex: 1,
        tooltip: {
            show: false
        },
        itemStyle: {
            color: 'rgba(0,0,0, 0)'
        },
        label: {
            show: true,
            position: 'top',
            width: 30,
            height: 0,
            borderColor: '#f00',
            borderType: [2, 5],
            borderWidth: 1,
            offset: [0, 5],
            formatter: ''
        }
    }]
};
