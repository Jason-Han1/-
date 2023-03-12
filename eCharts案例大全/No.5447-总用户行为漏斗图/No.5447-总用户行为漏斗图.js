var percent = [
        {value: 100, name: '点击', num: 23334686 },
        {value: 3.24, name: '收藏', num: 756141 },
        {value: 6.2, name: '加购', num: 1447148 },
        {value: 2.24, name: '购买', num: 523833 },
    ];   
option = {
    title: {
        text: '总用户行为漏斗图'
    },
    legend: {
        bottom:40,
        data:  ['点击','收藏','加购','购买']
    },
    series: [
        {
            name: '',
            type: 'funnel',
            left: '10%',
            width: '80%',
            gap: 10,
            minSize: '0%',
            maxSize: '100%',
            label: {
                show:false
            },
            labelLine:{
                length: 100,
                show:false
            },
            data: [
                {value: 1447148, name: '加购', 
                    itemStyle: {
                        color: '#4da7db'
                    }
                },
                {value: 756141, name: '收藏',
                     itemStyle: {
                        color: '#4e99de'
                    },
                     
                },
                {value: 523833, name: '购买',
                     itemStyle: {
                        color: '#0083c7'
                    },
                    
                },
                {value: 23334686, name: '点击',
                     itemStyle: {
                        color: '#53b8e2'
                    }
                }
            ]
        },
        {
            name: '',
            type: 'funnel',
            gap: 10,
            label: {
                normal: {
                    position: 'inside',
                    formatter: function (params) {   
                        return params.data.name + '数 : ' + params.data.num + '\n\n' + params.data.value+'%';
                    },
                    textStyle: {
                        color: '#333',
                        fontSize:16
                    }
                }
              
            },
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth:0,
                    opacity: 0
                }
            },
            data: percent
        }
    ]
};
