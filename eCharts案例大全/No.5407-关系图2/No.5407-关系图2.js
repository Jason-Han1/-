option = {
    color: ['#2472d5', '#6987b8', '#f9a5c7', '#f2a498', '#91c7ae', '#fcd684'],
    tooltip: {
      formatter: function(param) {
        if (param.dataType === 'edge') {
          return param.data.category + ': ' + param.data.target
        }
        return param.data.category + ': ' + param.data.name
      }
    },
    title: {
      text: ''
    },
    series: [
      {
        top: 50,
        label: {
          normal: {
            show: true,
            position: 'inside',
            textStyle: {
              fontSize: 15
            }
          }
        },
        draggable: false, // 禁止拖拽
        focusNodeAdjacency: false, // 禁止拖拽
        roam: false, // 禁止拖拽
        edgeLabel: {
          normal: {
            show: false,
            formatter: function(param) {
              return param.data.category
            },
            textStyle: {
              fontSize: 14
            }
          }
        },
        bottom: 50,
        data: [
          {
            name: '文本识别',
            symbol: 'circle',
            draggable: false, // 禁止拖拽
            category: '机构名称'
          },
          {
            name: '所属类型',
            draggable: false,
            category: '授课教师'
          },
          {
            name: '所属区域',
            draggable: false,
            category: '家长'
          },
          {
            name: '所属机构',
            draggable: false,
            category: '在线教育机构'
          },
          {
            name: '相关企业',
            draggable: false,
            category: '在线教育机构'
          }
        ],
        categories: [
          {
            name: '机构名称'
          },
          {
            name: '授课教师'
          },
          {
            name: '家长'
          },
          {
            name: '在线教育机构'
          }
        ],
        type: 'graph',
        force: {
          repulsion: 1000,
          edgeLength: [10, 10]
        },
        layout: 'force',
        symbolSize: [100, 30],
        links: [
          {
            target: '所属类型',
            source: '文本识别',
            category: '授课教师'
          },
          {
            target: '所属区域',
            source: '文本识别',
            category: '家长'
          },
          {
            target: '所属机构',
            source: '文本识别',
            category: '在线教育机构'
          },
          {
            target: '相关企业',
            source: '文本识别',
            category: '互联网企业'
          }
        ],
        symbol:
          'path://M19.300,3.300 L253.300,3.300 C262.136,3.300 269.300,10.463 269.300,19.300 L269.300,21.300 C269.300,30.137 262.136,37.300 253.300,37.300 L19.300,37.300 C10.463,37.300 3.300,30.137 3.300,21.300 L3.300,19.300 C3.300,10.463 10.463,3.300 19.300,3.300 Z',
        lineStyle: {
          normal: {
            opacity: 0.8,
            width: 2,
            curveness: 0.2
          }
        }
      }
    ],
    animationEasingUpdate: 'quinticInOut',
    animationDurationUpdate: 1500
  }