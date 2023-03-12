//计算最大值
function calMax(arr) {
  let max = 0;
  arr.forEach((el) => {
    el.forEach((el1) => {
      if (!(el1 === undefined || el1 === '')) {
        if (max < el1) {
          max = el1;
        }
      }
    });
  });
  let maxint = Math.ceil(max / 9.5); //不让最高的值超过最上面的刻度
  let maxval = maxint * 10; //让显示的刻度是整数
  return maxval;
}

//计算最小值
function calMin(arr) {
  let min = 0;
  arr.forEach((el) => {
    el.forEach((el1) => {
      if (!(el1 === undefined || el1 === '')) {
        if (min > el1) {
          min = el1;
        }
      }
    });
  });
  let minint = Math.floor(min / 10);
  let minval = minint * 10; //让显示的刻度是整数
  return minval;
}

var data1 = [59357.9, 52789.77, 24837.98, 14345.02, 2291.93],
  data2 = [-23.81, 36.43, 23.75, -86.83, -23.95];

var Min1 = calMin([data1]),
  Min2 = calMin([data2]),
  Max1 = calMax([data1]),
  Max2 = calMax([data2]),
  option = {
    grid: { left: '100', right: '100', bottom: '100', top: '100' },
    color: ['#0698d6', '#fd8246', '#d773b4', '#41ac7c', '#e86367', '#aada9c'],
    tooltip: { trigger: 'axis', axisPointer: { type: 'cross', crossStyle: { color: '#999' } } },
    legend: { data: ['市值', '涨幅'] },
    xAxis: [
      {
        type: 'category',
        show: true,
        lineWidth: 0,
        axisPointer: {
          type: 'shadow',
        },
        data: ['2013-12-31', '2014-12-31', '2015-12-31', '2016-12-31', '2017-12-31'],
      },
    ],
    yAxis: [
      {
        name: '单位：万元',
        nameTextStyle: { color: '#999999' },
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { verticalAlign: 'bottom', color: '#999999' },
        min: Min1,
        max: Max1,
        splitNumber: 5,
        interval: (Max1 - Min1) / 5,
        axisLabel: {
          formatter: (val) => {
            if (val == Min1) return val;
            else if (val == Max1) return val;
            else return '';
          },
        },
      },
      {
        name: '单位：%',
        type: 'value',
        nameTextStyle: { color: '#999999' },
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { verticalAlign: 'bottom', color: '#999999' },
        min: Min2,
        max: Max2,
        splitNumber: 5,
        interval: (Max2 - Min2) / 5,
        axisLabel: {
          formatter: (val) => {
            if (val == Min2) return val;
            else if (val == Max2) return val;
            else return '';
          },
        },
      },
    ],
    series: [
      { name: '市值', type: 'bar', barGap: 0, barWidth: 30, data: data1 },
      { name: '涨幅', type: 'line', barGap: 0, barWidth: 30, data: data2, yAxisIndex: 1 },
    ],
  };
