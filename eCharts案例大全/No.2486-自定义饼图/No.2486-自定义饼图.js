var trafficWay = [
                {value: 735, name: '国家级'},
                {value: 580, name: '省级'},
                {value: 484, name: '市级'}
            ];
var data = [];
var data2 = [];
var color=['#00ffd5','#0083ff','#e0b808'];
for (var i = 0; i < trafficWay.length; i++) {
    data.push({
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor:color[i],
                shadowColor: color[i]
            }
        },
        label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
    });
}
for (var i = 0; i < 4; i++) {
    data2.push({
        value: 100,
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: '#77b5b0'
            }
        }
    }, {
        value: 30,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)'
            }
        }
    });
}
var seriesOption = [{
    name: '',
    type: 'pie',
    radius: ['65%', '70%'],
    center:['35%', '50%'],
    itemStyle: {
        normal: {
            label: {
                show: false,
                position: 'center',
                textStyle: {
                     rich: {
                         numText: {
                             color: '#0ff8e5',
                             fontSize: 40,
                             fontWeight: 'bold',
                             width: 30,
                             textAlign: 'center'
                         },
                         text: {
                             color: '#ccc',
                             fontSize: 18,
                             padding: [5, 0, 0, 0],
                             width: 30,
                             textAlign: 'center'
                         }
                     }
                 },
                formatter: function(params){
                    console.log(params);
                    // for (var i = 0; i < data.length; i++) {
                    //      if (data[i].name == name) {
                    //          target = data[i].value;
                    //          title = data[i].label
                    //          index = i < 6 ? i : 5
                    //      }
                    //  }
                    return `{numText| ${params.percent}%}\n{text| ${params.name}}`
                }
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold',
                }
            },
            labelLine: {
                show: false
            }
        }
    },
    data: data
},{
            name: '访问来源',
            type: 'pie',
            radius: ['52%', '54%'],
            center:['35%', '50%'],
            hoverAnimation: false,
            // avoidLabelOverlap: false,
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            data: data2
        }];
option = {
    color : color,
    legend: {
        icon: "circle",
        orient: 'horizontal',
        right: 10,
        // top: 'center',
        width: '100px',
        align: 'left',
        textStyle: {
          color: "#fff",
          fontSize:14,
        },
        itemGap: 15,
        formatter: function(name) {
          var total = 0;
          var target;
          for (var i = 0, l = data.length; i < l; i++) {
            total += data[i].value;
            if (data[i].name == name) {
              target = data[i].value;
            }
          }
          return (
            name +
            " " +
            target +
            " | " +
            ((target / total) * 100).toFixed(2) +
            "%"
          );
        },
    },
    toolbox: {
        show: false
    },
    series: seriesOption
}

