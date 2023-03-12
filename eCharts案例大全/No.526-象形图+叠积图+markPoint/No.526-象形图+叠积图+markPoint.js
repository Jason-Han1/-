const barData = {
  xaxis: ['2015', '2016', '2017', '2018', '2019'],
  series: [
    {
      data: [10, 10, 20, 20, 20],
    },
    {
      data: [438, 483.3, 532, 603.55, 740.2],
    },
  ],
  legend: ['第三产业', 'GDP总值'],
  unit: '亿元',
  legendShow: true,
  colorArr: [
    {
      start: '#0076FF',
      end: 'rgba(40,203,252,0.00)',
    },
    {
      start: 'rgba(124,225,255,0.8)',
      end: 'rgba(40,203,252,0)',
    },
  ],
  xLabelWidth: 135,
  xLabelheight: 48,
  xLabelBg:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAADCAYAAAAp+adOAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOaADAAQAAAABAAAAAwAAAABcACqHAAAAKElEQVQoFWOc/ez/fwYoSJViZISxkcVhYoOdxuV+psHucGq4b0R4EgAU2guFUrWCeQAAAABJRU5ErkJggg==',
  grid: {
    left: '100px',
    top: '96px',
    right: '70px',
    bottom: '65px',
    containLabel: false,
  },
  namePadding: [0, 10, 10, 0],
};
let normalColor = 'rgba(236,248,255,0.70)';
let gdpData = [];
let barBg = [];
let seriesData = barData.series.map((item, index) => {
  if (index % 2 === 1) {
    barBg.push({
      type: 'pictorialBar',
      itemStyle: {
        normal: {
          opacity: 0.6,
        },
      },
      barGap: '-74%',
      symbolRepeat: 'fixed', //使图形元素重复
      symbolSize: [45, 3],
      symbolMargin: 1,
      symbol: `image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAADCAYAAAAHvIbcAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAALaADAAQAAAABAAAAAwAAAAA4WZQ1AAAAIUlEQVQoFWPkcA77zwAFP/auYoSxB7M4E8yRQ4keko4GAN3cHaadNxSoAAAAAElFTkSuQmCC`,
      data: barData.series[0] && barData.series[0].data,
    });
    gdpData[index] =
      barData.series[index] &&
      barData.series[index].data.map((item2, index2) => {
        return Math.abs(item2 - barData.series[index - 1].data[index2]);
      });
  }
  let markPoint = item.data.map((item, index) => {
    return {
      coord: [index, item],
      symbolSize: [57, 3],
      symbolOffset: [0, -5],
      symbol:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAADCAYAAAAp+adOAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOaADAAQAAAABAAAAAwAAAABcACqHAAAAKElEQVQoFWOc/ez/fwYoSJViZISxkcVhYoOdxuV+psHucGq4b0R4EgAU2guFUrWCeQAAAABJRU5ErkJggg==',
    };
  });
  return {
    name: barData.legend[index],
    type: 'bar',
    stack: barData.stack ? barData.stack[index] : 'bar',
    data: index % 2 === 1 ? gdpData[index] : item.data,
    barGap: '45%',
    barWidth: '45px',
    itemStyle: {
      normal: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: barData.colorArr[index].start,
            },
            {
              offset: 1,
              color: barData.colorArr[index].end,
            },
          ],
          globalCoord: false,
        },
      },
    },
    markPoint: {
      data: markPoint,
    },
  };
});
seriesData = [...seriesData, ...barBg];
option = {
  backgroundColor: '#0A2E5D',
  legend: {
    show: barData.legendShow,
    x: 'right',
    y: 'top',
    selectedMode: false,
    icon: 'rect',
    padding: [20, 0, 0, 0],
    itemGap: 32,
    itemWidth: 26,
    itemHeight: 18,
    textStyle: {
      color: normalColor,
      fontSize: 36,
      fontFamily: 'PingFangSC-Regular',
    },
    textStyle: {
      height: 30,
      rich: {
        a: {
          color: normalColor,
          fontSize: 36,
          fontFamily: 'PingFangSC-Regular',
        },
      },
    },
    formatter: (name) => {
      return '{a|' + name + ' ' + '}';
    },
    data: barData.legend,
  },
  grid: barData.grid,
  tooltip: {
    textStyle: {
      fontSize: 48,
    },
    trigger: 'axis',
    formatter: function (params) {
      let str = '';
      for (let i = 0; i < params.length - 1; i++) {
        if ((!!params[i].value || params[i].value === 0) && params[i].seriesName !== '') {
          let value;
          if (i === params.length - 2) {
            value = params[i].value + params[0].value;
          } else [(value = params[i].value)];
          str += params[i].seriesName + ': ' + value + barData.unit + '<br/>';
        } else if (params[i].seriesName !== '') {
          str += params[i].seriesName + ': ' + '无数据' + '<br/>';
        }
      }
      return str;
    },
  },
  xAxis: [
    {
      type: 'category',
      data: barData.xaxis,
      axisPointer: {
        type: 'shadow',
      },
      axisLabel: {
        interval: 0,
        margin: 15,
        formatter: (value) => {
          return `{a|${value}}`;
        },
        width: barData.xLabelWidth,
        height: barData.xLabelheight,
        align: 'center',
        backgroundColor: {
          image: barData.xLabelBg,
        },
        rich: {
          a: {
            fontFamily: 'DINAlternate-Bold',
            color: normalColor,
            fontSize: 36,
            lineHeight: 54,
          },
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: '',
      splitNumber: 3,
      nameTextStyle: {
        fontFamily: 'PingFangSC-Regular',
        color: normalColor,
        fontSize: 36,
        align: 'right',
        padding: barData.namePadding,
      },
      axisLabel: {
        showMinLabel: false,
        formatter: '{value}',
        align: 'right',
        textStyle: {
          fontFamily: 'PingFangSC-Regular',
          color: normalColor,
          fontSize: 36,
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: barData.splitLineHide ? false : true,
        lineStyle: {
          type: 'dashed',
          width: 3,
          color: '#093D5D',
        },
      },
    },
  ],
  series: seriesData,
};
