option = {
    backgroundColor:'RGBA(26, 38, 67, 1)',
    title: {
            text: '70%',
            textStyle: {
                fontSize: 32,
                color: '#30ECA6',
                fontWeight:600,
            },
            x: 'center',
            y: 'center',
            formatter: function(d) {
                return d.seriesType;
            },
        },
    angleAxis: {
        show: false,
        max: (100 * 360) / 270, //-45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 225, //极坐标初始角度
        splitLine: {
            show: false,
        },
    },
    barMaxWidth: 10, //圆环宽度
    radiusAxis: {
        show: false,
        type: 'category',
    },
    //圆环位置和大小
    polar: {
        center: ['50%', '50%'],
        radius: '80%',
    },
    series: [
        {
            type: 'bar',
            stack: '测试',
            data: [
                {
                    //上层圆环，显示数据
                    value: 68,
                    name: 'sdfasdf',
                    itemStyle: {
                      color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                          {
                            offset: 0,
                            color:'rgba(48, 236, 166, 0.2)',
                          },
                          {
                            offset: 1,
                            color: 'rgba(48, 236, 166, 1)',
                          },
                        ]),
                    },
                },
            ],
            barGap: '-100%', //柱间距离,上下两层圆环重合
            coordinateSystem: 'polar',
            roundCap: true, //顶端圆角从 v4.5.0 开始支持
            z: 2,
        },
        {
            //下层圆环，显示最大值
            type: 'bar',
            data: [
                {
                    value: 100,
                    itemStyle: {
                        color: 'rgba(255,255,255,0.2)'
                    },
                },
            ],
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            z: 1,
        },
        // {
        //     stack: '纯色小圆点',
        //     type: 'bar',
        //     data: [0.01],
        //     showBackground: false,
        //     coordinateSystem: 'polar',
        //     roundCap: true,
        //     barWidth: 10,
        //     itemStyle: {
        //         color: 'rgba(48, 236, 166, 0.5)',
        //         borderColor: 'rgba(48, 236, 166, 1)',
        //         borderWidth: 6,
        //         shadowColor: 'rgba(48, 236, 166, 0.5)',
        //         shadowBlur: 15,
        //         shadowOffsetY: 3,
        //     },
        // },
        // 带空心的小圆点
        {
          type: 'pie',
          radius: ['39%', '40%'],
          zlevel: 10,
          silent: true,
          startAngle: 225,
          endAngle: 45,
          data: [
            {
              name: '',
              value: 0.68,
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              itemStyle: {
                color: 'rgba(0,0,0,0)',
              },
            },
    
            // 画中间的图标
            {
              name: '',
              value: 0,
              label: {
                position: 'inside',
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: 10, // 可以控制圆的大小
                borderWidth: 6,
                borderColor: 'rgba(48, 236, 166, 1)',
              },
            },
            {
              name: '',
              value: 1.34 - 0.68,
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              itemStyle: {
                color: 'rgba(255,255,255,0)',
              },
            },
          ],
        },
    ],
};
