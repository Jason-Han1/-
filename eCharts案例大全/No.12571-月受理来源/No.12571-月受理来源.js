option = {
    backgroundColor: '#141845',
    title: {
        text: '月受理来源',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {

        orient: 'vertical',
        x: 'right',
        itemWidth: 14,
        itemHeight: 14,
        align: 'left',
        show: false
    },
    series: [

        {
            name: '访问来源',
            type: 'pie',
            color: ['#339AE5', '#E7536B', '#D9C701', '#F48051', '#60a900', '#01949b', ' #5FB4E1'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%4'
                },

            },
            data: [{
                    value: 3000,
                    name: '电话'
                },
                {
                    value: 300,
                    name: '信箱'
                },
                {
                    value: 300,
                    name: '微信'
                },
                {
                    value: 100,
                    name: '公安局'
                },
                {
                    value: 100,
                    name: 'App'
                },
                {
                    value: 100,
                    name: '微博'
                },
                {
                    value: 50,
                    name: '其他'
                }

            ],
            labelLine: {
                normal: {
                    length: 2, // 改变标示线的长度
                    lineStyle: {
                        color: "#74ACFF" // 改变标示线的颜色
                    }
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#74ACFF' // 改变标示文字的颜色
                    }
                }
            }
        }
    ]
};