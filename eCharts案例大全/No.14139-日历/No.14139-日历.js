 var cellSize = [80, 80];
 
 function getVirtulData() {
          var date = +echarts.number.parseDate('2017-02-01');
          var end = +echarts.number.parseDate('2017-03-01');
          var dayTime = 3600 * 24 * 1000;
          var data = [];
          for (var time = date; time < end; time += dayTime) {
            data.push([
              echarts.format.formatTime('yyyy-MM-dd', time),
              Math.floor(Math.random() * 10000)
            ]);
          }
          return data;
        }
 var scatterData = getVirtulData();
option = {
          tooltip: {},
          title: {
            text: '每日用户行为'
          },
          legend: {
            data: ['工作', '娱乐', '睡觉'],
            bottom: 20
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          calendar: {
            top: 'middle',
            left: 'center',
            orient: 'vertical',
            cellSize: cellSize,
            yearLabel: {
              show: false,
              textStyle: {
                fontSize: 30
              }
            },
            dayLabel: {
              margin: 20,
              firstDay: 1,
              nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            },
            monthLabel: {
              show: false
            },
            range: ['2017-02']
          },
          series: [{
            id: 'label',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                textStyle: {
                  color: '#000',
                  fontSize: 14
                }
              }
            },
            data: scatterData
          }]
        };