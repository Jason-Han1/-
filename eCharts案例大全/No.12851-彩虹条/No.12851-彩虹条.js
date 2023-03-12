option =  {
          grid: {
            top: "5%",
            bottom: '5%',
            left: "5%",
            right: '5%',
          },
          tooltip: {
            trigger: 'item',
          },
          series: [
            {
              name: '低危',
              type: 'pie',
              radius: ['70%', '80%'],
              label: {
                show: false,
              },
              labelLine: {
                show: false
              },
              hoverAnimation: false,
              startAngle: 180,
              center: ["50%", "80%"],
              data: [
                {
                  value: 80,
                  name: '低危',
                  itemStyle: {
                    color: "#6ee5a6"
                  },
                },
                {
                  value: 20,
                  itemStyle: {
                    color: 'rgba(255,255,255,0.3)',
                  },
                  name: '剩余',
                  tooltip: {
                    show: false,
                  },
                },
                {
                  value: 100,
                  itemStyle: {
                    color: 'rgba(0,0,0,0)',
                  },
                  tooltip: {
                    show: false,
                  },
                  name: 'hide'
                }
              ]
            },
            {
              name: '中危',
              type: 'pie',
              radius: ['50%', '60%'],
              label: {
                show: false,
              },
              labelLine: {
                show: false
              },
              hoverAnimation: false,
              startAngle: 180,
              center: ["50%", "80%"],
              data: [
                {
                  value: 80,
                  name: '中危',
                  itemStyle: {
                    color: '#e5e46e',
                  },
                },
                {
                  value: 20,
                  itemStyle: {
                    color: 'rgba(255,255,255,0.3)',
                  },
                  name: '剩余',
                  tooltip: {
                    show: false,
                  },
                },
                {
                  value: 100,
                  itemStyle: {
                    color: 'rgba(0,0,0,0)',
                  },
                  name: 'hide',
                  tooltip: {
                    show: false,
                  },
                }
              ]
            },
            {
              name: '高危',
              type: 'pie',
              radius: ['30%', '40%'],
              label: {
                show: false,
              },
              labelLine: {
                show: false
              },
              hoverAnimation: false,
              startAngle: 180,
              center: ["50%", "80%"],
              data: [
                {
                  value: 80,
                  name: '高危',
                  itemStyle: {
                    color: '#F56C6C',
                  },
                },
                {
                  value: 20,
                  itemStyle: {
                    color: 'rgba(255,255,255,0.3)',
                  },
                  name: '剩余',
                  tooltip: {
                    show: false,
                  },
                },
                {
                  value: 100,
                  itemStyle: {
                    color: 'rgba(0,0,0,0)',
                  },
                  name: 'hide',
                  tooltip: {
                    show: false,
                  },
                }
              ]
            },
          ],
        }