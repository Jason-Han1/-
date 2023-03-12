option = {
  tooltip: {},
  animationDuration: 1500,
  animationEasingUpdate: "quinticInOut",
  series: [{
    name: "Les Miserables",
    type: "graph",
    layout: "force",
    focusNodeAdjacency:true,
    roam: true,
    edgeSymbol: ['circle', 'arrow'],
    edgeSymbolSize: [1, 10],
    edgeLabel: {
        normal: {
            textStyle: {
                fontSize: 20
            }
        }
    },
    force:{
      repulsion: 2500,
      edgeLength: [10,50]
    },
    label: {
        normal: {
            show: true,
            formatter: function(value){
                console.log(value.name)
                // return '{a|这段文本采用样式a}'
                var strs = value.name.split(''); //字符串数组
                var str = ''
                for(var i = 0, s; s = strs[i++];) { //遍历字符串数组
                    str += s;
                    if(!(i % 5)) str += '\n'; //按需要求余
                }
              return '{a|'+str+'}';
            },
            rich: {
                a: {
                    color: '#fff',
                    lineHeight: 14,
                    fontSize: 12,
                },
            },
            textStyle: {
                backgroundColor: 'black',
            }
        }
    },
    edgeLabel: {
        normal: {
            show: true,
            formatter: function (x) {
                return x.data.name;
            }
        }
    },
    data: [{
      id: "0",
      name: "恒生电子股份有限公司有限有限",
      symbolSize: 70,
      value: "可以",
      category: 0
    }, {
      id: "1",
      name: "Napoleon",
      symbolSize: 70,
    //   value: "可以",
      category: 0
    }, {
      id: "2",
      name: "MlleBaptistine",
      symbolSize: 70,
      value: 70,
      category: 1
    }, ],
    links: [{
      id: "0",
      source: "1",
      target: "0"
    },],
    categories: [{
      name: "类目0",
      itemStyle: {
        color: "skyblue"
      }
    }],
    legendHoverLink: true,
    draggable: true,
    lineStyle: {
      color: "black",
      type: "solid"
    }
  }]
}
myChart.on('click',function(params){
    console.log(params)
})
// //节点拖拽固定
// myChart.on('mouseup', function (params) {
//   var option = myChart.getOption();
//   option.series[0].data[params.dataIndex].x = params.event.offsetX;
//   option.series[0].data[params.dataIndex].y = params.event.offsetY;
//   option.series[0].data[params.dataIndex].fixed = true;
//   myChart.setOption(option);
// });