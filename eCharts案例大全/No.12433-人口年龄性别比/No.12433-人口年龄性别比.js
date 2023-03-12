 /*中间显示的数据*/
        var myData = ['50以上', '40-49', '30-39', '20-29','20以下'];
        var femaleValue=[1341, 24211, 46060, 41765, 61251];
        var maleValue=[4723, 45523, 80739, 65923, 91583];
        /*中间显示的数据*/
        option = {
            legend:{data:['男','女'],
                textStyle: {
                    color: '#fff'
                },
                selectedMode:false,
            },
            backgroundColor: '#0b214a',
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: [{
                show: false,
                left: '4%',
                top: 60,
                bottom: 20,
                containLabel: true,
                width: '49%'
            }, {
                show: false,
                left: '50.5%',
                top: 60,
                bottom: 20,
                width: '0%'
            }, {
                show: false,
                right: '5%',
                top: 60,
                bottom: 20,
                containLabel: true,
                width: '42%'
            }],
            xAxis: [{
                gridIndex: 0,
                splitNumber: 2,
                type: 'value',
                inverse: true,
                axisLine: {
                    show: true,
                    textStyle: {
                        color: '#ccc'
                    },
                },
                axisTick: {
                    show: false,
                },
                position: 'bottom',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ccc',
                        fontSize: 12
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#57617f',
                        width: 1,
                        type: 'solid'
                    }
                }
            }, {
                gridIndex: 1,
                show: false,
            }, {
                gridIndex: 2,
                splitNumber: 2,
                type: 'value',
                axisLine: {
                    show: true,
                    textStyle: {
                        color: '#ccc'
                    },
                },
                axisTick: {
                    show: false,
                },
                position: 'bottom',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ccc',
                        fontSize: 12,
                    },
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#57617f',
                        width: 1,
                        type: 'solid',
                    },
                },
            },  ],
            yAxis: [{
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: true,
                },
                axisTick: {
                    show: true
                },
                axisLabel: {
                    show: true,
                    color:'#fff'
                },
                data: myData,

            }, {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    align: 'left'
                },
                data: myData,
            }, {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                },
                data: myData,
            }, ],
            series: [{
                name: '男',
                type: 'bar',
                barGap: 20,
                barWidth: 20,
                barCateGoryGap:20,
                stack: '入',
                xAxisIndex: 0,
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        color: 'rgba(1,255,252,0.65)',
                        barBorderRadius: [30, 0, 0, 30]
                    }
                },
                data: maleValue,
            }, {
                name: '女',
                type: 'bar',
                barGap: 20,
                barWidth: 20,
                barCateGoryGap:20,
                stack: '出',
                itemStyle: {
                    normal: {
                        color: 'rgba(252,191,166,0.65)',
                        barBorderRadius: [0, 30, 30, 0]
                    }
                },
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: femaleValue,
            }]
        }