option = {
     title: {
        text: '某年级某班成绩统计',
        left: 'center'
    },
    tooltip: {
        trigger: '某年级某班考试成绩统计',
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['满分', '优秀', '良好', '一般', '及格', '不及格']
    },
    series: [
        
        {
            name: '成绩占比',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 16,
                        lineHeight: 33
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            data: [
                {value: 12, name: '满分'},
                {value: 148, name: '优秀'},
                {value: 234, name: '良好'},
                {value: 135, name: '一般'},
                {value: 90, name: '及格'},
                {value: 45, name: '不及格'}
            ]
        }
    ]
};