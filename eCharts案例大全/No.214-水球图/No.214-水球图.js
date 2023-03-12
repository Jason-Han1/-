option = {
    title: {
        text: '水球图',
    },
    backgroundColor: '#151934',
    series: [{
            type: 'liquidFill',
            radius: '20%',
            color: ['#195ba6'],
            center: ['25%', '50%'],
            data: [0.4544, 0.4544, 0.4544, 0.4544, 0.4544],
            backgroundStyle: {
                borderWidth: 2,
                borderColor: '#1789fb',
                color: '#1c233f',
            },
            outline: {
                itemStyle: {
                    borderWidth: 5,
                    borderColor: '#1789fb',
                    borderType: 'dashed',
                }
            },
            label: {
                normal: { //此处没有生效，本地生效
                    textStyle: {
                        fontSize: 20,
                        color: '#e6e6e6',
                    },
                },
            },
        },
        {

            type: 'liquidFill',
            radius: '20%',
            color: ['#884046'],
            center: ['50%', '50%'],
            data: [0.6, 0.6, 0.6, 0.6, 0.6],
            backgroundStyle: {
                borderWidth: 2,
                borderColor: '#eb5c4d',
                color: '#1c233f',
            },
            outline: {
                itemStyle: {
                    borderWidth: 5,
                    borderColor: '#eb5c4d',
                    borderType: 'dashed',
                }
            },
            label: {
                normal: { // 同上
                    textStyle: {
                        fontSize: 20,
                        color: '#e6e6e6',
                    },
                },
            },

        },
        {

            type: 'liquidFill',
            radius: '20%',
            color: ['#8a7e4e'],
            center: ['75%', '50%'],
            data: [1, 1, 1, 1, 1],
            backgroundStyle: {
                borderWidth: 2,
                borderColor: '#f0d25c',
                color: '#1c233f',
            },
            outline: {
                itemStyle: {
                    borderWidth: 5,
                    borderColor: '#f0d25c',
                    borderType: 'dashed',
                }
            },
            label: {
                normal: { // 同上
                    textStyle: {
                        fontSize: 20,
                        color: '#e6e6e6',
                    },
                },
            },

        }
    ]
};