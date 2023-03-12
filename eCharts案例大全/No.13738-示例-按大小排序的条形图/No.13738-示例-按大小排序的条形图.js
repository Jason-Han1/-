option = {
    backgroundColor: '#ffffff',
    color: ['#37A2DA'],
    title: [
            {
                show: true,
                text: '购买食物的热量',
                textStyle: {
                    color: '#333',
                    fontSize: 20
                },
                left: 'center',
                top: '5%'
            }
        ],
        
    textStyle: {
        color: '#333'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
    },

    grid: {
 top: '15%',
        containLabel: true
    },
    xAxis: {

        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
            fontSize: 14,
            formatter: '{value}千卡',
        }
    },
    yAxis: {
        axisLabel: {
            fontSize: 14,
        },
      
        data: ['低脂牛奶',
            '巧克力',
            '薯片',
            '甜甜圈',
            '白糖',
            '奶油蛋糕',
            '蜂蜜',
            '代糖',
            '冰淇淋',
            '布丁',
            '酸奶',
            '果冻',
            '凉粉',
        ].reverse()
    },
    series: [{
        name: '热量',
        type: 'bar',
        barCategoryGap: '30%',
        data: [557, 388, 387, 384, 344, 297, 276, 212, 126, 62, 46, 45, 4, ].reverse(),

    }]
};