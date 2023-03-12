option = {
        grid: {
          bottom: 20,
        },
        // backgroundColor: '#151A38',
        legend: {
          orient: 'vertical',
          right: 10,
          top: 30,
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            color: '#69737D',
          },
          // data: ['完成任务单数','开始时间超期']
        },
        series: [
          {
            type: 'pie',
            hoverAnimation: false,
            radius: ['40%', '60%'],
            center: ['40%', '50%'],
            itemStyle: {
              normal: {
                color: function(params) {
                  return new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color:  'blue',
                    },
                    {
                      offset: 1,
                      color:  'green',
                    },
                  ])
                },
                borderColor: '#172659',
                borderWidth: 3,
              },
            },
            data:[
  {
    "name": "一月",
    "value": 1.45
  },
  {
    "name": "二月",
    "value": 2.93
  },
  {
    "name": "三月",
    "value": 3.15
  },
  {
    "name": "四月",
    "value": 4.78
  }
],
            labelLine: {
              normal: {
                lineStyle: {
                  color: '#00DDFF',
                },
                length: 20,
                length2: 50,
                show: true,
              },
            },
            label: {
              show: true,
              position: 'outside',
              formatter: '{b|{b}}\n{c|{c}}',
              color: 'white',
              padding: [-10, 10, 0, 10],
              rich: {
                b: {
                  color: 'white',
                  fontSize: 14,
                },
                c: {
                  color: '#00DDFF',
                  fontSize: 20,
                },
              },
            },
          },
          {
            itemStyle: {
              normal: {
                color: 'rgba(32,32,32)',
              },
            },
            type: 'pie',
            hoverAnimation: false,
            radius: ['40%', '65%'],
            center: ['40%', '50%'],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 1,
              },
            ],
            z: -1,
          },
          {
            name: '',
            type: 'pie',
            startAngle: 80,
            radius: ['72%'],
            hoverAnimation: false,
            center: ['40%', '50%'],
            itemStyle: {
              color: 'rgba(66, 66, 66, .1)',
              borderWidth: 1,
              borderColor: 'rgba(39,39,39)',
            },
            data: [100],
          },
        ],
      };