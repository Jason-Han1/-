option = {
    backgroundColor: '#0A2E5D',
    tooltip: {
        trigger: '广州市天河区摄像头覆盖情况分析',
    },
     title: {
        text: '广州市天河区摄像头覆盖情况分析',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    legend: {
        orient: 'vertical',
        right: 10,
        data: ['覆盖面积', '未覆盖面积'],
        textStyle:{
				color:'white',  //坐标的字体颜色
			}
    },
    color : [ 'red', 'orange',  'green', 'blue', 'indigo', 'purple' ],
    series: [{
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            center: ["50%", "50%"],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 1100,
                    name: '校园总面积'
                }
            ]
        },
        
        {
            name: '摄像头覆盖占比',
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
                {value: 920, name: '覆盖面积'},
                {value: 180, name: '未覆盖面积'}
            ]
        }
    ]
};