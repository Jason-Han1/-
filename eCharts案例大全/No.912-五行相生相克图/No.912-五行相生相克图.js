var wuXin = new Array("木", "火", "土", "金", "水");
var color = ['#78a355', '#d93a49', '#8e3e1f', '#dea32c', '#50b7c1'];

function roundDatas(num) {
    var datas = [];
    for (var i = 0; i < num; i++) {
        var x = Math.cos(72 * i * Math.PI / 180);
        var y = Math.sin(72 * i * Math.PI / 180);
        datas.push({
            name: wuXin[i],
            x: y,
            y: -x,
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
        });
    }
    return datas;
}


function linkDatas(num) {
    var ldatas = [];
    for (var i = 0; i < num; i++) {
        ldatas.push({
            label: {
                normal: {
                    show: true,
                    formatter: '相生'
                }
            },
            lineStyle: {
                normal: {
                    color: '#94d6da',
                    width: 2,
                    curveness: 0.3,
                    opacity: 0.8,
                    type: 'dashed',
                }
            },
            source: i,
            target: i + 1
        });

        ldatas.push({
            lineStyle: {
                normal: {
                    color: '#FF5151',
                    width: 2,
                    curveness: 0,
                    opacity: 0.8
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: '相克'
                }
            },
            source: i,
            target: i + 2
        });

    }
    //////for end///////

    ldatas.push({
        label: {
            normal: {
                show: true,
                formatter: '相生'
            }
        },
        lineStyle: {
            normal: {
                color: '#94d6da',
                type: 'dashed',
                width: 2,
                curveness: 0.3,
                opacity: 0.8
            }
        },
        source: (i - 1),
        target: 0
    });

    ldatas.push({
        lineStyle: {
            normal: {
                color: '#FF5151',
                width: 2,
                curveness: 0,
                opacity: 0.8
            }
        },
        label: {
            normal: {
                show: true,
                formatter: '相克'
            }
        },
        source: 3,
        target: 0
    });
    ldatas.push({
        lineStyle: {
            normal: {
                color: '#FF5151',
                width: 2,
                curveness: 0,
                opacity: 0.8
            }
        },
        label: {
            normal: {
                show: true,
                formatter: '相克'
            }
        },
        source: 4,
        target: 1
    });

    return ldatas;
}
/////linkDatas end//////


option = {
    backgroundColor: '#2E2E2E',
    title: {
        text: '五行相生相克图',
        subtext: '',
        left: 50,
        top: 10,
        backgroundColor: '#FFFAFA',
        borderRadius: 8,
        textStyle: {
            color: '#102b6a',
        },
        subtextStyle: {
            color: '#102b6a',
        }
    },

    color: ['#000000', '#FFFFFF'],
    series: [

        {
            name: '五行',
            type: 'graph',
            //roam: true,//缩放移动
            //draggable: true,
            focusNodeAdjacency: true,
            edgeSymbol: ['', 'arrow'],
            edgeSymbolSize: [3, 15],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 15
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: '{b}',
                    fontSize: 46
                }
            },


            symbol: 'circle',
            symbolSize: 60,
            top: '60',
            left: '200',
            width: '400',
            height: '400',
            data: roundDatas(5),
            links: linkDatas(5)
        },

        ////////阴阳太极图//////////
        {
            name: '大圆',
            type: 'pie',
            radius: '52',
            center: ['400', '268'],
            data: [{
                value: 50,
                name: '阴'
            }, {
                value: 50,
                name: '阳'
            }, ],
            roseType: 'radius',
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false,
                }
            }
        }, {
            name: '黑色圆',
            type: 'pie',
            zlevel: 2,
            radius: '26',
            center: ['400', '294'],
            data: [{
                value: 50,
                name: ''
            }, ],
            roseType: 'radius',
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false,
                }
            }
        },

        {
            name: '白色圆',
            type: 'pie',
            zlevel: 2,
            radius: '26',
            center: ['400', '242'],
            data: [{
                value: 50,
                name: ''
            }, ],
            roseType: 'radius',
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false,
                }
            }

        },

        {
            name: '黑色圆小',
            type: 'pie',
            zlevel: 3,
            radius: '12',
            center: ['400', '242'],
            data: [{
                value: 50,
                name: ''
            }, ],
            roseType: 'radius',
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false,
                }
            }
        },

        {
            name: '白色圆小',
            type: 'pie',
            zlevel: 3,
            radius: '12',
            center: ['400', '294'],
            data: [{
                value: 50,
                name: ''
            }, ],
            roseType: 'radius',
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false,
                }
            },

        },


    ]
};