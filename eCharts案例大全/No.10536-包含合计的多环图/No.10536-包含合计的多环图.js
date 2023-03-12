var data = [{
        name: '装备制造',
        val1: 80,
        val2: 120
    }, {
        name: '现代材料',
        val1: 44,
        val2: 60
    }, {
        name: '新能源',
        val1: 35,
        val2: 60
    }, {
        name: '新一代信息技术',
        val1: 30,
        val2: 60
    }, {
        name: '商贸物流',
        val1: 20,
        val2: 60
    },
    {
        name: '装备制造',
        val1: 80,
        val2: 280
    }, {
        name: '现代材料',
        val1: 44,
        val2: 60
    }, {
        name: '新能源',
        val1: 35,
        val2: 60
    }, {
        name: '新一代信息技术',
        val1: 30,
        val2: 60
    }, {
        name: '商贸物流',
        val1: 20,
        val2: 60
    }
]
var sumVal1 = 0;
var sumVal2 = 0;
var lineCount = 5;
var titleArr = [],
    seriesArr = [];
var showMax = 9;
colors = ['#ff6633', '#6699cc'];
var rowPercent;
data.forEach(function(item, index) {
    sumVal1 += item.val1;
    sumVal2 += item.val2;
    if (index >= showMax) {
        return;
    }
    var val = Math.round(item.val1 / item.val2 * 100);
    var rest = 100 - val;
    rowPercent = Math.round(Math.ceil((index + 1) / lineCount) / (Math.ceil(data.length / lineCount) + 1) * 100);
    var hFix = Math.ceil((index + 1) / lineCount) == 1 ? 26 : 38;
    seriesArr.push({
        name: item.name,
        type: 'pie',
        clockWise: false,
        radius: [45, 70],
        itemStyle: {
            normal: {
                color: colors[0],
                shadowColor: colors[0],
                shadowBlur: 0,
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
            }
        },
        hoverAnimation: false,
        center: [(index % lineCount) * 16 + hFix + '%', rowPercent + '%'],
        data: [{
            value: val
        }, {
            value: rest,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: colors[1]
                },
                emphasis: {
                    color: colors[1]
                }
            },
            label: {
                normal: {
                    formatter: function(params) {

                        return params.seriesName + "\n" + params.value + '%';
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold',
                        color: colors[1]
                    }
                }
            }
        }]
    })
});
//All count 
seriesArr.push({
    name: '合计',
    type: 'pie',
    clockWise: false,
    radius: [55, 90],
    itemStyle: {
        normal: {
            color: colors[0],
            shadowColor: colors[0],
            shadowBlur: 0,
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
        }
    },
    hoverAnimation: false,
    center: [(0 % lineCount) * 16 + 18 + '%', (rowPercent - 3) + '%'],
    data: [{
        value: Math.round(sumVal1 / sumVal2 * 100)
    }, {
        value: Math.round((1 - sumVal1 / sumVal2) * 100),
        name: 'invisible',
        itemStyle: {
            normal: {
                color: colors[1]
            },
            emphasis: {
                color: colors[1]
            }
        },
        label: {
            normal: {
                formatter: function(params) {
                    return params.seriesName + "\n" + params.value + '%';
                },
                position: 'center',
                show: true,
                textStyle: {
                    fontSize: '20',
                    fontWeight: 'bold',
                    color: colors[1]
                }
            }
        }
    }]
});

option = {
    backgroundColor: "#fff",
    title: titleArr,
    series: seriesArr
}