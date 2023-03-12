option = {
    title: {
        text: '偏低(0.5倍以下)',
        left : 'center',
        top : 'bottom',
        textStyle: {
            color: '#88A8D6'
        }
    },
    backgroundColor : '#040D36',
    tooltip : {
        trigger : 'item',
        formatter : "{b}:{c} ({d}%)"
    },
    series: [
        {
            type: 'pie',
            zlevel: 1,
            silent: true,
            radius: ['83%', '84%'],
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie()
        },
        {
            type: 'pie',
            zlevel: 2,
            silent: true,
            radius: ['62%', '63%'],
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie()
        },
        {
            type: 'pie',
            zlevel: 3,
            silent: true,
            radius: ['41%', '42%'],
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie()
        }, 
        {
            type: 'pie',
            zlevel: 4,
            radius: ['20%', '84%'],
            center: ['50%', '50%'],
            roseType: 'area',
            data : [
                {
                    name : '医院2',
                    value : '871',
                    itemStyle : {
                        normal : {
                            color: "rgba(36, 180, 255, 0.5)",
                            borderColor: "rgba(36, 180, 255, 1)",
                            borderWidth: 1
                        }
                    }
                },
                {
                    name : '医院1',
                    value : '752',
                    itemStyle : {
                        normal : {
                            color: "rgba(68, 139, 255, 0.5)",
                            borderColor: "rgba(44, 124, 255, 1)",
                            borderWidth: 1
                        }
                    }
                },
                {
                    name : '医院4',
                    value : '109',
                    itemStyle : {
                        normal : {
                            color: "rgba(255, 201, 92, 0.5)",
                            borderColor: "rgba(255, 201, 92, 1)",
                            borderWidth: 1
                        }
                    }
                },
                {
                    name : '医院3',
                    value : '424',
                    itemStyle : {
                        normal : {
                            color: "rgba(102, 219, 98, 0.5)",
                            borderColor: "rgba(38, 255, 157, 1)",
                            borderWidth: 1
                        }
                    }
                }
            ],
            label: {
                normal: {
                    color: '#88A8D6'
                },
            },
            labelLine: {
                normal: {
                    length2 : 20,
                    lineStyle : {
                        color: '#88A8D6'
                    }
                }
            }
        }
    ]
};

function _pie() {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "rgb(3,56,92)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }

    }
    return dataArr

}