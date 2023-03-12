var data = 308; //数值大小
var max = 500; //满刻度大小
option = {
  backgroundColor: 'linear-gradient(90deg, rgba(7, 32, 39, 0.4) 0%, #1B302C 100%)',
  title: {
    text: 65 + '%',
    x: 'center',
    y: 'center',
    textStyle: {
      fontSize: '45',
      fontWeight: '400',
      fontFamily: 'Source Han Sans CN',
      color: '#56D4B2',
    },
  },
  series: [
    {
      type: 'liquidFill',
      radius: '53%',
      center: ['50%', '50%'],
      amplitude: 10,
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(27, 192, 179, 0.22)',
          },
          {
            offset: 1,
            color: 'rgba(27, 192, 179, 0.22)',
          },
        ],
      },
      data: [0.5, 0.5, 0.44],
      backgroundStyle: {
        borderWidth: 1,
        color: 'rgba(27, 192, 179, 0.06)',
      },
      label: {
        normal: {
          formatter: '',
        },
      },
      outline: {
        show: true,
      },
    },
    {
      type: 'pie',
      radius: ['60%', '70%'],
      hoverAnimation: false,
      labelLine: {
        show: false,
      },
      data: [
        {
          value: data,
          itemStyle: {
            normal: {
              color: '#1e94e5',
            },
          },
        },
        {
          //画剩余的刻度圆环
          value: max - data,
          itemStyle: {
            normal: {
              color: '#84E36311',
            },
          },
        },
      ],
    },
    {
      type: 'pie',
      radius: ['75%', '85%'],
      hoverAnimation: false,
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 50,
          itemStyle: {
            normal: {
              color: '#f9e671',
            },
          },
        },
        {
          //画剩余的刻度圆环
          value: max - data,
          itemStyle: {
            normal: {
              color: '#84E36311',
            },
          },
        },
      ],
    },
  ],
};
