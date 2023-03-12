var funcs = {
    ['1 幂函数：y=x^a,a=2']: function (k) {
        const len = k===1? 30 : Math.round(k * 30 % 30)
        return [len, len * len];
    },
    ['2 指数函数：y=a^x,a=2']: function (k) {
        const len = k===1? 30 : Math.round(k * 30 % 30)
        const a = 2
        let ret = a
        for (let i = 0; i < len; i++) {
            ret *= a        
        }
        return [len, ret]
    },
    ['3 对数函数：y=logax,a=10']: function (k) {
        const len = k===1? 31 : Math.round(k * 30 % 30) + 1
        const a = 10
        let ret = Math.log(len)
        return [len-1, ret]
    },
    ['4.1 三角函数-正弦：y=sinx']: function (k) {
        const angle = k * 2 * Math.PI
        return [angle, Math.sin(angle)]
    },
    ['4.2 三角函数-余弦：y=cosx']: function (k) {
        const angle = k * 2 * Math.PI
        return [angle, Math.cos(angle)]
    },
    ['4.3 三角函数-正切：y=tanx']: function (k) {
        const angle = k * 2 * Math.PI
        return [angle, Math.tan(angle)]
    },
    ['5.1 反三角函数-反正弦：y=arcsinx']: function (k) {
        const x = k * 2 - 1
        return [x, Math.asin(x)]
    },
    ['5.2 反三角函数-反余弦：y=arccosx']: function (k) {
        const x = k * 2 - 1
        return [x, Math.acos(x)]
    },
    ['5.3 反三角函数-反正切：y=arctanx']: function (k) {
        const x = k * 2 - 1
        return [x, Math.atan(x)]
    },
    ['6 常数：y=a']: function (k) {
        return 0.5
    },
    ['7.1 圆锥曲线-椭圆：x²/a²+y²/b²=1 (a=3,b=2)']: function (k) {
        const a = 3
        const b = 2
        const angle = k * 2 * Math.PI
        const x = a * Math.sin(angle)
        const y = b * Math.cos(angle)
        return [x, y]
    },
    ['7.2 圆锥曲线-抛物线：y²=2px (p=1)']: function (k) {
        const len = k===1? 15 : Math.round(k * 30 % 30) - 15
        const p = 1
        const x = Math.abs(len)
        let y = Math.sqrt(2 * p * x)
        if (len < 0) {
            y = -y
        }
        return [x, y]
    },
    ['7.3 圆锥曲线-双曲线：x²/a²-y²/b²=1 (a=2,b=3)']: function (k) {
        const a = 2
        const b = 3
        const angle = k * 2 * Math.PI
        const x = a / Math.cos(angle)
        const y = b * Math.tan(angle)
        return [x, y]
    }
};

var N_POINT = 30;

var grids = [];
var xAxes = [];
var yAxes = [];
var series = [];
var titles = [];
var count = 0;
echarts.util.each(funcs, function (func, name) {
    var data = [];
    let xAxis = {
        min: +Infinity,
        max: -Infinity
    }
    let yAxis = {
        min: +Infinity,
        max: -Infinity
    }
    for (var i = 0; i <= N_POINT; i++) {
        var x = i / N_POINT;
        var y = func(x);
        if (Object.prototype.toString.call(y) === '[object Array]') {
            data.push(y)
            if (y[0] < xAxis.min) {
                xAxis.min = y[0]
            }
            if (y[0] > xAxis.max) {
                xAxis.max = y[0]
            }
            if (y[1] < yAxis.min) {
                yAxis.min = y[1]
            }
            if (y[1] > yAxis.max) {
                yAxis.max = y[1]
            }
        } else {
            xAxis = {}
            yAxis = {}
            data.push([x, y]);
        }
    }
    
    // 等比显示
    // if (xAxis.min < yAxis.min) {
    //     yAxis.min = xAxis.min
    // } else {
    //     xAxis.min = yAxis.min
    // }
    // if (xAxis.max < yAxis.max) {
    //     xAxis.max = yAxis.max
    // } else {
    //     yAxis.max = xAxis.max
    // }
    
    grids.push({
        show: true,
        borderWidth: 0,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowBlur: 2
    });
    xAxes.push({
        type: 'value',
        show: false,
        min: 0,
        max: 1,
        gridIndex: count,
        ...xAxis
    });
    yAxes.push({
        type: 'value',
        show: false,
        min: -0.4,
        max: 1.4,
        gridIndex: count,
        ...yAxis
    });
    series.push({
        name: name,
        type: 'line',
        xAxisIndex: count,
        yAxisIndex: count,
        data: data,
        showSymbol: false,
        animationDuration: 1000
    });
    titles.push({
        textAlign: 'center',
        text: name,
        textStyle: {
            fontSize: 12,
            fontWeight: 'normal'
        }
    });
    count++;
});

var rowNumber = Math.ceil(Math.sqrt(count));
echarts.util.each(grids, function (grid, idx) {
    grid.left = ((idx % rowNumber) / rowNumber * 100 + 0.5) + '%';
    grid.top = (Math.floor(idx / rowNumber) / rowNumber * 100 + 0.5) + '%';
    grid.width = (1 / rowNumber * 100 - 1) + '%';
    grid.height = (1 / rowNumber * 100 - 1) + '%';

    titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
    titles[idx].top = parseFloat(grid.top) + '%';
});

option = {
    title: titles.concat([{
        text: '基本曲线方程 & 圆锥曲线',
        top: 'bottom',
        left: 'center'
    }]),
    grid: grids,
    xAxis: xAxes,
    yAxis: yAxes,
    series: series
};
console.log(option)
