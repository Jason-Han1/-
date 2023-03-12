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
    color: ['#DB7093', '#fff', '#FF8C00', '#fff', "#48D1CC"],
    legend: [{
        orient: '',
        icon: 'circle',
        left: 'right',
        top: 'center',
        data: ['优秀率', '得分率', '及格率']
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
                    textStyle: {
                        fontSize: 24
                    },
                    position: 'outside'
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 8,
                shadowBlur: 40,
                borderColor: "#DB7093",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        //及格率数据修改
        data: [{
            value: 7.4,
            name: '及格率：74%'
        }, {
            value: 2.6,
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
                    show: true,
                    textStyle: {
                        fontSize: 24
                    },
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 8,
                shadowBlur: 40,
                borderColor: "#FF8C00",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        //得分率数据修改
        data: [{
            value: 7.1,
            name: '得分率：71%'
        }, {
            value: 2.9,
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
                    show: true,
                    textStyle: {
                        fontSize: 24
                    },
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 8,
                shadowBlur: 40,
                borderColor: "#48D1CC",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        //优秀率数据修改
        data: [{
            value: 3.6,
            name: '优秀率：36%',
            
        }, {
            value: 6.4,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        type: 'pie',
        color: ['#48D1CC', '#FF8C00', "	#DB7093"],
        data: [{
            value: '',
            name: '优秀率'
        }, {
            value: '',
            name: '得分率'
        }, {
            value: '',
            name: '及格率'
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
                    formatter: '生物学业水平',
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
        }]
    }]
};