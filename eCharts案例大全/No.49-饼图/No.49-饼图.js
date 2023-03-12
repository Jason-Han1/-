const dataList = [
  { value: 1048, name: '水田' },
  { value: 735, name: '水浇地' },
  { value: 580, name: '旱地' },
];
const handleData = {};
let sum = 0;
// 求和
dataList.map((item) => {
  sum += item.value;
});
// 数据处理
dataList.map((item) => {
  handleData[item.name] = item;
  handleData[item.name].percentage = ((item.value / sum) * 100).toFixed(1) + '%';
});

option = {
  legend: {
    show: true,
    icon: 'circle',
    right: '3%',
    left: 'center',
    bottom: '10%',
    itemWidth: 10,
    itemStyle: {
      borderColor: 'none',
    },
    textStyle: {
      rich: {
        name: {
          color: '#606266',
          fontSize: 14,
        },
        percentage: {
          color: '#606266',
          fontSize: 16,
          padding: [0, 0, 0, 30],
          align: 'right',
        },
      },
    },
  },
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      type: 'pie',
      color: ['#4D88FE', '#50CCCB', '#FFBF3C'],
      radius: '70%',
      left: 'center',
      data: dataList,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      labelLine: {
        show: true,
        length: 10,
        length2: 60,
      },
      label: {
        width:100,
        fontSize:12,
      },
      itemStyle: {
        borderColor: '#fff',
      },
    },
  ],
};
