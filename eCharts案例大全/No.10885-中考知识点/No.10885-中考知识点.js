    var data = [1650, 500, 500, 650];
    var lenName = ['掌握较好', '掌握一般', '未测试或掌握差'];
    option = {
        color: ['#70d76b', '#53aef5', '#ffbb72'],
        tooltip: {
            trigger: 'item',
            formatter: "{b} :<br/> {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'center',
            y: 'bottom',
            data: lenName,
            textStyle: {
                color: '#999'
            },
            itemWidth: 12,
            itemHeight: 12,
        },
        title: {
            text: data[0],
            textStyle: {
                color: '#333333',
                fontSize: 36
            },
            subtext: '中考知识点',
            subtextStyle: {
                color: '#999999',
                fontSize: 14
            },
            x: 'center',
            y: '27%',
        },
        series: [{
            name: '中考知识点',
            type: 'pie',
            radius: ['50%', '65%'],
            center: ['50%', '40%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: data[1],
                    name: '掌握较好'
                },
                {
                    value: data[2],
                    name: '掌握一般'
                },
                {
                    value: data[3],
                    name: '未测试或掌握差'
                },
            ]
        }]
    };