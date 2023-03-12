
 var opt = {
    "items":["我的评分","项目平均分"],
    "scores":[{
            "name":"我的评分",
            "value":[0.00,0.00,0.00,0.00,0.00]
        },{
            "name":"项目平均分",
            "value":[3.00,0.00,19.27,9.09,0.00]
        }],
    "stages":[{
            "max":159.00,"text":"岗前准备"
        },{
            "max":149.00,"text":"客户拓展"
        },{
            "max":887.00,"text":"客户接触"
        },{
            "max":672.00,"text":"客户转化"
        },{
               "max":217.00,"text":"业主维温"
        }]
    }

      
function contains(arr, obj) {
    var i = arr.length
    while (i--) {
      if (arr[i].text === obj) {
        return i
      }
    }
    return false
}

option = {
    legend: {
      data: opt.items,
      left: '5px',
      top: '5px',
      orient: 'vertical',
      icon: 'rect', // 矩形
      itemWidth: 10, // 设置宽度
      itemHeight: 10, // 设置高度
      textStyle: {
        fontSize: 12,
      },
    },
    radar: {
      name: {
        rich: {
          a: {
            color: '#46536C',
          },
          b: {
            color: '#FF8181',
            fontSize: 16,
            fontWeight: 'bold',
          },
          c: {
            color: '#257BFF',
            fontSize: 16,
            fontWeight: 'bold',
          },
          triggerEvent: true,
        },
        formatter: (a) => {
          let i = contains(opt.stages, a) // 处理对应要显示的样式
          return `{b| ${opt.scores[0]['value'][i]}}{c| / ${opt.scores[1]['value'][i]}}\n{a| ${a}}`
        },
      },
      splitNumber: 3,
      splitArea: {
        areaStyle: {
          color: ['#F0F6FF', '#E2EDFF'],
        },
      },
      axisLine: { show: false },
      splitLine: { show: false },
      indicator: opt.stages,
      center: ['50%', '65%'],
      radius: 70,
      triggerEvent: true,
    },
    series: [
      {
        name: '雷达图',
        type: 'radar',
        data: opt.scores,
      },
    ],
}