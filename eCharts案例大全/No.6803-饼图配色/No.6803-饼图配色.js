let option = {
    backgroundColor: '#333',
    series: [{
        type: 'pie',
        radius: ['56%', '70%'],
        label: {
            show: false,
            fontSize: 32,
            color: '#fff',
            lineHeight: 42,
            position: 'center',
            rich: {
                num: {
                    fontSize: 42,
                    fontWeight: 'bold',
                    lineHeight: 52,
                    color: '#F4B45C'
                }
            }
        },
        labelLine: {
            show: false
        },
        silent: true,
        data: [{
                value: 135,
                itemStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: "#06B8FE" // 0% 处的颜色
                            },
                            {
                                offset: .5,
                                color: "#7C51FE" // 100% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#A72DFE" // 100% 处的颜色
                            }
                        ],
                        global: false // 缺省为 false
                    }
                },
                label: {
                    show: true,
                    formatter: '{num|' + 18 + '%}\n直接访问',
                }
            },
            {
                value: 310,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        color: "#02335B",
                        borderWidth: 0
                    },
                    emphasis: {
                        color: "#02335B",
                        borderWidth: 0
                    }
                }
            },
        ]
    }, {
        type: 'pie',
        zlevel: 3,
        silent: true,
        radius: ['63%', '63.5%'],
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        data: Array.apply(null, Array(200)).map((item, i) => {
            if (i % 2 === 0) {
                return {
                    name: (i + 1).toString(),
                    value: 25,
                    itemStyle: {
                        color: "#2C5B81",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            } else {
                return {
                    name: (i + 1).toString(),
                    value: 20,
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            }
        }),
    }, {
        type: 'pie',
        zlevel: 1,
        silent: true,
        radius: ['75%', '76%'],
        hoverAnimation: false,
        //color: "rgba(88,142,197,0.5)",
        color: '#0474A9',
        // animation:false,    //charts3 no
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        data: [1]
    }]
};

console.log(option);
myChart.setOption(option);