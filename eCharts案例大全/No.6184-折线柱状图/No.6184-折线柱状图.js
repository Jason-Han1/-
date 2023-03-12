  var xData = ['1月', '2月', '3月', '4月', '5月', '6月'],
      yData1 = [104, 56, 136, 86, 98, 86],
      yData2 = [100, 206, 236, 106, 80, 160],
      yData3 = [90, 106, 236, 96, 180, 100],
      yData4 = [90, 56, 36, -6, -50, -70],
      yData5 = [90, 56, 20, -14, -50, -70],
    borderData = [],
      legend = ['建筑业产值', '建筑业产值同比值', '建筑业产值同比增长率', '建筑业产值环比增长值', '建筑业产值环比增长率'],
      colorArr = [
        {
          start: 'rgba(155, 101, 229,',
          end: 'rgba(18, 58, 86,0.5)',
        },
        {
          start: 'rgba(71, 173, 245,',
          end: 'rgba(18, 58, 86,0.5)',
        },
        {
          start: 'rgba(82, 249, 107,',
          end: 'rgba(18, 58, 86,0.5)',
        },
        {
          color: '#E1AD55',
        },
        {
          color: '#848992',
        },
      ];
    var normalColor = 'rgba(255,255,255,0.5)';
    //   var fontSize = 20;
    let seriesData = [];
    // var borderHeight = 4;
    // xData.forEach((element) => {
    //   borderData.push(borderHeight);
    // });
    [yData1, yData2, yData3, yData4, yData5].forEach((item, index) => {
      var obj1 = {};
      var obj2 = {};
      if (index < 3) {
        obj1 = {
          name: legend[index],
          type: 'bar',
          stack: legend[index],
          data: item,
          barWidth: '15%',
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: colorArr[index].start + '0.7)',
                  },
                  {
                    offset: 0.5,
                    color: colorArr[index].start + '0.3)',
                  },
                  {
                    offset: 1,
                    color: colorArr[index].end,
                  },
                ],
                globalCoord: false,
              },
            },
          },
        };
        obj2 = {
          name: '',
          type: 'bar',
          stack: legend[index],
          itemStyle: {
            normal: {
              color: colorArr[index].start + '1)',
            },
          },
          data: borderData,
        };
        seriesData.push(obj1);
        seriesData.push(obj2);
      } else {
        var obj3 = {
          name: legend[index],
          type: 'line',
          yAxisIndex: 1,
          smooth: false,
          symbol: 'none',
          symbolSize: 10,
          lineStyle: {
            normal: {
              width: 2,
            },
          },
          itemStyle: {
            normal: {
              color: colorArr[index].color,
              borderColor: '#fff',
              borderWidth: 1,
            },
          },
          data: item,
          label: {
            normal: {
              show: false,
            },
          },
        };
        seriesData.push(obj3);
      }
    });
    // console.log(seriesData);
    let option = {
      title: {
        text: '| 2020年2月到2020年6月建筑产业值变化分析',
        // text: `| ${titletop}`,
        textStyle: {
          fontSize: 16,
          color: '#24c3ff',
        },
      },
      grid: {
        left: '3%',
        top: '17%',
        right: '3%',
        bottom: '16%',
        containLabel: true,
      },
      legend: {
        show: true,
        icon: 'rect',
        itemWidth: 20,
        itemHeight: 3,
        right: '15%',
        bottom: '1%',
        textStyle: {
          color: '#fff',
        },
        data: legend,
      },
      tooltip: {
        trigger: 'axis',
        // formatter: function (params) {
        //   var str = '';
        //   for (var i = 0;i < params.length;i++) {
        //     if (params[i].seriesName !== '') {
        //       str += params[i].name + ':' + params[i].seriesName + params[i].value + '<br/>';
        //     }
        //   }
        //   return str;
        // },
      },
      xAxis: [
        {
          type: 'category',
          data: xData,
          axisPointer: {
            type: 'shadow',
          },
          axisLabel: {
            textStyle: {
              color: normalColor,
              fontSize: 12,
            },
          },
          axisLine: {
            lineStyle: {
              color: normalColor,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '亿元',
          nameTextStyle: {
            color: normalColor,
            fontSize: 12,
          },
          // "min": 0,
          // "max": 50,
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: normalColor,
              fontSize: 12,
            },
          },
          axisLine: {
            lineStyle: {
              color: normalColor,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
            lineStyle: {
              type: 'dashed',
              color: normalColor,
            },
          },
        },
        {
          type: 'value',
          name: '百分比',
          nameTextStyle: {
            color: normalColor,
            fontSize: 12,
          },
          min: -100,
          max: 100,
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: normalColor,
              fontSize: 12,
            },
          },
          axisLine: {
            lineStyle: {
              color: normalColor,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: seriesData,
    };