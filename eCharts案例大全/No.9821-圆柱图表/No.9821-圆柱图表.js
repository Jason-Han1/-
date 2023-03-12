option = {
    series: [{
        name: '新开店目标',
        type: 'pie',
        radius: ['72%', '65%'], //设置圆形比例
        center: ['50%', '50%'], // 位置居中
        avoidLabelOverlap: false,
        hoverAnimation: false,
        itemStyle: {
            normal: {
                color: '#4AADEB',
                shadowColor: '#4AADEB',
                shadowBlur: 0,
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            },
        },
        labelLine: {
            normal: {
                show: false,
            },
        },
        data: [{
                value: 70, //已完成
                name: '70',
                label: {
                    normal: {
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold',
                            color: '#333333',
                        },
                    },
                },
            },
            {
                value: 30, //未完成
                name: '未完成',
                itemStyle: {
                    normal: {
                        color: '#DDE2E5',
                    },
                    emphasis: {
                        color: '#DDE2E5',
                    },
                },
            },

        ],
    }, ],
};