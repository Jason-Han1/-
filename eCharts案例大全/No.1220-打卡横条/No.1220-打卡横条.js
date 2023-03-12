 const colorArr = ['#49CCFFee', '#CC0033ee'];
        const colorAlpha = ['#49CCFF88', '#CC003388'];
        option = {
            backgroundColor: 'black',
            title: {
                show: true,
                text: '公司',
                textStyle: {
                    color: '#fff',
                    fontSize: 30,
                },
                right: "82%",
                top: '65%',
            },
            grid: {
                borderWidth: 0,
                top: '40%',
                left: '19%',
                right: '2%',
                bottom: '0%',
                textStyle: {
                    color: '#fff',
                },
            },
            tooltip: {
                show: false,
                formatter: "{b} <br> {c}%"

            },
            xAxis: [{
                type: 'value',
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false,
                }
            }],
            yAxis: [{
                //type: 'category',
                data: [''],
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                    }
                }

            }],
            series: [
            {
                name: '已打卡',
                type: 'bar',
                barWidth: 16,
                stack: '在线状态',
                label: {
                    normal: {
                        borderWidth: 14,
                        distance: 30,
                        align: 'right',
                        verticalAlign: 'middle',
                        borderRadius: 2,
                        borderColor: colorArr[0],
                        backgroundColor: colorArr[0],
                        show: true,
                        position: 'top',
                        formatter: '{a}：{c}人',
                        color: '#000',
                        shadowBlur: 20,
                        shadowColor: colorArr[0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 22,
                        },
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 20,
                        shadowColor: colorArr[0],
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: colorArr[0],
                        },
                        {
                            offset: 1,
                            color: colorAlpha[0],
                        }, ])
                    }
                },
                data: [{
                    value: 12400,
                }]
            },
            {
                name: '未打卡',
                type: 'bar',
                barWidth: 16,
                stack: '在线状态',
                itemStyle: {
                    color: '#E67C26'
                },
                label: {
                    normal: {
                        borderWidth: 14,
                        distance: 30,
                        align: 'right',
                        verticalAlign: 'middle',
                        borderRadius: 1,
                        borderColor: colorArr[1],
                        backgroundColor: colorArr[1],
                        show: true,
                        position: 'top',
                        formatter: '{a}：{c}人',
                        color: '#000',
                        shadowBlur: 20,
                        shadowColor: colorArr[1],
                        textStyle: {
                            color: '#fff',
                            fontSize: 22,
                        },
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 20,
                        shadowColor: colorArr[1],
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: colorArr[1],
                        },
                        {
                            offset: 1,
                            color: colorAlpha[1],
                        }, ])
                    }
                },
                data: [{
                    value: 2600,
                }]
            }, ]
        };