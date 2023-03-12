  
  option = {
      legend:{
          data:['累计额','年度额'],
          selectedMode:false,
          icon:'circle',
          left:'center',
          bottom:'25%',
          itemGap:5,
          width:10,
          formatter:function(parmes){
              let html='{a|'+parmes+'} '
              for (var i = 0; i < '123456'.length; i++) {
                  html+='   {b|'+ '123456'.split('')[i]+'}';
              }
              return html+'   {b|元}';
          },
          textStyle:{
              rich:{
                  a:{
                      fontSize:16,
                      color:'#000000',
                      padding:5
                  },
                  b:{
                      fontSize:14,
                      color:'#ffffff',
                      lineHeight:20,
                      borderRadius:7,
                      width:20,
                      height:25,
                      align:'center',
                      backgroundColor:'#4094D0'
                  }
              }
          }
      },
      xAxis:[{
          type:'category',
          data:[],
          show:false,
          axisLine:{show:false},
          splitLine:{show:false},
          splitArea:{
              interval:'auto',
              show:false}
      }],
      yAxis:[{
          type:'value',
          show:false,
          axisLine:{show:false},
          splitLine:{show:false}
      }],
      toolbox:{
          show:true
      },
      backgroundColor:'#ffffff',
      
      series: [
          //图例
          {
              name:'累计额',
              type:'bar',
              barWidth:'50%',
              data:[0],
              itemStyle:{normal:{color:'#4094D0',}}
              
          },
          //图例
         {
              name:'年度额',
              type:'bar',
              barWidth:'50%',
              data:[0],
              itemStyle:{normal:{color:'#EE843C',}}
              
          },
          // 小圆环
          {
              tooltip: {
                  show: false
              },
              "name": '小圆形',
              "type": 'pie',
              "hoverAnimation": false,
              "legendHoverLink": false,
              "radius": ['1%', '0%'],
              "z": 3,
              "labelLine": {
                  "normal": {
                      "show": false
                  }
              },
              "data": [{
                  "value": 1,

                  itemStyle: {
                      normal: {
                          color: "red"
                      },
                      emphasis: {
                          color: "red"
                      }
                  }
              }]
          },
          {
              name: "",
              min: 0,
              max: 1000,
              z: 2,
              radius: '45%',
              splitNumber: 10,
              type: 'gauge',
              axisLine: {
                  lineStyle: {
                      width: 25,
                      
                      color: [
                          [0.8, '#4094D0'],
                          [1, '#EE843C']
                      ]
                  }
              },
              
              splitLine: {
                  length: 0,//坐标轴长度
                  color: '#203add'
              },
  
              axisLabel: { // 坐标轴小标记
                  show: false,
                  distance: 3,
                  color:'#4094D0',
                  textStyle: { // 属性lineStyle控制线条样式
                      color: '#4094D0',
                      fontSize: 15, //改变仪表盘内刻度数字的大小
                      shadowColor: '#000', //默认透明
                  }
              },
              axisTick: {
                  splitNumber: 0
              },
              pointer: {
                  length: '90%',
                  width: 10,
                  
              
              },
              
              title: {
                  show: false,
                  offsetCenter: ['-40%', '70%'],
                  textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontWeight: 'bolder',
                      fontSize: 20,
                  }
              },
              detail: {
                  show: false
              },
              tooltip: {
                  show: false
              },
              data: [{
                  value: 500,
                  name: '当前进度'
              }]
          },
          {
              tooltip: {
                  show: false
              },
              name: "",
              type: 'gauge',
              min: 1,
              z: 1,
              max: 12,
              splitNumber: 11,
              startAngle: 225,
              endAngle: -45,
              radius: '30%',
              axisLine: {
                  lineStyle: {
                      width: 25,
                      color: [
                          [0, '#40C47C'],
                          [1, '#40C47C']

                      ],
                  }

              },
              axisLabel: {
                  color: '#40C47C', //刻度颜色
                  formatter: function(par) {
                      return parseInt(par);
                  }

              },
              splitLine: {
                  length: 25,
                  color: '#203add'
              },
              axisTick: {
                  splitNumber: 1,
                  color: '#0d1758'
              },
              pointer: {
                  width: 12,
                  
               
              },
              title: {
                  show: false,
                  offsetCenter: ['-30%', '80%'],
                  textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontWeight: 'bolder',
                      fontSize: 20,
                  }
              },
              detail: {
                  show: false
              },
              data: [{
                  value: 4,
                  name: '当前月份'
              }]
          }
      ]
  };