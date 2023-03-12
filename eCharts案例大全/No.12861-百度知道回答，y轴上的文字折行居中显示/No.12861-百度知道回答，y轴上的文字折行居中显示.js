app.title = '百度知道回答，y轴上的文字折行居中显示';

xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
yAxisData = [10, 52, 200, 334, 390, 330, 220];


option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'item',
    },
    grid: [{
        left: '3%',
        right: '4%',
        bottom: '69%',
        containLabel: true
    }, {
        left: '3%',
        right: '4%',
        top: '34%',
        bottom: '37%',
        containLabel: true
    }, {
        left: '3%',
        right: '4%',
        top: '66%',
        bottom: '3%',
        containLabel: true
    }],
    xAxis: [{
        gridIndex: 0,
        type: 'category',
        data: xAxisData
    }, {
        gridIndex: 1,
        type: 'category',
        data: xAxisData
    }, {
        gridIndex: 2,
        type: 'category',
        data: xAxisData
    }],
    yAxis: [{
        gridIndex: 0,
        type: 'value',
        name: 'center',
        nameLocation: 'center',
        nameGap: 30,
        axisLabel: {
            align: 'center', //在这里
            //margin: 20,  //需要用这个调整标签位置，否则和y轴重叠了
            formatter: function(params) {
                return params + '\na';
            }
        }
    }, {
        gridIndex: 1,
        type: 'value',
        name: 'left',
        nameLocation: 'center',
        nameGap: 30,
        axisLabel: {
            align: 'left', //在这里
            //margin: 30,  //需要用这个调整标签位置，否则和y轴重叠了
            formatter: function(params) {
                return params + '\na';
            }
        }
    }, {
        gridIndex: 2,
        type: 'value',
        name: 'right',
        nameLocation: 'center',
        nameGap: 30,
        axisLabel: {
            align: 'right', //在这里
            //margin: 10,
            formatter: function(params) {
                return params + '\na';
            }
        }
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: yAxisData
    }, {
        name: '直接访问',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        barWidth: '60%',
        data: yAxisData
    }, {
        name: '直接访问',
        type: 'bar',
        xAxisIndex: 2,
        yAxisIndex: 2,
        barWidth: '60%',
        data: yAxisData
    }]
};