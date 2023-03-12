Road_r1_data=[
  [220,800],
  [327,505],
  [238,403],
  [280,352],
  [260,595],
  [230,340],
  [250,690],
  [230,500],
  [299,900],
  [212,602],
]


option = {
    title: {
        text: '客运发班分析',
        textStyle:{
            color:'#62c8cd',
            fontSize:'18',
        },
        x:12,
        y:5,
    },
    legend:{
      data:['进站量','出站量'],
      textStyle: {
        color: '#a8aab0',
        fontStyle: 'normal',
        fontFamily: '微软雅黑',
        fontSize: 12,
      },
      itemWidth: 9,
      itemHeight: 9,
      color:'#fff',
      itemGap:10,
      icon: 'rect',
      left: '66%',
      top: '10%',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow',
      }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    textStyle: {
        color: '#a8aab0',
        fontStyle: 'normal',
        fontFamily: '微软雅黑',
        fontSize: 12,
    },
    xAxis: {
      type: 'category',
      axisLabel: { //坐标轴刻度标签的相关设置。
          interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
          //margin:15,
      },
      axisLine:{ //坐标轴轴线相关设置
        show:true,//坐标轴轴线设置隐藏/显示
        lineStyle:{
            color:'#999',
            width:2,
        }
      },
      splitLine:{  //分割线
          show:false,
          lineStyle:{
              color:'#3c444a'
          }
      },
      axisTick:{//坐标轴刻度相关设置。
          show:false,
      },
      data: ['6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
    },
    yAxis: {
        min: 200,
        max: 1000,
        interval:200,
        name:'单位：班次',
        nameTextStyle:{
          // padding:[0,0,0,5],
        },
        type: 'value',
        axisLine:{ //坐标轴轴线相关设置
          show:true,//坐标轴轴线设置隐藏/显示
          lineStyle:{
              color:'#999',
              width:2,
          }
        },
        splitLine:{  //分割线
            show:true,
            lineStyle:{
                color:'#3c444a'
            }
        },
        axisTick:{//坐标轴刻度相关设置。
            show:false,
        },
    },
    series: [
        {
            name:'进站量',
            type: 'line',
            symbol: 'circle',
            symbolSize: 7, //空心标记的大小
            smooth: true, //是否平滑曲线显示
            smoothMonotone: 'x',//指明是在 x 轴或者 y 轴上保持单调性
            lineStyle: {//线条样式
                normal: {
                    width: 2,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 2,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#5651fa' // 0% 处的颜色
                        }, {
                            offset: 0.5, color: '#6b3afe' // 37% 处的颜色
                        }, {
                            offset: 0.7, color: '#8616f7' // 72% 处的颜色
                        },{
                            offset: 0.9, color: '#910bfd' // 100% 处的颜色
                        }
                        ,{
                            offset: 1, color: '#9800f8' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            itemStyle: {//折线拐点标志的样式。
              normal: {
                color: '#2D2753',
                borderColor: '#9b5fff',
                borderWidth: 2,
              }
            },
            data: Road_r1_data.map(function(d){
              //return parseInt(Math.random()*7)
              return d[0];
            })
        },
        {
            name:'出站量',
            type: 'line',
            symbol: 'circle',
            symbolSize: 7, //空心标记的大小
            smooth: true, //是否平滑曲线显示
            lineStyle: {//线条样式
                normal: {
                    width: 2,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 2,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#31b8b4' // 0% 处的颜色
                        }, {
                            offset: 0.5, color: '#38be93' // 37% 处的颜色
                        }, {
                            offset: 0.7, color: '#40c66c' // 72% 处的颜色
                        },{
                            offset: 0.9, color: '#57e524' // 100% 处的颜色
                        }
                        ,{
                            offset: 1, color: '#65fd00' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            itemStyle: {//折线拐点标志的样式。
              normal: {
                color: '#265B14',
                borderColor: '#62f602',
                borderWidth: 2,
              }
            },
            data: Road_r1_data.map(function(d){
              return d[1];
            })
        },
        {
            name:'',
            stack:true,
            type:'bar',
            barGap:'0',
            barWidth:10,
            data: Road_r1_data.map(function(d){
				//return Math.abs(0);
               if (d[0]<d[1]) {
                  return d[0]+0.1;
                }
                else{return d[1]+0.1;}
            }),
            itemStyle:{
              normal:{color:'transparent'}
            },
            tooltip:{show:false}
        },
        {
            name:'差值',
            stack:true,
            type:'bar',
            barGap:'0',
            barWidth:10,
            data: Road_r1_data.map(function(d){
              return Math.abs(d[1]-d[0])-0.2;
            }),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0, color: 'rgba(155,95,255,0.6)'
                }, {
                    offset: 0.3, color: 'rgba(146,121,214,0.6)'
                }, {
                    offset: 0.5, color: 'rgba(128,173,129,0.6)'
                }, {
                    offset: 0.8, color: 'rgba(116,210,69,0.6)'
                }, {
                    offset: 1, color: 'rgba(102,249,6,0.6)'
                }], false),
                barBorderRadius:10,
              },

            },
        }
    ]
};

setInterval(function (){
		var arr1=new Array();
	    for(var i=0;i<2;i++){
	      var Road_l_data1 = Road_l_data1+i;
	      Road_l_data1 = Road_r_option1.series[i].data;
	      Road_l_data1.shift();
	      var value=Math.round(Math.random()*800+200);
	      arr1[i]=value;
	      Road_l_data1.push(value);
	    }
	    var Road_l_data2 = Road_r_option1.series[2].data;
	    Road_l_data2.shift();
	    if (arr1[0]<arr1[1]) {
	    	Road_l_data2.push(arr1[0]+0.1);
          }
          else{
        	  Road_l_data2.push(arr1[1]+0.1);
          }
	    var Road_l_data3 = Road_r_option1.series[3].data;
	    Road_l_data3.shift();
	    if(arr1[0]!=arr1[1]){
	    	Road_l_data3.push( Math.abs(arr1[1]-arr1[0])-0.2);
	    }else{
	    	Road_l_data3.push(0);
	    }
	   // Road_r_chart1.setOption(Road_r_option1);
	}, 3000);