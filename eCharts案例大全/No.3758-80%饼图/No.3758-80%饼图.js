option = {
    backgroundColor: "#03141c",
    title: [{
            text: "80%",
            x: 'center',
            y: 'center',
            textStyle: {
                color: "#fff",
                fontSize: 75,
                fontWeight: 'normal',
                fontFamily: 'DINCondensed-Bold'
            }
        },
        {
            text: "企业",
            left: '47%',
            top: '55%',
            textStyle: {
                color: "#fff",
                fontSize: 19,
                fontWeight: 'normal',
            }
        }
    ],
    calculable: true,
    series: [

        {
            name: '1',
            type: 'pie',
            radius: [100, 130],
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: false,
                },
            },
            data: [{
                    value: 52,
                    name: '',
                    itemStyle: {
                        color: '#31DBBE'
                    },
                },
                {
                    value: 34,
                    name: '',
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            name: '2',
            type: 'pie',
            radius: [105, 125],
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: false,
                },
            },
            data: [{
                    value: 52,
                    name: '',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 34,
                    name: '',
                    itemStyle: {
                        color: '#FDC86A'
                    },
                }
            ]
        }
    ]
};