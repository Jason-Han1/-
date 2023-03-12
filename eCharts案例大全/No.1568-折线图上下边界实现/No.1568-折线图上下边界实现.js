
const dateList = [
    '20190723', '20190724', '20190725', '20190726', '20190729', '20190730',
    '20190731', '20190801', '20190802', '20190805', '20190806', '20190807',
    '20190808', '20190809', '20190812', '20190813', '20190814', '20190815',
    '20190816', '20190819'
]
const lineData0 = [
    '3.6000',
    '3.6300',
    '3.6300',
    '3.6500',
    '3.6200',
    '3.6300',
    '3.6100',
    '3.6100',
    '3.6000',
    '3.6100',
    '3.5700',
    '3.5600',
    '3.5300',
    '3.5000',
    '3.5100',
    '3.4500',
    '3.4700',
    '3.4400',
    '3.4700',
    '3.5500'
]
const lineData1 = [
    '3.6000',
    '3.6300',
    '3.6300',
    '3.6500',
    '3.6200',
    '3.6300',
    '3.6100',
    '3.6100',
    '3.6000',
    '3.6100',
    '3.5700',
    '3.5600',
    '3.5300',
    '3.5000',
    '3.5100',
    '3.4500',
    '3.4700',
    '3.4400',
    '3.4700',
    '3.5500'
]

/**
 * 需求：将折线分三段：
 * 大于3.62的线段为红色，并且波峰部分渐变。
 * 小于3.49的线段为绿色，并且波谷部分为绿色。
 * 中间部分的线段为黑色。
 * 数字、标记名称分别局图形左右。
 * 因为一个areaStyle没法同时画出波峰与波谷。所以用了两条重合的线（会画在波谷的外面）
 * ，在第二个折线中画波谷。
 */
option = {
  grid: { x: '0', y: '0', width: '100%', height: '100%' },
  xAxis: [
    {
      type: 'category',
      show: false,
      data: dateList
    }
  ],
  yAxis: [
    { type: 'value', z: 3, max: 3.69, min: 3.4, scale: true, show: false }
  ],
  /*
  * 将折线分3端。绿色、灰色、红色
  */
  visualMap: {
    show: false,
    dimension: 1,
    pieces: [
      { gte: 0, lte: 3.49, color: 'rgba(255,72,74,0.5)' },
      { gte: 3.49, lte: 3.62, color: '#666' },
      { gte: 3.62, lte: 3.65, color: 'rgba(255,72,74,0.5)' }
    ]
  },
  series: [
    {
      type: 'line',
      lineStyle: { width: 1.656 },
      showSymbol: false,
      animation: false,
      hoverAnimation: false,
      data: lineData0,
      areaStyle: {
        origin: 'start',
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#FFD1D1' },
            { offset: 0.120, color: '#fff' },
            { offset: 0.120, color: 'transparent' }
          ]
        }
      },
      /*
      * 标记的两条虚线
      */
      markLine: {
        symbol: 'none',
        silent: true,
        lineStyle: { normal: { type: 'dashed' } },
        label: { position: 'start' },
        data: [
          {
            yAxis: 3.62,
            lineStyle: { width: 1.656, color: '#ff6367' },
            label: { show: false }
          },
          {
            yAxis: 3.49,
            lineStyle: { width: 1.656, color: '#ff6367' },
            label: { show: false }
          }
        ]
      },
      /*
      * 标记的文字
      */
      markPoint: {
        silent: true,
        label: { fontSize: 12 },
        data: [
          {
            yAxis: 3.62,
            x: '0%',
            symbolSize: 0.1,
            label: {
              textStyle: { color: '#fff' },
              padding: [3.312, 8.28],
              fontSize: 12,
              borderRadius: 13.248,
              backgroundColor: 'rgba(255, 72, 74, 0.5)',
              position: 'right',
              formatter: '3.62'
            }
          },
          {
            yAxis: 3.62,
            x: '100%',
            symbolSize: 0.1,
            label: {
              textStyle: { color: '#fff' },
              padding: [3.312, 8.28],
              fontSize: 12,
              borderRadius: 13.248,
              backgroundColor: 'rgba(255, 72, 74, 0.5)',
              position: 'left',
              formatter: '报警上线'
            }
          },
          {
            yAxis: 3.49,
            x: '0%',
            symbolSize: 0.1,
            label: {
              textStyle: { color: '#fff' },
              padding: [3.312, 8.28],
              fontSize: 12,
              borderRadius: 13.248,
              backgroundColor: 'rgba(255, 72, 74, 0.5)',
              position: 'right',
              formatter: '3.49'
            }
          },
          {
            yAxis: 3.49,
            x: '100%',
            symbolSize: 0.1,
            label: {
              textStyle: { color: '#fff' },
              padding: [3.312, 8.28],
              fontSize: 12,
              borderRadius: 13.2481,
              backgroundColor: 'rgba(255, 72, 74, 0.5)',
              position: 'left',
              formatter: '报警下线'
            }
          }
        ]
      }
    },
    {
      type: 'line',
      show: false,
      lineStyle: { width: 1 },
      showSymbol: false,
      animation: false,
      hoverAnimation: false,
      data: lineData1,
      areaStyle: {
        origin: 'end',
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0.8, color: 'transparent' },
            { offset: 0.8, color: '#fff' },
            { offset: 1, color: '#000' }
          ]
        }
      }
    }
  ]
}
