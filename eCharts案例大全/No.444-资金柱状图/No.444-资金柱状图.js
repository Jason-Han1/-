const list = [
  { name: '1公司', value: '12400' },
  { name: '2公司', value: '10200' },
  { name: '3公司', value: '8500' },
  { name: '4公司', value: '8300' },
  { name: '5公司', value: '6200' },
  { name: '6公司', value: '6200' },
  { name: '7公司', value: '4100' }
];

// 对照渐变的颜色
const colorList = [
  { name: '1公司', from: '#7416F7', to: '#E021FD' },
  { name: '2公司', from: '#7416F7', to: '#E021FD' },
  { name: '3公司', from: '#4CA0FE', to: '#4DFAE0' },
  { name: '4公司', from: '#4CA0FE', to: '#4DFAE0' },
  { name: '5公司', from: '#FE7C04', to: '#FED020' },
  { name: '6公司', from: '#FE7C04', to: '#FED020' },
  { name: '7公司', from: '#6A6A9F', to: '#9980FA' }
];

option = {
  tooltip: {
    show: false // 不显示鼠标移入提示框组件
  },
  legend: {
    show: false // 不显示图列组件
  },
  grid: {
    // 直角坐标系绘图网格
    top: 0,
    left: 0
  },
  xAxis: {
    show: false // 不显示x轴
  },
  yAxis: [
    {
      type: 'category',
      inverse: true, // 倒叙，false会从小到大排
      axisLine: {
        show: false // 不显示坐标轴轴线
      },
      axisTick: {
        show: false // 不显示刻度线
      },
      offset: -20,
      zlevel: 100,
      position: 'left',
      axisLabel: {
        textStyle: {
          color: '#fff',
          align: 'left'
        }
      },
      data: list.map((item) => item.name)
    }
  ],
  series: [
    {
      barCategoryGap: '20%', // 柱间距，若是想要该属性生效，则不能设置barWidth属性
      name: 'value',
      type: 'bar',
      // 文本标签
      label: {
        show: true,
        color: '#fff',
        formatter: (info) => {
          return info.value;
        },
        position: 'right'
      },
      // 柱条样式
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: '#7416F7'
          },
          {
            offset: 1,
            color: '#E021FD'
          }
        ]),
        barBorderRadius: 50 // 柱条圆角
      },
      data: list.map((item) => {
        let itemStyle;
        colorList.forEach((color) => {
          if (item.name === color.name) {
            // 渐变颜色
            itemStyle = {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: color.from
                },
                {
                  offset: 1,
                  color: color.to
                }
              ]),
              barBorderRadius: 50 // 柱条圆角
            };
          }
        });
        return {
          name: item.name,
          value: item.value,
          itemStyle
        };
      })
    }
  ]
};
