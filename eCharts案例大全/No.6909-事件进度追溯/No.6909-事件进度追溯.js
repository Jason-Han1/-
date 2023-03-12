var biao = '/asset/get/s/data-1594806168739-dBZc3TyU8.png';

// let xdata = ['2020-04-15', '2020-05-15', '2020-06-15', '2020-07-15', '2020-08-15', '2020-09-15', '2020-10-15', '2020-11-15'],
//     data = [120, 90, 10, 80, 90, 20, 56, 150];

let xdata = [
  '2020-04-15',
  '2020-05-15',
  '2020-06-15',
  '2020-07-15',
  '2020-08-15',
  '2020-09-15',
  '2020-10-15',
  '2020-11-15',
];
let data1 = [8, 6, 4, 2, 4, 6, 8, 6];
let dataMess = [
  {
    index: 8,
    mess: 'XX企业氨水罐发生nh3爆炸',
  },
  {
    index: 6,
    mess: '系统报告泄漏事件升级，由\n报警上升为紧急报警',
  },
  {
    index: 4,
    mess: '系统报告XX园区应急指挥中心\n做批示',
  },
  {
    index: 2,
    mess: 'XX区XX医院医疗队伍入场',
  },
  {
    index: 4,
    mess: 'XX区应急指挥中心抽\n调应急专家级咨询专家入场',
  },
  {
    index: 6,
    mess: 'XX园区SO2泄漏事\n件现场指挥小组成立',
  },
  {
    index: 8,
    mess: 'XX园区SO2泄漏事件\n堵漏方案通过',
  },
  {
    index: 6,
    mess: 'XX园区SO2泄漏\n事件空气恢复方案通过',
  },
];

let labelMess = function (param) {
  return `{b|${param.name}} \n` + `{value|${dataMess[param.dataIndex].mess}}`;
};

option = {
  backgroundColor: '#F2F5FB',
  grid: {
    top: 140,
    right: 40,
    left: 40,
    bottom: 30,
  },
  xAxis: [
    {
      type: 'category',
      color: '#000',
      data: xdata,
      axisPointer: {
        type: 'line',
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        color: '#515151',
        fontWeight: 600,
      },
    },
  ],

  yAxis: [
    {
      type: 'value',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },

      splitLine: {
        show: false,
      },
    },
  ],
  dataZoom: [
    {
      show: true,
      height: 10,
      // xAxisIndex: [0],
      bottom: 30,
      startValue: 0,
      endValue: 8,
      handleIcon:
        'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
      handleSize: '200%',
      handleStyle: {
        color: '#fff',
        shadowColor: '#B1B5B9',
        shadowBlur: 5,
      },
      backgroundColor: '#DEE3F4',
      fillerColor: '#18D383',
    },
    {
      type: 'inside',
      show: true,
      height: 15,
      width: 20,
      start: 1,
      end: 35,
    },
  ],
  series: [
    {
      type: 'pictorialBar',
      data: data1,
      barWidth: 2,
      symbol: 'rect',
      itemStyle: {
        normal: {
          color: {
            //图形颜色
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#D0D6E5', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#D0D6E5', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          shadowColor: '#D0D6E5',
          shadowBlur: 1,
        },
      },
      label: {
        normal: {
          show: true,
          width: 210,
          height: 150,
          padding: [-33, -4, 0, 0],
          backgroundColor: '#fff',
          shadowColor: '#D6DAE0',
          shadowBlur: 4,
          borderRadius: 5,
          position: 'top',
          formatter: function (params) {
            return labelMess(params) + ['{sj|}\n'].join('');
          },
          rich: {
            b: {
              color: '#515151',
              fontWeight: 600,
              fontSize: 14,
              lineHeight: 30,
              padding: [-90, 0, 0, 10],
              align: 'left',
            },
            sj: {
              backgroundColor: {
                image: biao,
              },
              align: 'right',
              width: 60,
              height: 60,
            },
            value: {
              lineHeight: 0,
              fontSize: 14,
              padding: [-110, 0, 0, 10],
            },
          },
        },
      },
    },
  ],
};
