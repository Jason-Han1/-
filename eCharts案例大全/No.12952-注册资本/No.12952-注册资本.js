option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                if (params.data.name) {
                    return params.data.name + ': ' + params.data.value
                }
            }
        },
        color: ['#3cb63f', '#fea635', '#f05b72', '#28afff'],
        legend: {
            orient: 'vertical',
            left: '20',
            bottom: '20',
            itemWidth: 15,
            itemHeight: 8,
            data: ["50万以下", "50-100万", "100-500万", "500万以上"],
            textStyle: {
                color: '#333'
            }
        },
        series: [{
            type: 'pie',
            name: 'line',
            radius: ['49', '50'],
            center: ['50%', '40%'],
            label: {
                show: false
            },
            silent: true,
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#d7d7d7',
                    }
                }
            },
            ]
        }, {
            name: 'pie1',
            type: 'pie',
            radius: ['50', '70'],
            center: ['50%', '40%'],
            data: [
                {
                    value: '967',
                    name: '500万以上',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false,
                    },
                },
                {
                    value: '2800',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
            ]
        }, {
            type: 'pie',
            name: 'line',
            silent: true,
            radius: ['69', '70'],
            center: ['50%', '40%'],
            label: {
                show: false
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#d7d7d7',
                    }
                }
            },
            ]
        }, {
            name: 'pie2',
            type: 'pie',
            radius: ['70', '90'],
            center: ['50%', '40%'],
            data: [
                {
                    value: '825',
                    name: '100-500万',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false,
                    },
                },
                {
                    value: '500',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
            ]
        }, {
            type: 'pie',
            name: 'line',
            silent: true,
            radius: ['89', '90'],
            center: ['50%', '40%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#d7d7d7',
                    }
                }
            },
            ]
        }, {
            name: 'pie3',
            type: 'pie',
            radius: ['90', '110'],
            center: ['50%', '40%'],
            data: [
                {
                    value: '1078',
                    name: '50-100万',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false,
                        emphasis: {
                            show: false
                        }
                    },
                },
                {
                    value: '800',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
            ]
        }, {
            type: 'pie',
            name: 'line',
            silent: true,
            radius: ['109', '110'],
            center: ['50%', '40%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#d7d7d7',
                    }
                }
            },
            ]
        }, {
            name: 'pie4',
            type: 'pie',
            radius: ['110', '130'],
            center: ['50%', '40%'],
            data: [
                {
                    value: '1078',
                    name: '50万以下',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false,
                        emphasis: {
                            show: false
                        }
                    },
                },
                {
                    value: '800',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }

            ]
        }, {
            type: 'pie',
            name: 'line',
            silent: true,
            radius: ['129', '130'],
            center: ['50%', '40%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#d7d7d7',
                    }
                }
            },
            ]
        }
        ]
    };