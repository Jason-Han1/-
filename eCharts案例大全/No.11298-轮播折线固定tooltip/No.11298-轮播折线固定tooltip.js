var data = {
    upload: 100,
    reference: 91,
    dates: ['05-27', '05-28', '05-29', '05-30', '05-31'],
    uploadNumber: [12, 32, 44, 354, 63, 23, 90],
    referenceNumber: [282, 221, 288, 219, 128, 198, 98]
};
var intervalSecs=3000;
option = {
    color: ['#1891FF', '#FDA96D', '#86A942'],
    title: {
        subtext: '累计上传' + (!data.upload ? 0 : data.upload) + '  累计下载' + (!data.reference ? 0 : data.reference),
        subtextStyle: {
            color: '#8098C5',
            fontSize: 12
        },
        padding: [18, 0, 0, 56]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        },
        position: ['73%', 8]
    },
    legend: {
        bottom: 8,
        textStyle: {
            color: '#fff',
            fontSize: 12,
            lineHeight: 20,
        },
        itemWidth: 30,

    },
    grid: {
        top: '12%',
        left: '4%',
        right: '4%',
        bottom: '16%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#8098C5'
            }
        },
        axisTick: {
            show: false
        },
        data: !data.dates ? [] : data.dates
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#8098C5'
            },
            symbol: ['none', 'arrow'], //箭头
            symbolSize: [4, 4],
        }
    },
    series: [{
        data: !data.uploadNumber ? [] : data.uploadNumber,
        type: 'line',
        name: '资源上传',
        symbol: 'circle',
        itemStyle: {
            normal: {
                color: '#1891FF'
            }
        }
    }, {
        data: !data.referenceNumber ? [] : data.referenceNumber,
        type: 'line',
        name: '资源下载',
        symbol: 'circle',
        itemStyle: {
            normal: {
                color: '#FDA96D'
            }
        }
    }, ]
};


/*轮播展示数据*/
var count = 0;
var timeTicket = null;
var dataLength = option.xAxis.data.length;
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
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: (count) % dataLength
    });
    count++;
}, intervalSecs);

myChart.on('mouseover', function(params) {
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
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: params.dataIndex,
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
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: (count) % dataLength
        });
        count++;
    }, intervalSecs);
});