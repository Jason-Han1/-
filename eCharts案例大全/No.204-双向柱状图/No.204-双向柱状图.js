/*
双向柱状图
wx:yangtaoxf

参考以下文章和作品，感谢相关作者
https://gallery.echartsjs.com/editor.html?c=xL00juR_Rr&v=1
*/

let data = {
    female: {
        name: '女性',
        data: [{
            value: 22,
            weight: 30,
            label: '小于1岁'
        }, {
            value: 23,
            weight: 30,
            label: '1 ～ 9 岁'
        }, {
            value: 4,
            weight: 30,
            label: '10 ～ 19 岁'
        }, {
            value: 56,
            weight: 30,
            label: '20 ～ 29 岁'
        }, {
            value: 32,
            weight: 30,
            label: '30 ～ 39 岁'
        }, {
            value: 5,
            weight: 30,
            label: '40 ～ 49 岁'
        }, {
            value: 9,
            weight: 30,
            label: '50 ～ 59 岁'
        }, {
            value: 48,
            weight: 30,
            label: '大于60岁'
        }]
    },
    male: {
        name: '男性',
        data: [{
            value: 5,
            weight: 30,
            label: '小于1岁'
        }, {
            value: 19,
            weight: 30,
            label: '1 ～ 9 岁'
        }, {
            value: 23,
            weight: 30,
            label: '10 ～ 19 岁'
        }, {
            value: 43,
            weight: 30,
            label: '20 ～ 29 岁'
        }, {
            value: 34,
            weight: 30,
            label: '30 ～ 39 岁'
        }, {
            value: 53,
            weight: 30,
            label: '40 ～ 49 岁'
        }, {
            value: 12,
            weight: 30,
            label: '50 ～ 59 岁'
        }, {
            value: 34,
            weight: 30,
            label: '大于60岁'
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

        if (d.name == '男性') {
            yAxisDataN.add(item.label);
        }
        if (d.name == '女性') {
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
                    backgroundColor: "#238bf2",

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

            position: 'right',
            axisLabel: {
                color: '#262C41',
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

                color: `#262C41`
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
                color: '#767676',
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
                color: '#767676',
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
                color: '#767676',
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
                color: '#9c9c9c',
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
            show: true,
            fontFamily: 'Rubik-Medium',
            fontSize: 14,
            distance: 10
        }
    }))
};