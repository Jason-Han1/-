option = {
    fontFamily: 'Roboto',
    name: '体重',
    backgroundColor: '#82d7f3',
    title: {
        text: '79kg', //最近一次体重
        subtext: '      体重',
        textStyle: {
            fontWeight: 'bolder',
            fontSize: 48,
            color: '#FFFFFF',
        },
        subtextStyle: {
            fontWeight: 'bolder',
            fontSize: 24,
            color: '#0099ff',
        },
        right: '0%',
        top: '0%'
    },
    dataZoom: [
        {   // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 50,      // 左边在 10% 的位置。
            end: 100         // 右边在 60% 的位置。
        }
    ],

    grid: {
        left: '1%',
        right: '5%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['9.23', '10.3', '10.11', '10.15', '10.26', '12.26'],
        axisLabel: {
            show: true,
            interval: 0,
            fontSize: 20,
            color: '#ffffff',
            fontWeight: 'bold'
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        show: false,
        min: 76, //最低为临近BMI线减3
        max: 85, //最高为临近BMI线加3或最高值加3
    }],
    series: [{
        name: '体重',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        showSymbol: true,
        lineStyle: {
            normal: {
                width: 5,
                color: '#0099ff',
                shadowBlur: 6,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffsetY: 8,
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [{
                    offset: 0,
                    color: 'rgba(58,191,238, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(58,191,238, 0.3)'
                }]),
            },
        },
        itemStyle: {
            normal: {
                color: '#0099ff',
                borderColor: '#ffffff',
                borderWidth: 12,
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                color: '#ffffff',
                fontSize: 24,
            },
        },
        markLine: {
            //体质指数（BMI）=体重（kg）÷身高^2（m）
            //BMI指数过轻：低于18.5
            //正常：18.5-23.9
            //过重：24-27
            //肥胖：28-32
            //非常肥胖, 高于32
            lineStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.3)',
                },
            },
            data: [{
                name: '超胖32',
                label: {
                    normal: {
                        formatter: '超胖 90kg',
                        position: 'middle',
                        fontSize: 18,
                    }
                },
                yAxis: 85, //体质指数（BMI32）=体重（kg）÷身高^2（m）
            }, {
                name: '肥胖28',
                label: {
                    normal: {
                        formatter: '肥胖 85kg',
                        position: 'middle',
                        fontSize: 18,
                    }
                },
                yAxis: 80, //体质指数（BMI）28=体重（kg）÷身高^2（m）
            }, {
                name: '过重24',
                label: {
                    normal: {
                        formatter: '过重 80kg',
                        position: 'middle',
                        fontSize: 18,
                    }
                },
                yAxis: 75, //体质指数（BMI）24=体重（kg）÷身高^2（m）
            }, {
                name: '正常18.5',
                label: {
                    normal: {
                        formatter: '正常 65kg',
                        position: 'middle',
                        fontSize: 18,
                    }
                },
                yAxis: 70, //体质指数（BMI）18.5=体重（kg）÷身高^2（m）
            }]
        },
        data: [83, 82, 80, 83, 80, 79]
    }, ]
};