var value=90.5
option = {
    angleAxis: {
      show: false,
      max: (100 * 360) / 180, //-45度到225度，二者偏移值是270度除360度
      type: 'value',
      startAngle: 180, //极坐标初始角度
      splitLine: {
        show: false,
      },
    },
    barMaxWidth: 36, //圆环宽度
    radiusAxis: {
      show: false,
      type: 'category',
    },
    //圆环位置和大小
    polar: {
      center: ['50%', '69%'],
      radius: '180%',
    },
    series: [
      {
        //下层圆环，显示最大值
        type: 'bar',
        data: [
          {
            value: 100,
            itemStyle: {
                color: { //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1, //从左到右 0-1
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgb(11,255,0)'
                    }, {
                        offset: 0.3,
                        color: 'rgb(239,255,0)'
                    }, {
                        offset: 0.6,
                        color: 'rgb(239,255,0)'
                    }, {
                        offset: 1,
                        color: '#f00'
                    }],
                },
            },
          },
        ],
        barGap: '-100%',
        coordinateSystem: 'polar',
        roundCap: true,
        z: 1,
      },
       {
            type: "gauge",
            radius: '100%',
            center: ["50%", "70%"],
            splitNumber:100, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              show: false,
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
              show: true,
              fontSize:24,
              distance:-112,
              color:value < 35?'rgb(11,255,0)':value<80?'rgb(239,255,0)':'#f00',
              formatter:function(params){
                  if(params == parseInt(value)){
                      return value + '%'
                  }else{
                      return ''
                  }
              }
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: true,  //是否显示指针
                length: "80%",
                width: "2%",
            },
            itemStyle: {
                color: '#8280bc',
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: ['0', '-56%'],
                textStyle: {
                    fontSize: 30,
                    color: value < 35?'rgb(11,255,0)':value<80?'rgb(239,255,0)':'#f00',
                },
                formatter:()=>{
                    return value < 35?'正常':value<80?'警告':'异常'
                }
            },
            data: [{
                value: value,
            }, ],
             markPoint: {
                animation: false,
                silent: true,
                data: [
                    {
                        x: '50%',
                        y: '70%',
                        symbol: 'circle',
                        symbolSize: 30,
                        itemStyle: {
                            color: '#8280bc',
                        },
                    },
                ],
        },
        }
    ],
};
        