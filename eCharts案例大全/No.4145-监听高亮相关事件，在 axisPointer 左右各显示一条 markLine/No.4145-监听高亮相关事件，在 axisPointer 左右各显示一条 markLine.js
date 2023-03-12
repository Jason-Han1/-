option = {
    title: {
        text: '监听高亮相关事件，在 axisPointer 左右各显示一条 markLine'
    },
    xAxis: {
        data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        triggerEvent: true
    },
    yAxis: {},
    tooltip: {
        trigger: 'axis'
    },
    series: {
        type: 'line',
        data: [3, 4, 5, 2, 6, 1, 7],
        markLine: {
            symbol: 'none',
            lineStyle: {
                color: 'gray',
                type: 'solid'
            },
            label: {
                show: false
            },
            animation: false
        }
    }

};

myChart.on('highlight', function(params) {
    //console.log(params);
    myChart.setOption({
        series: {
            markLine: {
                data: [{
                    name: 'axisPointer 左侧平行线',
                    xAxis: params.batch[0].dataIndex - 2
                }, {
                    name: 'axisPointer 右侧平行线',
                    xAxis: params.batch[0].dataIndex + 2
                }]
            }
        }
    });
});

myChart.on('downplay', function(params) {
    //console.log(params);
    myChart.setOption({
        series: {
            markLine: {
                data: []
            }
        }
    });
});