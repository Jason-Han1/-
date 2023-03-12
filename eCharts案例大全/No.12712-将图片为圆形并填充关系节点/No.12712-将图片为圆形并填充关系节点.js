//初始化数据，图片处理见最后面的方法
option = {
    backgroundColor: '#1a4377',
    title: {
        text: '圆形图片作为关系节点'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    color: ['#83e0ff', '#45f5ce', '#b158ff'],
    legend: {
        show: false,
        data: [{
                name: '核心节点',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '属性',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '属性值',
                textStyle: {
                    color: '#fff'
                }
            }
        ]
    },
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 1000,
            edgeLength: 50
        },
        symbolSize: 50,
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 13
                },
                formatter: "{c}"
            }
        },

        data: [],
        links: [{
                source: '李守江',
                target: '分管',
                value: '',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '李守江',
                target: '政府关系',
                value: '',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }

            },
            {
                source: '李守江',
                target: '山东滨州',
                value: '籍贯',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#eda553' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#7c785b' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '李守江',
                target: '毕业院校',
                value: '',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }

            },
            {
                source: '毕业院校',
                target: '山东大学',
                value: '',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '毕业院校',
                target: '中国人民大学',
                value: '',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '李守江',
                target: '李四',
                value: '同学',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '李守江',
                target: '王五',
                value: '下属',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '政府关系',
                target: '县委书记',
                value: '',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '王五',
                target: '信息处处长',
                value: '政府关系',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '分管',
                target: '经济',
                value: '',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '分管',
                target: '教育',
                value: '',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }

            },
            {
                source: '李四',
                target: '山东滨州',
                value: '籍贯',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '王五',
                target: '河北沧州',
                value: '籍贯',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '李四',
                target: '山东大学',
                value: '毕业院校',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#df6f30' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#915034' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
            },
            {
                source: '王五',
                target: '河北大学',
                value: '毕业院校',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#df6f30' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#915034' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
            }
        ],
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 5,
                curveness: 0
            }
        },
        categories: [{
                name: '人'
            },
            {
                name: '属性'
            },
            {
                name: '属性值'
            }
        ]
    }]
}
//定义抠图方法
function getImgData(imgSrc, radius, center = {
    x: 0,
    y: 0
}) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const contex = canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = '';
        const diameter = 2 * radius;
        img.onload = function() {
            canvas.width = diameter;
            canvas.height = diameter;
            contex.clearRect(0, 0, diameter, diameter);
            contex.save();
            contex.beginPath();
            contex.arc(radius, radius, radius, 0, 2 * Math.PI); //画出圆
            contex.clip(); //裁剪上面的圆形
            contex.drawImage(img, center.x - radius, center.y - radius, diameter, diameter, 0, 0, diameter, diameter); // 在刚刚裁剪的园上画图
            contex.restore(); // 还原状态
            resolve(canvas.toDataURL('image/png', 1))
        }
        img.src = imgSrc;
    })
}

let p1 = getImgData('https://i.loli.net/2018/12/11/5c0f26233b7c9.jpeg', 60, {
    x: 150,
    y: 80
});
let p2 = getImgData('https://i.loli.net/2018/12/11/5c0f5d927472d.jpeg', 300, {
    x: 400,
    y: 500
});
//当处理的图片数据量比较大时，可由后端来处理这个过程
Promise.all([p1, p2]).then((images) => {
    myChart.setOption({
        series: [{
            data: [{
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b} <br/>性别：男<br/>出生年月：19951114<br/>星座：处女座'
                    },
                    name: '李守江',
                    symbol: `image://${images[1]}`,
                    symbolSize: 100,

                    draggable: true,
                    category: 1,
                    itemStyle: {
                        normal: {
                            borderColor: '#04f2a7',
                            borderWidth: 6,
                            shadowBlur: 20,
                            shadowColor: '#04f2a7',
                            color: '#001c43',
                        }
                    }
                },
                {
                    name: '分管',
                    symbolSize: 70,
                    itemStyle: {
                        normal: {
                            borderColor: '#04f2a7',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#04f2a7',
                            color: '#001c43',
                        }
                    },
                    category: 1,

                },
                {
                    name: '政府关系',
                    symbolSize: 70,
                    itemStyle: {
                        normal: {
                            borderColor: '#04f2a7',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#04f2a7',
                            color: '#001c43',
                        }
                    },
                    category: 1,

                },
                {
                    name: '毕业院校',
                    symbolSize: 70,
                    itemStyle: {
                        normal: {
                            borderColor: '#04f2a7',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#04f2a7',
                            color: '#001c43',
                        }
                    },
                    category: 1,

                },
                {
                    name: '山东滨州',
                    symbolSize: 70,
                    category: 1,
                    itemStyle: {
                        normal: {
                            borderColor: '#04f2a7',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#04f2a7',
                            color: '#001c43',
                        }
                    },

                },
                {
                    name: '河北沧州',
                    symbolSize: 70,
                    category: 1,
                    itemStyle: {
                        normal: {
                            borderColor: '#04f2a7',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#04f2a7',
                            color: '#001c43',
                        }
                    },

                },
                {
                    name: '信息处处长',
                    symbolSize: 70,
                    category: 1,
                    itemStyle: {
                        normal: {
                            borderColor: '#04f2a7',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#04f2a7',
                            color: '#001c43',
                        }
                    },

                },
                {
                    name: '李四',
                    symbol: `image://${images[1]}`,
                    symbolSize: 70,
                    category: 0,
                    itemStyle: {
                        normal: {
                            borderColor: '#82dffe',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#04f2a7',
                            color: '#001c43',
                        }
                    },

                },
                {
                    name: '王五',
                    symbol: `image://${images[1]}`,
                    symbolSize: 70,
                    category: 0,
                    itemStyle: {
                        normal: {
                            borderColor: '#82dffe',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#04f2a7',
                            color: '#001c43',
                        }
                    },

                },
                {
                    name: '山东大学',
                    category: 0,
                    itemStyle: {
                        normal: {
                            borderColor: '#82dffe',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#04f2a7',
                            color: '#001c43',
                        }
                    },

                },
                {
                    name: '中国人民大学',
                    category: 2,
                    itemStyle: {
                        normal: {
                            borderColor: '#b457ff',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#b457ff',
                            color: '#001c43'
                        }
                    },

                },
                {
                    name: '河北大学',
                    category: 2,
                    itemStyle: {
                        normal: {
                            borderColor: '#b457ff',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#b457ff',
                            color: '#001c43'
                        }
                    },

                },
                {
                    name: '县委书记',
                    category: 0,
                    itemStyle: {
                        normal: {
                            borderColor: '#82dffe',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#04f2a7',
                            color: '#001c43',
                        }
                    },

                },
                {
                    name: '经济',
                    category: 0,
                    itemStyle: {
                        normal: {
                            borderColor: '#82dffe',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#04f2a7',
                            color: '#001c43',
                        }
                    },

                },
                {
                    name: '教育',
                    category: 2,
                    itemStyle: {
                        normal: {
                            borderColor: '#b457ff',
                            borderWidth: 4,
                            shadowBlur: 10,
                            shadowColor: '#b457ff',
                            color: '#001c43'
                        }
                    },

                }
            ]
        }]
    })
})