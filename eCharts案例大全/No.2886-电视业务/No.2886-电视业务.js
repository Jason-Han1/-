 var color=["#1E90FF",'#A1DEFA'];
        option = {
             title: {
                text: '电视业务',
                top:'0px',
                left:'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '12',
                    color: '#333',
                },
            },
            xAxis: {
                splitLine: {show: false},
                offset: 10,
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                data: ['九联'],
                inverse: true,
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                   show: false
                }
            },
            grid: {
                left: '10%',
                right: '13%',
                bottom: '0%',
                top: '5%',
                containLabel: true
            },
            series: [{
                type: 'pictorialBar',
                symbol: 'rect',
                symbolRepeat: 'fixed',
                symbolClip: true,
               symbolSize: [7,12],
                itemStyle: {
                        normal: {
                            borderWidth:3,
                            color: color[0]
                        }
                    },
                data:[20],
                label: {
                    show: true,
                    position: 'bottom',
                    offset: [0, -20],
                    color: '#333',
                    fontSize: 18
                },
                z: 10
            },{
                type: 'pictorialBar',
                symbol: 'rect',
                symbolRepeat: 'fixed',
                itemStyle: {
                        normal: {
                            borderWidth:3,
                            color: color[1]
                        }
                    },
                symbolClip: true,
                symbolSize: [7,12],
                data:[100],
                z: 5
            }]
        };
