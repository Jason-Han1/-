function renderItem(params, api) {
  let topCenter = api.coord([api.value(0), api.value(1)])
//   let viewHeight = params.coordSys.height
//   let height = viewHeight - topCenter[1] + params.coordSys.y
  let height = api.size([0, api.value(1)])[1]
  let width = api.size([0, 1])[0] * 0.3;


  return {
    type: 'group',
    children: [
      {
        type: 'rect',
        shape: {
          x: topCenter[0] - width / 2,
          y: topCenter[1],
          width: width,
          height: height
        },
        style: api.style({ fill: '#37d5ee' })
      }]
  }
}

option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [100, 100, 100, 100, 100, 100, 80],
    type: 'custom',
    renderItem: renderItem,
  }]
};
