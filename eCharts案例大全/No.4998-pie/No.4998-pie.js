
var colorList = ['#55a6f9', '#56cc68', '#ffa944', '#fe6363']
let data = [{
            'name': '误报',
            'value': 5833
        }, {
            'name': '测试',
            'value': 3124
        }, {
            'name': '告警',
            'value': 1448
        }, {
            'name': '火警',
            'value': 48
        }];
function sumTotal(){
    var sum = 0
    data.forEach(item=>sum+=item.value)
    return sum
}
var total = sumTotal()
option = {
    title: [{
          text: '{name|报警分析}\n{val|' + total + '}',
          top: 'center',
          left: '45%',
          textAlign: 'center',
          textStyle: {
            rich: {
              name: {
                fontSize: 20,
                fontWeight: 'bold',
                color: '#333333',
                padding: [10, 0]
              },
              val: {
                fontSize: 14,
                color: '#666'
              }
            }
          }
        }],
    tooltip: {
        trigger: 'item'
    },
    legend:{
      orient:'vertical',
      right:'10%',
      top:'10%',
      align:'right'
    },
    series: [{
        type: 'pie',
        center: ['45%', '50%'],
        radius: ['50%', '70%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            formatter: '{b}：{c}',
        },
        data: data
    }]
};