function mapTooltipClick(name) {
    alert(name)
}

function tooltipCharts() {
    var myChart = echarts.init(document.getElementById('tooltipBarId'));
}
option = {
    series: [{
        name: 'china-map',
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle: {
            normal: {
                label: {
                    show: false
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        data: [{
                name: '北京'
            },
            {
                name: '天津'
            },
            {
                name: '上海'
            },
            {
                name: '重庆'
            }
        ]
    }, ]
}
var count = 0;
var timeTicket = null;
var dataLength = option.series[0].data.length;
timeTicket && clearInterval(timeTicket);
timeTicket = setInterval(function() {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: (count) % dataLength
    });
    count++;
}, 1000);

myChart.on('mouseover', function(params) {
    console.log(params)
    clearInterval(timeTicket);
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: params.dataIndex
    });
});
myChart.on('mouseout', function(params) {
    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(function() {
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: (count) % dataLength
        });
        count++;
    }, 1000);
});