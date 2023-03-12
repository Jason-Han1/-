option = {
  tooltip: {
    position: 'top',
    formatter:'a%'
  },
  visualMap: {
    min: 0,
    max: 100,
    calculable: true,
    orient: 'horizontal',
    left: '870',
    top: '198',
  },
  calendar: [
    {
      cellSize: [100, 50],
      yearLabel: {
        show: false,
      },
      monthLabel: {
        nameMap: [],
      },
      orient: 'vertical',
      range: ['2016-01-01', '2016-01-07'],
      dayLabel: {
        firstDay: 5,
        nameMap: ['1~2', '2~3', '3~4', '4~5', '5~6', '6~7', '7~8'],
      },
      top: 180,
    },
  ],
  series: [
    {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      calendarIndex: 0,
      // name: 'count',
      data: [
        [1451607004800, 72],
        [1451692800000, 99],
        [1451779200000, 6],
        [1451865600000, 92],
        [1451952000000, 12],
        [1452038400000, 30],
        [1452124800000, 75],
      ],
    },
  ],
};
