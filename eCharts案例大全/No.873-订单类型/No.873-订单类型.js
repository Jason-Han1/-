var data = [
  {
    name: '付款订单',
    value: 599,
  },
  {
    name: '退款订单',
    value: 500,
  },
];
const total = data.map(v=>{ return v.value})
option = {
  backgroundColor: '#fff',
  color: ['#71cea2', '#5389e3'],
  legend: {
    icon: 'circle',
    orient: 'horizontal',
    //x: 'left',
    data: ['付款订单', '退款订单'],
    right: 'center',
    bottom: 20,
    textStyle: {
      color: '#000',
    },
    itemGap: 20,
    formatter: function (name) {
      var total = 0;
      var target;
      for (var i = 0, l = data.length; i < l; i++) {
        total += data[i].value;
        if (data[i].name == name) {
          target = data[i].value;
        }
      }
      return name + ' ' + ((target / total) * 100).toFixed(2) + '%';
    },
  },
  title: [
    {
      text: '订单类型',
      top: '2%',
      left: '2%',
      textStyle: {
        color: '#000',
        fontSize: 18,
        fontWeight: '400',
      },
    },
    {
      text: '总单量',
      top: '45%',
      textAlign: 'center',
      left: '49%',
      textStyle: {
        color: '#000',
        fontSize: 18,
        fontWeight: '400',
      },
    },
    {
      text: '1099',
      top: '50%',
      textAlign: 'center',
      left: '49%',
      textStyle: {
        color: '#000',
        fontSize: 22,
        fontWeight: '400',
      },
    },
  ],
  series: [
    {
      type: 'pie',
      radius: ['0%', '40%'],
      startAngle: [90],
      hoverAnimation: false,
      z: 1,
      label: {
        normal: {
          position: 'center',
          fontSize: 14,
          color: '#ffffff',
          lineHeight: 20,
        },
      },
      data: [
        {
          value: 6,
          name: '',
          itemStyle: {
            normal: {
              color: '#fff',
              borderColor: '#c5c5c5',
              shadowColor: '#D6DAE0',
              shadowBlur: 4,
            },
          },
        },
      ],
    },
    {
      name: '标签使用频率',
      type: 'pie',
      z: 3,
      radius: ['44%', '63%'],
      center: ['50%', '50%'],
      // roseType: 'radius',
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
          borderColor: '#c5c5c5',
          padding: [5, 5, 5, 5],
          width: 50,
          height: 20,
          backgroundColor: '#fff',
          shadowColor: '#D6DAE0',
          shadowBlur: 4,
          formatter: function (params) {
            if (params.name !== '') {
              return '{b|' + params.value + '个}';
            } else {
              return '';
            }
          },
          rich: {
            b: {
              color: '#515151',
              align: 'center',
              lineHeight: 20,
            },
          },
          labelLine: {
            length: 30,
            length2: 100,
            show: true,
          },
        },
      },
      // hover 阴影
      itemStyle: {
        emphasis: {
          //color: '#f9a646',
          // "borderWidth": 5,
          shadowBlur: 20,
          //borderColor: '#f9a646',
          shadowColor: 'transparent',
        },
      },
      data: data,
    },
  ],
};

//myChart.dispatchAction({ type: 'highlight', dataIndex: 0 }); // dataIndex属性伟data传入的索引值
