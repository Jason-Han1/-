 option = {
                series: [
                    {
                        type: 'gauge',
                        startAngle: 180,
                        endAngle: 0,
                        min: 0,
                        max: 450,
                        splitNumber: 4,
                         center: ['50%', '70%'],
                        itemStyle: {
                            color: '#29DBFC',
                            shadowColor: 'rgba(0,138,255,0.45)',
                            shadowBlur: 10,
                            shadowOffsetX: 2,
                            shadowOffsetY: 2,
                        },
                        progress: {
                            show: true,
                            roundCap: true,
                            width: 12,
                        },
                        pointer: {
                            icon:
                                'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                            length: '75%',
                            width: 8,
                            offsetCenter: [0, '5%'],
                        },
                        axisLine: {
                            roundCap: true,

                            lineStyle: {
                                width: 12,
                                color: [
                                    [0.3, '#363F66'],
                                    [0.7, '#363F66'],
                                    [1, '#363F66'],
                                ],
                            },
                        },
                        axisTick: {
                            splitNumber: 8,
                            distance: -30,
                            length: 6,
                            lineStyle: {
                                width: 1,
                                color: [
                                    [0.3, '#363F66'],
                                    [0.7, '#363F66'],
                                    [1, '#363F66'],
                                ],
                            },
                        },
                        splitLine: {
                            splitNumber: 4,
                            length: 12,
                            distance: -35,

                            lineStyle: {
                                width: 2,
                                color: '#29DBFC',
                            },
                        },
                        axisLabel: {
                            distance: -30,
                            color: '#29DBFC',
                            fontSize: 14,
                            splitNumber: 4,
                            lineStyle: {
                                color: '#363F66',
                            },
                            formatter: function (v) {
                                var max = 450;
                                var m1 = max / 2;
                                switch (v + '') {
                                    case '0':
                                        return '0';
                                    case '225':
                                        return '225';

                                    case '450':
                                        return '450';
                                }
                            },
                        },
                        title: {
                            show: false,
                        },
                        detail: {
                            width: '60%',
                            lineHeight: 40,
                            height: 40,
                            borderRadius: 8,
                            offsetCenter: [0, '20%'],
                            valueAnimation: true,
                            fontSize: 14,
                            color: '#000',
                            formatter: function (value) {
                                return 'A相';
                            },
                        },
                        data: [
                            {
                                value: 100,
                            },
                        ],
                    },
                ],
            };

            