var getname = ['2014', '2015', '2016', '2017', '2018', '2019'];
var getvalue = [826, 673, 588, 782, 779, 855];
var getvalue1 = [686, 703, 688, 752, 779, 785];
var getvalue2 = [586, 603, 638, 682, 679, 685];

option = {
    backgroundColor: '#000',
    grid: {
        top: '70',
        left: '30',
        right: '10',
        bottom: '30',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
    },
    legend: {
        type: "scroll",
        icon: 'circle',
        right: '0',
        top: '0',
        data: ['招生计划数', '实际录取人数', '实际报到人数'],
        itemGap: 20,
        itemWidth: 11,
        itemHeight: 11,
        textStyle: {
            fontSize: '13',
            color: '#A9C1E5',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#C5DCFF',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#3E5B7D',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        name: '人',
        nameTextStyle: {
            color: '#C5DCFF',
            fontSize: 13,
            padding: [0, 0, -8, 20]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: '#C5DCFF',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#3E5B7D',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(62,91,125,.25)',
            }
        }
    }],
    series: [{
        name: "招生计划数",
        type: 'bar',
        data: getvalue,
        barWidth: '10px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#065ADA' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#22CFF5' // 100% 处的颜色
                }], false),
                barBorderRadius: 5,
            }
        },
    }, {
        name: "实际录取人数",
        type: 'bar',
        data: getvalue1,
        barWidth: '10px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#05C399' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#0FE4D3' // 100% 处的颜色
                }], false),
                barBorderRadius: 5,
            }
        },
    }, {
        name: "实际报到人数",
        type: 'bar',
        data: getvalue1,
        barWidth: '10px',
        barGap: '70%',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF6061' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FF7E7C' // 100% 处的颜色
                }], false),
                barBorderRadius: 5,
            }
        },
    }]
}