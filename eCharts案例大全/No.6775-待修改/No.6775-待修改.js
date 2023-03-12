option = {
    grid: {
        top: 80,
        bottom: 30
    },
    
    angleAxis: {
        type: 'category',
        data: ['安全生产', '法律业务', '工程分包', '劳动用工', '投资管理', '物资管理', '知识产权'],
        splitLine: { // 分隔线
            show: true, // 默认显示，属性show控制显示与否
            // onGap: null,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: ['#ccc'],
                width: 1,
                type: 'dashed'
            }


        },
        
        axisLine: {             // 坐标轴线
        show: true,      // 默认显示，属性show控制显示与否
        lineStyle: {      // 属性lineStyle控制线条样式
            color: '#48b',
            width: 2,
            type: 'solid'
        },
         axisTick: {            // 坐标轴小标记
        show: false,       // 属性show控制显示与否，默认不显示
        inside : false,      // 控制小标记是否在grid里
        length :5,          // 属性length控制线长
        lineStyle: {       // 属性lineStyle控制线条样式
            color: '#333',
            width: 1
        }
    },
    },

    },
    radiusAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },


    
    },

    polar: {
        axisLine: { // 坐标轴线
            show: false, // 默认显示，属性show控制显示与否
            lineStyle: { // 属性lineStyle控制线条样式
                color: '#ccc',
                width: 1,
                type: 'solid'
            }
        },
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: 'polar',

        name: '重大',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1],

        coordinateSystem: 'polar',
        name: '中等',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4, 1, 2, 5],

        coordinateSystem: 'polar',
        name: '轻微',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['重大', '中等', '轻微']
    }
};