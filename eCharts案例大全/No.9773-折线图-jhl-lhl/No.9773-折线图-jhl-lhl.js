var minVal = 1;
var maxVal = 5;
option = {
    backgroundColor:"#0B1837",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#ffed52',
                type: 'dotted'
            }
        },
        textStyle: {
            fontSize: 18,
        },
        formatter: "{b}年<br/> {a0}：{c0}‰<br/> {a1}：{c1}‰",
    },
    legend: {
        top: '0',
        right: '3%',
        icon: "roundRect",
        itemWidth: 12,
        itemHeight: 2,
        textStyle: {
            color: '#ffffff',
            fontStyle: 'normal',
            fontSize: 14,
            // fontFamily: 'CRegular',
            fontFamily: '黑体',
        },
    },
    grid:{
        top: '20%',
        left:'10%',
        right:'4%',
        bottom:'15%'
    },
    xAxis: [{
        type: 'category',
        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#92714d'
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#92714d',
                opacity: 0.5,
                type: 'solid'
            }
        },
        axisLabel: {
            textStyle: {
                // color: '#7d8ab6',
                fontFamily: 'FZHTJW',
                color: '#ffffff',
                fontSize: 14,
            },
            margin: 8
        },
    }],
    yAxis: [{
        type: 'value',
        name: '（‰）     ',
        nameGap: 10,
        nameTextStyle:{
            color: '#bebebe',
            fontFamily: '黑体',
            fontSize: 14,
        },
        min: minVal,
        max: maxVal,
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                fontFamily: 'FZHTJW',
                color: '#ffffff',
                fontSize: 14,
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#92714d'
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#92714d',
                opacity: 0.2,
                type: 'solid',
            }
        },
    }],
    series: [{
        name: '结婚率',
        type: 'line',
        smooth: true,
        symbol: "none",
        lineStyle: {
           width: 2,
        },
        itemStyle: {
            normal: {
                color: '#659bd2',
            }
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'rgba(101,155,210,0.2)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(101,155,210,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        },
        data: [4.195, 4.61, 4.658, 4.339, 4.205, 4.181, 4.339, 4.505, 4.681],
        // data: dataArray1,
    }, {
        name: '离婚率',
        type: 'line',
        smooth: true,
        symbol: "none",
        lineStyle: {
            width: 2,
        },
        itemStyle: {
            normal: {
                color: '#f5cb38',
            }
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'rgba(245,203,56,0.2)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(245,203,56,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        },
        data: [2.187,2.299,2.411,2.325,2.207,2.190,2.125,2.207,2.290],
        // data: dataArray2,
    }]
};