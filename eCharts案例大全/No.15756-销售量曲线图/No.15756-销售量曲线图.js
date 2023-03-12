var effectDTOList = [{
    "date": "10-30",
    "salesCnt": 22,
    "status": 0
}, {

    "date": "2016-10-31",
    "salesCnt": 27,
    "status": 0
}, {

    "date": "2016-11-01",
    "salesCnt": 44,
    "status": 0
}, {
    "date": "2016-11-02",
    "salesCnt": 64,
    "status": 0
}, {

    "date": "2016-11-03",
    "salesCnt": 77,
    "status": 1
}, {

    "date": "2016-11-04",
    "salesCnt": 99,
    "status": 1
}, {

    "date": "2016-11-05",
    "salesCnt": 102,
    "status": 1
}, {

    "date": "2016-11-06",
    "salesCnt": 116,
    "status": 1
}, {

    "date": "2016-11-07",
    "salesCnt": 99,
    "status": 0
}, {

    "date": "2016-11-08",
    "salesCnt": 77,
    "status": 0
}, {

    "date": "2016-11-09",
    "salesCnt": 64,
    "status": 0
}, {

    "date": "2016-11-10",
    "salesCnt": 70,
    "status": 0
}];
var xAxis = [],
    yAxis = [],
    data = [],
    series = [],
    seriesItem;
var st = effectDTOList[0].status;
for (var i = 0; i < effectDTOList.length; i++) {
    var date = effectDTOList[i].date.substring(5);
    xAxis.push(date);
    yAxis.push(effectDTOList[i].salesCnt);
    data.push([date, effectDTOList[i].salesCnt]);
    if (st != effectDTOList[i].status || (i == effectDTOList.length - 1)) {
        var color = st == 1 ? '#ff8c66' : "#e2e2e2";
        var name1 = st == 1 ? '有促销' : "无促销";
        seriesItem = {
            name: name1,
            type: 'line',
            smooth: true,
            symbolSize: 7,
            data: data,
            areaStyle: {
                normal: {
                    color: color,
                    opacity: 1
                }
            },
            lineStyle: {
                normal: {
                    color: '#ff8c66'
                }
            },
            itemStyle: {
                normal: {
                    color: color,
                    borderWidth: 2,
                    borderType: 'solid'
                }
            }
        };
        series.push(seriesItem);
        data = [
            [date, effectDTOList[i].salesCnt]
        ];
        st = effectDTOList[i].status;
    }
}

option = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    title: {
        text: '销售量曲线图',
        subtext: '不同时间段面积标记不同颜色'
    },
    legend: {
        right: 50,
        top: 20,
        data: [{
                name: '无促销',
                icon: 'circle',
                textStyle: {
                    color: '#333',
                    fontSize: '14'
                }
            }, {
                name: '有促销',
                icon: 'circle',
                textStyle: {
                    color: '#333',
                    fontSize: '14'
                }
            }

        ]
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    dataZoom: [{
        type: 'inside',
        xAxisIndex: [0]
    }],
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            for (let i = 0; i < params.length; i++) {
                if (params[i].value) {
                    return params[i].value[1];
                }
            }
            return 'loading';
        },
        backgroundColor: '#ff6633',
        padding: [10],
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        }

    },
    xAxis: {
        axisTick: {
            show: true
        },
        type: 'category',
        boundaryGap: false,
        data: xAxis,
        axisLine: {
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#333'
            }
        }
    },
    yAxis: {
        axisTick: {
            show: false
        },
        type: 'value',
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#ddd'
            }
        }
    },
    series: series
};