option = {
  graphic: {
    elements:[
    {
      type: 'group',
      name: 'group_2020',
      $action: 'replace', // 配置合并模式：merge、replace、remove
      position: [0, 0], // 平移
      rotation: 0, // 正负旋转
      scale: [1, 1], // 横纵向缩放，
      origin: [0, 0], // 旋转和缩放的中心点
      left: '10%',
      top: 0,
      bounding: 'all', // 决定此图形元素在定位时，对自身的包围盒计算方式。
      z: 0, // z 方向的高度，决定层叠关系。
      zlevel: 0, // 决定此元素绘制在哪个 canvas 层
      info: {
        'name': '2020_option of rect',
        'value': 'Buuu~~~~'
      },
      silent: false, // 是否[不]响应鼠标以及触摸事件
      invisible: false, // 节点是否[不]可见
      ignore: false, // 节点是否完全被忽略（既不渲染，也不响应事件）
      cursor: 'pointer', // 鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor
      draggable: false, // 图形元素是否可以被拖拽。
      // ondrag: function(){
      //   var _x = this.position[0]
      //   var _y = this.position[1]
      //   var _width = this.width
      //   var _height = this.height
      // },
      // onclick: function(){
      //   console.log(this)
      // },
      progressive: false, // 是否渐进式渲染。当图形元素过多时才使用
      width: 100,
      height: 40,
      diffChildrenByName: true, // 重绘的时候，在已存在的图形元素和新的图形元素之间建立对应关系（依据 name 是否相同），从如果数据有更新，能够形成的过渡动画
      children: [
      {
        type: 'rect',
        name: 'group_2020_rect',
        shape: {
          x: 0,
          y: 0,
          width: 100,
          height: 40,
          r: [10, 10, 10, 10] // 切角
        },
        style: {
          fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#ccc'
            }, {
                offset: 1,
                color: '#57c5ec'
            }])
        }
      },{
        type: 'text',
        name: 'group_2020_text',
        left: 30,
        top: 15,
        style: {
          text: '2020',
          textAlign: 'center'
        }
      }]
    }]
  },
  animationEasing: 'backInOut',
  animationDuration: 1000
}


myChart.setOption(option)
myChart.on('click', {element: 'group_2020'}, function(params){
  option_year = 2020
  // console.log(params.name, params.componentType, params.info)

  myChart.setOption(
  {
    graphic: {
      elements:
      {
        children: 
        {
          type: 'rect',
          name: 'group_2020_rect',
          shape: {
            width: 200
          }
        }
      }
    }
  })
})

