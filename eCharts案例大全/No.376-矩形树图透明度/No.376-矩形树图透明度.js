option = {
  series: [
    {
      type: 'treemap',
      data: [
        {
          name: 'nodeA',
          value: 10,
          itemStyle: {
            color: 'rgba(255,0,0,0.2)'
          },
          children: [
            {
              name: 'nodeAa',
              value: 4,
              itemStyle: {
                color: 'rgba(255,255,0,0.2)'
              },
              children: [
                {
                  name: 'nodeAa',
                  value: 4,
                  itemStyle: {
                    color: 'rgba(0,255,0,0.2)'
                  }
                },
                {
                  name: 'nodeAb',
                  value: 6
                }
              ]
            },
            {
              name: 'nodeAb',
              value: 6
            }
          ]
        },
        {
          name: 'nodeB',
          value: 20,
          children: [
            {
              name: 'nodeBa',
              value: 20,
              opacity: 0,
              children: [
                {
                  name: 'nodeBa1',
                  value: 20
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
