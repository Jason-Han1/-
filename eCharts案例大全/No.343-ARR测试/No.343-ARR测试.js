function formatNumber(value, fractions = 0) {
  const numberFormatter = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: fractions,
    maximumFractionDigits: fractions
  });
  return numberFormatter.format(value);
}

option = {
  title: {
    left: 'center',
    top: '10px',
    text: '飞书office ARR',
    textStyle: {
      fontSize: 14,
      color: 'rgba(0, 0, 0, 0.85)',
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    splitLine: {
      show: false
    },
    data: [
      '2020-12-31',
      '1&2\n双月',
      '3&4\n双月',
      '5&6\n双月',
      '7&8\n双月',
      '9&10\n双月',
      '11&12\n双月',
      '总计'
    ],
    axisLabel: {
      interval: 0
    }
  },
  yAxis: {
    name: 'ARR: 单位(万元)',
    type: 'value'
  },
  series: [
    {
      name: 'Placeholder',
      type: 'bar',
      barWidth: 40,
      stack: 'Total',
      itemStyle: {
        borderColor: 'transparent',
        color: 'transparent'
      },
      emphasis: {
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        }
      },
      data: [0, 1000, 2000, 3000, 4500, 6800, 11300, 0]
    },
    {
      name: 'ARR金额',
      type: 'bar',
      barWidth: 40,
      stack: 'Total',
      label: {
        show: true,
        position: 'top',
        formatter: params => formatNumber(params.value)
      },
      data: [1000, 1000, 1000, 1500, 2300, 4500, 6500, 17800]
    }
  ],
  animation: false
};
