let halfWidth = 150
let halfHeight = 50

let halfItemwidth = 85
let halfItemHeight = 20

let curveness0 = {
    normal: {
        curveness: 0
    }
}
let curveness1 = {
    normal: {
        curveness: 0.2
    }
}
let curveness2 = {
    normal: {
        curveness: -0.2
    }
}

option = {
    color: ['#096DD9', '#1890FF', '#40A9FF'],
    series: [{
        type: 'graph',
        // layout: 'force',
        force: {
            repulsion: 2000
        },
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        categories: [{
            name: '事件'
        }, {
            name: '行业'
        }, {
            name: '个股'
        }],
        data: [
            // root
            {
                name: '事件名称',
                x: halfWidth,
                y: halfHeight,
                value: 67,
                category: 0,
                symbol: 'roundRect',
                symbolSize: [234, 64]
            },
            // 行业
            {
                name: '行业A',
                x: halfWidth + halfItemwidth + 179,
                y: halfHeight + 14,
                value: 12,
                category: 1,
                symbol: 'roundRect',
                symbolSize: [170, 40]
            }, {
                name: '行业B',
                x: halfWidth + halfItemwidth + 85,
                y: halfHeight - 155,
                value: 12,
                category: 1,
                symbol: 'roundRect',
                symbolSize: [170, 40]
            }, {
                name: '行业C',
                x: halfWidth + halfItemwidth + 118,
                y: halfHeight + 183,
                value: 12,
                category: 1,
                symbol: 'roundRect',
                symbolSize: [170, 40]
            }, {
                name: '行业D',
                x: halfWidth - halfItemwidth - 165,
                y: halfHeight - 72,
                value: 12,
                category: 1,
                symbol: 'roundRect',
                symbolSize: [170, 40]
            }, {
                name: '行业E',
                x: halfWidth - halfItemwidth - 165,
                y: halfHeight + 98,
                value: 12,
                category: 1,
                symbol: 'roundRect',
                symbolSize: [170, 40]
            },
            // 个股A
            {
                name: '个股A-1',
                x: halfWidth + halfItemwidth + 387,
                y: halfHeight - 56,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            }, {
                name: '个股A-2',
                x: halfWidth + halfItemwidth + 387,
                y: halfHeight - 28,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            }, {
                name: '个股A-3',
                x: halfWidth + halfItemwidth + 387,
                y: halfHeight,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            }, {
                name: '个股A-4',
                x: halfWidth + halfItemwidth + 387,
                y: halfHeight + 28,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            }, {
                name: '个股A-5',
                x: halfWidth + halfItemwidth + 387,
                y: halfHeight + 56,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            },
            // 个股B
            {
                name: '个股B-1',
                x: halfWidth + halfItemwidth + 326,
                y: halfHeight - 225,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            }, {
                name: '个股B-2',
                x: halfWidth + halfItemwidth + 326,
                y: halfHeight - 197,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            }, {
                name: '个股B-3',
                x: halfWidth + halfItemwidth + 326,
                y: halfHeight - 169,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            }, {
                name: '个股B-4',
                x: halfWidth + halfItemwidth + 326,
                y: halfHeight - 141,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            }, {
                name: '个股B-5',
                x: halfWidth + halfItemwidth + 326,
                y: halfHeight - 113,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            },
            // 个股C
            {
                name: '个股C-1',
                x: halfWidth + halfItemwidth + 326,
                y: halfHeight + 128,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            }, {
                name: '个股C-2',
                x: halfWidth + halfItemwidth + 326,
                y: halfHeight + 156,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            }, {
                name: '个股C-3',
                x: halfWidth + halfItemwidth + 326,
                y: halfHeight + 184,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            }, {
                name: '个股C-4',
                x: halfWidth + halfItemwidth + 326,
                y: halfHeight + 212,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            }, {
                name: '个股C-5',
                x: halfWidth + halfItemwidth + 326,
                y: halfHeight + 240,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            },
            // 个股D
            {
                name: '个股D-1',
                x: halfWidth - halfItemwidth - 374,
                y: halfHeight - 128,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'left'
                    }
                }
            }, {
                name: '个股D-2',
                x: halfWidth - halfItemwidth - 374,
                y: halfHeight - 100,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'left'
                    }
                }
            }, {
                name: '个股D-3',
                x: halfWidth - halfItemwidth - 374,
                y: halfHeight - 72,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'left'
                    }
                }
            }, {
                name: '个股D-4',
                x: halfWidth - halfItemwidth - 374,
                y: halfHeight - 44,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'left'
                    }
                }
            }, {
                name: '个股D-5',
                x: halfWidth - halfItemwidth - 374,
                y: halfHeight - 16,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'left'
                    }
                }
            },
            // 个股E
            {
                name: '个股E-1',
                x: halfWidth - halfItemwidth - 374,
                y: halfHeight + 42,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'left'
                    }
                }
            }, {
                name: '个股E-2',
                x: halfWidth - halfItemwidth - 374,
                y: halfHeight + 70,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'left'
                    }
                }
            }, {
                name: '个股E-3',
                x: halfWidth - halfItemwidth - 374,
                y: halfHeight + 98,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'left'
                    }
                }
            }, {
                name: '个股E-4',
                x: halfWidth - halfItemwidth - 374,
                y: halfHeight + 126,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'left'
                    }
                }
            }, {
                name: '个股E-5',
                x: halfWidth - halfItemwidth - 374,
                y: halfHeight + 154,
                value: 12,
                category: 2,
                label: {
                    normal: {
                        position: 'left'
                    }
                }
            }
        ],
        lineStyle: curveness1,
        links: [{
            source: 0,
            target: 1,
            lineStyle: curveness2
        }, {
            source: 0,
            target: 2
        }, {
            source: 0,
            target: 3,
            lineStyle: curveness2
        }, {
            source: 0,
            target: 4,
            lineStyle: curveness2
        }, {
            source: 0,
            target: 5
        }, {
            source: 1,
            target: 6
        }, {
            source: 1,
            target: 7
        }, {
            source: 1,
            target: 8,
            lineStyle: curveness0
        }, {
            source: 1,
            target: 9,
            lineStyle: curveness2
        }, {
            source: 1,
            target: 10,
            lineStyle: curveness2
        }, {
            source: 2,
            target: 11
        }, {
            source: 2,
            target: 12
        }, {
            source: 2,
            target: 13,
            lineStyle: curveness0
        }, {
            source: 2,
            target: 14,
            lineStyle: curveness2
        }, {
            source: 2,
            target: 15,
            lineStyle: curveness2
        }, {
            source: 3,
            target: 16
        }, {
            source: 3,
            target: 17
        }, {
            source: 3,
            target: 18,
            lineStyle: curveness0
        }, {
            source: 3,
            target: 19,
            lineStyle: curveness2
        }, {
            source: 3,
            target: 20,
            lineStyle: curveness2
        }, {
            source: 4,
            target: 21,
            lineStyle: curveness2
        }, {
            source: 4,
            target: 22,
            lineStyle: curveness2
        }, {
            source: 4,
            target: 23,
            lineStyle: curveness0
        }, {
            source: 4,
            target: 24
        }, {
            source: 4,
            target: 25
        }, {
            source: 5,
            target: 26,
            lineStyle: curveness2
        }, {
            source: 5,
            target: 27,
            lineStyle: curveness2
        }, {
            source: 5,
            target: 28,
            lineStyle: curveness0
        }, {
            source: 5,
            target: 29
        }, {
            source: 5,
            target: 30
        }]
    }]
}