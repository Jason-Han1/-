option = {
    baseOption: {
        timeline: {
            axisType: 'category',

            autoPlay: true,

            playInterval: 1000,

            data: [
                '2015',
                //'2016', '2017', '2018', '2019'
            ],

        },
        legend: {},
        //  calculable: true,
        tooltip:{},
        grid: {
            top: 10,
            bottom: 100,
        },
        series: [{
                name: '投融资占比',
                type: 'pie',
                center: ['50%', '50%'],
                radius: '28%'
            }

        ]
    },

    options: [{
            title: {
                text: '2015'
            },
            series: [{
                data: [{
                        value: 335,
                        name: '直接访问'
                    },
                    {
                        value: 310,
                        name: '邮件营销'
                    },
                    {
                        value: 234,
                        name: '联盟广告'
                    }
                ]
            }]
        }
    ]








};