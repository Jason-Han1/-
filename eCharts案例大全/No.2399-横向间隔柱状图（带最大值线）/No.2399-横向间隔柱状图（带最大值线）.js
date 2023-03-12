// var maxData = 2000;
option = {
    // backgroundColor: '#06032D',
    tooltip: {
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        data: ['2013', '2014', '2015', '2016'],
        inverse: true,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            margin: 10,
            color: '#999',
            fontSize: 16
        }
    },
    grid: {
        top: 'center',
        height: 200,
        left: 70,
        right: 100
    },
    series: [
        {
        // current data
        type: 'pictorialBar',
        symbol: 'rect',  //矩形
        symbolRepeat: 'fixed', //指定图形元素是否重复,重复的次数依据 symbolBoundingData 计算得到
        symbolMargin: '20%', //图形的两边间隔, 绝对值||百分比值
        symbolClip: true,  //是否裁剪图形
        color:'#29ABE2',
        symbolSize: [36, 10], //图形尺寸【长，宽】
        // symbolBoundingData: maxData,
        data: [891, 1220, 660, 1670],
        markLine: {
            symbol: 'rect',
            label: {
                formatter: 'max: {c}',
                position: 'start'
            },
            lineStyle: {
                color: '#29ABE2',
                type: 'dotted',
                opacity: 0.2,
                width: 2
            },
            data: [{
                type: 'max'
            }]
        },
        z: 10
    }, 
    {
        // full data
        color:'#ccc',
        type: 'pictorialBar',
        itemStyle: {
            normal: {
                opacity: 0.8 ,
            }
        },
        label: {
            show: true,
            position: 'right',
            offset: [10, 0],
            color: '#29ABE2',
            fontSize: 18
        },
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '20%',
        symbol: 'rect',
        symbolSize: [36, 10],
        // symbolBoundingData: maxData,
        data: [891, 1220, 660, 1670],
        z: 5
    }]
};


// Make dynamic data.
function random() {
    return +(Math.random() * (maxData - 10)).toFixed(1);
}
setInterval(function () {
    var dynamicData = [random(), random(), random(), random()];
    myChart.setOption({
        series: [{
            data: dynamicData.slice()
        }, {
            data: dynamicData.slice()
        }]
    })
}, 3000)
