option = {
  color: ['#458FE3', '#48C964', '#FFAE37', '#FB8989', '#CA89FB'],
  title: {
    text: '2017年1月1日-2018年12月31日短时强降水个例统计图',
    x: 'center',
    top: '10%',
    textStyle: { color: '#2D527C', fontSize: '16', fontWeight: 'bold' }
  },
  legend: {
    // type: 'scroll',
    top: '14%',
    // formatter: (name) => {
    //   return name.length > 4 ? name.substr(0, 2) + '...' : name;
    // }
  },
  grid: {
    left: '10%',
    right: '10%',
    top: '20%',
    bottom: '20%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' }, // cross 十字准星指示器 / shadow 阴影指示器
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    formatter: (params) => {
      let Htm = `<span>${params[0].name}</span><br>`;
      params.forEach((item, index) => {
        let { marker, seriesName, value } = item;
        Htm += `${marker}
        <span style="display:inline-block;margin-right:4px;width:70px;height:18px;line-height:24px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${seriesName}</span>
        <span style="display:inline-block;margin-right:12px;">${String(value) == 'NaN' ? '-' : value}</span>
        ${(index + 1) % 2 === 0 ? '<br>' : ''}`;
      })
      return Htm
    }
  },
  toolbox: {
    show: true,
    top: '10%',
    right: '4%',
    feature: {
      dataView: {
        // 数据视图
        optionToContent: (opt) => {
          var axisData = opt.xAxis[0].data;
          var series = opt.series;
          var table = `<div class="echartstableview"><table style="width:100%;text-align:center">
                        <thead><tr><th>时间</th>`;
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
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    },
  },
  xAxis: {
    axisTick: { show: false },
    axisLabel: {
      textStyle: { color: '#707070', fontSize: 14 }
    },
    axisLine: {
      // onZero: false, // X轴脱离Y轴0刻度
      lineStyle: { color: '#707070', type: 'dashed'}
    },
    data: ['2017/1/1', '2017/2/1', '2017/3/1', '2017/4/1', '2017/5/1']
  },
  yAxis: {
    name: '气温（℃）',
    nameTextStyle: { color: '#707070', fontSize: 14 },
    axisLabel: {
      textStyle: { color: '#707070', fontSize: 14 },
      // 箭头旁y轴不显示最大值
      showMaxLabel: false
    },
    axisLine: {
      show: true,
      symbol: ['none', 'arrow'],
      symbolOffset: [0, 4],
      lineStyle: { color: '#707070' }
    },
    splitLine: { show:false },
    boundaryGap: [0, 0.1]
  },
  series: [
    {
      name: '500hPa',
      type: 'line',
      symbolSize: 14,
      data: [-10, -2, 12, 0, 5]
    },
    {
      name: '700hPa',
      type: 'line',
      symbolSize: 14,
      data: [7, 8, 9, 7, 19]
    },
    {
      name: '850hPa',
      type: 'line',
      symbolSize: 14,
      data: [5, 3, 6, 5, 14]
    },
    {
      name: '925hPa',
      type: 'line',
      symbolSize: 14,
      data: [0, -3, 0, 5, 10]
    },
    {
      name: '地面',
      type: 'line',
      symbolSize: 14,
      data: [1, 5, 5, 9, 4]
    },
  ],
};

/* <style>
.echartstableview {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 6px 0 16px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: transparent;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    width: 10px;
    height: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }

  table {
    box-sizing: border-box;
    width: 100%;

    thead {
      tr {
        background-color: #f1f1f1;

        th {
          line-height: 30px;
          text-align: center;
          border: 1px solid #d9d9d9;

          &:nth-child(1) {
            width: 216px;
          }
        }
      }
    }

    tbody {
      tr {
        td {
          line-height: 30px;
          text-align: center;
          border: 1px solid #d9d9d9;
        }
      }
    }
  }
}
</style> */
