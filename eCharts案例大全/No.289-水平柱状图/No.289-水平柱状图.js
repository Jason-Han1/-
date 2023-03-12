
    const list = [
      {
        name: '当日交付进度',
        value: 90,
        symbolOffset:[10,0] //图像偏移设置
      },
    ];
    const datas = [
      '当日交付进度',
    ];
    const list1 = [
      {
        name: '当月交付进度',
        value: 60 
      },
    ];
    const datas1 = [
      '当月交付进度',
    ];

    const list2 = [
      {
        name: '当日SPD预测',
        value: 80
      },
    ];
    const datas2 = [
      '当日SPD预测',
    ];
    
    option = {
           xAxis: {
        max:100,
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      grid: {
        containLabel: true,
        left: '3%',
        top: '0%',
        right: '10%',
        bottom: '3%',
      },
      yAxis: [
        {
          type: 'category',
          inverse: false,
          data: datas,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
      ],
      series: [  {
        // 内
        type: 'bar',
        barWidth: 8,
        barGap: '20%',
        silent: true,
        itemStyle: {
          normal: {
            color: '#03171F'
          }
        },
        z: 1,
        animationEasing: 'elasticOut',
      },
        {
          type: 'pictorialBar',
          animationDuration: 0,
          symbolRepeat: 'fixed',
          symbolMargin: '20%',
          symbol: 'rect',
          symbolSize: [5, 10],
          itemStyle: {
            normal: {
              color: 'transparent',
            },
          },
          label: {
            normal: {
              show: true,
              position: 'insideRight',
              offset: [0, 0],
  formatter:function(params){
    console.log(params)
    return `${params.value ==  "0.0001"? 0:params.value}`+'%';
  },
              textStyle: {
                color: '#000',
                fontSize: 14
              },
            },
          },
          data: [`${list[0].value == '0.00'? 0.0001:list[0].value}`],
          z: 3,
          animationEasing: 'elasticOut',
        },
        {
          //分隔
          type: 'pictorialBar',
          symbolRepeat: 'fixed',
          symbolMargin: 6,
          symbol: 'rect',
          symbolClip: true,
          symbolSize: [50, 10],
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#0b457f'
                        },{
                            offset: 1,
                            color: '#2ff8ff' 
                        }])
          }
        },
          symbolPosition: 'start',
          data: list,
          z: 2,
          animationEasing: 'elasticOut',
        },

        {
          name: '外框',
          type: 'bar',
          barGap: '-100%', // 设置外框粗细
          data: [
            {
              value:100,
              itemStyle: {
                borderColor: "#91FFDF",
                color: 'transparent',
              },
            }
          ],
          barWidth: 20,
          itemStyle: {
            normal: {
              borderWidth: 1, // 边框宽度
            },
          },
          z: 0,
        }
      ],
    }
    
    
