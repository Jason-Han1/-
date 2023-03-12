app.title = '百度知道回答，如何设置折线图只显示最大值数值';

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
    grid: [{
        left: '3%',
        right: '4%',
        bottom: '47%',
        containLabel: true
    }, {
        top: '58%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    }],
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        }
    }, {
        gridIndex:1,
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }, {
        gridIndex:1,
        type: 'value'
    }],
    series: [{
        name: '直接访问',
        type: 'line',
        barWidth: '60%',
        markPoint: {
            data: [{
                name: '最大值',
                type: 'max'
            }]
        },
        data: data1
    }, {
        name: '直接访问',
        type: 'line',
        barWidth: '60%',
        xAxisIndex: 1,
        yAxisIndex: 1,
        label:{
            show: true,
            formatter:function(params) {
                let maxIndex = 0;
                for (let i in data1){
                    maxIndex = data1[i] > data1[maxIndex] ? i : maxIndex;
                }
                return params.dataIndex == maxIndex ? params.data : '';
            }
        },
        data: data1
    }]
};