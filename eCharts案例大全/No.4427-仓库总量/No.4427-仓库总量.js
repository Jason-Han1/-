option = {
    backgroundColor: 'transparent',
    title: [{
        text: '仓库总量',
        top: '45%',
        textAlign: "center",
        left: "50%",
        textStyle: {
            color: '#fff',
            fontSize: 14,
        }
    }, {
        text: '2512个',
        top: '50%',
        textAlign: "center",
        left: "50%",
        textStyle: {
            color: '#fff',
            fontSize: 14,
        }
    }],
    tooltip: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: [{
            name: '',
            type: 'pie',
            radius: [0, 50],
            center: ['50%', '50%'],
            hoverAnimation: false,
            startAngle: 10,
            data: [100],
            itemStyle: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(47, 89, 123,0.5)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(47, 89, 123,0.8)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            label: {
                show:false,
            },
            labelLine: {
                show: true,
                length: 50,
                length2: 20,
                smooth: 0.8,
                lineStyle: {
                    color: 'rgb(13, 196, 220)',
                    width: 2,
                }
            }

        },
        {
            name: '',
            type: 'pie',
            radius: [50, 60],
            startAngle: 350,
            center: ['50%', '50%'],
            hoverAnimation: false,
            data: [100],
            itemStyle: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(54, 164, 204,0.5)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(54, 164, 204,0.8)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            label: {
                show:false,
            },
        },
        {
            name: '',
            type: 'pie',
            radius: [60, 70],
            center: ['50%', '50%'],
            startAngle: 170,
            hoverAnimation: false,
            data: [100],
            itemStyle: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(89, 139, 173,0.5)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(89, 139, 173,0.8)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            label: {
                show:false,
            },
        },
        {
            name: '',
            type: 'pie',
            radius: [70, 85],
            center: ['50%', '50%'],
            hoverAnimation: false,
            startAngle: 190,
            data: [100],
            itemStyle: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(173, 206, 230,0.7)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(173, 206, 230,1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            label: {
                show:false,
            },
        }
    ]
}