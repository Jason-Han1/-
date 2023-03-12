
// 散点图

   var yAxis = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
   var seriesData = [39, 31, 18, 12, 10, 10, 10];
  var sumvalue = sum(seriesData);
  var data = [];
  for (var i = 0; i < yAxis.length; i++) {
    data.push({
      name: yAxis[i],
      value: seriesData[i]
    });
  }
  data.push({
    name: '测试',
    value: 0
  }, {
    name: '测试',
    value: 0
  }, {
    name: '测试',
    value: 0
  }, {
    name: '测试1',
    value: 0
  }, {
    name: '测试1',
    value: 0
  });
  function sum (seriesData) {
    var s = 0;
    for (var i = seriesData.length - 1; i >= 0; i--) {
      s += seriesData[i];
    }
    return s;
  }
  var wordLength = (value) => {
    var ret = ''; // 拼接加\n返回的类目项
    var maxLength = 4; // 每项显示文字个数
    var valLength = value.length; // X轴类目项的文字个数
    var rowN = Math.ceil(valLength / maxLength); // 类目项需要换行的行数
    if (rowN > 1) { // 如果类目项的文字大于3,
      for (var i = 0; i < rowN; i++) {
        var temp = ''; // 每次截取的字符串
        var start = i * maxLength; // 开始截取的位置
        var end = start + maxLength; // 结束截取的位置
        if (end >= valLength) {
          temp = value.substring(start, end);
        } else {
          temp = value.substring(start, end) + '\n';
        }
        ret += temp; // 凭借最终的字符串
      }
      return ret;
    }
    return value;
  };
  var offsetData = [
    [50, 50],
    [75, 80],
    [70, 20],
    [10, 45],
    [30, 20],
    [30, 80],
    [95, 45],
    [5, 10],
    [50, 90],
    [55, 10],
    [95, 90],
    [10, 90]
  ];

  var datas = [];
  for (let n = 0; n < data.length; n++) {
    var item = data[n];
    if (item.name === '测试') {
      var colortxtName = 'transparent';
      var colortxtValue = 'transparent';
      var size = 15;
    } else if (item.name === '测试1') {
      colortxtName = 'transparent';
      colortxtValue = 'transparent';
      size = 22;
    } else {
      colortxtName = '#F7B239';
      colortxtValue = '#fff';
      size = 60;
    }
    datas.push({
      name: '{value|' + item.value + '万}' + '\n' + '{name|' + wordLength(item.name) + '}',
      value: offsetData[n],
      symbolSize: item.value / sumvalue * 200 + size,
      label: {
        normal: {
          color: 'red',
          textStyle: {
            fontSize: 14,
            lineHeight: 20,
            color: 'red'
          },
          rich: {
            name: {
              color: colortxtName,
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 20,
              align: 'center'

            },
            value: {
              color: colortxtValue,
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 20,
              align: 'center'
            }

          }
        }
      },
      itemStyle: {
        normal: {
          color: 'rgba(44,190,255,0.1)',
          borderColor: 'rgb(39,187,252)',
          borderWidth: '2'
        }

      }
    });
  }
 option = {
     backgroundColor:'#000',
    grid: {
      show: false,
      top: 12,
      bottom: 14
    },
    xAxis: [{
      gridIndex: 0,
      type: 'value',
      show: false,
      min: 0,
      max: 100,
      nameLocation: 'middle',
      nameGap: 5
    }],
    yAxis: [{
      gridIndex: 0,
      min: 0,
      show: false,
      max: 100,
      nameLocation: 'middle',
      nameGap: 10
    }],

    series: [
      {
        type: 'scatter',
        symbol: 'circle',
        symbolSize: 120,
        label: {
          normal: {
            show: true,
            formatter: '{b}',
            textStyle: {
              fontSize: '20'
            }
          }
        },

        itemStyle: {
          normal: {
            color: 'red'
          }
        },
        data: datas
      }
    ]
  };

