var item = {
    name: "Load Averages",
    value: [random(), random(), random()],
    unit: '',
    max: 100
}
// 颜色
var lightBlue = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#00a2ff' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#70ffac' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}
// 纹理
var piePane = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVQ4jWP8//8/AwXgPxMluhkYGBhGDRg1YNQAKhnAwsDAQFF+BgBtSwUd6uvSywAAAABJRU5ErkJggg=='
var piePatternImg = new Image();
piePatternImg.src = piePane;
// 指定图表的配置项和数据
var option = {
    title: {
        text: item.name,
        x: '50%',
        y: '5%',
        textAlign: "center",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 40,
            color: '#bac7e5'
        },
    },
    tooltip: {
        show: false
    },
    grid: {
        top: '20%',
        left: '5%',
        right: '5%',
        bottom: '15%',
    },
    xAxis: {
        data: ['1min', '5min', '15min'],
        offset: 0,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        }
    },
    yAxis: {
        min: 0,
        max: item.max,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        label: {
            show: true,
            position: 'top',
            padding: 1,
            color: '#01c8d7',
            fontSize: 30,
            formatter: '{c}'
        },
        itemStyle: {
            color: lightBlue
        },
        barWidth: '40%',
        data: item.value,
        z: 10
    }, {
        type: 'bar',
        barGap: '-100%',
        itemStyle: {
            color: {
                image: piePatternImg,
                repeat: 'repeat'
            },
            opacity: 0.05
        },
        barWidth: '40%',
        data: [item.max, item.max, item.max],
        z: 5
    }, {
        type: 'bar',
        barGap: '-100%',
        itemStyle: {
            color: '#536dfe',
            opacity: 0.2
        },
        barWidth: '40%',
        data: [item.max, item.max, item.max],
        z: 5
    }],
    backgroundColor: "#233239"
};

function random() {
    return (Math.random() * 100).toFixed(2);
}

app.timeTicket = setInterval(function() {
    var value = parseInt(Math.random() * 100);
    setPercent(value);
}, 1000);

function setPercent(p) {
    option.series[0].data = [random(), random(), random()];
    myChart.setOption(option, true);
}