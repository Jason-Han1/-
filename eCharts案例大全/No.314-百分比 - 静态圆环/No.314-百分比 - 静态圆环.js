let value = 60.72;
option = {
    backgroundColor: '#000E1A',
    title: {
        text: '{a|' + value + '%' + '}\n{c|设备达标率}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 60,
                    color: '#7DB2FF',
                    padding: 5,
                },

                c: {
                    fontSize: 30,
                    color: '#E7E9FF',
                    padding: 5,
                },
            },
        },
    },

    series: [
        {
            type: 'pie',
            radius: ['52%', '40%'],
            silent: true,
            clockwise: true,
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: value,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: {
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#3CDDFF', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#4084FF', // 100% 处的颜色
                                    },
                                ],
                            },
                        },
                    },
                },
                {
                    value: 100 - value,
                    name: '',
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#777777', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.3,
                                        color: '#444444', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.6,
                                        color: '#222222', // 100% 处的颜色
                                    },
                                ],
                            },
                        },
                    },
                },
            ],
        },
    ],
};
