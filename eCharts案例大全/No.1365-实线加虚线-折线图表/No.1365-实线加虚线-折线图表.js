let bgColor = '#3b5c5f';
let color = ['#0089fe', '#0089fe', '#2DD9FF', '#FF515A', '#8B5CFF', '#00CA69'];
let echartData = [
    {
        name: '10/1',
        value1: 100,
        value2: 233,
        value3: '',
        value4: 290,
    },
    {
        name: '10/2',
        value1: 138,
        value2: 233,

        value3: '',
        value4: 290,
    },
    {
        name: '10/3',
        value1: 350,
        value2: 200,

        value3: '',
        value4: 290,
    },
    {
        name: '10/4',
        value1: 173,
        value2: 180,

        value3: '',
        value4: 290,
    },
    {
        name: '今日',
        value1: 180,
        value2: 199,
        value3: 199,
        value4: 290,
    },
    {
        name: '10/6',
        value1: 150,
        value2: '',
        value3: 110,
        value4: 290,
    },
    {
        name: '10/7',
        value1: 180,
        value2: '',
        value3: 150,
        value4: 290,
    },
    {
        name: '10/8',
        value1: 230,
        value2: '',
        value3: 120,
        value4: 290,
    },
];

let xAxisData = echartData.map((v) => v.name);

let yAxisData1 = echartData.map((v) => v.value1);

let yAxisData2 = echartData.map((v) => v.value2);

let yAxisData3 = echartData.map((v) => v.value3);
let yAxisData4 = echartData.map((v) => v.value4);

const hexToRgba = (hex, opacity) => {
    let rgbaColor = '';
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt('0x' + hex.slice(3, 5))},${parseInt(
            '0x' + hex.slice(5, 7)
        )},${opacity})`;
    }
    return rgbaColor;
};

option = {
    color: color,
    legend: {
      icon: 'roundRect',
      top: 0,
      right: 0,
      textStyle: {
        fontSize: 12,
        color: '#A0C8F6',
      },

      itemHeight: 5.33,
      itemWidth: 30,
      data: [{
        name: '今年',
        itemStyle: {
          color:'#0089fe'
        },
      }
        , {
        name: '去年',
        itemStyle: {
          color: '#2DD9FF'
        },
      }],
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.6);',
      borderColor: 'rgba(0, 0, 0, 0.6);',
      padding: [0, 8, 0, 8],
      formatter: function (params) {
        let html = '';
        params.forEach((item) => {

          const { seriesName, value, name, seriesIndex } = item;
          if (html === '') {
            html += `<span style="color:#fff;font-size: 10px">${name}</span></br>`
          }

          // 没有值,且特殊series不做tooltip展示
          if ((seriesName == '今年' && !value) || seriesName === '警戒值' || seriesName === '警戒值Y轴刻度值') {
            html += '';
          } else if (
            // 今日为今年数据的结束以及预测的开始,只展示今年的数据,seriesIndex对应 今年预测虚线部分series
            seriesIndex == '2' && value && name === '今日'
          ) {
            html += '';
          } else {
            html += `<span style="color:#fff;font-size: 9px">${item.seriesName} :</span>   <span style="color:${color[item.componentIndex]};font-weight:bold;font-size: 12px">${item.value}</span> </br>`;
          }
        });

        return html;
      },
    },
    grid: {
      top: '18%',
      right: '2%',
      left: '2%',
      containLabel: true,
      bottom: 2,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#B0CBEC',
          },
          interval: 0,
          padding: [0, 0, 0, -20],
          fontFamily: "Source Han Sans CN"
        },

        axisLine: {
          lineStyle: {
            color: '#3D7384',
          },
        },

        axisTick: {
          show: false
        },
        data: xAxisData,
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '人流量/万人次',
        axisLabel: {
          textStyle: {
            color: '#B0CBEC',
            fontSize: 10,
          },
          formatter: function (value, index) {
            console.log(value);
            return value;
          },
        },
        nameTextStyle: {
          color: '#B0CBEC',
          fontSize: 12,
          lineHeight: 40,
          padding: [0, 0, 0, 20]
        },
        splitLine: {
          show: false,
          lineStyle: {
            type: 'dashed',
            color: '#E9E9E9',

          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#3D7384',
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: '今年',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
          width: 4,
          color: color[0],
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: hexToRgba(color[0], 1),
                },
                {
                  offset: 1,
                  color: hexToRgba(color[0], 0),
                },
              ],
              false
            ),
          },
        },
        data: yAxisData2,
      },
      {
        name: '今年',  //今年预测 虚线部分
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
          width: 4,
          color: color[1],
          type: 'dotted',
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: hexToRgba(color[1], 1),
                },
                {
                  offset: 1,
                  color: hexToRgba(color[1], 0),
                },
              ],
              false
            ),
          },
        },
        yAxisIndex: 0,
        data: yAxisData3,
      },
      {
        name: '去年',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
          width: 4,
          color: color[2],
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: hexToRgba(color[2], 1),
              },
              {
                offset: 1,
                color: hexToRgba(color[2], 0),
              },
            ],
            false
          ),
        },
        data: yAxisData1,
      },
      {
        name: '警戒值',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbolSize: 8,
        zlevel: 3,

        lineStyle: {
          width: 4,
          color: '#EF805D',
          type: 'dotted',
        },
        areaStyle: {
          opacity: 0,
        },
        data: yAxisData4,
        yAxisIndex: 0,
      },

      // 仅为在y轴展示特殊值(警戒值)
      {
        name: '警戒值Y轴刻度值',
        type: 'effectScatter',
        symbolSize: 0,
        itemStyle: {
          normal: {
            label: {
              show: true,
              fontSize: 10,
              distance: 0,
              color: '#EF805D',
              formatter: '{c}',
              offset: [-16, 0],
            },
          },
        },
        data: [
          {
            value: 290,
          },
        ],
      },
    ],
  }
