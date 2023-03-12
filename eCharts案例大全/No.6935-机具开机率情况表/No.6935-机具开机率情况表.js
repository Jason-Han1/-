option = {
    title: {
        text: '机具开机率情况表',
        left: 'center',
        top: 2,
        textStyle: {
            fontSize: 20
        },
    },
    legend: {
        bottom: '2%',
        itemGap: 20,
        textStyle:{
            fontSize:16,
            fontWeight:'800'
        },
        data: ['上海地区', '异地', '全行', '上海地区离行式']
    },
    color:['#5b9bd5','#ed7d31','#a9d18e','#ffc000'],
    grid: {
        bottom: '15%'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        name: '上海地区',
        type: 'line',
        symbolSize: 10,
        lineStyle: {
            width: 5
        },
        itemStyle: {
            borderWidth: 3
        },
        data: [99, 99, 99, 99, 98, 97, 96]
    }, {
        name: '异地',
        type: 'line',
        symbolSize: 10,
        lineStyle: {
            width: 5
        },
        itemStyle: {
            borderWidth: 3
        },
        data: [96, 95, 98, 98, 98, 98, 98]
    }, {
        name: '全行',
        type: 'line',
        symbolSize: 10,
        lineStyle: {
            width: 5
        },
        itemStyle: {
            borderWidth: 3
        },
        data: [97, 97, 76, 97, 99, 97, 98]
    }, {
        name: '上海地区离行式',
        type: 'line',
        symbolSize: 10,
        lineStyle: {
            width: 5
        },
        itemStyle: {
            borderWidth: 3
        },
        data: [95, 97, 97, 95, 85, 95, 96]
    }]
};