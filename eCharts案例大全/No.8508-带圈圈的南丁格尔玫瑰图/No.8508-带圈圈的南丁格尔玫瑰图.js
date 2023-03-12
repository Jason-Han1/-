option = {
    backgroundColor: '#fff',
    color: ['#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    graphic: {
        elements: [{
                type: 'circle',
                shape: {
                    cx: 400, //圆心坐标，与series.center对应
                    cy: 300, //圆心坐标，与series.center对应
                    r: 160  //最大的圈圈半径，比series.radius[n,m] 的m大一点
                },
                style: {
                    fill: '#fff',
                    stroke: '#F0F1F2'
                }
            },
            {
                type: 'circle',
                shape: {
                    cx: 400,
                    cy: 300,
                    r: 130  //第二层圈圈的半径
                },
                style: {
                    fill: '#fff',
                    stroke: '#F0F1F2'
                }
            },
            {
                type: 'circle',
                shape: {
                    cx: 400,
                    cy: 300,
                    r: 100 //第三层圈圈的半径
                },
                style: {
                    fill: '#fff',
                    stroke: '#F0F1F2'
                }
            },
            {
                type: 'circle',
                shape: {
                    cx: 400,
                    cy: 300,
                    r: 70
                },
                style: {
                    fill: '#fff',
                    stroke: '#F0F1F2'
                }
            },
            {
                type: 'circle',
                shape: {
                    cx: 400,
                    cy: 300,
                    r: 40
                },
                style: {
                    fill: '#fff',
                    stroke: '#F0F1F2'
                }
            }
        ]
    },
    series: [{
        name: '评论分析维度',
        type: 'pie',
        radius: [40, 150],
        center: [400, 300],
        roseType: 'area',
        labelLine: {
            normal: {
                show: false
            }
        },
        label: {
            normal: {
                show: false,
                position: 'center'
            }
        },
        data: [{
                value: 10,
                name: '使用感受'
            },
            {
                value: 1,
                name: '产品'
            },
            {
                value: 15,
                name: '使用场景'
            },
            {
                value: 25,
                name: '产品页面描述'
            },
            {
                value: 20,
                name: '用户信息'
            },
            {
                value: 35,
                name: '总体感受'
            },
            {
                value: 30,
                name: '卖家账号相关'
            }
        ]
    }]
};