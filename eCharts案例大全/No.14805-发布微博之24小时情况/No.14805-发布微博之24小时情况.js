option = {
    title: {
        text: '发布微博之24小时情况',
        //subtext: '南丁格尔玫瑰图',
        // 老树微博，三千诗与画
        // https://zhuanlan.zhihu.com/p/28989690
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        /*data: ['1点 14', '2点 4', '3点 1', '6点 3', '7点 25', '8点 79',
            '9点 147', '10点 161', '11点 244', '12点 334', '13点 246',
            '14点 213', '15点 232', '16点 257', '17点 265', '18点 317',
            '19点 189', '20点 164', '21点 145', '22点 158',
            '23点 145', '0点 52'
        ]*/
    },
    toolbox: {
        show: true,
        feature: {
            /*mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },*/
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: [{
        name: '半径模式',
        type: 'pie',
        radius: [40, 150],
        center: ['50%', '50%'],
        roseType: 'radius',
        data: [{
                value: 14,
                name: '1点 14'
            }, {
                value: 4,
                name: '2点 4'
            }, {
                value: 1,
                name: '3点 1'
            }, {
                value: 3,
                name: '6点 3'
            }, {
                value: 25,
                name: '7点 25'
            }, {
                value: 79,
                name: '8点 79'
            }, {
                value: 147,
                name: '9点 147'
            }, {
                value: 161,
                name: '10点 161'
            }, {
                value: 244,
                name: '11点 244'
            }, {
                value: 334,
                name: '12点 334'
            }, {
                value: 246,
                name: '13点 246'
            }, {
                value: 213,
                name: '14点 213'
            }, {
                value: 232,
                name: '15点 232'
            }, {
                value: 257,
                name: '16点 257'
            }, {
                value: 265,
                name: '17点 265'
            }, {
                value: 317,
                name: '18点 317'
            }, {
                value: 189,
                name: '19点 189'
            }, {
                value: 164,
                name: '20点 164'
            }, {
                value: 145,
                name: '21点 145'
            }, {
                value: 158,
                name: '22点 158'
            }, {
                value: 145,
                name: '23点 145'
            }, {
                value: 52,
                name: '0点 52'
            },


        ]
    }]
};