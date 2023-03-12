var startColorY = ['#eb4d78','#eb4d78','#eb4d78','#eb4d78','#eb4d78','#eb4d78','#eb4d78','#eb4d78',];
var endColorL = ['#b670a9', '#b670a9','#b670a9','#b670a9','#b670a9','#b670a9','#b670a9','#b670a9',];
var endDataZ = [];
var dataH = [{
    "name": "标准化",
    "value":11.2,
     label: {
                                formatter:[
                                            '{a|标准化                }',
                                            '{b|11.2% }',
                                          ].join('\n'),
                                  rich: {
                                           a: {
                                             color: "#4a95cd",
                                             fontSize: 26,
                                              lineHeight:30,
                                                align:'right',
                                           
                                                        },
                                       b: {
                                          color: "#e1496f",
                                           fontSize: 22,
                                           lineHeight:20,
                                           align:'right',
                                         
                                           //   fontWeight:'bold',
                               },				   							
                            }
                         }
    
}, {
    "name": "服务",
    "value":10.8,
     label: {
                               
                                formatter:[
                                            '{a|服务              }',
                                            '{b|10.8%}',
                                          ].join('\n'),
                                  rich: {
                                           a: {
                                             color: "#4a95cd",
                                             fontSize: 26,
                                              lineHeight:30
                                                        },
                                       b: {
                                          color: "#e1496f",
                                           fontSize: 24,
                                           lineHeight:120,
                                           align:'right',
                                         
                                           //   fontWeight:'bold',
                               },				   							
                            }
                         }
}, 
{
    "name": "技术",
    "value":12.1,
    label: {
                              
                                formatter:[
                                            '{a|技术           }',
                                            '{b|12.1%}',
                                          ].join('\n'),
                                  rich: {
                                           a: {
                                             color: "#4a95cd",
                                             fontSize: 26,
                                              lineHeight:0
                                                        },
                                       b: {
                                          color: "#e1496f",
                                           fontSize: 24,
                                           lineHeight:210,
                                           align:'right',
                                         
                                           //   fontWeight:'bold',
                               },				   							
                            }
                         }
},
{
    "name": "市场",
    "value": 5,
     label: {
                               
                                formatter:[
                                            '{a|市场  }',
                                            '{b|5% }',
                                          ].join('\n'),
                                  rich: {
                                           a: {
                                             color: "#4a95cd",
                                             fontSize: 26,
                                              lineHeight:0,
                                              
                                                        },
                                       b: {
                                          color: "#e1496f",
                                           fontSize: 24,
                                           lineHeight:290,
                                           align:'center',
                                         
                                           //   fontWeight:'bold',
                               },				   							
                            }
                         }
},
{
    "name": "资金",
    "value":22.3,
       label: {
                              
                                formatter:[
                                            '{a|资金   }',
                                            '{b|22.3% }',
                                          ].join('\n'),
                                  rich: {
                                           a: {
                                             color: "#4a95cd",
                                             fontSize: 26,
                                              lineHeight:0
                                                        },
                                       b: {
                                          color: "#e1496f",
                                           fontSize: 24,
                                           lineHeight:290,
                                           align:'right',
                                         
                                           //   fontWeight:'bold',
                               },				   							
                            }
                         }
},
{
    "name": "推广与培养",
    "value":13.1,
       label: {
                           
                                formatter:[
                                            '{a|           推广与培养}',
                                            '{b|  13.1%                   }',
                                          ].join('\n'),
                                  rich: {
                                           a: {
                                             color: "#4a95cd",
                                             fontSize: 26,
                                              lineHeight:15
                                                        },
                                       b: {
                                          color: "#e1496f",
                                           fontSize: 24,
                                           lineHeight:200,
                                           align:'right',
                                         
                                           //   fontWeight:'bold',
                               },				   							
                            }
                         }
},
{
    "name": "政策",
    "value": 25.3,
       label: {
                             
                                formatter:[
                                            '{a|                 政策}',
                                            '{b|25.3%          }',
                                          ].join('\n'),
                                  rich: {
                                           a: {
                                             color: "#4a95cd",
                                             fontSize: 26,
                                              lineHeight:20
                                                        },
                                       b: {
                                          color: "#e1496f",
                                           fontSize: 24,
                                           lineHeight:70,
                                           align:'center',
                                         
                                           //   fontWeight:'bold',
                               },				   							
                            }
                         }
},
 {
    "name": "其他",
    "value": 0.1,
        label: {
                           
                                formatter:[
                                            '{a|                其他}',
                                            '{b|0.1%               }',
                                          ].join('\n'),
                                  rich: {
                                           a: {
                                             color: "#4a95cd",
                                             fontSize: 26,
                                              lineHeight:0
                                                        },
                                       b: {
                                          color: "#e1496f",
                                           fontSize: 24,
                                           lineHeight:20,
                                           align:'right',
                                         
                                           //   fontWeight:'bold',
                               },				   							
                            }
                         }
}]
dataH.map((item, index) => {
    endDataZ.push({
        value: item.value
    })
});
var allData = dataH.concat(endDataZ);
 for(let i=0;i<allData.length;i++){
            if(i<dataH.length){
                allData[i].itemStyle = {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: endColorL[i] // 0% 处的颜色
                            }, {
                                offset: 0.5, color: endColorL[i] // 0% 处的颜色
                            }, {
                                offset: 1, color: startColorY[i] // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                };
            }else{
                allData[i].itemStyle= {
                    normal: {
                        color: 'pink',
                        opacity:0,
                    }
                };
                allData[i].label={
                    normal:{
                        show:false
                    }
                }
            }
        }


//数字每三位 加，的
function toThousands(num) {
        var result = '', counter = 0;
        num = (num || 0).toString();
        for (let i = num.length - 1; i >= 0; i--) {
            counter++;
            result = num.charAt(i) + result;
            if (!(counter % 2) && i != 0) {
                result = '' + result+'%';
            }
        }
        return result;
    };
    
var option = {
    backgroundColor:'#021d49',//
    tooltip: {
         formatter: "{b} :{c}%" ,
   
    },
    title: {
        text: "期望\n得到的支持",
        left: '49.5%',//
        top: '47%',//
        z:7,
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            fontSize: 23,color:'#5eabff',
        }
    },
    series: [
        // 内层圆圈
        {
            name: "性质",
            type: 'pie',
            radius: ['0', '63'],
            center: ['50%', '50%'],
            startAngle: 180,
            // center: ['50%', '100%'],
            z: 7,
            animation: false,
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [{
                    value: 10,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: 'RGBA(146,135,199,.6)',
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowBlur: 30,
                        }
                    }
                },
                {
                    value: 10,
                    name: '年龄',
                    itemStyle: {
                        normal: {
                            color: 'RGB(146,135,199,.9)',
                            opacity: 0,
                        }
                    }
                },
            ],
            tooltip: {
                show: false
            }
        },
        // 外层圆圈
        {
             name: "性质",
            type: 'pie',
            radius: ['250', '270'],
            center: ['50%', '50%'],
            // center: ['50%', '100%'],
            animation: false,
            z: 3,
            avoidLabelOverlap: false,
            hoverAnimation: false,
            startAngle: 180,
            label: {
                normal: {
                    show: false,
                },
            },
            tooltip: {
                show: false
            },
            data: [{
                    value: 10,
                    name: name,
                    itemStyle: {
                        normal: {
                            color: '#9585c3',
                            shadowColor: 'rgba(0, 0, 0, 1)',
                            shadowBlur: 100
                        }
                    }
                },
                {
                    value: 10,
                  
                    name: name,
                    itemStyle: {
                       
                        normal: {
                            color: 'rgba(210, 210, 210, 0.55)',
                            opacity: 0,
                        }
                    }
                },
            ]
        },
        // 中间数据层 所传的第三组数据才是真实的数据
        {
             name: "性质",
            type: 'pie',
            radius: ['0', '150'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            minAngle: 80,
            avoidLabelOverlap: false,
               roseType: 'radius',
               z:5,
            illShowZeroSum: true,
            startAngle: 180,
            labelLine: {
                normal: {
                    show: false,
                    length: 0,
                    length2: 0,
                }
            },
            data: allData
        },
    ]
};