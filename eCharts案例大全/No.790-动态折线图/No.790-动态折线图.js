const base = +new Date(2021, 1, 1);
const oneDay = 24 * 3600 * 1000;
const date = [];
const xData = [Math.random() * 150];
let now = new Date(base);
function addData(shift) {
  now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
  date.push(now);
  xData.push((Math.random() - 0.4) * 10 + xData[xData.length - 1]);
  if (shift) {
    date.shift();
    xData.shift();
  }
  now = new Date(+new Date(now) + oneDay);
}
for (let i = 1; i < 20; i++) {
  addData();
}
option = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    show: false
  },
  color: '#0887FF',
  grid: {
    left: '3%',
    right: '4%',
    top: '10%',
    bottom: '14%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      textStyle: {
        color: '#999',
      }
    },
  },
  yAxis: {
    type: 'value',
    axisTick: {
      show: false,
    },
    splitLine: {
      lineStyle: {
        type: "dotted"
      }
    },
    axisLabel: {
      show: false,
    },
    axisLine:{
      show: false
    }
  },
  series: [
    {
      type: 'line',
      smooth: true,
      areaStyle:{
        color: new echarts.graphic.LinearGradient(
          0, 1, 0, 0,
          [
            {offset: 1, color: '#00A0E4'},
            {offset: 0, color: '#fbfdfe'},
          ]
        )
      },
      label: {
        show: true,
        position: 'top',
        textStyle: {
          color: '#00b3f4',
        },
        fontSize: 12,
        lineHeight: 18,
        align: 'left',
        formatter: function() {
          let strs = '网贷逾期会不会上'.split(''); //字符串数组
          let str = '';
          for(var i = 0, s; s = strs[i++];) {
            str += s;
            if(!(i % 8)) str += '\n';
            if(i > 30)  {
              str += '......';
              break;
            }
          }
          return str
        }
      },
    }
  ]
};
// 图表
setInterval(function () {
  addData(true);
  myChart.setOption({
    xAxis: {
      data: date
    },
    series: [{
      data: xData
    }]
  });
}, 800);

