let chartData =[
    {"value": 600,"name": "单位1"},
    {"value":500,"name": "单位2"},
    {"value":400,"name": "单位3"},
    {"value": 300,"name": "单位4"},
    {"value": 200,"name": "单位5"},
];

let icon1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAALCAYAAACUPhZAAAAB3ElEQVQokW2SzWsTURTFf2/mzUdGTUMlIY41SzfZ1IULrQu3bkT8C+zKnRs3QtGFFfzCtSCIUHDjzp2iqCVKKn5UalMtSDeSFkFpFUqaZJKRN86rL5McuAznzL3n3nffEyzVbgOTDGIDmAZ6WhXzH3cTLMfHcpxFy/UrZlW/vbPTrT1bSeknGVhiDrgAuJkGy3np3ipIOyGrg//uOqUwOxDt+gv1CYEOcNECPuelO5uXLpm4ClSzBsARJ5w4j2NjRru5Bs3vOmcWWJIVP6fIDeA0cNQw8YAHwHEgiqVA+AEyCJ4Q+KJvrmP7D733C5q+S/2QqRDtd6Ta8YfUVEM1u1R0vGtf/wn3rXJYijNH6Sy8hm432Ux6V5FprtAoOt4V4Gam9jLwGAicysQ01qB1+8sKrK9rquobmsipsTEz9w5wBjhmaOqi5+TB8FAc5IRp3f+9BW/rmtbT+l2Ykyv0iq6njrUI5Ax9cqp6mDc/N/8rcUzv1UuIktfayj5dBYthrI577sy452LGqbDEgT0+fVskETWWYeOHLp4Zfq0g7kW/RvgnTeeBE6bYbLW4/m2NzuYWPHykp64BJ9WWRpmMQr9gy3OBsKOCLdFR3buPs+UyPH2ujbfTdQwZA/wFDzGDEfJxOIQAAAAASUVORK5CYII=';
let icon2='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAALCAYAAACUPhZAAAAB4UlEQVQokW2TzUsVURjGfzNz5qPRe73dmNBr3U3Lu7EiqGzR1k1Ef4Gu2rVpE4gtNOgL10EQgtAfEG1ql0WUVGjWvSXYB5jpQqzM8HqdmRtnnCNnRh94GZ73nPd53/OcOQajc3eBPrJYBoaASGWN91O7G0zDwbTsGVN4Vb0qDpvN7cWpRkpnhe+Yk8AVwMk1+Fh0xZ2SLxIyn127Zxcq+YHYWnwuPxWgBVw1gQ9FV4wVXUEuRoFaXgA4bpeOXEZY6LG1/h3+Lqk9Y8CcqB70JLkFXABOaSIuMAGcBcK2EBiWh/D8JzieEWfs2CBafqvom1QPkSbCQwVbevwuFVWQza4Fvn3j807igdnRfbidO0rr62uIthNn0rsKdXGJeuDb14HbudoR4BHg20F1CNPM+rzyCdZ/Kirr64qI/mNd+t5x4CJwRsvJi54U5d6jbcc39Knj5h/4Ma3oq7R+F/rkElHQ6chjzQAHtHxf/+kaLxurWqpN9OUZRIkDm/lfVyJ7xh3MlwvucLngosfAiQo9QQexsJIIV+rwWz6HBMN7/1Yw7n9LOuchm8pXc05fWFrb5ObjBVobv2D6oZr6BXBeurSfyH6IS6416FtGWHItVNR6Orl0shsaT5Xwv9SOPcIA/wG11YJvCHXpxwAAAABJRU5ErkJggg==';

let colorList  =[
    ['#9ffafa', '#9ffafa', '#9ffafa', '#0093ff'],
    ['#f4ceb9', '#f4ceb9', '#f4ceb9', '#0093ff'],
    ['#b2b4ff', '#b2b4ff', '#b2b4ff', '#0093ff']
]

option = {
    backgroundColor:'#003a82',
    tooltip: {
                    show:false,
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
    legend: {
        show: false
    },
    grid: {
        left: '50',
        right:'3%',
        top: '6%',
        bottom:0,
        containLabel:true
    },
    xAxis: {
        show: false,
        type: 'value'

    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisPointer: {
                label: {
                    show: true,
                    margin: 5
                }
            },
            data:chartData.map(item => item.name),
            axisLabel: {
                show: false,
                inside: false,
                fontSize: 14,
                color: '#88caef',
            },
        }, 
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            data: chartData.map(item => item.value),
            axisLabel: {
                show:true,
                fontSize: 14,
                color: '#88caef',
                formatter:'{value}'
            }
        }
    ],
    series: [
        {
            z: 2,
            name: 'value',
            type: 'bar',
            barWidth: 5,
            zlevel: 1,
            data: chartData.map((item, i) => {
                let itemStyle = {
                    color: i > 3 ? colorList[0][3] : colorList[0][i]
                }
                return {
                    value: item.value,
                    itemStyle: itemStyle
                };
            }),
            label: {
                normal: {
                    color: '#b3ccf8',
                    show: true,
                    position: [-30, '-15'],
                    textStyle: {
                        fontSize: 12,
                        color: '#88caef',
                    },
                    rich: {
                    a1: {
                        color: '#fff',
                        fontSize: 16,
                        fontWeight:600,
                        backgroundColor: {
                            image: icon1
                        },
                        width: 20,
                        height: 10,
                        align: 'center',
                        borderRadius: 2
                    },
                    a2: {
                        color: '#fff',
                        fontSize: 16,
                        fontWeight:600,
                        backgroundColor: {
                            image: icon1
                        },
                        width: 20,
                        height: 10,
                        align: 'center',
                        borderRadius: 2
                    },
                    a3: {
                        color: '#fff',
                        fontSize: 16,
                        fontWeight:600,
                        backgroundColor: {
                            image: icon1
                        },
                        width: 20,
                        height: 10,
                        align: 'center',
                        borderRadius: 2
                    },
                    b: {
                        color: '#fff',
                        fontSize: 16,
                        fontWeight:600,
                        backgroundColor: {
                            image:icon2
                        },
                        width: 20,
                        height: 10,
                        align: 'center',
                        borderRadius: 2
                    }
                },
                    formatter: (a,b)=> {
                        var index = chartData.map(item => item.name).indexOf(a.name) ;
                        index = index + 1;
                        if (index - 1 < 3) {
                            return [
                                '{a' + index + '|' + index + '}' + '  ' + a.name
                            ].join('\n')
                        } else {
                            return [
                                '{b|' + index + '}' + '  ' + a.name
                            ].join('\n')
                        }
                    }
                }
            },
        },
        {
            name: '总量',
            type: 'bar',
            barWidth: 5,
            barGap: '-100%',
            itemStyle: {
                normal: {
                    color: 'rgba(32, 48, 85, 0.55)'
                }
            },
            data: (new Array(chartData.length)).fill(chartData[0].value+50)
        }

    ]
};
