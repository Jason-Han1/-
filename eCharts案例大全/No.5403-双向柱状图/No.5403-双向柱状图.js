/*
双向柱状图
wx:yangtaoxf

参考以下文章和作品，感谢相关作者
https://gallery.echartsjs.com/editor.html?c=xL00juR_Rr&v=1
*/

let data = {
    left: {
        name: 'left',
        data: [{
            "溢出": 22,
            "拥堵": 30,
            "周期异常": 10,
            "绿信比异常": 8,
            date: '0'
        }, {
            "溢出": 22,
            "拥堵": 30,
            "周期异常": 10,
            "绿信比异常": 8,
            date: '6:00'
        }, {
            "溢出": 22,
            "拥堵": 30,
            "周期异常": 10,
            "绿信比异常": 8,
            date: '12:00'
        }, {
            "溢出": 22,
            "拥堵": 30,
            "周期异常": 10,
            "绿信比异常": 8,
            date: '18:00'
        }, {
            "溢出": 22,
            "拥堵": 30,
            "周期异常": 10,
            "绿信比异常": 8,
            date: '24:00'
        }]
    },
    right: {
        name: 'right',
        data: [{
            "溢出": 22,
            "拥堵": 30,
            "周期异常": 10,
            "绿信比异常": 8,
            date: '0'
        }, {
            "溢出": 22,
            "拥堵": 30,
            "周期异常": 10,
            "绿信比异常": 8,
            date: '6:00'
        }, {
            "溢出": 22,
            "拥堵": 30,
            "周期异常": 10,
            "绿信比异常": 8,
            date: '12:00'
        }, {
            "溢出": 22,
            "拥堵": 30,
            "周期异常": 10,
            "绿信比异常": 8,
            date: '18:00'
        }, {
            "溢出": 22,
            "拥堵": 30,
            "周期异常": 10,
            "绿信比异常": 8,
            date: '24:00'
        }]
    }
};

let legendData = new Set();
legendData.add("溢出");
legendData.add("拥堵");
legendData.add("周期异常");
legendData.add("绿信比异常");


let yAxisDataN = new Set();
let yAxisDataV = new Set();

_.forEach(data, (d) => {

    _.forEach(d.data, (item) => {

        if (d.name == 'left') {
            yAxisDataN.add(item.date);
        }
        if (d.name == 'right') {
            yAxisDataV.add(item.date);
        }
        // yAxisData.add(item.label);
    });
});

let top = 60;
let bottom = 60;

legendData = [...legendData];
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
        icon: "circle",
        left: 'center',
        bottom: 24,

        formatter: (name) => {


            return '{a|' + name + '}'

        },
        textStyle: {
            rich: {
                a: {
                    padding: [8, 15, 8, 15],
                    align: 'center',
                    //  backgroundColor: "#238bf2",

                },
                b: {
                    padding: [8, 15, 8, 15],
                    align: 'center',
                    backgroundColor: "#f9c807"
                }
            }
        },
        data: legendData
    },
    grid: [{
        left: '10%',
        width: '40%',
        containLabel: true,
        bottom
    }, {
        left: '50%',
        width: '0%',
        top: top + 16
    }, {
        right: '10%',
        width: '40%',
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
            show: true
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
            show: true
        }
    }].map((item) => _.merge(item, {
        max: 50,
        axisLabel: {
            color: '#949AA8',
            margin: 8
        },
        splitLine: {
            lineStyle: {
                color: '#E0E0E0',
                type: 'dashed'
            }
        },
    })),
    yAxis: [{
            name: '时间', //坐标轴名称
            nameLocation: 'center',
            nameGap: 55,

            position: 'left',
            axisLabel: {
                color: '#6a82ab',
                show: true,
                textStyle: {
                    color: '#6a82ab'
                }
            },
            axisLine: {
                show: true,
                onZero: false,
                lineStyle: {
                    color: '#6a82ab'
                },

            },


            type: 'category',
            inverse: false,

            axisTick: {
                show: false
            },

            nameRotate: 90,

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
                show: false
            }
        },
        {
            gridIndex: 2,
            position: 'right',
            axisLabel: {
                show: false,

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
            name: '溢出',
            label: {
                color: '#767676',
                position: 'left'
            },
            itemStyle: {
                color: '#63bccf',
                barBorderRadius: [4, 0, 0, 4]
            },
            data: _.map(_.get(data, 'left.data'), d => d.溢出)
        },
        {
            name: '拥堵',
            label: {
                color: '#767676',
                position: 'left'
            },
            itemStyle: {
                color: '#81dd91',
                barBorderRadius: [4, 0, 0, 4]
            },
            data: _.map(_.get(data, 'left.data'), d => d.拥堵)
        },
        {
            name: '周期异常',
            label: {
                color: '#767676',
                position: 'left'
            },
            itemStyle: {
                color: '#d65f73',
                barBorderRadius: [4, 0, 0, 4]
            },
            data: _.map(_.get(data, 'left.data'), d => d.周期异常)
        },
        {
            name: '绿信比异常',
            label: {
                color: '#767676',
                position: 'left'
            },
            itemStyle: {
                color: '#6b93c9',
                barBorderRadius: [4, 0, 0, 4]
            },
            data: _.map(_.get(data, 'left.data'), d => d.绿信比异常)
        },
        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: '溢出',
            label: {
                color: '#767676',
                position: 'right'
            },
            itemStyle: {
                color: '#bcba7d',
                barBorderRadius: [0, 4, 4, 0]
            },
            data: _.map(_.get(data, 'right.data'), d => d.溢出)
        },
        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: '拥堵',
            label: {
                color: '#9c9c9c',
                position: 'right'
            },
            itemStyle: {
                color: '#3dbdc8',
                barBorderRadius: [0, 4, 4, 0]
            },
            data: _.map(_.get(data, 'right.data'), d => d.拥堵)
        },
        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: '周期异常',
            label: {
                color: '#9c9c9c',
                position: 'right'
            },
            itemStyle: {
                color: '#d8ac26',
                barBorderRadius: [0, 4, 4, 0]
            },
            data: _.map(_.get(data, 'right.data'), d => d.周期异常)
        },
        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: '绿信比异常',
            label: {
                color: '#767676',
                position: 'right'
            },
            itemStyle: {
                color: '#4894ea',
                barBorderRadius: [4, 0, 0, 4]
            },
            data: _.map(_.get(data, 'right.data'), d => d.绿信比异常)
        },
    ].map(item => _.merge(item, {
        type: 'bar',
        barWidth: 11,
        label: {
            show: true,
            fontFamily: 'Rubik-Medium',
            fontSize: 14,
            distance: 10
        }
    }))
};