var datas = [ {
    'name': '警告',
    'value': 101
}, {
    'name': '次要',
    'value': 110
}, {
    'name': '主要',
    'value': 111
}, {
    'name': '严重',
    'value': 110
}]
var total_datas = 0;
for (var i = 0; i < datas.length; i++) {
    total_datas += datas[i].value
}

option = {
    color: ['#5690e7', '#7afbfc', '#fffc63', '#ea4840'],
    backgroundColor: '#012A5C',
    title: {
        text: '当前告警',
        subtext: total_datas,
        textStyle: {
            color: '#f2f2f2',
            fontSize: 40,
            align: 'center'
        },
        subtextStyle: {
            fontSize: 30,
            color: ['#ff9d19']
        },
        x: 'center',
        y: 'center',
    },
    grid: {
        bottom: 150,
        left: 100,
        right: '10%'
    },
    legend: {
        //bottom: "5%",
        textStyle: {
            color: '#f2f2f2',
            fontSize: 25,

        },
        icon: 'roundRect',
        data: datas,
    },
    tooltip: {
        formatter: "{a}：<br/>{b}: {c}条"
    },
    series: [
        // 主要展示层的
        {
            radius: ['30%', '50%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: true,
                    formatter: "{c}",
                    textStyle: {
                        fontSize: 30,

                    },
                    position: 'outside'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: true
                }
            },
            name: "告警情况",
            data: datas,

        }
        
    ]
};