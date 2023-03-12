      let rate0 = 8;
      let rate0_pie = 0;
      let rate1 = 15
      let rate1_pie = 0;
      let rate2 = 39
      let rate2_pie = 0;
      // 放大规则
      //let number = Math.round(rate2 * 0.5);
      rate0_pie = rate0;
      rate1_pie = rate1;
      rate2_pie = rate2;

      let percent0 = (rate0 / (rate0 + rate1 + rate2) * 100).toFixed(0);
      let percent1 = (rate1 / (rate0 + rate1 + rate2) * 100).toFixed(0);
      let percent2 = 100 - percent0 - percent1;
      let colorList = [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
          offset: 0,
          color: 'rgba(38,216,189,1)' // 0% 处的颜色
        },
        {
          offset: 1,
          color: 'rgba(97,234,213,1)' // 100% 处的颜色
        }
        ],
        globalCoord: false, // 缺省为 false
      },
      {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0,
          color: 'rgba(249,174,80,1)' // 0% 处的颜色
        },
        {
          offset: 1,
          color: 'rgba(244,209,93,1)' // 100% 处的颜色
        }
        ],
        globalCoord: false // 缺省为 false
      },
      {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
          offset: 0,
          color: 'rgba(0,157,255,1)' // 0% 处的颜色
        },
        {
          offset: 1,
          color: 'rgba(0,204,255,1)' // 100% 处的颜色
        }
        ],
        globalCoord: false // 缺省为 false
      },
      ];
      option = {
        color: ['#22d7bb', '#f8b151', '#00bcff', '#dfecf2'],
        cursor: 'default',
        backgroundColor: "#fff",
        series: [
          {
            cursor: 'normal',
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 3,
              color: function (params) {
                return colorList[params.dataIndex]
              }
            },
            type: 'pie',
            radius: ['0%', '60%'],
            avoidLabelOverlap: false,
            name: '语法专题掌握情况',
            data: [
              {
                value: rate0_pie, name: '已熟练掌握的语法专题',
                rate: rate0,
                percent: percent0,
                label: {
                  normal: {
                    show: true,
                    position: 'outside',
                    formatter: function (params) {
                      return '{top|已熟练掌握的语法专题}\n{rate|' + params.data.rate + '}{top|个语法专题占比' + params.data.percent + '%}'
                    },
                    textStyle: {
                      fontSize: 16
                    },
                    padding: [0, -100],
                    rich: {
                      top: {
                        color: '#788aa4',
                        fontSize: 12,
                        padding: [4, 4],
                      },
                      rate: {
                        color: '#22d7bb',
                        fontSize: 16,
                      }
                    }
                  },
                },
                labelLine: {
                  normal: {
                    length: 30,
                    length2: 100
                  }
                },
              },
              {
                value: rate1_pie, name: '运用尚生疏的语法专题',
                rate: rate1,
                percent: percent1,
                label: {
                  normal: {
                    show: true,
                    position: 'outside',
                    formatter: function (params) {
                      return '{top|运用尚生疏的语法专题}\n{rate|' + params.data.rate + '}{top|个语法专题占比' + params.data.percent + '%}'
                    },
                    textStyle: {
                      fontSize: 16
                    },
                    padding: [0, -100],
                    rich: {
                      top: {
                        color: '#788aa4',
                        fontSize: 12,
                        padding: [4, 4],
                      },
                      rate: {
                        color: '#f8b151',
                        fontSize: 16,
                      }
                    }
                  },
                },
                labelLine: {
                  normal: {
                    length: 20,
                    length2: 100
                  }
                },
              },
              {
                value: rate2_pie, name: '需加强学习的语法专题',
                rate: rate2,
                percent: percent2,
                label: {
                  normal: {
                    show: true,
                    position: 'outside',
                    formatter: function (params) {
                      return '{top|需加强学习的语法专题}\n{rate|' + params.data.rate + '}{top|个语法专题占比' + params.data.percent + '%}'
                    },
                    textStyle: {
                      fontSize: 16
                    },
                    padding: [0, -100],
                    rich: {
                      top: {
                        color: '#788aa4',
                        fontSize: 12,
                        padding: [4, 4],
                      },
                      rate: {
                        color: '#00bcff',
                        fontSize: 16,
                      }
                    }
                  },
                },
                labelLine: {
                  normal: {
                    length: 20,
                    length2: 100
                  }
                },
              },
            ],
          },
        ]
      };
      if (percent0 <= 15) {
        option.series[0].data[0].label.normal.padding[1] = -45;
        option.series[0].data[0].labelLine.normal.length2 = -100;
      }