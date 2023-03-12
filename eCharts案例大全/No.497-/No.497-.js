
let datas = [
  { value: 335, name: '构件起吊装备', percent: '10' },
  { value: 310, name: '混凝土/砂浆制备装备', percent: '40' },
  { value: 274, name: '支撑调垂装置', percent: '30' }
]

let colors = ['#F5931D', '#11A8AB', '#4FC4F6']
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
    backgroundColor: '#01102e',
  legend: {
    // orient: 'vertical',
    top: 'bottom',
    left: 'center',
    itemGap: 30,
    data: legendData,
    formatter: function (name) {
      return `{title|${name}}{value|${objData[name].value}}{unit|件}`
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
      center: ['50%', '50%'],
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
