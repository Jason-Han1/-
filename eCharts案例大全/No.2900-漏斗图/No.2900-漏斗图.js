            var colorList = [
                new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(74, 194, 154, 1)'
                },
                    {
                        offset: 1,
                        color: 'rgba(189, 255, 243, 1)'
                    }]),
                new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(247, 151, 30, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(255, 210, 0, 1)'
                }]),
                new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(86, 204, 242, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(47, 128, 237, 1)'
                }])];
            option = {
                calculable: true,
                color: colorList,
                series: [
                    {
                        name: '漏斗图',
                        type: 'funnel',
                        left: '5%',
                        right: '35%',
                        top: '10%',
                        bottom: '10%',
                        minSize: '0%',
                        maxSize: '40%',
                        sort: 'ascending',
                        gap: 10,
                        label: {
                            show: true,
                            formatter: "{a|{c}}\n{b|{b}}",
                            rich: {
                                a: {
                                    color: 'rgba(222,240,255,1)',
                                    fontSize: 30
                                },
                                b: {
                                    color: 'rgba(101,166,196,1)',
                                    fontSize: 14
                                }
                            }
                        },
                        labelLine: {
                            length: 200,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        },
                        itemStyle: {  //去掉默认白色边框线
                            borderWidth: 0,
                            borderColor: '#fff'
                        },
                        data: [
                            {value: 1, name: '容积率1'},
                            {value: 2, name: '容积率2'},
                            {value: 3, name: '容积率3'},
                        ]
                    }
                ]
            };