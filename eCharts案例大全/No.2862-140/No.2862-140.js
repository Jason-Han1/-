let list = [
    {
        value: 13,
        name: '吸烟',
        label: {
            color: '#666'
        },
        itemStyle: {

        },
        emphasis: {
            itemStyle: {

            }
        }
    },
    {
        value: 12,
        name: '未带安全帽',
        label: {
            color: '#666'
        },
        itemStyle: {

        },
        emphasis: {
            itemStyle: {

            }
        }
    },
    {
        value: 12,
        name: '未穿反光衣',
        label: {
            color: '#666'
        },
        itemStyle: {

        },
        emphasis: {
            itemStyle: {

            }
        }
    },
    {
        value: 12,
        name: '越界闯入',
        label: {
            color: '#666'
        },
        itemStyle: {

        },
        emphasis: {
            itemStyle: {

            }
        }
    },
    {
        value: 43,
        name: '火焰',
        label: {
            color: '#666'
        },
        itemStyle: {

        },
        emphasis: {
            itemStyle: {

            }
        }
    },
    {
        value: 43,
        name: '未戴安全绳',
        label: {
            color: '#666'
        },
        itemStyle: {

        },
        emphasis: {
            itemStyle: {

            }
        }
    }
];
function angleText(i, num) {
    //每个元素的角度
    var everyAngle = 360 / num;
    //文字现在所在的角度
    var currentAngle = i * everyAngle + everyAngle / 2;
    //文字所在模块的所占角度
    var currentArea = (i + 1) * everyAngle;
  
    if (currentAngle <= 90) {
        return -currentAngle;
    } else if (currentAngle <= 180 && currentAngle > 90) {
        return 180 - currentAngle;
    } else if (currentAngle < 270 && currentAngle > 180) {
        return 180 - currentAngle;
    } else if (currentAngle < 360 && currentAngle >= 270) {
        return 360 - currentAngle;
    }
}
//有值的色图的正切处理
var data3 = [];
data3 = JSON.parse(JSON.stringify(list));
for (var i = 0; i < data3.length; i++) {
    if (i === 0) {
        data3[i]['label']['color'] = '#333';
        data3[i]['label']['rotate'] = angleText(i, data3.length);
    } else {
        data3[i]['label']['color'] = '#666';
        data3[i]['label']['rotate'] = angleText(i, data3.length);
    }
}
let colorList =  ['#FFC67E', '#5DB7D2', '#BF8AF2', '#FF945E', '#1773DD','#61D79B'];
option = {
    backgroundColor: '#fff',

    tooltip: {
        trigger: 'item',
        formatter: '{b} <br/> {c}'+'人',
          backgroundColor: "rgba(67,100,247,0.8)",
          padding: [10, 10],
          axisPointer: {
            type: "shadow",
            shadowStyle: {
              color: "rgba(67,100,247,0.08)",
            },
          },
    },

    title: {
        text: '140',
        subtext: '违规总次数',
        x: '30%',
        y: '43%',
        textStyle: {
            fontSize: 50,
            fontWeight: 'normal',
            color: '#333',
        },
        subtextStyle: {
            fontSize: 20,
            fontWeight: 'normal',
            align: 'center',
            color: '#555',
        },
    },
     legend: {
        orient: 'vertical',
        left:'70%',
        align:'left',
        top:'middle',
        itemWidth: 13,
        itemHeight: 13,
        icon: 'circle',
        itemGap: 50,
        data: list,
        formatter: function(name) {
            console.log('name--',name)
            var res = ''
            for (var i = 0; i < list.length; i++) {
                if(list[i].name== name){
                    res+= '{a|'+ name + '}' + '{b|' + list[i].value + '}'
                }
            }
            return res
        },
        textStyle: {
            color:'#000',
            rich: {
                a: {
                    fontSize: 14,
                    color:'#666',
                    padding: [0, 10, 0, 6]
                },
                b: {
                    fontSize: 14,
                    color:'#666',
                }
            }
        },
    },
    series: [
        {
            type: 'pie',
            zlevel: 3,
            radius: ['130', '200'],
            center: ['35%', '50%'],
            color:colorList,
            itemStyle: {
                normal: {
                    borderWidth: 10,
                    borderColor: '#fff',
                },
            },
            data: list,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c|{c}%}',
                    rich: {
                        b: {
                            fontSize: 14,
                            color: '#666',
                            align: 'left',
                            padding: 4,
                        },
                        c: {
                            fontSize: 20,
                            align: 'center',
                            color:'#fff',
                            padding: 4,
                        },
                    },
                },
            },
        },
        {
                // 最外圆圈
                type: 'pie',
                zlevel: 1,
                  roseType: 'area',
                silent: true, //取消高亮
                radius:  ['52%', '53%'],
                center: ['35%', '50%'],
                itemStyle: {
                    normal: {
                        color:'#fff'
                    }
                },
                labelLine: {
                    show: false,
                    normal: {
                        length: 10,
                        length2: 0,
                        lineStyle: {
                            color: 'transparent'
                        }
                    }
                },
                animation: false,
                label: {
                    show: true,
                textStyle: {
                    fontSize: 16,
                    color: '#666'
                },
                position: 'inside',
                rotate: 30,
                align: 'right',
                },
                data: data3,
            },
    ],
};
