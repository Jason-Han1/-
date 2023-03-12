var dataAll = [
    [
        [0.16, 1800.04, 'xx站'],
        [0.1, 1700.04, 'ff站'],
        [0.05, 1090.04, 'gg站'],
        [0.18, 3008.04, '00站'],
        [0.25, 800.04, '555站'],
        [0.06, 600.04, 'hbvgv站'],
        [0.09, 2007.04, 'kkkkk站'],
        [0.09, 2007.04, '66662'],
    ]
];

var customData = [{
        name: '搞销售&低损耗区域',
        value: [0.02, 3400, 60, 70],
        itemStyle: {
            color: 'rgba(17, 114, 201, 1)'
        }
    },
    {
        name: '高销售&高损耗区域',
        value: [0.252, 3400, 120, 60],
        itemStyle: {
            color: 'rgba(232, 206, 34, 1)'
        }
    },
    {
        name: '低销售&低损耗区域',
        value: [0.012, 800, 100, 60],
        itemStyle: {
            color: 'rgba(232, 206, 34, 1)'
        }
    },
    {
        name: '低销售&高损耗区域',
        value: [0.233, 800, 100, 60],
        itemStyle: {
            color: 'rgba(243, 46, 5, 1)'
        }
    },
]

function getMinAndMax(data) {
    var xAxis = data.map(item => item[0]);
    var yAxis = data.map(item => item[1]);
    var xAxisMin = Math.min(...xAxis);
    var xAxisMax = Math.max(...xAxis);

    var yAxisMin = Math.min(...yAxis);
    var yAxisMax = Math.max(...yAxis);

    return {
        yAxisMin: yAxisMin > 0 ? Math.ceil(yAxisMin) : -1 * Math.ceil(-1 * yAxisMin),
        yAxisMax: yAxisMax > 0 ? Math.ceil(yAxisMax) : -1 * Math.ceil(-1 * yAxisMax),
        xAxisMin: xAxisMin > 0 ? Math.ceil(xAxisMin * 100) / 100 : -1 * Math.ceil(-1 * xAxisMin * 100) / 100,
        xAxisMax: xAxisMax > 0 ? Math.ceil(xAxisMax * 100) / 100 : -1 * Math.ceil(-1 * xAxisMax * 100) / 100
    }
}
var xy = getMinAndMax(dataAll[0]);
option = {
    title: {
        text: '销售额&商品损耗率分布-华北',
        left: 'center',
        top: 0
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params, index) {
            var content = [];
            params.forEach(item => {
                const str = `${item.marker}${item.data[2]}<br> 销售额：${item.data[1]}
        <br> 商品损耗率：${item.data[0] * 100}%`;
                content.push(str)
            })
            return content.join('<br>')
        }
    },
    xAxis: [{
        type: 'value',
        axisLabel: {
            formatter: function(value, index) {
                return value * 100 + '%'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
        name: '男性',
        type: 'scatter',
        data: dataAll[0],
        label: {
            show: true,
            position: 'top',
            color: '#000',
            formatter: function(param) {
                return param.data[2];
            },
        },
        labelLine: {
            show: true
        },

        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(17, 114, 201, 0.2)',
            shadowOffsetY: 5,
            color: 'rgba(17, 114, 201, 1)'
        },
        markLine: {
            silent: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    color: 'red',
                    type: 'solid',
                    width: 2
                }
            },
            label: {
                color: '#000'
            },
            data: [{
                    yAxis: 1500,
                    name: '商品损耗率',
                    label: {
                        distance: 10,
                        formatter: function(params) {
                            return params.name;
                        }
                    }

                },
                {
                    xAxis: 0.1,
                    name: '销售额',

                    label: {
                        distance: 10,
                        formatter: function(params) {
                            return params.name;
                        }
                    }
                }
            ]
        }
    }, {
        type: 'custom',
        renderItem: renderItem,
        z: 1,
        itemStyle: {
            color: '#dae9f5',
            barBorderRadius: 5
        },
        silent: true,
        legendHoverLink: false,
        tooltip: {
            show: false
        },
        label: {
            show: true,
            position: 'inside',
            //align:"left",
            color: '#000',
            formatter: function paramss(params) {
                if (params.data.value) {
                    return params.data.name.replace(/(.{4})/g, function(i) {
                        return i + '\n';

                    })
                    //return params.data.name;
                }
                return ''
            }
        },
        data: customData
    }]
};

function renderItem(params, api) {
    var yAvlue = api.value(1);
    console.log(api.value(1), 'api.value(1)')
    var start = api.coord([api.value(0), yAvlue]);
    var style = api.style();
    var width = api.value(2) || 60;
    var height = api.value(3) || 70;
    return {
        type: 'rect',
        shape: {
            x: start[0],
            y: start[1],
            width: width,
            height: height,
            r: 5
        },
        style: style
    };
}