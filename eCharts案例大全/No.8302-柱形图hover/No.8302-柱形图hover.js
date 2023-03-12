var data = [{
    "name": "一月",
    "value": 800
}, {
    "name": "二月",
    "value": 1200
}, {
    "name": "三月",
    "value": 1192
}, {
    "name": "四月",
    "value": 758
}, {
    "name": "五月",
    "value": 325
}, {
    "name": "六月",
    "value": 888
}, {
    "name": "七月",
    "value": 1111
}];

const numToThreeRank = num => {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ",");
};


var xData = [],
    yData = [],
    max = 0;
data.map(function(a, b) {
    xData.push(a.name);
    yData.push(a.value);
    max = max > a.value ? max : a.value;
});

let len = data.length || 0;
let bgData = Array(len).fill(Math.ceil(max * 1.2))
let emptyData = Array(len).fill(Math.ceil(max * 1.1))

option = {
    backgroundColor: "#fff",
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function(param) {
            let item = param.filter(v => {
                return v.seriesName === 'value'
            })
            let html = `
            <div style="position:relative;background: #FEF7F7;border: 1px solid #FEDADC;font-size: 14px;color: #FD5360;border-radius: 4px 4px 4px 0;padding: 4px 10px">${numToThreeRank(item[0].value)}
                <span style="position:absolute;bottom: -6px;left: -1px;width:0;height:0;border: 6px solid transparent; border-left: 6px solid #FEDADC;"></span>
                <span style="position:absolute;bottom: -4px;left: 0;width:0;height:0;border: 6px solid transparent; border-left: 6px solid #FEF7F7;"></span>
            </div>
            `;
            return html
        },
        position: function(point, params, dom, rect, size) {
            // 固定在顶部
            return [point[0], 10];
        },
        extraCssText: 'background: transparent'
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '5%',
        top: 60,
        height: '85%',
        containLabel: true,
        z: 22
    },
    xAxis: [{
        type: 'category',
        data: xData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#666',
            fontSize: 14
        }
    }, {
        type: 'category',
        data: xData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        max: function(value) {
            return value.max;
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    series: [{
            name: 'value',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3D9FFF'
                            },
                            {
                                offset: 1,
                                color: '#41D7F3'
                            }
                        ]
                    )
                }
            },
            data: yData,
            zlevel: 12

        },
        {
            name: 'empty',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                    color: 'rgba(225,225,225,0.6)'
                }
            },
            emphasis: {
                itemStyle: {
                    color: 'rgba(225,225,225,0.6)',
                    barBorderRadius: [30, 30, 0, 0]
                }
            },
            data: emptyData,
            zlevel: 11

        },
        {
            name: 'background',
            type: 'bar',
            barWidth: 53,
            xAxisIndex: 1,
            barGap: '-100%',
            data: bgData,
            itemStyle: {
                normal: {
                    color: 'rgba(216, 216, 216, 0.18)',
                    borderWidth: 1,
                    borderColor: 'rgba(151, 151, 151, 0.18)'
                }
            },
            emphasis: {
                itemStyle: {
                    color: '#fff',
                    shadowColor: 'rgba(225,225,225,0.9)',
                    shadowBlur: 6,
                }
            },
            zlevel: 10
        },

    ]
};