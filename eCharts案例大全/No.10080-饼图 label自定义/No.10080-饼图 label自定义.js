option = {
        backgroundColor:'#000',
        color: ['#7F6AAD', '#FFB500 ', '#01C794', '#019D85', '#1F9BD1', 
            '#A0CE3A','#32C4C1'],
        legend: {
            show: true,
            top: "bottom",
            left: 'auto',
            orient: "horizontal",
            data: [],
            itemWidth: 50,
            itemHeight: 33,
            padding: [0, 5],
            itemGap: 25,
            textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: 32
                    }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        series: [{
            name: '',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '27%'],
			center:['50%','50%'],
            label: {
                normal: {
                    show: false,
                    position: 'inner',
                    formatter: '{b}/n{d}%',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: 20
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 100,
                    name: '0-5',
                    selected: true
                    },
                    {
                        value: 100,
                        name: '6-10'
                    },
                    {
                        value: 100,
                        name: '11-15'
                    },
                    {
                        value: 100,
                        name: '16-20'
                    },
                    {
                        value: 100,
                        name: '21-25'
                    },
                    {
                        value: 100,
                        name: '26-30'
                    },
                    {
                        value: 100,
                        name: '30年及以上'
                    }
            ]
        },
            {
                name: '',
                type: 'pie',
                radius: ['40%', '60%'],
                center:['50%','50%'],
                
                label: {
                    normal: {
                    	position:'outter',
                    	
                        formatter: '{d|{d}%}\n{b|{b}}\n',
                        rich: {
                            b: {
                                fontSize: 30,
                                color: '#AADAE5',
                                align: 'left',
                                padding: 4
                            },

                            d: {
                                fontSize: 34,
                                color: '#fff',
                                align: 'left',
                                padding: 0
                            },
                            c: {
                                fontSize: 20,
                                color: '#fff',
                                align: 'center',
                                padding: 0
                            }
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:40,
                        length2:10

                    }
                },
                data: [{
                    value: 100,
                    name: '0-5',
                    selected: true
                    },
                    {
                        value: 100,
                        name: '6-10'
                    },
                    {
                        value: 100,
                        name: '11-15'
                    },
                    {
                        value: 100,
                        name: '16-20'
                    },
                    {
                        value: 100,
                        name: '21-25'
                    },
                    {
                        value: 100,
                        name: '26-30'
                    },
                    {
                        value: 100,
                        name: '30年及以上'
                    }
                ]
            }
        ]
    };