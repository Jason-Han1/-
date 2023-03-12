option = {
    backgroundColor: "#ffffff",
    color: ["#FD666D"],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{a} <br/>{b} : {c}%"
    },

    grid: {

        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        "axisLabel": {
            "interval": 0,
            formatter: '{value}千卡',
        }
    },
    yAxis: {
        type: 'category',
        data: ['巧克力',
            '薯片',
            '甜甜圈',
            '白糖',
            '奶油蛋糕',
            '蜂蜜',
            '代糖',
            '冰淇淋',
            '布丁',
            '酸奶',
            '低脂牛奶',
            '果冻',
            '凉粉',
        ].reverse()
    },
    series: [{
        name: '热量',
        type: 'bar',
        barCategoryGap: '30%',
        data: [557, 388, 387, 384, 344, 297, 276, 212, 126, 62, 46, 45, 4, ].reverse()
    }]
};