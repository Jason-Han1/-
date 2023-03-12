var colorData=['#337d76','#29ba89','#cc9933','#ca3636','#4282c2','#c371c3'];		
var data=[{
		"name":'个人',
		"value":20
     },{
		"name":'单位',
		"value":84
     },{
		"name":'物资',
		"value":52
     },{
		"name":'资金',
		"value":90
     }];


var create=function(data){
    var result = [];
   for(var i=0;i<data.length;i++){
        result.push({
        name:'',
        center: [
            (i * 25 + 12.5+ '%'),
            '50%'
        ],
        radius: [
            '15%',
            '20%'
        ],
        type: 'pie',
        labelLine: {
            normal: {
                show: false
            }
        },
          markPoint: {
            data: [{
                        symbol: 'triangle',
                        symbolSize: 15,
                        symbolRotate: 0,
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        name: '',
                        value: data[i].name,
                        x: myChart.getWidth() * (i + 0.5) / 4,
                        y: myChart.getHeight() * 0.45 + 120,
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                                formatter: function(params) {
                                    return params.value;
                                },
                                textStyle: {
                                    color: colorData[i]
                                }
                            }
                        },
                    }
            ]
        },
         markLine:{
            silent: true,
            symbolSize:0,
            data:[{ 
                
               0: {
                x: i* 25 + '%', 
                y:  '40%',
                lineStyle: {
                    normal: {
                        color:!!i ?'#ccc':'transparent' ,
                        width: 1,
                        type: 'solid'
                    }
                 }
                    
                },
                 1: {
                    
                 x: i* 25  + '%',  
                y:  '70%',
                lineStyle: {
                    normal: {
                        color: !!i ?'#ccc':'transparent' ,
                        width: 1,
                        type: 'solid'
                    }
                 }
                    
                }
               
               
                
            }]
        },
        data: [{
            value: data[i].value,
            name: data[i].name,
             itemStyle: {
                normal: {
                    color: colorData[i]
                },
                emphasis: {
                    color: colorData[i]
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        color:colorData[i]
                    }
                }
            }
        }, {
            value: (100-data[i].value),
            name: '',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    });
   }
     return result;
};

option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            var res= params.name + ' : ' + params.percent + '%';
            return res;
        }
    },
  
    grid: {
    	
        bottom: 100,
        top:150
        
    },
     xAxis: [{
        show: false
    }],
    yAxis: [{
        show: false
    }],
    series:create(data)
};