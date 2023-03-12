myChart.setOption({
    title: {
        text: '《我不是药神》电影评分分布',
        subtext: '数据来源：豆瓣网',
        top: 10,
        left: 10
    },
    series: [{
        name: '《我不是药神》豆瓣评分分布',
        type: 'pie',
        radius: '55%',
        data: [{
                value: 57.6,
                name: '五星'
            },
            {
                value: 34.7,
                name: '四星'
            },
            {
                value: 6.9,
                name: '三星'
            },
            {
                value: 0.5,
                name: '二星'
            },
            {
                value: 0.2,
                name: '一星'
            }
        ]
    }]
})