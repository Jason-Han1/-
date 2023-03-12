var min = 100;
var max = 2000;
option = {
    title:{
        text:'图10b：2020年省所研究员、正研职称人数分布',
        textStyle: {
            fontSize: '16',
            fontFamily: '黑体',
            fontWeight: '300',
            color: '#000',
            textAlign: 'center',
        },
        bottom:'100px',
        left:'center'
    },
            backgroundColor:'#ffffff',
            grid: {
                left: '2.5%',
                top:'19.5%',
                right: '2.8%',
                bottom: '22%',
                containLabel: true
            },
               legend: {
        data: ['Admission',]
    },
            toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
            xAxis : [
                {
                    type : 'category',
                    axisLabel:{
                     textStyle:{
                          color: 'rgba(0,0,0,0.8)',
                          fontSize:'14',
                     },
                       interval:0,  
                       rotate:30, 
                    },
                    data : ["天津","河北","山西","内蒙古","吉林","黑龙江","浙江","安徽","福建","江西","山东","河南","湖南","广西","海南","重庆","贵州","云南","西藏","陕西","青海","宁夏"],
                    axisLine:{
                                  lineStyle:{
                                      color:'#808A87',
                                  }
                              },
                    axisTick:{
                        show:false
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name:'人数',
                    nameGap:20,
                    nameTextStyle:{
                        color:'#000000',
                        fontSize:'16',
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(0,0,0,0.8)',
                            fontSize:'14',
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    axisLine: {
                        lineStyle:{
                            color:'#808A87',
                        }
                    },
                    splitLine: {
                        lineStyle:{
                            color:'rgba(130,130,130,0.3)',
                        }
                    },
                },
            ],
            series : [
                {
                    type:'bar',
                    barWidth: '40%',
                    itemStyle:{
                      normal:{
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#de682e'
                            }, {
                                offset: 1,
                                color: '#ecc232'
                            }]),
                      }
                    },
                    label:{
                        normal:{
                            show:true,
                            position:'top',
                            formatter:function(param){
                                if(param.value==max||param.value==min){
                                    return ''
                                }
                                 return param.value
                            },
                            textStyle:{
                                color:'#000000',
                                fontSize:'16',
                            }
                        }
                    },
                    markPoint : {
                        symbolSize:'90',
                        label:{
                            normal:{
                                textStyle:{
                                    color:'#000000',
                                    fontSize:'16',
                                }
                            }
                        },
                        data : [
                            {name : '年最低', value : min, xAxis: 0, yAxis: 1000},
                            {name : '年最高', value : max, xAxis: 19, yAxis: 2000}
                        ]
                    },
                    data:[5 ,
                        5 ,
                        5 ,
                        1 ,
                        6 ,
                        7 ,
                        6 ,
                        8 ,
                        7 ,
                        4 ,
                        3 ,
                        9 ,
                        9 ,
                        9 ,
                        4 ,
                        7 ,
                        6 ,
                        6 ,
                        5 ,
                        5 ,
                        4 ,
                        7 

                    ]
                }
            ]
    };
