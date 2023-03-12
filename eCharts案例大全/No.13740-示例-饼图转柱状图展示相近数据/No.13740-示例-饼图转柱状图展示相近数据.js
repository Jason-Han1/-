option = {
    backgroundColor: "#fff",
    color: ["#37A2DA"],
    xAxis: [{
        type: 'category',
        show: true,
        "axisLabel": {
            fontSize: 18,
        },
        "axisLine": {
            lineStyle: {
                color: '#999',

            }
        },
        data: ['北京', '上海', '深圳', '杭州', '南京', '武汉'],
        axisPointer: {
            type: 'shadow'
        },
    }],

    yAxis: [{
            type: 'value',
             "axisLabel": {
            fontSize: 18,
        },
            "axisLine": {
                lineStyle: {
                    color: '#999'
                }
            },
            min: 0,
            max: 30,
            interval: 10,
           
        },

    ],
    series: [{

            type: 'bar',
            barWidth: '68%',
            data: [{
                    value: 28,

                },
                {
                    value: 24,

                },
                {
                    value: 19,

                }, {
                    value: 21,

                }, {
                    value: 17,

                },
                {
                    value: 15,

                },

            ]
        },


    ]
};