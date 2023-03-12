option = {
        series: {
            type: 'sankey',
            layout: 'none',
            focusNodeAdjacency: 'allEdges',
            data: [{
                name: '艺术长廊',
                itemStyle: {
                    color: '#C8493B'
                },
            }, {
                name: '多媒体交互',
                itemStyle: {
                    color: '#47597A'
                },
            }, {
                name: '室内氧吧',
                itemStyle: {
                    color: '#C8493B'
                },
            }, {
                name: '拉斯维加斯',
                itemStyle: {
                    color: '#5D4A65'
                },
            }, {
                name: '多功能展区',
                itemStyle: {
                    color: '#C8493B'
                },    
            }, {
                name: '生命之树',
                itemStyle: {
                    color: '#95B334'
                }, 
            }, {
                name: '小剧场',
                itemStyle: {
                    color: '#C8493B'
                }, 
            }, {
                name: '室内动物园',
                itemStyle: {
                    color: '#F1AF23'
                }, 
            }, {
                name: '情感IP',
                itemStyle: {
                    color: '#47597A'
                }, 
            }, {
                name: '淘宝街',
                itemStyle: {
                    color: '#5D4A65'
                },
            }, {
                name: '网红直播台',
                itemStyle: {
                    color: '#5D4A65'
                },
            }, {
                name: '美食',
                itemStyle: {
                    color: '#F1AF23'
                },
            }, {
                name: '有机采摘',
                itemStyle: {
                    color: '#F1AF23'
                },
            }, {
                name: '互动道具',
                itemStyle: {
                    color: '#47597A'
                },    
            }, {
                name: '公益性展区',
                itemStyle: {
                    color: '#C8493B'
                },
                
            }, {
                name: 'IP主题',
                itemStyle: {
                    color: '#95B334'
                },
            }, {
                name: '创客商业区',
                itemStyle: {
                    color: '#5D4A65'
                },
            }, {
                name: '家庭亲子',
                itemStyle: {
                    color: '#F1AF23'
                },
            }, {
                name: '（新）00后',
                itemStyle: {
                    color: '#47597A'
                },
            }],
            links: [{
                    source: '艺术长廊',
                    target: '公益性展区',
                    value: 1,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    source: '多媒体交互',
                    target: '（新）00后',
                    value: 1,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }

                }, {
                    source: '室内氧吧',
                    target: '公益性展区',
                    value: 1,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    source: '拉斯维加斯',
                    target: '创客商业区',
                    value: 1,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    source: '多功能展区',
                    target: '公益性展区',
                    value: 1,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    source: '生命之树',
                    target: 'IP主题',
                    value: 1,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, 
                 {
                        source: '小剧场',
                        target: '公益性展区',
                        value: 1,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                },
                    {
                        source: '室内动物园',
                        target: '家庭亲子',
                        value: 1,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '情感IP',
                        target: '（新）00后',
                        value: 1,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '淘宝街',
                        target: '创客商业区',
                        value: 1,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '网红直播台',
                        target: '创客商业区',
                        value: 1,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '美食',
                        target: '家庭亲子',
                        value: 1,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                {
                    source: '有机采摘',
                    target: '家庭亲子',
                    value: 1,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.5
                    }
                }, {
                    source: '互动道具',
                    target: '（新）00后',
                    value: 1,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.5}
                    }]
            }
        };