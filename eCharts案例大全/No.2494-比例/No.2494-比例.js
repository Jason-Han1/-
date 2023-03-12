var category = [
      {
        name: '海洛因',
        value: 40,
      },
      {
        name: '氯胺酮',
        value: 33,
      },
      {
        name: 'K粉',
        value: 15,
      },
      {
        name: '病毒',
        value: 20,
      },
    ]; // 类别
    
    const rich= {
                a: {
                  color: '#3EFFBB',
                },
                b: {
                  color: '#FF6161',
                },
                c: {
                  color: '#FFEB61',
                },
                d: {
                  color: '#8261FF',
                },
                biga: {
                  color: '#3EFFBB',
                  fontSize: 40
                },
                bigb: {
                  color: '#FF6161',
                  fontSize: 30
                },
                bigc: {
                  color: '#FFEB61',
                  fontSize: 30
                },
                bigd: {
                  color: '#3EFFBB',
                  fontSize: 30
                }
              };
    var total = 100; // 数据总数
    var datas = [];
    category.forEach(value => {
      datas.push(value.value);
    });
    option = {
       backgroundColor: '#0C1940',
      xAxis: {
        max: total,
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      // grid: {
      //   left: 80,
      //   top: 20, // 设置条形图的边距
      //   right: 80,
      //   bottom: 20,
      // },
      yAxis: [
        {
          type: 'category',
          inverse: true,
          data: category,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
      ],
      series: [
        {
          // 内
          type: 'bar',
          barWidth: 6 ,

          legendHoverLink: false,
          silent: true,
          itemStyle: {
            normal: {
              color: function (params) {
                var color;
                if (params.dataIndex === 0) {
                  color = {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#11304C', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#3EFFBB', // 100% 处的颜色
                      },
                    ],
                  };
                } else if (params.dataIndex === 1) {
                  color = {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#1F2343', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#FF6161', // 100% 处的颜色
                      },
                    ],
                  };
                } else if (params.dataIndex === 2) {
                  color = {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#202D42', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#FFEB61', // 100% 处的颜色
                      },
                    ],
                  };
                } else {
                  color = {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#192553', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#8261FF', // 100% 处的颜色
                      },
                    ],
                  };
                }
                return color;
              },
            },
          },
          label: {
            
            normal: {
              rich,
              show: true,
              // position: 'left',
              verticalAlign:'middle',
              position: [0, -30],
              formatter: function(params){
                var text;
                if (params.dataIndex === 0) {
                  text = '{biga| ·} ' + params.name;
                } else if (params.dataIndex === 1) {
                  text = '{bigb| ·} ' + params.name;
                } else if (params.dataIndex === 2) {
                  text = '{bigc| ·} ' + params.name;
                } else if (params.dataIndex === 3) {
                  text = '{bigd| ·} ' + params.name;
                }
                return text;
              },
              textStyle: {
                color: '#fff',
                fontSize: 14,
              },
            },
          },
          data: category,
          z: 2,
          animationEasing: 'elasticOut',
        },
        {
          // 分隔
          type: 'pictorialBar',
          itemStyle: {
            normal: {
              color: '#0C1940',
            },
          },
          symbolRepeat: 'fixed',
          symbolMargin: 5,
          symbol: 'rect',
          symbolClip: true,
          symbolSize: [10,8],
          symbolPosition: 'start',
          symbolOffset: [10,0],
          symbolBoundingData: 100,
          data: category,
          z: 3,
          animationEasing: 'elasticOut',
        },
        {
          // 底
          type: 'pictorialBar',
          itemStyle: {
            normal: {
              color: '#12324E',
            },
          },
          symbolRepeat: 'fixed',
          symbolMargin: 5,
          symbol: 'rect',
          symbolClip: true,
          symbolSize: [10,6],
          symbolPosition: 'start',
          symbolOffset: [0, 0],
          symbolBoundingData: 100,
          data: [100,100,100,100],
          z: 1,
          animationEasing: 'elasticOut',
        },
        {
          // 外边框
          type: 'pictorialBar',
          symbol: 'rect',
          symbolBoundingData: total,
          itemStyle: {
            normal: {
              color: 'none',
            },
          },
          label: {
            normal: {
              formatter: params => {
                var text;
                if (params.dataIndex === 0) {
                  text = '{a| ' + params.data + '%}';
                } else if (params.dataIndex === 1) {
                  text = '{b| ' + params.data + '%}';
                } else if (params.dataIndex === 2) {
                  text = '{c| ' + params.data + '%}';
                } else if (params.dataIndex === 3) {
                  text = '{d| ' + params.data + '%}';
                }
                return text;
              },
              rich: {
                 a: {
                  color: '#3EFFBB',
                  fontSize: 20
                },
                b: {
                  color: '#FF6161',
                  fontSize: 20
                },
                c: {
                  color: '#FFEB61',
                  fontSize: 20
                },
                d: {
                  color: '#8261FF',
                  fontSize: 20
                },
              },
              position: [600,-20],
              distance: 0, // 向右偏移位置
              show: true,
            },
          },
          data: datas,
          z: 0,
          animationEasing: 'elasticOut',
        },
      ],
    };