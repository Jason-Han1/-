var timeTicket = null;
var legendD = [];
var data = [];
var srcData = {
    "data": [
        {
            "type": 1,
            "name": "JS",
            "total": 2045440,
        },
        {
            "type": 2,
            "name": "PHP",
            "total": 2719778,
        },
        {
            "type": 3,
            "name": "JAVA",
            "total": 29664750,
        },
        {
            "type": 4,
            "name": "C++",
            "total": 2249994,
        },
        {
            "type": 5,
            "name": "Swift",
            "total": 33943331,
        }
    ],
}
var dataLength = srcData.data.length;
for (var i = 0; i < srcData.data.length; i++) {
    legendD.push(srcData.data[i].name); //X轴构建
    data.push({
        value: srcData.data[i].total,
        name: srcData.data[i].name
    }); //Y轴构建
}
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}<br>总量：{c}<br>比例：{d}%",
        // position: [310, 0]
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        y: 'center',
        align: 'right',
        data: legendD,
        itemHeight: 6,
        itemWidth: 20
    },
    series: [{
        name: '开发者社区图',
        type: 'pie',
        radius: '68%',
        center: ['60%', '50%'],
        clockwise: false,
        data: data,
        label: {
            normal: {
                textStyle: {
                    color: '#999',
                    fontSize: '14px',
                },
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }],
    // color: [ '#26b00f','#2d87f9', '#0892ab', '#f3e727', '#d3b31d', '#d31d1d'],
}
timeTicket && clearInterval(timeTicket);
var count=0;
timeTicket = setInterval(function() {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: count % 6
    });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: count % 6,
    });
    count++;
}, 2000);