option = {
    title: {
        text: '柱状图分组',
        bottom:10,
        left:'center'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: [
        {
        type: 'category',
        data: ['新虹桥', '中山公园', '虹桥', '镇宁路', '天山古北','新虹桥',]
    }],
    yAxis: [{
        type: 'value',
        name: '总价(万元)',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '包租费',
        type: 'bar',
        data: [20, 12, 31, 34, 31,20],
        barGap:'0'
    }, {
        name: '装修费',
        type: 'bar',
        data: [10, 20, 5, 9, 3, 20,]
    }]
};