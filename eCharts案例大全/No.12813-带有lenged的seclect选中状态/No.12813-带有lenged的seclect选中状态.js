
option = {
    backgroundColor: '#031845',
    series: [{
        type: 'pie',
        // radius: ['40%', '50%'],
        center: ['50%', '50%'],
        color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
        data: [{
                value: 335,
                name: '大理石',
                 selected:true
            },
            {
                value: 310,
                name: '仿古'
            },
            {
                value: 234,
                name: '外墙'
            },
            {
                value: 235,
                name: '瓷片'
            },
            {
                value: 254,
                name: '抛光'
            },
            {
                value: 174,
                name: '木纹'
            }
        ],
        labelLine: {
            normal: {
                show: false,
                // length: 40,
                // length2: 10,
                // lineStyle: {
                //     color: '#12EABE',
                //     width: 2
                // },
                // emphasis:{
                //     show:true,
                // }
            }
        },
        label: {
            normal: {
                //formatter: '{b|{b}}\n{hr|}\n{c|{c}} {d|{d}%}',
                formatter: '{d|{d}%}\n{hr|}\n{b|{b}}',
                rich: {
                    b: {
                        fontSize: 14,
                        color: '#12EABE',
                        align: 'center',
                        padding: 10,
                    },
                    hr: {
                        borderColor: '#12EABE',
                        width: '100%',
                        borderWidth: 5,
                        height: 0,
                        
                    },
                    d: {
                        backgroundColor: '#334455',
                        padding: [5,4,4, 4],
                        borderRadius: 2,
                        fontSize: 18,
                        color: '#fff',
                        align: 'left',
                    },
                   
                }
            },
            
        },

    }]
};