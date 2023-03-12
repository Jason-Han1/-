let listN = '温度';
let unit = '°C';
let xAxisData = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '31/00']
let yAxisData = [20, 21, 20, 23, 26, 25, 26, 25, 28, 29, 30, 29, 28, 27, 26, 25, 24, 23, 23, 21, 20, 21, 22, 23]

option = {
    grid: {
        left: '10%',
        top: '30%',
        right: '10%',
        bottom: '30%'
    },
    tooltip: {
        triggerOn: 'none',
        formatter: function(params) {
            return 'X: ' + params.name + '<br>Y: ' + params.data;
        }
    },
    dataZoom: {
        bottom: '20%',
        end: 50
    },
    xAxis: {
        type: 'category',
        data: xAxisData
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        name: `${listN}${unit}`,
        nameGap: 35,
        splitLine: {
            lineStyle: {
                color: '#DBDBDB',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [{
            id: 'aaa',
            name: listN,
            type: 'line',
            color: '#EC5176',
            smooth: true,
            symbolSize: 10,
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(255, 204, 99, 1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(242, 198, 106, 0)' // 100% 处的颜色
                    }],
                    globalCoord: false
                }
            },
            data: yAxisData
        },
        {
            id: 'bbb',
            type: 'bar',
            color: '#EC5176',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(255, 204, 99, 1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(242, 198, 106, 0)' // 100% 处的颜色
                    }],
                    globalCoord: false
                }
            },
            data: yAxisData
        }
    ]
}

// 拖拽
setTimeout(function() {
    myChart.setOption({
        graphic: echarts.util.map(yAxisData, function(item, dataIndex) {
            let position = myChart.convertToPixel({
                seriesIndex: 0
            }, [dataIndex, item]);
            return {
                id: dataIndex,
                type: 'circle',
                position: position,
                shape: {
                    r: 5
                },
                invisible: true,
                draggable: true,
                ondrag: echarts.util.curry(onPointDragging, dataIndex),
                onmousemove: echarts.util.curry(showTooltip, dataIndex),
                onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                ondragend: echarts.util.curry(onPointDragEnd, dataIndex),
                z: 100
            };
        })
    });
}, 0);
window.addEventListener('resize', updatePosition);
myChart.on('dataZoom', updatePosition);

function updatePosition() {
    myChart.setOption({
        graphic: echarts.util.map(yAxisData, function(item, dataIndex) {
            return {
                position: myChart.convertToPixel({
                    seriesIndex: 0
                }, [dataIndex, item])
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
    myChart.dispatchAction({
        type: 'hideTip'
    });
}

function onPointDragging(dataIndex, dx, dy) {
    if ((myChart.convertFromPixel('grid', this.position)[1]) >= 0 && (myChart.convertFromPixel('grid', this.position)[1]) <= 100) {
        yAxisData[dataIndex] = Math.round(myChart.convertFromPixel({
            seriesIndex: 0
        }, this.position)[1]);
        myChart.setOption({
            series: [{
                id: 'aaa',
                data: yAxisData
            }, {
                id: 'bbb',
                data: yAxisData
            }]
        });
    } else {

    }
}

function onPointDragEnd(dataIndex, dx, dy) {
    myChart.setOption({
        graphic: echarts.util.map(yAxisData, function(item, dataIndex) {
            return {
                id: dataIndex,
                position: myChart.convertToPixel({
                    seriesIndex: 0
                }, [dataIndex, item])
            }
        })
    })
}