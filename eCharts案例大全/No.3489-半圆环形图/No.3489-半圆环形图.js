var data = {
    value: 76,
    name: '违章比'
};
option = {
    backgroundColor: '#0B2C6F',
    title: {

    },
    series: [
        {
                type: 'pie',
                label: {
                    show: false
                },
                center: ['50%', '50%'],
                radius: ['50%', '70%'],
                startAngle: 180,
                data: [
                    {
                        name: '用量',
                        value: 25,
                        itemStyle: {
                            color: '#ff9900'
                        }
                    },
                    {
                        name: 'rest',// 实际显示部分是总量-用量
                        value: 75,
                        itemStyle: {
                            color: 'skyblue'
                        }
                    },
                    {
                        name: 'bottom',
                        value: 100,
                        itemStyle: {
                            color: 'transparent'
                        }
                    },
                ]
            }
        ]
};