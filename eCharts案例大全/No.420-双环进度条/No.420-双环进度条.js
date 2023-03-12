
option = {
  legend: {
    bottom: '35%',
    left: '18.5%',
    itemGap: 260,
    itemWidth: 11,
    itemHeight: 8,
    data: [
      {
        name: '移动',
        itemStyle: {
          color: '#5470DE'
        }
      },
      {
        name: '联通',
        itemStyle: {
          color: '#F78B55'
        }
      },
      {
        name: '电信',
        itemStyle: {
          color: '#07BEAA'
        }
      },
      {
        name: '其它',
        itemStyle: {
          color: '#AD24D5'
        }
      }
    ]
  },
  series: [
    {
      type: 'pie',
      hoverAnimation: false,
      animation: false,
      radius: ['120', '130'],
      center: ['20%', '50%'],
      itemStyle: {
        color: '#E8E8E8'
      },
      label: {
        show: false
      },
      data: [100]
    },
    {
      type: 'pie',
      hoverAnimation: false,
      avoidLabelOverlap: false,
      radius: ['117', '132'],
      center: ['20%', '50%'],
      itemStyle: {
        color: '#E8E8E8'
      },
      data: [
        {
          name: '移动',
          value: 40,
          itemStyle: { color: '#5470DE', borderRadius: '50%' },
          label: {
            position: 'center',
            formatter: '{d}%'
          }
        },
        {
          value: 60,
          itemStyle: { opacity: 0, borderRadius: '50%' },
          label: { show: false }
        }
      ]
    },
    {
      type: 'pie',
      hoverAnimation: false,
      animation: false,
      radius: ['120', '130'],
      center: ['40%', '50%'],
      itemStyle: {
        color: '#E8E8E8'
      },
      label: {
        show: false
      },
      data: [100]
    },
    {
      type: 'pie',
      hoverAnimation: false,
      radius: ['117', '132'],
      center: ['40%', '50%'],
      itemStyle: {
        color: '#E8E8E8'
      },
      label: {
        show: false
      },
      data: [
        {
          name: '联通',
          value: 40,
          itemStyle: { color: '#F78B55', borderRadius: '50%' },
          label: {
            show: true,
            position: 'center',
            formatter: '{d}%'
          }
        },
        { value: 60, itemStyle: { opacity: 0, borderRadius: '50%' } }
      ]
    },
    {
      type: 'pie',
      hoverAnimation: false,
      animation: false,
      radius: ['120', '130'],
      center: ['60%', '50%'],
      itemStyle: {
        color: '#E8E8E8'
      },
      label: {
        show: false
      },
      data: [100]
    },
    {
      type: 'pie',
      hoverAnimation: false,
      radius: ['117', '132'],
      center: ['60%', '50%'],
      itemStyle: {
        color: '#E8E8E8'
      },
      label: {
        show: false
      },
      data: [
        {
          name: '电信',
          value: 40,
          itemStyle: { color: '#07BEAA', borderRadius: '50%' },
          label: {
            show: true,
            position: 'center',
            formatter: '{d}%'
          }
        },
        { value: 60, itemStyle: { opacity: 0, borderRadius: '50%' } }
      ]
    },
    {
      type: 'pie',
      hoverAnimation: false,
      animation: false,
      radius: ['120', '130'],
      center: ['80%', '50%'],
      itemStyle: {
        color: '#E8E8E8'
      },
      label: {
        show: false
      },
      data: [100]
    },
    {
      type: 'pie',
      hoverAnimation: false,
      radius: ['117', '132'],
      center: ['80%', '50%'],
      itemStyle: {
        color: '#E8E8E8'
      },
      label: {
        show: false
      },
      data: [
        {
          name: '其它',
          value: 40,
          itemStyle: { color: '#AD24D5', borderRadius: '50%' },
          label: {
            show: true,
            position: 'center',
            formatter: '{d}%'
          }
        },
        { value: 60, itemStyle: { opacity: 0, borderRadius: '50%' } }
      ]
    }
  ]
};

option && myChart.setOption(option);
