var colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
var labelFont = 'bold 12px Sans-serif';

function calculateMA(data, dates) {
    var result = [];
    for (var i = 0, len = dates.length; i < len; i++) {
        if (data !== null && data.length !== 0) {
            var dataOne = data[0];
            if (dates[i] == dataOne[0]) {
                result.push(dataOne[1]);
                data.splice(0, 1);
                continue;
            }
        }
        result.push('-');
    }
    return result;
}

function add1(tempData, longData) {
    var totalData = [];
    for (var i = 0, len = longData.length; i < len; i++) {
        var data = longData[i] + tempData[i];
        totalData.push(data);
    }
    return totalData;
}



var dates = ["2016-03-29", "2016-03-30", "2016-03-31", "2016-04-01", "2016-04-04", "2016-04-05", "2016-04-06", "2016-04-07", "2016-04-08", "2016-04-11", "2016-04-12", "2016-04-13", "2016-04-14", "2016-04-15", "2016-04-18", "2016-04-19", "2016-04-20", "2016-04-21", "2016-04-22", "2016-04-25", "2016-04-26", "2016-04-27", "2016-04-28", "2016-04-29", "2016-05-02", "2016-05-03", "2016-05-04", "2016-05-05", "2016-05-06", "2016-05-09", "2016-05-10", "2016-05-11", "2016-05-12", "2016-05-13", "2016-05-16", "2016-05-17", "2016-05-18", "2016-05-19", "2016-05-20", "2016-05-23", "2016-05-24", "2016-05-25", "2016-05-26", "2016-05-27", "2016-05-31", "2016-06-01", "2016-06-02", "2016-06-03", "2016-06-06", "2016-06-07", "2016-06-08", "2016-06-09", "2016-06-10", "2016-06-13", "2016-06-14", "2016-06-15", "2016-06-16", "2016-06-17", "2016-06-20", "2016-06-21", "2016-06-22"];
var data1 = [
    ["2016-04-12", 500],
    ["2016-05-12", 600]
];
var data2 = [
    ["2016-04-28", 8],
    ["2016-05-12", 3]
];
var longData = [1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 12, 15, 0, 2, 3, 4, 5, 2, 1, 4, 5, 6, 2, 1, 3, 2, 3, 5, 6, 4, 1, 2, 5, 6, 8, 9, 8, 4, 5, 6, 7, 2, 1];
var tempData = [1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 12, 15, 0, 2, 3, 4, 5, 2, 1, 4, 5, 6, 2, 1, 3, 2, 3, 5, 6, 4, 1, 2, 5, 6, 8, 9, 8, 4, 5, 6, 7, 2, 1];
var INRData = calculateMA(data1, dates);
var PTData = calculateMA(data2, dates);
var totalData = add1(tempData, longData);


option = {
    animation: false,
    color: colorList,
    title: {
        left: 'center',
        text: '对照图'
    },
    tooltip: {
        //移动端展示方式
        //triggerOn: 'none',
        trigger: 'axis',
        transitionDuration: 0,
        confine: true,
        bordeRadius: 4,
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: 'rgba(255,255,255,0.9)',
        textStyle: {
            fontSize: 12,
            color: '#333'
        }
        
    },
    axisPointer: {
        type: 'shadow',
        link: {
            xAxisIndex: 'all'
        }
    },
    xAxis: [{
        type: 'category',
        data: dates,
        boundaryGap: true,
        axisLine: {
            lineStyle: {
                color: '#777'
            }
        },
        axisLabel: {
            formatter: function(value) {
                return echarts.format.formatTime('MM-dd', value);
            }
        },
        min: 'dataMin',
        max: 'dataMax'
        /*移动端展示方式
        axisPointer: {
            show: true
        }*/
    }, {
        type: 'category',
        gridIndex: 1,
        data: dates,
        scale: true,
        boundaryGap: true,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#777'
            }
        },
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
        /*移动端展示方式 
        axisPointer: {
             type: 'line',
             label: {
                 show: false
             },
             triggerTooltip: true,
             handle: {
                 show: true,
                 size: 35,
                 margin: 15,
                 color: '#B80C00'
             }
         }*/
    }],
    yAxis: [{
        //scale: true,
        splitNumber: 2,
        axisLine: {
            lineStyle: {
                color: '#777'
            }
        },
        //splitLine: { show: true },
        axisTick: {
            show: false
        },
        name: 'ml',
        nameGap: 0
    }, {
        //scale: true,
        gridIndex: 1,
        splitNumber: 2,
        //axisLabel: {show: false},
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        name: '片',
        nameGap: 0

    },{
        //scale: true,
        splitNumber: 2,
        axisLine: {
            lineStyle: {
                color: '#777'
            }
        },
        //splitLine: { show: true },
        axisTick: {
            show: false
        },
        name: 'sec',
        nameGap: 0,position:"right"
    }],
    dataZoom: [{
            type: 'slider',
            xAxisIndex: [0, 1],
            realtime: false,
            top: 30,
            height: 20,
            //移动端展示方式
           handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '120%'
        }
        /*移动端展示方式
        , {
                type: 'inside',
                xAxisIndex: [0, 1],
                top: 30,
                height: 20
            }*/
    ],
    grid: [{
        left: 30,
        right: 30,
        top: 70,
        height: 120
    }, {
        left: 30,
        right: 30,
        height: 120,
        top: 230
    }],
    graphic: [{
        type: 'group',
        left: 'center',
        bounding: 'raw',
        children: [{
            id: 'MA20',
            type: 'text',
            style: {
                fill: colorList[3],
                font: labelFont
            },
            right: 0
        }]
    }],
    series: [{
            name: '长期',
            type: 'bar',
            stack: '华法林',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#7fbe9e'
                },
                emphasis: {
                    color: '#140'
                }
            },
            data: longData
        },
        {
            name: '临时',
            type: 'bar',
            stack: '华法林',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: tempData
        },
        {
            name: '总数',
            type: 'bar',
            stack: '华法林',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                "normal": {
                    "label": {
                        "show": true,
                        "position": "insideBottom",
                        "textStyle": {
                            "color": "#555555"
                        }
                    },
                    "color": "#EFEFEF"
                }

            },
            data: totalData
        },
        {
            name: 'INR',
            type: 'scatter',
            data: INRData,
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'bottom'
                }
            }
        },
        {
            name: 'PT',
            type: 'scatter',
            data: PTData,
            smooth: true,
            showSymbol: false,
            yAxisIndex:2,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'bottom'
                }
            }
        }
    ]
};