var option = {
          backgroundColor: '#1daaeb', //1daaeb
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'none',
            },
            formatter: function(params){
              let name = `${params[0].name}:`;
              let res = '';
              params.forEach(sItem =>{
                res += `<br/>${sItem.seriesName}:${Math.abs(sItem.value)}`
              })

              return `${name}${res}`;
            },
          },
         graphic: [{
             type: 'group',
             right: 20,
             top: 40,
             children: [{
                 type: 'text',
                 z: 100,
                 left: '10',
                 top: 'middle',
                 style: {
                   fill: '#fff',
                   text: '72',
                   font: '24px Microsoft YaHei'
                 }
               },{
               type: 'text',
               z: 100,
               left: '40',
               top: 'middle',
               style: {
                 fill: '#fff',
                 text: 'Mbps上传',
                 font: '14px Microsoft YaHei'
               }
             }]
           },{
            type: 'group',
            right: 20,
            top:90,
            children: [{
              type: 'text',
              z: 100,
              left: '10',
              top: 'middle',
              style: {
                fill: '#fff',
                text: '72',
                font: '24px Microsoft YaHei'
              }
            },{
              type: 'text',
              z: 100,
              left: '40',
              top: 'middle',
              style: {
                fill: '#fff',
                text: 'Mbps下传',
                font: '14px Microsoft YaHei'
              }
            }]
        }
         ],
         grid: {
           left: '3%',
           right: '8%',
           bottom: '5%',
           top:'4%',
         },
         xAxis: {
            type: 'category',
            data: ['1号','2号','3号','4号','5号','1号','2号','3号','4号','5号','1号','2号','3号','4号','5号','1号','2号','3号','4号','5号','1号','2号','3号','4号','5号','1号','2号','3号','4号','5号','1号','2号','3号','4号','5号','1号','2号','3号','4号','5号',],
           boundaryGap: false,
           axisLine: {
             lineStyle: {
               color: '#3aa1ff', // 颜色
               width: 3 // 粗细
             },
           },
           axisLabel: {
             show: false,  /*汉字不显示*/
             textStyle: {
               color: '#fff'
             }
           }
          },
          yAxis: [{
            type: 'value',
            show:false,
            splitLine: {
              show: true,
              lineStyle:{
                color:'rgba(255,255,255,0.2)'
              }
            },
            axisLine:{
              show:false
            },
            axisLabel:{
              formatter:function (value, index) {
                if(value<0){
                  return -value;
                }else {
                  return value;
                }
              },
              fontWeight:10,
              fontsize:5,
              color:'rgba(255,255,255,0.3)'
            }

          }],
          series: [{
            name: '收入',
            type: 'line',
            stack: '总量',
            symbol: 'none',  //取消折点圆圈
            smooth: true, //平滑
            lineStyle: {
              width: 2,
              color: '#3aa1ff',
              shadowColor: 'rgba(124, 187, 245, 0.5)',
              shadowBlur: 10,
              shadowOffsetY: 7
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#cde4fe'
                },{
                    offset:1,
                    color: '#73d0fb'
                  }],
                globalCoord: false // 缺省为 false
              }
            },
            data: [100,200,50,300,150,100,200,50,300,150,100,200,50,300,150,100,200,50,300,150,100,200,50,300,150,100,200,50,300,150,100,200,50,300,150,100,200,50,300,150,]
          },{
            name: '支出',
            type: 'bar',
            stack: '总量',
            barWidth: 10,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1, [
                    {offset: 0, color: '#d8e0ff'},
                    {offset: 1, color: '#dbd3ad'}
                  ]
                )
              }
            },
            data: [-80,-60,-230,-140,-190,-80,-60,-230,-140,-190,-80,-60,-230,-140,-190,-80,-60,-230,-140,-190,-80,-60,-230,-140,-190,-80,-60,-230,-140,-190,-80,-60,-230,-140,-190,-80,-60,-230,-140,-190,]
          }]
        };