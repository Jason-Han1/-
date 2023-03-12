let bgColor = '#fff';
let title = '总量';
let color = ['#69D5FE', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'];
var sportsIcon = {
  a: '/asset/get/s/data-1559121268278-ozjd-lXoz.png',
  b: '/asset/get/s/data-1559121263841-UC5w7mTJ9.png',
  c: '/asset/get/s/data-1559121259198-sxyPSimU9.png',
  d: '/asset/get/s/data-1559121254241-xj5JAIBzC.png',
  e: '/asset/get/s/data-1559121249274-QxHDAdQGy.png',
};
let echartData = [
  {
    name: '工程预警',
    value: '3720',
    proportion: '6.91',
    image: '/asset/get/s/data-1628212428005-4Lcn5RtIF.png',
    itemStyle: {
      normal: {
        //颜色渐变
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#7CF0FE' },
          { offset: 1, color: '#5DC4FE ' },
        ]),
      },
    },
  },
  {
    name: '六类对象预警',
    value: '2200',
    proportion: '0.23',
    image: '/asset/get/s/data-1628212428005-4Lcn5RtIF.png',
    itemStyle: {
      normal: {
        //颜色渐变
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#8FFB80' },
          { offset: 1, color: '#5CCF78 ' },
        ]),
      },
    },
  },
  {
    name: '合同预警',
    value: '1420',
    proportion: '16.7',
    image: '/asset/get/s/data-1628212428005-4Lcn5RtIF.png',
    itemStyle: {
      normal: {
        //颜色渐变
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#7ACBFD' },
          { offset: 1, color: '#2D6AFF ' },
        ]),
      },
    },
  },
  {
    name: '资产预警',
    value: '1420',
    proportion: '0.54',
    image: '/asset/get/s/data-1628212428005-4Lcn5RtIF.png',
    itemStyle: {
      normal: {
        //颜色渐变
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#88A6FD' },
          { offset: 1, color: '#7D82FC' },
        ]),
      },
    },
  },
  {
    name: '资金预警',
    value: '2920',
    proportion: '0.23',
    image: '/asset/get/s/data-1628212428005-4Lcn5RtIF.png',
    itemStyle: {
      normal: {
        //颜色渐变
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#FFB759' },
          { offset: 1, color: '#F9687A ' },
        ]),
      },
    },
  },
];

let formatNumber = function (num) {
  let reg = /(?=(\B)(\d{3})+$)/g;
  return num.toString().replace(reg, ',');
};
let total = echartData.reduce((a, b) => {
  return a + b.value * 1;
}, 0);

option = {
  backgroundColor: bgColor,
  color: color,
  // tooltip: {
  //     trigger: 'item'
  // },
  title: [
    {
      text: '{name|' + title + '}\n{val|' + formatNumber(total) + '}',
      top: 'center',
      left: 'center',
      textStyle: {
        rich: {
          name: {
            fontSize: 14,
            fontWeight: 'normal',
            color: '#666666',
            padding: [10, 0],
          },
          val: {
            fontSize: 32,
             fontWeight: 'bold',
            color: '#333333',
          },
        },
      },
    },
    {
      text: '单位：个',
      top: 20,
      left: 20,
      textStyle: {
        fontSize: 14,
        color: '#666666',
        fontWeight: 400,
      },
    },
  ],
  legend: {
    icon: 'circle',
    orient: 'horizontal',
    x: '70%',
    y: 'center',
    itemWidth: 8,
    itemHeight: 8,
    align: 'left',
    textStyle: {
      rich: {
        a: {
          width: 18,
          height: 18,
          lineHeight: 50,
          backgroundColor: {
            image: sportsIcon.a,
          },
          align: 'left',
        },
        b: {
          width: 18,
          height: 18,
          lineHeight: 50,
          backgroundColor: {
            image: sportsIcon.b,
          },
          align: 'left',
        },
        c: {
          width: 18,
          height: 18,
          lineHeight: 50,
          backgroundColor: {
            image: sportsIcon.c,
          },
          align: 'left',
        },
        d: {
          width: 18,
          height: 18,
          lineHeight: 50,
          backgroundColor: {
            image: sportsIcon.d,
          },
          align: 'left',
        },
        e: {
          width: 18,
          height: 18,
          lineHeight: 50,
          backgroundColor: {
            image: sportsIcon.e,
          },
          align: 'left',
        },
        proportionA: {
          fontSize: 14,
          lineHeight: 17,
          color: '#fd5656',
          fontFamily: 'PingFangSC-Medium, PingFang SC',
        },
        proportionB: {
          fontSize: 14,
          lineHeight: 17,
          color: '#fd5656',
          fontFamily: 'PingFangSC-Medium, PingFang SC',
        },
        proportionC: {
          fontSize: 14,
          lineHeight: 17,
          color: '#fd5656',
          fontFamily: 'PingFangSC-Medium, PingFang SC',
        },
        proportionD: {
          fontSize: 14,
          lineHeight: 17,
          color: '#fd5656',
          fontFamily: 'PingFangSC-Medium, PingFang SC',
        },
        proportionE: {
          fontSize: 14,
          lineHeight: 17,
          color: '#8aed3e',
          fontFamily: 'PingFangSC-Medium, PingFang SC',
        },
        nameStyle: {
          fontSize: 12,
          lineHeight: 17,
          width: 80,
          color: '#A3A3AB',
          fontFamily: 'PingFangSC-Medium, PingFang SC',
          fontWeight: 400,
        },
        rate: {
          fontSize: 17,
          lineHeight: 17,
          color: '#4A4D68',
          fontFamily: 'PingFangSC-Medium, PingFang SC',
          fontWeight: 600,
        },
      },
    },
    formatter: function (name) {
      let res = echartData.filter((v) => v.name === name);
      res = res[0] || {};
      console.log(res);
      var str = '';
      switch (res.name) {
        case '工程预警':
          str =
            '{nameStyle|' +
            res.name +
            ' }' +
            '{rate|' +
            res.value +
            '}' +
            '  ' +
            '{a|}' +
            ' ' +
            '{proportionA|' +
            res.proportion +
            '%}';
          break;
        case '六类对象预警':
          str =
            '{nameStyle|' +
            res.name +
            ' }' +
            '{rate|' +
            res.value +
            '}' +
            '  ' +
            '{b|}' +
            ' ' +
            '{proportionB|' +
            res.proportion +
            '%}';
          break;
        case '合同预警':
          str =
            '{nameStyle|' +
            res.name +
            ' }' +
            '{rate|' +
            res.value +
            '}' +
            '  ' +
            '{c|}' +
            ' ' +
            '{proportionC|' +
            res.proportion +
            '%}';
          break;
        case '资产预警':
          str =
            '{nameStyle|' +
            res.name +
            ' }' +
            '{rate|' +
            res.value +
            '}' +
            '  ' +
            '{d|}' +
            ' ' +
            '{proportionD|' +
            res.proportion +
            '%}';
          break;
        case '资金预警':
          str =
            '{nameStyle|' +
            res.name +
            ' }' +
            '{rate|' +
            res.value +
            '}' +
            '  ' +
            '{e|}' +
            ' ' +
            '{proportionE|' +
            res.proportion +
            '%}';
          break;
      }
      return str;
      // return '{name|' + name + '}  {value|' + res.value + '}   {img1|} {value|' + res.proportion + ' %}';
    },
  },
  series: [
    {
      type: 'pie',
      radius: ['25%', '35%'],
      center: ['50%', '50%'],
      data: echartData,
      hoverAnimation: false,
      itemStyle: {
        normal: {
          borderColor: '#fff',
          borderWidth: 4,
        },
      },
      labelLine: {
        normal: {
          length: 15,
          length2: 20,
          lineStyle: {
            color: '#e6e6e6',
          },
        },
      },
      label: {
        normal: {
          formatter: (params) => {
            return '{value|' + formatNumber(params.value) + '}' + '\n' + '{value|' + params.percent + '%}';
          },
          rich: {
            value: {
              fontSize: 12,
              fontFamily: 'PingFangSC-Regular, PingFang SC',
              fonwweight: 400,
              color: 'rgba(0, 0, 0, 0.65)',
              lineHeight: 17,
            },
          },
        },
      },
    },
  ],
};