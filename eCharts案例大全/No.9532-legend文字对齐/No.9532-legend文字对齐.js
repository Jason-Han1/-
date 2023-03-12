// 返回几个空格
function setSpace(name, maxLen) {
  const space = maxLen - name.length;
  if (space < 0) {
    return '';
  }
  let str = '';
  for (let index = 0; index < space; index++) {
    str = str + '区';
  }
  return str;
}
// 数字占位用于百分比
function setNumber(num, total) {
  const _num = Math.round((num * 100) / total);
  if (_num < 10) {
    return 0;
  }
  return '';
}

// 用于数值
function setNum(num, maxLen) {
  const len = num.toString().length;
  const space = maxLen - len;
  if (space < 0) {
    return '';
  }
  let str = '';
  for (let index = 0; index < space; index++) {
    str = str + '0';
  }
  return str;
}
const animaton = 3000;
const arr = [
    {
        name: '重庆',
        num: 30,
    },
    {
        name: '哈尔滨',
        num: 60,
    },
    {
        name: '杭州',
        num: 35,
    },
    {
        name: '乌鲁木齐',
        num: 39,
    },
    {
        name: '其它',
        num: 39,
    }
]
const names = arr.map(item => item.name.length); // 获取每个名字的长度
const nums = arr.map(item => item.num.toString().length); // 获取每个数字的长度
const maxLen = Math.max(...names);
const maxNumLen = Math.max(...nums);
const total = arr.reduce((a, b) => a + b.num, 0); // 获取总数
const data = arr.map(({ num, name }) => ({
  value: num,
  name: `${name}{a|${setSpace(name, maxLen)}}     {a|${setNumber(num, total)}}${Math.round(
    (num * 100) / total
  )}%     {a|${setNum(num, maxNumLen)}}${num}`,
  legendname: name,
}));

 option = {
      animation: true,
      animationDuration: animaton,
      animationEasing: 'quadraticOut',
      color: ['#F7B500', '#30DCD6', '#F27878', '#5584FF', '#9F80E1', '#FA6400'],
      tooltip: {
        trigger: 'item',
        formatter: function({ name }) {
          return name.replace(/\{.*?\}/g, '');
        },
      },
      title: [
        {
          text: '总数',
          subtext: data.reduce((a, b) => a + b.value, 0),
          textStyle: {
            color: 'black',
            fontSize: 20,
          },
          subtextStyle: {
            color: 'black ',
            fontSize: 20,
          },
          textAlign: 'center',
          x: '29%',
          y: '45%',
        },
      ],
      grid: {
        bottom: 150,
        left: 100,
        right: '10%',
      },
      legend: {
        orient: 'vertical',
        top: 'middle',
        right: '5%',
        icon: 'circle',
        textStyle: {
          color: 'black',
          rich: {
            a: {
              color: 'rgba(0,0,0,0)',
              opacity: 0,
            },
          },
        },
      },
      series: [
        // 主要展示层的
        {
          radius: ['40%', '70%'],
          center: ['30%', '50%'],
          type: 'pie',
          name: '区域分布',
          data: data,
          label: {
            normal: {
              show: false,
            },
          },
        },
        // 边框的设置
        {
          radius: ['40%', '53%'],
          center: ['30%', '50%'],
          type: 'pie',
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          animation: false,
          tooltip: {
            show: false,
          },
          data: [
            {
              value: 1,
              itemStyle: {
                color: 'rgba(250,250,250,0.3)',
              },
            },
          ],
        },
        {
          name: '外边框',
          type: 'pie',
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          center: ['30%', '50%'],
          radius: ['74%', '74%'],
          label: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 9,
              name: '',
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  borderColor: '#0b5263',
                },
              },
            },
          ],
        },
      ],
    };