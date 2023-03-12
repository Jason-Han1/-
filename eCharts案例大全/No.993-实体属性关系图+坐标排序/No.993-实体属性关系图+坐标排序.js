let dataInfo = [
  {
    name: '装机',
    value: 52,
    outNum: 52,
    loseNum: 0,
    symbolSize: 50,
    loseRate: '0.0000',
  },
  {
    name: '回看',
    value: 1,
    outNum: 0,
    loseNum: 1,
    symbolSize: 50,
    loseRate: '1.0000',
  },
  {
    name: '订购失败',
    value: 15,
    outNum: 4,
    loseNum: 11,
    symbolSize: 50,
    loseRate: '0.7333',
  },
  {
    name: '点击页面订购按钮',
    value: 52,
    outNum: 42,
    loseNum: 10,
    symbolSize: 50,
    loseRate: '0.1923',
  },
  {
    name: '搜索',
    value: 3,
    outNum: 3,
    loseNum: 0,
    symbolSize: 50,
    loseRate: '0.0000',
  },
  {
    name: '进入订购页',
    value: 52,
    outNum: 52,
    loseNum: 0,
    symbolSize: 50,
    loseRate: '0.0000',
  },
  {
    name: '订购成功',
    value: 11,
    outNum: 3,
    loseNum: 8,
    symbolSize: 50,
    loseRate: '0.7273',
  },
  {
    name: '进入专区',
    value: 52,
    outNum: 52,
    loseNum: 0,
    symbolSize: 50,
    loseRate: '0.0000',
  },
  {
    name: '开机',
    value: 52,
    outNum: 52,
    loseNum: 0,
    symbolSize: 50,
    loseRate: '0.0000',
  },
  {
    name: '进入退订页',
    value: 2,
    outNum: 2,
    loseNum: 0,
    symbolSize: 50,
    loseRate: '0.0000',
  },
  {
    name: '收藏',
    value: 20,
    outNum: 15,
    loseNum: 5,
    symbolSize: 50,
    loseRate: '0.2500',
  },
  {
    name: '发起退订',
    value: 1,
    outNum: 1,
    loseNum: 0,
    symbolSize: 50,
    loseRate: '0.0000',
  },
  {
    name: '直播',
    value: 39,
    outNum: 33,
    loseNum: 6,
    symbolSize: 50,
    loseRate: '0.1538',
  },
  {
    name: '点播',
    value: 47,
    outNum: 36,
    loseNum: 11,
    symbolSize: 50,
    loseRate: '0.2340',
  },
];
let dataLink = [
  {
    source: '装机',
    target: '开机',
    value: 52,
  },
  {
    source: '装机',
    target: '直播',
    value: 52,
  },
  {
    source: '装机',
    target: '点播',
    value: 52,
  },
  {
    source: '装机',
    target: '进入专区',
    value: 52,
  },
  {
    source: '回看',
    target: null,
    value: 1,
  },
  {
    source: '订购失败',
    target: null,
    value: 15,
  },
  {
    source: '订购失败',
    target: '直播',
    value: 15,
  },
  {
    source: '订购失败',
    target: '点播',
    value: 15,
  },
  {
    source: '订购失败',
    target: '订购成功',
    value: 15,
  },
  {
    source: '点击页面订购按钮',
    target: null,
    value: 52,
  },
  {
    source: '点击页面订购按钮',
    target: '收藏',
    value: 52,
  },
  {
    source: '点击页面订购按钮',
    target: '直播',
    value: 52,
  },
  {
    source: '点击页面订购按钮',
    target: '订购失败',
    value: 52,
  },
  {
    source: '点击页面订购按钮',
    target: '点播',
    value: 52,
  },
  {
    source: '点击页面订购按钮',
    target: '订购成功',
    value: 52,
  },
  {
    source: '搜索',
    target: '点播',
    value: 3,
  },
  {
    source: '搜索',
    target: '进入订购页',
    value: 3,
  },
  {
    source: '进入订购页',
    target: '收藏',
    value: 52,
  },
  {
    source: '进入订购页',
    target: '直播',
    value: 52,
  },
  {
    source: '进入订购页',
    target: '点击页面订购按钮',
    value: 52,
  },
  {
    source: '进入订购页',
    target: '点播',
    value: 52,
  },
  {
    source: '进入订购页',
    target: '搜索',
    value: 52,
  },
  {
    source: '订购成功',
    target: null,
    value: 11,
  },
  {
    source: '订购成功',
    target: '订购失败',
    value: 11,
  },
  {
    source: '订购成功',
    target: '点播',
    value: 11,
  },
  {
    source: '进入专区',
    target: '开机',
    value: 52,
  },
  {
    source: '进入专区',
    target: '收藏',
    value: 52,
  },
  {
    source: '进入专区',
    target: '直播',
    value: 52,
  },
  {
    source: '进入专区',
    target: '点播',
    value: 52,
  },
  {
    source: '进入专区',
    target: '进入订购页',
    value: 52,
  },
  {
    source: '开机',
    target: '直播',
    value: 52,
  },
  {
    source: '开机',
    target: '点播',
    value: 52,
  },
  {
    source: '开机',
    target: '进入订购页',
    value: 52,
  },
  {
    source: '开机',
    target: '进入专区',
    value: 52,
  },
  {
    source: '进入退订页',
    target: '发起退订',
    value: 2,
  },
  {
    source: '进入退订页',
    target: '点击页面订购按钮',
    value: 2,
  },
  {
    source: '收藏',
    target: null,
    value: 20,
  },
  {
    source: '收藏',
    target: '回看',
    value: 20,
  },
  {
    source: '收藏',
    target: '直播',
    value: 20,
  },
  {
    source: '收藏',
    target: '搜索',
    value: 20,
  },
  {
    source: '收藏',
    target: '点播',
    value: 20,
  },
  {
    source: '收藏',
    target: '点击页面订购按钮',
    value: 20,
  },
  {
    source: '收藏',
    target: '进入订购页',
    value: 20,
  },
  {
    source: '发起退订',
    target: '直播',
    value: 1,
  },
  {
    source: '直播',
    target: null,
    value: 39,
  },
  {
    source: '直播',
    target: '开机',
    value: 39,
  },
  {
    source: '直播',
    target: '进入退订页',
    value: 39,
  },
  {
    source: '直播',
    target: '收藏',
    value: 39,
  },
  {
    source: '直播',
    target: '点播',
    value: 39,
  },
  {
    source: '直播',
    target: '点击页面订购按钮',
    value: 39,
  },
  {
    source: '直播',
    target: '进入订购页',
    value: 39,
  },
  {
    source: '直播',
    target: '进入专区',
    value: 39,
  },
  {
    source: '点播',
    target: null,
    value: 47,
  },
  {
    source: '点播',
    target: '进入退订页',
    value: 47,
  },
  {
    source: '点播',
    target: '收藏',
    value: 47,
  },
  {
    source: '点播',
    target: '直播',
    value: 47,
  },
  {
    source: '点播',
    target: '点击页面订购按钮',
    value: 47,
  },
  {
    source: '点播',
    target: '搜索',
    value: 47,
  },
  {
    source: '点播',
    target: '进入订购页',
    value: 47,
  },
  {
    source: '点播',
    target: '进入专区',
    value: 47,
  },
];

let finalvalue = []
const func = (node,index) => {
  const nodeNames = node.map(ii=>ii.name)
  
  // 现有的一级的target
  const target = dataLink.filter(item=> nodeNames.includes(item.source)).map(i=>i.target)
  
   // 去重后的本次数据
  const setTarget = Array.from(new Set(target))
  
  // 计算节点的坐标（第一个为准）
  const arr = setTarget.filter(em=>!nodeNames.includes(em) && em).map((item,inde)=>{
    return{
      name:item,
      value:[index+1, inde*10]
    }
  })
 // 拼接上一轮数据
  node = node.concat(arr)
  if (index < dataInfo.length && arr.length !== 0) func(node,index + 1)
  else finalvalue = node
};
 
const firstNode = [
  {
    name: '装机',
    value: [0, 10],
  },
];
func(firstNode,0)

// 对已有数据重写value
dataInfo.forEach(item=>{
  finalvalue.forEach(em=>{
    if(em.name === item.name) item.value = em.value
  })
})

option = {
  title: {
    text: '实体属性关系图',
    top: 'top',
    left: 'center',
  },
  itemStyle: {
    normal: {
      color: '#000',
    },
    shadowBlur: 10,
  },
  animationDuration: 1500,
  animationEasingUpdate: 'quinticInOut',
  xAxis: {
    show: false,
    type: 'value',
  },
  yAxis: {
    show: false,
    type: 'value',
  },
  series: [
    {
      type: 'graph',
      coordinateSystem: 'cartesian2d',
      legendHoverLink: false,
      hoverAnimation: true,
      nodeScaleRatio: false,
      //建头
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [2, 15],
      edgeLabel: {
        show: false,
        normal: {
          show: true,
          position: 'middle',
          textStyle: {
            fontSize: 12,
          },
          formatter: '{c}',
        },
      },
      focusNodeAdjacency: true,
      roam: true,
      categories: [
        {
          name: '一级关系',
          itemStyle: {
            //可配置颜色
            normal: {
              color: '#A170DD',
            },
          },
        },
        {
          name: '二级关系',
          itemStyle: {
            //可配置颜色
            normal: {
              color: '#41B1EF',
            },
          },
        },
        {
          name: '三级关系',
          itemStyle: {
            //可配置颜色
            normal: {
              color: '#E8B842',
            },
          },
        },
        {
          name: '四级关系',
          itemStyle: {
            //可配置颜色
            normal: {
              color: '#667AED',
            },
          },
        },
      ],
      //圆形上面的文字
      label: {
        normal: {
          position: 'inside',
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: 12,
          },
        },
      },
      force: {
        repulsion: 2500,
      },
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: '#157eff',
            },
            {
              offset: 1,
              color: '#35c2ff',
            },
          ]),
        },
        shadowBlur: 10,
      },
      data: dataInfo,
      links: dataLink,
    },
  ],
};
