option = {
    backgroundColor: '#141845',
    color: ['#2966b6', '#7460EE'],
    tooltip: {},
    radar: {
        nameGap: 6, // 图中工艺等字距离图的距离
        // splitNumber: 6, //指示器轴的分割段数
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 16,
            }
        },
        indicator: [{
                name: '平台服务',
                max: 150
            },
            {
                name: '品牌影响',
                max: 150
            },
            {
                name: '资金支持',
                max: 150
            },
            {
                name: '创新能力',
                max: 150
            },
            {
                name: '集群布局',
                max: 150
            },
            {
                name: '产业规模',
                max: 150
            }
        ],
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#1c368f'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#1c368f',
                // width: 2,
                // type: 'dotted'
            }
        },
        splitArea: {
            areaStyle: {
                color: '#141845'
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
        data: [{
            value: [134, 100, 80, 76, 60, 46, 37, 28],
            name: '',
            lineStyle: {
                // width: 5
            },
            areaStyle: {
                // color:'red'
            }
        }]
    }]
};