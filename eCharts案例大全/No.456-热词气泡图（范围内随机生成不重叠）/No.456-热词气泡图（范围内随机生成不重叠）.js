let resultData = {
  status: 'success',
  data: [
    {
      name: '徐平',
      value: 4,
    },
    {
      name: '常伟',
      value: 894,
    },
    {
      name: '魏杰',
      value: 33,
    },
    {
      name: '丁秀兰',
      value: 333,
    },
    {
      name: '邓强',
      value: 32,
    },
    {
      name: '萧杰',
      value: 785,
    },
    {
      name: '叶磊',
      value: 235,
    },
    {
      name: '袁涛',
      value: 785,
    },
    {
      name: '李芳',
      value: 333,
    },
    {
      name: '赖军',
      value: 61,
    },
    {
      name: '魏秀英',
      value: 337,
    },
    {
      name: '陈勇',
      value: 235,
    },
    {
      name: '薛芳',
      value: 4,
    },
    {
      name: '龚桂英',
      value: 337,
    },
    {
      name: '唐强',
      value: 894,
    },
    {
      name: '常军',
      value: 337,
    },
    {
      name: '易霞',
      value: 235,
    },
    {
      name: '侯磊',
      value: 894,
    },
    {
      name: '龚丽',
      value: 61,
    },
    {
      name: '范静',
      value: 785,
    },
    {
      name: '顾静',
      value: 894,
    },
    {
      name: '马艳',
      value: 894,
    },
    {
      name: '杜勇',
      value: 337,
    },
    {
      name: '夏涛',
      value: 61,
    },
    {
      name: '孟娟',
      value: 337,
    },
  ],
  msg: 'exercitation in',
};

//  颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
let colorList = [
  new echarts.graphic.LinearGradient(0, 0, 1, 1, [
    {
      offset: 0,
      color: 'rgba(59, 181, 182, 1)',
    },
    {
      offset: 1,
      color: 'rgba(66, 227, 151, 0.2)',
    },
  ]),
  new echarts.graphic.LinearGradient(1, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(254, 220, 69, 1)',
    },
    {
      offset: 1,
      color: 'rgba(251, 112, 153, 0.2)',
    },
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 0, [
    {
      offset: 0,
      color: 'rgba(0, 138, 255, 1)',
    },
    {
      offset: 1,
      color: 'rgba(0, 216, 255, 0.2)',
    },
  ]),
  new echarts.graphic.LinearGradient(0, 0, 1, 1, [
    {
      offset: 0,
      color: 'rgba(246, 191, 159, 1)',
    },
    {
      offset: 1,
      color: 'rgba(219, 138, 222, 0.2)',
    },
  ]),
  new echarts.graphic.LinearGradient(1, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(247, 138, 158, 1)',
    },
    {
      offset: 0.5,
      color: 'rgba(245, 111, 135, 0.5)',
    },
    {
      offset: 1,
      color: 'rgba(254, 152, 139, 0.2)',
    },
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 0, [
    {
      offset: 0,
      color: 'rgba(144, 125, 228, 1)',
    },
    {
      offset: 1,
      color: 'rgba(33, 223, 209, 0.2)',
    },
  ]),
  new echarts.graphic.LinearGradient(0, 0, 1, 1, [
    {
      offset: 0,
      color: 'rgba(32, 156, 255, 1)',
    },
    {
      offset: 1,
      color: 'rgba(104, 224, 207, 0.2)',
    },
  ]),
  new echarts.graphic.LinearGradient(1, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(94, 209, 225, 1)',
    },
    {
      offset: 0.5,
      color: 'rgba(191, 194, 254, 0.5)',
    },
    {
      offset: 1,
      color: 'rgba(232, 189, 219, 0.2)',
    },
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 0, [
    {
      offset: 0,
      color: 'rgba(238, 114, 125, 1)',
    },
    {
      offset: 1,
      color: 'rgba(253, 162, 63, 0.2)',
    },
  ]),
];
let colorListLen = colorList.length;

// 生成随机坐标的不重叠圆
function drawCircles(maxLength, radius, max_x, max_y) {
  let circles = [];
  let anti_crash_count = 0;
  while (circles.length < maxLength) {
    let circle = {
      x: getRandomNumber(radius, max_x - radius),
      y: getRandomNumber(radius, max_y - radius),
      radius,
    };

    let isOverlapping = false;

    for (let j = 0; j < circles.length; j++) {
      let previous_circle = circles[j];
      let distance = Math.hypot(circle.x - previous_circle.x, circle.y - previous_circle.y);

      if (distance < circle.radius + previous_circle.radius) {
        isOverlapping = true;
        break;
      }
    }

    if (!isOverlapping) {
      circles.push(circle);
    }
    anti_crash_count++;
    if (anti_crash_count > 10000) {
      break;
    }
  }
  return circles;
}

// 生成随机数坐标
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// 数据数组
let countList = resultData.data;
var showData = [];
var sum = 0,
  max = 0;
countList.forEach((e, i) => {
  e.id = i;
  e.label = {
    normal: {
      show: true,
      color: '#fff',
    },
  };
  e.itemStyle = {
    normal: {
      color: colorList[Math.floor(Math.random() * colorListLen)],
      shadowBlur: 16,
      shadowOffsetY: 16,
      shadowColor: 'rgba(0,0,0,0.1)',
    },
  };
  sum += e.value;
  if (e.value >= max) max = e.value;
});
// 放大规则
var number = Math.round(max * 0.5);
let graphCanvas = document.getElementById('chart-panel').getBoundingClientRect();
let randomCircleArr = drawCircles(
  countList.length,
  ((max + number) / max) * 40,
  graphCanvas.width,
  graphCanvas.height
);
countList.forEach((e, i) => {
  if (randomCircleArr[i]) {
    e.x = randomCircleArr[i].x;
    e.y = randomCircleArr[i].y;
    e.symbolSize = ((e.value + number) / max) * 70;
    e.label.normal.fontSize = ((e.value + number) / max) * 15;
  } else {
    e.symbolSize = 0;
    e.x = 0;
    e.y = 0;
  }
});
option = {
  title: {},
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      if (params['data']['name'] !== '') {
        return '<b>' + params['data']['name'] + '</b>：<b>' + params['data']['value'] + ' </b>';
      }
    },
  },
  series: [
    {
      name: '词条分布',
      type: 'graph',
      layout: 'none',
      label: {
        show: true,
        normal: {
          color: '#fff',
        },
      },
      data: countList,
    },
  ],
};
