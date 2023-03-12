option = {
  tooltip: {},
  legend: {
    bottom: 0,
    left: 'center',
    data: ['茶颜悦色', '都可', '益禾堂', '喜茶', '蜜雪冰城'],
  },
  color: ['#785DFD', '#33D6FF', '#2D7EFD', '#FF6497', '#FFBB61'],
  title: {
    textStyle: {
      color: '#f2f2f2',
      fontSize: 13,
      top: '10px',
    },
    subtextStyle: {
      fontSize: 20,
      color: ['#ff9d19'],
      fontWeight: 800,
    },
    x: 'center',
    y: 'center',
  },
  grid: {
    top: '0%',
    left: '3%',
    right: '3%',
    bottom: '0%',
    containLabel: true,
  },
  series: [
    // 主要展示层的
    {
      radius: ['40%', '81%'],
      center: ['50%', '50%'],
      type: 'pie',
      label: {
        normal: {
          show: true,
          formatter: function (item) {
            let p;
            if (item.name.length > 0) {
              p = item.name.slice(0, 7) + '\n' + item.name.slice(7, item.name.length) + item.percent + '%';
            } else {
              p = item.name + item.percent + '%';
            }
            return p;
          },
          textStyle: {
            fontSize: 15,
          },
          position: 'outside',
        },
        emphasis: {
          show: true,
        },
      },
      labelLine: {
        normal: {
          show: true,
          length: 5,
          length2: 25,
        },
        emphasis: {
          show: true,
        },
      },
      data:  [
        {name: '茶颜悦色', value: 1},
        {name: '都可', value: 5},
        {name: '益禾堂', value: 5},
        {name: '喜茶', value: 5},
        {name: '蜜雪冰城', value: 5},
      ],
      itemStyle: {
        normal: {
          borderColor: '#ffffff',
          borderWidth: 3,
        },
      },
    },
    // 边框的设置
    {
      radius: ['30%', '34%'],
      center: ['50%', '50%'],
      type: 'pie',
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
      animation: false,
      tooltip: {
        show: false,
      },
      data: [
        {
          value: 1,
          itemStyle: {
            color: 'rgb(161,125,125,0.5)',
          },
        },
      ],
    },
    {
      name: '外边框',
      type: 'pie',
      clockWise: false, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      center: ['50%', '50%'],
      radius: ['65%', '65%'],
      label: {
        normal: {
          show: false,
        },
      },
      data: [
        {
          value: '',
          name: '',
          itemStyle: {
            color: '#333',
            normal: {
              borderWidth: 2,
              borderColor: '#0b5263',
            },
          },
        },
      ],
    },
  ],
};
