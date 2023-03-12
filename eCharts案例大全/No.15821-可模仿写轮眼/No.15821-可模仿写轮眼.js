option = {
    backgroundColor: '#000000',
    series: (function() {
        var series = [];
        for (var i = 0; i < 100; i++) {
            series.push({
                type: 'pie',
                itemStyle: {
                    normal: {
                        label: {
                            show: i > 98,
                            textStyle: {
                                color: '#000',
                                fontSize: 20
                            },
                            formatter: '{b}\n({d}%)'
                        },
                        labelLine: {
                            show: i > 6668,
                            length: 20,
                            smooth: 0.9,
                            lineStyle: {
                                color: '#000'
                            }
                        },
                        opacity: 1 - 0.009 * i
                    }
                },
                radius: [i * 1 + 50, i * 1 + 56],
                data: [{
                    value: i + 1024,
                    name: 's1',
                    itemStyle: {
                        normal: {
                            color: '#af000c'
                        }
                    }
                }, {
                    value: i + 512,
                    name: 's2',
                    itemStyle: {
                        normal: {
                            color: '#bf111e'
                        }
                    }
                }, {
                    value: i + 256,
                    name: 's3',
                    itemStyle: {
                        normal: {
                            color: '#ce2531'
                        }
                    }
                }, {
                    value: i + 128,
                    name: 's4',
                    itemStyle: {
                        normal: {
                            color: '#e13a46'
                        }
                    }
                }, {
                    value: i + 64,
                    name: 's5',
                    itemStyle: {
                        normal: {
                            color: '#f5545f'
                        }
                    }
                }]
            })
        }
        return series;
    })()
};