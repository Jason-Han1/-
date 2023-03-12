var bgColor = '#10286B';
var shadowColor = '#374b86';
var value = 80;
option = {
    backgroundColor: bgColor,
    title: {
        text: `${value}`,
        // subtext: '成功订单数',
        left: 'center',
        top: 'center', //top待调整
        textStyle: {
            color: '#fff',
            fontSize: 35,
            fontFamily: 'DINAlternate-Bold'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 15,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -4 //主副标题间距
    },
    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['70px', '75px'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: {
                        colorStops: [{
                            offset: 0,
                            color: '#7940FE' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#2A69EC' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#7940FE' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#2A69EC' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}