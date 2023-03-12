option = {
    backgroundColor: '#0A2E5D',
    tooltip: {
        trigger: '教师工资情况分析',
    },
     title: {
        text: '教师工资情况分析',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    legend: {
        orient: 'vertical',
        right: 10,
        data: ['3000元-3500元', '3500元-4000元', '4000元以上'],
        textStyle:{
				color:'white',  //坐标的字体颜色
			}
    },
    color : [  'purple','red', 'orange',  'green', 'blue', 'indigo' ],
    series: [
        
        {
            name: '人数占比',
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
                {value: 189, name: '3000元-3500元'},
                {value: 292, name: '3500元-4000元'},
                {value: 76, name: '4000元以上'}
            ]
        }
    ]
};