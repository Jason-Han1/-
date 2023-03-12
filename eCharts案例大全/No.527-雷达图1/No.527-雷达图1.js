let dataMax = 50;
const source = {
    data: [41, 18, 18, 28, 8],
    indicator: [
      { name: '西药', max: dataMax},
      { name: '化验', max: dataMax},
      { name: '检查', max: dataMax},
      { name: '治疗', max: dataMax},
      { name: '其他', max: dataMax},
    ]
}
const buildSeries = function(data){
    const helper = data.map((item, index) => {
      const arr = new Array(data.length);
      arr.splice(index, 1, item);
      return arr;
    })
    
    return [data, ...helper].map((item, index) => {
      return {
        type: 'radar',
        symbol:"circle",
        symbolSize: 10,
        itemStyle: {
            normal: {
                color:'#000',
                borderColor: "rgba(49, 229, 134, 0.4)",
                borderWidth: 10
            }
        },
        lineStyle: {
          color: index === 0 ? '#31e586' : 'transparent'
        },
        areaStyle: {
          color: index === 0 ? '#31e586' : 'transparent',
          opacity: 0.3
        },
        tooltip: {
          show: index === 0 ? false : true,
          formatter: function() {
            return source.indicator[index - 1].name + '<br>' + source.data[index - 1];
          }
        },
        z: index === 0 ? 1 : 2,
        data: [{
            name: '重要得分',
            value: item
        }]    
      }
    })
}

option = {
    backgroundColor: '#101736',
    // color: ['#00c2ff', '#f9cf67', '#e92b77'],
    legend: {
        show: true,
        icon: 'circle',//图例形状
        bottom: 45,
        center: 0,
        textStyle: {
            fontSize: 22,
            color: '#d1dbf2'
        },
        data: ['重要得分'],
    },
    radar: {
      name: {
        textStyle: {
          fontSize: 22,
          color: ['#d1dbf2'],
          padding: [3, 5]
        }
      },
      splitNumber: 5,
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(33,39,99,0.3)','rgba(22,28,82,0)','rgba(33,39,99,0.3)','rgba(22,28,82,0)','rgba(33,39,99,0.3)']
        }
      },
      splitLine: {
        lineStyle: {
          color: '#0c3e81'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#0c3e81'
        }
      },
      indicator: source.indicator
    },
    series: buildSeries(source.data)
};