option = {
    backgroundColor: '#fff',
    title: {
        text: '订单交易',
        subtext: '币秀科技',
        x: 'center',
        y: '30px'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: '100px',
        top: '100px',
        data: ['交易所1', '交易所2', '交易所3', '交易所4', '交易所5']
    },
    series: [{
        name: '订单数量',
        type: 'pie',
        selectedMode: 'single',
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
                value: 335,
                name: '交易所1'
            },
            {
                value: 310,
                name: '交易所2'
            },
            {
                value: 234,
                name: '交易所3'
            },
            {
                value: 135,
                name: '交易所4'
            },
            {
                value: 1548,
                name: '交易所5'
            }
        ],
        // animationDelay: function (idx) {
        //     return idx * 10;
        // },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
var arr = [335, 310, 234, 135, 1548]
var max_index = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[max_index]) {
        max = arr[i]
        max_index = i;
    }

}
setTimeout(function() {
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: max_index
    });
}, 100);