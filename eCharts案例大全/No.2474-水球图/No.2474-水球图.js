//需要引入外部脚本
//https://cdn.jsdelivr.net/npm/echarts-liquidfill@3/dist/echarts-liquidfill.min.js

let value = 0.6104;
option = {
  series: [
    {
      type: 'liquidFill',
      radius: '78.1%',
      center: ['50%', '50%'],
      color: ['#ecf3fe', '#c8dcfe', '#5594fa'],
      data: [value, value, value], // data个数代表波浪数
      amplitude: 15,
      // 图形样式
      itemStyle: {
        opacity: 1, // 波浪的透明度
        shadowBlur: 0, // 波浪的阴影范围
      },
      backgroundStyle: {
        borderWidth: 2,
        borderColor: '#448af9',
        color: '#fff',
      },
      label: {
        show: true,
        textStyle: {
          color: '#5594fa',
          insideColor: '#12786f',
          fontSize: 40,
        },
        formatter: (params) => {
          return `${(params.value * 100).toFixed(2)}%`;
        },
      },
      outline: {
        show: false,
      },
    },
  ],
};
