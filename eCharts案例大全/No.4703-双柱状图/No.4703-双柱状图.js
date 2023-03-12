  var weekData = ['公寓','图书馆','校门'];
  var data1Arr = [20, 40, 60,];
  var data2Arr = [45, 62, 83];
  var dataName = ['出', '入'];
  
  
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
      legend: {
          data: dataName,
          left: "3%",
          top:'2%',
          icon: "circle",
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          textStyle: {
              color: "#666666",
              fontSize: 13,
              padding: [2, 0, 0, 0]
          },
      },
      grid: {
          left: "5%",
          right: "3%",
          bottom: "5%",
          top: '15%',
          containLabel: true,
      },

      xAxis: [{
          type: "category",

          axisLine: {
              show: true,
              lineStyle: {
                  color: "#D1D1D1",
              },
          },
          axisTick: {
              show: false,
          },
          axisLabel: {
              color: "#666666",
              textStyle: {
                  fontSize: 13,
              },
          },
          data: weekData,
      }, ],
      yAxis: [{
          name:'人',
         nameTextStyle:{
           color:'#666666',  
           fontSize:13,
         },
          type: "value",
          splitLine: { //y轴网格线
              lineStyle: {
                  color: "#D1D1D1",
                 // type:'dashed',
              },
          },
          axisLabel: { //y轴文本
              showMinLabel: false, //y轴是否设置最小刻度0
              color: "#666666",
              textStyle: {
                  fontSize: 13,
              },
          },
          axisTick: {
              show: false,
          },
          axisLine: { //y轴线
              show: true,
              lineStyle:{
                  color:'#D1D1D1',
              },
          },
      }, ],
      series: [{
              name: dataName[0],
              label: {
            show: true,
            fontSize: 12,
            //fontWeight: 'bold',
            position: 'top',
            color: '#999999',
        },
              color: new echarts.graphic.LinearGradient( //渐变色
                  1, 1, 0, 0, [{
                          offset: 1,
                          color: '#6D9BFF'
                      }, {
                          offset: 0,
                          color: '#2E64EF'
                      }

                  ]
              ),
              itemStyle:{
                normal:{
                    barBorderRadius: [3, 3, 0, 0],
                }  
              },
              type: "bar",
              barWidth: "10", //柱型宽度
              data: data1Arr,
          },
          {
              name: dataName[1],
              label: {
            show: true,
            fontSize: 12,
            //fontWeight: 'bold',
            position: 'top',
            color: '#999999',
        },
              color: new echarts.graphic.LinearGradient(
                  1, 1, 0, 0, [{
                          offset: 1,
                          color: '#00BEAE'
                      }, {
                          offset: 0,
                          color: '#05C39A'
                      }

                  ]
              ),
              itemStyle:{
                normal:{
                    barBorderRadius: [3, 3, 0, 0],
                }  
              },
              type: "bar",
              barWidth: "10",
              data: data2Arr,
          },
      ],
  };