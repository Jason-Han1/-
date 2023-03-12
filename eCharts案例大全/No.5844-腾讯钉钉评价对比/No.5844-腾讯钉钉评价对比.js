option = {
    backgroundColor: '#efefef',
    title: {
        text: '',
        subtext: '',
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
    color: ['#f7965c', '#8e8e8e', '#434343'],
    legend: {
        top: '12%',
        data: ['正面', '中立', '负面']
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
        data: ["钉钉","腾讯系平台"]
    },
    series: [{
            name: '正面',
            type: 'bar',
            stack: 'Tik Tok',
            barWidth: 60,
            itemStyle: {
                shadowColor: '#f7965c',
                shadowBlur: 1,
                shadowOffsetY: 1,
                shadowOffsetX: 0,
                emphasis: {
                    borderWidth:'10',
                    borderColor:'#f7965c',
                    color:'#f7965c',
                    opacity:1,
                    shadowColor: '#f7965c',
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
            data: [52, 35]
        },
        {
            name: '中立',
            type: 'bar',
            stack: 'Tik Tok',
            barWidth: 25,
            itemStyle: {
                shadowColor: '#8e8e8e',
                shadowBlur: 1,
                shadowOffsetY: 1,
                shadowOffsetX: 0,
                emphasis: {
                    borderWidth:'10',
                    borderColor:'#8e8e8e',
                    color:'#8e8e8e',
                    opacity:1,
                    shadowColor: '#8e8e8e',
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
                        color:'#ffffff'
                    }
                },
            },
            data: [22, 33]
        },
        {
            name: '负面',
            type: 'bar',
            stack: 'Tik Tok',
            barWidth: 25,
            itemStyle: {
                shadowColor: '#434343e',
                shadowBlur: 1,
                shadowOffsetY: 1,
                shadowOffsetX: 0,
                emphasis: {
                    borderWidth:'10',
                    borderColor:'#434343',
                    color:'#434343',
                    opacity:1,
                    shadowColor: '#434343',
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
            data: [26, 32 ]
        },
    ]
};