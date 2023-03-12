var data = [
  {
    name: 'Apples',
    value: 70
  },
  {
    name: 'Strawberries',
    value: 68
  },
  {
    name: '{a|Neque porro quisquam est qui dolorem}',
    value: 48
  },
  {
    name: 'Oranges',
    value: 40
  },
  {
    name: 'Pears',
    value: 32
  },
  {
    name: 'Pineapples',
    value: 27
  },
  {
    name: 'Grapes',
    value: 18
  }
];
option = {
  series: [
    {
      type: 'pie',
      radius: '80%',
      center: ['50%', '50%'],
      data: data,
      label: {
        position: 'outer',
        alignTo: 'edge',
        margin: 20,
        fontSize: 30,
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        rich: {
          a: {
            fontSize: 45
          }
        },
        overflow: 'break'
      },
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  ]
};