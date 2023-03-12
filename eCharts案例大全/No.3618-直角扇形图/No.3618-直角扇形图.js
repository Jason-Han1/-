
var data = [15, 18, 20, 22, 25];
var sum = data.reduce((num, item) => (num += item), 0);
console.log(sum);
var pieSeries = [];
data.forEach((item) => {
  pieSeries.push({
    value: item,
    labelLine: {
      length: 0,
      length2: 0,
      lineStyle: {
        type: 'dashed',
        color: '#000000',
      },
      itemStyle: {
        opacity: 0.5
      }
    },
  });
});
for (var i = 0; i < 15; i++) {
  pieSeries.push({
    value: i + 1,
    itemStyle: {
      color: 'transparent',
    },
    labelLine: {
      show: false,
    },
  });
}

option = {
  title: {
    text: 'Awesome Chart',
  },

  // polar: {

  // },
  // radiusAxis: {
  //   type: 'value',
  //   axisLine: {
  //     symbol: 'none',
  //   },
  //   data: [0, 5, 10, 15, 20, 25],
  //   z: 10
  // },
  // angleAxis: {
  //   type: 'category',
  //   startAngle: 0,
  //   data: ['发展', '生态', '开放', '结构', '创新']
  // },
  // angleAxis: {
  //     startAngle: 90,

  // },
  series: [
    {
      type: 'pie',
      startAngle: 90,
      roseType: false,
      radius: [0, '75%'],
      itemStyle: {
        borderCap: 'round',
        borderRadius: 5,
      },
      center: ['50%', '50%'],
      data: [
        {
          value: 500,
          label: {
            show: false,
          },
          itemStyle: {
            borderColor: '#000',
            borderWidth: 1,
            color: 'transparent',
          },
        },
        {
          value: 1500,
          itemStyle: {
            color: 'transparent',
          },
        },
      ],
    },
    {
      type: 'pie',
      startAngle: 90,
      radius: [0, '65%'],
      center: ['50%', '50%'],
      data: [
        {
          value: 500,
          label: {
            show: false,
          },
          itemStyle: {
            borderType: 'dashed',
            borderColor: '#000',
            borderWidth: 1,
            color: 'transparent',
          },
        },
        {
          value: 1500,
          label: {
            show: false,
          },
          itemStyle: {
            color: 'transparent',
          },
        },
      ],
    },
    {
      type: 'pie',
      startAngle: 90,
      radius: [0, '55%'],
      center: ['50%', '50%'],
      data: [
        {
          value: 500,
          label: {
            show: false,
          },
          itemStyle: {
            borderType: 'dashed',
            borderColor: '#000',
            borderWidth: 1,
            color: 'transparent',
          },
        },
        {
          value: 1500,
          label: {
            show: false,
          },
          itemStyle: {
            color: 'transparent',
          },
        },
      ],
    },
    {
      type: 'pie',
      startAngle: 90,
      radius: [0, '45%'],
      center: ['50%', '50%'],
      data: [
        {
          value: 500,
          label: {
            show: false,
          },
          itemStyle: {
            borderType: 'dashed',
            borderColor: '#000',
            borderWidth: 1,
            color: 'transparent',
          },
        },
        {
          value: 1500,
          label: {
            show: false,
          },
          itemStyle: {
            color: 'transparent',
          },
        },
      ],
    },
    {
      type: 'pie',
      startAngle: 90,
      radius: [0, '35%'],
      center: ['50%', '50%'],
      data: [
        {
          value: 500,
          label: {
            show: false,
          },
          itemStyle: {
            borderType: 'dashed',
            borderColor: '#000',
            borderWidth: 1,
            color: 'transparent',
          },
        },
        {
          value: 1500,
          label: {
            show: false,
          },
          itemStyle: {
            color: 'transparent',
          },
        },
      ],
    },
    {
      type: 'pie',
      roseType: 'area',
      startAngle: 90,
      data: pieSeries,
    },
  ],
};
