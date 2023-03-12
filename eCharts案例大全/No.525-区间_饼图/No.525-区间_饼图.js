option = {
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
            radius: ['59%', '60%'],
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
            radius: ['44%', '45%'],
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
            radius: ['29%', '30%'],
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
            silent: true,
            radius: ['14%', '15%'],
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
            zlevel: 5,
            radius: ['14%', '60%'],
            center: ['50%', '50%'],
            roseType: 'area',
            data : [
                {
                    name : '0~20',
                    value : '620',
                    itemStyle : {
                        normal : {
                            color: "rgba(255, 155, 92, 0.5)",
                            borderColor: "rgba(255, 155, 92, 1)",
                            borderWidth: 1
                        }
                    }
                },
                {
                    name : '20~30',
                    value : '580',
                    itemStyle : {
                        normal : {
                            color: "rgba(36, 180, 255, 0.5)",
                            borderColor: "rgba(36, 180, 255, 1)",
                            borderWidth: 1
                        }
                    }
                },
                {
                    name : '30~40',
                    value : '500',
                    itemStyle : {
                        normal : {
                            color: "rgba(255, 201, 92, 0.5)",
                            borderColor: "rgba(255, 201, 92, 1)",
                            borderWidth: 1
                        }
                    }
                },
                {
                    name : '40~50',
                    value : '109',
                    itemStyle : {
                        normal : {
                            color: "rgba(244, 255, 77, 0.5)",
                            borderColor: "rgba(244, 255, 77, 1)",
                            borderWidth: 1
                        }
                    }
                },
                {
                    name : '50~60',
                    value : '424',
                    itemStyle : {
                        normal : {
                            color: "rgba(115, 244, 64, 0.5)",
                            borderColor: "rgba(115, 244, 64, 1)",
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
                    length2 : 60,
                    lineStyle : {
                        color: '#88A8D6'
                    }
                }
            }
        },
        {
            type: 'gauge',
            zlevel: 5,
            splitNumber: 90, 
            radius: '69%',
            center: ['50%', '50%'],
            startAngle: 90,
    		endAngle: -269.9999,
            axisLine: {
            	show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                	width: 4,
                    color: '#132F8A',
                }
            },
            pointer: { 
                show: 0
            },
            detail: {
                show: 0
            }
    	}, 
        {
            type: 'pie',
            zlevel: 6,
            silent: true,
            radius: ['72%', '73%'],
            color: ["#041B4F", "#172F6C", "#041B4F", "#172F6C"],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                },
            },
            data: [1,1,1,1]
        },
        {
            type: 'pie',
            zlevel: 7,
            silent: true,
            radius: ['77%', '80%'],
            hoverAnimation: false,
            color: [
                {
                    type: 'linear',
                    colorStops: [{
                        offset: 0, color: 'rgba(6,15,56,0)' 
                    }, {
                        offset: 1, color: 'rgba(18,52,133,1)' 
                    }],
                    global: false 
                },
                {
                    type: 'linear',
                    colorStops: [{
                        offset: 0, color: 'rgba(6,15,56,0)' 
                    }, {
                        offset: 1, color: 'rgba(18,52,133,1)' 
                    }],
                    global: false 
                },
                {
                    type: 'linear',
                    colorStops: [{
                        offset: 0, color: 'rgba(6,15,56,0)' 
                    }, {
                        offset: 1, color: 'rgba(18,52,133,1)' 
                    }],
                    global: false 
                }
            ],
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
            data: [1,1,1]
        },
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