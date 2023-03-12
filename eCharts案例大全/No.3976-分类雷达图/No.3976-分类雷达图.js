  const symbolColors = [
  '#0075ee',
  '#6666FF',
  '#66CCCC',
  '#FFCC00',
  '#0099CC',
  '#FF9999',
  '#99CC00',
  '#CC3333',
  '#003300',
  '#999933',
  '#99CCFF',
  '#FF9966',
  '#CC6600',
  '#999966',
  '#663333',
];
  
  const data = [
    {
      id: 1,
      name: '数据供给价值分类',
      value: 60,
      percent: '40%',
      children: [
        {
          name: '调用成功率',
          value: 10,
          percent: '12%',
          desc:
            '调用成功率=100%，得分为基础得分权重100%；调用成功率比100%每下降1%，得分比基础得分权重100%下降10%',
        },
        {
          name: '订阅量',
          value: 15,
          percent: '12%',
          desc:
            '调用成功率=100%，得分为基础得分权重100%；调用成功率比100%每下降1%，得分比基础得分权重100%下降10%',
        },
        {
          name: '总调用量',
          value: 20,
          percent: '12%',
          desc:
            '调用成功率=100%，得分为基础得分权重100%；调用成功率比100%每下降1%，得分比基础得分权重100%下降10%',
        },
        {
          name: '今日调用量',
          value: 25,
          percent: '12%',
          desc:
            '调用成功率=100%，得分为基础得分权重100%；调用成功率比100%每下降1%，得分比基础得分权重100%下降10%',
        },
        {
          name: '产品访问量',
          value: 30,
          percent: '12%',
          desc:
            '调用成功率=100%，得分为基础得分权重100%；调用成功率比100%每下降1%，得分比基础得分权重100%下降10%',
        },
        {
          name: '产品更新频率',
          value: 25,
          percent: '12%',
          desc:
            '调用成功率=100%，得分为基础得分权重100%；调用成功率比100%每下降1%，得分比基础得分权重100%下降10%',
        },
        {
          name: '产品信息完整性',
          value: 20,
          percent: '12%',
          desc:
            '调用成功率=100%，得分为基础得分权重100%；调用成功率比100%每下降1%，得分比基础得分权重100%下降10%',
        },
        {
          name: '产品发布渠道数量',
          value: 10,
          percent: '12%',
          desc:
            '调用成功率=100%，得分为基础得分权重100%；调用成功率比100%每下降1%，得分比基础得分权重100%下降10%',
        },
      ],
    },
    {
      id: 2,
      name: '衍生价值分类',
      value: 20,
      percent: '40%',
      children: [
        {
          name: '产品有效期',
          value: 20,
          percent: '12%',
          desc:
            '调用成功率=100%，得分为基础得分权重100%；调用成功率比100%每下降1%，得分比基础得分权重100%下降10%',
        },
        {
          name: '用户评价',
          value: 10,
          percent: '12%',
          desc:
            '调用成功率=100%，得分为基础得分权重100%；调用成功率比100%每下降1%，得分比基础得分权重100%下降10%',
        },
        {
          name: '创新型产品',
          value: 20,
          percent: '12%',
          desc:
            '调用成功率=100%，得分为基础得分权重100%；调用成功率比100%每下降1%，得分比基础得分权重100%下降10%',
        },
        {
          name: '产品用于编排',
          value: 50,
          percent: '12%',
          desc:
            '调用成功率=100%，得分为基础得分权重100%；调用成功率比100%每下降1%，得分比基础得分权重100%下降10%',
        },
      ],
    },
    {
      id: 3,
      name: '收入变现价值分类',
      value: 10,
      percent: '10%',
      children: [
        {
          name: '年收入',
          value: 20,
          percent: '12%',
          desc:
            '调用成功率=100%，得分为基础得分权重100%；调用成功率比100%每下降1%，得分比基础得分权重100%下降10%',
        },
      ],
    },
    {
      id: 4,
      name: '降低支出价值分类',
      value: 10,
      percent: '10%',
      children: [
        {
          name: '年降低支出',
          value: 20,
          percent: '12%',
          desc:
            '调用成功率=100%，得分为基础得分权重100%；调用成功率比100%每下降1%，得分比基础得分权重100%下降10%',
        },
      ],
    },
  ];
  
  let childrenArray = []; // data 的所有children数组
  let names = []; // data 的所有children的name数组
 
  data.forEach((item) => {
    names = names.concat(item.children.map((i) => i.name));
    childrenArray = childrenArray.concat(item.children);
  });

  const childrenValueArray = childrenArray.map((item) => item.value); // 所有children的value
  const maxValue = Math.max.apply(null, childrenValueArray); // 所有children的value 的最大值
  const indicator = names.map((item) => ({ name: item, max: maxValue }));

  let len = 0;
  
  const buildSeries = () => {
    const helper = data.map((item) => {
      const arr = new Array(names.length);
      const childrenLen = item.children.length;
      arr.splice(len, childrenLen, ...item.children);
      len += childrenLen;
      return arr;
    });

    return [childrenArray, ...helper].map((item, index) => {
      const itemValues = item.map((i) => {
        if (!i) return i;
        return i.value;
      });

      return {
        type: 'radar',
        symbol: 'circle',
        symbolSize: 5,
        silent: true,
        itemStyle: {
          borderWidth: index === 0 ? 0 : '',
          color: index === 0 ? '#000' : symbolColors[index - 1],
          show: !(index === 0),
        },
        lineStyle: {
          color: index === 0 ? 'black' : 'transparent',
          opacity: 0.3,
        },
        z: index + 1,
        data: [itemValues],
      };
    });
  };

const whiteSymbol = {
      type: 'radar', // 这个图层是为了盖住圆心，如果去掉，圆心的颜色为最后一个图层的颜色（不信就自己试试）
      silent: true,
      z: 999, // 图层是一层一层叠加，所以这个也是一级一级递增
      data: [Array.from({ length: childrenValueArray.length }).map(() => '')],
      itemStyle: {
        normal: {
          color: '#fff',
        },
      },
      lineStyle: {
        width: 0,
        labelLine: {
          show: false, // 隐藏标示线
        },
      },
};

option = {
    
      color: ['rgba(245, 166, 35, 1)'],
      title: {
        show: true,
        text: '分类雷达图',
        textStyle: {
          fontSize: 14,
          color: '#666666',
        },
      },
      legend: {
        show: false,
      },
      radar: {
        center: ['50%', '50%'],
        radius: '60%',
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        splitArea: {
          areaStyle: {
            color: ['transparent'],
          },
        },
        name: {
          textStyle: {
            color: '#666666',
          },
        },
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: true,
        },
        splitLine: {
          show: true,
        },
        indicator,
      },
      series: [...buildSeries(), whiteSymbol],
    
};