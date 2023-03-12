//使用markPoint，上一个使用legend，上上一个使用x轴
var colorList = ['#fa5f7d','#fff'];
var data=[{
		"name":'未成年',
		"value":46,
		"mark":"weichen"
     },{
		"name":'青年',
		"value":20
     },{
		"name":'中年',
		"value":14
     },{
		"name":'老年',
		"value":10
     }];
var create=function(data){
    var result = [];
   for(var i=0;i<data.length;i++){
        result.push({
        name:'',
        center: [
            '50%',
            '50%'
        ],
        radius: [
            200-20*i,
            201-20*i
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
                        symbolSize: 0.01,
                        symbolRotate: 0,
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        name: data[i].name,
                        value:data[i].value,
                        x: myChart.getWidth()/2-(10*((data[i].name+" "+data[i].value).length)),
                        y:17+i*20,
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                                formatter: function(params) {
                                    return params.name+params.value;
                                },
                                textStyle: {
                                    color: '#444'
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
                    show: false,
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
    title : {
        text: '年龄阶段',
        x:'center',
        y:'center'
    },
    backgroundColor:'#fff',
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            var res= params.name + ' : ' + params.percent + '%';
            return res;
        }
    },
    series:create(data)
};