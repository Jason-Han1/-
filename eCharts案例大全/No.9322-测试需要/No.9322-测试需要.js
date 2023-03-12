  var datas = {
      chartData: ["86.18", "16.18", "25.95", "3.45", ],
      grade: ["任务已完成", "任务进行中", "任务未开始", "任务暂停中"],
      toolData: ["314", "53", "52", "15"],
      totalCost: [100, 100, 100, 100]
  };

  var option = {
      backgroundColor: '#fff',
      tooltip: {
          trigger: 'item',
          formatter: function(params) {
              var tpl = "",
                  index = params.dataIndex,
                  // cd = datas.chartData,
                  cn = datas.toolData;
              tpl = params.name + ': ' + cn[index];
              return tpl;
          }
      },
      grid: {
          height: '200',
          bottom: 10,
          left: '10%',
          top: '50',
          right: '180',
      },
      xAxis: {
          show: false,
      },
      yAxis: {
          show: false,
          inverse: true,
          type: 'category',
          data: datas.grade,
      },
      series: [{
          type: 'bar',
          barGap: '-100%',
          barWidth: '16',
          z: 1,
          data: datas.totalCost,
          label: {
              normal: {
                  show: true,
                  position: 'right',
                  color: '#666',
                  fontSize: 12,
                  offset: [10, 0],
                  formatter: function(param) {
                      var dd = datas.chartData;
                      var da = datas.toolData;
                      return param.name + ' ' + da[param.dataIndex] + '(' + dd[param.dataIndex] + '%)';
                  },
              }
          },
          itemStyle: {
              emphasis: {
                  color: '#eee'
              },
              normal: {
                  color: '#eee',
              }
          },
      }, {
          type: 'bar',
          barWidth: '16',
          z: 2,
          data: datas.chartData,
          itemStyle: {
              normal: {
                  barBorderRadius: 4,
                  opacity: 0.8,
                  //每根柱子颜色设置
                  color: function(params) {
                      let colorList = ['#1cd389', '#668eff', '#ffc751', '#ff6e73', '#4162ff', '#9692ff', '#16c1af', '#00b7ff', '#24e2be', '#66bb6a', '#9ccc65', '#dce775', '#ffee58', '#f4c97d', '#ffaf83', '#ff8a65', '#f48cb6', '#e283e2', '#ba83ea', '#1cd389', '#668eff', '#ffc751', '#ff6e73', '#4162ff', '#9692ff', '#16c1af', '#00b7ff', '#24e2be', '#66bb6a', '#9ccc65', '#dce775', '#ffee58', '#f4c97d', '#ffaf83', '#ff8a65', '#f48cb6', '#e283e2', '#ba83ea'];
                      return colorList[params.dataIndex];
                  }
              },
              emphasis: {
                  opacity: 1
              }
          },
          max: 1
      }]
  }