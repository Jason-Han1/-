var testData = [{
        name: "South Korea",
        value: 40,
        itemStyle: {
            color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                offset: 0,
                color: '#23203B'
            }, {
                offset: 1,
                color: '#43396D'
            }], false),
        },
        label: {
            color: '#9065FD'
        }
    },

    {
        name: '',
        value: 20,
        children: [{
                name: "Russia",
                value: 6,
                itemStyle: {
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                            offset: 0,
                            color: '#463428' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#584133' // 100% 处的颜色
                        }
                    ], false)

                },
                label: {
                    color: '#D19A71'
                }
            },
            {
                name: "England",
                value: 5,
                itemStyle: {
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                            offset: 0,
                            color: '#502630' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#72353D' // 100% 处的颜色
                        }
                    ], false)
                },
                label: {
                    color: '#D06168'
                }
            },
            {
                name: "Farench",
                value: 4,
                itemStyle: {

                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                            offset: 0,
                            color: '#2C3E42' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#4E6170' // 100% 处的颜色
                        }
                    ], false)
                },
                label: {
                    color: '#7DA7BD'
                }
            },
            {
                name: "Russia",
                value: 3,
                itemStyle: {
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                            offset: 0,
                            color: '#4A450E' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#625A12' // 100% 处的颜色
                        }
                    ], false)
                },
                label: {
                    color: '#ADA55C'
                }
            },
            {
                name: "R",
                value: 1,
                itemStyle: {
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                            offset: 0,
                            color: '#294421' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#3F6B30' // 100% 处的颜色
                        }
                    ], false)
                },
                label: {
                    color: '#77B05F'
                }
            },
            {
                name: "O",
                value: 1,
                itemStyle: {
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                            offset: 0,
                            color: '#380C30' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#430D3E' // 100% 处的颜色
                        }
                    ], false)
                },
                label: {
                    color: '#A85599'
                }
            }
        ],
    },
    {
        name: "Japan",
        value: 20,
        itemStyle: {
            color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                    offset: 0,
                    color: '#051B32' // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: '#05508A' // 100% 处的颜色
                }
            ], false)
        },
        label: {
            color: '#0092FF'
        }
    },
    {
        name: 'China',
        value: 45,
        itemStyle: {
            color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                offset: 0,
                color: '#0C1622'
            }, {
                offset: 1,
                color: '#06647D'
            }], false),
        },
        label: {
            color: '#00E3FE'
        }
    }
]

function colorMappingChange(value) {
    var levelOption = getLevelOption(value);
    chart.setOption({
        series: [{
            levels: levelOption
        }]
    });
}

var formatUtil = echarts.format;

function getLevelOption() {
    return [{
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    // gapWidth: 5//间距
                }
            }
        },
        {
            itemStyle: {
                normal: {
                    // gapWidth: 1
                }
            }
        },
        {
            colorSaturation: [0.35, 0.5],
            itemStyle: {
                normal: {
                    // gapWidth: 1,
                    borderColorSaturation: 0.6
                }
            }
        }
    ];
}

myChart.setOption(option = {
    backgroundColor: '#000',
    tooltip: {
        show: false,
        formatter: function(info) {
            var value = info.value;
            var treePathInfo = info.treePathInfo;
            var treePath = [];

            for (var i = 1; i < treePathInfo.length; i++) {
                treePath.push(treePathInfo[i].name);
            }

            return [
                '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
                '面积: ' + formatUtil.addCommas(value) + ' m²',
            ].join('');
        }
    },

    series: [{
        // name:'平面图',
        type: 'treemap',
        visibleMin: 300,
        label: {
            show: true,
            formatter: '{b}',
            fontSize: 30
        },
        itemStyle: {
            normal: {
                // borderColor: '#fff'
            }
        },
        levels: getLevelOption(),
        data: testData
    }]
});