var data = [{
        "city": "地区一",
        "so2": 12,
        "o3": 21,
        "num": 33
    },
    {
        "city": "地区二",
        "so2": 10,
        "o3": 25,
        "num": 35
    },
    {
        "city": "地区三",
        "so2": 20,
        "o3": 25,
        "num": 45
    },
    {
        "city": "地区四",
        "so2": 30,
        "o3": 25,
        "num": 55
    }
];
var aNum = [],
    aSO2 = [],
    aO3 = [],
    aIndicator = [];
var i, nLen = data.length,
    oItem;
for (i = 0; i < nLen; i++) {
    oItem = data[i];
    aNum.push(oItem.num);
    aSO2.push(oItem.so2);
    aO3.push(oItem.o3);
    aIndicator.push(oItem.city);
}
// 修改图例角标
function replaceWords(str) {
    return str.replace("SO2", "SO{sub|2}")
        .replace("O3", "O{sub|3}");
}
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params) {
            return data[params[0].dataIndex].city + '<br/>' +
                '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:9px;height:9px;background:#FFD237;"></span>' +
                'SO2:' + data[params[0].dataIndex].so2 + '<br/>' +
                '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:9px;height:9px;background:#F39927;"></span>' +
                'O3:' + data[params[0].dataIndex].o3
        }
    },
    legend: {
        show: true,
        right: 20,
        data: [{
                name: "SO2",
                icon: 'rect'
            },
            {
                name: "O3",
                icon: 'rect'
            },
        ],
        // 使用自定义方法处理图例
        formatter: function(name) {
            return replaceWords(name);
        },
        textStyle: {
            lineHeight: 12,
            verticalAlign: "middle",
            fontSize: 12,
            rich: {
                // 数字下标
                sub: {
                    verticalAlign: "bottom",
                    fontSize: 8
                },
            }
        }
    },
    grid: {
        top: '10%',
        left: '10%',
        right: '10%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#686868'
            }
        },
        axisLabel: {
            show: true,
            color: '#686868',
            fontSize: 16
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#D5D5D6'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: aIndicator,
        inverse: true, //反向坐标轴
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#686868',
            fontSize: 16
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
            name: 'SO2',
            type: 'bar',
            barWidth: 20,
            stack: '因子',
            data: aSO2,
            itemStyle: {
                color: '#FFD237',
                shadowColor: 'rgba(0, 0, 0, 0.16)',
                shadowOffsetX: 0,
                shadowOffsetY: 3,
                shadowBlur: 6
            }
        },
        {
            name: 'O3',
            type: 'bar',
            barWidth: 20,
            stack: '因子',
            data: aO3,
            itemStyle: {
                color: '#F39927',
                shadowColor: 'rgba(0, 0, 0, 0.16)',
                shadowOffsetX: 0,
                shadowOffsetY: 3,
                shadowBlur: 6
            }
        },
        {
            name: '总计',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%', // 移动使两根柱子重叠
            label: {
                show: true,
                offset: [10, 0],
                position: 'right',
                textStyle: {
                    color: '#686868',
                    fontSize: 16
                }
            },
            itemStyle: {
                normal: {
                    color: 'transparent' // 设置背景颜色为透明
                }
            },
            data: aNum
        }
    ]
}