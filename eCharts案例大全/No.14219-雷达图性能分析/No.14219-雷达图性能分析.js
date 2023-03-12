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
                name: '动力',
                max: 6500
            },
            {
                name: '续航',
                max: 16000
            },
            {
                name: '油耗',
                max: 30000
            },
            {
                name: '外观',
                max: 38000
            },
            {
                name: '舒适度',
                max: 52000
            },
            {
                name: '稳定性',
                max: 25000
            }
        ]
    },
    series: [{
        type: 'radar',
        data: [{
            value: [5000, 4000, 28000, 31000, 42000, 21000],
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