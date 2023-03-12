/**
 * 图表所需参数
 */
var data = {
    id: 'echarLines',
    title: '多折线',
    legend: ['只想要你知道', '血腥爱情故事', '捉迷藏', '只要平凡', '少年日记', '正确人类', '蜜蜂'],
    xAxis: ['白羊', '金牛', '巨蟹', '狮子',
        '双鱼', '双子', '射手', '天枰', '处女', '摩羯'
    ],
    color: ['#7091C4', '#5170A2', '#A6A6A6', '#C4C9D3', '#3FA7DC', '#8E96A5', '#DA8084'],
    yAxis: [
        [102.0, 101.3, 99.4, 96.6, 95.3, 94.3, 92.5, 90.5, 88.6, 86.0],
        [12.0, 91.3, 19.4, 96.6, 95.3, 94.3, 21.5, 90.5, 18.6, 6.0],
        [22.0, 21.3, 13.4, 96.6, 35.3, 24.3, 11.5, 80.5, 18.6, 16.0],
        [32.0, 41.3, 10.4, 96.6, 15.3, 14.3, 31.5, 30.5, 18.6, 26.0],
        [42.0, 21.3, 34.4, 96.6, 65.3, 64.3, 41.5, 50.5, 18.6, 36.0],
        [52.0, 41.3, 21.4, 96.6, 85.3, 84.3, 41.5, 20.5, 18.6, 46.0],
        [62.0, 61.3, 56.4, 96.6, 45.3, 54.3, 61.5, 80.5, 18.6, 56.0]
    ]
}

let legend = data.legend || []
let seriesArr = []
let legendSele = {}
data.yAxis && data.yAxis.forEach((item, index) => {
    let name = legend[index]
    index === 0 ? legendSele[name] = true : legendSele[name] = false //将第一个设置为默认展示
    seriesArr.push({
        name: name,
        type: 'line',
        data: item,
        smooth: false,
        symbol: 'circle',
        hoverAnimation: true,
        showAllSymbol: true,
        symbolSize: '8',
        label: {
            normal: {
                show: index === 0 ? true : false,
                position: 'top',
            }
        },
    })
})

option = {
    backgroundColor: '#fff',
    title: {
        text: data.title,
        x: '4%',
        top: '4%',
        textStyle: {
            color: '#4D5562',
            fontSize: '16',
            fontWeight: 'normal'
        }
    },
    grid: {
        x: 30,
        y: 80,
        x2: 100,
        y2: 60,
    },
    color: data.color,
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            let time = '';
            let str = '';
            for (var i of params) {
                time = i.name + '<br/>';
                if (i.data == 'null' || i.data == null) {
                    str += i.seriesName + ' :  无数据' + '<br/>'
                } else {
                    str += i.seriesName + ' : ' + i.data + '<br/>'
                }

            }
            return time + str;
        }
    },
    legend: {
        icon: 'rect',
        orient: 'vertical',
        right: 10,
        y: 'center',
        // top: 12,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 10,
        borderRadius: 4,
        data: legend,
        textStyle: {
            fontSize: 14,
            // backgroundColor:'red',
            // color: 'blue'
        },
        selected: legendSele
    },
    xAxis: {
        data: data.xAxis || [],
        axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: '#F1F3F5',
                type: 'solid'
            },
        },
        axisTick: { // 坐标轴小标记
            show: false, // 属性show控制显示与否，默认不显示
        },
        axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
            show: true,
            interval: '0',
            color: '#687284',
        },
    },
    yAxis: {
        type: 'value',
        axisTick: { // 坐标轴小标记
            show: false, // 属性show控制显示与否，默认不显示
        },
        splitLine: {
            show: true,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: '#F1F3F5',
                type: 'solid'
            },
        },
        axisLine: { // 坐标轴线
            show: false, // 默认显示，属性show控制显示与否
        },
        axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
            show: false,
        },
    },
    dataZoom: [{
        type: 'slider',
        show: true,
        startValue: data.xAxis.length - 6,
        endValue: data.xAxis.length
        // minValueSpan:6,
    }],
    series: seriesArr
}