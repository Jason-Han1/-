option = {
    tooltip: {
        trigger: 'axis',
        formatter: function(params, ticket, callback) {

            var res = params[0].name;

            for (var i = 0, l = params.length; i < l; i++) {
                if (params[i].seriesType === 'line') {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + 'h';
                } else {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '个';
                }
            }
            return res;

        }
    },
    grid: {
        containLabel: true
    },
    legend: {
        data: ['热度', '正面评价', '负面评价']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ['汽车之家','车质网','XX资讯','XY网','YY媒体','YZ网','ZZ资讯']
    }],
    dataZoom: [{
        type: 'slider',
        xAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }, {
        type: 'slider',
        yAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }, {
        type: 'inside',
        xAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }, {
        type: 'inside',
        yAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }],
    yAxis: [{
        type: 'value',
        name: '热度',
        min: 0,
        position: 'left',
        axisLabel: {
            formatter: '{value} h'
        }
    }, {
        type: 'value',
        name: '个数',
        min: 0,
        position: 'right',
        axisLabel: {
            formatter: '{value} 个'
        }
    }],
    series: [{
        name: '热度',
        type: 'line',
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        data: [1, 13, 37, 35, 15, 13, 25]
    }, {
        name: '正面评价',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [22, 22, 23, 77, 24, 55, 55]
    }, {
        name: '负面评价',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [201, 222, 223, 777, 244, 255, 555]
    }]
};