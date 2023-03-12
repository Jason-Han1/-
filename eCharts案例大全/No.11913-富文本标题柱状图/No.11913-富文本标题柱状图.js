var lineData = [{
        "bcity": "广东省广州市",
        "ecity": "广东省东莞市",
        "val": 2138,
        "blat": 23.13,
        "blon": 113.27,
        "elat": 23.05,
        "elon": 113.75,
        "bcitysim": "广州市",
        "ecitysim": "东莞市"
    },
    {
        "bcity": "广东省深圳市",
        "ecity": "广东省东莞市",
        "val": 1767,
        "blat": 22.55,
        "blon": 114.05,
        "elat": 23.05,
        "elon": 113.75,
        "bcitysim": "深圳市",
        "ecitysim": "东莞市"
    },
    {
        "bcity": "广东省佛山市",
        "ecity": "广东省东莞市",
        "val": 847,
        "blat": 23.02,
        "blon": 113.12,
        "elat": 23.05,
        "elon": 113.75,
        "bcitysim": "佛山市",
        "ecitysim": "东莞市"
    },
    {
        "bcity": "广东省惠州市",
        "ecity": "广东省东莞市",
        "val": 424,
        "blat": 23.12,
        "blon": 114.42,
        "elat": 23.05,
        "elon": 113.75,
        "bcitysim": "惠州市",
        "ecitysim": "东莞市"
    },
    {
        "bcity": "广东省中山市",
        "ecity": "广东省东莞市",
        "val": 370,
        "blat": 22.52,
        "blon": 113.38,
        "elat": 23.05,
        "elon": 113.75,
        "bcitysim": "中山市",
        "ecitysim": "东莞市"
    }
];
var xAxisData = [],
    itemCountArr = [];
for (var i = 0; i < lineData.length; i++) {
    xAxisData.push({
        value: (lineData[i].bcitysim.slice(0, 2)) + '-' + (lineData[i].ecitysim.slice(0, 2)),
        textStyle: {
            color: '#d8edfe',
            fontSize: 20,
            fontWidth: 100
        }
    });
    itemCountArr.push(lineData[i].val);
}
option = {
    backgroundColor: '#010F57',
    xAxis: {
        type: 'category',
        data: xAxisData,
        axisLine: {
            lineStyle: {
                color: '#fff',
                width: 2,
                opacity: 0.5
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0
        }
    },
    title: {
        text: '{bgRect|}{title| 热门线路Top5}',
        textStyle: {
            rich: {
                bgRect: {
                    width: 26,
                    height: 26,
                    backgroundColor: '#0563cc'
                },
                title: {
                    color: '#fff'
                }
            }
        },
        left: 20,
        top: 20
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: ['#fff'],
                width: 2,
                type: 'dashed',
                opacity: 0.15
            }
        }
    },
    grid: {
        left: '5%',
        top: '15%',
        right: '5%',
        bottom: '5%'
    },
    series: [{
        data: itemCountArr,
        type: 'bar',
        label: {
            show: true,
            position: 'top',
            color: '#00fcff'
        },
        barWidth: 50,
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#E8DA12' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#C03322' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }
        }
    }]
};