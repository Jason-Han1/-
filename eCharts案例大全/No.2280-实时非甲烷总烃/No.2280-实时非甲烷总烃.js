option = {
    backgroundColor: 'rgb(2,34,93)',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    grid: {
        top: '15%',
        left: '10%',
        right: '5%',
        bottom: '15%',
        // containLabel: true
    },
    legend: {
        icon: 'circle',
        top: '5%',
        left: '5%',
        itemWidth: 6,
        itemGap: 20,
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false,
            color:'#A582EA'
        },
    
        axisLabel: {
            color: '#A582EA',
            width:100
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24'] ,

    }],

    yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#00BFF3',
                opacity:0.23
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
                color: '#fff',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [
        {
            name:'一号站',
            type: 'line',
            symbol: "none",
            smooth: true,
            lineStyle: {
                normal: {
                    color: "rgb(0,177,242)",
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: 'rgb(0,177,242)',
                }
            },
            itemStyle: {
                color: "#fff",
                borderColor: "rgb(0,177,242)",
                borderWidth: 2,
            },
            data: [4,7,5,4,3,5,8]//data.values
        },
        {
            name:'二号站',
            type: 'line',
            smooth: true,
            symbol: "none",
            lineStyle: {
                normal: {
                    color: "rgb(232,246,13)",
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: 'rgb(232,246,13)',
                }
            },
            itemStyle: {
                color: "#fff",
                borderColor: "rgb(232,246,13)",
                borderWidth: 2,
            },
            data: [30,50,40,20,10,70,60,20,50,66,14]//data.values
        },
        {
            name:'三号站',
            type: 'line',
            smooth: true,
            symbol: "none",
            lineStyle: {
                normal: {
                    color: "rgb(233,127,63)",
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: 'rgb(233,127,63)',
                }
            },
            itemStyle: {
                color: "#fff",
                borderColor: "rgb(233,127,63)",
                borderWidth: 2,
            },
            data: [40,80,62,11,15,26,60,25,33,26,48,56,11]//data.values
        },
        {
            name:'四号站',
            type: 'line',
            smooth: true,
            symbol: "none",
            lineStyle: {
                normal: {
                    color: "rgb(31,236,31)",
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: 'rgb(31,236,31)',
                }
            },
            itemStyle: {
                color: "#fff",
                borderColor: "rgb(31,236,31)",
                borderWidth: 2,
            },
            data: [20,20,32,41,35,56,40,25,43,36,28,36,21]//data.values
        },
        {
            name:'五号站',
            type: 'line',
            smooth: true,
            symbol: "none",
            lineStyle: {
                normal: {
                    color: "rgb(52,115,244)",
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: 'rgb(52,115,244)',
                }
            },
            itemStyle: {
                color: "#fff",
                borderColor: "rgb(52,115,244)",
                borderWidth: 2,
            },
            data: [24,25,30,47,33,50,46,23,41,37,20,31,28]//data.values
        }
    ]
};