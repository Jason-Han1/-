option = {
    backgroundColor: 'black',
    title: {
        text: '标题',
        x: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: 'white',
            fontSize: 18
        },
    },
    color: ['#f69846', '#00ffb4', '#44aff0', '#f6d54a', '#45dbf7',
        '#ad46f3', '#f845f1', '#ff4343', '#ffa800', '#39E7FB', '#FAC901',
    ], //饼图颜色

    tooltip: { //弹框
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    legend: {
        orient: 'horizontal', //horizontal横向，vertical纵向
        x: 'center',
        y: 'bottom',
        data: ['直接访问', '邮件营销', '联盟广告'],
        textStyle: {
            color: 'white'
        }
    },
    series: [{
        name: '访问总数',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '50%'], //调整中间字的大小
        center: ['50%', '50%'], //调整中间字的位置
        avoidLabelOverlap: false,
        color: 'black', //调整中间的背景
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: function(argument) {
                    var html;
                    html = 1000;
                    return html;
                },
                textStyle: {
                    fontSize: 50,
                    color: '#0FF'
                }
            }

        },
        data: [{
            value: 1000,
            name: '总数'
        }, ]
    }, {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'], //调整饼图大小
        center: ['50%', '50%'], //调整饼图位置
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true, //表示文字是否显示
                textStyle: {
                    fontSize: 18
                }
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            show: true //表示线是否显示
        },
        data: [{
                value: 335,
                name: '直接访问'
            },
            {
                value: 310,
                name: '邮件营销'
            },
            {
                value: 234,
                name: '联盟广告'
            },
        ]
    }]
};