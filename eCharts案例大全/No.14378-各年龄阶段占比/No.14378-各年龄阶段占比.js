//使用markPoint，上一个使用legend，上上一个使用x轴
var colorList = ['#fa5f7d','grey'];
var data=[{
		"name":'未成年未成年未成年未成年未成年未成年未成年未成年',
		"value":10
     },{
		"name":'青年',
		"value":46
     },{
		"name":'中年',
		"value":20
     },{
		"name":'老年',
		"value":14
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
            '40',
            '41'
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
                        x:( myChart.getWidth() * (i+((+0.52-(data[i].name.length)*0.025)>0?(+0.52-(data[i].name.length)*0.025):0)) / 4),
                        y: myChart.getHeight() * 0.45 + 80,
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                                formatter: function(params) {
                                    return params.value;
                                },
                                textStyle: {
                                    color: colorList[1]
                                }
                            }
                        },
                    }
            ]
        },
        /* markLine:{
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
        },*/
        data: [{
            value: data[i].value,
            name: data[i].name,
             itemStyle: {
                normal: {
                    color:colorList[0],
                    borderColor: colorList[0],
                    borderWidth: 5
                },
                emphasis: {
                    color: colorList[0],
                    borderColor: colorList[0],
                    borderWidth: 5
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
                        color:'black'
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
                    color: colorList[1],
                    borderColor: colorList[1],
                    borderWidth: 1
                },
                emphasis: {
                    color: colorList[1],
                    borderColor: colorList[1],
                    borderWidth: 1
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
    series:create(data)
};