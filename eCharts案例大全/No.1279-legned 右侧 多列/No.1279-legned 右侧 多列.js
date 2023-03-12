const map = {
  '区域名称1': 1048,
  '区域名称2': 735,
  '区域名称3': 580,
  '区域名称4': 484,
  '区域名称5': 300,
  '区域名称6': 890,
}
let total = 0
for (const mapKey in map) {
  total += map[mapKey]
}
option = {
    tooltip: {
      trigger: 'item',
    },
    legend: [{
      data: ['区域名称1', '区域名称2','区域名称3'],
      top: 'center',
      left: '55%',
      orient: 'vertical',
      icon: 'circle',
      itemGap: 75,
      itemHeight: 20,
      formatter: (name) => {
        return [
          `{a|${(map[name] / total * 100).toFixed(2)}%}`,
          `{b|${name}}`,
        ].join('\n')
      },
      textStyle: {
        rich: {
          a: {
            color: '#313131',
            fontSize: '22px',
            lineHeight: 40,
          },
          b: {
            color: '#313131',
            fontSize: '15px',
          },
        },
      },
    },
    {
      data: ['区域名称4', '区域名称5','区域名称6'],
      top: 'center',
      left: '80%',
      orient: 'vertical',
      icon: 'circle',
      itemGap: 75,
      itemHeight: 20,
      formatter: (name) => {
        return [
          `{a|${(map[name] / total * 100).toFixed(2)}%}`,
          `{b|${name}}`,
        ].join('\n')
      },
      textStyle: {
        rich: {
          a: {
            color: '#313131',
            fontSize: '22px',
            lineHeight: 40,
          },
          b: {
            color: '#313131',
            fontSize: '15px',
          },
        },
      },
    },
    ],
    series: [
      {
        name: '区域',
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['30%', '50%'],
        left: 0,
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: '区域名称1' },
          { value: 735, name: '区域名称2' },
          { value: 580, name: '区域名称3' },
          { value: 484, name: '区域名称4' },
          { value: 300, name: '区域名称5' },
          { value: 890, name: '区域名称6' },
        ],
      },
    ],
  }