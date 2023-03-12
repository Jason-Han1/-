function quadraticOut(k) {
  return k * (2 - k);
}
const N_POINT = [30, 80, 10];
let count = 0;
const series = [];
var data = [];
N_POINT.forEach((item, idx) => {
  for (var i = 0; i <= item; i++) {
    var x = i / item;
    var y = quadraticOut(x);
    data.push([x, y]);
  }
  series.push({
    name: 'quadraticOut' + idx,
    type: 'line',
    // xAxisIndex: 0,
    // yAxisIndex: 0,
    data: data,
    // showSymbol: false,
    symbol: 'none',
    animationEasing: 'quadraticOut' + idx,
    animationDuration: 1000,
  });
});

option = {
  title: {
    textAlign: 'center',
    text: '',
    textStyle: {
      fontSize: 12,
      fontWeight: 'normal',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: 'red',
        type: 'solid'
      },
    },
    formatter: (e) => {
      console.log(e);
    }
  },
  legend: {
    left: 'left',
  },
  xAxis: {
    type: 'value',
    show: true,
    min: 0,
    max: 1,
    gridIndex: count,
    splitLine: {
      lineStyle: {
        color: 'transparent',
      },
    },
    axisLine: {
      lineStyle: {
        color: '#dedede',
      },
      onZero: false,
    },
    axisTick: {
      show: false,
    },
  },
  grid: {
    show: true,
    borderWidth: 0,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowBlur: 2,
  },
  yAxis: {
    type: 'value',
    show: true,
    min: -0.4,
    max: 1.4,
    gridIndex: count,
    splitLine: {
      lineStyle: {
        color: 'transparent',
      },
    },
  },
  series: series,
};
