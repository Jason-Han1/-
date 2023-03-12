const data1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const data2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const data3 = changeData(data1)
const data4 = changeData(data2)

  
function changeData(value) {
  console.log('-----', value.length)
  let newData = []
  for (let i = 0; i < value.length; i++) {
   newData[i] = value[i] - 7
  }
  return newData;
}
console.log('--data3---', data3)
console.log('---data4--', data4)

option = {
  color: ['#C371E0', '#1AAEEF'],
  tooltip: {
    trigger: "axis",
    formatter: function (params) {
      console.log('---params--', params)
      const param0 = params[0]
      const param1 = params[1]
      return param0.marker + param0.seriesName + ': ' + (param0.data + 7) + 
            '<br/>' + param1.marker + param1.seriesName + ': ' + (param1.data + 7)
    },
    axisPointer: {
      type: "shadow"
    }
  },
  grid: {},
  xAxis: [{
    type: "category",
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false
    },
    data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  }],
  yAxis: [{
    type: "value",
    interval: 1,
    min: -7,
    max: 7,
    axisLabel: {
      show: true,
      formatter: function (value, index) {
          return value + 7;
      }
    },
    scale: true
  }],
  series: [{
    name: "生活用水",
    type: "bar",
    data: data3
  },{
    name: "非传统水源",
    type: "bar",
    data: data4
  }]
}



