app.title = '嵌套环形图';

option = {
    color: ['#558BFF', '#0C4CB5', '#A1D4FF', '#6BA0FF'],
    // backgroundColor: '#fff',
    // tooltip: {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b}: {c} ({d}%)"
    // },
    // legend: {
    //     orient: 'vertical',
    //     x: 'left',
    //     data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    // },
    series: [{
        name: '访问量',
        type: 'pie',
        roseType: 'area',
        radius: ['20%', '45%'],
        label: {
            normal: {
                position: 'outside',
                formatter: ' {b|{b}}\n  {per|{d}%}  ',
                // backgroundColor: 'rgb(5,13,2)',
                // borderColor: '#00FFFF',
                // borderWidth: 1,
                // borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#00FFFF',
                padding: [0, 2],
                rich: {

                    b: {
                        color: '#47453D',
                        fontWeight: '350',
                        fontSize: 20,
                        lineHeight: 26
                    },
                    per: {
                        color: '#47453D',
                        fontSize: 20,
                        fontWeight: 'bold',
                        // backgroundColor: '#334455',
                        padding: [2, 4],
                        // borderRadius: 2
                    }
                }
            }
        },

        itemStyle: {
            normal: {
                shadowBlur: 0
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 10,
                length2: 20,
                smooth: 0,
                lineStyle: {
                    width: 1,
                    type: 'solid',
                    color: '#FFA02F'
                }

            }
        },
        data: [{
                value: 17.34,
                name: '家居清洁健康电器'
            },
            {
                value: 11.73,
                name: '核心部件'
            },
            {
                value: 70.15,
                name: '环保清洁电器'
            },
            {
                value: 78,
                name: '其他业务'
            },

        ]
    }]
};