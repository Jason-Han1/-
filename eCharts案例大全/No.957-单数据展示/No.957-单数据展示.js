var mainData = [];
mainData.push({
    name: '充值收入',
    value: 342305,
    prevalue: 382305,
    hismax: 455898
});
mainData.push({
    name: '包月收入',
    value: 1332042,
    prevalue: 1552305,
    hismax: 1896900
});
mainData.push({
    name: '道具消费',
    value: 305652,
    prevalue: 323305,
    hismax: 446783
});
mainData.push({
    name: '新增用户',
    value: 31861,
    prevalue: 30805,
    hismax: 77598
});
mainData.push({
    name: '活跃用户',
    value: 114553,
    prevalue: 120105,
    hismax: 145898
});

function createSeries(mainData) {
    var result = [];
    var insideLabel = {
        normal: {
            position: 'center',
            formatter: function(params) {
                if (params.name == "other")
                    return "";
                return params.value + '\n' + params.name;
            },
            textStyle: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 18
            }
        }
    };
    var outsideLabel = {
        normal: {
            show: false
        }
    };
    var itemOthers = {
        normal: {
            color: '#ccc'
        }
    };
    for (var i = 0; i < mainData.length; i++) {
    		var increase = mainData[i].value > mainData[i].prevalue;
        result.push({
            type: 'pie',
            center: [i * 20 + 10 + '%', '30%'],
            radius: ['15%', '18%'],
            label: insideLabel,
            data: [{
                name: 'other',
                value: mainData[i].hismax - mainData[i].value,
                itemStyle: itemOthers
            }, {
                name: mainData[i].name,
                value: mainData[i].value,
                prevalue: mainData[i].prevalue
            }],
            markPoint: {
            data: [{
                        symbol: 'triangle',
                        symbolSize: 15,
                        symbolRotate: increase ? 0 : 180,
                        itemStyle: {
                            normal: {
                                color: increase ? 'red' : 'green'
                            }
                        },
                        name: mainData[i].name,
                        value: ((mainData[i].value - mainData[i].prevalue) * 100 / mainData[i].prevalue).toFixed(2) + '%',
                        x: myChart.getWidth() * (i + 0.5) / 5 - 15,
                        y: myChart.getHeight() * 0.45 + 15,
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                formatter: function(params) {
                                    return params.value;
                                },
                                textStyle: {
                                    color: increase ? 'red' : 'green'
                                }
                            }
                        },
                    }
            ]
        }
        });
    }
    return result;
}
option = {
    title: {
        text: '关键指标',
        subtext: '这是你最关心的数据了吧？',
        x: 'left'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: createSeries(mainData)
}