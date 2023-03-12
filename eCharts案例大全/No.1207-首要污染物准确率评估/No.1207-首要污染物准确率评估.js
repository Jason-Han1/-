const uploadedDataURL = '/asset/get/s/data-1635390802457-HRSoVX4EN.json';

const symbolPass =
  'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM0MjAwNDAzNDA1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1MDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDEwMjRDMjI5LjI0OCAxMDI0IDAgNzk0Ljc1MiAwIDUxMlMyMjkuMjQ4IDAgNTEyIDBzNTEyIDIyOS4yNDggNTEyIDUxMi0yMjkuMjQ4IDUxMi01MTIgNTEyeiBtLTExNC4xNzYtMzEwLjk1NDY2N2E1My4zMzMzMzMgNTMuMzMzMzMzIDAgMCAwIDc1LjQzNDY2NyAwbDMyMy4zMjgtMzIzLjMyOGE1My4zMzMzMzMgNTMuMzMzMzMzIDAgMSAwLTc1LjQzNDY2Ny03NS40MzQ2NjZsLTI4Ny45MTQ2NjcgMjgzLjMwNjY2Ni0xMjguODUzMzMzLTEyOC44NTMzMzNhNTMuMzMzMzMzIDUzLjMzMzMzMyAwIDEgMC03NS40MzQ2NjcgNzUuNDM0NjY3bDE2OC44NzQ2NjcgMTY4Ljg3NDY2NnoiIGZpbGw9IiMxYWZhMjkiIHAtaWQ9IjI1MDEiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkwIiBjbGFzcz0iIj48L3BhdGg+PC9zdmc+';
const symbolFail =
  'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM0MjgwMDM2OTY5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwOTkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDMyQzI1MS40Mjg1NzE1NjI1IDMyIDMyIDI1MS40Mjg1NzE1NjI1IDMyIDUxMnMyMTkuNDI4NTcxNTYyNSA0ODAgNDgwIDQ4MCA0ODAtMjE5LjQyODU3MTU2MjUgNDgwLTQ4MC0yMTkuNDI4NTcxNTYyNS00ODAtNDgwLTQ4MHogbTIwNS43MTQyODUzMTI1IDYxNy4xNDI4NTY4NzVjMjAuNTcxNDI4NDM3NSAyMC41NzE0Mjg0Mzc1IDIwLjU3MTQyODQzNzUgNDggMCA2MS43MTQyODYyNDk5OTk5OTQtMjAuNTcxNDI4NDM3NSAyMC41NzE0Mjg0Mzc1LTQ4IDIwLjU3MTQyODQzNzUtNjEuNzE0Mjg1MzEyNDk5OTk2IDBsLTEzNy4xNDI4NTY4NzUtMTM3LjE0Mjg1NzgxMjVMMzc0Ljg1NzE0MzEyNSA3MTcuNzE0Mjg1MzEyNWMtMjAuNTcxNDI4NDM3NSAyMC41NzE0Mjg0Mzc1LTQ4IDIwLjU3MTQyODQzNzUtNjguNTcxNDI4NDM3NSAwcy0yMC41NzE0Mjg0Mzc1LTU0Ljg1NzE0MzEyNSAwLTY4LjU3MTQyODQzNzVsMTQ0LTE0NC0xMzcuMTQyODU3ODEyNS0xMzcuMTQyODU2ODc1Yy0yMC41NzE0Mjg0Mzc1LTEzLjcxNDI4NTMxMjUwMDAwMS0yMC41NzE0Mjg0Mzc1LTQxLjE0Mjg1Njg3NSAwLTYxLjcxNDI4NTMxMjQ5OTk5NiAyMC41NzE0Mjg0Mzc1LTIwLjU3MTQyODQzNzUgNDgtMjAuNTcxNDI4NDM3NSA2MS43MTQyODYyNDk5OTk5OTQgMGwxMzcuMTQyODU2ODc1IDEzNy4xNDI4NTY4NzUgMTQ0LTE0NGMyMC41NzE0Mjg0Mzc1LTIwLjU3MTQyODQzNzUgNDgtMjAuNTcxNDI4NDM3NSA2OC41NzE0Mjg0Mzc1IDAgMjAuNTcxNDI4NDM3NSAyMC41NzE0Mjg0Mzc1IDIwLjU3MTQyODQzNzUgNDggMCA2OC41NzE0Mjg0Mzc1TDU4MC41NzE0Mjg0Mzc1IDUxMmwxMzcuMTQyODU2ODc1IDEzNy4xNDI4NTY4NzV6IiBmaWxsPSIjZjE1MDQ3IiBwLWlkPSIyMTAwIj48L3BhdGg+PC9zdmc+';

const colors = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'];

// AQI 等级
const AQI_LEVELS = [
  {
    icon: 'k1',
    label: '优',
    otherName: '一级',
    value: 1,
    min: 0,
    max: 50,
    proposal: '空气质量令人满意，基本无空气污染',
    influence: '各类人群可正常活动',
    color: '#00E500',
    lightColor: '#D2F5A5',
  },
  {
    icon: 'k2',
    label: '良',
    otherName: '二级',
    value: 2,
    min: 51,
    max: 100,
    proposal: '空气质量可接受，但某些污染物可能对极少数异常敏感人群健康有较弱影响',
    influence: '极少数异常敏感人群应减少户外活动',
    color: '#FFFF00',
    lightColor: '#EBEBD8',
  },
  {
    icon: 'k3',
    label: '轻度',
    otherName: '三级',
    value: 3,
    min: 101,
    max: 150,
    proposal: '易感人群症状有轻度加剧，健康人群出现刺激症状',
    influence: '儿童、老年人及心脏病、呼吸系统疾病患者应减少长时间、高强度的户外锻炼',
    color: '#FF7E00',
    lightColor: '#F2E1C7',
  },
  {
    icon: 'k4',
    label: '中度',
    otherName: '四级',
    value: 4,
    min: 151,
    max: 200,
    proposal: '进一步加剧易感人群症状，可能对健康人群心脏、呼吸系统有影响',
    influence: '儿童、老年人及心脏病、呼吸系统疾病患者避免长时间、高强度的户外锻炼，一般人群适量减少户外运动',
    color: '#FE0000',
    lightColor: '#F3D3D3',
  },
  {
    icon: 'k5',
    label: '重度',
    otherName: '五级',
    value: 5,
    min: 201,
    max: 300,
    proposal: '心脏病和肺病患者症状显著加剧，运动耐受力降低，健康人群普遍出现症状',
    influence: '儿童、老年人及心脏病、肺病患者应停留在室内，停止户外运动，一般人群减少户外运动',
    color: '#99004C',
    lightColor: '#E5D2ED',
  },
  {
    icon: 'k6',
    label: '严重',
    otherName: '六级',
    value: 6,
    min: 301,
    max: '+',
    proposal: '健康人群运动耐受力降低，有明显强烈症状，提前出现某些疾病',
    influence: '儿童、老年人和病人应停留在室内，避免体力消耗，一般人群避免户外活动',
    color: '#7E0022',
    lightColor: '#F3CBD7',
  },
];

/**
 * @description 获取AQI等级
 * @params {number} value
 */
//  获取AQI等级
const getLevel = (value) => {
  let index = 0;
  if (!value || value <= 50) index = 0;
  if (value > 50 && value <= 100) index = 1;
  if (value > 100 && value <= 150) index = 2;
  if (value > 150 && value <= 200) index = 3;
  if (value > 200 && value <= 300) index = 4;
  if (value > 300) index = 5;
  return { index, ...AQI_LEVELS[index] };
};

// 首要污染物别名配置
const PRIMARY = {
  NA: '无',
};

// 获取首要污染物Label
const getPrimaryLabel = (value) => {
  if (!value) return '';
  if (PRIMARY[value]) return PRIMARY[value];
  return value;
};

// 获取渐变颜色范围
const colorRange = (startColor, endColor) => ({
  type: 'linear',
  x: -0.33,
  y: 0.5,
  colorStops: [
    { offset: 0, color: startColor }, // 0% 处的颜色
    { offset: 0.5, color: startColor },
    { offset: 0.5, color: endColor },
    { offset: 1, color: endColor }, // 100% 处的颜色
  ],
  global: false, // 缺省为 false
});

// 获取趋势
const getTrend = (history, forecast) => {
  if (history === null || forecast === null) return '';
  const historyLevel = getLevel(history);
  const forecastLevel = getLevel(forecast);
  if (historyLevel.label === forecastLevel.label) return '正确';
  return history < forecast ? '偏高' : '偏低';
};

// 获取趋势标记符号
const getSymbol = (history, forecast) => {
  if (history === null || forecast === null) return '';
  return history === forecast ? symbolPass : symbolFail;
};

// 获取悬浮提示元素
const getTooltipRow = (params, factors) => {
  return `
  <div style="display: flex; justify-content: space-between; padding-top: 3px;">
    <span>${params.value[1] ? '实况监测' : '模式预测'}</span>
    <span style="padding-left: 15px">${params.marker || ''}</span>
    <span>${factors[params.value[2]] || '-'}</span>
  </div>`;
};

/**
 * @description 将接口数据转化为符合 echarts 的数据
 * @param {array} history 历史数据
 * @param {array} forecast 预测数据
 * @param {boolean} diff 是否按AQI等级拆分数据
 * @returns echartsData 符合echarts配置数据
 */
const transformData = (history, forecast, isDiff = false) => {
  const xAxisData = [...new Set([...Object.keys(history)])].sort();
  const yAxisData = ['模式预测', '实况监测'];

  let seriesData = [];
  let seriesDatas = [];
  const markPointData = [];
  const factors = [];

  for (let i = 0; i < xAxisData.length; i++) {
    for (let j = 0; j < yAxisData.length; j++) {
      const key = xAxisData[i];
      const historyValue = getPrimaryLabel((history[key] || {}).primary) || null;
      const forecastValue = getPrimaryLabel((forecast[key] || {}).primary) || null;
      seriesData.push([i, j, j ? historyValue : forecastValue]);
      if (!factors.includes(historyValue)) factors.push(historyValue);
      if (!factors.includes(forecastValue)) factors.push(forecastValue);
      if (j) {
        const symbol = getSymbol(historyValue, forecastValue);
        markPointData.push({
          show: Boolean(symbol),
          xAxis: i,
          yAxis: 1,
          symbolSize: 20,
          symbol,
        });
      }
    }
  }

  seriesData = seriesData.map(([x, y, factor]) => {
    const index = factors.findIndex((v) => v === factor);
    return [x, y, index];
  });

  // 按AQI等级区分数据
  if (isDiff) {
    seriesDatas = factors.map((v, i) => {
      const data = seriesData.filter((v) => v[2] === i);
      const color = v === '无' ? '#EFEFEF' : colors[i];
      return { name: v, data, color };
    });
  }

  return { xAxisData, yAxisData, seriesData, seriesDatas, markPointData, factors };
};

$.getJSON(uploadedDataURL, (data) => {
  const { history, forecast } = data;
  console.log(data);
  const { xAxisData, yAxisData, seriesDatas, markPointData, factors } = transformData(
    history || {},
    forecast || {},
    true
  );
  const myOption = {
    title: {
      text: '首要污染物准确率评估',
      left: 'center',
    },
    grid: {
      height: 80,
      top: 70,
      left: 58,
      right: 10,
      bottom: 50,
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      splitArea: {
        show: true,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: [
      {
        type: 'category',
        data: yAxisData,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      {
        type: 'value',
      },
    ],
    legend: {
      show: true,
      icon: 'circle',
      bottom: 0,
    },
    tooltip: {
      position: 'top',
      trigger: 'axis',
      formatter: (params) => {
        if (params.length !== 2) return '';
        const [paramsOne, paramsTwo] = params;
        const result = [];
        const dateStr = (paramsTwo || {}).axisValue || (paramsOne || {}).axisValue;
        if (dateStr) result.push(dateStr);
        if (paramsOne.value[1]) {
          if (paramsOne) result.push(getTooltipRow(paramsOne, factors));
          if (paramsTwo) result.push(getTooltipRow(paramsTwo, factors));
        } else {
          if (paramsTwo) result.push(getTooltipRow(paramsTwo, factors));
          if (paramsOne) result.push(getTooltipRow(paramsOne, factors));
        }
        return result.join('');
      },
    },
    visualMap: [
      {
        show: false,
        type: 'piecewise',
        pieces: factors.map((v, i) => ({
          value: i,
          name: v,
          color: v === '无' ? '#EFEFEF' : colors[i],
        })),
      },
    ],
    series: [
      {
        type: 'line',
        color: '#41C15A',
        markPoint: {
          symbolOffset: [0, -35],
          data: markPointData,
        },
      },
      ...seriesDatas.map(({ name, data, color }) => ({
        name,
        data,
        type: 'heatmap',
        label: {
          show: true,
          formatter: (params) => {
            if (!params.value.length) return '';
            return factors[params.value[2]];
          },
        },
        itemStyle: {
          color,
          borderWidth: 2,
          borderColor: '#fff',
        },
      })),
    ],
  };
  myChart.setOption(myOption);
});
