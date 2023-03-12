option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#92CEFF", "#6084E0"],
    title: {
        text: '数字艺术系毕业生城市去向分布',
        x: 'center',

    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {

        orient: 'horizontal',
        y: "6%",
        data: ['北京', '上海', '深圳', '杭州']
    },
    series: [{
        label: {
            normal: {
                fontSize: 18
            }
        },
        name: '数字艺术系毕业生城市去向分布',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [{
                value: 55,
                name: '北京'
            }, {
                value: 20,
                name: '其它'
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