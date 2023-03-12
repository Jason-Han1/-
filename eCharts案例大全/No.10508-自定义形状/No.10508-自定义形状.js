//现在这个没有显示是因为 symbol: 'image://back.svg',这个文件没有

//自定义形状，可以实现任意3D形状，如果有类似需要，这是个不错的方法哦！

//建议用AI做，保存成SVG格式，因为图片会模糊

//发灰你的想象力

var dimensions = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var currentMonth = [142, 136, 113, 156, 119, 128, 133];
var option = {
    backgroundColor: '#000',

    xAxis: {
        data: dimensions,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#888'
            },
            margin: 20,
        },
    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color: '#eee',
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#888'
            },
        }
    },
    series: [{
        name: 'DEMO',
        type: 'pictorialBar',
        symbol: 'image://back.svg', //换成本地的文件路径，或者HTTPS也可以
        barGap: 0,
        symbolSize: ['100%', '100%'],
        data: currentMonth
    }]
};