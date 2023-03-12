options = [{
    backgroundColor:'#FFF',
    title:{
        text:'检查覆盖与违规情况'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 50,
        top:30,
        data: ['被检查单位数']
    },
    series: [{
        name: '被检查单位数',
        type: 'pie',
        radius: ['30%', '40%'],
        center:['35%','30%'],
        color:'#33CCFF',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 8005,
            name: '被检查单位数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 20
                    }
                }
            }
        }, {
            value:888 ,
            name: '未检查单位数',
            label: {
                normal: {
                    formatter: '\n检查覆盖率',
                    textStyle: {
                        color: '#555',
                        fontSize: 14
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
},{
   backgroundColor:'#FFF',
    title:{
        text:''
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 50,
        top:30,
        data: ['检查违法违规数']
    },
    series: [{
        name: '检查违法违规数',
        type: 'pie',
        radius: ['30%', '40%'],
        center:['35%','30%'],
        color:'#6699FF',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 1271,
            name: '检查违法违规数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 20
                    }
                }
            }
        }, {
            value:6203 ,
            name: '检查合格数',
            label: {
                normal: {
                    formatter: '\n检查违法\n违规率',
                    textStyle: {
                        color: '#555',
                        fontSize: 14
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
}];