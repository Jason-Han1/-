var numbers = {"max_achievement":150,"this_achievement":118,"promote_achievement":135};

option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
        min: 0,
        max: numbers.max_achievement,
        name: '业务指标',
        type: 'gauge',
        axisLabel: { //字体大小和颜色
            fontSize: 16,
            color: '#333'
        },
        detail: {
            formatter: '得分',
            color: '#333',
            fontSize: 14,
            offsetCenter: [0, '60%']
        },
        axisLine: { // 坐标轴线  
            lineStyle: { // 属性lineStyle控制线条样式  
                color: [
                    [numbers.this_achievement / numbers.max_achievement, '#45ae3d'],
                    [numbers.promote_achievement / numbers.max_achievement, '#e75544'],
                    [1, '#bbb']
                ],
                width: 0
            }
        },
        axisTick: { // 坐标轴小标记
            length: 15, // 属性length控制线长
            lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto',
                width: 4
            }
        },
        splitLine: { // 分隔线
            length: 30, // 属性length控制线长
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto',
                width: 7
            }
        },
        title: { //标题
            show: false
        },
        tooltip: { //提示框浮层
            backgroundColor: 'white',
            borderColor: '#333',
            borderWidth: 1,
            textStyle: {
                color: 'auto'
            }
        },
        data: [{
            value: numbers.this_achievement,
            name: '本次成绩',
            itemStyle: {
                color: '#45ae3d',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
            }
        }, {
            value: numbers.promote_achievement,
            name: '提升后成绩',
            itemStyle: {
                color: '#e75544',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
            }
        }]
    }]
};