const labelRight = {
  position: 'right'
};
option = {
  title: {
    text: '魅力值'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: function (data) {
      console.log(data+'000')
            let html="";
            html=`<div><span>魅力数值:</span>+${Math.abs(data[0].value)}</div>`
    return html}
  },
  grid: {
    top: 80,
    bottom: 30
  },
  xAxis: {
    type: 'value',
    position: 'bottom',
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    axisLabel: {
              formatter: function (data) {
                return Math.abs(data);
              },
            },
  },
  yAxis: {
    type: 'category',
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    data: [
      'AX',
      'JJX',
      'YG',
      'HG',
      'YB',
      'TT',
    ],
},
  series: [
    {
      name: '值',
      type: 'bar',
      barWidth: 55,
      stack: 'Total',
      // label: {
      //   show: true,
      //   formatter: '{b}'
      // },
  data: [
            { value: -23, label: labelRight, itemStyle: { color: '#FFCFEB', barBorderRadius: [10, 0, 0, 10] } },
            { value: -21, label: labelRight, itemStyle: { color: '#AFB3FF', barBorderRadius: [10, 0, 0, 10] } },
            { value: 54, itemStyle: { color: '#B6FFCF', barBorderRadius: [0, 10, 10, 0] } },
            { value: 28, itemStyle: { color: '#FFC3A7', barBorderRadius: [0, 10, 10, 0] } },
            { value: -23, label: labelRight, itemStyle: { color: '#FF7A4A', barBorderRadius: [10, 0, 0, 10] } },
            { value: -17, label: labelRight, itemStyle: { color: '#EA61FF', barBorderRadius: [10, 0, 0, 10] } },
            { value: 8, itemStyle: { color: '#FFAF65', barBorderRadius: [0, 10, 10, 0] } },
          ],
      itemStyle: {
            color: '#FFAF65',
            //barBorderRadius: [10, 0,0,10]
          },
      label: {
         normal: {
             show: true,
             position: 'left',
            formatter: '{b}'
                  }
             },
    }
  ]
};