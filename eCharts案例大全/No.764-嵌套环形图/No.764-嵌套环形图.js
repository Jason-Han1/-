option = {
    title: {
        text: '作业管理',
        textStyle: {
            color: '#fff',
        }
    },
    backgroundColor: '#090d1a',
    legend: {
      orient: 'vertical',
      show: true,
      right: '10%',
      y: 'center',
      itemWidth: 3,
      itemHeight: 30,
      itemGap: 20,
      textStyle: {
        color: '#7a8c9f',
        fontSize: 14,
        lineHeight: 20,
        rich: {
          percent: {
            color: '#fff',
            fontSize: 16,
          },
        },
      },
      formatter: name => {
        switch (name) {
          case '运行中':
            return (
              '运行中\r\n{percent|30%} ' +
              ' ' + 30
            );
          case '已停止':
            return (
              '已停止\r\n{percent|30%} ' +
              ' ' + 30
            );
          case '未上线':
            return (
              '未上线\r\n{percent|40%} ' +
              ' ' + 40
            );
          default:
            break;
        }
      },
    },
    tooltip: {
      show: true,
    },
     series: [
      {
        type: 'pie',
        radius: ['65%', '75%'],
        center: ['40%', '50%'],
        hoverAnimation: false,
        z: 10,
        label: {
          position: 'center',
          formatter: () => {
            return '作业总数\r\n{total|100} 个';
          },
          rich: {
            total: {
              fontSize: 30,
              color: '#fff',
            },
          },
          color: '#7a8c9f',
          fontSize: 16,
          lineHeight: 30,
        },
        data: [
          {
            value: 30,
            name: '运行中',
            itemStyle: {
              color: '#0286ff',
            },
          },
          {
            value: 30,
            name: '已停止',
            itemStyle: {
              color: '#ffd302',
            },
          },
          {
            value: 40,
            name: '未上线',
            itemStyle: {
              color: '#fb5274',
            },
          },
        ],
        labelLine: {
          show: false,
        },
      },
      {
        type: 'pie',
        radius: ['54%', '64%'],
        center: ['40%', '50%'],
        hoverAnimation: false,
        label: {
          show: false,
        },
        data: [
          {
            value: 30,
            name: '运行中',
            itemStyle: {
              color: '#0286ff',
              opacity: 0.4,
            },
          },
          {
            value: 30,
            name: '已停止',
            itemStyle: {
              color: '#ffd302',
              opacity: 0.4,
            },
          },
          {
            value: 40,
            name: '未上线',
            itemStyle: {
              color: '#fb5274',
              opacity: 0.4,
            },
          },
        ],
        labelLine: {
          show: false,
        },
      },
      {
        type: 'pie',
        radius: ['43%', '53%'],
        center: ['40%', '50%'],
        hoverAnimation: false,
        label: {
          show: false,
        },
        data: [
          {
            value: 30,
            name: '运行中',
            itemStyle: {
              color: '#0286ff',
              opacity: 0.1,
            },
          },
          {
            value: 30,
            name: '已停止',
            itemStyle: {
              color: '#ffd302',
              opacity: 0.1,
            },
          },
          {
            value: 40,
            name: '未上线',
            itemStyle: {
              color: '#fb5274',
              opacity: 0.1,
            },
          },
        ],
        labelLine: {
          show: false,
        },
      },
    ],
  
};