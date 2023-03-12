var data = [];
var innerList = [];
var carTotal = 0;
var faceTotal = 0;
var macTotal = 0;
var modelData = {
    "code": "200",
    "data": [{
        "type": 1,
        "name": "苹果",
        "count": 2000
    }, {
        "type": 1,
        "name": "樱桃",
        "count": 2000
    }, {
        "type": 1,
        "name": "西瓜",
        "count": 2000
    }, {
        "type": 1,
        "name": "梨子",
        "count": 2000
    }, {
        "type": 2,
        "name": "大米",
        "count": 2000
    }, {
        "type": 2,
        "name": "小麦",
        "count": 2000
    }, {
        "type": 2,
        "name": "面粉",
        "count": 2000
    }, {
        "type": 2,
        "name": "葱",
        "count": 2000
    }, {
        "type": 2,
        "name": "大蒜",
        "count": 2000
    }, {
        "type": 2,
        "name": "可乐",
        "count": 2000
    }, {
        "type": 2,
        "name": "啤酒",
        "count": 2000
    }, {
        "type": 3,
        "name": "雪碧",
        "count": 2000
    }, {
        "type": 3,
        "name": "橙汁",
        "count": 2000
    }],
    "message": "Successful"
};
var lineIconName=[];
var dataLength = modelData.data.length;
var temp = modelData.data;
for (var i = 0; i < temp.length; i++) {
    if (temp[i].type === 1) {
        carTotal = carTotal + temp[i].count;
    }
    if (temp[i].type === 2) {
        faceTotal = faceTotal + temp[i].count;
    }
    if (temp[i].type === 3) {
        macTotal = macTotal + temp[i].count;
    }
    data.push({
        value: temp[i].count,
        name: temp[i].name,
        type: temp[i].type
    });
}
if (carTotal > 0) {
    innerList.push({
        value: carTotal,
        name: '水果统计',
    });
    lineIconName.push({
        name: '水果统计',
        icon: 'rect'
    });
}
if (faceTotal > 0) {
    innerList.push({
        value: faceTotal,
        name: '粮食统计',
    });
    lineIconName.push({
        name: '粮食统计',
        icon: 'rect'
    });
}
if (macTotal > 0) {
    innerList.push({
        value: macTotal,
        name: '饮料统计',
    });
    lineIconName.push({
        name: '饮料统计',
        icon: 'rect'
    });
}
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a}<br>{b}: {c} ({d}%)",
    },
    grid: {
        show: false,
        zlevel: 0,
        z: 2,
        left: '0%',
        top: '20%',
        right: '0%',
        bottom: '0%'
    },
    series: [{
        name: '模型分析',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '50%'],
        label: {
            normal: {
                position: 'outside',
                show: true,
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 25,
            }
        },
        center: ['50%', '50%'],
        data: innerList,
        // color: ['#61a0a8', '#2f4554', '#c23521']
    }, {
        name: "模型分析",
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['70%', '90%'],
        label: {
            normal: {
                show: false,
            }
        },
        itemStyle: {
            normal: {
                color: function(prams) {
                    if (prams.data.type === 1) {
                        return '#C1232B';
                    }
                    if (prams.data.type === 2) {
                        return '#27727B';
                    }
                    if (prams.data.type === 3) {
                        return '#FCCE10';
                    }
                },
                borderColor: '#ddd',
                borderWidth: 1,
            }
        },
        data: data
    }]
};
var timeTicket = null;
var count = 0;
timeTicket && clearInterval(timeTicket);
timeTicket = setInterval(function() {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 1
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: count % dataLength
    });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 1,
        dataIndex: count % dataLength,
    });
    count++;
}, 1500);
myChart.on('mouseover', function(params) {
    clearInterval(timeTicket);
});
myChart.on('mouseout', function(params) {
    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(function() {
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 1
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 1,
            dataIndex: count % dataLength
        });
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 1,
            dataIndex: count % dataLength,
        });
        count++;
    }, 1500);
});