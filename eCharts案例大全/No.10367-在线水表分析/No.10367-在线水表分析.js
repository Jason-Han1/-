option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['汇中超声波','天信电磁','翔瑞摄像直读','天罡超声波','拓安信电磁','','东海无磁','积成光电直读','瑞泉光电直读','翔瑞摄像直读','机械表']
    },
    series: [
        {
            name:'总表',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

           label: {
                normal: {
                  
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
                            color: '#000',
                            lineHeight: 22,
                            align: 'center'
                        },
                         abg: {
                         backgroundColor: '#888',
                         width: '100%',
                         align: 'right',
                         height: 22,
                         borderRadius: [4, 4, 0, 0]
                          },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                         color: '#000',
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
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:2463, name:'汇中超声波'},
                {value:8, name:'天信电磁'},
                {value:679, name:'翔瑞摄像直读'},
                {value:1464, name:'天罡超声波'},
                {value:33, name:'拓安信电磁'},
                {value:230, name:'机械表',selected:true}
            ]
        },
        {
            name:'户表',
            type:'pie',
            radius: ['40%', '55%'],
            label: {

                normal: {
               
                    formatter: '    {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#444',
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
                            color: '#000',
                            lineHeight: 22,
                            align: 'center'
                        },
                         abg: {
                              backgroundColor: '#ae3',
                              width: '100%',
                              align: 'right',
                             height: 22,
                              borderRadius: [4, 4, 0, 0]
                        },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                         color: '#ddd',
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
                }
            },
            data:[
                {value:335, name:'机械表'},
                {value:310, name:'东海无磁'},
                {value:234, name:'积成光电直读'},
                {value:135, name:'瑞泉光电直读'},
                {value:1048, name:'翔瑞摄像直读'}
            ]
        }
    ]
};