option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA"],
    radar: {
        shape: 'circle',
        name: {
            textStyle: {
                color: '#999999',
            }
        },
        splitArea: {
            areaStyle: {
                color: ['#fff', '#fff', '#fff', '#fff'],
                shadowColor: '#37A2DA'
            }
        },
        indicator: [{
                name: '项目概况',
                max: 10
            },
            {
                name: '关注指数',
                max: 10
            },
            {
                name: '播放平台',
                max: 10
            },
            {
                name: '声量基础',
                max: 10
            },
            {
                name: '制作公司',
                max: 10
            },
            {
                name: '主创团队',
                max: 10
            }
        ]
    },
    series: [{
        type: 'radar',
        data: [{
            value: [7.5, 6.8, 7.5, 7, 6, 7.2],
            name: '数据',
            itemStyle: {
                normal: {
                    color: 'rgba(5, 128, 242, 0.8)'
                }
            },
            areaStyle: {
                normal: {
                    color: '#37A2DA'
                }
            }
        }]
    }]
}