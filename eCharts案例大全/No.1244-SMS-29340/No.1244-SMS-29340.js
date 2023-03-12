option = {
  chartex: {
    displayMode: 'normal_line',
    chartDataRows: 'custom',
    chartDataRowsNum: '15'
  },
  chart: { width: 426, height: 345, theme: 'default' },
  grid: {
    left: '0',
    top: '60',
    right: '10',
    bottom: '20',
    containLabel: true,
    containLabelX: true
  },
  title: {
    text: '自营业务规模',
    textStyle: {
      fontFamily: 'Microsoft YaHei',
      fontSize: '16',
      fontWeight: 'normal',
      color: '#333333'
    },
    x: 'left'
  },
  xAxis: {
    name: 'OrderDate',
    axisLabel: { show: true, margin: 8, rotate: 45 },
    type: 'category',
    filedName: 'OrderDate',
    fieldFormat: {
      type: 'DATE',
      prefix: '',
      suffix: '',
      source: 'SpreadSheet',
      decimal: 0,
      forceDecimal: true,
      scale: 1,
      dateFormat: 'yyyy-MM-dd',
      timeFormat: '',
      viewType: 'NONE'
    },
    data: [
      '2014-07-05',
      '2014-07-05',
      '2014-07-08',
      '2014-07-08',
      '2014-07-09',
      '2014-07-10',
      '2014-07-11',
      '2014-07-12',
      '2014-07-15',
      '2014-07-16',
      '2014-07-17',
      '2014-07-18',
      '2014-07-19',
      '2014-07-19',
      '2014-07-22'
    ],
    boundaryGap: false
  },
  yAxis: {
    name: 'Freight',
    axisLabel: { show: true, margin: 8, rotate: 0 },
    splitLine: {
      show: true,
      lineStyle: { width: 1, type: 'solid', color: '#CCCCCC' }
    },
    type: 'value',
    fieldFormat: {
      type: 'DOUBLE',
      prefix: '',
      suffix: '',
      source: 'SpreadSheet',
      decimal: 4,
      forceDecimal: true,
      scale: 1,
      dateFormat: '',
      timeFormat: '',
      viewType: 'TNUMBER',
      max: '148.330000000000012505552149377763271331787109375'
    },
    minInterval: 0.0001
  },
  legend: {
    left: 'center',
    top: 'bottom',
    orient: 'horizontal',
    data: ['Freight']
  },
  sendDataSetting: { selectParams: false, selectCell: false },
  chartTemplate: { id: 'echarts_line', type: 'echarts_line' },
  series: [
    {
      name: 'Freight',
      fieldFormat: {
        type: 'DOUBLE',
        prefix: '',
        suffix: '',
        source: 'SpreadSheet',
        decimal: 4,
        forceDecimal: true,
        scale: 1,
        dateFormat: '',
        timeFormat: '',
        viewType: 'TNUMBER'
      },
      data: [
        {
          rowIndex: 0,
          value: [0, 32.38],
          displayValue: '32.3800',
          rawRowIndex: 0
        },
        {
          rowIndex: 1,
          value: [1, 11.61],
          displayValue: '11.6100',
          rawRowIndex: 1
        },
        {
          rowIndex: 2,
          value: [2, 65.83],
          displayValue: '65.8300',
          rawRowIndex: 2
        },
        {
          rowIndex: 3,
          value: [3, 41.34],
          displayValue: '41.3400',
          rawRowIndex: 3
        },
        {
          rowIndex: 4,
          value: [4, 51.3],
          displayValue: '51.3000',
          rawRowIndex: 4
        },
        {
          rowIndex: 5,
          value: [5, 58.17],
          displayValue: '58.1700',
          rawRowIndex: 5
        },
        {
          rowIndex: 6,
          value: [6, 22.98],
          displayValue: '22.9800',
          rawRowIndex: 6
        },
        {
          rowIndex: 7,
          value: [7, 148.33],
          displayValue: '148.3300',
          rawRowIndex: 7
        },
        {
          rowIndex: 8,
          value: [8, 13.97],
          displayValue: '13.9700',
          rawRowIndex: 8
        },
        {
          rowIndex: 9,
          value: [9, 81.91],
          displayValue: '81.9100',
          rawRowIndex: 9
        },
        {
          rowIndex: 10,
          value: [10, 140.51],
          displayValue: '140.5100',
          rawRowIndex: 10
        },
        {
          rowIndex: 11,
          value: [11, 3.25],
          displayValue: '3.2500',
          rawRowIndex: 11
        },
        {
          rowIndex: 12,
          value: [12, 55.09],
          displayValue: '55.0900',
          rawRowIndex: 12
        },
        {
          rowIndex: 13,
          value: [13, 3.05],
          displayValue: '3.0500',
          rawRowIndex: 13
        },
        {
          rowIndex: 14,
          value: [14, 48.29],
          displayValue: '48.2900',
          rawRowIndex: 14
        }
      ],
      type: 'line',
      connectNulls: true,
      itemStyle: {
        normal: {
          label: { color: 'inherit', textBorderColor: '', textBorderWidth: 0 }
        }
      }
    }
  ],
  tooltip: { trigger: 'axis' },
};
