option = {
          label: {
            formatter: '{a|{c}}{l|个}\n{per|{b}}\n{sq|一}{per|占比}{b|{d}%}',
            rich: {
              l: { align: 'left', color: '#A5CDF2' },
              a: {
                color: 'inherit',
                fontSize: 21,
                align: 'left',
              },
              b: {
                color: 'inherit',
                fontSize: 16,
                lineHeight: 22,
                align: 'left',
              },
              per: {
                color: '#fff',
                padding: [3, 4],
                borderRadius: 4,
                align: 'left',
              },
              sq: {
                color: 'inherit',
                backgroundColor: 'inherit',
              },
            },
          },

          series: [
            {
              name: '情况统计',
              type: 'pie',
              selectedMode: 'single',
              radius: ['50%', '60%'],
              label: {
                show: false,
              },
              data: [
                {
                  value: 67,
                  name: '已建成投运',
                  itemStyle: {
                    color: 'rgba(102, 204, 255, .6)',
                  },
                },
                {
                  value: 10,
                  name: '建设中',
                  itemStyle: {
                    color: 'rgba(51, 255, 187, .6)',
                  },
                },
                {
                  value: 6,
                  name: '未建设',
                  itemStyle: {
                    color: 'rgba(255, 236, 140, .6)',
                  },
                },
              ],
            },
            {
              name: '情况统计',
              type: 'pie',
              radius: ['59%', '75%'],
              data: [
                {
                  value: 67,
                  name: '已建成投运',
                  itemStyle: {
                    color: 'rgba(102, 204, 255, 1)',
                  },
                },
                {
                  value: 10,
                  name: '建设中',
                  itemStyle: {
                    color: 'rgba(51, 255, 187, 1)',
                  },
                },
                {
                  value: 6,
                  name: '未建设',
                  itemStyle: {
                    color: 'rgba(255, 236, 140, 1)',
                  },
                },
              ],
            },

            {
              type: 'gauge',
              center: ['50%', '50%'],
              radius: '45%',
              startAngle: 0,
              endAngle: 360,

              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: false,
                distance: 50,
              },
              axisLine: {
                lineStyle: {
                  width: 2,
                  color: [[1, 'rgba(6, 191, 255, 1)']],
                },
              },
              pointer: {
                show: false,
              },
              detail: {
                valueAnimation: true,
                width: '100%',
                lineHeight: 40,
                offsetCenter: [0, 0],
                fontSize: 34,
                fontWeight: 'normal',
                color: 'rgba(102, 255, 255, 1)',
                formatter: '{b|总数}\n{value}{a|个}',
                rich: {
                  a: {
                    fontSize: 18,
                  },
                  b: {
                    fontSize: 15,
                    color: '#fff',
                  },
                },
              },
              data: [
                {
                  value: 89,
                },
              ],
            },
          ],
        };
