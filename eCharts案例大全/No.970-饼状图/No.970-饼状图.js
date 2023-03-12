const colorList = ['#ffd813', '#08daaa', '#6571fc'];
let index = 0;
var data = [
                { value: 1048, name: '火车' },
                 { value: 848, name: '汽车' },
                { value: 605, name: '公交' },
                { value: 500, name: '自驾' },
            ]
            var total = 0;
            data.map(item =>{
                total += item.value
            })
  const colors = [
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 0,
        color: '#7BA9E5'
      },
      {
        offset: 1,
        color: '#4570C6'
      }
      ]
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 0,
        color: '#7EBEFF'
      },

      {
        offset: 1,
        color: '#0015FF'
      }
      ]
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 0,
        color: '#A7FC8C'
      },

      {
        offset: 1,
        color: '#4BC019'
      }
      ]
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 0,
        color: '#FCD18C'
      },
      {
        offset: 1,
        color: '#F7A453'
      }
      ]
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 0,
        color: '#99EBC9'
      },
      {
        offset: 1,
        color: '#60D298'
      }
      ]
    },
    {
      type: 'linear',
      x: 0,
      y: 1,
      x2: 0,
      y2: 0,
      colorStops: [{
        offset: 0,
        color: '#289DF5'
      },
      {
        offset: 1,
        color: '#17E9FD'
      }
      ]
    },
    {
      type: 'linear',
      x: 1,
      y: 0,
      x2: 0,
      y2: 0,
      colorStops: [{
        offset: 0,
        color: '#4FC3B2'
      },
      {
        offset: 1,
        color: '#5AD1BD'
      }
      ]
    }
  ];
option = {
    //图例组件
   legend: {
        top: '70%',
      width: '90%',
      height: 40,
      itemWidth: 12,
      itemHeight: 12,
      icon: 'path://M511.986407 0a511.971411 511.971411 0 1 0 511.971411 511.903904A511.903904 511.903904 0 0 0 511.986407 0z m0 898.987774a387.08387 387.08387 0 1 1 387.08387-387.08387 387.08387 387.08387 0 0 1-387.08387 387.08387z',
      orient: 'vertical',
      textStyle: {
        color: '#384259'
      },
      formatter: (parmas) => {
        for (let i = 0; i < data.length; i++) {
          if (parmas === data[i].name) {
            return parmas + ' '+ data[i].value;
          }
        }
      }
    
    },
    tooltip: {
        trigger: 'item',
        textStyle:{
            color:'#fff'
        },
     formatter: (parmas) => {
        console.log(parmas);
        return parmas.name + ' ' + (parmas.value / total * 100).toFixed(0) + '%' + ' ' + parmas.value;
      },
      backgroundColor: 'rgba(00,00,00,0.6)'
    },
    color:colors,
    series: [
        {
            type: 'pie',
            radius: ['50%', '25%'],
            center: ['50%', '40%'],

            roseType: 'area',
            itemStyle: {
                // color: (params) => {
                //     return colorList[params.dataIndex];
                // },
                borderRadius: 8,
            },
            label: {
                show: false,
            },
            data: data,
        },
    ],
};
