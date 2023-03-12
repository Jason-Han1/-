json_data = [23, 60, 20, 36, 23, 85, 100, 98, 87, 60, 80, 40];
option = {
    title: {
        text: '',
        subtext: '2020年药械原辅料数据',
        top: '-5px',
        textStyle: {
            fontWeight: 'normal', //标题颜色
            color: '#00d6fd'
        },
        subtextStyle: {
            color: '#00d6fd'
        },
        x: "center"
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: [{
        left: '2%',
        bottom: '8%',
        top: '25%',
        right: '2%',
        containLabel: true
    }],
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLine: {
            lineStyle: {
                color: "#00caff"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0b244c'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 4,
        splitLine: {
            lineStyle: {
                color: '#0b244c'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00caff"
            },
        },
        nameTextStyle: {
            color: "#999"
        },
        splitArea: {
            show: false
        }
    }],
    series: [{
        name: '2020原辅料数据',
        type: 'line',
        data: json_data,
        symbol: "none",
        lineStyle: {
            normal: {
                width: 3,
                color: {
                    type: 'linear',

                    colorStops: [{
                        offset: 0,
                        color: '#A9F387' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#48D8BF' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(72,216,191, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20
            }
        },
        itemStyle: {
            normal: {
                color: '#fff',
                borderWidth: 4,
                /*shadowColor: 'rgba(72,216,191, 0.3)',
                shadowBlur: 100,*/
                borderColor: "#A9F387"
            }
        },
        smooth: true
    }]
};