option = {
    angleAxis: {
        type: 'category',
        data: ['进修培训情况', '能力提升情况', '教学工作', '教研工作', '技能竞赛', '思想道德建设', '获奖情况','年度考核','成果获奖','平台/团队建设','科研项目','学术成果'],
        axisTick: { //坐标轴刻度设置
            show: false
        },
        splitLine: { // 分隔线
            show: true, // 默认显示，属性show控制显示与否
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: '#E1E3E3',
                width: 1,
            }
        },
        axisLine: { // 坐标轴线
            show: true, // 默认显示，属性show控制显示与否
            lineStyle: { // 属性lineStyle控制线条样式
                color: '#E1E3E3',
                width: 1,
            },
        },
        axisLabel: { //刻度标签设置
            textStyle: {
                color: '#656565',
                fontSize: '14'
            }
        },
    },
    radiusAxis: {
        axisLine: { //坐标轴轴线设置
            show: false,
        },
        axisTick: { //坐标轴刻度设置
            show: false
        },
        axisLabel: { //刻度标签设置
            show: false
        }

    },
    polar: {
        axisLine: { // 坐标轴线
            show: false, // 默认显示，属性show控制显示与否
            lineStyle: { // 属性lineStyle控制线条样式
                color: '#E1E3E3',
                width: 1,
            }
        },
        center: ['50%', '50%'],
        radius: '80%' //图形大小
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1,5,6,3,2,1],
        coordinateSystem: 'polar',
        name: '重大',
        stack: 'a',
        itemStyle: {
            normal: {
                opacity: 1,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#7BB1FF'
                }, {
                    offset: 1,
                    color: '#4185FF'
                }]),
            }
        },
    }, {
        type: 'bar',
        data: [2, 4, 2, 1, 3, 2, 1,3,2,1,4,2],
        coordinateSystem: 'polar',
        name: '中等',
        stack: 'a',
        itemStyle: {
            normal: {
                opacity: 1,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#00CFBF'
                }, {
                    offset: 1,
                    color: '#05C398'
                }]),
            }
        },
    }, {
        type: 'bar',
        data: [1, 2, 3, 4, 1, 2, 5,4,3,3,2,1],
        coordinateSystem: 'polar',
        name: '轻微',
        stack: 'a',
        barWidth: '97%',
        itemStyle: {
            normal: {
                opacity: 1,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#FDAD59'
                }, {
                    offset: 1,
                    color: '#FFD18B'
                }]),
            }
        },
    }],
};
