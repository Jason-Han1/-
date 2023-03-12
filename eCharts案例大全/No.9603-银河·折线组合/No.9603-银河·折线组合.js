const type = ["疾病分期", "药物治疗", "放射治疗", "检查结果"];

const jianyanData = [
  ["2019-9-1", -10],
  ["2019-9-10", 100],
  ["2019-10-1", -13],
  ["2019-10-10", 31],
  ["2019-10-20", 42],
  ["2019-10-30", 34],
  ["2019-11-1", 55],
  ["2019-11-15", 24],
  ["2019-12-1", 89]
];

// 按“检验结果”的最大数值范围，切割为四份
let interval = Math.floor(Math.max(...jianyanData.map(item => item[1])) / 4);
// XXX: 如果最大值为负数，可能存在问题
if (interval <= 0) interval = 1

option = {
  xAxis: {
    type: "time",
    axisPointer: {
        show: true,
    }
  },
  yAxis: {
    type: "value",
    name: "检验结果",
    // 强制切分，不然 formatter 获取不到对应 value
    interval,
    // 不显示刻度
    axisTick: { show: false },
    axisLabel: {
      // 使用 -10x 表示固定项目，大于 0 的标识检验结果
      formatter(value) {
        if (value < 0) {
          const index = value / -interval - 1;
          if (index >= 0 && index < type.length) return type[index];
        }
      }
    },
    boundaryGap: 0.1
  },
  tooltip: {
    backgroundColor: 'rgba(245, 245, 245, 0.8)',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    textStyle: {
        color: '#000'
    },
    extraCssText: 'width: 170px',
    formatter: '{c}'
  },
  series: [
    // 疾病分期
    {
      data: [["2019-10-01", -interval], ["2019-10-15", -interval], ["2019-11-07", -interval]]
    },
    // 药物治疗
    {
      data: [["2019-9-1", -interval * 2], ["2019-10-1", -interval * 2]]
    },
    {
      data: [["2019-9-15", -interval * 2], ["2019-10-15", -interval * 2]]
    },
    // 放射治疗
    {
      data: [["2019-10-3", -interval * 3], ["2019-10-10", -interval * 3]]
    },
    // 检查结果
    {
      data: [["2019-10-10", -interval * 4]]
    },
    {
      data: [["2019-10-10", -interval * 4]],
      // 单个时间范围重叠计算
      symbolOffset: [5, 0]
    },
    {
      data: [["2019-10-10", -interval * 4]],
      // 单个时间范围重叠计算 * 2
      symbolOffset: [10, 0]
    },
    // 检验结果
    {
      data: jianyanData
    }
  ].map(v => {
    // 如果数据中的所有 y 轴数据都相同，认定为特定项
    // 或者通过数据的 type 或者 index 判断？
    const isType = v.data.every(v1 => v.data.every(v2 => v1[1] === v2[1]));
    const style = { symbolSize: 10, lineStyle: { width: 4 } };

    return {
      ...v,
      type: "line",
      ...(isType ? style : null)
    };
  })
};
