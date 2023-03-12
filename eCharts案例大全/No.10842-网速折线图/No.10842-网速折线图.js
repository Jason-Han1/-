var option = {
          backgroundColor: '#fff', //1daaeb
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'none',
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
                fill: '#2f4554',
                text: '72',
                font: '24px Microsoft YaHei'
              }
            },{
              type: 'text',
              z: 100,
              left: '40',
              top: 'middle',
              style: {
                fill: '#2f4554',
                text: 'Mbps上传',
                font: '14px Microsoft YaHei'
              }
            }]
          }],
          grid: {
            left: '3%',
            right: '3%',
            bottom: '20%',
            top:'10%',
          },
          xAxis: {
            type: 'category',
            data: ['1号','2号','3号','4号','5号','1号','2号','3号','4号','5号','1号','2号','3号','4号','5号','1号','2号','3号','4号','5号','1号','2号','3号','4号','5号','1号','2号','3号','4号','5号','1号','2号','3号','4号','5号','1号','2号','3号','4号','5号',],
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: '#1daaeb', // 颜色
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
              color: '#1daaeb',
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
                  color: '#1daaeb'
                },{
                  offset:1,
                  color: '#73d0fb'
                }],
                globalCoord: false // 缺省为 false
              }
            },
            data: [100,200,50,300,150,100,200,50,300,150,100,200,50,300,150,100,200,50,300,150,100,200,50,300,150,100,200,50,300,150,100,200,50,300,150,100,200,50,300,150,]
          }]
        };