option = {
  title: {
    show: false,
    text: '',
  },
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    top: '40',
    right: '10',
    left: '10',
    bottom: '30',
    containLabel: true,
  },
  dataGroupId: '',
  animationDurationUpdate: 500,
  xAxis: {
    //坐标轴线
    axisLine: {
      show: false,
    },
    //坐标轴刻度相关设置
    axisTick: {
      show: false,
      interval: 0,
    },
    //坐标轴刻度标签的相关设置
    axisLabel: {
      interval: 0,
      align: 'center',
      rotate: '20',
      margin: '36',
    },
    triggerEvent: true,
    data: ['北方公司', '蒙东公司', '滇东公司', '华亭煤业', '陕西矿业', '扎煤', '庆阳煤电'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '报警数量',
      type: 'bar',
      barWidth: 35,
      itemStyle: {
        color: '#04e9ee',
      },
      universalTransition: {
        //开启全局动画过度策略
        enabled: true,
        divideShape: 'clone',
      },
      data: [
        {
          value: 1,
          groupId: '1',
        },
        {
          value: 2,
          groupId: '2',
        },
        {
          value: 3,
          groupId: '3',
        },
        {
          value: 4,
          groupId: '4',
        },
        {
          value: 5,
          groupId: '5',
        },
        {
          value: 6,
          groupId: '6',
        },
        {
          value: 7,
          groupId: '7',
        },
      ],
    },
  ],
};
const drilldownData = [
  {
    dataGroupId: '1',
    data: [
      {
        name: '第一矿',
        val1: { value: 5, groupId: '1' },
        val2: { value: 15, groupId: '1' },
      },
      {
        name: '第二矿',
        val1: { value: 8, groupId: '2' },
        val2: { value: 12, groupId: '2' },
      },
      {
        name: '第三矿',
        val1: { value: 13, groupId: '3' },
        val2: { value: 7, groupId: '3' },
      },
    ],
  },
  {
    dataGroupId: '2',
    data: [
      {
        name: '第四矿',
        val1: { value: 5, groupId: '1' },
        val2: { value: 15, groupId: '1' },
      },
      {
        name: '第五矿',
        val1: { value: 8, groupId: '2' },
        val2: { value: 12, groupId: '2' },
      },
      {
        name: '第六矿',
        val1: { value: 13, groupId: '3' },
        val2: { value: 7, groupId: '3' },
      },
    ],
  },
  {
    dataGroupId: 'cars',
    data: [
      ['Toyota', 4],
      ['Opel', 2],
      ['Volkswagen', 2],
    ],
  },
];
myChart.on('click', function (event) {
  if (event.data) {
    var subData = drilldownData.find(function (data) {
      return data.dataGroupId === event.data.groupId;
    });
    if (!subData) {
      return;
    }
    myChart.setOption({
      xAxis: {
        data: subData.data.map(function (item) {
          return item.name;
        }),
      },
      series: [
        {
          type: 'bar',
          name: '设备离线',
          barWidth: 35,
          itemStyle: {
            color: '#fed62a',
          },
          data: subData.data.map(function (item) {
            return item.val1;
          }),
          universalTransition: {
            enabled: true,
            divideShape: 'clone',
          },
        },
        {
          type: 'bar',
          name: '超排数量',
          barWidth: 35,
          itemStyle: {
            color: '#21c546',
          },
          data: subData.data.map(function (item) {
            return item.val2;
          }),
          universalTransition: {
            enabled: true,
            divideShape: 'clone',
          },
        },
      ],
      graphic: [
        {
          type: 'text',
          left: 50,
          top: 20,
          style: {
            text: 'Back',
            fontSize: 18,
          },
          onclick: function () {
            myChart.setOption(option, true);
          },
        },
      ],
    });
  }
});
