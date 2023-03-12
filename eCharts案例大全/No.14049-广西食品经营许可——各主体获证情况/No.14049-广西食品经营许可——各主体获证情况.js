
option = {
    title : {
        text: '各主体获证情况',
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['互联网经营','其他','内设中央厨房','集体用餐配送单位','其他','互联网经营','学校食堂','其他']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '33%'],
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#e4645e','#25a446','#4ab5f9'
                        ];
                        return colorList[params.dataIndex]
                    },
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
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
            data:[
                {value:335, name:'食品销售经营者', selected:true},
                {value:679, name:'餐饮服务经营者'},
                {value:234, name:'单位食堂'}
            ]
        },
        {
            type:'pie',
            radius: ['44%', '55%'],
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#ed400b','#55a4ee','#e59be1','#35a17a','#ef9376','#c3b32c','#3d860d',
                           '#16afd3'
                        ];
                        return colorList[params.dataIndex]
                    },
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                normal: {
                    formatter: '{b|{b}：}{c}{per|{d}%}  ',
                    backgroundColor: '#eee',
                    /*borderColor: '#aaa',*/
                    // borderWidth: 1,
                    // borderRadius: 4,
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
                        /*hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },*/
                        b: {
                            fontSize: 12,
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
                {value:300, name:'互联网经营'},
                {value:35, name:'其他'},
                {value:300, name:'内设中央厨房'},
                {value:100, name:'集体用餐配送单位'},
                {value:170, name:'其他'},
                {value:109, name:'互联网经营'},
                {value:132, name:'学校食堂'},
                {value:102, name:'其他'}
            ]
        }
    ]
};