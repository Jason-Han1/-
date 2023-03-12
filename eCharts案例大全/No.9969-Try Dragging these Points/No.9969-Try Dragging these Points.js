var symbolSize = 100;
var data = [
    [0.5, 2]
];

option = {
    title: {
        text: 'Try Dragging these Points'
    },
    tooltip: {
        triggerOn: 'none',
        formatter: function(params) {
            return '上下拖动调节亮度';
        }
    },
    grid: {},
    xAxis: {
        min: 0,
        max: 1,
        type: 'value',
        axisLine: {
            onZero: false
        }
    },
    yAxis: {
        min: 0,
        max: 3,
        type: 'value',
        axisLine: {
            onZero: false
        }
    },

    series: [{
        id: 'a',
        type: 'bar',
        smooth: true,
        hoverAnimation: false,
        symbolSize: symbolSize,
        data: data,
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#0dc2fe' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'blue' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            barBorderRadius: 20
        }
    }, {
        type: 'pie',
        data: [1],
        radius: '5%',
        center: ['50%', '86%'],
        hoverAnimation: false,
        color: ["#46d3f3", "rgba(203,203,203,.2)"],
        labelLine: {
            normal: {
                show: false
            }
        },

    }, {
        id: "lightLine",
        type: 'gauge',
        splitNumber: 10, //刻度数量
        min: 0,
        max: 1,
        radius: '8%', //图表尺寸
        center: ['50%', '86%'],
        startAngle: 90,
        endAngle: -269.9999,
        axisLine: {
            show: false,
            lineStyle: {
                width: 0,
                shadowBlur: 0,
                color: [
                    [1, '#0dc2fe']
                ]
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: 'auto',
                width: 1
            },
            length: 20,
            splitNumber: 5
        },
        splitLine: {
            show: true,
            length: -20,
            lineStyle: {
                color: 'auto',
            }
        },
        axisLabel: {
            show: false
        },
        pointer: { //仪表盘指针
            show: 0,
        },
        detail: {
            show: 0,
        },
        z: 2000
    }, ]
};


if (!app.inNode) {
    setTimeout(function() {
        // Add shadow circles (which is not visible) to enable drag.
        myChart.setOption({
            graphic: echarts.util.map(data, function(item, dataIndex) {
                //console.log(item)
                return {
                    type: 'rect',
                    position: myChart.convertToPixel('grid', item),
                    left: 'center',
                    bounding: 'all',
                    shape: {
                        //x: 0.5,
                        //y: 0.5,
                        r: 20,
                        width: 500,
                        height: 100
                    },
                    style: {
                        fill: '#000',
                        lineWidth: 4
                    },
                    invisible: false,
                    draggable: true,
                    ondrag: echarts.util.curry(onPointDragging, dataIndex),
                    onmouseover: echarts.util.curry(showTooltip, dataIndex),
                    onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                    ondragend: echarts.util.curry(dragend, dataIndex),
                    z: 1000
                };
            })
        });
    }, 0);

    window.addEventListener('resize', updatePosition);
}

myChart.on('dataZoom', updatePosition);

function updatePosition() {
    console.log('updatePosition');
    myChart.setOption({
        graphic: echarts.util.map(data, function(item, dataIndex) {
            //console.log(myChart.convertToPixel('grid', item))
            return {
                position: myChart.convertToPixel('grid', item)
            };
        })
    });
}

function dragend(dataIndex) {
    var height = -100;
    //if()
    myChart.setOption({
        graphic: echarts.util.map(data, function(item, dataIndex) {
            console.log(item);
            if (item[1] !== 0) {
                height = 100;
            }
            if (item[1] < 0) {
                item[1] = 0.5;
            }
            return {
                type: 'rect',
                position: myChart.convertToPixel('grid', item),
                left: 'center',
                shape: {
                    x: 0.5,
                    y: 0.5,
                    r: 20,
                    width: 500,
                    height: height
                },
                style: {
                    fill: '#000',
                    lineWidth: 4
                },
                invisible: true,
                draggable: true,
                ondrag: echarts.util.curry(onPointDragging, item[1]),
                onmouseover: echarts.util.curry(showTooltip, dataIndex),
                onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                ondragend: echarts.util.curry(dragend, item[1]),
                z: 1000
            };
        })
    });
}

function showTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
    });
}

function hideTooltip(dataIndex) {
    //console.log('hidden');
    myChart.dispatchAction({
        type: 'hideTip'
    });
}

function onPointDragging(dataIndex, dx, dy) {
    //console.log(dataIndex);
    if (dataIndex == 0.5) {
        dataIndex = 0;
    }
    var xy = myChart.convertFromPixel('grid', this.position);
    //console.log(xy[1], dataIndex);
    xy[0] = 0.5;
    if (xy[1] < dataIndex) {
        xy[1] = dataIndex - Math.ceil(Math.abs(xy[1] - dataIndex));
    } else {
        xy[1] = dataIndex + Math.ceil(Math.abs(xy[1] - dataIndex));
    }
    if (xy[1] > 3) {
        xy[1] = 3;
    }
    if (xy[1] <= 0) {
        xy[1] = 0.5;
    }
    //dx.offsetY=0;
    //console.log(xy);
    data[0] = xy;
    // Update data
    var length = -5;
    if (xy[1] != 0.5) {
        length = (xy[1] + 1) * (-5);
    }
    myChart.setOption({
        series: [{
            id: 'a',
            data: data
        }, {
            id: 'lightLine',
            splitLine: {
                show: true,
                length: length,
                lineStyle: {
                    color: 'auto',
                }
            },
        }]
    });
    //console.log(data)
}