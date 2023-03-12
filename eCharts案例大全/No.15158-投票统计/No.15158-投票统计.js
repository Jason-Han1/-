option = {
    grid: {
        height: 100,
        top: 'middle'
    },
    title: {
        text: '投票统计',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['是', '否'],
        bottom: 10,
        show: false
    },
    calculable: true,
    label: {
        normal: {
            testStyle: {}
        }
    },
    xAxis: [{
        type: 'value',
        show: !false,
        interval: 10,

        max: 100,
        axisLabel: {
            formatter: '{value}%',
            show: true
        }
    }],
    itemStyle: {
        normal: {
            barBorderRadius: 0
        }
    },
    barGap: 0,
    barCategoryGap: 0,
    yAxis: [{
        type: 'category',
        data: ['投票比例'],
        show: !false
    }],
    series: [{
        name: '是',
        type: 'bar',
        stack: '总量',
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'inside',
                    formatter: function(params, ticket, callback) {
                        return params.seriesName + '\n' + params.value + '%';
                    }
                }
            }
        },
        data: ['100']
    }, {
        name: '否',
        type: 'bar',
        stack: '总量',
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'inside',
                    formatter: function(params, ticket, callback) {
                        return params.seriesName + '\n' + params.value + '%';
                    }
                }
            }
        },
        data: ['0']
    }]
};
// http://gallery.echartsjs.com/editor.html?c=xSyGgQWzHx
// http://echarts.baidu.com/echarts2/doc/example/dynamicPieRadar.html
var timeTicket = setInterval(function() {
    var ss = [];
    ss.push(Math.round(Math.random() * 100));
    option['series'][1]['data'] = ss;
    option['series'][0]['data'] = [100 - ss[0]];
    myChart.setOption(option);

}, 2000)