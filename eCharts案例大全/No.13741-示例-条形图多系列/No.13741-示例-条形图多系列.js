option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA"],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{a} <br/>{b} :人"
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        "axisLabel": {
            "interval": 0,
            formatter: '{value}',
        }
    },
    yAxis: {
        type: 'category',
        data: ['北京',
            '上海',
            '深圳',
            '杭州',
            '南京',
            '武汉',
            '长沙',
            '广州',
            '西安',
            '郑州',
            '成都',
            '南昌',
            '昆明',
            '青海',
            '西藏',
            '海南',
            '重庆',
        ]
    },
    series: [{
        name: '',
        type: 'bar',
        data: [43,28,15,12,6,4,3.6,3.4,2,1.5,1,0.9,0.6,0.3,0.2,0.15,0.05],
    }]
};