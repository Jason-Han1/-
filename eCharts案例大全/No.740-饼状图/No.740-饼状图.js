
let datas = [
  { value: 335, name: '进入区域', percent: '10' },
  { value: 310, name: '区域入侵', percent: '40' },
  { value: 274, name: '人员聚集', percent: '30' },
  { value: 235, name: '越界侦测', percent: '20' }
]

let colors = ['#6e7ce0', '#5fede1', '#388df6', '#7fdefe']
let legendData = []
for (var j = 0; j < datas.length; j++) {
  var data = {
    name: datas[j].name,
    icon: 'circle',
    textStyle: {
      fontSize: 18,
      color: colors[j]
    }
  }
  legendData.push(data)
}
let objData = array2obj(datas, 'name')
console.log(objData)
option = {
    backgroundColor: '#000',
  legend: {
    orient: 'vertical',
    top: 'center',
    left: '70%',
    itemGap: 30,
    data: legendData,
    formatter: function (name) {
      return `{title|${name}}{value|${objData[name].value}}{unit|件}{percent|${objData[name].percent}}{unit|%}`
    },
    textStyle: {
      rich: {
        value: {
          color: '#82baff',
          fontSize: 24,
          fontWeight: 600,
          fontFamily: 'HuaKang',
          padding: [0, 10, 0, 30]
        },
        unit: {
          color: '#82baff',
          fontSize: 14,
          fontWeight: 600,
          fontFamily: 'HuaKang',
          padding: [0, 50, 0, 0]
        },
        percent: {
          color: '#82baff',
          fontSize: 24,
          fontWeight: 600,
          fontFamily: 'HuaKang',
          padding: [0, 10, 0, 0]
        }
      }
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  color: colors,
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '70%',
      center: ['30%', '50%'],
      label: {
        fontSize: 18
      },
      data: datas,
      roseType: 'radius',
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200
      }
    }
  ]
}
/**
 * @introduction 把数组中key值相同的那一项提取出来，组成一个对象
 * @description 详细描述
 * @param {参数类型} array 传入的数组 [{a:"1",b:"2"},{a:"2",b:"3"}]
 * @param {参数类型} key  属性名 a
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */
function array2obj (array, key) {
  var resObj = {}
  for (var i = 0; i < array.length; i++) {
    resObj[array[i][key]] = array[i]
  }
  return resObj
}
