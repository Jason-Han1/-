      var rate0 = 8//this.Info.GraspNum;
      var rate0_pie = 0;
      var rate1 = 5//this.Info.UnGraspNum;
      var rate1_pie = 0;
      var rate2 = 100//this.Info.UnAssessNum;
      var rate2_pie = 0;
      // 放大规则
      var number = Math.round(rate2 * 0.5);
      rate0_pie = rate0+number
      rate1_pie = rate1+number
      rate2_pie = rate2+number

      var percent0 = (rate0 / (rate0 + rate1 + rate2) * 100).toFixed(0);
      var percent1 = (rate1 / (rate0 + rate1 + rate2) * 100).toFixed(0);
      var percent2 = 100 - percent0 - percent1;
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
            },
            type: 'pie',
            roseType:'radius',
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
                      return '{top|已熟练掌握的语法专题}\n' + params.data.rate + '{top|个语法专题占比' + params.data.percent + '%}'
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
                      return '{top|运用尚生疏的语法专题}\n' + params.data.rate + '{top|个语法专题占比' + params.data.percent + '%}'
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
                      return '{top|需加强学习的语法专题}\n' + params.data.rate + '{top|个语法专题占比' + params.data.percent + '%}'
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
                      bottom: {
                        color: '#788aa4',
                        fontSize: 14,
                        padding: [4, -30],
                      },
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
      }
      if (percent0 <= 15) {
        option.series[0].data[0].label.normal.padding[1] = -45;
        option.series[0].data[0].labelLine.normal.length2 = -100;
      }
