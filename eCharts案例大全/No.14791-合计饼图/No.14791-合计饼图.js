var data = [];
for (let i = 0; i < 10; i++) {
    data.push({
        name: '类目' + i,
        value: '20'
    })
};
var color = [
    '#0580f2',
    '#faa732',
    '#e1575d',
    '#8b73cc',
    '#8cd123',
    '#4b53ba',
    '#429588',
    '#735546',
    '#d42762',
    '#673ebc'
];
var currentItem = {
    name: '总数',
    value: '200'
};
option = {
    backgroundColor: '#212121',
    color: color,
    series: [{
        name: '消费能力',
        type: 'pie',
        radius: ['60%', '75%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true,
                formatter: '{b} {c}',
                textStyle: {
                    fontSize: 14,
                    color: '#eeeeee'
                }
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        data: data
    }, {
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [100, 100],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            label: {
                normal: {
                    formatter: currentItem.value,
                    textStyle: {
                        color: '#eeeeee',
                        fontSize: 36
                    }
                }
            }
        }, {
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    formatter: '\n' + currentItem.name,
                    textStyle: {
                        color: '#eeeeee',
                        fontSize: 16
                    }
                }
            }
        }]
    }]
};

app.currentIndex = -1;

setInterval(function() {
    var dataLen = option.series[0].data.length;
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    currentItem = data[(app.currentIndex + 1) % dataLen];
    option.series[1].data[0].label.normal.formatter = currentItem.value;
    option.series[1].data[1].label.normal.formatter = '\n' + currentItem.name;
    myChart.setOption(option, true);
    
    app.currentIndex = (app.currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
}, 1000);