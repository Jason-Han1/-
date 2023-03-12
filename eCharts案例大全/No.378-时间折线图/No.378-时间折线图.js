var date_list = (function () {
  // 获取当前日期
  var date = new Date();
  // 获取小时
  var hour = date.getHours();
  // 定义数组
  var temp = [];
  // 循环存储数据
  for (var i = 0; i < 10; i++) {
    if (i == 0) {
      temp.push("现在");
    } else {
      var item = (Math.abs(hour - 1 * i) % 24) + "";
      // 判断item的长度
      if (item.length == 1) {
        item = "0" + item;
      }

      temp.push(item + "点");
    }
  }

  // 返回该数组
  return temp;
})();
option = {
    title: {
        text: `{a|人员走势图} {b|2021-12-13}`,
        textStyle: {
            rich: {
                a: {
                    fontSize: 16,
                    fontWeight: 600,
                },
                b: {
                    fontSize: 12,
                    color: 'gray',
                },
            },
        },
        top: '3%',
        left: '2%',
    },
    legend: {
        data: ['进场', '离场', '在场'],
        textStyle: {
            align: 'right',
        },
        x: 'right',
        y: '2%',
        icon: 'diamond',
    },

    tooltip: {
        trigger: 'axis',
    },

    grid: {
        top: '18%',
        left: '8%',
        right: '3%',
        bottom: '10%',
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true,
            },
            splitArea: {
                // show: true,
                color: '#f00',
                lineStyle: {
                    color: '#f00',
                },
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                margin: 10,
            },
            boundaryGap: false,
            data: date_list,
        },
    ],

    yAxis: [
        {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#e3e3e3',
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                margin: 20,
                formatter: '{value} 人',
            },
            axisTick: {
                show: false,
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#7AA1FF',
                },
                formatter: '{c} 人',
                trigger: 'item',
            },
        },
    ],
    series: [
        {
            name: '进场',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 12,
            lineStyle: {
                normal: {
                    color: '#7AA1FF',
                },
            },

            itemStyle: {
                color: '#7AA1FF',
                borderWidth: 3,
                borderColor: '#f3f3f3',
            },
            tooltip: {
                formatter: '{a}人',
            },
            data: [8, 15, 22, 12, 33, 10, 26, 35, 10, 12],
        },
        {
            name: '离场',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 12,
            lineStyle: {
                normal: {
                    color: '#00ca95',
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#00ca95',
                },
                formatter: '{c} 人',
            },

            itemStyle: {
                color: '#00ca95',
                borderColor: '#fff',
                borderWidth: 3,
            },

            data: [20, 13, 17, 23, 12, 18, 8, 12, 15, 21],
        },
        {
            name: '在场',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 12,
            lineStyle: {
                normal: {
                    color: '#C258F6',
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#C258F6',
                },
                formatter: '{c} 人',
            },

            itemStyle: {
                color: '#C258F6',
                borderColor: '#fff',
                borderWidth: 3,
            },

            data: [8, 14, 18, 11, 12, 15, 12, 22, 36, 23],
        },
    ],
};
