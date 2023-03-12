const color = ['#728BE1', '#71ABDB', '#A5D2E4'];
const data1 = [6000, 2000, 500, 200, 600, 400, 1000, 500, 800];
const data2 = [];
let temp = 0;
data1.map((item, index) => {
  data2.push(temp);
  if(index ===0){
    temp = item
  }
    temp = temp - data1[index + 1];
});
console.log(data2);
option = {
  // 设置图表的位置
  grid: {
    x: 40, // 左间距
    x2: 40, // 右间距
    y: 80, // 上间距
    y2: 30, // 下间距
    // grid 区域是否包含坐标轴的刻度标签
    // 这常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，
    // 可能会溢出容器或者覆盖其他组件
    containLabel: true,
  },
  // 图表主标题
  title: {
    text: '总销售额', // 主标题文本，支持使用 \n 换行
    top: 20, // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
    left: 'center', // 值: 'left', 'center', 'right' 同上
    textStyle: {
      // 文本样式
      fontSize: 24,
      fontWeight: 600,
      color: '#fff',
    },
  },
  // 提示框组件
  tooltip: {
    trigger: 'axis', // 触发类型, axis: 坐标轴触发
    textStyle: {
      fontSize: 14,
      color: '#494A68', // 文字颜色
    },
    // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
    // 折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
    formatter: '{b1}: {c1}万',
  },
  // X轴
  xAxis: {
    type: 'category', // 坐标轴类型,  'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据
    // 坐标轴轴线
    axisLine: {
      lineStyle: {
        type: 'solid', // 坐标轴线线的类型 'solid', 'dashed', 'dotted'
        color: 'rgba(182, 183, 195, 0.38)', // 坐标轴线线的颜色
      },
    },
    // 坐标轴刻度
    axisTick: {
      show: false,
    },
    // 分隔线
    splitLine: {
      show: true,
    },
    // 坐标轴刻度标签
    axisLabel: {
      fontSize: 14, // 文字的字体大小
      color: '#494A68', // 刻度标签文字的颜色
    },
    // 类目数据，在类目轴（type: 'category'）中有效
    data: ['总入账', '行内转账', '行外转入', '理财', '代付', '商户', '定期', '现金存入', '代发工资'],
  },
  // Y轴
  yAxis: {
    type: 'value', // 坐标轴类型,   'value' 数值轴，适用于连续数据
    // 坐标轴在图表区域中的分隔线
    splitLine: {
      show: true, // 是否显示分隔线, 默认数值轴显示
      lineStyle: {
        type: 'solid', // 坐标轴线线的类型 'solid', 'dashed', 'dotted'
        color: 'rgba(182, 183, 195, 0.38)', // 坐标轴线线的颜色
      },
    },
    // 坐标轴轴线
    axisLine: {
      show: true,
      lineStyle: {
        type: 'solid', // 坐标轴线线的类型 'solid', 'dashed', 'dotted'
        color: 'rgba(182, 183, 195, 0.38)', // 坐标轴线线的颜色
      },
    },
    // 坐标轴刻度
    axisTick: {
      show: false,
    },
    // 坐标轴刻度标签
    axisLabel: {
      color: '494A68',
    },
  },
  series: [
    {
      type: 'bar', // 系列类型
      name: '辅助', // 系列名称, 用于tooltip的显示, legend 的图例筛选
      // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
      stack: '金额',
      // 图形样式
      itemStyle: {
        normal: {
          color: 'rgba(0,0,0,0)', // 柱条的颜色
        },
      },
      data: data2 // 系列中的数据内容数组
    },
    {
      type: 'bar', // 系列类型
      name: '运营管理', // 系列名称, 用于tooltip的显示, legend 的图例筛选
      // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
      stack: '金额',
      barWidth: 14, // 柱条的最大宽度，不设时自适应
      // 图形的样式
      itemStyle: {
        color: (val) => {
          return color[parseInt(val.dataIndex / 3)];
        },
      },
      // 系列中的数据内容数组
      data: data1
    },
  ],
};
