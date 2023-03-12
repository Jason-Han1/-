var axisDataS1=['WK21','WK22','WK23','WK24','WK25','WK26','WK27'];
    var dataS1=['98.35','98.72','99.07','98.85','98.73','98.95','99.77'];
    var effectScatterData=[];
    for(var i=dataS1.length-1; i >= 0; i--){
        if(dataS1[i] != '-'){
            effectScatterData.push([axisDataS1[i],dataS1[i]]);
            break;
        }
    }

    var axisDataS2=['WK21','WK22','WK23','WK24','WK25','WK26','WK27'];
    var dataS2=['98.35','98.62','98.80','98.98','98.86','99.02','99.51'];
    var effectScatterData2=[];
    for(var i=dataS2.length-1; i >= 0; i--){
        if(dataS2[i] != '-'){
            effectScatterData2.push([axisDataS2[i],dataS2[i]]);
            break;
        }
    }

    var option={
        backgroundColor: '#262D45',
        color:['#01C5FD','#01C5FD','#01C5FD'],
        title : {
            text: '颜色分段最后一个数据点涟漪效果',  //标题 QL OUTPUT 单引号
            //subtext: '生產數據'
          x:'center',
           textStyle : {
                color:'#f1f1f1',
                fontSize : '20',
              //  fontFamily : '微軟雅黑',
                fontWeight : 'normal'
                },
        },
     tooltip : {
        trigger: 'axis',  //item,axis(item鼠標指向圖形顯示單個點數據，axis顯示所有圖形數據)
        axisPointer:{
            type: 'shadow'
        },
        textStyle:{
            fontSize:20
        }
    },
     legend: {
      x:'center', 
      y:'top', 
      padding:[50,0,0,0],
      itemGap:100,
      itemWidth :40,
      itemHeight:24,
      textStyle : {
         color:'#f1f1f1',
         fontSize : '26',
         fontWeight : 'normal'
       },
       data:['F','X']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line','bar']},  //工具行對應可變換图形
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
     calculable : false,  //是否可以拖拽默认为false
     grid :{
           x:'60',   //圖表距離左邊距的距離
           y:'100',
          x2:'60',  //圖表距離右邊距的距離
           y2:'100'

        },
     xAxis : [
        {
           // name:'時間',  //坐标轴名字 时间(時)
           type : 'category',  //坐标轴类型category|value|time
           boundaryGap: [0, 0],
           splitLine : {show : false},  //去除网格线
           splitArea : {show : false},  //保留网格区域
            axisLine:{
              lineStyle:{
                     color:'#f1f1f1',
                     width:'2'
             },
           },
            axisLabel:{
              textStyle:{
                color:'#f1f1f1',
                fontSize : '18',
                //fontFamily : '微软雅黑',
                fontWeight : 'normal'
            }
          },
         axisTick:{
                show:true,
                length:2,
                lineStyle:{
                    width:2
                }
             },
            data : ['WK21','WK22','WK23','WK24','WK25','WK26','WK27']  //X轴依次显示名字，值加单引号，值间逗号隔开
        }
    ],
    yAxis : [
        {
           // name:'%',  //坐标轴名字 PCS
           type : 'value',
           max : 100.00,
           min :'97',
           scale:true,
           boundaryGap: false,
           splitNumber :5,
           axisLine:{
              lineStyle:{
                     color:'#f1f1f1',
                     width:'2'
             },
           },
            axisLabel : {  
                 formatter: '{value}% ',  //Y坐标轴值后面加文字可以加单位'{value}K'，此处为空
                 interval:0,
                 textStyle:{
                  color:'#f1f1f1',
                  fontSize : '26',
                  //fontFamily : '微软雅黑',
                  fontWeight : 'normal'
                }
             },
           axisTick:{
                show:true,
                length:8,
                lineStyle:{
                    width:2
                }
             },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#EEEEEE',
                    width:2,
                    type:'solid'
                }
            }
        }
    ],
       visualMap: {
            show: false,
            pieces: [{
                gt: 97,
                lte: 98,
                color: '#E04F23'
            }, {
                gt: 98,
                lte: 99,
                color: '#EAB62A'
            }, {
                gt: 99,
                lte: 100,
                color: '#01C5FD'
            }],
            outOfRange: {
                color: '#999'
            }
        },
       series : [
        {
            name:'F',
            type:'line',
            smooth:true,
            showAllSymbol:true,
            symbol:'circle',
            symbolSize: 20,
            itemStyle:{
              normal:{
                //color:'#9D47B2',
                label : {  //数值显示在bar上
                          show : true,
                          textStyle : {
                            color:function(value,index){
                                if(value<98){
                                    return '#E04F23'
                                }else if(value>=98 && value<99){
                                    return '#EAB62A'
                                }else{
                                    return '#01C5FD'
                                }
                              },
                            fontSize : '26',
                            fontWeight : 'normal'
                        }
                    },
                lineStyle:{ 
                  width:'2', //線條寬度
                  type:'solid',
                  //color: '#CCDEE6'
                }
              }
            },
            markArea:{
                data:[
                  [{
                    yAxis:'99',
                    itemStyle:{
                        color:'rgba(1,197,253,0.4)'
                      }
                    },{
                     yAxis:'100'
                    }],
                    [{
                    yAxis:'98',
                    itemStyle:{
                        color:'rgba(234,182,42,0.4)'
                      }
                    },{
                     yAxis:'99'
                    }],
                    [{
                    yAxis:'97',
                    itemStyle:{
                        color:'rgba(224,79,35,0.4)'
                      }
                    },{
                     yAxis:'98'
                    }],
                 ]
             },
            data:['98.35','98.72','99.07','98.85','98.73','98.95','99.77']  //图形2数据
        },
		 {
            name:'X',
            type:'line',
            smooth:true,
            showAllSymbol:true,
            symbol:'diamond',
            symbolSize: 15,
            itemStyle:{
              normal:{
              //color:'#B79D5C',    //線條顏色
                label : {  //数值显示在bar上
                          show : true,
                          textStyle : {
                          color:function(value,index){
                            if(value<98){
                                return '#E04F23'
                            }else if(value>=98 && value<99){
                                return '#EAB62A'
                            }else{
                                return '#01C5FD'
                            }
                          },
                          fontSize : '26',
                          fontWeight : 'normal'
                        }
                    },
                lineStyle:{
                  width:'2', //線條寬度
                  type:'solid',
                  //color:'#CCDEE6'
                }
              }
            },
            data:['98.35','98.62','98.80','98.98','98.86','99.02','99.51']  //图形3数据
        },
        {
            name:'lastF',
            type:'effectScatter',
            coordinateSystem: 'cartesian2d',
            data:effectScatterData,
            symbolSize:30,
            showEffectOn:'render',
            rippleEffect:{
                brushType:'stroke'
            },
            
            symbol:'circle',
            hoverAnimation:true,
            itemStyle: {
                normal: {
                    shadowBlur: 35,
                    shadowColor: '#333'
              }
            },
            zlevel: 1
        },
        {
            name:'lastX',
            type:'effectScatter',
            coordinateSystem: 'cartesian2d',
            data:effectScatterData2,
            symbolSize:30,
            showEffectOn:'render',
            rippleEffect:{
                brushType:'stroke'
            },
            symbol:'diamond',
            hoverAnimation:true,
            itemStyle: {
                normal: {
                    shadowBlur: 35,
                    shadowColor: '#333'
               }
            },
            zlevel: 1
        }
    ]
  } ;