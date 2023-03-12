const data = [{
      value: 10,
      name: '年度任务数',
    }, {
      value: 8,
      name: '季度任务数',
    }, {
      value: 2,
      name: '月度任务数',
    }];
option = {
    title: {
        text: '层级环比饼图'
    },
    color: ['#21BBBB', '#518FFE','#65BE0C'],
    backgroundColor: '#fff',
      legend: {
        show: true,
        icon: 'circle',
        top: 'center',
        left: '10%',
        data: ['年度任务数', '季度任务数', '月度任务数'],
        width: 50,
        padding: [0, 5],
        itemGap: 25,
        formatter(name) {
          console.log('data', name, data.find((item) => item.name === name).value);
          return `{title|${name}}\n{value|${data.find((item) => item.name === name).value}}  {title|项}`;
        },
        textStyle: {
          rich: {
            title: {
              fontSize: 16,
              lineHeight: 15,
              color: 'rgb(0, 178, 246)',
            },
            value: {
              fontSize: 18,
              lineHeight: 20,
              color: '#76A3FC',
            },
          },
        },
      },
      series: [{
        name: '月度任务数',
        type: 'pie',
        radius: ['27%', '42%'],
        center: ['60%', '50%'],
        animation: false,
        data: [{
          value: data[2].value,
          itemStyle: {
            color: '#21BBBB',
          },
        }, {
          value: data[0].value - data[2].value,
          itemStyle: {
            color: '#fff',
          },
        }],
        label: {
          normal: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
      },
      {
        name: '季度任务数',
        type: 'pie',
        radius: ['42%', '57%'],
        center: ['60%', '50%'],
        animation: false,
        data: [{
          value: data[1].value,
          itemStyle: {
            color: '#518FFE',
          },
        }, {
          value: data[0].value - data[1].value,
          itemStyle: {
            color: '#fff',
          },
        }],
        label: {
          normal: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
      }, {
        name: '年度任务数',
        type: 'pie',
        animation: false,
        radius: ['57%', '72%'],
        center: ['60%', '50%'],
        label: {
          normal: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [{
          value: data[0].value,
          itemStyle: {
            color: '#65BE0C',
          },
        }],
      },
      ],
};