//num 一圈获取几个坐标
const getLocArr = (num = 360, r = 500, cx = 500, cy = 500, clockwise) => {
    var arr = [];
    var du = 360 / num;
    // 是否反向旋转

    for (var times = 0; times < num; times++) {
        var hudu = (2 * Math.PI / 360) * (du * times - 180);
        if (clockwise) hudu *= -1;
        var x = Math.sin(hudu) * r + cx;
        var y = Math.cos(hudu) * r + cy;
        arr.push([x, y]);
    }
    arr.push([cx, cy - r]); // 闭合

    return arr;
}

const getLocArrHarf = (num = 360, r = 500, cx = 500, cy = 500, clockwise) => {
    var arr = [];
    var du = 360 / num;
    // 是否反向旋转

    for (var times = 0; times < num / 2; times++) {
        var hudu = (2 * Math.PI / 360) * (du * times - 180);
        if (clockwise) hudu *= -1;
        var x = Math.sin(hudu) * r + cx;
        var y = Math.cos(hudu) * r + cy;
        arr.push([x, y]);
    }

    return arr;
}

option = {
    backgroundColor: '#111',
    grid: {
        width: 500, // 实际大小
        height: 500, // 实际大小
        top: 10,
        left: 10,
        right: 10,
        bottom: 10
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        max: 1000, // 将宽1000等分
        min: 0
    },
    yAxis: {
        silent: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        max: 1000, // 将高1000等分
        min: 0
    },
    series: [{
        coordinateSystem: 'cartesian2d',
        type: 'lines',
        polyline: true,
        zlevel: 1,
        effect: {
            show: true,
            constantSpeed: 200,
            trailLength: 0.05,
            symbolSize: 6,
            symbol: 'circle',
            loop: true
        },
        lineStyle: {
            normal: {
                color: 'yellow',
                opacity: 0.2,
                curveness: 0.3,
                width: 1
            }
        },
        data: [{
            coords: getLocArr(760)
        }]
    }, {
        coordinateSystem: 'cartesian2d',
        type: 'lines',
        polyline: true,
        zlevel: 1,
        effect: {
            show: true,
            constantSpeed: 100,
            trailLength: 0.05,
            symbolSize: 6,
            // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            symbol: 'circle',
            loop: true
        },
        lineStyle: {
            normal: {
                color: 'yellow',
                opacity: 0.2,
                curveness: 0.3,
                width: 1
            }
        },
        data: [{
            coords: getLocArrHarf(3600, 250, 500, 750, false)
        }, {
            coords: getLocArrHarf(3600, 250, 500, 250, true)
        }, {
            coords: getLocArr(360, 50, 500, 750, false)
        }, {
            coords: getLocArr(3600, 50, 500, 250, true)
        }]
    }]
};