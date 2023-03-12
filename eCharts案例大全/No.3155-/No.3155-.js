var color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
option = {
    title: {
        text: '',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        padding: [2, 10],
        textStyle: {
            fontSize: 16
        }
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                width: 3
            }
        },
        axisTick: {
            show: true,
            alignWithLabel: true,
            lineStyle: {
                width:3
            }
        },
        axisLabel: {
            rotate: 45,
            fontWeight: "bold",
            formatter: function(value) {
                return value.split(" ")[1];
            }
        },
        data: ["2017-09-11 16:23:34", "2017-09-11 16:28:34", "2017-09-11 16:33:34", "2017-09-11 16:38:34", "2017-09-11 16:43:34", "2017-09-11 16:48:34", "2017-09-11 16:53:34"]
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '4%',
        containLabel: true
    },
    visualMap: [{
        
        show: false,
        pieces: [{
            gt: 0,
            lte: 50,
            color: 'green'
        }, {
            gt: 50,
            lte: 100,
            color: 'yellow'
        }, {
            gt: 100,
            lte: 150,
            color: 'orange'
        }, {
            gt: 150,
            lte: 200,
            color: '#fc5d00'
        }, {
            gt: 200,
            lte: 300,
            color: '#c43939'
        }, {
            gt: 300,
            color: 'red'
        }],
        seriesIndex: 0
    },{
        show: false,
        pieces: [{
            gt: 0,
            lte: 80,
            color: 'yellow'
        }, {
            gt: 80,
            color: 'blue'
        }],
        seriesIndex: 1}],
    yAxis: {
        type: 'value',
        name: 'M',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                width: 3,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'red'
                    }, {
                        offset: 1,
                        color: 'blue'
                    }],
                    globalCoord: false // 缺省为 false
                }
            }
        },
        axisTick: {
            lineStyle: {
                width: 3
            }
        },
        axisLabel: {
            fontWeight: "bold",
        }
    },
    series: [{
        type: 'line',
        symbol: 'circle',
        symbolSize: 10,
        smooth: true,
        animationDuration: 2000,
        itemStyle: {
            normal: {
                color: 'rgb(103, 99, 99)',
                shadowBlur: 2,
                shadowColor: "rgba(0, 0, 0, .12)",
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
        lineStyle: {
            normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetX: 4,
                shadowOffsetY: 10
            }
        },
        data: [10, 40, 74, 83, 120, 146, 380]
    }]
};