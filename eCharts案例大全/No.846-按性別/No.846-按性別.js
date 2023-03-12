data = [ {
    'name': '女',
    'value': 1874448
},{
    'name': '男',
    'value': 2210184
}]

let color = ['rgba(255, 89, 119, 1)', 'rgba(38, 171, 251, 1)']

option = {
    color:color,
    tooltip: {
        trigger: 'item'
    },
    title: {
        text: '按性別',
        top: '48%',
        textAlign: "center",
        left: "49%",
        textStyle: {
            color: 'rgba(0, 0, 0, 1)',
            fontSize: 14,
            fontWeight: '400',
            fontFamily: 'PingFangSC-Regular'
        }
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
                        padding: [0, -100, 0, -100],
                        fontSize: 13,
                        formatter: function(params) {
                            if (params.name !== '') {
                                return '{name|' + params.name + '}\n{cir'+params.dataIndex+'|●}\n{percent|' + params.value+'}';
                            } else {
                                return '';
                            }
                            
                        },
                        rich: {
                            name: {
                                color: "rgba(0, 0, 0, 1)",
                                fontSize: 14,
                                align: 'center',
                                fontFamily: 'PingFangSC-Regular',
                            },
                            percent: {
                                fontFamily: 'DIN',
                                fontWeight: 500,
                                fontSize: 20,
                                color: 'rgba(37, 168, 250, 1)',
                                align: 'center'
                            },
                            cir0: {
                                fontSize: 15,
                                opacity: 1,
                                color: 'rgba(255, 89, 119, 1)',
                                padding:[10, 92, 0, 92]
                            },
                            cir1: {
                                fontSize: 15,
                                opacity: 1,
                                color: 'rgba(38, 171, 251, 1)',
                                padding:[10, 92, 0, 92]
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
