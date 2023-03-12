option = {
    title: {
        text: '重要人员当日同乘信息',
        left: '35%'
    },
     tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: {
        
       type: 'sankey',
        links: data.links,
        focusNodeAdjacency: 'allEdges',
        itemStyle: {
            borderWidth: 1,
            borderColor: '#aaa'
        },
        lineStyle: {
            color: 'source',
            curveness: 0.5
        },
       
       
        data: [{
                name: '火车-G123',
                itemStyle: {
                    color: '#00eaff'
                },
            },
            {
                name: '火车-T542',
                itemStyle: {
                    color: '#00eaff'
                },
            },
            {
                name: '火车-G599',
                itemStyle: {
                    color: '#00eaff'
                },
            },
            {
                name: '火车-T2358',
                itemStyle: {
                    color: '#00eaff'
                },
            },
            {
                name: '飞机-DL588',
                itemStyle: {
                    color: '#567DB0'
                },
            },
            {
                name: '飞机-CZ3323',
                itemStyle: {
                    color: '#567DB0'
                },
            },
            {
                name: '飞机-HU8878',
                itemStyle: {
                    color: '#567DB0'
                },
            },
            {
                name: '客车-SJ2093',
                itemStyle: {
                    color: '#EC505D'
                },
            }, {
                name: '客车-ZZ0092',
                itemStyle: {
                    color: '#EC505D'
                },
            },
            {
                name: '客船-GZ557',
                itemStyle: {
                    color: '#fc9700'
                },
            }, {
                name: '客船-GZ779',
                itemStyle: {
                    color: '#fc9700'
                },
            }, {
                name: '体征异常上报者',
                itemStyle: {
                    color: '#BCE6FF'
                },
            }, {
                name: '确诊人员',
                itemStyle: {
                    color: '#567DB0'
                },
            }, {
                name: '密切接触者',
                itemStyle: {
                    color: '#015C92'
                },
            }, {
                name: '高危地区返回人员',
                itemStyle: {
                    color: '#2D82B5'
                },
            }, {
                name: '高频率活动者',
                itemStyle: {
                    color: '#88CDF6'
                },
            }
        ],
        links: [{
                source: '火车-G123',
                target: '体征异常上报者',
                value: 5,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            }, {
                source: '火车-G123',
                target: '密切接触者',
                value: 4,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }

            }, {
                source: '火车-G123',
                target: '确诊人员',
                value: 1,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            }, {
                source: '火车-T542',
                target: '体征异常上报者',
                value: 5,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            }, {
                source: '火车-T542',
                target: '高危地区返回人员',
                value: 7,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '火车-G599',
                target: '确诊人员',
                value: 2,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '火车-G599',
                target: '高危地区返回人员',
                value: 26,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            }, {
                source: '火车-T2358',
                target: '体征异常上报者',
                value: 7,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '火车-T2358',
                target: '密切接触者',
                value: 12,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '火车-T2358',
                target: '确诊人员',
                value: 2,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '火车-T2358',
                target: '高频率活动者',
                value: 17,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '火车-T2358',
                target: '高危地区返回人员',
                value: 5,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '飞机-DL588',
                target: '确诊人员',
                value: 2,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '飞机-DL588',
                target: '密切接触者',
                value: 12,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '飞机-DL588',
                target: '高危地区返回人员',
                value: 3,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '飞机-DL588',
                target: '体征异常上报者',
                value: 6,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '飞机-CZ3323',
                target: '确诊人员',
                value: 3,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '飞机-CZ3323',
                target: '密切接触者',
                value: 25,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '飞机-CZ3323',
                target: '高危地区返回人员',
                value: 1,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '飞机-CZ3323',
                target: '体征异常上报者',
                value: 36,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '飞机-HU8878',
                target: '确诊人员',
                value: 3,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '飞机-HU8878',
                target: '密切接触者',
                value: 27,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '飞机-HU8878',
                target: '高危地区返回人员',
                value: 2,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '飞机-HU8878',
                target: '体征异常上报者',
                value: 8,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '客车-SJ2093',
                target: '高危地区返回人员',
                value: 15,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '客车-SJ2093',
                target: '体征异常上报者',
                value: 5,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '客车-SJ2093',
                target: '高频率活动者',
                value: 21,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '客车-ZZ0092',
                target: '高危地区返回人员',
                value: 22,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '客车-ZZ0092',
                target: '体征异常上报者',
                value: 2,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '客车-ZZ0092',
                target: '高频率活动者',
                value: 35,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '客船-GZ557',
                target: '高危地区返回人员',
                value: 22,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '客船-GZ557',
                target: '体征异常上报者',
                value: 1,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '客船-GZ557',
                target: '高频率活动者',
                value: 25,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '客船-GZ779',
                target: '高危地区返回人员',
                value: 33,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            }, {
                source: '客船-GZ779',
                target: '体征异常上报者',
                value: 2,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '客船-GZ779',
                target: '高频率活动者',
                value: 34,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            }, {
                source: '客船-GZ779',
                target: '确诊人员',
                value: 1,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
            {
                source: '客船-GZ779',
                target: '密切接触者',
                value: 45,
                lineStyle: {
                    color: 'source',
                    opacity: 0.6
                }
            },
        ]
    }
};