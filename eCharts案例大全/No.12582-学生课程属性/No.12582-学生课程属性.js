option = {
    backgroundColor: '#141845',
    title: {
        text: '学生课程属性',
        textStyle: {
            color: '#fff'
        }
    },
    color: ['#37A2DA', '#32C4E9', '#9FE7B9', '#37A2DA', '#FF9F7F', '#FF9F7F', '#FC7293', '#E7BCF2'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable: true,
    series: [{
        name: '信息',
        type: 'pie',
        radius: [40, 150],

        roseType: 'area',
        data: [{
                value: 10,
                name: '语文'
            },
            {
                value: 5,
                name: '体育'
            },
            {
                value: 15,
                name: '思修'
            },
            {
                value: 25,
                name: '高数'
            },
            {
                value: 20,
                name: '体育'
            },
            {
                value: 35,
                name: '计算机'
            },
            {
                value: 30,
                name: '心理学'
            }
        ],
        labelLine: {
            normal: {
                length: 0, // 改变标示线的长度
                lineStyle: {
                    color: "#fff" // 改变标示线的颜色
                }
            },
        },
        label: {
            normal: {
                textStyle: {
                    color: '#fff' // 改变标示文字的颜色
                }
            }
        }
    }]
};