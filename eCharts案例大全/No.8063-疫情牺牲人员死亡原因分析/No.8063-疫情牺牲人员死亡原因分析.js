option = {
        series: {
            type: 'sankey',
            layout: 'none',
            focusNodeAdjacency: 'allEdges',
            data: [{
                name: '过劳病逝',
                itemStyle: {
                    color: '#344C6C'
                },
            }, {
                name: '车祸',
                itemStyle: {
                    color: '#567DB0'
                },
            }, {
                name: '肺炎',
                itemStyle: {
                    color: '#EC505D'
                },
            }, {
                name: '其他',
                itemStyle: {
                    color: '#83A4B6'
                },
            }, {
                name: '20-30岁',
                itemStyle: {
                    color: '#BCE6FF'
                },
            }, {
                name: '31-40岁',
                itemStyle: {
                    color: '#567DB0'
                },
            }, {
                name: '41-50岁',
                itemStyle: {
                    color: '#015C92'
                },
            }, {
                name: '51-60岁',
                itemStyle: {
                    color: '#2D82B5'
                },
            }, {
                name: '61-70岁',
                itemStyle: {
                    color: '#88CDF6'
                },
            }, {
                name: '其他年龄',
                itemStyle: {
                    color: '#BCE6FF'
                },
            }],
            links: [{
                    source: '过劳病逝',
                    target: '20-30岁',
                    value: 9,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    source: '过劳病逝',
                    target: '31-40岁',
                    value: 36,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }

                }, {
                    source: '过劳病逝',
                    target: '41-50岁',
                    value: 89,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    source: '过劳病逝',
                    target: '51-60岁',
                    value: 94,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    source: '过劳病逝',
                    target: '61-70岁',
                    value: 20,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    source: '过劳病逝',
                    target: '其他年龄',
                    value: 7,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, 
                 {
                        source: '肺炎',
                        target: '20-30岁',
                        value: 2,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '肺炎',
                        target: '31-40岁',
                        value: 2,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '肺炎',
                        target: '41-50岁',
                        value: 2,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '肺炎',
                        target: '51-60岁',
                        value: 9,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '肺炎',
                        target: '61-70岁',
                        value: 4,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '肺炎',
                        target: '其他年龄',
                        value: 6,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                {
                    source: '车祸',
                    target: '20-30岁',
                    value: 8,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.5
                    }
                }, {
                    source: '车祸',
                    target: '31-40岁',
                    value: 7,
                    lineStyle: {
                        color: 'source',
                        opacity: 0.5}
                    },
                    {
                        source: '车祸',
                        target: '41-50岁',
                        value: 10,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '车祸',
                        target: '51-60岁',
                        value: 7,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '车祸',
                        target: '61-70岁',
                        value: 1,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '车祸',
                        target: '其他年龄',
                        value: 2,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                   
                    {
                        source: '其他',
                        target: '20-30岁',
                        value: 4,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '其他',
                        target: '31-40岁',
                        value: 1,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '其他',
                        target: '41-50岁',
                        value: 2,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '其他',
                        target: '51-60岁',
                        value: 3,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '其他',
                        target: '61-70岁',
                        value: 0,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    },
                    {
                        source: '其他',
                        target: '其他年龄',
                        value: 8,
                        lineStyle: {
                            color: 'source',
                            opacity: 0.5
                        }
                    }]
            }
        };