var categories = ['巧克力',
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
];

var data = [557, 388, 387, 384, 344, 297, 276, 212, 126, 62, 46, 45, 4];

var indices = data.map((val, idx) => idx).sort(() => Math.random());

option = {
    backgroundColor: "#333",
    color: ["#FD666D"],
    textStyle: {
        color: '#fff'
    },
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
            fontSize: 18,
            formatter: '{value}千卡',
        }
    },
    yAxis: {
        "axisLabel": {
            "interval": 0,
            fontSize: 18,

        },

        type: 'category',
        data: indices.map((val, idx) => categories[val])
    },
    series: [{
        name: '热量',
        type: 'bar',
        barCategoryGap: '30%',
        data: indices.map((val, idx) => data[val])
    }]
};