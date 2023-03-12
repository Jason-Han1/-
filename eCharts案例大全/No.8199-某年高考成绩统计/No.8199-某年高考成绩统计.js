option = {
    backgroundColor: '#0A2E5D',
     title: {
        text: '某年高考成绩统计',
        left: 'center',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['一本达线人数', '二本达线人数']
    },
    series: [
        {
            name: '考生数量',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 645, name: '考生数量', selected: true}
               
            ]
        },
        {
            name: '达线率',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
               
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                   
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
                {value: 335, name: '一本'},
                {value: 310, name: '二本'}
            ]
        }
    ]
};