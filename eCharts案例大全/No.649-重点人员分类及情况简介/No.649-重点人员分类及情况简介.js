data = [{
    'name': '涉疆',
    'value': 50
}, {
    'name': '涉赌',
    'value': 150
}, {
    'name': '涉娼',
    'value': 80
}, {
    'name': '黑灰产',
    'value': 260
}, {
    'name': '涉毒',
    'value': 150
}, {
    'name': '涉稳',
    'value': 140
}]

let color = ['RGBA(255, 143, 100, 1)', 'RGBA(174, 212, 252, 1)', 'RGBA(255, 205, 98, 1)', 'RGBA(96, 122, 209, 1)', 'RGBA(80, 205, 124, 1)', 'RGBA(245, 212, 56, 1)']
option = {
    color:color,
    tooltip: {
        trigger: 'item'
    },
    // legend: {
    //   bottom: '20%', 
    //   itemWidth: 10, 
    //   itemHeight: 10, 
    //   icon: 'circle',
    //   itemGap: 40,
    //   textStyle: {
    //     color: 'rgba(68, 68, 69, 1)',
    //     fontSize: '14',
    //   },
    // },
    series: [
        {
            type: 'pie',
            data:data,
            center: ['50%','50%'],
            radius: ['30%','45%'],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'outside',
                        color: color.map(item=>{
                            return item
                        }),
                        // padding: [0, -100, 0, -100],
                        fontSize: 13,
                        formatter: function(params) {
                            if (params.name !== '') {
                                return '{name|' + params.name + '}';
                            } else {
                                return '';
                            }
                            
                        },
                        rich: {
                            name: {
                                color: "rgba(137, 150, 180, 1)",
                                fontSize: 14,
                                align: 'center',
                                padding: [0, -100, 22, -100],
                            },
                        }
                    },
                    labelLine: {
                        length:27,
                        length2: 70,
                        show: true,
                        color: '#00ffff'
                    }
                }
            },
            name: '',
            hoverAnimation: false,
        }
    ]
};
