var percent = 30;

option = {
    // title: {
    //     text: (percent / 100 * 100) + '%',
    //     subtext: '完成率',
    //     x: 'center',
    //     y: '45%',
    //     textStyle: {
    //         color: '#f2c967',
    //         fontSize: 44
    //     },
    //     subtextStyle: {
    //         color: '#3da1ee',
    //         fontSize: 36
    //     }
    // },
    series: [
        {
            type: 'pie',
            radius: ['28%', '33%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                name: '',
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#3da1ee',
                        shadowBlur: 2,
                        shadowColor: '#3da1ee'
                    }
                }
            }],
            zlevel: 1
        }, 
        {
            name: 'main',
            type: 'pie',
            radius: ['25%', '42%'],
            data: [
                {
                    name: '完成率',
                    value: percent,
                    label: {
                        show: true,
                        position: 'center',
                        fontSize: 40,
                        formatter: '{d}% \n完成率'
                    },
                    labelLine: {show: false},
                    itemStyle: {
                        normal: {
                            color: '#f2c967',
                            shadowBlur: 10,
                            shadowColor: '#f2c967'
                        }
                    }
                },
                {
                    value: 100 - percent,
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
            ],
            zlevel: 2
        }
    ]
};