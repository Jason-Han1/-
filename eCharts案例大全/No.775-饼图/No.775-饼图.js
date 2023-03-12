var colorList = ['#002f73', '#228f80', '#45c4e4'];
option = {
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(20, 24, 31,.6)',
    borderColor: '#0c2e36',
    textStyle: {
      color: '#fff',
    },
    formatter: '{b}: {c}%'
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['40%', '60%'],
      itemStyle: {
        normal: {
          color: function (params) {
            return colorList[params.dataIndex];
          },
        },
      },
      label: {
        show: true,
        position: 'outside',
          color: function (params) {
            return colorList[params.dataIndex];
          },
        formatter: '{b}：{d}%\n',
      },
      data: [
        { value: 20, name: '反对率' },
        { value: 20, name: '弃权率' },
        { value: 60, name: '赞成率' },
      ],
    },
  ],
};
