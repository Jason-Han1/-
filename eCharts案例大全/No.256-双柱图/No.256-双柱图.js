let _legendColor = '#8FD8FF';
let _fontSize = 40;
let _fontColor = '#8FD8FF';
let data1 = [70, 90, 100]; 
let data2 = [80, 90, 100]; 
option = {
    backgroundColor:"#102F63",
    legend: {
        x: 'center',
        y: '3%',
        itemWidth: 30,
        itemHeight: 30,
        textStyle: {
            fontSize: 40,
            color: 'rgba(255,255,255,.7)',
        },
    },
    grid: {
        left: '5%',
        top: '25%',
        right: '5%',
        bottom: '10%',
        containLabel: true,
    },
    yAxis: {
        name: '',
        type: 'value',
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    xAxis: {
        type: 'category',
        nameTextStyle: {
            fontSize: 40,
            color: '#7dd6ea',
        },
        axisLabel: {
            show: true,
            interval: 0,
            margin: 20,
            textStyle: {
                color: '#7dd6ea',
                fontSize: 40,
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#4E84AC',
                width: 3,
            },
        },
        data: ['2022年', '2025年', '2030年'],
    },
    series: [
        {
            name: 'blue',
            type: 'bar',
            barWidth: 53,
            barGap: '70%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(0,234,255, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,234,255, .1)',
                        },
                    ]),
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    fontSize: 36,
                    color: '#00EAFF',
                },
                formatter: function (params) {
                    return params.value + '%';
                },
            },
            data: data1,
            z: 10,
            zlevel: 0,
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#0F375F',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 25,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [53, 3],
            symbolPosition: 'start',
            symbolOffset: [-45, 0],
            data: data1,
            width: 2,
            z: 0,
            zlevel: 1,
        },
        {
            name: 'yellow',
            type: 'bar',
            barWidth: 53,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(252,160,0, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(252,160,0, .1)',
                        },
                    ]),
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    fontSize: 36,
                    color: '#FFA200',
                },
                formatter: function (params) {
                    return params.value + '%';
                },
            },
            data: data2,
            z: 10,
            zlevel: 0,
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#0F375F',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 25,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [53, 3],
            symbolPosition: 'start',
            symbolOffset: [45, 0],
            data: data2,
            width: 2,
            z: 0,
            zlevel: 1,
        },
    ],
};
