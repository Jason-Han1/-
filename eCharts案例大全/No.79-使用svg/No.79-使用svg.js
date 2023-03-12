$.get('/asset/get/s/data-1640758292996-hAHk8Bw2O.svg', function (svg) {
  echarts.registerMap('IBS', { svg: svg });
  //选中状态改变颜色，加阴影
  var year = ['任务1', '任务2', '任务3', '任务4', '任务5', '任务6', '任务7', '任务8'];
  var processflag = '正常';
  var itemStyle = {
    color: '#FFF',
    borderColor: '#CD2990',
    borderWidth: 1.5,
  };
  option = {
     
    timeline: {
      data: year,
      axisType: 'category',
      autoPlay: true,
      playInterval: 3000,
      left: '10%',
      right: '10%',
      bottom: '10%',
      width: '80%',
      label: {
        normal: {
          textStyle: {
            color: '#ddd',
          },
        },
        emphasis: {
          textStyle: {
            color: '#fff',
          },
        },
      },
      symbolSize: 10,
      lineStyle: {
        color: '#555',
      },
      checkpointStyle: {
        borderColor: '#777',
        borderWidth: 2,
      },
      controlStyle: {
        showNextBtn: true,
        showPrevBtn: true,
        normal: {
          color: '#666',
          borderColor: '#666',
        },
        emphasis: {
          color: '#aaa',
          borderColor: '#aaa',
        },
      },
    },
    baseOption: {
      title: [
        {
          text: '任务测试',
          x: 'center',
          top: '5%',
          textStyle: {
            fontWeight: 'normal', //标题颜色
            color: '#FFF',
            fontSize: 28,
          },
        },
      ],
      tooltip: {},
      backgroundColor: '#100c2a',
      geo: {
        top: '10%',
        bottom: '20%',
        map: 'IBS',
        selectedMode: 'multiple',
        emphasis: {
          focus: 'self',
          itemStyle: {
            color: undefined,
            borderColor: 'green',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'bottom',
            distance: 0,
            textBorderColor: '#fff',
            textBorderWidth: 2,
          },
        },
        blur: {},
        select: {
          itemStyle: itemStyle, //改变选中状态的初始值
          label: {
            show: false,
            textBorderColor: '#4B0082',
            textBorderWidth: 2,
          },
        },
      },

      series: [
        {
          type: 'scatter',
          name: '任务1',
          id: 'sca_filesystem',
          data: [],
          symbolSize: 1,
          label: {
            normal: {
              show: true,
              formatter: [
                '{title|任务1}{abg|}',
                '{ColumnHead|类型}{ColumnHead|值}{ColumnHead|结果}',
                '{hr|}',
                '{value|最大}{value|90%}		{value|正常}',
                '{value|最小}{value|54%}		{value|正常}',
                '{hr|}',
                '{ColumnHead|结果}{value|正常}',
              ].join('\n'),
              backgroundColor: '#eee',
              borderColor: 'rgb(199,86,83)',
              borderWidth: 1,
              borderRadius: 4,
              padding: 5,
              shadowBlur: 10,
              shadowColor: '#000',
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              rich: {
                title: {
                  color: '#eee',
                  align: 'center',
                },
                abg: {
                  backgroundColor: '#333',
                  width: '100%',
                  align: 'right',
                  height: 30,
                  borderRadius: [4, 4, 0, 0],
                },
                ColumnHead: {
                  color: '#333',
                  height: 24,
                  padding: [0, 20, 0, 30],
                  align: 'left',
                },
                hr: {
                  borderColor: '#777',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0,
                },
                value: {
                  width: 20,
                  height: 20,
                  color: 'rgb(199,86,83)',
                  padding: [0, 20, 0, 30],
                  align: 'left',
                },
              },
            },
          },
        },
        {
          name: '任务2',
          id: 'sca_ercy',
          type: 'scatter',
          data: [],
          symbolSize: 1,
          label: {
            normal: {
              show: true,
              formatter: [
                '{title|任务2}{abg|}',
                '{ColumnHead|类型}{ColumnHead|成功}{ColumnHead|失败}',
                '{hr|}',
                '{value|A}{value|2342}		{value|0}',
                '{value|B}{value|623}		{value|23}',
                '{value|C}{value|32}		{value|0}',
                '{hr|}',
                '{ColumnHead|状态}{value|完成}',
              ].join('\n'),
              backgroundColor: '#eee',
              borderColor: 'rgb(199,86,83)',
              borderWidth: 1,
              borderRadius: 4,
              padding: 5,
              shadowBlur: 10,
              shadowColor: '#000',
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              rich: {
                title: {
                  color: '#eee',
                  align: 'center',
                },
                abg: {
                  backgroundColor: '#333',
                  width: '100%',
                  align: 'right',
                  height: 30,
                  borderRadius: [4, 4, 0, 0],
                },
                ColumnHead: {
                  color: '#333',
                  height: 24,
                  padding: [0, 10, 0, 30],
                  align: 'left',
                },
                hr: {
                  borderColor: '#777',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0,
                },
                value: {
                  width: 20,
                  height: 20,
                  color: 'rgb(199,86,83)',
                  padding: [0, 20, 0, 30],
                  align: 'left',
                },
              },
            },
          },
        },
        {
          name: '任务3',
          id: 'sca_process',
          type: 'scatter',
          data: [],
          symbolSize: 1,
          label: {
            normal: {
              show: true,
              formatter: [
                '{title|任务3}{abg|}',
                '{ColumnHead|库}{ColumnHead|地址}{ColumnHead|结果}',
                '{hr|}',
                '{value|A}{value|北京}		{value|正常}',
                '{value|B}{value|上海}		{value|正常}',
                '{value|C}{value|武汉}		{value|正常}',
                '{hr|}',
                '{ColumnHead|检查}{value|正常}',
              ].join('\n'),
              backgroundColor: '#eee',
              borderColor: 'rgb(199,86,83)',
              borderWidth: 1,
              borderRadius: 4,
              padding: 5,
              shadowBlur: 10,
              shadowColor: '#000',
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              rich: {
                title: {
                  color: '#eee',
                  align: 'center',
                },
                abg: {
                  backgroundColor: '#333',
                  width: '100%',
                  align: 'right',
                  height: 30,
                  borderRadius: [4, 4, 0, 0],
                },
                ColumnHead: {
                  color: '#333',
                  height: 24,
                  padding: [0, 20, 0, 30],
                  align: 'left',
                },
                hr: {
                  borderColor: '#777',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0,
                },
                value: {
                  width: 20,
                  height: 20,
                  color: 'rgb(199,86,83)',
                  padding: [0, 20, 0, 30],
                  align: 'left',
                },
              },
            },
          },
        },
        {
          name: '任务4',
          id: 'sca_acnts',
          type: 'scatter',
          data: [],
          symbolSize: 1,
          label: {
            normal: {
              show: true,
              formatter: [
                '{title|总结}{abg|}',
                '{ColumnHead|类型}{ColumnHead|时间}',
                '{hr|}',
                '{value|冷冻}{TMvalue|20211228105632}',
                '{hr|}',
                '{ColumnHead|结果}{value|完成}',
              ].join('\n'),
              backgroundColor: '#eee',
              borderColor: 'rgb(199,86,83)',
              borderWidth: 1,
              borderRadius: 4,
              padding: 5,
              shadowBlur: 10,
              shadowColor: '#000',
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              rich: {
                title: {
                  color: '#eee',
                  align: 'center',
                },
                abg: {
                  backgroundColor: '#333',
                  width: '100%',
                  align: 'right',
                  height: 30,
                  borderRadius: [4, 4, 0, 0],
                },
                ColumnHead: {
                  color: '#333',
                  height: 24,
                  padding: [0, 40, 0, 30],
                  align: 'left',
                },
                hr: {
                  borderColor: '#777',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0,
                },
                value: {
                  width: 30,
                  height: 20,
                  color: 'rgb(199,86,83)',
                  padding: [0, 20, 0, 30],
                  align: 'left',
                },
                TMvalue: {
                  width: 80,
                  height: 20,
                  color: 'rgb(199,86,83)',
                  padding: [0, 40, 0, 30],
                  align: 'left',
                },
              },
            },
          },
        },
        {
          name: '任务5',
          id: 'sca_cdr',
          type: 'scatter',
          data: [],
          symbolSize: 1,
          label: {
            normal: {
              show: true,
              formatter: [
                '{title|流程1}{abg|}',
                '{ColumnHead|类型}{ChgColumnHead|金额(元)}{ColumnHead|上月环比}',
                '{value|熟食}{Moneyvalue|238823.32}		{value|32%}',
                '{value|冷货}{Moneyvalue|8232}		{value|23%}',
                '{hr|}',
                '{ColumnHead|食品统计}{value|完成,}',
              ].join('\n'),
              backgroundColor: '#eee',
              borderColor: 'rgb(199,86,83)',
              borderWidth: 1,
              borderRadius: 4,
              padding: 5,
              shadowBlur: 10,
              shadowColor: '#000',
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              rich: {
                title: {
                  color: '#eee',
                  align: 'center',
                },
                abg: {
                  backgroundColor: '#333',
                  width: '100%',
                  align: 'right',
                  height: 30,
                  borderRadius: [4, 4, 0, 0],
                },
                ColumnHead: {
                  color: '#333',
                  height: 24,
                  padding: [0, 20, 0, 30],
                  align: 'left',
                },
                ChgColumnHead: {
                  color: '#333',
                  height: 24,
                  padding: [0, 40, 0, 30],
                  align: 'left',
                },
                hr: {
                  borderColor: '#777',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0,
                },
                value: {
                  width: 20,
                  height: 20,
                  color: 'rgb(199,86,83)',
                  padding: [0, 20, 0, 30],
                  align: 'left',
                },
                Moneyvalue: {
                  width: 40,
                  height: 20,
                  color: 'rgb(199,86,83)',
                  padding: [0, 40, 0, 30],
                  align: 'left',
                },
              },
            },
          },
        },
        {
          name: '任务6',
          id: 'sca_rent',
          type: 'scatter',
          data: [],
          symbolSize: 1,
          label: {
            normal: {
              show: true,
              formatter: [
                '{title|物料}{abg|}',
                '{ColumnHead|类型}{ChgColumnHead|金额(元)}{ColumnHead|上月环比}',
                '{value|门店}{Moneyvalue|42323.23}		{value|104%}',
                '{value|档口}{Moneyvalue|7342}		{value|98%}',
                '{hr|}',
                '{ColumnHead|物料统计}{value|完成,}',
              ].join('\n'),
              backgroundColor: '#eee',
              borderColor: 'rgb(199,86,83)',
              borderWidth: 1,
              borderRadius: 4,
              padding: 5,
              shadowBlur: 10,
              shadowColor: '#000',
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              rich: {
                title: {
                  color: '#eee',
                  align: 'center',
                },
                abg: {
                  backgroundColor: '#333',
                  width: '100%',
                  align: 'right',
                  height: 30,
                  borderRadius: [4, 4, 0, 0],
                },
                ColumnHead: {
                  color: '#333',
                  height: 24,
                  padding: [0, 20, 0, 30],
                  align: 'left',
                },
                ChgColumnHead: {
                  color: '#333',
                  height: 24,
                  padding: [0, 40, 0, 30],
                  align: 'left',
                },
                hr: {
                  borderColor: '#777',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0,
                },
                value: {
                  width: 20,
                  height: 20,
                  color: 'rgb(199,86,83)',
                  padding: [0, 20, 0, 30],
                  align: 'left',
                },
                Moneyvalue: {
                  width: 40,
                  height: 20,
                  color: 'rgb(199,86,83)',
                  padding: [0, 40, 0, 30],
                  align: 'left',
                },
              },
            },
          },
        },
        {
          name: '任务7',
          id: 'sca_sumacnts',
          type: 'scatter',
          data: [],
          symbolSize: 1,
          label: {
            normal: {
              show: true,
              formatter: [
                '{title|汇总}{abg|}',
                '{ColumnHead|类型}{ChgColumnHead|金额(元)}{ColumnHead|上月环比}',
                '{value|食品}{Moneyvalue|324293.23}		{value|87%}',
                '{value|物料}{Moneyvalue|78762}		{value|76%}',
                '{hr|}',
                '{ColumnHead|总金额}{value|1238928.92,}',
              ].join('\n'),
              backgroundColor: '#eee',
              borderColor: 'rgb(199,86,83)',
              borderWidth: 1,
              borderRadius: 4,
              padding: 5,
              shadowBlur: 10,
              shadowColor: '#000',
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              rich: {
                title: {
                  color: '#eee',
                  align: 'center',
                },
                abg: {
                  backgroundColor: '#333',
                  width: '100%',
                  align: 'right',
                  height: 30,
                  borderRadius: [4, 4, 0, 0],
                },
                ColumnHead: {
                  color: '#333',
                  height: 24,
                  padding: [0, 20, 0, 30],
                  align: 'left',
                },
                ChgColumnHead: {
                  color: '#333',
                  height: 24,
                  padding: [0, 40, 0, 30],
                  align: 'left',
                },
                hr: {
                  borderColor: '#777',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0,
                },
                value: {
                  width: 20,
                  height: 20,
                  color: 'rgb(199,86,83)',
                  padding: [0, 20, 0, 30],
                  align: 'left',
                },
                Moneyvalue: {
                  width: 40,
                  height: 20,
                  color: 'rgb(199,86,83)',
                  padding: [0, 40, 0, 30],
                  align: 'left',
                },
              },
            },
          },
        },
        {
          name: '任务8',
          id: 'sca_dispsum',
          type: 'scatter',
          data: [],
          symbolSize: 1,
          label: {
            normal: {
              show: true,
              formatter: [
                '{title|通知}{abg|}',
                '{ColumnHead|类型}{ColumnHead|时间}',
                '{hr|}',
                '{value|放假通知}{TMvalue|20211229105823}',
                '{hr|}',
              ].join('\n'),
              backgroundColor: '#eee',
              borderColor: 'rgb(199,86,83)',
              borderWidth: 1,
              borderRadius: 4,
              padding: 5,
              shadowBlur: 10,
              shadowColor: '#000',
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              rich: {
                title: {
                  color: '#eee',
                  align: 'center',
                },
                abg: {
                  backgroundColor: '#333',
                  width: '100%',
                  align: 'right',
                  height: 30,
                  borderRadius: [4, 4, 0, 0],
                },
                ColumnHead: {
                  color: '#333',
                  height: 24,
                  padding: [0, 20, 0, 30],
                  align: 'left',
                },
                hr: {
                  borderColor: '#777',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0,
                },
                value: {
                  width: 40,
                  height: 20,
                  color: 'rgb(199,86,83)',
                  padding: [0, 0, 0, 30],
                  align: 'left',
                },
                TMvalue: {
                  width: 80,
                  height: 20,
                  color: 'rgb(199,86,83)',
                  padding: [0, 80, 0, 30],
                  align: 'left',
                },
              },
            },
          },
        },
      ],
      xAxis: {
        axisLabel: { show: false },
        axisLine: { show: false },
        splitLine: { show: false },
        axisTick: { show: false },
        min: -1,
        max: 1,
      },
      yAxis: {
        axisLabel: { show: false },
        axisLine: { show: false },
        splitLine: { show: false },
        axisTick: { show: false },
        min: -1,
        max: 1,
      },
    },
    options: [],
  };
  for (var n = 0; n < year.length; n++) {
    option.options.push({
      title: [
        {},
        {
          text: year[n] + ': 【20211229】',
          x: 'center',
          top: '9%',
          textStyle: {
            color: '#FFA54F',
            fontSize: 15,
          },
        },
      ],
    });
  }
  myChart.setOption(option);
  myChart.on('geoselectchanged', function (params) {
    console.log(params.allSelected[0].name.slice().indexOf('任务1'));
    console.log(params);

    if (params.allSelected[0].name.slice().indexOf('任务1') >= 0) {
      console.log('selected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_filesystem',
              data: [[-0.9, 0.8]],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    } else {
      console.log('unselected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_filesystem',
              data: [],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    }

    if (params.allSelected[0].name.slice().indexOf('任务2') >= 0) {
      console.log('selected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_ercy',
              data: [[-0.9, 0]],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    } else {
      console.log('unselected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_ercy',
              data: [],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    }
    if (params.allSelected[0].name.slice().indexOf('任务3') >= 0) {
      console.log('selected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_process',
              data: [[-0.9, 0.4]],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    } else {
      console.log('unselected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_process',
              data: [],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    }
    if (params.allSelected[0].name.slice().indexOf('任务4') >= 0) {
      console.log('selected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_acnts',
              data: [[-0.9, -0.4]],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    } else {
      console.log('unselected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_acnts',
              data: [],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    }
    if (params.allSelected[0].name.slice().indexOf('任务5') >= 0) {
      console.log('selected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_cdr',
              data: [[0.9, 0.8]],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    } else {
      console.log('unselected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_cdr',
              data: [],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    }
    if (params.allSelected[0].name.slice().indexOf('任务6') >= 0) {
      console.log('selected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_rent',
              data: [[0.9, 0.4]],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    } else {
      console.log('unselected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_rent',
              data: [],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    }
    if (params.allSelected[0].name.slice().indexOf('任务7') >= 0) {
      console.log('selected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_sumacnts',
              data: [[0.9, 0.0]],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    } else {
      console.log('unselected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_sumacnts',
              data: [],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    }
    if (params.allSelected[0].name.slice().indexOf('任务8') >= 0) {
      console.log('selected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_dispsum',
              data: [[0.9, -0.4]],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    } else {
      console.log('unselected');
      myChart.setOption(
        {
          series: [
            {
              id: 'sca_dispsum',
              data: [],
            },
          ],
        },
        { replaceMerge: 'data' }
      );
    }
  });
  myChart.on('mouseover', { seriesIndex: 0 }, function (event) {
    myChart.dispatchAction({
      type: 'highlight',
      geoIndex: 0,
      name: event.name,
    });
    console.log('selected', event.name);
  });
  myChart.on('mouseout', { seriesIndex: 0 }, function (event) {
    myChart.dispatchAction({
      type: 'downplay',
      geoIndex: 0,
      name: event.name,
    });
  });
});
