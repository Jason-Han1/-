/*
双向柱状图
wx:yangtaoxf

参考以下文章和作品，感谢相关作者
https://gallery.echartsjs.com/editor.html?c=xL00juR_Rr&v=1
*/

let data = {
    female: {
        name: '变电容量',
        data: [ {
            value: 210,
            weight: 25,
            label: '110Kv'
        }, {
            value: 303,
            weight: 0,
            label: '220Kv'
        }, {
            value: 0,
            weight: 0,
            label: '500Kv'
        }]
    },
    male: {
        name: '线路长度',
        data: [{
            value: 432.45,
            weight: 172.76,
            label: '110Kv'
        }, {
            value: 332.07,
            weight: 157.05,
            label: '220Kv'
        }, {
            value: 0,
            weight: 0,
            label: '500Kv'
        }]
    }
};
let yAxisData = new Set();
let yAxisDataN = new Set();
let yAxisDataV = new Set();
let legendData = [];
_.forEach(data, (d) => {
    legendData.push(d.name);
    _.forEach(d.data, (item) => {

        if (d.name == '线路长度') {
            yAxisDataN.add(item.label);
        }
        if (d.name == '变电容量') {
            yAxisDataV.add(item.label);
        }
        // yAxisData.add(item.label);
    });
});

let top = 60;
let bottom = 60;

yAxisData = [...yAxisData];
yAxisDataN = [...yAxisDataN];
yAxisDataV = [...yAxisDataV];

option = {
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        "icon": "none",
        left: 'center',
        top: 24,
        orient: "horizontal",
        itemWidth: 0, //图例标记的图形宽度
        itemHeight: 0, //图例标记的图形高度
        y: ' center',
        borderRadius: 0,

        formatter: (name) => {
            if (name == data.female.name) {

                return '{a|' + name + '}'
            } else {
                return '{b|' + name + '}'
            }
        },
        textStyle: {
            rich: {
                a: {
                    padding: [8, 15, 8, 15],
                    align: 'center',
                    backgroundColor: "#ffffff",

                },
                b: {
                    padding: [8, 15, 8, 15],
                    align: 'center',
                    backgroundColor: "#ffffff"
                }
            }
        },
        data: legendData
    },
    grid: [{
        left: '12%',
        width: '34%',
        containLabel: true,
        bottom
    }, {
        left: '50%',
        width: '0%',
        top: top + 16
    }, {
        right: '12%',
        width: '34%',
        containLabel: true,
        bottom
    }].map(item => _.merge({
        top
    }, item)),
    xAxis: [{
        type: 'value',
        inverse: true,
        axisLabel: {
            show: true
        },
        axisLine: {
            show: true
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }, {
        gridIndex: 1,
        show: false
    }, {
        gridIndex: 2,
        type: 'value',
        axisLabel: {
            show: true
        },
        axisLine: {
            show: true
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }].map((item) => _.merge(item, {
        axisLabel: {
            color: '#fff',
            margin: 8
        },
        splitLine: {
            lineStyle: {
                color: '#fff',
                type: 'dashed'
            }
        },
    })),
    yAxis: [{

            position: 'right',
            axisLabel: {
                color: '#fff',
                show: true
            },


            axisLine: {
                show: false
            },
            type: 'category',
            inverse: false,

            axisTick: {
                show: false
            },
            data: yAxisDataN
        },
        {
            gridIndex: 1,
            position: 'center',
            type: 'category',
            axisLabel: {
                show: false

            },
            axisLine: {
                show: true
            }
        },
        {
            gridIndex: 2,
            position: 'left',
            axisLabel: {

                color: `#fff`
            },
            axisLine: {
                show: false
            },
            type: 'category',
            inverse: false,

            axisTick: {
                show: false
            },
            data: yAxisDataV
        }
    ],
    series: [{
            name: _.get(data, 'female.name'),
            label: {
show: false,
                color: '#fff',
                position: 'left'
            },
            itemStyle: {
                color: '#238bf2',
                barBorderRadius: [4, 0, 0, 4]
            },
            data: _.map(_.get(data, 'female.data'), d => d.value)
        },
        {
            name: _.get(data, 'female.name'),
            label: {
show: false,
                color: '#fff',
                position: 'left'
            },
            itemStyle: {
                color: '#a0d0ff',
                barBorderRadius: [4, 0, 0, 4]
            },
            data: _.map(_.get(data, 'female.data'), d => d.weight)
        },

        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: _.get(data, 'male.name'),
            label: {
show: false,
                color: '#fff',
                position: 'right'
            },
            itemStyle: {
                color: '#f9c807',
                barBorderRadius: [0, 4, 4, 0]
            },
            data: _.map(_.get(data, 'male.data'), d => d.value)
        },
        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: _.get(data, 'male.name'),
            label: {
show: false,
                color: '#fff',
                position: 'right'
            },
            itemStyle: {
                color: '#ffeea9',
                barBorderRadius: [0, 4, 4, 0]
            },
            data: _.map(_.get(data, 'male.data'), d => d.weight)
        }
    ].map(item => _.merge(item, {
        type: 'bar',
        barWidth: 11,
        label: {
            show: false,
            fontFamily: 'Rubik-Medium',
            fontSize: 14,
            distance: 10
        }
    }))
};

var loopIndex = 0;

setInterval(function() {
    if (loopIndex > 3) {
        loopIndex = 0;
    }
    myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: loopIndex
    });
    if (option.series[0].data[loopIndex] === "") {
        myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 2,
            dataIndex: loopIndex
        })
    }
    loopIndex++;
}, 1000);