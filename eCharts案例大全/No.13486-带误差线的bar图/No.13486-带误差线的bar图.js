data = [3, 5]

error = [1, 2]

function get_errorLine(data, error, hLength = 5) {
    //data:数据
    //error:每个数据对应的正负误差
    //hLength:水平线长度，根据图的宽度调整
    coords = []
    for (var i = 0; i < data.length; i++) {
        coords.push(
            //下界
            [{
                coord: [100 * i + 50 - 0.5 * hLength, data[i] - error[i]]
            }, {
                coord: [100 * i + 50 + 0.5 * hLength, data[i] - error[i]]
            }],
            //竖直线
            [{
                coord: [100 * i + 50, data[i] - error[i]]
            }, {
                coord: [100 * i + 50, data[i] + error[i]]
            }],
            //上界
            [{
                coord: [100 * i + 50 - 0.5 * hLength, data[i] + error[i]]
            }, {
                coord: [100 * i + 50 + 0.5 * hLength, data[i] + error[i]]
            }])
    }
    errorLine = {
        name: 'errorLine',
        type: 'line',
        xAxisIndex: 1,
        yAxisIndex: 0,
        markLine: {
            silent: true,
            symbolSize: 0,
            lineStyle: {
                type: 'solid',
                width: 3,
            },
            data: coords
        },
    }
    return errorLine
}

var line = get_errorLine(data, error)

option = {
    title: {
        text: 'test',
        show: false,
    },
    grid: {
        top: '3%',
        bottom: '7%',
        left: '5%',
        right: '3%',
    },
    xAxis: [{
        show: true,
        type: 'category',
        data: [1, 2],
    }, {
        show: false,
        position: 'top',
        type: 'value',
        min: 0,
        max: data.length * 100,//将bar和误差线对齐
    }],
    yAxis: {
        type: 'value',
        max: 8,
    },
    series: [{
        name: 'bar',
        type: 'bar',
        data: data,
        barWidth: 60
    }, line]
};