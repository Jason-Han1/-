placeHolderStyle = {
    normal: {
        label: {
            show: false,
            position: "center"
        },
        labelLine: {
            show: false
        },
        color: "#dedede",
        borderColor: "#dedede",
        borderWidth: 0
    },
    emphasis: {
        color: "#dedede",
        borderColor: "#dedede",
        borderWidth: 0
    }
};
option = {
    backgroundColor: '#fff',
    color: ['#fc7a26', '#fff', '#ffa127', '#fff', "#ffcd26"],
    legend: [{
        orient: '',
        icon: 'circle',
        left: 'right',
        top: 'center',
        data: ['不喜欢', '喜欢', '跳过']
    }],
    series: [{
        name: '值',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [199, 200],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside'
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#fc7a26",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 7,
            name: '70%'
        }, {
            value: 3,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        name: '白',
        type: 'pie',
        clockWise: false,
        radius: [180, 180],
        hoverAnimation: false,
        data: [{
            value: 1
        }]
    }, {
        name: '值',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [159, 160],
        itemStyle: {
            normal: {
                label: {
                    show: true
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#ffa127",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 6,
            name: '60%'
        }, {
            value: 4,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        name: '白',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [140, 140],
        data: [{
            value: 1
        }]
    }, {
        name: '值',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [119, 120],
        itemStyle: {
            normal: {
                label: {
                    show: true
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#ffcd26",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 4,
            name: '40%'
        }, {
            value: 6,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        type: 'pie',
        color: ['#fc7a26', '#ffa127', "#ffcd26"],
        data: [{
            value: '',
            name: '不喜欢'
        }, {
            value: '',
            name: '喜欢'
        }, {
            value: '',
            name: '跳过'
        }]
    }, {
        name: '白',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [100, 100],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 1,
            label: {
                normal: {
                    formatter: '投票人数',
                    textStyle: {
                        color: '#666666',
                        fontSize: 26
                    }
                }
            }
        }, {
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    formatter: '\n1200',
                    textStyle: {
                        color: '#666666',
                        fontSize: 26
                    }
                }
            }
        }]
    }]
};