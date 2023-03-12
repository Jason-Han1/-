option = {
    title: {
        text: '2019年广东省各地级市退役士兵安置情况分析'
    },
    color: ['#20d180','#f36c6c', '#e6cf4e',  '#0093ff'], //依次选择颜色，默认为第一个颜色，多根柱子多个颜色
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['计划安置数', '已安置数'],
        align: 'right',
        right: 10
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '9%',//离底部的距离，也可以用像素比如10px
        containLabel: true
    },
    dataZoom: [{ //底部滚动条
            show: true,
            start: 0,
            end: 60
        }
    ],
    xAxis: [{
        type: 'category',
        data: ['广州市', '深圳市', '佛山市', '东莞市', '中山市', '珠海市',
        '江门市', '茂名市', '云浮市', '清远市', '韶关市', '惠州市', '梅州市', 
        '汕头市']
    }],
    yAxis: [{
        type: 'value',
        name: '人数',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '计划安置数',
        type: 'bar',
        data: [20, 12, 31, 34, 31,40,35,28,30,36,45,14,27,25]
    }, {
        name: '已安置数',
        type: 'bar',
        data: [10, 20, 5, 9, 30,28,30,24,24,30,40,14,26,23]
    }]
};