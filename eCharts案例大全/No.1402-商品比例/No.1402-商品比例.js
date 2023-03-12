const dataArr = [
  { name: '0-30天', value: 3800 },
  { name: '30-60天', value: 2700 },
  { name: '60-90天', value: 1200 },
  { name: '90-120天', value: 500 },
  { name: '120天以上', value: 900 },
];
option = {
  color: ['#EB5429', '#8378A4', '#366CFE', '#A9B040', '#64B4AD', '#E69837', '#959FB0'],
  series: [
    {
      type: 'pie',
      roseType: 'area',
      startAngle: 240,
      radius: ['10%', '59%'],
      label: {
        alignTo: 'edge',
        formatter: '{name|{b}  {d}%}\n',
        minMargin: 15,
        edgeDistance: '10%',
        lineHeight: 15,
        rich: {
          name: {
            fontSize: 14,
            color: '#666',
          },
        },
      },
      labelLine: {
        length: 15,
        length2: 0,
        maxSurfaceAngle: 80,
      },
      labelLayout: function (params) {
        const isLeft = params.labelRect.x < myChart.getWidth() / 2;
        const points = params.labelLinePoints;
        points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width;
        return {
          labelLinePoints: points,
        };
      },
      data: dataArr,
    },
  ],
};
