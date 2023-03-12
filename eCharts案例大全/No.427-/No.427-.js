option = {
  color: ['red', 'pink', '#ccc'],
  tooltip: {
    show: true,
    trigger: 'axis',
    borderRadius: 8, //边框圆角
    axisPointer: {
      type: 'line',
      lineStyle: {
        type: 'solid',
        color: '#42bdf3',
      },
    },
  },
  legend: {
    show: true,
    right: '0',
    top: '12%',
    itemWidth: 6,
    textStyle: {
      color: '#556677',
    },
  },
  grid: {
    top: '10%',
    left: '0',
    right: '4%',
    bottom: '6%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    // 去除刻度线
    axisTick: {
      show: false,
    },
    // 修饰刻度标签的颜色
    axisLabel: {
      color: '#aaa1a1',
      formatter: function (params) {
        var newParamsName = '';
        var paramsNameNumber = params.length;
        var provideNumber = 3; //一行显示几个字
        // if(xAxis.data.length<5){
        //   var provideNumber = 5; //一行显示几个字
        // }else{
        //   provideNumber = 3;
        // }
        var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
        if (paramsNameNumber > provideNumber) {
          for (var p = 0; p < rowNumber; p++) {
            var tempStr = '';
            var start = p * provideNumber;
            var end = start + provideNumber;
            if (p == rowNumber - 1) {
              tempStr = params.substring(start, paramsNameNumber);
            } else {
              tempStr = '\xa0' + params.substring(start, end) + '\n';
            }
            newParamsName += tempStr;
          }
        } else {
          newParamsName = params;
        }
        return newParamsName;
      },
    },
    axisLine: {
      lineStyle: {
        color: '#d1d1d1', // 颜色
      },
    },
  },
  yAxis: {
    type: 'value',
    name: '单位 (个)',
    nameTextStyle: {
      color: '#aaa1a1',
      padding: [0, 0, 0, -45],
    },
    nameGap: 30,
    // 去除刻度线
    axisTick: {
      show: false,
    },
    // 修饰刻度标签的颜色
    axisLabel: {
      color: '#aaa1a1',
    },
    // 去除x轴的颜色
    axisLine: {
      show: false,
    },
    // 修改y轴分割线
    splitLine: {
      lineStyle: {
        color: '#e6e6e6',
        type: 'dashed',
      },
    },
  },
  dataZoom: [
    {
      show: true,
      bottom: '2%',
      start: 0,
      end: 100,
      handleIcon:
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAIAAAA7y9DJAAAACXBIWXMAABJ0AAASdAHeZh94AAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAC7SURBVBiVY/z//z8DXsDy+usXBgaGow/vLr1weu/dm4yMjJ5qWskmVo5KahAVjK++fK7atWnO6aNoWnMtHSb5hjIwMDAdfXgXU5qBgWHy8QMH7t1iYGBgWnrhNETof9tUOAkBc84cY2BgYNp79yYuN26/dY2BgYEJv0cYGBiYnJXVoW6uyoaTEOCppsXAwMAUbWCKS3eyiRUDAwOTtbxyiqk1pnSupQMkSBhfffnMgBFiKSZWDvAQIxjqAFhwRQti9BONAAAAAElFTkSuQmCC',
      handleSize: 15,
      height: 13,
      handleStyle: {
        color: '#fff',
      },
      textStyle: {
        color: '#fff',
        fontSize: 12,
      },
      fillerColor: '#eaf4f3',
      backgroundColor: '#fff',
      brushSelect: false,
    },
  ],
  series: [
    {
      name: '新建会话数',
      symbol: 'none', //变为实心圆
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        color: '#5470c6',
        width: 5,
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(254, 238, 150,0.8)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(255, 245, 300,0.3)', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
      data: [8000, 11800, 9000, 9800, 15000, 13000, 12000, 13500, 13000, 11500, 11500, 8900],
    },
    {
      name: '失败会话数',
      symbol: 'none', //变为实心圆
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        color: '#91cc75',
        width: 5,
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(254, 238, 150,0.8)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(255, 245, 300,0.3)', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
      data: [7000, 8500, 9000, 9800, 14000, 13000, 12000, 10010, 13000, 11000, 11500, 8900],
    },
    {
      name: '活跃会话数',
      symbol: 'none', //变为实心圆
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        color: '#f7b429',
        width: 5,
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(254, 238, 150,0.8)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(255, 245, 300,0.3)', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
      data: [7000, 11800, 9000, 9800, 15000, 13000, 12000, 13500, 13000, 11500, 11500, 8900],
    },
  ],
};
