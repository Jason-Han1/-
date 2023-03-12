option = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
  },
  backgroundColor: '#000',
  label:{
    formatter:(params) => {
      console.log(params);
      return `{valStyle|${params.data.name}}`
    },
    rich:{
      valStyle:{
        color: 'red',
        lineHeight: 10
      }
    }
    
  },
  series: [
    {
      type: 'sankey',
      nodeWidth: 15,
      nodeGap: 20,
      left:"5%",
      right:"5%",
      draggable: false,
      emphasis: {
        focus: 'adjacency',
      },
      data: [
        {
          name: '煤',
          label: {
            position: 'left',
          },
        },
        {
          name: '油',
          label: {
            position: 'left',
          },
        },
        {
          name: '气',
          label: {
            position: 'left',
          },
        },
        {
          name: '电',
          label: {
            position: 'left',
          },
        },
        {
          name: '其他',
          label: {
            position: 'left',
          },
        },
        {
          name: '煤炭',
          label: {
            position: 'right',
          },
        },
        {
          name: '生活',
          label: {
            position: 'right',
          },
        },
        {
          name: '工厂',
          label: {
            position: 'right',
          },
        },
        {
          name: '商业',
          label: {
            position: 'right',
          },
        },
        {
          name: '公路',
          label: {
            position: 'right',
          },
        },
        {
          name: '农业',
          label: {
            position: 'right',
          },
        },
      ],
      links: [
        { source: '煤', target: '生活', value: 2 },
        { source: '油', target: '生活', value: 1 },
        { source: '煤', target: '煤炭', value: 1 },
        { source: '油', target: '煤炭', value: 1 },
        { source: '油', target: '生活', value: 1 },
        { source: '气', target: '生活', value: 1 },
        { source: '油', target: '工厂', value: 3 },
        { source: '电', target: '工厂', value: 1 },
        { source: '电', target: '商业', value: 1 },
        { source: '电', target: '农业', value: 1 },
        { source: '其他', target: '商业', value: 1 },
        { source: '其他', target: '公路', value: 1 },
        { source: '其他', target: '农业', value: 1 },
      ],
      lineStyle: {
        color: 'gradient',
        curveness: 0.5,
      },
    },
  ],
};
