var data = [
  {
    name: 'Flora',
    children: [
      {
        name: 'Black Tea',
        value: 1,
      },
      {
        name: 'Floral',
        children: [
          {
            name: 'Chamomile',
            value: 1,
          },
          {
            name: 'Rose',
            value: 1,
          },
          {
            name: 'Jasmine',
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: 'Fruity',
    children: [
      {
        name: 'Berry',
        children: [
          {
            name: 'Blackberry',
            value: 1,
          },
          {
            name: 'Raspberry',
            value: 1,
          },
          {
            name: 'Blueberry',
            value: 1,
          },
          {
            name: 'Strawberry',
            value: 1,
          },
        ],
      },
      {
        name: 'Dried Fruit',
        children: [
          {
            name: 'Raisin',
            value: 1,
          },
          {
            name: 'Prune',
            value: 1,
          },
        ],
      },
      {
        name: 'Other Fruit',
        children: [
          {
            name: 'Coconut',
            value: 1,
          },
          {
            name: 'Cherry',
            value: 1,
          },
          {
            name: 'Pomegranate',
            value: 1,
          },
          {
            name: 'Pineapple',
            value: 1,
          },
          {
            name: 'Grape',
            value: 1,
          },
          {
            name: 'Apple',
            value: 1,
          },
          {
            name: 'Peach',
            value: 1,
          },
          {
            name: 'Pear',
            value: 1,
          },
        ],
      },
      {
        name: 'Citrus Fruit',
        children: [
          {
            name: 'Grapefruit',
            value: 1,
          },
          {
            name: 'Orange',
            value: 1,
          },
          {
            name: 'Lemon',
            value: 1,
          },
          {
            name: 'Lime',
            value: 1,
          },
        ],
      },
    ],
  },
];

option = {
  series: {
    type: 'sunburst',
    radius: [0, '95%'],
    sort: null,
    emphasis: {
      focus: 'ancestor',
    },
    data: data,
    levels: [
      {},
      {
        r0: '15%',
        r: '35%',
        label: {
          rotate: 'tangential',
        },
      },
      {
        r0: '35%',
        r: '70%',
        label: {
          align: 'right',
        },
      },
      {
        r0: '70%',
        r: '72%',
        label: {
          position: 'outside',
          padding: 3,
          silent: false,
        },
      },
    ],
  },
};
