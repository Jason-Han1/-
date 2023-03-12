var spirit = 'path://M807.594667 478.378667L206.506667 8.96A10.581333 10.581333 0 0 0 189.44 17.322667v103.082666c0 6.485333 3.072 12.8 8.106667 16.810667L677.546667 512 197.461333 886.784a21.162667 21.162667 0 0 0-8.106666 16.810667v103.082666c0 8.96 10.24 13.824 17.152 8.362667l601.088-469.418667a42.666667 42.666667 0 0 0 0-67.242666z'

var maxData = 2000;

option = {
    tooltip: {
    },
    xAxis: {
        max: maxData,
        splitLine: {show: false},
        offset: 10,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            show:false,
            margin: 10
        }
    },
    yAxis: {
        data: ['2013'],
        inverse: true,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            show:false,
            margin: 10,
            color: '#999',
            fontSize: 16
        }
    },
    grid: {
        top: 'center',
        height: 200,
        left: 70,
        right: 100
    },
    color:['#c23531','#2f4554'],
    silent:true,
    series: [{
        // current data
        type: 'pictorialBar',
        symbol: spirit,
        symbolRepeat: true,
        symbolMargin: '5%',
        symbolClip: true,
        symbolSize: 30,
        symbolBoundingData: maxData,
        data: [891],
        z: 10
    }, {
        type: 'pictorialBar',
        itemStyle: {
            normal: {
                opacity: 0.4
            }
        },
        label: {
            show: false,
            formatter: function (params) {
                return (params.value / maxData * 100).toFixed(1) + ' %';
            },
            position: 'right',
            offset: [10, 0],
            color: 'green',
            fontSize: 18
        },
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '5%',
        symbol: spirit,
        symbolSize: 30,
        symbolBoundingData: maxData,
        data: [maxData],
        z: 5
    }]
};


// Make dynamic data.
function random() {
    return +(Math.random() * (maxData - 10)).toFixed(1);
}