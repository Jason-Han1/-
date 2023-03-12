const sourceData = [{"id":"1470876252852527106","parentId":"0","children":[{"id":"1470876252852527107","parentId":"1470876252852527106","children":[{"id":"1470876252852527108","parentId":"1470876252852527107","children":[],"nodeName":"低频"},{"id":"1470876252852527109","parentId":"1470876252852527107","children":[],"nodeName":"高频"}],"nodeName":"基本面"},{"id":"1470876252852527110","parentId":"1470876252852527106","children":[{"id":"1470876252852527111","parentId":"1470876252852527110","children":[],"nodeName":"风险溢价"},{"id":"1470876252852527112","parentId":"1470876252852527110","children":[],"nodeName":"RAI"},{"id":"1470876252852527113","parentId":"1470876252852527110","children":[],"nodeName":"均线动量"},{"id":"1470876252852527114","parentId":"1470876252852527110","children":[],"nodeName":"资金"}],"nodeName":"市场趋势"}],"nodeName":"债券"},{"id":"1470876252852527115","parentId":"0","children":[{"id":"1470876252852527116","parentId":"1470876252852527115","children":[{"id":"1470876252852527117","parentId":"1470876252852527116","children":[],"nodeName":"估值"},{"id":"1470876252852527118","parentId":"1470876252852527116","children":[],"nodeName":"盈利"}],"nodeName":"基本面"},{"id":"1470876252852527119","parentId":"1470876252852527115","children":[{"id":"1470876252852527120","parentId":"1470876252852527119","children":[],"nodeName":"风险溢价"},{"id":"1470876252852527121","parentId":"1470876252852527119","children":[],"nodeName":"成交量"},{"id":"1470876252852527122","parentId":"1470876252852527119","children":[],"nodeName":"机构行为"}],"nodeName":"市场趋势"},{"id":"1470876252852527123","parentId":"1470876252852527115","children":[],"nodeName":"尾部信号"}],"nodeName":"股票"},{"id":"1470876252852527124","parentId":"0","children":[],"nodeName":"股票风格"}]
const gapDeg = 3
function getDepthAndSum(arr, depth, endNodeSum) {
  var flag = false;
  var temp = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].name = arr[i].nodeName
    if (arr[i].children instanceof Array) { // 判断是否是数组
      for (let j = 0; j < arr[i].children.length; j++) {
        temp.push(arr[i].children[j]); // 解析出arr下第一层
      }
      flag = true;
      if (arr[i].children.length === 0) {
        endNodeSum++
        arr[i].value = 1
      } 
    }
  }
  if (flag) { // 如果还有数组，则继续解析，直到最后一层有不为数组为止
    depth++;
    return getDepthAndSum(temp, depth, endNodeSum); 
  } else {
    return {depth, endNodeSum};
  }
}
const {depth, endNodeSum} = getDepthAndSum(sourceData, 0, 0)
const realData = []
const list = ['债券', '股票风格', '股票']
list.forEach((name) => {
  const el = sourceData.find(({nodeName}) => nodeName === name)
  realData.push(el)
  realData.push({
    value: (gapDeg / 360) * endNodeSum,
    itemStyle: { opacity: 0, color: 'transparent' },
    cursor: 'auto',
    type: 'gap'
  })
})
function handleSunburstData(arr, level, func) {
  arr.forEach((item) => {
    func(item, level)
    if (item.children && item.children.length > 0 && item.type !== 'hideItem') {
      handleSunburstData(item.children, level + 1, func)
    }
  })
}
function getSunburstData(index) {
  const res = []
  const cloneData = JSON.parse(JSON.stringify(realData))
  let dataIndex = 0
  handleSunburstData(cloneData, 1, (item, level) => {
    dataIndex++
    if (item.type === 'gap') { return }
    if (index === 0) {
      if (!item.children || (level < depth && item.children.length === 0)) {
          item.dataIndex = dataIndex
          item.label = { show: false }
          item.itemStyle = { opacity: 0 }
          item.emphasis = { label: { show: false } }
          item.type = 'hideItem'
          if (level === 1 ) {
            item.seriesIndex = 1
            item.children = [{
              id: item.id,
              value: 1,
              dataIndex: dataIndex,
              seriesIndex: 1,
              itemStyle: { opacity: 0 },
              children: [{
                id: item.id,
                value: 1,
                dataIndex: dataIndex,
                seriesIndex: 1,
                itemStyle: { opacity: 0 }
              }]
            }]
          }
          if (level === 2) {
            item.seriesIndex = 2
            item.children = [{
              id: item.id,
              value: 1,
              dataIndex: dataIndex,
              seriesIndex: 2,
              itemStyle: { opacity: 0 }
            }]
          }
      }
    } else {
      if (level !== index || item.children.length !== 0) {
          item.label = { show: false }
          item.itemStyle = { opacity: 0 }
          item.cursor = 'auto'
          item.emphasis = { label: { show: false } }
      }
    }
  })
  return cloneData
}
option = {
  title: {
    text: '旭日图菜单'
  },
  series: [
    {
      type: 'sunburst',
      radius: ['20%', '80%'],
      center: ['50%', '50%'],
      data: getSunburstData(0),
      emphasis: {
        focus: 'none'
      },
      sort: null,
      label: {
        rotate: 0
      },
      nodeClick: false,
      z: 3,
      startAngle: 90 - gapDeg / 2
    },
    {
      type: 'sunburst',
      radius: ['20%', '200%'],
      center: ['50%', '50%'],
      data: getSunburstData(1),
      emphasis: {
        focus: 'none'
      },
      sort: null,
      label: {
        rotate: 0
      },
      nodeClick: false,
      silent: true,
      startAngle: 90 - gapDeg / 2
    },
    {
      type: 'sunburst',
      radius: ['0%', '120%'],
      center: ['50%', '50%'],
      data: getSunburstData(2),
      emphasis: {
        focus: 'none'
      },
      sort: null,
      label: {
        rotate: 0
      },
      nodeClick: false,
      silent: true,
      startAngle: 90 - gapDeg / 2
    },
  ]
};
myChart.on('mouseover', function(params) {
  // 控制台打印数据的名称
  if (params.data.dataIndex) {
    const {seriesIndex, dataIndex} = params.data
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: seriesIndex,
      dataIndex: dataIndex
    });
  }
});
myChart.on('mouseout', function(params) {
  // 控制台打印数据的名称
  if (params.data.dataIndex) {
    const {seriesIndex, dataIndex} = params.data
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: seriesIndex,
      dataIndex: dataIndex
    });
  }
});
myChart.on('click', function(params) {
  // 控制台打印数据的名称
  console.log(params.data.id);
});