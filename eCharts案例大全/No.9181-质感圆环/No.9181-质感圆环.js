option = {
    title: {
        text: '80%',
        x: 'center',
        y: '41.5%',
        zlevel: 3, //层级
        textStyle: {
            fontWeight: '700',
            color: '#303030',
            fontSize: '60'
        }
    },
    legend: {
        show: true,
        itemGap: 12,
        bottom: 0,
        itemWidth: 14,
        data: ['得分占比', '未得分占比']
    },

    series: [
        // 内圆
        {
            type: 'pie',
            zlevel: 2, //层级
            radius: ['0', '40%'],
            center: ['50%', '45%'],
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,.3)',
                    color: '#fff',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            },
            hoverAnimation: false,
            data: [100],
        },
        // 占比环
        {
            type: 'pie',
            clockWise: true,
            // silent: true,
            radius: ['40%', '62%'],
            center: ['50%', '45%'],
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
            data: [{
                value: 80,
                name: '得分占比',
                itemStyle: {
                    normal: {
                        color: {
                            colorStops: [{
                                offset: 0,
                                color: '#2fdb9a' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#1cbab4' // 0% 处的颜色
                            }]
                        }
                    }
                }
            }, {
                name: '未得分占比',
                value: 20,
                itemStyle: {
                    normal: {
                        color: '#e3e3e3'
                    }, // 默认颜色
                    emphasis: {
                        color: '#e3e3e3'
                    } // hover 颜色
                }
            }]
        },
        // 外环
        {
            type: 'pie',
            radius: ['62%', '70%'],
            center: ['50%', '45%'],
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,.2)',
                    color: '#fff',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            },
            hoverAnimation: false,
            data: [100],
        },
    ]
};