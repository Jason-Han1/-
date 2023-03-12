// ie上字体有兼容问题

let data = [
  { name: '测试', value: 123 },
  { name: 'test11', value: 14123 },
  { name: '测试测试', value: 353453 },
  { name: 'iiii', value: 45454 },
  { name: 'MMMM', value: 15 },
];

data = setNameEqualLength(data);

const legendData = data.map((d) => d.name);

option = {
  title: {
    text: '不定长度的字符串占用相同的长度',
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    right: '2%',
    top: 'center',
    data: legendData,
    textStyle: {
      fontFamily: 'monospace'
      // fontFamily: "Courier New"
      // fontFamily: "Consolas"
      // 下面这些字体电脑没有
      // fontFamily: "Monaco"
      // fontFamily: "Menlo"
      // fontFamily: "Ubuntu Mono"
      // fontFamily: "Source Code Pro"
    },
    formatter(name) {
      const tmp = data.find((d) => d.name === name)
      return name + '   ' + tmp.value;
    },
  },
  series: [
    {
      type: 'pie',
      label: {
        show: false,
      },
      data,
    },
  ],
};

function setNameEqualLength(data) {
  const maxlength = data.reduce((max, cur) => {
    const l = getCharLength(cur.name);
    max = l > max ? l : max;
    return max;
  }, 0);

  return data.map((d) => {
    const l = getCharLength(d.name);
    d.name += Array.from({ length: maxlength - l })
      .fill(' ')
      .join('');

    return d;
  });
}

// 获取字符串长度，一个中文字符串的长度为2
function getCharLength(str) {
  let i = 0;
  let c = 0;
  let unicode = 0;

  if (str == null || str == '') {
    return 0;
  }
  const len = str.length;
  for (i = 0; i < len; i++) {
    unicode = str.charCodeAt(i);
    // 判断是单字符还是双字符
    if (unicode < 127) {
      c += 1;
    } else {
      // chinese
      c += 2;
    }
  }
  return c;
}
