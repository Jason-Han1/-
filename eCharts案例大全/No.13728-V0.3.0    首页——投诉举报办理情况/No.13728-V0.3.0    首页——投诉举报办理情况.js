options = [{
    backgroundColor:'#FFF',
    title:{
        text:'投诉举报有效受理率'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        /*orient: 'vertical',
        left: 50,
        top:30,*/
        data: ['投诉举报有效受理率']
    },
    series: [{
        name: '投诉举报有效受理率',
        type: 'pie',
        radius: ['35%', '50%'],
        //center:['15%','22%'],
        color:'#33CCFF',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 8005,
            name: '有效受理数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 14
                    }
                }
            }
        }, {
            value:888 ,
            name: '无效投诉数',
            label: {
                normal: {
                    formatter: '\n投诉举报有\n效受理率',
                    textStyle: {
                        color: '#555',
                        fontSize: 6
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
        text:'投诉举报立案率'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        /*orient: 'vertical',
        left: 50,
        top:30,*/
        data: ['投诉举报立案率']
    },
    series: [{
        name: '投诉举报立案率',
        type: 'pie',
        radius: ['35%', '50%'],
        //center:['15%','22%'],
        color:'#33CCFF',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 8005,
            name: '不立案数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 18
                    }
                }
            }
        }, {
            value:523 ,
            name: '立案数',
            label: {
                normal: {
                    formatter: '\n投诉举报立案率',
                    textStyle: {
                        color: '#555',
                        fontSize: 10
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