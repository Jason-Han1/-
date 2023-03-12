const echartData = [
        {
          name: '杂物漂浮',
          value: '25',
        },
        {
          name: '水体异样',
          value: '15',
        },
        {
          name: '非法采砂',
          value: '5',
        },
        {
          name: '护岸损毁',
          value: '5',
        },
        {
          name: '侵占河道',
          value: '13',
        },
        {
          name: '非法捕鱼',
          value: '16',
        },
        {
          name: '污水直排',
          value: '20',
        },
        {
          name: '其他',
          value: '1',
        },
      ]
option = {
        color: [
          'rgba(48, 83, 213, 1)',
          'rgba(59, 163, 255, 1)',
          'rgba(60, 228, 232, 1)',
          'rgba(60, 232, 155, 1)',
          'rgba(139, 48, 213, 1)',
          'rgba(255, 87, 87, 1)',
          'rgba(255, 147, 87, 1)',
          'rgba(255, 202, 103, 1)',
        ],
        backgroundColor:'#000',
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)',
        },
        series: [
          {
            type: 'pie',
            radius: ['80%', '90%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            itemStyle: {
              // 图形样式
              normal: {
                borderColor: 'rgb(8,18,47)',
                borderWidth: 2,
              },
            },
            data: [{
          name: '杂物漂浮',
          value: '25',
        },
        {
          name: '水体异样',
          value: '15',
        },
        {
          name: '非法采砂',
          value: '5',
        },
        {
          name: '护岸损毁',
          value: '5',
        },
        {
          name: '侵占河道',
          value: '13',
        },
        {
          name: '非法捕鱼',
          value: '16',
        },
        {
          name: '污水直排',
          value: '20',
        },
        {
          name: '其他',
          value: '1',
        }],
          },
          {
            type: 'gauge',
            splitNumber: 60,
            radius: '80%',
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: 0,
            },
            anchor: {
              show: 0,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: [
                  [0, '#3178BD'],
                  [1, '#3178BD'],
                ],
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              length: 6,
              lineStyle: {
                color: 'auto',
                width: 1,
              },
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: false,
            },
          },
          ]
};