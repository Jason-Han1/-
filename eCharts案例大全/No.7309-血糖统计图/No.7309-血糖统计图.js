var data = [
  ['2020-06-10 08:35:34', 42, true],
  ['2020-06-10 10:15:34', 31, true],
  ['2020-06-10 13:55:30', 98, true],
  ['2020-06-10 16:15:12', 56, true],
  ['2020-06-10 19:25:32', 71, true],
  ['2020-06-10 20:15:12', 76, false],
  ['2020-06-10 23:25:32', 81, false],
  //==================
  ['2020-06-11 09:23:12', 87, true],
  ['2020-06-11 12:15:12', 84, false],
  ['2020-06-11 16:15:12', 81, false],
  ['2020-06-11 18:25:32', 78, false],
  ['2020-06-11 19:25:32', 75, false],
  ['2020-06-11 20:25:32', 72, false],
  ['2020-06-11 21:33:42', 69, true],
  //==================
  ['2020-06-12 11:33:42', 98, true],
  ['2020-06-12 12:15:12', 102, false],
  ['2020-06-12 16:15:12', 106, false],
  ['2020-06-12 19:25:32', 110, false],
  ['2020-06-12 20:25:32', 114, false],
  ['2020-06-12 22:25:32', 118, false],
  ['2020-06-12 23:25:32', 122, false],
  //==================
  ['2020-06-13 05:13:12', 127, true],
  ['2020-06-13 07:21:22', 78, true],
  ['2020-06-13 10:31:32', 81, true],
  ['2020-06-13 14:41:02', 73, true],
  ['2020-06-13 17:11:33', 65, true],
  ['2020-06-13 20:51:13', 95, true],
  ['2020-06-13 22:11:33', 110, true],
];

option = {
  title: {
    text: '血糖统计图',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'cross',
      animation: false,
      label: {
        backgroundColor: '#505765',
      },
    },
  },

  xAxis: {
    name: '天',
    type: 'category',
    axisLine: { onZero: false },
    axisLabel: {
      interval: function (index, value) {
        if (index === 0) {
          return true;
        }

        let str = value.substring(0, 10);
        let str1 = data[index - 1][0].substring(0, 10);
        return str !== str1;
      },
      formatter: function (value, index) {
        // 格式化成月/日，只在第一个刻度显示年份
        var date = new Date(value);
        var texts = [date.getMonth() + 1, date.getDate()];
        return texts.join('/');
      },
    },
  },
  yAxis: {
    name: '平均血糖',
    type: 'value',
    axisLine: { onZero: false },
  },
  series: [
    {
      type: 'line',
      smooth: true,
      symbolSize: 5,
      data: data,
      symbol: function (value, params) {
        if (value[2]) {
          return 'emptyCircle';
        }
        return 'none';
      },
    },
  ],
};
