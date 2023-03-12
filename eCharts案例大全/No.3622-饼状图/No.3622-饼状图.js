var data=[
    {value: 8, name: '类型1'},
    {value: 5, name: '类型2'},
    {value: 6, name: '类型3'},
    {value: 2, name: '类型4'},
    {value: 4, name: '类型5'},
    {value: 5, name: '类型6'}
            ]
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var data1=[];var data2=[];
var colorIn = ['rgb(33, 166, 161)', 'rgb(102,113,209)', 'rgb(230,144,78)', 'rgb(38,185,211)','rgb(82,125,12)','rgb(35,70,209)'];
var colorOut = ['rgba(33, 166, 161, 0.5)', 'rgba(102,113,209, 0.5)', 'rgba(230,144,78, 0.5)', 'rgba(38,185,211, 0.5)','rgb(82,125,12,0.5)','rgb(35,70,209,0.5)'];
for (var i = 0; i < data.length; i++) {
    data1.push({
        data: data[i].value,
        value: data[i].value,
        name: data[i].name,
        itemStyle: {
            normal: {
                color: colorOut[i]
            }
        }
    });
     data2.push({
        data: data[i].value,
        value: data[i].value,
        name: data[i].name,
        itemStyle: {
            normal: {
                color: colorIn[i]
            }
        }
    });
}
var dataArr = [];
      for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
          dataArr.push({
            name: (i + 1).toString(),
            value: 25,
            itemStyle: {
              normal: {
                color: "#2ac9e1",
                borderWidth: 0,
                borderColor: "rgba(0,0,0,0)"
              }
            }
          })
        } else {
          dataArr.push({
            name: (i + 1).toString(),
            value: 20,
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
                borderWidth: 0,
                borderColor: "rgba(0,0,0,0)"
              }
            }
          })
        }

      }
var option = {
    backgroundColor: '#04243E',
    tooltip: {
        title:'详情',
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },

    series: [
        {
            type: 'pie',
            zlevel: 3,
            silent: true,
            // center: ['50%', '40%'],
            radius: ['32%', '33%'],
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: dataArr
          },
        {
            name: '详情',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
                formatter:'{d}%',
                position: 'inner'
            },
             data: data2
        },
        {
            name: '详情',
            type: 'pie',
            radius: ['35%', '37%'],
            labelLine: {
              normal: {
                length:10,
                length2: 14,
              }
            },
          label: {
            show: true,
            position: 'outer',
            alignTo: 'labelLine',
            // ·圆点
            backgroundColor: 'auto',
            height: 0,
            width: 0,
            lineHeight: 0,
            distanceToLabelLine: 0,
            borderRadius: 2.5,
            padding: [2.5, -2.5, 2.5, -2.5],
            formatter: '{a|{b}：}{b|{c}}',
            rich: {
                a: {
                    padding: [0, 0, 0, 10],
                    color:'#aebfe8'
                },
                b: {
                    padding: [0, 10, 0, 0]
                }
            }
        },
            
            data: data1
        }
    ]
};