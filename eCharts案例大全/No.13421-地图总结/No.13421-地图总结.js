option = {
    backgroundColor: '#002655',
    title: {
        text: '全国总人数：13,341,798万人',
        top: '20px',
        textStyle: {
            fontsize: 18,
            color: 'white'
        }
    },
    grid: {
        top: '20',
        left: '1',
        right: '0',
        bottom: '1%',
        containLabel: true
    },
    tooltip: {
        padding: 0,
        enterable: true,
        transitionDuration: 1,
        //具体右边的框的位置请自行调整
        position: {
            right: '8%',
            top: '50%'
        },
        textStyle: {
            color: '#000',
            decoration: 'none',
        },
        formatter: function(params) {
            var tipHtml = '';
            tipHtml = '<div style="height:140px;width:130px;border-radius:5px;background:#002b60;border: solid 1px #49a7ff;">' +
                '<div style="width: 100%;color: #ffd426;font-size: 14px;height: 30px;line-height: 30px;box-sizing: border-box;padding-left: 15px">' + params.name + '</div>' +
                '<div style="width:100%; height: 90px;text-align: center;display: flex;flex-direction: column;justify-content: center;align-items: center">' +
                '<span style="width: 110px;height: 22px;font-size: 24px;color: #ffffff;">' + params.value + '</span>' +
                '<span style="font-size: 14px;color: #ffffff;margin-top: 10px">百万</span>'
            '</div>'
            '</div>';

            return tipHtml;
        }
    },
    series: [{
        type: 'map',
        mapType: 'china',
        center: [110, 40],
        itemStyle: {
            color: 'white',
            normal: {
                areaColor: '#2196cc',
                label: {
                    show: false
                }
            },
            emphasis: {
                label: {
                    show: false
                }
            }
        },
        data: [{
            "name": "北京",
            "value": 30
        }, {
            "name": "天津",
            "value": 51
        }, {
            "name": "河北",
            "value": 95
        }, {
            "name": "山西",
            "value": 94
        }, {
            "name": "内蒙古",
            "value": 57
        }, {
            "name": "辽宁",
            "value": 55
        }, {
            "name": "吉林",
            "value": 16
        }, {
            "name": "黑龙江",
            "value": 48
        }, {
            "name": "上海",
            "value": 32
        }, {
            "name": "江苏",
            "value": 53
        }, {
            "name": "浙江",
            "value": 67
        }, {
            "name": "安徽",
            "value": 91
        }, {
            "name": "福建",
            "value": 79
        }, {
            "name": "江西",
            "value": 58
        }, {
            "name": "山东",
            "value": 38
        }, {
            "name": "河南",
            "value": 10
        }, {
            "name": "湖北",
            "value": 7
        }, {
            "name": "湖南",
            "value": 28
        }, {
            "name": "广东",
            "value": 21
        }, {
            "name": "广西",
            "value": 45
        }, {
            "name": "海南",
            "value": 79
        }, {
            "name": "重庆",
            "value": 90
        }, {
            "name": "四川",
            "value": 58
        }, {
            "name": "贵州",
            "value": 16
        }, {
            "name": "云南",
            "value": 100
        }, {
            "name": "西藏",
            "value": 39
        }, {
            "name": "陕西",
            "value": 83
        }, {
            "name": "甘肃",
            "value": 10
        }, {
            "name": "青海",
            "value": 77
        }, {
            "name": "宁夏",
            "value": 76
        }, {
            "name": "新疆",
            "value": 88
        }]

    }]
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
    myChart.dispatchAction({
        type: 'showTip',
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
    }, 1000);
});