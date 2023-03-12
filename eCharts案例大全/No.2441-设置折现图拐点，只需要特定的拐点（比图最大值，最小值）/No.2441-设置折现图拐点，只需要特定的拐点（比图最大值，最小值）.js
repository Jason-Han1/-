//或者 使用这个 https://www.makeapie.com/editor.html?c=xswA2cGbQM  这个利用symbol函数实现可以自己选择
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [
                {
                    value: 9,
                    symbolSize: 8, //拐点大小

                    itemStyle: {
                        normal: {
                            color: 'red',
                            borderColor: 'red', //拐点边框颜色
                        },
                    },
                },
                {
                    value: 20,
                    symbol: 'none', //拐点样式 不显示
                },
                {
                    value: 15,
                    symbol: 'none', //拐点样式 不显示
                },
                {
                    value: 9,
                    symbol: 'none', //拐点样式 不显示
                },
                {
                    value: 20,
                    symbolSize: 8, //拐点大小
                    itemStyle: {
                        normal: {
                            color: 'red',
                            borderColor: 'red', //拐点边框颜色
                        },
                    },
                },
                {
                    value: 10,
                    symbol: 'none', //拐点样式 不显示
                },
                {
                    value: 15,
                    symbol: 'none', //拐点样式 不显示
                },
            ],
            type: 'line',
        },
    ],
};
