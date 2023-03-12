  var weekData = ['2018-1','2018-2','2019-1','2019-2','2020-1','2020-2'];
  var data1Arr = [70, 75, 85, 78, 72, 71];
 // var data2Arr = [58, 55, 53, 57, 58, 62];

  var dataName = ['换毕业证', '换学位证'];
  
  
  var option = {
    backgroundColor:'#fff',
      tooltip: {
          trigger: "axis",
          axisPointer: {
            type:'none'
        },
          textStyle: {
              fontSize: 14,
          },
      },
     
      grid: {
          left: "3%",
          right: "3%",
          bottom: "5%",
          top: '15%',
          containLabel: true,
      },
//X 底轴
      xAxis: [{
          type: "category",

          axisLine: {
              show: true,
              lineStyle: {
                  
                  color: "#46C4FF",
                  width:2
                      
              },
          },
          axisTick: {
              show: false,
          },
          //底轴文本
          axisLabel: {
              color: "#6F84BD",
              textStyle: {
                  fontSize: 13,
              },
          },
          data: weekData,
      }, ],
      yAxis: [{
          name:'专业数（个）',
         nameTextStyle:{
           color:'#6F84BD',  
           fontSize:13,
         },
         
          type: "value",
          splitLine: { //y轴网格线
              lineStyle: {
                  color: "#46C4FF",
                  opacity:'0.5',
                  //type:'dashed',
              },
          },
          axisLabel: { //y轴文本
              showMinLabel: false, //y轴是否设置最小刻度0
              color: "#6F84BD",
              textStyle: {
                  fontSize: 13,
              },
          },
          axisTick: {
              show: false,
          },
          axisLine: { //y轴线
              show: false,
              lineStyle:{
                  color:'#D1D1D1',
              },
          },
      }, ],
      series: [{
              name: dataName[0],
             
              color: new echarts.graphic.LinearGradient( //渐变色
                  1, 1, 0, 0, [{
                          offset: 1,
                          color: '#00C0F0'
                      }, {
                          offset: 0,
                          color: '#6569FF'
                      }

                  ]
              ),
              itemStyle:{
                normal:{
                    barBorderRadius: [3, 3, 0, 0],
                }  
              },
              type: "bar",
              barWidth: "15", //柱型宽度
              data: data1Arr,
          },
        
      ],
  };
  return option;  