option = {
    backgroundColor:'#fff',
    title:{
        text:'日常监管检查情况分析'
    },
    tooltip: {
       
    },
    
    series: [{
        name: '计算公式：',
        type: 'pie',
        radius: ['18%', '22%'],
        center:['10%','50%'],
        color:'#00CDCD',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 38,
            name: '立案数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 18
                    }
                }
            },
            tooltip:{
                 trigger: 'item',
                 formatter: "{a} <br/>立案率=({b}/立案数)*100%<br/> 案件数 : {c}"
            }
        }, {
            value: 41,
            name: '案件数',
            label: {
                normal: {
                    formatter: '\n立案率',
                    textStyle: {
                        color: '#555',
                        fontSize: 13
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
        }]
    },{
        name: '计算公式:',
        type: 'pie',
        radius: ['18%', '22%'],
        center:['30%','50%'],
        color:'#A2B5CD',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 79,
            name: '结案数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 18
                    }
                }
            },
            tooltip:{
                 trigger: 'item',
                 formatter: "{a} <br/>结案率=({b}/结案数)*100%<br/> 立案数 : {c}"
            }
        }, {
            value: 59,
            name: '立案数',
            label: {
                normal: {
                    formatter: '\n结案率',
                    textStyle: {
                        color: '#555',
                        fontSize: 13
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
        }]
    }]
};