let itemStyle = {
  value: 1000,
  show: false,
  name: '',
  itemStyle: {
    normal: {
      color: 'transparent',
    },
  },
};

const getDataList = () => {
  return [
    {
      value: 31314,
      show: true,
      scales: '45%',
      name: '周期性工单',
      itemStyle: {
        normal: {
          color: '#4ab9bc',
        },
      },
    },
    itemStyle,
    {
      value: 21325,
      scales: '25%',
      show: true,
      name: '临时工单',
      itemStyle: {
        normal: {
          color: '#1ab47b',
        },
      },
    },
    itemStyle,
    {
      value: 21325,
      show: true,
      scales: '25%',
      name: '市民报事工单',
      itemStyle: {
        normal: {
          color: '#3876c4',
        },
      },
    },
    itemStyle,
    {
      value: 12325,
      show: true,
      scales: '15%',
      name: '预警工单',
      itemStyle: {
        normal: {
          color: '#f5d370',
        },
      },
    },
    itemStyle,
  ];
};

const dataList = getDataList();
let legend = {
  selectedMode: false, // 取消图例上的点击事件
  type: 'plain',
  orient: 'vertical',
  left: '45%',
  top: '20%',
  align: 'left',
  itemGap: 20,
  // itemWidth: 12, // 设置宽度
  // itemHeight: 7, // 设置高度
  symbolKeepAspect: false,
  textStyle: {
    color: '#000',
    rich: {
      name: {
        verticalAlign: 'right',
        align: 'left',
        width: 110,
        fontSize: 15,
        color: '#e6e6e6',
      },
      value: {
        align: 'left',
        width: 50,
        fontSize: 15,
        color: '#fff',
      },
      un: {
        color: '#adafb3',
        fontSize: 14,
        align: 'left',
      },
      scale: {
        fontSize: 16,
        color: '#fff',
        width: 50,
        align: 'left',
      },
    },
  },
  data: dataList.map((item) => {
    if (item.show) {
      return item.name;
    }
  }),
  formatter: function (name) {
    if (dataList && dataList.length) {
      for (var i = 0; i < dataList.length; i++) {
        if (name === dataList[i].name) {
          return (
            '{name| ' +
            name +
            '} ' +
            '{scale|' +
            dataList[i].scales +
            '}' +
            '{value| ' +
            dataList[i].value +
            '}' +
            '{un|单}'
          );
        }
      }
    }
  },
};

option = {
  backgroundColor: '#333',
  title: [
    {
      text: '6732',
      x: '13%',
      y: '37%',
      textStyle: {
        fontWeight: 'normal',
        color: '#e6e6e6',
        fontSize: 30,
      },
    },
    {
      text: '交通事件总数',
      x: '15%',
      y: '48%',
      textStyle: {
        fontWeight: 'normal',
        color: '#fff',
        fontSize: 15,
      },
    },
  ],
  legend,
  series: [
    {
      itemStyle: {
        normal: {
          show: true,
        },
      },
      type: 'pie',
      radius: ['40%', '60%'],
      center: ['20%', '45%'],
      label: {
        normal: {
          show: false,
        },
      },
      data: getDataList(),
    },
    {
      itemStyle: {
        normal: {
          color: 'rgba(0,177,242, 0.3)',
        },
      },
      type: 'pie',
      hoverAnimation: false,
      radius: ['35%', '65%'],
      center: ['20%', '45%'],
      label: {
        normal: {
          show: false,
        },
      },
      data: [
        {
          value: 1,
        },
      ],
      z: -1,
    },
  ],
};
