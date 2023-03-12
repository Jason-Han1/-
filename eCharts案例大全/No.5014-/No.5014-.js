option = {
    backgroundColor: '#fff',
    tooltip: {
        backgroundColor:'#fff',
        textStyle: {
            color: '#5c6c7c',
            fontSize:10,
        },
    },
    radar: {
        nameGap: 10, // 图中工艺等字距离图的距离
        // splitNumber: 3, //指示器轴的分割段数
        name: {
            textStyle: {
                color: '#505D6F',
                fontSize: 16,
                fontWeight:500
            }
        },
        indicator: [{
                name: '创新能力',
                max: 100
            },
            {
                name: '盈利能力',
                max: 100
            },
            {
                name: '信用水平',
                max: 100
            },
            {
                name: '风险水平',
                max: 100
            },
            {
                name: '经营能力',
                max: 100
            },
            {
                name: '产业特点',
                max: 100
            }
        ],
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#E9EBF1',
                 type: 'dotted'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#E9EBF1',
                // width: 2,
            }
        },
        splitArea: {
            areaStyle: {
                color: '#fff'
            }
        }
    },
    grid: {
        top: '18%',
        left: '3%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    series: [{
        name: ' ',
        type: 'radar',
         symbol: 'none',
        data: [{
            value: [100, 90, 40, 90, 90, 100],
            name: '',
            lineStyle: {
                 width: 3,
                 color:'#83CFFF'
            },
            areaStyle: {
                 color:'#DFF3FE'
            },
            
        }]
    },
    {
        name: ' ',
        type: 'radar',
        symbol: 'circle',
        symbolSize: 10,
        data: [{
            value: [100, 100, 100, 100, 100, 100],
            name: '',
            lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: '#2D99FF',
            }
        }
            
        }]
    }]
};