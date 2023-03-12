var textStyle1 = {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial'
};
var textStyle2 = {
    color: '#000',
    fontSize: 20,
    fontWeight: 'normal',
    fontFamily: 'Arial'
};

var tongbi = (Math.random() - 0.5) * 100;
var bishangyue = (Math.random() - 0.5) * 100;
var binianchu = (Math.random() - 0.5) * 100;

option = {
    title: [{
        text: '本月贷款收益率  4.21%',
        textStyle: textStyle1
    }],
    xAxis: [{
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }, {
        gridIndex: 1,
        axisLabel: {show: false},
        axisTick: {show: false},
        axisLine: {show: false},
        splitLine: {show: false}
    }],
    yAxis: [{
    }, {
        gridIndex: 1,
        axisLabel: {show: false},
        axisTick: {show: false},
        axisLine: {show: false},
        splitLine: {show: false}
    }],
    grid: [{
        top: 90
    }, {
        left: 110,
        top: 14,
        height: 20,
        width: 550
    }],
    tooltip: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }, { // for text
        type: 'scatter',
        xAxisIndex: 1,
        yAxisIndex: 1,
        animation: false,
        silent: true,
        label: {
            normal: {
                show: true,
                textStyle: textStyle2,
                position: [-75, -3],
                formatter: function (params) {
                    return params.value[3] + '   ' + params.value[2].toFixed(2) + '%';
                }
            }  
        },
        data: echarts.util.map(
            [[1, 1, tongbi, '    同比：'], [2, 1, bishangyue, '比上月：'], [3, 1, binianchu, '比年初：']],
            function (item) {
                return {
                    value: item,
                    itemStyle: {
                        normal: {color: item[2] > 0 ? 'red' : 'green'}
                    },
                    symbolSize: 16,
                    symbol: item[2] > 0 
                        ? 'path://M 200 100 L 100 300 L 300 300 z'
                        : 'path://M 100 100 L 300 100 L 200 300 z'
                }           
            }
        )
    }]
};