option = {
    backgroundColor: '#ffffff',
    tooltip: {
        show: false,
    },
    toolbox: {
        show: false,
    },
    series: [{
        name: '圆形',
        type: 'pie',
        radius: ['29%', '30%'],
        center: ['50%', '50%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: '#01d1ff',
                shadowBlur: 50, // 阴影大小
                shadowColor: '#a0a0a0 ' // 阴影颜色
            }
        },
        data: [{
            value: 25,
            label: {
                normal: {
                    // formatter: '{d}%',
                    formatter: function(params) {
                        console.error(params)
                        return (100 - params.value) + '%'
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: 20,
                        fontWeight: 'normal',
                        color: '#01d1ff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: "#01d1ff",
                    borderWidth: 10,
                    shadowBlur: 10, // 阴影大小
                    shadowColor: '#a0a0a0' // 阴影颜色
                }
            }
        }, {
            value: 75,
            itemStyle: {
                normal: {
                    formatter: function(params) {
                        console.error(params)
                        return params.value + '%'
                    },
                    borderColor: "#01d1ff", // 未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    shadowBlur: 10, // 阴影大小
                    shadowColor: '#a0a0a0' // 阴影颜色
                },
            }
        }],
    }]
};