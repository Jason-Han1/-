option = {
    backgroundColor: '#fff',
    color:  ['#84B7FF', '#4A95FF', '#217AF9', '#0A5BCE','#0A5B3E'],

    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 23, name: '直接访问'},
                {value: 27, name: '邮件营销'},
                {value: 36, name: '联盟广告'},
                {value: 11, name: '视频广告'},
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: '#666666',
                formatter: '{b|{b}}：\n {c|{c}%}',
                  rich: {
                    b: {
                        fontSize: 12,
                        lineHeight: 20,
                        color: '#666',
                       align: 'right'
                    },
                    c: {
                       color: '#666',
                        padding: [0, 0],
                         align: 'left',
                         width:60
                    }
                }
            },
          labelLine: {
            lineStyle: {
                color: '#999'
            }
        },
        }
    ]
};