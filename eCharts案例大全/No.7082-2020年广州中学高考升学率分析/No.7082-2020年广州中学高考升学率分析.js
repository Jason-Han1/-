option = {
    backgroundColor: '#0A2E5D',
    tooltip: {
        trigger: '2020年广州中学高考升学率分析',
    },
     title: {
        text: '2020年广州中学高考升学率分析',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    legend: {
        orient: 'vertical',
        right: 10,
        data: ['一本', '二本', '专科'],
        textStyle:{
				color:'white',  //坐标的字体颜色
			}
    },
    color : [ 'red', 'orange',  'green', 'blue', 'indigo', 'purple' ],
    series: [
        
        {
            name: '升学人数',
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
                {value: 540, name: '一本'},
                {value: 245, name: '二本'},
                {value: 76, name: '专科'}
            ]
        }
    ]
};