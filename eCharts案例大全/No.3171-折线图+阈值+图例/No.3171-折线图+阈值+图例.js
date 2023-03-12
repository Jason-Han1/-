// 多图表配置
const ecoption = {
  type: 'winds10',
  title: '10m风速风向（m/s）',
  series: { type: 'line', color: '#F49729' },
};

// 数据
const resdata = {
  date:["08日\n17时","08日\n18时","08日\n19时","08日\n20时","08日\n21时","08日\n22时","08日\n23时","09日\n00时","09日\n01时","09日\n02时","09日\n03时","09日\n04时","09日\n05时","09日\n06时","09日\n07时","09日\n08时","09日\n09时","09日\n10时","09日\n11时","09日\n12时","09日\n13时","09日\n14时","09日\n15时","09日\n16时","09日\n17时","09日\n18时","09日\n19时","09日\n20时","09日\n21时","09日\n22时","09日\n23时","10日\n00时","10日\n01时","10日\n02时","10日\n03时","10日\n04时","10日\n05时","10日\n06时","10日\n07时","10日\n08时","10日\n09时","10日\n10时","10日\n11时","10日\n12时","10日\n13时","10日\n14时","10日\n15时","10日\n16时","10日\n17时","10日\n18时","10日\n19时","10日\n20时","10日\n21时","10日\n22时","10日\n23时"],
  winds10: ["6.1","6.9","7.0","7.2","6.7","6.6","6.9","6.5","6.6","6.3","6.0","5.6","6.6","6.4","7.0","6.5","6.5","5.7","6.3","6.9","7.0","7.4","7.9","9.0","9.1","9.3","10.6","11.7","11.6","11.4","10.9","10.3","10.2","9.2","9.4","8.3","8.4","8.8","7.1","6.4","5.5","5.2","4.6","3.4","1.9","1.7","4.3","5.2","4.2","3.1","4.7","5.2","4.4","6.0","5.3"],
  windd10: ["119.5","114.3","113.1","118.6","107.4","100.3","110.4","113.2","116.3","128.8","119.7","113.4","107.6","107.1","101.0","106.9","104.9","108.4","112.3","116.5","120.3","127.9","126.7","134.9","141.3","141.8","143.5","144.6","150.3","148.8","153.7","153.5","150.7","146.5","143.0","147.3","149.6","152.0","148.5","141.8","142.8","138.0","138.5","145.0","183.1","310.5","6.8","26.6","47.7","36.5","343.0","334.8","322.1","321.2","333.1"]
};
// 阈值
const _threshold = 6;

// 风速无负数
let minValue = calMin(resdata.winds10) < 0 ? 0 : calMin(resdata.winds10);
let maxValue = calMax(resdata.winds10);
// 间隔
let splitNumber = 5;

option = {
  title: {
    text: ecoption.title,
    left: 8,
    top: 8,
    textStyle: { color: '#fff', fontSize: 14, fontWeight: 'normal' },
  },
  grid: {
    left: '8%',
    right: '8%',
    top: 46,
    bottom: 74,
  },
  dataZoom: [
    {
      type: 'slider',
      height: 24,
      bottom: 12,
      start: 0,
      end: 100,
    },
  ],
  xAxis: {
    type: 'category',
    boundaryGap: ecoption.boundaryGap || false,
    axisTick: { show: false },
    axisLabel: { textStyle: { color: '#b9b8ce' } },
    axisLine: { lineStyle: { color: '#cccccc' } },
    data: resdata.date,
  },
  yAxis: {
    x: 'center',
    type: 'value',
    splitLine: { lineStyle: { type: 'dashed' } },
    min: minValue,
    max: maxValue,
    splitNumber: splitNumber,
    interval: (maxValue - minValue) / splitNumber,
  },
  visualMap: {
    show: false,
    pieces: [
      {
        gt: _threshold,
        lte: maxValue,
        color: '#FF6464'
      },
      {
        value: _threshold,
        color: '#FF6464'
      }
    ],
    outOfRange: { color: ecoption.series.color },
  },
  series: [
    {
      name: ecoption.series.title,
      type: ecoption.series.type,
      smooth: true,
      color: ecoption.series.color,
      showAllSymbol: false, // 随主轴标签间隔隐藏策略
      label: {
        show: true,
        position: 'top',
        textStyle: { color: 'inherit' }, // 设置为 'inherit'，则为视觉映射得到的颜色，如系列色。
      },
      markLine: {
        data: [
          {
            name: '阈值',
            yAxis: _threshold,
            lineStyle: { color: '#FF6464' },
            label: { color: '#FF6464' },
          },
        ],
      },
      data: getWindSeries(resdata.winds10, resdata.windd10),
    },
  ],
};

// 计算最大值
function calMax(arr) {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let interval = (max - min) / 5; // 平均值
  max = Math.ceil(max + interval); // 向上取整
  // console.log(min, max, interval);
  return max;
}
// 计算最小值
function calMin(arr) {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let interval = (max - min) / 5; // 平均值
  min = min === 0 ? min : Math.floor(min - interval); // 向下取整
  // console.log(min, max, interval);
  return min;
}

function getWindSeries(winds, windd) {
  let windSeries = [];
  for (let i = 0; i < winds.length; i++) {
    windSeries.push({
      value: parseFloat(winds[i]),
      symbol: getWindPic(windd[i]),
      symbolSize: 15,
    });
  }
  return windSeries;
}

function getWindPic(winddirection) {
  let windPic = '';
  //0 45 90 ... 按此为风的中线划分区间
  if (winddirection <= 22.5 || winddirection > 337.5)
    // arrow_north     ↓
     windPic = 'path://M31.9304 1.13712L17.0147 33.7651L2.99726 1.05765L17.7764 8.44721L18.0074 8.56272L18.2353 8.44118L31.9304 1.13712Z';
  else if (22.5 < winddirection && winddirection <= 67.5)
    // arrow_northeast ↙
    windPic = 'path://M34.3599 21.9681L0.741488 34.4926L13.9573 1.45304L19.1825 17.1287L19.2642 17.3737L19.5113 17.4489L34.3599 21.9681Z';
  else if (67.5 < winddirection && winddirection <= 112.5)
    // arrow_east      ←
    windPic = 'path://M33.8629 31.9304L1.23488 17.0147L33.9424 2.99726L26.5528 17.7764L26.4373 18.0074L26.5588 18.2353L33.8629 31.9304Z';
  else if (112.5 < winddirection && winddirection <= 157.5)
    // arrow_southeast ↖
    windPic = 'path://M14.0319 34.3599L1.50743 0.741488L34.547 13.9573L18.8713 19.1825L18.6263 19.2642L18.5511 19.5113L14.0319 34.3599Z';
  else if (157.5 < winddirection && winddirection <= 202.5)
    // arrow_south     ↑
    windPic = 'path://M3.06959 33.8629L17.9853 1.23488L32.0027 33.9424L17.2236 26.5528L16.9926 26.4373L16.7647 26.5588L3.06959 33.8629Z';
  else if (202.5 < winddirection && winddirection <= 247.5)
    // arrow_southwest ↗
    windPic = 'path://M1.64007 14.0319L35.2585 1.50743L22.0427 34.547L16.8175 18.8713L16.7358 18.6263L16.4887 18.5511L1.64007 14.0319Z';
  else if (247.5 < winddirection && winddirection <= 292.5)
    // arrow_west      →
    windPic = 'path://M1.13712 3.06959L33.7651 17.9853L1.05765 32.0027L8.44721 17.2236L8.56272 16.9926L8.44118 16.7647L1.13712 3.06959Z';
  else if (292.5 < winddirection && winddirection <= 337.5)
    // arrow_northwest ↘
    windPic = 'path://M21.9681 1.64007L34.4926 35.2585L1.45304 22.0427L17.1287 16.8175L17.3737 16.7358L17.4489 16.4887L21.9681 1.64007Z';
  return windPic;
}
