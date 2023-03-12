app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        show: false,
        x: 'left',
        data: ['视频广告', '百度', '谷歌', '必应', '其他']
    },
    series: [

        {
            name: '访问来源',
            type: 'pie',
            radius: ['30%', '55%'],
            labelLine: {
                normal: {
                    length: 20,
                    length2: 50,
                    lineStyle: {
                        color: '#333'
                    }
                }

            },
            label: {
                normal: {
                    formatter: '{a|{d}%}\n{b|{b}}',
                    borderWidth: 0,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    padding: [0, -50],
                    rich: {
                        a: {
                            color: '#333',
                            fontSize: 16,
                            lineHeight: 20
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#333',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 20,
                            color: '#333'
                        }
                        // per: {
                        //     color: '#333',
                        //     padding: [2, 4],
                        //     borderRadius: 2
                        // }
                    }
                }
            },
            data: [{
                value: 135,
                name: '视频广告'
            }, {
                value: 1048,
                name: '百度'
            }, {
                value: 251,
                name: '谷歌'
            }, {
                value: 147,
                name: '必应'
            }, {
                value: 102,
                name: '其他'
            }]
        }
    ]
};