function func(x) {
    return Math.pow(0.25-x*x,0.5);
}

function func2(x) {
    x -= 1;
    return -Math.pow(0.25-x*x,0.5)+1;
}

function func3(x) {
    return -x+1;
}

function generateData() {
    let data = [];
    for (let i = 0; i <= 1; i += 0.0001) {
        data.push([i, func(i)]);
    }
    return data;
}

function generateData2() {
    let data = [];
    for (let i = 0; i <= 1; i += 0.0001) {
        data.push([i, func2(i)]);
    }
    return data;
}

function generateData3() {
    let data = [];
    for (let i = 0; i <= 1; i += 0.0001) {
        data.push([i, func3(i)]);
    }
    return data;
}

option = {
    animation: false,
    grid: {
        top: 40,
        left: 50,
        right: 40,
        bottom: 50
    },
    xAxis: {
        name: 'x',
        min: 0,
        max: 1,
        minorTick: {
            show: true
        },
        splitLine: {
            lineStyle: {
                color: '#999'
            }
        },
        minorSplitLine: {
            show: true,
            lineStyle: {
                color: '#ddd'
            }
        },
        splitNumber:10
    },
    yAxis: {
        name: 'y',
        min: 0,
        max: 1,
        splitNumber:10,
        minorTick: {
            show: true
        },
        splitLine: {
            lineStyle: {
                color: '#999'
            }
        },
        minorSplitLine: {
            show: true,
            lineStyle: {
                color: '#ddd'
            }
        }
    },
    //区域缩放
    dataZoom: [{
        show: true,
        type: 'inside',
        filterMode: 'none',
        xAxisIndex: [0],
        startValue: -20,
        endValue: 20
    }, {
        show: true,
        type: 'inside',
        filterMode: 'none',
        yAxisIndex: [0],
        startValue: -20,
        endValue: 20
    }],
    series: [
        {
            type: 'line',
            showSymbol: false,
            clip: true,
            data: generateData()
        },
        {
            type: 'line',
            showSymbol: false,
            clip: true,
            data: generateData2()
        },
        {
            type: 'line',
            showSymbol: false,
            clip: true,
            data: generateData3()
        }
    ]
};