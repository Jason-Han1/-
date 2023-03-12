/*
    @songcxa
    @2017-11-15
*/
placeHolderStyle = {
    normal: {
         color: "rgba(0,0,0,0)",
        borderWidth: 0
    },
    
};
option = {
    backgroundColor: '#fff',
    color: ['#2bdeff', '#1897fe', '#9f51ff', '#ff32e4', "#fd3744"],
    tooltip: {
        trigger: 'item',
        formatter: "{a}:<br/>{b}(起)",

    },
      legend: {
            type: 'scroll',
            orient: 'vertical',
            right: '3%',
            top: '5%',
            itemWidth:5,itemHeight:5,
            itemGap:5,
            textStyle:{
                color:'#999'
            },
            data: ['强制购物', '消费欺诈', '旅行社违规', '景点服务','酒店配套服务']
          },
    series: [{
        name: '强制购物',
        type: 'pie',
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: ['80%', '80%'],
        itemStyle: {
            normal: {
                 label: {
                    show: false,
                    textStyle: {
                        fontSize: 24
                    }
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#2bdeff",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 6,
            name: '44'
        }, {
            value: 4,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        name: '消费欺诈',
        type: 'pie',
        clockWise: false,
        radius: ['70%', '70%'],
        hoverAnimation: false,
         itemStyle: {
            normal: {
                label: {
                    show: false,
                    textStyle: {
                        fontSize: 24
                    }
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#1897fe",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 3,
            name: '27%'
        }, {
            value: 7,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        name: '旅行社违规',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
         radius: ['60%', '60%'],
        itemStyle: {
            normal: {
                 label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#9f51ff",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 3,
            name: '26%'
        }, {
            value: 7,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        name: '景点服务',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
         radius: ['50%', '50%'],
        itemStyle: {
            normal: {
                 label: {
                    show: false,
                    textStyle: {
                        fontSize: 24
                    }
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#ff32e4",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 3,
            name: '13%'
        }, {
            value: 7,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        name: '酒店配套服务',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
         radius: ['40%', '40%'],
        itemStyle: {
            normal: {
                label: {
                    show: false,
                    textStyle: {
                        fontSize: 24
                    }
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#fd3744",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 2,
            name: '3%'
        }, {
            value: 8,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }]
};