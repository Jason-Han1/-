
options = [{
    title : {
        text: '食品销售经营者',
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['互联网经营','其他']
    },
    series: [
        {
            name:'',
            type:'pie',
            radius: ['34%', '42%'],
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#ed400b','#999'
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
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        
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
                {value:35, name:'其他'}
            ]
        }
    ]
},
{
    title : {
        text: '餐饮服务经营者',
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['内设中央厨房','集体用餐配送单位','其他','互联网经营']
    },
    series: [
        {
            name:'',
            type:'pie',
            radius: ['34%', '42%'],
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#ed400b','#c3b32c','#3d860d',
                           '#16afd3','#55a4ee','#d063f9'
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
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        
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
                {value:300, name:'内设中央厨房'},
                {value:100, name:'集体用餐配送单位'},
                {value:170, name:'其他'},
                {value:109, name:'互联网经营'},
            ]
        }
    ]
},
{
    title : {
        text: '单位食堂',
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['学校食堂','其他']
    },
    series: [
        {
            name:'',
            type:'pie',
            radius: ['34%', '42%'],
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#ed400b','#999'
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
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        
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
                {value:132, name:'学校食堂'},
                {value:102, name:'其他'}
            ]
        }
    ]
}];