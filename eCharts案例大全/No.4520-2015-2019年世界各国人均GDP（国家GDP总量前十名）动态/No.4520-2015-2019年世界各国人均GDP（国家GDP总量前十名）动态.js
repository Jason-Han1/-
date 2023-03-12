var data=[
  {
    "time": '2015',
    "data": [
      {"name": "United States","value":[55904.3,"美国"]},
      {"name": "China","value":[8280,"中国"]},
       {"name": "Japan","value":[32480.7,"日本"]},
      {"name": "Germany","value":[41267.3,"德国"]},
      {"name": "United Kingdom","value":[44117.8,"英国"]},
      {"name": "France","value":[33728.4,"法国"]},
      {"name": "India","value":[1617,"印度"]},
      {"name": "Italy","value":[29847.4,"意大利"]},
      {"name": "Canada","value":[43934.8,"加拿大"]},
      {"name": "Russia","value":[9055,"俄国"]}
    ]
  },
  {
    "time": "2016",
    "data": [
        {"name": "United States","value":[58740.9,"美国"]},
      {"name": "China","value":[8516.2,"中国"]},
       {"name": "Japan","value":[34285.2,"日本"]},
      {"name": "Germany","value":[43548.9,"德国"]},
      {"name": "United Kingdom","value":[45791.4,"英国"]},
      {"name": "France","value":[39065.9,"法国"]},
      {"name": "Italy","value":[31452.3,"意大利"]},
      {"name": "Canada","value":[46416.6,"加拿大"]},
      {"name": "Russia","value":[9589.8,"俄国"]},
      {"name": "Mexico","value":[10113.7,"墨西哥"]},
      
    ]
  },
  {
    "time": '2017',
    "data": [
        {"name": "United States","value":[59495.34,"美国"]},
       {"name": "China","value":[8582.94,"中国"]},
       {"name": "Japan","value":[38550.09,"日本"]},
       {"name": "Germany","value":[44184.45,"德国"]},
       {"name": "United Kingdom","value":[38846.79,"英国"]},
       {"name": "France","value":[39673.14,"法国"]},
      {"name": "Italy","value":[31618.68,"意大利"]},
      {"name": "Canada","value":[44773.26,"加拿大"]},
      {"name": "Russia","value":[10248.24,"俄国"]},
      {"name": "Spain","value":[28212.46,"西班牙"]},
    
    ]
  },
  {
    "time": '2018',
    "data": [
        {"name": "United States","value":[62606,"美国"]},
     {"name": "China","value":[9608,"中国"]},
     {"name": "Japan","value":[39306,"日本"]},
     {"name": "Germany","value":[48264,"德国"]},
     {"name": "United Kingdom","value":[42558,"英国"]},
     {"name": "France","value":[42878,"法国"]},
      {"name": "Italy","value":[34260,"意大利"]},
      {"name": "Canada","value":[46261,"加拿大"]},
      {"name": "Russia","value":[11327,"俄国"]},
      {"name": "Mexico","value":[9807,"墨西哥"]},
    ]
  },
  {
    "time": '2019',
    "data": [
        {"name": "United States","value":[63809.64,"美国"]},
     {"name": "China","value":[10121.3,"中国"]},
     {"name": "Japan","value":[41314.41,"日本"]},
      {"name": "Germany","value":[49180.54,"德国"]},
      {"name": "India","value":[2100,"印度"]},
     {"name": "France","value":[43830.65,"法国"]},
     {"name": "United Kingdom","value":[40800.48,"英国"]},
      {"name": "Italy","value":[34671.17,"意大利"]},
      {"name": "Brazil","value":[10913.42,"巴西"]},
      {"name": "Canada","value":[49196.49,"加拿大"]}
    
    ]
  }
 
]


var option = {
  baseOption: {
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'quinticInOut',
    timeline: {
      axisType: 'category',
      orient: 'vertical',
      autoPlay: true,
      inverse: true,
      playInterval: 2000,
      left: null,
      right: 5,
      top: 20,
      bottom: 20,
      width: 46,
      height: null,
      label: {
        normal: {
          textStyle: {
            color: '#ddd'
          }
        },
        emphasis: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      symbol: 'none',
      lineStyle: {
        color: '#555'
      },
      checkpointStyle: {
        color: '#bbb',
        borderColor: '#777',
        borderWidth: 1
      },
      controlStyle: {
        showNextBtn: false,
        showPrevBtn: false,
        normal: {
          color: '#666',
          borderColor: '#666'
        },
        emphasis: {
          color: '#aaa',
          borderColor: '#aaa'
        }
      },
      data: data.map(function(ele) {
        return ele.time
      })
    },
    backgroundColor: '#404a59',
    title: {
      text: '2015-2019年世界各国人均GDP（国家GDP总量前十名）动态',
      subtext: '单位:美元',
      left: 'center',
      top: 'top',
      textStyle: {
        fontSize: 25,
        color: 'rgba(255,255,255, 0.9)'
      }
    },
    tooltip: {
      formatter: function(params) {
        if ('value' in params.data) {
          return params.data.value[1] + ': ' + params.data.value[0];
        }
      }
    },
    grid: {
      left: '35%',
      right: '30%',
      top: '75%',
      bottom: 0
    },
    xAxis: {},
    yAxis: {},
    series: [
      {
        id: 'map',
        type: 'map',
        mapType: 'world',
        top: '8%',
        bottom: '25%',
        left: 0,
        itemStyle: {
          normal: {
            areaColor: '#323c48',
            borderColor: '#404a59'
          },
          emphasis: {
            label: {
              show: true
            },
            areaColor: 'rgba(255,255,255, 0.5)'
          }
        },
        data: []
      }, {
        id: 'bar',
        type: 'bar',
        tooltip: {
          show: false
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            textStyle: {
              color: '#ddd'
            }
          }
        },
        data: []
      },
    ]
  },
  options: []
}

for (var i = 0; i < data.length; i++) {
  //计算其余国家GDP
  option.options.push({
    visualMap: [{
      dimension: 0,
      left: '25%',
      itemWidth: 12,
      min:data[i].data[9].value[0],
      max:data[i].data[0].value[0],
      text: ['高', '低'],
      textStyle: {
        color: '#ddd'
      },
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered', 'red']
      }
    }],
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.1],
      axisLabel: {
        show: false,
      }
    },
    yAxis: {
      type: 'category',
      axisLabel: {
          
        textStyle: {
          color: '#ddd'
        }
      },
      data: data[i].data.map(function(ele) {
        return ele.value[1]
      })
    },
    series: [
      {
        id: 'map',
        data: data[i].data
      }, {
        id: 'bar',
        data: data[i].data.map(function(ele) {
          return ele.value[0]
        }).sort(function(a, b) {
          return a > b
        })
      }, 
    ]
  })
}