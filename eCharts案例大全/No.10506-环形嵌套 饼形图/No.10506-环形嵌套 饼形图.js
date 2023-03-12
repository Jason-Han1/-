var colorList = ['#74FFFB', '#FFA881', '#469AF0', '#8D82F3', '#83A6FE', '#1EBABC', '#82E3A2', '#F5BE5C']
    var colorList2 = ['#17b6d3', '#0090ba', '#0084e9', '#0841bc', '#5e62ff', '#a48bff', '#5ebbef']
    var option = {
        backgroundColor:'#012135',
      color: colorList,
      title: {
        text: '',
        subtext: '',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 18
        }
      },
      legend: {
        show: true,
        top: '80%',
        left: '0',
        textStyle: {
          color: '#fff'
        }
      },
      graphic: { // 图形中间文字
        type: 'text',
        left: 'center',
        top: '38%',
        style: {
          text: '总计\n999999\n人',
          textAlign: 'center',
          fill: '#FFE033',
          fontSize: 16
        }
      },
      series: [
        {
          name: '三级指标',
          type: 'pie',
          center: ['50%', '40%'],
          radius: ['35%', '50%'],
          itemStyle: {
            normal: {
              // 设置扇形的阴影
              shadowBlur: 10,
              shadowColor: '#666'
            }
          },
          label: {
            normal: {
              position: 'outer'
            }
          },
          data:
            [
              {
                value: 1,
                name: '应急机构'
              }, {
                value: 1,
                name: '应急'
              }, {
                value: 1,
                name: '自然'
              }, {
                value: 1,
                name: '事故'
              }, {
                value: 1,
                name: '公共'
              }, {
                value: 1,
                name: '社会'
              }, {
                value: 1,
                name: '其他危'
              }, {
                value: 1,
                name: '重要'
              }, {
                value: 1,
                name: '关键基'
              }]
        },
        {
          name: '二级指标',
          type: 'pie',
          radius: ['21%', '36%'],
          center: ['50%', '40%'],
          color: colorList2,
          label: {
            normal: {
              position: 'inner'
            }
          },
          itemStyle: {
            normal: {
              // 设置扇形的阴影
              shadowBlur: 10,
              shadowColor: '#666'

            }
          },
          data: [{
            value: 1,
            name: '应急'
          }, {
            value: 1,
            name: '应急情况'
          }, {
            value: 5,
            name: '危险源'
          }, {
            value: 3,
            name: '防护目'
          }]
        }
      ]
    }