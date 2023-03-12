var colors = ['#1D93DE', '#6BD7FF','#fff'];
        // option
option = {
    backgroundColor:'#000',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: '60%',
                top: '15%',
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 16,
                    font: 'Noto Sans SC',
                },
                data: ['一般', '良','优']
            },
            series: [
                {
                    name: '1',
                    type: 'pie',
                    clockWise: false,
                    center: ['60%', '50%'],
                    selectedMode: 'single',
                    radius: ['40%', '50%'],
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    color: '#1D93DE',
                    data: [
                        {
                            value: 563,
                            name: '优',
                        },
                        {
                            value: 437,
                            name: '',
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0
                            },
                            tooltip: {
                                show: false
                            },
                            hoverAnimation: false
                        },
                    ]
                },
                {
                    name: '2',
                    clockWise: false,
                    type: 'pie',
                    center: ['60%', '50%'],
                    radius: ['50%', '60%'],
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                        show: false
                    },
                    color: '#24FF60',
                    data: [
                        {
                            value: 400,
                            name: '良',

                        },
                        {
                            value: 137,
                            name: '',
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0
                            },
                            tooltip: {
                                show: false
                            },
                            hoverAnimation: false
                        },
                        
                    ]
                },
                {
                    name: '3',
                    clockWise: false,
                    type: 'pie',
                    center: ['60%', '50%'],
                    radius: ['60%', '70%'],
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                        show: false
                    },
                    color: '#DDB859',
                    data: [
                        {
                            value: 600,
                            name: '一般',

                        },
                        {
                            value: 137,
                            name: '',
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0
                            },
                            tooltip: {
                                show: false
                            },
                            hoverAnimation: false
                        },
                        
                    ]
                }
            ]
        }