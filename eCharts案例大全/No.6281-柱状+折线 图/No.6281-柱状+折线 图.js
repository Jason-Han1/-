option = {
  color: ['#53C8EB', '#5390EB', '#53EBAD', '#FFBF5E', '#E086F1', '#E01F54', '#24A7FF'],
  backgroundColor: '#FFF',
  title: {
    text: 'yyyy-yyyy年mm-mm月xxxxxxxxxx',
    left: 'center',
    top: '8%',
    textStyle: { color: '#2d527c' }
  },
  legend: {
    top: '12%',
    textStyle: { color: '#2d527c' },
    data: ['SO2', 'NO2', 'PM10', 'CO', 'O3', 'PM2.5', '污染日数']
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross' }
  },
  grid: {
    left: '10%',
    right: '10%',
    top: '20%',
    bottom: '20%',
    containLabel: true
  },
  toolbox: {
    show: true,
    top: '10%',
    right: '5%',
    feature: {
      // dataZoom: {
      //     yAxisIndex: 'none'
      // },
      dataView: {
        // 数据视图
        optionToContent: (opt) => {
          var axisData = opt.xAxis[0].data;
          var series = opt.series;
          var table = `<div class="echartstableview"><table style="width:100%;text-align:center">
                        <thead><tr><th>等级</th>`;
          series.forEach((element, index) => {
            table += `<th>${element.name}</th>`;
          });
          table += `</tr></thead><tbody>`;
          axisData.forEach((date, index) => {
            table += `<tr><td>${date}</td>`;
            series.forEach((series_, index_) => {
              table += `<td>${series_.data[index]}</td>`;
            });
            table += `</tr>`;
          });
          table += '</tbody></table></div>';
          return table;
        },
      },
      magicType: {
        type: ['line', 'bar']
      },
      restore: {},
      saveAsImage: {}
    },
  },
  xAxis: {
    axisLine: {
      lineStyle: { color: '#848484' }
    },
    axisLabel: { color: '#2d527c' },
    data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
  },
  yAxis: [
    {
      name: '要素日数(天)',
      nameTextStyle: { color: '#2d527c' },
      axisLine: {
        lineStyle: { color: '#848484' }
      },
      splitLine: { show: false },
      axisLabel: { color: '#2d527c' }
    },
    {
      name: '污染日数(天)',
      nameTextStyle: { color: '#2d527c' },
      axisLine: {
        lineStyle: { color: '#848484' }
      },
      splitLine: { show: false },
      axisLabel: { color: '#2d527c' }
    }
  ],
  series: [
    {
      name: 'SO2',
      type: 'bar',
      barMaxWidth: '60%',
      barGap: 0,
      data: [20, 12, 11, 24, 20, 8]
    },
    {
      name: 'NO2',
      type: 'bar',
      barMaxWidth: '60%',
      barGap: 0,
      data: [12, 2, 5, 6, 8, 4]
    },
    {
      name: 'PM10',
      type: 'bar',
      barMaxWidth: '60%',
      barGap: 0,
      data: [10, 16, 15, 17, 10, 6]
    },
    {
      name: 'CO',
      type: 'bar',
      barMaxWidth: '60%',
      barGap: 0,
      data: [9, 15, 1, 5, 3, 1]
    },
    {
      name: 'O3',
      type: 'bar',
      barMaxWidth: '60%',
      barGap: 0,
      data: [5, 10, 11, 2, 5, 10]
    },
    {
      name: 'PM2.5',
      type: 'bar',
      barMaxWidth: '60%',
      barGap: 0,
      data: [15, 6, 9, 10, 14, 13]
    },
    {
      name: '污染日数',
      type: 'line',
      yAxisIndex: 1,
      data: [16, 12, 11, 24, 20, 35]
    }
  ]
};
