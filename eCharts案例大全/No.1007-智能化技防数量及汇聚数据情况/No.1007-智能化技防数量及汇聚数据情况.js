data = [{
    'name': '超级卡口',
    'value': 23460
}, {
    'name': '车辆',
    'value': 1464
}, {
    'name': '电子警察',
    'value': 1464
}, {
    'name': '人像',
    'value': 5464
}]

let color = ['rgba(69, 188, 238, 1)', 'rgba(120, 100, 239, 1)', 'rgba(255, 107, 100, 1)', 'rgba(255, 173, 77, 1)']

option = {
    color:color,
    tooltip: {
        trigger: 'item'
    },
    legend: {
      bottom: '20%', 
      itemWidth: 10, 
      itemHeight: 10, 
      icon: 'circle',
      itemGap: 40,
      textStyle: {
        color: 'rgba(68, 68, 69, 1)',
        fontSize: '14',
      },
    },
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
                        padding: [0, -100, 0, -100],
                        fontSize: 13,
                        formatter: function(params) {
                            if (params.name !== '') {
                                return '{percent|' + params.value+'}\n{cir'+params.dataIndex+'|●}\n{name|' + params.name + '}';
                            } else {
                                return '';
                            }
                            
                        },
                        rich: {
                            name: {
                                color: "rgba(36, 36, 36, 1)",
                                fontSize: 13,
                                align: 'center'
                            },
                            percent: {
                                fontFamily: 'DIN',
                                fontWeight: 500,
                                fontSize: 22,
                                color: '#1D91F5',
                                align: 'center'
                            },
                            cir0: {
                                fontSize: 15,
                                opacity: 1,
                                color: 'rgba(69, 188, 238, 1)',
                                padding:[-5, 92, 0, 92]
                            },
                            cir1: {
                                fontSize: 15,
                                opacity: 1,
                                color: 'rgba(120, 100, 239, 1)',
                                padding:[-5, 92, 0, 92]
                            },
                            cir2: {
                                fontSize: 15,
                                opacity: 1,
                                color: 'rgba(255, 107, 100, 1)',
                                padding:[-5, 92, 0, 92]
                            },
                            cir3: {
                                fontSize: 15,
                                opacity: 1,
                                color: 'rgba(255, 173, 77, 1)',
                                padding:[-5, 92, 0, 92]
                            }
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
