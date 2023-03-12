option = {
    backgroundColor: "rgba(0,0,0,0.4)",
    color: ['#2edfa3', '#bce672', '#ff4777', '#70f3ff', '#4b5cc4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        icon: 'circle',
        bottom: 20,
        x: 'center',
        textStyle: {
            color: '#fff'
        },
       
        data: ['安全教育','实操培训','日常培训','VR虚拟显示培训'],
    },
    series: [{
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '38%'],

            label: {
                normal: {
                    show: false,
                    position: 'inner',
                    formatter: '{d}%',
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
            data: [
                {
                    value: 90,
                    name: '安全教育'
                },
                {
                    value: 100,
                    name: '实操培训'
                },
                {
                    value: 100,
                    name: '日常培训'
                },
                {
                    value: 100,
                    name: 'VR虚拟显示培训'
                }
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '42%'],
            label: {
                normal: {
                    formatter: '{b|{b}}\n{hr|}\n{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 20,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 20,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize: 20,
                            color: '#fff',
                            align: 'center',
                            padding: 4
                        }
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 20,
                    lineStyle: {
                        type: 'dashed',
                        width: 2
                    }
                }
            },
            data: [
                {
                    value: 90,
                    name: '安全教育'
                },
                {
                    value: 100,
                    name: '实操培训'
                },
                {
                    value: 100,
                    name: '日常培训'
                },
                {
                    value: 100,
                    name: 'VR虚拟显示培训'
                }

            ]
        }
    ]
};