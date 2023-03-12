var xAxisData = ['设备一','设备二','设备三','设备四','设备五','设备六','设备七','设备八','设备九','设备十'];
var yAxisData = [100,88,80,70,63,43,24,22,20,10];
option = {
    title: {
        show:false
    },
    tooltip: {

    },
    legend: {
        show:false,
        data: ['设备流量']
    },
    xAxis: {
        type: 'category',
        data: xAxisData,
        boundaryGap: false,
    },
    yAxis: {
        type: 'value',
    },
    series: [{
        name: '设备流量',
        type: 'line',
        symbolSize:8,
        data: yAxisData,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#ea899b'
                }, {
                    offset: 1,
                    color: '#fff'
                }], false)
            }
        },
        itemStyle: {
            normal: {
                color: '#fa92a5'
            }
        }
    }]
};