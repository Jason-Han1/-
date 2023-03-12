var symbolSize = 20;
var showControl = true
var data = [[0,0], [50,30], [120,180], [185,100], [250, 150], [255,255]];
var easing = 'bounceOut'
var during = 5000
var easingFuncs = {
    linear: function (k) {
        return k;
    },
    quadraticIn: function (k) {
        return k * k;
    },
    quadraticOut: function (k) {
        return k * (2 - k);
    },
    quadraticInOut: function (k) {
        if ((k *= 2) < 1) { return 0.5 * k * k; }
        return -0.5 * (--k * (k - 2) - 1);
    },
    cubicIn: function (k) {
        return k * k * k;
    },
    cubicOut: function (k) {
        return --k * k * k + 1;
    },
    cubicInOut: function (k) {
        if ((k *= 2) < 1) { return 0.5 * k * k * k; }
        return 0.5 * ((k -= 2) * k * k + 2);
    },
    quarticIn: function (k) {
        return k * k * k * k;
    },
    quarticOut: function (k) {
        return 1 - (--k * k * k * k);
    },
    quarticInOut: function (k) {
        if ((k *= 2) < 1) { return 0.5 * k * k * k * k; }
        return -0.5 * ((k -= 2) * k * k * k - 2);
    },
    quinticIn: function (k) {
        return k * k * k * k * k;
    },
    quinticOut: function (k) {
        return --k * k * k * k * k + 1;
    },
    quinticInOut: function (k) {
        if ((k *= 2) < 1) { return 0.5 * k * k * k * k * k; }
        return 0.5 * ((k -= 2) * k * k * k * k + 2);
    },
    sinusoidalIn: function (k) {
        return 1 - Math.cos(k * Math.PI / 2);
    },
    sinusoidalOut: function (k) {
        return Math.sin(k * Math.PI / 2);
    },
    sinusoidalInOut: function (k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    },
    exponentialIn: function (k) {
        return k === 0 ? 0 : Math.pow(1024, k - 1);
    },
    exponentialOut: function (k) {
        return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    },
    exponentialInOut: function (k) {
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if ((k *= 2) < 1) {
            return 0.5 * Math.pow(1024, k - 1);
        }
        return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    },
    circularIn: function (k) {
        return 1 - Math.sqrt(1 - k * k);
    },
    circularOut: function (k) {
        return Math.sqrt(1 - (--k * k));
    },
    circularInOut: function (k) {
        if ((k *= 2) < 1) { return -0.5 * (Math.sqrt(1 - k * k) - 1); }
        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    },
    elasticIn: function (k) {
        var s;
        var a = 0.1;
        var p = 0.4;
        if (k === 0) { return 0; }
        if (k === 1) { return 1; }
        if (!a || a < 1) { a = 1; s = p / 4; }
        else { s = p * Math.asin(1 / a) / (2 * Math.PI); }
        return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
    },
    elasticOut: function (k) {
        var s;
        var a = 0.1;
        var p = 0.4;
        if (k === 0) { return 0; }
        if (k === 1) { return 1; }
        if (!a || a < 1) { a = 1; s = p / 4; }
        else { s = p * Math.asin(1 / a) / (2 * Math.PI); }
        return (a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
    },
    elasticInOut: function (k) {
        var s;
        var a = 0.1;
        var p = 0.4;
        if (k === 0) { return 0; }
        if (k === 1) { return 1; }
        if (!a || a < 1) { a = 1; s = p / 4; }
        else { s = p * Math.asin(1 / a) / (2 * Math.PI); }
        if ((k *= 2) < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
        }
        return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

    },

    // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
    backIn: function (k) {
        var s = 1.70158;
        return k * k * ((s + 1) * k - s);
    },
    backOut: function (k) {
        var s = 1.70158;
        return --k * k * ((s + 1) * k + s) + 1;
    },
    backInOut: function (k) {
        var s = 1.70158 * 1.525;
        if ((k *= 2) < 1) { return 0.5 * (k * k * ((s + 1) * k - s)); }
        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    },

    // 创建弹跳效果
    bounceIn: function (k) {
        return 1 - easingFuncs.bounceOut(1 - k);
    },
    bounceOut: function (k) {
        if (k < (1 / 2.75)) { return 7.5625 * k * k; }
        else if (k < (2 / 2.75)) { return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75; }
        else if (k < (2.5 / 2.75)) { return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375; }
        else { return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375; }
    },
    bounceInOut: function (k) {
        if (k < 0.5) { return easingFuncs.bounceIn(k * 2) * 0.5; }
        return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
    }
};
var smooth = 100

var animate = {
    _i: 0,
    _runTimes: 1,
    _timer: null,
    _points: [],
    _easingFunc: null,
    _always: true,
    disable: false,
    _timeout: 20,
    start(path = [], easing='linear', during=2500, always = true) {
        if (this._t) {
            clearTimeout(this._t)
        }
        this._t = setTimeout(() => {
            const length = path.length - 1
            let runTimes = Math.round(during / this._timeout)
            if (runTimes > length) {
                runTimes = length
            }
            if (this._timer) {
                clearTimeout(this._timer)
                this._timer = null
            }
            this._easingFunc = easingFuncs[easing]
            this._runTimes = runTimes
            this._points = path
            this._i = 0
            this._always = always
            this.disable = false
            this._run()
            console.log(this) 
        }, 300)
    },
    _run() {
        if (this.disable) {
            return
        }
        const t = this._easingFunc(this._i / this._runTimes)
        const points = this._points
        const length = points.length - 1
        let current = points[0]
        if (t < 0) {
            current = [points[0][0] - 10 * t, points[1] -10 * t]
        } else if (t > 1) {
            current = [points[length][0] + 10 * t, points[length][1] + 10 * t]
        } else {
            current = points[Math.round(t * length)]
        }
        // console.log(Math.round(t * length), t, this._i, this._runTimes, current)
        myChart.setOption({
            graphic: [...echarts.util.map(data, function (item, dataIndex) {
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
            }), {
                type: 'rect',
                position: myChart.convertToPixel('grid', current),
                shape: {
                    x: -symbolSize/2,
                    y: -symbolSize/2,
                    width: symbolSize,
                    height: symbolSize
                },
                style: {
                    fill: 'green'
                },
                z: 200
            }]
        })
        
        this._i++
        if (this._i > this._runTimes) {
            if (this._always) {
                this._i = 0
            } else {
                return
            }
        }
        this._timer = setTimeout(() => {
            this._run()
        }, this._timout)
    },
    stop() {
        this.disable = true
        if (this._timer) {
            clearTimeout(this._timer)
            this._timer = null
        }
    }
}

// 二次贝塞尔曲线
function bezier2(p0, p1, p2, t) {
    const t2 = t * t
    const m = 1 - t
    const m2 = m * (1 - t)
    return p0 * m2 + 2 * p1 * t * m + p2 * t2
}

// 三次贝塞尔曲线
function bezier3(p0, p1, p2, p3, t) {
    const t2 = t * t
    const t3 = t * t2
    const m = 1 - t
    const m2 = m * (1 - t)
    const m3 = m2 * (1 - t)
    return p0 * m3 + 3 * p1 * t * m2 + 3 * p2 * t2 * m + p3 * t3
}

function getMidPoint(p0, p1) {
    const x0 = p0[0]
    const y0 = p0[1]
    const x1 = p1[0]
    const y1 = p1[1]
    return [(x0 + x1) / 2, (y0 + y1) / 2]
}
function movePoint(p, v) {
    const px = p[0]
    const py = p[1]
    const vx = v[0]
    const vy = v[1]
    return [px + vx, py + vy]
}
function getVector(p0, p1) {
    const x0 = p0[0]
    const y0 = p0[1]
    const x1 = p1[0]
    const y1 = p1[1]
    return [x1 -x0, y1 - y0]
}

// 绘制过指定点的分段贝塞尔曲线
function smoothLine(points, smooth = 50) {
    const len = points.length
    if (len < 3) {
        return points
    }
    const newPoints = []
    const controls = []
    for (let i = 0; i < len - 2; i++) {
        const p0 = points[i]
        const p1 = points[i + 1]
        const p2 = points[i + 2]
        const m1 = getMidPoint(p0, p1)
        const m2 = getMidPoint(p1, p2)
        const m = getMidPoint(m1, m2)
        const v = getVector(m, p1)
        const _m1 = movePoint(m1, v)
        const _m2 = movePoint(m2, v)
        // 起点
        if (i === 0) {
            for(let j = 0; j < smooth; j++) {
                const x = bezier2(p0[0], _m1[0], p1[0], j/smooth)
                const y = bezier2(p0[1], _m1[1], p1[1], j/smooth)
                newPoints.push([x, y])
            }
            controls.push(_m1)
            controls.push(_m2)
        } else {
            for(let j = 0; j < smooth; j++) {
                const prev = controls[controls.length - 1]
                const x = bezier3(p0[0], prev[0], _m1[0], p1[0], j/smooth)
                const y = bezier3(p0[1], prev[1], _m1[1], p1[1], j/smooth)
                newPoints.push([x, y])
            }
            controls.push(_m1)
            controls.push(_m2)
            // 结束
            if (i === len - 3) {
                for(let j = 0; j <= smooth; j++) {
                    const x = bezier2(p1[0], _m2[0], p2[0], j/smooth)
                    const y = bezier2(p1[1], _m2[1], p2[1], j/smooth)
                    newPoints.push([x, y])
                }
            }
        }
    }
    return {
        controls,
        points: newPoints
    }
}

var lineData = smoothLine(data, smooth)

option = {
    animation: false,
    title: {
        text: '延指定路径移动的动画'
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
        min: -50,
        max: 300,
        type: 'value',
        axisLine: {onZero: false}
    },
    yAxis: {
        min: -50,
        max: 300,
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
            smooth: true,
            symbolSize: symbolSize,
            lineStyle: {width: 0},
            data: data
        },
        {
            id: 'b',
            type: 'line',
            smooth: true,
            symbolSize: 0,
            lineStyle: { color: 'red' },
            data: lineData.points
        },
        {
            id: 'c',
            type: 'scatter',
            symbolSize: 5,
            itemStyle: { color: 'black' },
            data: showControl ? lineData.controls : []
        },
    ]
};


setTimeout(function () {
    // Add shadow circles (which is not visible) to enable drag.
    myChart.setOption({
        graphic: [...echarts.util.map(data, function (item, dataIndex) {
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
        }), {
            type: 'rect',
            position: myChart.convertToPixel('grid', data[0]),
            shape: {
                x: -symbolSize/2,
                y: -symbolSize/2,
                width: symbolSize,
                height: symbolSize
            },
            style: {
                fill: 'green'
            },
            z: 200
        }]
    });
    animate.start(lineData.points, easing, during, true)
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
    
    lineData = smoothLine(data, smooth)
    animate.stop()
    // Update data
    myChart.setOption({
        series: [{
            id: 'a',
            type: 'line',
            smooth: true,
            symbolSize: symbolSize,
            lineStyle: {width: 0},
            data: data
        },
        {
            id: 'b',
            type: 'line',
            smooth: true,
            symbolSize: 0,
            
            data: lineData.points
        },
        {
            id: 'c',
            type: 'scatter',
            symbolSize: 5,
            data: showControl ? lineData.controls : []
        },]
    })
    animate.start(lineData.points, easing, during, true)
}

function removePoint(dataIndex) {
    data = [...data.slice(0, dataIndex), ...data.slice(dataIndex+1)]
    update()
}

var zr = myChart.getZr();
console.log(zr)

function update() {
    animate.stop()
    lineData = smoothLine(data, smooth)
    myChart.setOption({
        series: [{
            id: 'a',
            type: 'line',
            smooth: true,
            symbolSize: symbolSize,
            lineStyle: {width: 0},
            data: data
        },
        {
            id: 'b',
            type: 'line',
            smooth: true,
            symbolSize: 0,
            data: lineData.points
        },
        {
            id: 'c',
            type: 'scatter',
            symbolSize: 5,
            data: lineData.controls
        },]
    });
    setTimeout(function () {
        // Add shadow circles (which is not visible) to enable drag.
        myChart.setOption({
            graphic: [...echarts.util.map(data, function (item, dataIndex) {
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
            }), {
                type: 'rect',
                position: myChart.convertToPixel('grid', data[0]),
                shape: {
                    x: -symbolSize/2,
                    y: -symbolSize/2,
                    width: symbolSize,
                    height: symbolSize
                },
                style: {
                    fill: 'green'
                },
                z: 200
            }]
        });
        animate.start(lineData.points, easing, during, true)
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

console.log(option)