let   carInOutStatic = {
    xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    yData1: [-12, -13, -1, -5, -6, -17, -2, -3, -1, -5, -6, -7, -12, -13, -11, -15, -6, -7, -2, -3, -11, -5, -6, -17, -12, -3, -1, -5, -6, -7],//女生
    yData2: [12, 13, 4, 5, 6, 7, 2, 13, 4, 5, 6, 7, 22, 3, 4, 5, 26, 7, 22, 3, 4, 5, 6, 7, 22, 13, 14, 25, 6, 7],//进场
    barBorderRadius: [8, 8, 16, 16],
    barWidth: 8,
    legendName: ['男生', '女生'],//1
    fontSize: 16,
    left: '8%'
  };

option = {
    backgroundColor:'FB8736',
      color: [ '#FB8736','#64D3FF'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'line', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
          let str = params[0].name + "<br />";
          params.forEach((item) => {
            if (item.seriesName == '女生' || item.seriesName == '女生') {
              let a = '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-color:#FB8736;"></span>' + item.seriesName + " : " + item.value * (-1) + "<br />"
              let b = '';
              let c = item.value ? a : b
              str += c;

            }
           
            else {
              str +=
                '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-color:#64D3FF;"></span>' + item.seriesName + " : " + item.value + "<br />";
            }
          });
          return str;
        },
      },
      legend: [
        {
          itemWidth: 14,
          itemHeight: 14,
          icon: 'rect',
          right: '5%',
          top: '4%',
          itemGap: 20, //每条图例的距离
          data: [
            {
              name: carInOutStatic.legendName[0],
              textStyle: {
                color: '#5EAAF7',
                fontSize: 14
              },
            },
            {
              name: carInOutStatic.legendName[1],
              textStyle: {
                color: '#FE9F5C',
                fontSize: 14
              },
            },
          ],
        },
      ],
      xAxis: {
        // name: 'X Axis',
        silent: false,
        axisLine: {
          show: true,
          lineStyle: {
            //坐标轴线设置
            color: '#444A62',
          },
        },
        splitLine: { show: false },
        splitArea: { show: false },
        axisTick: {
          //刻度
          show: false,
        },
        axisLabel: {
          interval: 0,
          //x轴数据
          textStyle: {
            //x轴数据字体设置
            color: '#A7E4FD',
            fontSize: carInOutStatic.fontSize,
          },
          formatter: function (value) {
            var ret = ''; //拼接加\n返回的类目项
            var maxLength = 4; //每项显示文字个数
            var valLength = value.length; //X轴类目项的文字个数
            var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
            if (rowN > 1) {
              //如果类目项的文字大于3,
              for (var i = 0; i < rowN; i++) {
                var temp = ''; //每次截取的字符串
                var start = i * maxLength; //开始截取的位置
                var end = start + maxLength; //结束截取的位置
                //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                temp = value.substring(start, end) + '\n';
                ret += temp; //凭借最终的字符串
              }
              return ret;
            } else {
              return value;
            }
          },
        },
        data: carInOutStatic.xData,
      },
      yAxis: [
        {
          // inverse: true,
          splitArea: { show: false }, //背景区域
          splitLine: {
            show: false,
          },
          type: 'value',
          axisLabel: {
            //Y轴数据
            formatter: function (value) {
              return Math.abs(value); //负数取绝对值变正数
            },
            textStyle: {
              //Y轴数据字体设置
              color: '#A7E4FD',
              fontSize: 16,
            },
          },
          axisTick: {
            //刻度
            show: false,
          },
          axisLine: {
            //坐标轴
            show: true,
            lineStyle: {
              //坐标轴线设置
              width: 1,
              color: '#444A62',
            },
          },
        },
      ],
      grid: {
        left: carInOutStatic.left, //整体偏移
        right: '5%', //整体偏移
        bottom: '14%',
        top: '13%'
      },
      series: [
        {
          name: carInOutStatic.legendName[1], //下面蓝的
          type: 'bar',
          barWidth: carInOutStatic.barWidth,
          stack: 'one',
          yAxisIndex: 0,
          itemStyle: {
            normal: {
              color: function (params) {
                return new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#FB8533', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#FFA96D', // 100% 处的颜色
                    },
                  ],
                  false
                );
              },
              barBorderRadius: carInOutStatic.barBorderRadius,
            },
          },
          data: carInOutStatic.yData1,
        },
        {
          name: carInOutStatic.legendName[0], //上面黄色的
          yAxisIndex: 0,
          type: 'bar',
          barWidth: carInOutStatic.barWidth,
          stack: 'one',
          itemStyle: {
            normal: {
              color: function (params) {
                return new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [

                    {
                      offset: 0,
                      color: '#4974F1', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#2BF3F5', // 100% 处的颜色
                    },
                  ],
                  false
                );
              },
              barBorderRadius: carInOutStatic.barBorderRadius,
            },
          },
          data: carInOutStatic.yData2,
        },
      ],
    };
