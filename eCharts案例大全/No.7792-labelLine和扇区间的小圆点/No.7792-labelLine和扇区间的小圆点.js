var arr = [{
        value: 123,
        name: '丙烯腈'
    },
    {
        value: 102,
        name: '环氧乙烷'
    },
    {
        value: 122,
        name: '非甲烷总烃'
    },
    {
        value: 137,
        name: '氯乙烯'
    },
    {
        value: 109,
        name: '氯乙烷'
    },
    {
        value: 111,
        name: '甲苯'
    }

];
option = {
    title: {
        text: 'PM2.5含量',
        subtext: '50%',
        x: 'center',
        y: 'center',
        textStyle: {
            color: "blue",
            fontSize: 15
        },
    },
    series: [{
            // label
            type: 'pie',
            radius: ['40%', '55%'],
            minAngle: 90,
            label: {
                margin: 0,
                alignTo: 'edge',
                formatter: '{a|{b}：{d}%}\n',
                rich: {
                    a: {
                        padding: [-30, 15, -20, 15]
                    }
                }
            },
            itemStyle: {
                opacity: 0
            },
            data: arr,
        },
        {
            // 小圆点
            type: 'pie',
            radius: ['40%', '55%'],
            minAngle: 90,
            label: {
                show: true,
                formatter: '{hr|}',
                rich: {
                    hr: {
                        backgroundColor: ' ',
                        borderRadius: 3,
                        width: 3,
                        height: 3,
                        padding: [3, 3, 0, -12]
                    },
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 0,
                    length2: 0,
                }
            },
            itemStyle: {
                opacity: 0
            },
            data: arr,
        },
        // 扇区
        {
            type: 'pie',
            radius: ['40%', '50%'],
            minAngle: 90,
            label: {
                margin: 0,
                alignTo: 'edge',
                show: false,
            },
            labelLine: {
                show: false
            },
            data: arr,
        }
    ]
};