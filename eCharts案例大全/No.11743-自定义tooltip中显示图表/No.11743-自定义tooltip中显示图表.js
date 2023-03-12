function tooltipCharts(x, y, z, total) {
    var myChart = echarts.init(document.getElementById('tooltipBarId'));
    option = {
        animation: false,
        color: ['#16a474', '#1073b8', '#613086'],
        title: {
            text: total,
            x: '34',
            y: '57',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 34,
                color: '#fff',
                lineHeight: 1

            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}:{c}"
        },
        legend: {
            orient: 'vertical',
            right: '10px',
            y: "center",
            data: ['大行资金面情绪指数', '中、小行资金面情绪指数', '非银行机构资金面情绪指数'],
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            type: 'pie',
            center: [60, '50%'], //饼图的中心（圆心）坐标
            radius: [30, 45], //饼图的半径
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: x,
                    name: '大行资金面情绪指数'
                },
                {
                    value: y,
                    name: '中、小行资金面情绪指数'
                },
                {
                    value: z,
                    name: '非银行机构资金面情绪指数'
                }
            ]
        }]
    };
    myChart.setOption(option);
}
var FXSIData = {
    "timeList": ["09:00","09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00"],
    "dataList": [{
        "value": "33",
        "single": [15, 10, 8]
    }, {
        "value": "18",
        "single": [6, 3, 9]
    }, {
        "value": "42",
        "single": [20, 16, 6]
    }, {
        "value": "44",
        "single": [16, 14, 14]
    }, {
        "value": "78",
        "single": [30, 20, 28]
    }, {
        "value": "50",
        "single": [15, 15, 20]
    }, {
        "value": "96",
        "single": [35, 30, 31]
    }, {
        "value": "48",
        "single": [12, 6, 30]
    }, {
        "value": "46",
        "single": [22, 20, 4]
    }, {
        "value": "66",
        "single": [15, 15, 36]
    }, {
        "value": "43",
        "single": [13, 17, 13]
    }, {
        "value": "42",
        "single": [10, 22, 12]
    }, {
        "value": "20",
        "single": [8, 8, 4]
    }, {
        "value": "44",
        "single": [19, 10, 15]
    }, {
        "value": "10",
        "single": [4, 5, 1]
    }, {
        "value": "40",
        "single": [10, 12, 18]
    }, {
        "value": "42",
        "single": [18, 8, 16]
    }, {
        "value": "30",
        "single": [12, 8, 10]
    }, {
        "value": "44",
        "single": [18, 12, 14]
    }, {
        "value": "18",
        "single": [6, 6, 6]
    }, {
        "value": "46",
        "single": [20, 10, 16]
    }]
}

var FXSIDataLength = FXSIData.dataList.length;
option = {
    color: ['#fff'],
    grid: {
        left: '1%',
        right: '10%',
        bottom: '3%',
        top: '4%',
        containLabel: true
    },
    tooltip: {
        padding: 0,
        trigger: 'axis',
        enterable: true,
        transitionDuration: 1,
        textStyle: {
            color: '#000',
            decoration: 'none',
        },
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
            label: {
                show: true //显示横坐标文字背景
            }
        },
        formatter: function(params) {
            
            console.log(params.data)

            var tipHtml = '';

            tipHtml = '<div>' +
                '<div id="tooltipBarId" style="height:120px;width:320px"></div>' +
                '</div>';

            var lgBanks = params[0].data.single[0];
            var smBanks = params[0].data.single[1];
            var noBanks = params[0].data.single[2];
            var total = params[0].data.value;

            setTimeout(function() {
                tooltipCharts(lgBanks, smBanks, noBanks, total);
            }, 10);

            return tipHtml;

        },
    },
    dataZoom: {
        startValue: FXSIData.timeList[FXSIData.timeList.length - 20],
        endValue: FXSIData.timeList[FXSIData.timeList.length],
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        minInterval: 1,
        splitNumber: 20,
        axisLine: {
            onZero: false,
        },
        splitLine: {
            show: false
        },
        data: FXSIData.timeList,
    },
    yAxis: {
        type: 'value',
        boundaryGap: false,
        splitLine: {
            show: false
        }
    },
    series: [{
        name: 'uuu',
        type: 'line',
        lineStyle: {
            normal: {
                color: "#fff", // 线条颜色
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(121, 64, 147)'
                }, {
                    offset: 0.5,
                    color: 'rgb(72, 75, 142)'
                }, {
                    offset: 1,
                    color: 'rgb(18, 117, 161)'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        data: FXSIData.dataList
    }]
};
setTimeout(function() {

    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: FXSIDataLength-1,
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex:FXSIDataLength-1
    });
    
},1000);
myChart.on('mouseover', function (params) {
    
    console.log(params);
    

});