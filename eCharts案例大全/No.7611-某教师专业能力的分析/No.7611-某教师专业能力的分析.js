option = {
    backgroundColor: '#0A2E5D',
    tooltip: {
        trigger: '某教师专业能力的分析',
    },
     title: {
        text: '某教师专业能力的分析',
        left: 'center',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['实践应用知识的能力', '教育教学的能力', '自我学习能力'],
        textStyle:{
				color:'white',  //坐标的字体颜色
			}
    },
    color : [ 'red', 'orange',  'green', 'blue', 'indigo', 'purple' ],
    series: [
        
        {
            name: '分数占比',
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
                {value:89, name: '实践应用知识的能力'},
                {value: 95, name: '教育教学的能力'},
                {value: 90, name: '自我学习能力'}
            ]
        }
    ]
};