option = {
    series: [{
        type: 'treemap',
        leafDepth: 1,
        data: [{
            name: '西区',
            value: 62,
           label: {
                fontSize: 16,
                color: '#fff',
                show: true,
                position: [5, 5],
                formatter: function(params) {
                    var arr = [
                        '{association|' + params.data.name + '}',
                        '{peoNum|' + params.data.value + '}' + '家',
                    ];
                    return arr.join('\n\n');
                },
                rich: {
                    association: {
                        fontSize: 16,
                        color: '#fff',
                    },
                    peoNum: {
                        fontSize: 30,
                        color: '#fff',
                        fontFamily: 'liquidCrystal',
                    },
                }
            },
            children: [{
                name: '四川',
                label: {
                    fontSize: 16,
                    color: '#fff',
                    show: true,
                    position: [5, 5],
                    formatter: function(params) {
                        var arr = [
                            '{association|' + params.data.name + '}',
                            '{peoNum|' + params.data.value + '}' + '家',
                        ];
                        return arr.join('\n\n');
                    },
                    rich: {
                        association: {
                            fontSize: 16,
                            color: '#fff',
                        },
                        peoNum: {
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'liquidCrystal',
                        },
                    }
                },
                value: 24
            }, {
                name: '甘肃',
                label: {
                    fontSize: 14,
                    color: '#fff',
                    show: true,
                    position: [5, 5],
                    formatter: function(params) {
                        var arr = [
                            '{association|' + params.data.name + '}',
                            '{peoNum|' + params.data.value + '}' + '家',
                        ];
                        return arr.join('\n\n');
                    },
                    rich: {
                        association: {
                            fontSize: 16,
                            color: '#fff',
                        },
                        peoNum: {
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'liquidCrystal',
                        },
                    }
                },
                value: 26
            }, {
                name: '云南',
                label: {
                    fontSize: 15,
                    color: '#fff',
                    show: true,
                    position: [5, 5],
                    formatter: function(params) {
                        var arr = [
                            '{association|' + params.data.name + '}',
                            '{peoNum|' + params.data.value + '}' + '家',
                        ];
                        return arr.join('\n\n');
                    },
                    rich: {
                        association: {
                            fontSize: 16,
                            color: '#fff',
                        },
                        peoNum: {
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'liquidCrystal',
                        },
                    }
                },
                value: 16
            }, {
                name: '贵州',
                label: {
                    fontSize: 19,
                    color: '#fff',
                    show: true,
                    position: [5, 5],
                    formatter: function(params) {
                        var arr = [
                            '{association|' + params.data.name + '}',
                            '{peoNum|' + params.data.value + '}' + '家',
                        ];
                        return arr.join('\n\n');
                    },
                    rich: {
                        association: {
                            fontSize: 16,
                            color: '#fff',
                        },
                        peoNum: {
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'liquidCrystal',
                        },
                    }
                },
                value: 16
            }]
        }, {
            name: '东区',
            label: {
                fontSize: 16,
                color: '#fff',
                show: true,
                position: [5, 5],
                formatter: function(params) {
                    var arr = [
                        '{association|' + params.data.name + '}',
                        '{peoNum|' + params.data.value + '}' + '家',
                    ];
                    return arr.join('\n\n');
                },
                rich: {
                    association: {
                        fontSize: 16,
                        color: '#fff',
                    },
                    peoNum: {
                        fontSize: 30,
                        color: '#fff',
                        fontFamily: 'liquidCrystal',
                    },
                }
            },
            value: 123,
            children: [{
                name: '上海',
                label: {
                    fontSize: 16,
                    color: '#fff',
                    show: true,
                    position: [5, 5],
                    formatter: function(params) {
                        var arr = [
                            '{association|' + params.data.name + '}',
                            '{peoNum|' + params.data.value + '}' + '家',
                        ];
                        return arr.join('\n\n');
                    },
                    rich: {
                        association: {
                            fontSize: 16,
                            color: '#fff',
                        },
                        peoNum: {
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'liquidCrystal',
                        },
                    }
                },
                value: 103,
                children: [{
                        name: '宝山',
                        label: {
                            fontSize: 16,
                            color: '#fff',
                            show: true,
                            position: [5, 5],
                            formatter: function(params) {
                                var arr = [
                                    '{association|' + params.data.name + '}',
                                    '{peoNum|' + params.data.value + '}' + '家',
                                ];
                                return arr.join('\n\n');
                            },
                            rich: {
                                association: {
                                    fontSize: 16,
                                    color: '#fff',
                                },
                                peoNum: {
                                    fontSize: 30,
                                    color: '#fff',
                                    fontFamily: 'liquidCrystal',
                                },
                            }
                        },
                        value: 20
                    },
                    {
                        name: '徐汇',
                        label: {
                            fontSize: 16,
                            color: '#fff',
                            show: true,
                            position: [5, 5],
                            formatter: function(params) {
                                var arr = [
                                    '{association|' + params.data.name + '}',
                                    '{peoNum|' + params.data.value + '}' + '家',
                                ];
                                return arr.join('\n\n');
                            },
                            rich: {
                                association: {
                                    fontSize: 16,
                                    color: '#fff',
                                },
                                peoNum: {
                                    fontSize: 30,
                                    color: '#fff',
                                    fontFamily: 'liquidCrystal',
                                },
                            }
                        },
                        value: 20
                    },
                    {
                        name: '静安',
                        label: {
                            fontSize: 16,
                            color: '#fff',
                            show: true,
                            position: [5, 5],
                            formatter: function(params) {
                                var arr = [
                                    '{association|' + params.data.name + '}',
                                    '{peoNum|' + params.data.value + '}' + '家',
                                ];
                                return arr.join('\n\n');
                            },
                            rich: {
                                association: {
                                    fontSize: 16,
                                    color: '#fff',
                                },
                                peoNum: {
                                    fontSize: 30,
                                    color: '#fff',
                                    fontFamily: 'liquidCrystal',
                                },
                            }
                        },
                        value: 10
                    },
                    {
                        name: '黄埔',
                        label: {
                            fontSize: 16,
                            color: '#fff',
                            show: true,
                            position: [5, 5],
                            formatter: function(params) {
                                var arr = [
                                    '{association|' + params.data.name + '}',
                                    '{peoNum|' + params.data.value + '}' + '家',
                                ];
                                return arr.join('\n\n');
                            },
                            rich: {
                                association: {
                                    fontSize: 16,
                                    color: '#fff',
                                },
                                peoNum: {
                                    fontSize: 30,
                                    color: '#fff',
                                    fontFamily: 'liquidCrystal',
                                },
                            }
                        },
                        value: 24
                    },
                    {
                        name: '浦东',
                        label: {
                            fontSize: 16,
                            color: '#fff',
                            show: true,
                            position: [5, 5],
                            formatter: function(params) {
                                var arr = [
                                    '{association|' + params.data.name + '}',
                                    '{peoNum|' + params.data.value + '}' + '家',
                                ];
                                return arr.join('\n\n');
                            },
                            rich: {
                                association: {
                                    fontSize: 16,
                                    color: '#fff',
                                },
                                peoNum: {
                                    fontSize: 30,
                                    color: '#fff',
                                    fontFamily: 'liquidCrystal',
                                },
                            }
                        },
                        value: 29
                    }
                ]
            }, {
                name: '江苏',
                label: {
                    fontSize: 16,
                    color: '#fff',
                    show: true,
                    position: [5, 5],
                    formatter: function(params) {
                        var arr = [
                            '{association|' + params.data.name + '}',
                            '{peoNum|' + params.data.value + '}' + '家',
                        ];
                        return arr.join('\n\n');
                    },
                    rich: {
                        association: {
                            fontSize: 16,
                            color: '#fff',
                        },
                        peoNum: {
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'liquidCrystal',
                        },
                    }
                },
                value: 20
            }]
        }, {
            name: '南区',
            label: {
                fontSize: 16,
                color: '#fff',
                show: true,
                position: [5, 5],
                formatter: function(params) {
                    var arr = [
                        '{association|' + params.data.name + '}',
                        '{peoNum|' + params.data.value + '}' + '家',
                    ];
                    return arr.join('\n\n');
                },
                rich: {
                    association: {
                        fontSize: 16,
                        color: '#fff',
                    },
                    peoNum: {
                        fontSize: 30,
                        color: '#fff',
                        fontFamily: 'liquidCrystal',
                    },
                }
            },
            value: 157,
            children: [{
                name: '广州',
                label: {
                    fontSize: 16,
                    color: '#fff',
                    show: true,
                    position: [5, 5],
                    formatter: function(params) {
                        var arr = [
                            '{association|' + params.data.name + '}',
                            '{peoNum|' + params.data.value + '}' + '家',
                        ];
                        return arr.join('\n\n');
                    },
                    rich: {
                        association: {
                            fontSize: 16,
                            color: '#fff',
                        },
                        peoNum: {
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'liquidCrystal',
                        },
                    }
                },
                value: 94,
                children: [{
                        name: '广东',
                        label: {
                            fontSize: 16,
                            color: '#fff',
                            show: true,
                            position: [5, 5],
                            formatter: function(params) {
                                var arr = [
                                    '{association|' + params.data.name + '}',
                                    '{peoNum|' + params.data.value + '}' + '家',
                                ];
                                return arr.join('\n\n');
                            },
                            rich: {
                                association: {
                                    fontSize: 16,
                                    color: '#fff',
                                },
                                peoNum: {
                                    fontSize: 30,
                                    color: '#fff',
                                    fontFamily: 'liquidCrystal',
                                },
                            }
                        },
                        value: 20,
                    },
                    {
                        name: '深圳',
                        label: {
                            fontSize: 16,
                            color: '#fff',
                            show: true,
                            position: [5, 5],
                            formatter: function(params) {
                                var arr = [
                                    '{association|' + params.data.name + '}',
                                    '{peoNum|' + params.data.value + '}' + '家',
                                ];
                                return arr.join('\n\n');
                            },
                            rich: {
                                association: {
                                    fontSize: 16,
                                    color: '#fff',
                                },
                                peoNum: {
                                    fontSize: 30,
                                    color: '#fff',
                                    fontFamily: 'liquidCrystal',
                                },
                            }
                        },
                        value: 40
                    },
                    {
                        name: '中山',
                        label: {
                            fontSize: 16,
                            color: '#fff',
                            show: true,
                            position: [5, 5],
                            formatter: function(params) {
                                var arr = [
                                    '{association|' + params.data.name + '}',
                                    '{peoNum|' + params.data.value + '}' + '家',
                                ];
                                return arr.join('\n\n');
                            },
                            rich: {
                                association: {
                                    fontSize: 16,
                                    color: '#fff',
                                },
                                peoNum: {
                                    fontSize: 30,
                                    color: '#fff',
                                    fontFamily: 'liquidCrystal',
                                },
                            }
                        },
                        value: 10
                    },
                    {
                        name: '东莞',
                        label: {
                            fontSize: 16,
                            color: '#fff',
                            show: true,
                            position: [5, 5],
                            formatter: function(params) {
                                var arr = [
                                    '{association|' + params.data.name + '}',
                                    '{peoNum|' + params.data.value + '}' + '家',
                                ];
                                return arr.join('\n\n');
                            },
                            rich: {
                                association: {
                                    fontSize: 16,
                                    color: '#fff',
                                },
                                peoNum: {
                                    fontSize: 30,
                                    color: '#fff',
                                    fontFamily: 'liquidCrystal',
                                },
                            }
                        },
                        value: 24
                    }
                ]
            }, {
                name: '湖南',
                label: {
                    fontSize: 16,
                    color: '#fff',
                    show: true,
                    position: [5, 5],
                    formatter: function(params) {
                        var arr = [
                            '{association|' + params.data.name + '}',
                            '{peoNum|' + params.data.value + '}' + '家',
                        ];
                        return arr.join('\n\n');
                    },
                    rich: {
                        association: {
                            fontSize: 16,
                            color: '#fff',
                        },
                        peoNum: {
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'liquidCrystal',
                        },
                    }
                },
                value: 20
            }, {
                name: '湖北',
                label: {
                    fontSize: 16,
                    color: '#fff',
                    show: true,
                    position: [5, 5],
                    formatter: function(params) {
                        var arr = [
                            '{association|' + params.data.name + '}',
                            '{peoNum|' + params.data.value + '}' + '家',
                        ];
                        return arr.join('\n\n');
                    },
                    rich: {
                        association: {
                            fontSize: 16,
                            color: '#fff',
                        },
                        peoNum: {
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'liquidCrystal',
                        },
                    }
                },
                value: 22
            }, {
                name: '广西',
                label: {
                    fontSize: 16,
                    color: '#fff',
                    show: true,
                    position: [5, 5],
                    formatter: function(params) {
                        var arr = [
                            '{association|' + params.data.name + '}',
                            '{peoNum|' + params.data.value + '}' + '家',
                        ];
                        return arr.join('\n\n');
                    },
                    rich: {
                        association: {
                            fontSize: 16,
                            color: '#fff',
                        },
                        peoNum: {
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'liquidCrystal',
                        },
                    }
                },
                value: 21
            }]
        }, {
            name: '北区',
            label: {
                fontSize: 16,
                color: '#fff',
                show: true,
                position: [5, 5],
                formatter: function(params) {
                    var arr = [
                        '{association|' + params.data.name + '}',
                        '{peoNum|' + params.data.value + '}' + '家',
                    ];
                    return arr.join('\n\n');
                },
                rich: {
                    association: {
                        fontSize: 16,
                        color: '#fff',
                    },
                    peoNum: {
                        fontSize: 30,
                        color: '#fff',
                        fontFamily: 'liquidCrystal',
                    },
                }
            },
            value: 148,
            children: [{
                name: '北京',
                label: {
                    fontSize: 16,
                    color: '#fff',
                    show: true,
                    position: [5, 5],
                    formatter: function(params) {
                        var arr = [
                            '{association|' + params.data.name + '}',
                            '{peoNum|' + params.data.value + '}' + '家',
                        ];
                        return arr.join('\n\n');
                    },
                    rich: {
                        association: {
                            fontSize: 16,
                            color: '#fff',
                        },
                        peoNum: {
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'liquidCrystal',
                        },
                    }
                },
                value: 74,
                children: [{
                        name: '东城',
                        label: {
                            fontSize: 16,
                            color: '#fff',
                            show: true,
                            position: [5, 5],
                            formatter: function(params) {
                                var arr = [
                                    '{association|' + params.data.name + '}',
                                    '{peoNum|' + params.data.value + '}' + '家',
                                ];
                                return arr.join('\n\n');
                            },
                            rich: {
                                association: {
                                    fontSize: 16,
                                    color: '#fff',
                                },
                                peoNum: {
                                    fontSize: 30,
                                    color: '#fff',
                                    fontFamily: 'liquidCrystal',
                                },
                            }
                        },
                        value: 20
                    },
                    {
                        name: '西城',
                        label: {
                            fontSize: 16,
                            color: '#fff',
                            show: true,
                            position: [5, 5],
                            formatter: function(params) {
                                var arr = [
                                    '{association|' + params.data.name + '}',
                                    '{peoNum|' + params.data.value + '}' + '家',
                                ];
                                return arr.join('\n\n');
                            },
                            rich: {
                                association: {
                                    fontSize: 16,
                                    color: '#fff',
                                },
                                peoNum: {
                                    fontSize: 30,
                                    color: '#fff',
                                    fontFamily: 'liquidCrystal',
                                },
                            }
                        },
                        value: 20
                    },
                    {
                        name: '石景山',
                        label: {
                            fontSize: 16,
                            color: '#fff',
                            show: true,
                            position: [5, 5],
                            formatter: function(params) {
                                var arr = [
                                    '{association|' + params.data.name + '}',
                                    '{peoNum|' + params.data.value + '}' + '家',
                                ];
                                return arr.join('\n\n');
                            },
                            rich: {
                                association: {
                                    fontSize: 16,
                                    color: '#fff',
                                },
                                peoNum: {
                                    fontSize: 30,
                                    color: '#fff',
                                    fontFamily: 'liquidCrystal',
                                },
                            }
                        },
                        value: 10
                    },
                    {
                        name: '朝阳',
                        label: {
                            fontSize: 16,
                            color: '#fff',
                            show: true,
                            position: [5, 5],
                            formatter: function(params) {
                                var arr = [
                                    '{association|' + params.data.name + '}',
                                    '{peoNum|' + params.data.value + '}' + '家',
                                ];
                                return arr.join('\n\n');
                            },
                            rich: {
                                association: {
                                    fontSize: 16,
                                    color: '#fff',
                                },
                                peoNum: {
                                    fontSize: 30,
                                    color: '#fff',
                                    fontFamily: 'liquidCrystal',
                                },
                            }
                        },
                        value: 24
                    }
                ]
            }, {
                name: '湖北',
                label: {
                    fontSize: 16,
                    color: '#fff',
                    show: true,
                    position: [5, 5],
                    formatter: function(params) {
                        var arr = [
                            '{association|' + params.data.name + '}',
                            '{peoNum|' + params.data.value + '}' + '家',
                        ];
                        return arr.join('\n\n');
                    },
                    rich: {
                        association: {
                            fontSize: 16,
                            color: '#fff',
                        },
                        peoNum: {
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'liquidCrystal',
                        },
                    }
                },
                value: 23
            }, {
                name: '天津',
                label: {
                    fontSize: 16,
                    color: '#fff',
                    show: true,
                    position: [5, 5],
                    formatter: function(params) {
                        var arr = [
                            '{association|' + params.data.name + '}',
                            '{peoNum|' + params.data.value + '}' + '家',
                        ];
                        return arr.join('\n\n');
                    },
                    rich: {
                        association: {
                            fontSize: 16,
                            color: '#fff',
                        },
                        peoNum: {
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'liquidCrystal',
                        },
                    }
                },
                value: 24
            }, {
                name: '黑龙江',
                label: {
                    fontSize: 16,
                    color: '#fff',
                    show: true,
                    position: [5, 5],
                    formatter: function(params) {
                        var arr = [
                            '{association|' + params.data.name + '}',
                            '{peoNum|' + params.data.value + '}' + '家',
                        ];
                        return arr.join('\n\n');
                    },
                    rich: {
                        association: {
                            fontSize: 16,
                            color: '#fff',
                        },
                        peoNum: {
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'liquidCrystal',
                        },
                    }
                },
                value: 27
            }]
        }]
    }]
};