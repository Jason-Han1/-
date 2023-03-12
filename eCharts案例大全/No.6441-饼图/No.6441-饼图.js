var value = 80
var titleText = "成套:" + value+"个/7万㎡"
option = {
    backgroundColor: '#010d13',
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    title: [{
        text: "成套",
        x: '60%',
        y: '46%',
        textStyle: {
            color: '#fff',
            fontSize: 40,
            fontWeight: '400'
        }
    }, {
        text: titleText,
        top: '40%',
        left: "60%",
        textStyle: {
            color: '#73d2f1',
            fontSize: 40,
            fontWeight: '400'
        }
    }],
    series: [{
            name: '',
            type: 'pie',
            startAngle: 180,
            radius: [0, 95],
            center: ['50%', '50%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: value,
                name: 'A',
                itemStyle: {
                    normal: {
                        color: "red"
                    }
                }
            }, {
                value: 100 - value,
                name: 'B',
                itemStyle: {
                    normal: {
                        color: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 0
                    }
                }
            }]
        },
        {
            name: '',
            type: 'pie',
            startAngle: 271,
            radius: [115, 125],
            center: ['50%', '50%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 2,
                    name: 'A',
                    itemStyle: {
                        normal: {
                            color: "#73d2f1"
                        }
                    }
                },
                {
                    value: 5,
                    name: 'B',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0
                        }
                    }
                }, {
                    value: 85,
                    name: 'A',
                    itemStyle: {
                        normal: {
                            color: "#73d2f1"
                        }
                    }
                }, {
                    value: 5,
                    name: 'B',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0
                        }
                    }
                },



            ]
        }
    ]
}