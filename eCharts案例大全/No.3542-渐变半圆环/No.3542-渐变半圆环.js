var bfb = '60';
var rich = {
    white: {
        fontSize: 30,
        color: '#21F0FF',
        fontWeight: '500',
        // fontStyle: 'oblique',
        padding: [-100, 0, 0, 0]
    },
    bule: {
        fontSize: 60,
        fontFamily: 'DINBold',
        color: '#21F0FF',
        // fontWeight: '700',
        // fontStyle: 'italic',
        padding: [-120, 0, 0, 0],
    },
    radius: {
        width: 350,
        height: 80,
        // lineHeight:80,
        // borderWidth: 1,
        // borderColor: '#0092F2',
        fontSize: 36,
        color: '#FFE58D',
        // fontWeight: 'bold',
        // backgroundColor: '#1B215B',
        // borderRadius: 20,
        textAlign: 'center',
    },
    size: {
        height: 400,
        padding: [100, 0, 0, 0]
    }
}
option = {
  backgroundColor: '#076696',
  title: {
    // text: '外籍人员\n\n' + bfb,
    text: ['{radius|外籍人员占比}\n\n\n','{bule|'+bfb+'}','{white|%}'].join(''),
    textStyle: {
      color: '#FFFDBB',
      fontSize: 50,
      fontWeight: 'bold',
      rich: rich,
    },
    left: 'center',
    bottom: '37%',

    itemGap: 60,
  },
  tooltip: {
    show: false,
  },
  legend: {},
  series: [
    {
      name: '数据',
      type: 'pie',
      startAngle: 315,
      radius: ['50%', '60%'],
      legendHoverLink: false,
      hoverAnimation: false,
      avoidLabelOverlap: false,
      silent: true,
      label: {
        normal: {
          show: false,
          position: 'center',
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [ // 主要通过这个 data 来控制进度条, 有值的与空的pie合计为 150
        {
          value: 50,  // 占位的
          itemStyle: {
            normal: {
              color: 'rgba(0,0,0,0)',
            },
          },
          
        },
        {
          value: 90, // 有值的pie
          itemStyle: {
            normal: {
              color: {
                // 完成的圆环的颜色
                colorStops: [
                  {
                    offset: 0,
                    color: '#02d6fc', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#0469AA', // 100% 处的颜色
                  },
                ],
              },
              borderWidth: 2,
               shadowBlur: 20,
               borderColor: '#02BFD3',
              shadowColor: '#076696'
            },
          },
        },
        {
          value: 60, // 空的pie，  150 - 有值的pie = 空的pie
          itemStyle: {
            normal: {
              // color: "#06578C",
              color: {
                // 完成的圆环的颜色
                colorStops: [
                  {
                    offset: 0,
                    color: '#045990', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#045990', // 100% 处的颜色
                  },
                ],
                
              },
                borderWidth: 2,
                        shadowBlur: 20,
                        borderColor: '#02ACCB',
                        shadowColor: '#076696',
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
        },
      ],
    },
{
      name: '中圈',
      type: 'pie',
      startAngle: 315,
      hoverAnimation: false,
      silent: true,
      radius: ['60%', '70%'],
      label: {
        normal: {
          show: false,
          position: 'center',
        },
        emphasis: {
          show: false,
          textStyle: {
            fontSize: '10',
            fontWeight: 'bold',
          },
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        {
          value: 25,
          itemStyle: {
            normal: {
              color: 'rgba(0,0,0,0)',
            },
          },
        },
        {
          value: 75,
          itemStyle: {
            normal: {
                color: {
                // 完成的圆环的颜色
                colorStops: [
                  {
                    offset: 0,
                    color: '#0568BB', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#076BA8', // 100% 处的颜色
                  },
                ],
                
              },
            },
          },
        },
      ],
    },
    {
      name: '外圈',
      type: 'pie',
      startAngle: 315,
      hoverAnimation: false,
      silent: true,
      radius: ['68%', '69%'],
      label: {
        normal: {
          show: false,
          position: 'center',
        },
        emphasis: {
          show: false,
          textStyle: {
            fontSize: '10',
            fontWeight: 'bold',
          },
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        {
          value: 25,
          itemStyle: {
            normal: {
              color: 'rgba(0,0,0,0)',
            },
          },
        },
        {
          value: 75,
          itemStyle: {
            normal: {
                color: {
                // 完成的圆环的颜色
                colorStops: [
                  {
                    offset: 0,
                    color: '#02DAEE', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#0290D0', // 100% 处的颜色
                  },
                ],
                
              },
            },
          },
        },
      ],
    },
  ],
};
