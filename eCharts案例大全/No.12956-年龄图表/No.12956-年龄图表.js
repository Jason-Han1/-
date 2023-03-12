let ageOption = [{
        value: 335,
        name: '28周以下',
        itemStyle: {
            normal: {
                color: '#0873CC'
            }
        }
    },
    {
        value: 310,
        name: '28-31周',
        itemStyle: {
            normal: {
                color: '#00ADB8'
            }
        }
    },
    {
        value: 234,
        name: '31-34周',
        itemStyle: {
            normal: {
                color: '#009BEC'
            }
        }
    },
    {
        value: 135,
        name: '34-37周',
        itemStyle: {
            normal: {
                color: '#6D8BFF'
            }
        }
    },
    {
        value: 148,
        name: '37-40周',
        itemStyle: {
            normal: {
                color: '#BE85E2'
            }
        }
    },
    {
        value: 158,
        name: '40-43周',
        itemStyle: {
            normal: {
                color: '#40CDA8'
            }
        }
    },
    {
        value: 548,
        name: '43-46周',
        itemStyle: {
            normal: {
                color: '#499DF2'
            }
        }
    },
    {
        value: 154,
        name: '46周以上',
        itemStyle: {
            normal: {
                color: '#6CAA7F'
            }
        }
    }
];


option = {
    backgroundColor: '#ffffff',
    legend: [{
            icon: 'square',
            orient: 'vertical',
            left: 'left',
            top: 'center',
            itemGap: 28,
            padding: 15,
            data: ['28周以下', '28-31周', '31-34周', '34-37周'],
            formatter: (name) => {
                let oa = ageOption;
                let num = 0
                for (let i = 0; i < oa.length; i++) {
                    num += oa[i].value
                }
                for (let i = 0; i < oa.length / 2; i++) {
                    if (name == oa[i].name) {
                        return '{namea|' + name + '}{value|' + (oa[i].value / num * 100).toFixed(2) + '%}';
                    }
                }
            },
            textStyle: {
                padding: [0, 0, 0, -5],
                rich: {
                    namea: {
                        color: '#91989E',
                        width: 56
                    },
                    value: {
                        color: '#36383C',
                    }
                }
            }
        },
        {
            icon: 'square',
            orient: 'vertical',
            left: 'right',
            top: 'center',
            itemGap: 28,
            padding: 15,
            data: ['37-40周', '40-43周', '43-46周', '46周以上'],

            formatter: (name) => {
                let oa = ageOption;
                let num = 0
                for (let i = 0; i < oa.length; i++) {
                    num += oa[i].value
                }
                for (let i = oa.length / 2; i < oa.length; i++) {
                    if (name == oa[i].name) {
                        return '{namea|' + name + '}{value|' + (oa[i].value / num * 100).toFixed(2) + '%}';
                    }
                }
            },
            textStyle: {
                padding: [0, -126, 0, -110],
                rich: {
                    namea: {
                        color: '#91989E',
                    },
                    value: {
                        color: '#36383C',
                        width: 50
                    }
                }
            }
        }
    ],
    grid: {
        right: 100
    },
    series: [{
        type: 'pie',
        radius: ['30%', '40%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                formatter(params, ticket, callback) {
                    return '{number|' + params.percent + '}' + '{unit|%}\n{name|' + params.name + '}'
                },
                rich: {
                    number: {
                        color: '#36383C',
                        fontSize: '36',
                        padding: [8, 0]
                    },
                    unit: {
                        color: '#181A00',
                        fontSize: '14',
                        verticalAlign: 'bottom',
                        padding: [12, 0]
                    },
                    name: {
                        color: '#91989E',
                        fontSize: '14',
                        padding: [8, 0]
                    }
                }
            }
        },
        labelLine: {
            normal: {
                show: false,
                length2: 10
            }
        },
        data: ageOption,
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: '#ffffff',
            },
            emphasis: {
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0)'
            }
        }
    }]
};