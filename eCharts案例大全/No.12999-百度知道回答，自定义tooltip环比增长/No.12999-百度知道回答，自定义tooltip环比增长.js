app.title = '百度知道回答，自定义tooltip环比增长';

data1 = [10, 52, 200, 334, 390, 330, 220];

option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            relVal = params.data + '，环比增长';
            relVal += params.dataIndex === 0 ? '未知' : ((params.data - data1[params.dataIndex - 1]) * 100 / data1[params.dataIndex - 1]).toFixed(2) + '%';
            return relVal;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: data1
    }]
};