
var color = ['#61a0a8', '#F87D7C', '#41E1FF', '#55D5B5', '#616BA6', '#6978F2', '#3769F4', '#01FFFF', '#FEDF00']
option = {
    backgroundColor:'#021434',
      title: {
        text: '2019年广州中学高考达线人数分析',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    color: color,
    legend: {
        orient: 'vertical',
        right: 5,
        top: '10%',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 15,
        textStyle: {
            color: '#ACCFFF',
            fontSize: 12,
        },
        data: ['一本', '二本', '专科','考生数量']
    },
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
                    value: 910,
                    name: '考生数量'
                }
            ]
        },
        
        {
            name: '达线人数',
            type: 'pie',
            radius: ['40%', '45%'],
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
                {value: 125, name: '专科'}
            ]
        }
    ]
};