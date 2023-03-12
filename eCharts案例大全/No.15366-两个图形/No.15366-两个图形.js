 option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            var res = params.seriesName;
            res += '<br/>' + params.name + ' : ' + params.percent + '%';
            return res;
        }
        
    },
       backgroundColor:'#0f2d55',
       textStyle:{
         color:'#fff'  
       },
      itemStyle: {
        normal: {
            color: '#c23531',
            shadowBlur: 10,
            zlevel :10,
            shadowColor: 'fcc',
            avoidLabelOverlap :true,
            shadowOffsetY :'5'
        }
    },
    grid: {
        bottom: '20%',
        left:'10%'
    },
    
        title: [{
        text: '已结案',
        subtext:'75',
        left: '19%',
        
        top: '66%',
        textAlign:'center',
        textStyle: {
            color: '#fff',
            textAlign:'center',
        },
         subtextStyle:{
            color: '#fff', 
        }
       
    }, {
        text: '未结案',
        subtext:'75',
        left: '50%',
        top: '66%',
        textAlign: 'center',
        textStyle: {
            color: '#fff'
        },
         subtextStyle:{
            color: '#fff', 
        }
    }],
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0
        },
        data: ['正常', '同班']
    }],
    yAxis: [{
        show: false
    }],
   
    series: [{
        name: '正常',
        
          itemStyle: {
                normal: {
                    color: '#01b0d1'
                }
            },
        center: [
            '20.0%',
            '50%'
        ],
          
        radius: [
            '20%',
            '25%'
        ],
        type: 'pie',
        
        labelLine: {
            normal: {
                show: false
            }
        },
        
        data: [{
            color: ['#f60'],
            value: 20,
            name: '相似度',
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold',
                        color: '#fff'
                    }
                }
            }
        }, {
            value: 80,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#465262'
                },
                emphasis: {
                    color: '#0e1c3d'
                }
            },
            
            hoverAnimation: false
        }]
    }, {
        name: '同班',
        itemStyle: {
                normal: {
                    color: '#00c7ab'
                }
            },
        center: [
            '50.0%',
            '50%'
        ],
        radius: [
            '20%',
            '25%'
        ],
        type: 'pie',
        labelLine: {
              
            normal: {
                show: false
            }
        },
        data: [{
            value: 20,
            name: '相似度',
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        color: '#fff'
                    }
                }
            }
        }, {
            value: 80,
            name: '22',
            tooltip: {
                show: false
            },
                  backgroundColor:'#f60',
            itemStyle: {
                normal: {
                    color: '#465262'
                },
                emphasis: {
                    color: '#0e1c3d'
                }
            },
            hoverAnimation: false
        }]
    }]
    
};
       