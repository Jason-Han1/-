
option = {
    series: [
        {
            name: '机构名称',
            animation: false,
            type: 'pie',
            radius: ['40%', '55%'],
            // selectedOffset: 30,
            color: ['#2B70FB', '#70DEFD', '#7231D1', '#FB59E6', '#FADE40'],
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 20,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    // rotate: 'number',
                    formatter: '{b|{b}}{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 20,
                            color: '#999',
                            align: 'left',
                            fontWeight: 'bold',
                            padding: 4
                        },
                        d: {
                            fontSize: 20,
                            color: '#999',
                            align: 'left',
                            fontWeight: 'bold',
                            padding: 4
                        }
                    }
                }
            },
            data: [{
                    value: 60,
                    name: '机构A'
                },
                {
                    value: 20,
                    name: '机构B'
                },
                {
                    value: 20,
                    name: '机构C'
                },
                {
                    value: 15,
                    name: '机构D'
                },
                {
                    value: 18,
                    name: '机构E'
                }
            ]
        }
    ]
};