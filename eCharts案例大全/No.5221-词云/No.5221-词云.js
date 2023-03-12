let data = [{
        "name": "美食",
        "value": 20
    },
    {
        "name": "网红店",
        "value": 20
    },
    {
        "name": "新冠肺炎疫情表彰大会",
        "value": 20
    },
    {
        "name": "打卡",
        "value": 19
    },
    {
        "name": "十一长假",
        "value": 18
    },
    {
        "name": "自由行",
        "value": 18
    },
    {
        "name": "教师节",
        "value": 17
    },
    {
        "name": "旅游景点攻略",
        "value": 17
    },
    {
        "name": "坡子街",
        "value": 17
    },
    {
        "name": "体育",
        "value": 17
    },
    {
        "name": "综艺",
        "value": 17
    },
    {
        "name": "商场",
        "value": 17
    },
    {
        "name": "衡山",
        "value": 16
    },
    {
        "name": "科学家座谈会",
        "value": 15
    },
    {
        "name": "潇湘晨报",
        "value": 15
    },
    {
        "name": "张家界",
        "value": 15
    },
    {
        "name": "橘子洲",
        "value": 15
    },
    {
        "name": "房价",
        "value": 15
    },
    {
        "name": "开学",
        "value": 15
    },
    {
        "name": "湘江",
        "value": 15
    },
    {
        "name": "繁华",
        "value": 15
    },
    {
        "name": "湖南公考",
        "value": 14
    },
    {
        "name": "中秋节",
        "value": 14
    },
    {
        "name": "天气",
        "value": 14
    },
    {
        "name": "幸福感",
        "value": 14
    },
    {
        "name": "芒果台",
        "value": 13
    },
    {
        "name": "游戏",
        "value": 13
    },
    {
        "name": "宝藏小店",
        "value": 13
    },
    {
        "name": "动漫",
        "value": 13
    },
    {
        "name": "武汉",
        "value": 13
    },
    {
        "name": "湖南大学",
        "value": 13
    },
    {
        "name": "湘西",
        "value": 12
    }
]
option = {
    backgroundColor: '#012248',
    series: [{
        type: 'wordCloud',
        gridSize: 7,
        sizeRange: [15, 40],
        rotationRange: [-90, 90],
        // rotationStep: 45,
        shape: 'circle',
        width: '100%',
        height: '100%',
        drawOutOfBound: false,
        textStyle: {
            normal: {
                color: function() {
                    return (
                        'rgb(' + [
                            Math.round(Math.random() * 500),
                            Math.round(Math.random() * 300),
                            Math.round(Math.random() * 200)
                        ].join(',') +
                        ')'
                    )
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#ffffff'
            }
        },
        data: data
    }]
}