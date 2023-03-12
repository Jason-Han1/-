var colorList = ['#04FEF9', '#77ED4D', '#48A3FF', '#FFE822', '#FF61D8', '#FCCF77'];
option = {
    backgroundColor: '#000',
    color: colorList,
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: [{
        type: 'category',
        z:5,
        data: ['数据一', '数据', '数据', '数据', '数据', '数据'],
        // position:'left',
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#132C57'
            }
        },
        itemStyle:{
            normal:{
                
            }
        },
        axisLabel: {
            color: '#333',
            margin:-8,
            formatter: (value, index) => {
                return [
                     '{title|' + value + '} '
                ].join('\n')
            },
            rich: {
                title:{
                    backgroundColor: '#8d7fec',
                    // lineHeight:40,
                    // lineWidth:40,
                    color: '#fff',
                    width:40,
                    height:40,
                    // margin:100,
                    // align:'center',
                    borderRadius: 50,
                    padding: 5,
                    
                }
            }
        },
    }],
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#fff'
        }
    },
    series: [{
            tooltip: {
                show: false
            },
            name: 'bg',
            xAxisIndex: 0,
            type: 'bar',
            barWidth: '30',
            silent: true,
            symbol: 'rect',
            symbolRepeat: true,
            symbolMargin: 100,
            symbolSize: [25, 4],
            itemStyle: {
                normal:{
                    barBorderRadius: [30,30,0,0],
                    color: '#1089E7',
                    borderColor: '#00c1de',
                    borderWidth: 3,
                }
                // color: '#0B4B57'
            },
            data: [390, 390, 390, 390, 390, 390]
        },
        {
            type: 'bar',
            animation: true,
            animationDuration: 600,
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize: [25, 4],
            // symbolOffset:[0, -30],
            barGap: '-100%',
            symbolMargin: 100,
            barWidth: '30',
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: false
                    },
                    
                    barBorderRadius: [15,15,0,0],
                }
            },
            data: [10, 52, 200, 334, 390, 330]
        }
    ]
};