option = {
    // tooltip: {
    //     trigger: 'item',
    //     formatter: "{b} : {d}% <br/> {c}"
    // },
    series: [{
        type: 'pie',
       radius: ['50%', '60%'],
        center: ['50%', '50%'],
        color: ['#9831e8', '#6753ff', '#458dfe', '#17e88b', '#ffdf25', '#fa2a71','#ff74ea'],
        data: [{
                value: 30,
                name: '脚手架工程'
            },
            {
                value: 10,
                name: '起重吊装及安装拆卸工程'
            },
            {
                value: 20,
                name: '模板工程及支撑体系'
            },
            {
                value: 50,
                name: '土方开挖工程'
            },
            {
                value: 100,
                name: '其他'
            },
            {
                value: 24,
                name: '基坑支护、降水工程'
            },
            {
                value: 50,
                name: '拆除、爆破工程'
            }
        ],
        labelLine: {
            normal: {
                show: true,
                length: 0,
                length2: 15,
                lineStyle: {
                    width: 2
                }
            }
        },
        label: {
            normal: {
                formatter: '{c|{b}}:{d|{d}%}',
                rich: {
                   
                    hr: {
                        // borderColor: '#12EABE',
                        width: '100%',
                        borderWidth: 2,
                        height: 0
                    },
                    d: {
                        fontSize: 20,
                        align: 'left',
                        padding: 4
                    },
                    c: {
                        fontSize: 20,
                        align: 'left',
                        padding: 4
                    }
                }
            }
        }
    }]
};