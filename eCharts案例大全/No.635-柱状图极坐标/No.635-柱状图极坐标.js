option = {
  title: [
    {
      text: 'Radial Polar Bar Label Position (middle)'
    }
  ],
  polar: {
    radius: '80%'
  },
  radiusAxis: {
    max: 4
  },
  angleAxis: {
    type: 'category',
    data: ['a', 'b', 'c', 'd','e','f'],
    startAngle: 90
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [2, 1.2, 2.4, 3.6, 2.1, 3.3],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle',
      formatter: '{b}: {c}'
    }
  },
  backgroundColor: '#fff',
  animation: false
};