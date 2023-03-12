option = {
  backgroundColor: '#fff',
  tooltip: {
    trigger: 'item',
  },
  legend: {
    // orient: 'vertical',
    left: 'center',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['70%', '80%'],
      data: [
        { value: 1048, name: '国家级' },
        { value: 735, name: '市级' },
        { value: 580, name: '区级' },
        { value: 484, name: '街镇级' },
        { value: 300, name: '居委' },
      ],
      emphasis: {
        label: {
          show: true,
        },
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 10,
      },
      label: {
        formatter: '{a|{b}}\n{hr|}\n{c|{c}}{u1|个}      {per|{d}}{u2|%}',
        rich: {
          a: {
            color: '#000',
            lineHeight: 30,
            fontSize: 20,
            align: 'left',
          },
          hr: {
            borderColor: '#245ECF',
            width: '100%',
            borderWidth: 1,
            height: 0,
            borderType: 'dashed',
          },
          c: {
            lineHeight: 40,
            fontSize: 20,
          },
          u1: {
            fontSize: 12,
            lineHeight: 18,
          },
          per: {
            fontSize: 20,
            lineHeight: 40,
          },
          u2: {
            fontSize: 12,
            lineHeight: 18,
          },
        },
      },
      labelLine: {
        length: 0,
        length2: 0,
        lineStyle: {
          // type: 'dashed',
          width: 2,
          // color:'transparent'
        },
      },
    },
  ],
};
