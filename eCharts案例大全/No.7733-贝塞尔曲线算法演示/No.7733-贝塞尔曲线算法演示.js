var symbolSize = 20;
var data = [[0,0], [255,255]];

var _factorial = (n) => {
    if (n > 20) {
        return +Infinity
    }
    if (n === 0) {
        return 1
    }
    return n * _factorial(n - 1)
}

function bezierPrams(n,t,i) {
    if (i>=0 && i<=n) {
        return _factorial(n)/(_factorial(i) * _factorial(n-i)) * Math.pow(1-t, n-i) * Math.pow(t, i)
    }
    return 0
}

function bezier(points, limit = 50) {
    let length = points.length
    if (length > 20 || length< 3) {
        console.warn('只允许添加3-20个点')
        return []
    }
    const ret = []
    for (let i = 0; i<=limit; i++) {
        const t = i / limit
        let sum = [0, 0]
        for(let j=0; j<length; j++) {
            sum[0] = sum[0] + bezierPrams(length-1,t,j) * points[j][0]
            sum[1] = sum[1] + bezierPrams(length-1,t,j) * points[j][1]
        }
        ret.push(sum)
    }
    return ret
}

option = {
    animation: false,
    title: {
        text: '贝塞尔曲线算法演示'
    },
    tooltip: {
        show: false,
        triggerOn: 'none',
        formatter: function (params) {
            return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
        }
    },
    grid: {
    },
    xAxis: {
        min: 0,
        max: 255,
        type: 'value',
        axisLine: {onZero: false}
    },
    yAxis: {
        min: 0,
        max: 255,
        type: 'value',
        axisLine: {onZero: false}
    },
    dataZoom: [
        {
            type: 'slider',
            xAxisIndex: 0,
            filterMode: 'empty'
        },
        {
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'empty'
        },
        {
            type: 'inside',
            xAxisIndex: 0,
            filterMode: 'empty'
        },
        {
            type: 'inside',
            yAxisIndex: 0,
            filterMode: 'empty'
        }
    ],
    series: [
        {
            id: 'a',
            type: 'line',
            //smooth: true,
            symbolSize: symbolSize,
            data: data
        }
    ]
};


setTimeout(function () {
    // Add shadow circles (which is not visible) to enable drag.
    myChart.setOption({
        graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
                type: 'circle',
                position: myChart.convertToPixel('grid', item),
                shape: {
                    cx: 0,
                    cy: 0,
                    r: symbolSize / 2
                },
                invisible: true,
                draggable: true,
                ondrag: echarts.util.curry(onPointDragging, dataIndex),
                onmousemove: echarts.util.curry(showTooltip, dataIndex),
                onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                z: 100
            };
        })
    });
}, 0);

window.addEventListener('resize', updatePosition);

myChart.on('dataZoom', updatePosition);

function updatePosition() {
    myChart.setOption({
        graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
                position: myChart.convertToPixel('grid', item)
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
    data[dataIndex] = myChart.convertFromPixel('grid', this.position);

    // Update data
   series =  [{
        id: 'a',
        type: 'line',
        //smooth: true,
        symbolSize: symbolSize,
        data: data
    },{
        id: 'b',
        type: 'line',
        smooth: true,
        data: data.length >2 ? bezier(data) : []
    }]
    myChart.setOption({ series });
}

function removePoint(dataIndex) {
    data = [...data.slice(0, dataIndex), ...data.slice(dataIndex+1)]
    update()
}

var zr = myChart.getZr();

function update() {
    series =  [{
        id: 'a',
        type: 'line',
        //smooth: true,
        symbolSize: symbolSize,
        data: data
    },{
        id: 'b',
        type: 'line',
        smooth: true,
        symbolSize: 0,
        data: data.length >2 ? bezier(data) : []
    }]
    myChart.setOption({ series });
    setTimeout(function () {
        // Add shadow circles (which is not visible) to enable drag.
        myChart.setOption({
            graphic: echarts.util.map(data, function (item, dataIndex) {
                return {
                    type: 'circle',
                    position: myChart.convertToPixel('grid', item),
                    shape: {
                        cx: 0,
                        cy: 0,
                        r: symbolSize / 2
                    },
                    invisible: true,
                    draggable: true,
                    ondrag: echarts.util.curry(onPointDragging, dataIndex),
                    onmousemove: echarts.util.curry(showTooltip, dataIndex),
                    onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                    onclick: echarts.util.curry(removePoint, dataIndex),
                    z: 100
                };
            })
        });
    }, 0);
}

zr.on('click', function (params) {
    if (params.target && params.target.type === 'circle') {
        return
    }
    var pointInPixel = [params.offsetX, params.offsetY];
    var pointInGrid = myChart.convertFromPixel('grid', pointInPixel);

    if (myChart.containPixel('grid', pointInPixel)) {
        data.push(pointInGrid);
        data.sort((a, b) => a[0]-b[0])

        update()
    }
});

