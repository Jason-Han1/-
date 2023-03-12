/**
 * 双向柱状图
 * 排名
 * 对比
 * 
 * 参考一下作品，感谢相关作者
 * https://gallery.echartsjs.com/editor.html?c=xL00juR_Rr
 */

let data = {
    etc: {
        name: 'PC端',
        data: [{
            value: '22',
            label: `PC端`
        }, {
            value: 23,
            label: 'PC端'
        }, {
            value: 4,
            label: 'PC端'
        }, {
            value: 56,
            label: 'PC端'
        }, {
            value: 32,
            label: 'PC端'
        }, {
            value: 5,
            label: 'PC端'
        }, {
            value: 9,
            label: 'PC端'
        }, {
            value: 48,
            label: 'PC端'
        }, {
            value: 48,
            label: 'PC端'
        }, {
            value: 48,
            label: 'PC端'
        }, {
            value: 19,
            label: 'PC端'
        }, {
            value: 23,
            label: 'PC端'
        }, {
            value: 43,
            label: 'PC端'
        }, {
            value: 34,
            label: 'PC端'
        }, {
            value: 53,
            label: 'PC端'
        }, {
            value: 12,
            label: 'PC端'
        }, {
            value: 34,
            label: 'PC端'
        }, {
            value: 34,
            label: 'PC端'
        }, {
            value: 34,
            label: 'PC端'
        }]
    },
    notEtc: {
        name: 'app',
        data: [{
            value: 5,
            label: 'app'
        }, {
            value: 19,
            label: 'app'
        }, {
            value: 23,
            label: 'app'
        }, {
            value: 43,
            label: 'app'
        }, {
            value: 34,
            label: 'app'
        }, {
            value: 53,
            label: 'app'
        }, {
            value: 12,
            label: 'app'
        }, {
            value: 34,
            label: 'app'
        }, {
            value: 34,
            label: 'app'
        }, {
            value: 34,
            label: 'app'
        }, {
            value: 19,
            label: 'app'
        }, {
            value: 23,
            label: 'app'
        }, {
            value: 43,
            label: 'app'
        }, {
            value: 34,
            label: 'app'
        }, {
            value: 53,
            label: 'app'
        }, {
            value: 12,
            label: 'app'
        }, {
            value: 34,
            label: 'app'
        }, {
            value: 34,
            label: 'app站'
        }, {
            value: 34,
            label: 'app'
        }]
    },
};

let legendData = [data.etc.name, data.notEtc.name];
let yAxisDataN = data.etc.data.map(e => e.label);
let yAxisDataV = data.notEtc.data.map(e => e.label);
let yAxisLabelN = data.etc.data.map(e => e.value).sort((a, b) => a - b);
let yAxisLabelV = data.notEtc.data.map(e => e.value).sort((a, b) => a - b);
let rankData = data.etc.data.map((item, index) => index)

let top = 60;
let bottom = 10;
var labelSetting = {
    label: "16",
    yLabel: "16"
}
var option = {
    title:{
        text:"",
        x:'center',
        textStyle:{
            color:"#fff",
            fontSize:22
        }
    },
    backgroundColor: "#00000000",
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        left: 'center',
        top: 30,
        itemWidth: 0, //图例标记的图形宽度
        itemHeight: 0, //图例标记的图形高度
        y: 'center',
        borderRadius: 0,
        inactiveColor: '#FFF',
        formatter: (name) => {
            if (name == data.etc.name) {

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
                    backgroundColor: "#298bf6",
                    color: '#fff',

                },
                b: {
                    padding: [8, 15, 8, 15],
                    align: 'center',
                    backgroundColor: "#f9c807",
                    color: '#fff',
                }
            }
        },
        data: legendData
    },
    grid: [{
        right: '60%',
        containLabel: false,
        bottom,
        top,
    }, {
        left: '50%',
        width: 0,
        top: top,
        bottom: bottom
    }, {
        left: '60%',
        containLabel: false,
        bottom,
        top
    }],
    xAxis: [{
        type: 'value',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    }, {
        gridIndex: 1,
        show: false
    }, {
        gridIndex: 2,
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    }],
    yAxis: [{
            position: 'right',
            axisLabel: {
                color: '#fff',
                fontSize: labelSetting.yLabel
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
            inverse: true,
            axisLabel: {
                show: true,
                margin: 0,
                color: "#fff",
                fontSize: labelSetting.yLabel
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: []
        },
        {
            gridIndex: 2,
            position: 'left',
            axisLabel: {
                color: `#fff`,
                fontSize: labelSetting.yLabel
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
            name: legendData[0],
            type: 'bar',
            barWidth: '50%',
            label: {
                show: true,
                fontFamily: 'Rubik-Medium',
                fontSize: labelSetting.label,
                distance: 10,
                color: '#fff',
                position: 'left',
                formatter: function(params) {
                    return params.value + '%'
                }
            },
            itemStyle: {
                color: '#298bf6',
            },
            data: yAxisLabelN
        },
        {
            type: 'bar',
            barWidth: '50%',
            label: {
                show: true,
                fontFamily: 'Rubik-Medium',
                fontSize: labelSetting.label,
                distance: 10,
                color: '#fff',
                position: 'right',
                formatter: function(params) {
                    return params.value + '%'
                }
            },
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: legendData[1],
            itemStyle: {
                color: '#f9c807',
            },
            data: yAxisLabelV
        },
    ]
};