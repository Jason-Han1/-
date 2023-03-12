option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#92CEFF", "#6084E0"],
    series: [{
        label: {
            normal: {
                fontSize: 18
            }
        },
        type: 'pie',
        center: ['50%', '50%'],
        data: [{
                value: 55,
                name: '北京'
            }, {
                value: 20,
                name: '武汉'
            }, {
                value: 10,
                name: '杭州'
            }, {
                value: 20,
                name: '广州'
            }, {
                value: 38,
                name: '上海'
            },
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 2, 2, 0.3)'
            }
        }
    }]
};