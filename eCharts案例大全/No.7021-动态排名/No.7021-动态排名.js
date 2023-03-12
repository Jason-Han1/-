var opt={
            index: 0
        };
var  colors=["rgba(35,169,244, 0.9)", "rgba(217, 102, 87, 0.9)", "rgba(192, 221, 246, .8)", "rgba(153, 93, 178, 0.9)", "rgba(3,169,244, 0.3)", "rgba(53,109,244, 0.9)","rgba(19,69,144, 0.9)","rgba(219,111,44, 0.9)","rgba(88,88,14, 0.9)"]
let languagesNameBg = "";
let arrs = [];  
let arrs2 = []; 
var datas2 = [{
    "name": "CNC2",
    "name_us": "CNC",
    "name_tw": "CNC",
    "value": 671766417.152423,
    "cd_amount": 671766417.152423,
    "cd_proportion": 142.8494,
    "total_amount": 470261821.096079,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "磁材2",
    "name_us": "Magnetic material",
    "name_tw": "磁材",
    "value": 200448884.227853,
    "cd_amount": 200448884.227853,
    "cd_proportion": 333.5352,
    "total_amount": 60098264.121172,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "尔康2",
    "name_us": "Salcomp",
    "name_tw": "賽爾康",
    "value": 66830197.708983,
    "cd_amount": 66830197.708983,
    "cd_proportion": 52.3908,
    "total_amount": 127560924.315229,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "冲压2",
    "name_us": "Stamping",
    "name_tw": "沖壓",
    "value": 17603487.482444,
    "cd_amount": 17603487.482444,
    "cd_proportion": 8.0111,
    "total_amount": 219736527.727814,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "组装2",
    "name_us": "Assembling",
    "name_tw": "組裝",
    "value": 484870.001639,
    "cd_amount": 484870.001639,
    "cd_proportion": 1.0732,
    "total_amount": 45178764.025914,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "自动化2",
    "name_us": "Other",
    "name_tw": "其他",
    "value": 13168.14502,
    "cd_amount": 13168.14502,
    "cd_proportion": 0.0014,
    "total_amount": 899349728.047174,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "5G2",
    "name_us": "5G",
    "name_tw": "5G",
    "value": 19920.367304,
    "cd_amount": -19920.367304,
    "cd_proportion": -50.4836,
    "total_amount": 39459.04,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "深结构件2",
    "name_us": "Shenzhen Structure",
    "name_tw": "深圳結構件",
    "value": 128005297.3454,
    "cd_amount": -128005297.3454,
    "cd_proportion": -38.1818,
    "total_amount": 335251302.5725,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "东结构2件",
    "name_us": "Dongguan Structure",
    "name_tw": "東莞結構件",
    "value": 182165463.923,
    "cd_amount": -182165463.923,
    "cd_proportion": -68.3135,
    "total_amount": 266660901.6231,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "模切2",
    "name_us": "Die-cutting",
    "name_tw": "模切",
    "value": 754655474.800842,
    "cd_amount": -754655474.800842,
    "cd_proportion": -98.9762,
    "total_amount": 762460918.694128,
    "date": "统计周期：2020-01~2020-07"
}];
var datas = [{
    "name": "CNC",
    "name_us": "CNC",
    "name_tw": "CNC",
    "value": 671766417.152423,
    "cd_amount": 671766417.152423,
    "cd_proportion": 142.8494,
    "total_amount": 470261821.096079,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "磁材",
    "name_us": "Magnetic material",
    "name_tw": "磁材",
    "value": 200448884.227853,
    "cd_amount": 200448884.227853,
    "cd_proportion": 333.5352,
    "total_amount": 60098264.121172,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "尔康",
    "name_us": "Salcomp",
    "name_tw": "賽爾康",
    "value": 66830197.708983,
    "cd_amount": 66830197.708983,
    "cd_proportion": 52.3908,
    "total_amount": 127560924.315229,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "冲压",
    "name_us": "Stamping",
    "name_tw": "沖壓",
    "value": 17603487.482444,
    "cd_amount": 17603487.482444,
    "cd_proportion": 8.0111,
    "total_amount": 219736527.727814,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "组装",
    "name_us": "Assembling",
    "name_tw": "組裝",
    "value": 484870.001639,
    "cd_amount": 484870.001639,
    "cd_proportion": 1.0732,
    "total_amount": 45178764.025914,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "自动化",
    "name_us": "Other",
    "name_tw": "其他",
    "value": 13168.14502,
    "cd_amount": 13168.14502,
    "cd_proportion": 0.0014,
    "total_amount": 899349728.047174,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "5G",
    "name_us": "5G",
    "name_tw": "5G",
    "value": 19920.367304,
    "cd_amount": -19920.367304,
    "cd_proportion": -50.4836,
    "total_amount": 39459.04,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "深结构件",
    "name_us": "Shenzhen Structure",
    "name_tw": "深圳結構件",
    "value": 128005297.3454,
    "cd_amount": -128005297.3454,
    "cd_proportion": -38.1818,
    "total_amount": 335251302.5725,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "东结构件",
    "name_us": "Dongguan Structure",
    "name_tw": "東莞結構件",
    "value": 182165463.923,
    "cd_amount": -182165463.923,
    "cd_proportion": -68.3135,
    "total_amount": 266660901.6231,
    "date": "统计周期：2020-01~2020-07"
}, {
    "name": "模切",
    "name_us": "Die-cutting",
    "name_tw": "模切",
    "value": 754655474.800842,
    "cd_amount": -754655474.800842,
    "cd_proportion": -98.9762,
    "total_amount": 762460918.694128,
    "date": "统计周期：2020-01~2020-07"
}];

function getArrByKey(data, k) { //
    let key = k || "value";
    let res = [];
    if (data) {
        data.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
};
for (let index = 0; index < datas2.length; index++) {
    arrs2.push({
        name: datas2[index].name,
        name_us: datas2[index].name_us,
        name_tw: datas2[index].name_tw,
        value: Math.abs(datas2[index].value),
        cd_amount: datas2[index].cd_amount,
        cd_proportion: datas2[index].cd_proportion,
        total_amount: datas2[index].total_amount,
        date: datas2[index].date,
    });

}

for (let index = 0; index < datas.length; index++) {
    arrs.push({
        name: datas[index].name,
        name_us: datas[index].name_us,
        name_tw: datas[index].name_tw,
        value: Math.abs(datas[index].value),
        cd_amount: datas[index].cd_amount,
        cd_proportion: datas[index].cd_proportion,
        total_amount: datas[index].total_amount,
        date: datas[index].date,
    });

}

if (arrs.length || arrs2.length) {
     languagesNameBg = 'name'
}



option = {
  baseOption: {
          timeline: {
             autoPlay: true,
             data:['PA','PD'],
            axisType: "category",
            show: true,
            playInterval: 8500,
            interval: 0,
            orient: "vertical",
            right:10,
            height: "10%",
            y: "center",
            controlStyle: {
              //箭头和播放
              showPrevBtn:
                false,
              showPlayBtn: false,
              showNextBtn:
               false
            },
            checkpointStyle: {
              color: "rgba(35,169,244, 0.9)",
              borderColor: "rgba(35,169,244, 0.9)",
              symbolSize: 16
            },
            emphasis: {
              itemStyle: {
                color: "rgba(35,169,244, 0.9)",
                borderColor: "rgba(35,169,244, 0.9)",
                symbolSize:16
              }
            },
            label: {
              show: false
            },
            symbol: "circle",
            symbolSize:16,
            lineStyle: {
              //线得样式
              show: false,
              color: "#304654",
              width: 2,
              type: "solid",
              shadowBlur: 0.5,
              shadowColor: "red",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 0.5
            },
            itemStyle: {
              normal: {
                color: "#959598",
                lineStyle: {
                  color: "#959598"
                }
              }
            }
          },
  
    tooltip: {},
    calculable: true,
  
  },
  options: [
       {
        grid: {
        // top: '20%',
        left:  arrs.length >=8 ? "30%":40,
        top:'5%',
        bottom:"15%",
        right:'30%',
    },
       tooltip:{
        show:true,
        backgroundColor: 'rgba(3,169,244, 0.5)',//背景颜色（此时为默认色）
        textStyle:{
              fontSize:16
        },
       
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: getArrByKey(arrs, languagesNameBg),
        inverse: true,
       
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
               fontSize:  arrs.length >=8 ? 14 :18,
               formatter: function (value, index) {
                  if(value.length>7){
                    value= value.substring(0,7)+"..."
                  }
               const vas='';
                if (opt.index === 0 && index < 3) {
                    return '{idx' + index + '|' + (1 + index) + '} {title|' + value + '}'
                } else if (opt.index !== 0 && (index + opt.index) <= 10) {
                    return '{idx|0' + (1 + index + opt.index) + '} {title|' + value + '}'
                } else {
                    return '{idx|' + (1 + index + opt.index) + '} {title|' + value + '}'
                }
            },
            rich: {
                    idx0: {
                    color: '#959598',
                    backgroundColor: '#FFE8EC',
                    borderRadius: 100,
                    padding:  arrs.length >=8 ? [5,11]:[12,13]
                },
                idx1: {
                    color: '#959598',
                    backgroundColor: '#FFEACF',
                    borderRadius: 100,
                       padding:  arrs.length >=8 ? [5,11]:[12,13]
                },
                idx2: {
                    color: '#959598',
                    backgroundColor: '#E1F7F3',
                    borderRadius: 100,
                    padding:  arrs.length >=8 ? [5,11]:[12,13]
                },
                idx: {
                    color: '#fff',
                    borderRadius: 100,
                    backgroundColor: 'rgba(108, 108, 108, 0.6)',
                       padding:  arrs.length >=8 ? [5,11]:[12,13]
                },
                title:{
                    backgroundColor: 'rgba(35,169,244, 0.1)',
                    color: '#959598',
                    width: arrs.length >=8 ? 100 :9,
                    align:'center',
                    borderRadius: 5,
                    fontSize:14,
                    padding: arrs.length  >=8 ? 10 :15,
                   
                }
            }
        },
    },{
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(arrs, languagesNameBg),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            color: '#959598',
            align: 'left',
            margin: 12,
            fontSize:14,
          
        }
    }],
    series: [{
            type: 'bar',
            yAxisIndex: 0,
            data: arrs,
            barWidth:  14,
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    textStyle: {
                        color: '#959598',
                        fontSize:14,
                    },
            
                },
                
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                          color: (val) => {
                            if (val.dataIndex < 3 && opt.index === 0) {
                                 if(val.data.cd_amount<0){
                                      return 'red'
                                }else{
                                     return colors[val.dataIndex];
                                }
                                
                            } else {

                                if(val.data.cd_amount<0){
                                      return 'red'
                                }else{
                                     return 'rgba(255,255,255,.6)'
                                }
                               
                            }
                        },
                    
                }
            },

        }
    ]
},
       {
        grid: {
        // top: '20%',
        left:  arrs2.length >=8 ? "30%":40,
        top:'5%',
        bottom:"15%",
        right:'30%',
    },
       tooltip:{
        show:true,
        backgroundColor: 'rgba(3,169,244, 0.5)',//背景颜色（此时为默认色）
        textStyle:{
              fontSize:14
        },
       
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: getArrByKey(arrs2, languagesNameBg),
        inverse: true,
       
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
               fontSize: arrs2.length >=8 ? 14 :18,
               formatter: function (value, index) {
                  if(value.length>7){
                    value= value.substring(0,7)+"..."
                  }
               const vas='';
                if (opt.index === 0 && index < 3) {
                    return '{idx' + index + '|' + (1 + index) + '} {title|' + value + '}'
                } else if (opt.index !== 0 && (index + opt.index) <= 10) {
                    return '{idx|0' + (1 + index + opt.index) + '} {title|' + value + '}'
                } else {
                    return '{idx|' + (1 + index + opt.index) + '} {title|' + value + '}'
                }
            },
            rich: {
                    idx0: {
                    color: '#959598',
                    backgroundColor: '#FFE8EC',
                    borderRadius: 100,
                    padding:  arrs2.length >=8 ? [5,11]:[12,13]
                },
                idx1: {
                    color: '#959598',
                    backgroundColor: '#FFEACF',
                    borderRadius: 100,
                       padding:  arrs2.length >=8 ? [5,11]:[12,13]
                },
                idx2: {
                    color: '#959598',
                    backgroundColor: '#E1F7F3',
                    borderRadius: 100,
                    padding:  arrs2.length >=8 ? [5,11]:[12,13]
                },
                idx: {
                    color: '#fff',
                    borderRadius: 100,
                    backgroundColor: 'rgba(108, 108, 108, 0.6)',
                       padding:  arrs2.length >=8 ? [5,11]:[12,13]
                },
                title:{
                    backgroundColor: 'rgba(35,169,244, 0.1)',
                    color: '#959598',
                    width: arrs2.length >=8 ? 100 :9,
                    align:'center',
                    borderRadius: 5,
                    fontSize:12,
                    padding: arrs2.length  >=8 ? 10 :15,
                   
                }
            }
        },
    },{
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(arrs2, languagesNameBg),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            color: '#959598',
            align: 'left',
            margin: 12,
            fontSize:14,
          
        }
    }],
    series: [{
            type: 'bar',
            yAxisIndex: 0,
            data: arrs2,
            barWidth:  14,
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    textStyle: {
                        color: '#959598',
                        fontSize:14,
                    },
            
                },
                
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                          color: (val) => {
                            if (val.dataIndex < 3 && opt.index === 0) {
                                 if(val.data.cd_amount<0){
                                      return 'red'
                                }else{
                                     return colors[val.dataIndex];
                                }
                                
                            } else {

                                if(val.data.cd_amount<0){
                                      return 'red'
                                }else{
                                     return 'rgba(255,255,255,.6)'
                                }
                               
                            }
                        },
                    
                }
            },

        }
    ]

  }]
    
}