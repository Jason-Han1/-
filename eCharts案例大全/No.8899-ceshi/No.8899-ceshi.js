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
    backgroundColor: '#02050B',
    color: ['#fc7a26', '#fff', '#ffa127', '#fff', "#ffcd26"],
    series: [
        {
        name: '值',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [199, 200],
        itemStyle: {
            normal: {
                label: {
                    show: false,
                    position: 'outside'
                },
                labelLine: {
                    show: false,
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
        name: '值',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [119, 120],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false,
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
                show: false,
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