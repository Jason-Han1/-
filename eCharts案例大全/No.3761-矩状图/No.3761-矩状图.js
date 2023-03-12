let struct_colors = [
  '#ed6f6d', '#f3765d', '#f77a57', '#f98866', '#f99579',
  '#ff9f3b', '#f0a732', '#e6a840', '#e9b253', '#ebbb66',
  '#78b7e8', '#59b1f3', '#66bbf5', '#6ec3f2', '#75cae2',
  '#70cccc', '#5dc4c4', '#4dbebd', '#4cc1a7', '#4fca96',
  '#4cc686'
];
const RICH = {
  name: {
    color: '#fff',
    fontSize: 24
  },
  basic: {
    color: '#fff',
    fontSize: 8,
    lineHeight: 16
  }
};

function showMenu(param) {
  // 可在此处添加右击操作内容
  console.log('showMenu==============', param);
  var event = param.event;
  var pageX = event.offsetX;
  var pageY = event.offsetY;
  console.log('showMenu========', pageX, pageY);
}

myChart.setOption(option = {
  tooltip: {
    formatter: function(info) {
      console.log('tool------', info);
      var val = info.data.value;
      var name = info.name;
      return [
        '<h4>' + name + '</>',
        '<div>Value:' + val + '</>',
      ].join('\n');
    }
  },
  series: [{
    name: '衍生品-销售额',
    type: 'treemap',
    visibleMin: 300,
    leafDepth: 4,
    nodeClick: false,
    upperLabel: {
      normal: {
        show: true,
        height: 60
      }
    },
    itemStyle: {
      normal: {
        borderColor: '#fff'
      }
    },
    label: {
      normal: {
        show: true,
        position: 'insideTopLeft',
        formatter: function(a) {
          console.log('formatter==label=======', a);
          return '{Name|' + a.name + '}' + "\n\n" + "{basic|Value: " + a.data.value + '}';
        },
        textStyle: {
          // color: '',  label的字体颜色
          fontSize: '14',
          fontWeight: 'bold'
        },
        rich: RICH,

      }
    },
    levels: [{
      itemStyle: {
        normal: {
          borderColor: '#777',
          borderWidth: 0,
          gapWidth: 2
        }
      },
      upperLabel: {
        normal: {
          show: false
        }
      }
    }, {
      itemStyle: {
        normal: {
          borderColor: '#555',
          borderWidth: 5,
          gapWidth: 1
        },
        emphasis: {
          borderColor: '#ddd'
        }
      }
    }, {
      colorSaturation: [0.35, 0.5],
      itemStyle: {
        normal: {
          gapWidth: 2,
          borderWidth: 5,
          borderColorSaturation: 0.6
        }
      }
    }],
    breadcrumb: {
      show: false,
      // "height": 22,
      left: "10%",
      top: "93%",
      emptyItemWidth: 25,
      itemStyle: {
        normal: {
          color: "#fff",
          borderColor: "rgba(255,255,255,0.7)",
          borderWidth: 1,
          shadowColor: "rgba(150,150,150,1)",
          shadowBlur: 3,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          textStyle: {
            color: "#000",
            fontWeight: 'bold'
          }
        },
        emphasis: {
          textStyle: {}
        }
      }
    },
    data: [{
      name: '出行小物',
      value: 120,
      children: [{
        name: 'cxxwA',
        value: 4
      }, {
        name: 'cxxwB',
        value: 16
      }]
    }, {
      name: '服饰周边',
      value: 120,
      //   children: []
    }, {
      name: '模型',
      value: 20,
    }, {
      name: '生活风格',
      value: 40,
    }, {
      name: '食品',
      value: 50,
    }, {
      name: '文具',
      value: 80,
    }, {
      name: '烟草',
      value: 220,
    }, {
      name: '租赁柜台',
      value: 420,
    }]
  }]
});

document.oncontextmenu = function() {
  return false;
};
myChart.on('contextmenu', showMenu);