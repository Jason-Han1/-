option = {
  avoidLabelOverlap: false,
  tooltip: {
    show: false,
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    show: false
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      // selectedMode: 'single',
      radius: [0, '50%'],
      label: {
        show: true,
        formatter: '{b}',
        // show:false,
        position: 'inner',
        fontSize: 14,
        overflow: 'none'
      },
      labelLine: {
        show: false
      },
      itemStyle: {
        // borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      data: [
        {
          value: 329,
          name: '部门A补偿D的亏损\n71',
          itemStyle: {
            color: '#4C5058'
          }
        },
        { value: 576, name: '部门B补偿D的亏损\n124' },
        { value: 494, name: '部门C补偿D的亏损\n106' },
        { value: 494, name: '部门E补偿D的亏损\n106' }
      ]
    },
    {
      name: 'Access From',
      type: 'pie',
      radius: ['51%', '80%'],
      labelLine: {
        length: 30
      },
      itemStyle: {
        // borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
        backgroundColor: '#F6F8FC',
        borderColor: '#8C8D8E',
        borderWidth: 1,
        borderRadius: 4,
        rich: {
          a: {
            color: '#6E7079',
            lineHeight: 22,
            align: 'center'
          },
          hr: {
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 0
          },
          b: {
            color: '#4C5058',
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 33
          },
          per: {
            color: '#fff',
            backgroundColor: '#4C5058',
            padding: [3, 4],
            borderRadius: 4
          }
        }
      },
      data: [
        {
          value: 329,
          name: '部门A对总利润贡献',
          itemStyle: {
            color: '#4C5058'
          }
        },
        {
          value: 576,
          name: '部门B对利润总贡献',
          itemStyle: {
            color: 'rgb(255,220,96)'
          }
        },
        {
          value: 494,
          name: '部门C对利润总贡献',
          itemStyle: {
            color: 'rgb(255,112,112)'
          }
        },
        {
          value: 494,
          name: '部门E对利润总贡献',
          itemStyle: {
            color: 'rgb(255,112,112)'
          }
        }
      ]
    }
  ]
};
