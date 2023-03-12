option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['#FBBF2A', '#FFC42E', '#00DCAB', '#FF576B', '#53B4ED'],
    title: {
        text: '计费构成',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: "#FBBF2A",
        }
    },
    series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['35%', '23%'], //内饼图
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 10,
                    borderColor: '#FCE379'
                }
            },
            data: [{
                    value: 50,
                    name: '搜索引擎'
                },
                {
                    value: 50,
                    name: '搜索引擎'
                }

            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['37%', '55%'], //外饼图
            label: {
                normal: {
                    show: false, //是否显示文字
                    // position: 'inner',
                    formatter: '{a}\n{d}%',
                    textStyle: {
                        color: '#666',
                        fontWeight: 'bold',
                        fontSize: 14
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: { //每个环之间的间隔
                    borderWidth: 20,
                    borderColor: '#eee' //需要和背景色一致
                }
            },
            data: [{
                    value: 20,
                    name: '邮件营销'
                },
                {
                    value: 13,
                    name: '联盟广告'
                },
                {
                    value: 28,
                    name: '视频广告'
                },
                {
                    value: 40,
                    name: '百度'
                }
            ]
        }
    ]
};