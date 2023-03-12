  var data = [50, 95, 91, 34, 90];
  var markArr = [], temObj = null;
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    sum += data[i];
  }
  var mean = sum / data.length;
  data.forEach(function(v, i) {
    if (v > mean) {
      temObj = {
        name: '车企' + i,
        value: v,
        xAxis: v,
        yAxis: i,
        id: i,
        itemStyle: {
          color: '#ffd54f'
        }
      };
    } else {
      temObj = {
        name: '车企' + i,
        value: v,
        xAxis: v,
        yAxis: i,
        id: i,
        itemStyle: {
          color: '#fb8f8e'
        }
      };
    }
    markArr.push(temObj);
  });
  option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    color: ['#22b8ed'],
    grid: {
      left: '1%',
      right: '8%',
      bottom: '8%',
      backgroundColor: '#333',
      containLabel: true
    },
    yAxis: [{
      name: '车企',
      type: 'category',
      data: ['车企0', '车企1', '车企2', '车企3', '车企4'],
      triggerEvent: true,
      axisTick: {
        alignWithLabel: true // 坐标值是否在刻度中间
      }
    }],
    xAxis: [{
      type: 'value',
      name: '数量',
      // triggerEvent: true,
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      type: 'bar',
      data: data,
      barGap: '5%', // 柱图间距
      barWidth: 35, // 柱图宽度
      itemStyle: {
        normal: {
          barBorderRadius: [0, 7, 7, 0],
          color: '#22b8ed',
          label: {
            show: true, // 开启显示
            position: 'right', // 在上方显示
            textStyle: { // 数值样式
              color: '#22b8ed',
              fontSize: 16
            }
          }
        }
      },
      markPoint: {
        // data: [
        //   {type: 'max', name: '最大值'},
        //   {type: 'min', name: '最小值'}
        // ]
        data: markArr
      }
    }]
  };
  myChart.setOption(option);
  myChart.on('click', function(params) {
    console.log('clickclickclickclick111', markArr);
    console.log('clickclickclickclick111', params);
    if (params.componentType == 'yAxis') {
      markArr.forEach(function(v) {
        if (params.value == v.name) {
          console.log('ididididid', v.id);
        }
      });
    }
  });