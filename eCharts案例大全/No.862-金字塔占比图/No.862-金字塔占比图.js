data = [
    {value: 53, name: '投运'},
    {value: 38, name: '潜力'}
]
let sum = 0;
data.forEach(item => {
    sum += item.value
})

let addUp = 0;
let minHeight = 2;
let top = 5;
let color = ['RGBA(34,230,111, 1)','RGBA(209,155,16,1)'];

data = data.map((item,index) => {
    let itemValue = 0
    if (item.value / sum * 100 < minHeight) itemValue = minHeight
    else itemValue = (item.value / sum * 100)
    top += itemValue
    return {
        value: addUp += itemValue,
        name: item.name,
        realValue: item.value,
        label: {
            show: true,
            color: '#fff',
            fontSize: 30,
            position:'inside',
            formatter:()=>{
                return `${item.name} ${item.value} 个`
            }
        },
        itemStyle: {
            height: `${itemValue}%`,
            borderColor:color[index],
            borderWidth:5,
            shadowColor: color[index],
            shadowBlur: 100
        }
    }
});

option = {
    backgroundColor: '#0d3059',
    color: [{
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
          offset: 0, color: 'RGBA(34,230,111, 0.5)' // 0% 处的颜色
      }, {
          offset: 1, color: 'RGBA(34,230,111, 0.2)' // 100% 处的颜色
      }],
      global: false // 缺省为 false
    },{
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
          offset: 0, color: 'RGBA(209,155,16,0.5)' // 0% 处的颜色
      }, {
          offset: 1, color: 'RGBA(209,155,16,0.2)' // 100% 处的颜色
      }],
      global: false // 缺省为 false
    },],
    series: [{
        type: 'funnel',
        sort: 'ascending',
        data:data
    }]
}
