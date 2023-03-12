option = {
    backgroundColor: '#f9f9f9',
    title: {
        text: 'Ban TikTok? Public Is Split,but Bulk of GOP Adults Are Game',
        subtext: 'Respondents were adked whether TikTok should be banned from operating in the United States',
        top: '5%',
        x: 'center',
        textStyle: {
            color: '#333',
            fontSize: '22',
            fontWeight: 'bold'
        },
        subtextStyle: {
            color: '#333',
            fontSize: '12',
            fontWeight: 'bold'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: 'rgba(0, 255, 233,0)',
            },
        },
    },
    color: ['#de0b1a', '#d6d6d6', '#00c1c1'],
    legend: {
        top: '18%',
        data: ['Yes,it should be banned', 'Dont know/No opinion', 'No,it shouldnt be banned']
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '10%',
        top: '25%',
        containLabel: true
    },
    xAxis: {
        show: false,
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: ["ALL U.S.adults", "Democrats", "Independents", "Republicans", "Gen Z", "Millennials", "Gen X", "Baby Boomers"]
    },
    series: [{
            name: 'Yes,it should be banned',
            type: 'bar',
            stack: 'Tik Tok',
            barWidth: 25,
            itemStyle: {
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 1,
                shadowOffsetY: 1,
                shadowOffsetX: 0,
                emphasis: {
                    borderWidth:'10',
                    borderColor:'#de0b1a',
                    color:'#de0b1a',
                    opacity:1,
                    shadowColor: '#de0b1a',
                    shadowBlur: 0,
                    shadowOffsetY: 0,
                    shadowOffsetX: 0,
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        align: 'center',
                        baseline: 'middle',
                        fontSize: 14,
                        fontWeight: '400',
                    }
                },
            },
            data: [29, 19, 26, 44, 20, 21, 32, 34]
        },
        {
            name: 'Dont know/No opinion',
            type: 'bar',
            stack: 'Tik Tok',
            barWidth: 25,
            itemStyle: {
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 1,
                shadowOffsetY: 1,
                shadowOffsetX: 0,
                emphasis: {
                    borderWidth:'10',
                    borderColor:'#d6d6d6',
                    color:'#d6d6d6',
                    opacity:1,
                    shadowColor: '#d6d6d6',
                    shadowBlur: 0,
                    shadowOffsetY: 0,
                    shadowOffsetX: 0,
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        align: 'center',
                        baseline: 'middle',
                        fontSize: 14,
                        fontWeight: '400',
                        color:'#7c7c7c'
                    }
                },
            },
            data: [38, 36, 44, 33, 21, 32, 41, 45]
        },
        {
            name: 'No,it shouldnt be banned',
            type: 'bar',
            stack: 'Tik Tok',
            barWidth: 25,
            itemStyle: {
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 1,
                shadowOffsetY: 1,
                shadowOffsetX: 0,
                emphasis: {
                    borderWidth:'10',
                    borderColor:'#00c1c1',
                    color:'#00c1c1',
                    opacity:1,
                    shadowColor: '#00c1c1',
                    shadowBlur: 0,
                    shadowOffsetY: 0,
                    shadowOffsetX: 0,
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        align: 'center',
                        baseline: 'middle',
                        fontSize: 14,
                        fontWeight: '400',
                    }
                },
            },
            data: [33, 45, 30, 23, 59, 47, 27, 21]
        },
    ]
};