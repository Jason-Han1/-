option = {
  legend: {},
  series: [
    {
      type: 'pie',
      radius: 50,
      data: [
        {
          value: 25,
          name: '男',
        },
      ],
      itemStyle: {
        color: function ({ color }) {
          return {
            type: 'radial',
            global: false,
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              { offset: 0.9, color },
              { offset: 1, color: `${color}70` },
            ],
          };
        },
      },
    },
  ],
};
