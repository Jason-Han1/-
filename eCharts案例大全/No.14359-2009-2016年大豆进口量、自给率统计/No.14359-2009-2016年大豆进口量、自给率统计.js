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
    backgroundColor:'#fff',
    legend: {
        data: ['大豆自给率', '大豆进口量']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ['2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年']
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
        name: '自给率',
        min: 0,
        position: 'left',
        axisLabel: {
            formatter: '{value} %'
        }
    }, {
        type: 'value',
        name: '进口量',
        min: 0,
        position: 'right',
        axisLabel: {
            formatter: '{value} 百万吨'
        }
    }],
    series: [{
        name: '大豆自给率',
        type: 'line',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter:''
            }
        },
        lineStyle: {
            normal: {
                width: 3
            }
        },
        color:['#754F44'],
        data: [24, 23, 20, 17, 15, 14, 12, 12]
    }, {
        name: '大豆进口量',
        type: 'bar',
        yAxisIndex: 1,
        barWidth:'60%',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        color:['#EC7357'],
        data: [53.9, 52.5, 57.4, 61.3, 70.8, 80.1,84.4, 92.5]
    }]
};