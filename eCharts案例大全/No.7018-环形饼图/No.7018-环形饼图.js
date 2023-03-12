
option = {
    color:['#06fff4', '#08ff98', '#e6fa82', '#fbbc81', '#fe9b8e'],
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['50%', '70%'],
        hoverOffset: 0,
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            
            rich: {
                hr: {
                    backgroundColor: 't',
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    fontSize:25,
                    padding: [-30, 15, -20, 15]
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 40,
                lineStyle: {
                    width: 2
                }
            }
        },
        data: [
            {value: 123, name: '一年以内'},
            {value: 102, name: '1-2年'},
            {value: 122, name: '2-4年'},
            {value: 137, name: '4-6年'},
            {value: 109, name: '6年以上'}
        ]
    }]
};