data = [
  {
    name: 'A',
    value: [100, 950],
    symbol: 'rect',
    symbolSize: [90, 90],
    itemStyle: {
      color: '#FFFFFF',
      borderColor: '#02AEFD',
      borderWidth: 3,
    },
  },
  {
    name: 'B',
    value: [300, 950],
    symbol: 'rect',
    symbolSize: [90, 90],
    itemStyle: {
      color: '#FFFFFF',
      borderColor: '#1982FF',
      borderWidth: 3,
    },
  },
  {
    name: 'C',
    value: [500, 950],
    symbol: 'rect',
    symbolSize: [90, 90],
    itemStyle: {
      color: '#FFFFFF',
      borderColor: '#1982FF',
      borderWidth: 3,
    },
  },
  {
    name: 'D',
    value: [700, 950],
    symbol: 'rect',
    symbolSize: [90, 90],
    itemStyle: {
      color: '#FFFFFF',
      borderColor: '#3169F8',
      borderWidth: 3,
    },
  },
  {
    name: 'E',
    value: [900, 950],
    symbol: 'rect',
    symbolSize: [90, 90],
    itemStyle: {
      color: '#FFFFFF',
      borderColor: '#2653F1',
      borderWidth: 3,
    },
  },
  {
    name: 'F',
    value: [148, 500],
    symbol: 'rect',
    symbolSize: [180, 90],
    itemStyle: {
      color: '#FFFFFF',
      borderColor: '#41D980',
      borderWidth: 3,
    },
  },
  {
    name: 'G',
    value: [500, 500],
    symbol: 'rect',
    symbolSize: [180, 90],
    itemStyle: {
      color: '#FFFFFF',
      borderColor: '#09B094',
      borderWidth: 3,
    },
  },
  {
    name: 'H',
    value: [148, 50],
    symbol: 'rect',
    symbolSize: [180, 90],
    itemStyle: {
      color: '#FFFFFF',
      borderColor: '#FFBD3C',
      borderWidth: 3,
    },
  },
  {
    name: 'I',
    value: [500, 200],
    symbol: 'rect',
    symbolSize: [180, 90],
    itemStyle: {
      color: '#FFFFFF',
      borderColor: '#A0D911',
      borderWidth: 3,
    },
  },
  {
    name: 'J',
    num:12,
    value: [500, -100],
    symbol: 'rect',
    symbolSize: [180, 90],
    itemStyle: {
      color: '#FFFFFF',
      borderColor: '#FADB14',
      borderWidth: 3,
    },
  },
];
option = {
  xAxis: {
    // min: 0,
    // max: 1000,
    show: false,
    type: 'value',
  },
  yAxis: {
    // min: 0,
    // max: 1000,
    show: false,
    type: 'value',
  },
  series: [
    {
      type: 'graph',
      coordinateSystem: 'cartesian2d',
      label: {
        show: true,
        position: 'inside', // inside
        // 文字
        color: '#333333',
        fontFamily: 'Microsoft YaHei',
        fontSize: 20,
        // offset: [0, 40], // 偏移量
        distance: 20, // 距离元素距离
        formatter: function (item) {
          return item.data.name;
        },
      },
      data: data,
    },
    {
      type: 'lines',
      polyline: true,
      coordinateSystem: 'cartesian2d',
      lineStyle: {
        type: 'solid',
        width: 4,
        color: '#E8EAEC',
        cap: 'round',
        join: 'round',
      },
      data: [
        //
        {
          coords: [
            [100, 860], // 1 竖线
            [100, 700], // 1 横线
            [145, 700], // 横
            [145, 590], // 竖线
          ],
        },
        //
        {
          coords: [
            [300, 860],
            [300, 700],
            [145, 700],
            [145, 590],
          ],
        },
        //
        {
          coords: [
            [500, 860],
            [500, 700],
            [145, 700],
            [145, 590],
          ],
        },
        //
        {
          coords: [
            [700, 860],
            [700, 200],
            [610, 200],
          ],
        },
        {
          coords: [
            [700, 860],
            [700, -100],
            [610, -100],
          ],
        },
        //
        {
          coords: [
            [900, 860],
            [900, -100],
            [620, -100],
          ],
        },
        //
        {
          coords: [
            [260, 500],
            [390, 500],
          ],
        },
        //
        {
          coords: [
            [260, 50],
            [325, 50],
            [325, 200],
            [390, 200],
          ],
        },
        {
          coords: [
            [260, 50],
            [325, 50],
            [325, -100],
            [390, -100],
          ],
        },
      ],
    },
  ],
};
