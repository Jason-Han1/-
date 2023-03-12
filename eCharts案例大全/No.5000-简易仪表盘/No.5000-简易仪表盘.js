option = {
    backgroundColor:'#fff',
                    title: {
                        text: 20+'\n/\n'+20,
                        x: '50%',y: '50%',
                        textAlign: 'center',
                        textStyle: { color: '#666', fontSize: 25, }
                    },
                    series: [{
                        name: "",
                        type: "gauge",
                        radius: '50%',
                        center: ['50%', '57%'],
                        axisLine: {
                            lineStyle: {
                                color: [[20 / 100, '#57B2FF'],[1, "#eee"]],
                                width: 20
                            }
                        },
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        splitLine: {show: false},
                        detail: {show: false},
                        pointer: {show: false}
                    }]
                }