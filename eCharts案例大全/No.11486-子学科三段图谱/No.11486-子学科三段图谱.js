var ckLineAll = [[0.1,1],[0.2,1.2],[0.3,0.8],[0.4,1.1],[0.5,2.2],[0.6,2.3]];
var ckLine = [[0.1,1],[0.2,1.2],[0.3,0.8],[0.4,1.1]];
var cckLineAll = [[0.6,2.3],[0.7,2.1],[0.8,1.2],[0.9,0.8],[1,1.2],[1.1,2.4],[1.2,0.7]];
var cckLine=[[0.6,2.3],[0.7,2.1],[0.8,1.2],[0.9,0.8],[1,1.2]];
var bckLineAll=[[1.2,0.7],[1.3,0.2],[1.4,1.4],[1.5,2.5],[1.6,3.1]];
var bckLine=[[1.2,0.7],[1.3,0.2],[1.4,1.4],[1.5,2.5]];
    option = {
        color:['#ff667f','#3fcc74','#fd9500'],
        backgroundColor: '#fff',
        title: {
            text: '子学科三段图谱',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#333'
            },
            left: 'center',
            bottom: '25'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: 'rgba(255,255,255,0)'
                }
            },
        },
        legend:{
         data: ['常考知识点', '次常考知识点', '不常考知识点'],
        },
        grid: {
            left: '5%',
            right: '10%',
            bottom: '22%',
            top: '15%',
            containLabel: true
        },
        xAxis: [{
            name: '测试概率',
            type: 'value',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    show: true,
                    color: '#ebebeb'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#ebebeb'
                },
            },
            nameTextStyle: {
                color: '#999'
            },
            axisLabel: {
                color: '#999',
                show: true
            },
            axisTick: {
                show: false
            },
        }],
        yAxis: [{
            type: 'value',
            name: "概率密度",
            axisLine: {
                lineStyle: {
                    color: '#ebebeb'
                }
            },
            axisTick: {
                show: false
            },
            nameTextStyle: {
                color: '#cdcdcd'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ebebeb',
                    type: 'dotted'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            },
        }],
        series: [{
            name: '常考知识点',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 3
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 153, 153, 1)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255, 153, 153, 0.5)'
                }]),
            },
            itemStyle: {
                color: 'rgba(255,153,153,0)',
            },
            data: ckLine
        },{
            name: '部分常考',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 3
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 153, 153, 0)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255, 153, 153, 0)'
                }]),
            },
            itemStyle: {
                color: 'rgb(255,102,127)',
                borderColor: 'rgba(255,102,127,0.3)',
                borderWidth: 12
            },
            data: ckLineAll
        },{
            name: '次常考知识点',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 3
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(123, 212, 116, 1)'
                }, {
                    offset: 0.8,
                    color: 'rgba(123, 212, 116, 0.5)'
                }]),
            },
            itemStyle: {
                color: 'rgba(255,153,153,0)',
            },
            data: cckLine
        },{
            name: '部分次常考',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 3
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 153, 153, 0)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255, 153, 153, 0)'
                }]),
            },
            itemStyle: {
                color: 'rgb(63, 204, 116)',
                borderColor: 'rgba(63,204,116,0.3)',
                borderWidth: 12
            },
            data: cckLineAll
        },{
            name: '不常考知识点',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 3
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 204, 138, 1)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255, 204, 138, 0.5)'
                }]),
            },
            itemStyle: {
                color: 'rgba(255,153,153,0)',
            },
            data: bckLine
        },{
            name: '部分不常考',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 3
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 153, 153, 0)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255, 153, 153, 0)'
                }]),
            },
            itemStyle: {
                color: 'rgb(253, 149, 0)',
                borderColor: 'rgba(253,149,0,0.3)',
                borderWidth: 12
            },
            data: bckLineAll
        }]
    };

