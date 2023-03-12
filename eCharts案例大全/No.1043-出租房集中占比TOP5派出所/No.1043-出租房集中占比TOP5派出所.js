let echartData = [
    {
        value: 8777,
        name: '陆家派出所'
    },
     {
        value: 6547,
        name: '花桥派出所'
    },
     {
        value: 2347,
        name: '张浦派出所'
    },
     {
        value: 2187,
        name: '锦溪派出所'
    },
     {
        value: 1357,
        name: '巴城派出所'
    }]
    let attackSourcesColor = [
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: "#ff9250" },
        { offset: 1, color: "#ff5252" }
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: "#ffbf25" },
        { offset: 1, color: "#ff802a" }
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: "#f4e973" },
        { offset: 1, color: "#ffb949" }
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: "#649dfb" },
        { offset: 1, color: "#649dfb" }
        ])
    ]
    
    let max = parseInt(echartData[0].value)
    for (let i = 0; i < echartData.length - 1; i++) {
        max = max < parseInt(echartData[i+1].value) ? parseInt(echartData[i+1].value) : max
    }
    // if(max!==0){
    //     let maxArr = (new Array(echartData.length)).fill(max*1.5)
    //     option.series[1].data = maxArr
    // } else {
    //     option.series[1].data = [1,1,1,1,1]
    // }
option = {
            tooltip: {
                // show: false,
                trigger: 'axis',
                // axisPointer: {
                //     type: 'shadow'
                // },
                formatter(params){
                    for(var i = 0; i < params.length; i++){
                        return params[i].name +":"+params[i].data.value;
                    }
                }
            },
            legend: {
                show: false
            },
            grid: {
                top: '1%',
                bottom: 0,
                left: '0%',
                right: '0%',
                containLabel:true
            },
            xAxis: {
                show: false,
                type: 'value'
            },
            yAxis: [
                {
                type: 'category',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                data: echartData.map(item => item.name),
                axisLabel: {
                    // show: false,
                    margin: 0,
                    fontSize: 15,
                    align: 'left',
                    color: '#000000',
                    padding: [0,0,60,-30],
                    interval: 0,
                    rich: {
                        a1: {
                            color: '#fff',
                            backgroundColor: '#ff5454',
                            borderColor: '#fd2829',
                            borderWidth: 2,
                            width: 24,
                            height: 24,
                            align: 'center',
                            borderRadius: 24,
                            fontSize: 15,
                        },
                        a2: {
                            color: '#fff',
                            backgroundColor: '#ff7e00',
                            borderColor: '#f27200',
                            borderWidth: 2,
                            width: 24,
                            height: 24,
                            align: 'center',
                            borderRadius: 24,
                            fontSize: 15,
                        },
                        a3: {
                            color: '#fff',
                            backgroundColor: '#ffbd54',
                            borderColor: '#ff9f06',
                            borderWidth: 2,
                            width: 24,
                            height: 24,
                            align: 'center',
                            borderRadius: 24,
                            fontSize: 15,
                        },
                        b: {
                            color: '#fff',
                            backgroundColor: '#57aaff',
                            borderColor: '#3096ff',
                            borderWidth: 2,
                            width: 24,
                            height: 24,
                            align: 'center',
                            borderRadius: 24,
                            fontSize: 15,
                        }
                    },
                    formatter: function(params) {
                        var index = echartData.map(item => item.name).indexOf(params);
                        index = index + 1;
                        if (index - 1 < 3) {
                            return [
                                '{a' + index + '|' + index + '}' + '  ' + params
                            ].join('\n')
                        } else {
                            return [
                                '{b|' + index + '}' + '  ' + params
                            ].join('\n')
                        }
                    }
                }
            }, 
            {
                triggerEvent: true,
                show: true,
                inverse: true,
                data: echartData.map(item => item.value),
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    // shadowOffsetX: '-60px',
                    color: 'rgba(29, 145, 245, 1)',
                    align: 'right',
                    verticalAlign: 'bottom',
                    lineHeight: 30,
                    fontSize: 15,
                    padding: [0,30,10,0],
                    formatter:'{value}'
                }
            }],
            series: [{
                    z: 2,
                    name: 'value',
                    type: 'bar',
                    barWidth: 15,
                    zlevel: 1,
                    data: echartData.map((item, i) => {
                        let itemStyle = {
                            color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i]
                        }
                        return {
                            value: item.value,
                            itemStyle: itemStyle
                        };
                    }),
                    label: {
                        show: false,
                        position: 'right',
                    }
                },
                {
                    name: '背景',
                    type: 'bar',
                    barWidth: 15,
                    barGap: '-100%',
                    itemStyle: {
                        normal: {
                            color: 'rgba(213,220,237,0.9)'
                        }
                    },
                    data: (new Array(echartData.length)).fill(max*2),
                }
            ]
        }