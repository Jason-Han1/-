let  indicator = [
            { name: "metallic", color: "#FF6191", max: 100, axisLabel: { show: false, } },
            { name: "low foam", color: "#FF6191", max: 100, axisLabel: { show: false } },
            { name: "musty, earthy", color: "#FF6191", max: 100, axisLabel: { show: false } },
            { name: "phenolic, medicine", color: "#FF6191", max: 100, axisLabel: { show: false } },
            { name: "plastic, rubbery", color: "#FF6191", max: 100, axisLabel: { show: false } },
            { name: "other flavor", color: "#FF6191", max: 100, axisLabel: { show: false } },
            { name: "oxidation", color: "#FF6191", max: 100, axisLabel: { show: false } },
            { name: "brothy meaty", color: "#989898", max: 100, axisLabel: { show: false } },
            { name: "grassy weedy grape", color: "#989898", max: 100, axisLabel: { show: false } },
            { name: "worty", color: "#989898", max: 100, axisLabel: { show: false } },
            { name: "AA", color: "#989898", max: 100, axisLabel: { show: false } },
            { name: "nutty", color: "#989898", max: 100, axisLabel: { show: false } },
            { name: "cooked burnt", color: "#989898", max: 100, axisLabel: { show: false } },
            { name: "other bad sulfur", color: "#989898", max: 100, axisLabel: { show: false } },
            { name: "dirty sulfur", color: "#989898", max: 100, axisLabel: { show: false } },
            { name: "dead yeast", color: "#989898", max: 100, axisLabel: { show: false } },
            { name: "euro hop skunky", color: "#989898", max: 100, axisLabel: { show: false } },
            { name: "less estery", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "solventy fusel", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "bad ester", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "resin", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "bitter", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "lingering bitter", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "yeasty", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "sulfidic", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "low body", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "cloying & thick", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "dull & slow & bland", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "grainy", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "lingering astringent", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "toast", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "Sour", color: "#00A2FF", max: 100, axisLabel: { show: false } },
            { name: "Fair balance", color: "#00FF93", max: 100, axisLabel: { show: false } },
            { name: "fast clean", color: "#00FF93", max: 100, axisLabel: { show: false } },
            { name: "hoppy", color: "#00FF93", max: 100, axisLabel: { show: false } },
            { name: "sweet", color: "#00FF93", max: 100, axisLabel: { show: false } },
            { name: "malty", color: "#00FF93", max: 100, axisLabel: { show: false } },
            { name: "fruity", color: "#00FF93", max: 100, axisLabel: { show: false } },
            { name: "ester", color: "#00FF93", max: 100, axisLabel: { show: false } },
            { name: "other good body", color: "#00FF83", max: 100, axisLabel: { show: false } },
          ]

option = {
        title:{
          text:'非等比例的坐标轴'
        },
        radar: {
          indicator: indicator,
          center: ["55%", "50%"],
          radius: "80%",
          startAngle: 99, //坐标起始角度
          shape: "circle",
          name: {
            formatter: "{value}",
          },
          splitLine: {
            show: false
          },
          splitArea: {
            //拆分区域的颜色
            areaStyle: {
              color: '#ffffff00',
            },
          },
          axisTick: {
            //刻度设置
            show: true,
            lineStyle: {
              color: "#00FFF866",
            },
          },
          axisLine: {
            //坐标轴轴线
            lineStyle: {
              color: "#cccccc44",
            },
          },

        },
        tooltip: {
          trigger: 'item',
        },
        series: [
          {
            name: "雷达图",
            type: "radar",
            data: [
              {
                name: 'aaa10',
                z: 1,
                value: [
                  10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
                  10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
                  10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
                  10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                symbol: 'circle',
                symbolSize: 1,
                lineStyle: {
                  color: '#ff000040'
                },
                label: {
                  show: true,
                  color: '#ff0000',
                  align: 'center',
                  formatter: (param) => {
                    let y = param.value
                    let value = Number(0.36 * y / (1 - 0.007 * y)).toFixed(1) + '%'
                    if (param.name.indexOf('aaa') >= 0 && param.dimensionIndex !== 0) {
                      return ''
                    } else {
                      return value
                    }
                  }
                },
                tooltip: {
                  formatter: () => {
                    return ''
                  }
                }
              },
              {
                name: 'aaa20',
                z: 1,
                value: [
                  20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
                  20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
                  20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
                  20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                symbol: 'circle',
                symbolSize: 1,
                lineStyle: {
                  color: '#ff000040'
                },
                label: {
                  show: true,
                  color: '#ff0000',
                  align: 'center',
                  formatter: (param) => {
                    let y = param.value
                    let value = Number(0.36 * y / (1 - 0.007 * y)).toFixed(1) + '%'
                    if (param.name.indexOf('aaa') >= 0 && param.dimensionIndex !== 0) {
                      return ''
                    } else {
                      return value
                    }
                  }
                },
                tooltip: {
                  formatter: () => {
                    return ''
                  }
                }
              },
              {
                name: 'aaa40',
                z: 1,
                value: [
                  40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
                  40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
                  40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
                  40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
                symbol: 'circle',
                symbolSize: 1,
                lineStyle: {
                  color: '#ff000040'
                },
                label: {
                  show: true,
                  color: '#ff0000',
                  align: 'center',
                  formatter: (param) => {
                    let y = param.value
                    let value = Number(0.36 * y / (1 - 0.007 * y)).toFixed(1) + '%'
                    if (param.name.indexOf('aaa') >= 0 && param.dimensionIndex !== 0) {
                      return ''
                    } else {
                      return value
                    }
                  }
                },
                tooltip: {
                  formatter: () => {
                    return ''
                  }
                }
              },
              {
                name: 'aaa60',
                z: 1,
                value: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60,
                  60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60,
                  60, 60, 60],
                symbol: 'circle',
                symbolSize: 1,
                lineStyle: {
                  color: '#ff000040'
                },
                label: {
                  show: true,
                  color: '#ff0000',
                  align: 'center',
                  formatter: (param) => {
                    let y = param.value
                    let value = Number(0.36 * y / (1 - 0.007 * y)).toFixed(1) + '%'
                    if (param.name.indexOf('aaa') >= 0 && param.dimensionIndex !== 0) {
                      return ''
                    } else {
                      return value
                    }
                  }
                },
                tooltip: {
                  formatter: () => {
                    return ''
                  }
                }
              },
              {
                name: 'aaa80',
                z: 1,
                value: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,
                  80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,
                  80, 80, 80],
                symbol: 'circle',
                symbolSize: 1,
                lineStyle: {
                  color: '#ff000040'
                },
                label: {
                  show: true,
                  color: '#ff0000',
                  align: 'center',
                  formatter: (param) => {
                    let y = param.value
                    let value = Number(0.36 * y / (1 - 0.007 * y)).toFixed(1) + '%'
                    if (param.name.indexOf('aaa') >= 0 && param.dimensionIndex !== 0) {
                      return ''
                    } else {
                      return value
                    }
                  }
                },
                tooltip: {
                  formatter: () => {
                    return ''
                  }
                }
              },
              {
                name: 'aaa100',
                z: 1,
                value: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                  100, 100, 100, 100, 100, 100, 100],
                symbol: 'circle',
                symbolSize: 1,
                lineStyle: {
                  color: '#ff000040'
                },
                label: {
                  show: true,
                  color: '#ff0000',
                  align: 'center',
                  formatter: (param) => {
                    let y = param.value
                    let value = Number(0.36 * y / (1 - 0.007 * y)).toFixed(1) + '%'
                    if (param.name.indexOf('aaa') >= 0 && param.dimensionIndex !== 0) {
                      return ''
                    } else {
                      return value
                    }
                  }
                },
                tooltip: {
                  formatter: () => {
                    return ''
                  }
                }
              },
              {
                name: "red",
                symbol: "circle",
                symbolSize: 1,
                z: 2,
                value: [
                  100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 100,
                ],
                areaStyle: {
                  color: "#FF619144",
                },
                tooltip: {
                  formatter: () => {
                    return ''
                  }
                }
              },
              {
                name: "dark",
                symbol: "none",
                z: 2,
                value: [
                  0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                  100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0,
                ],
                areaStyle: {
                  color: "#98989866",
                },
                tooltip: {
                  formatter: () => {
                    return ''
                  }
                }

              },
              {
                name: "blue",
                symbol: "none",
                z: 2,
                value: [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100,
                  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                  100, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                areaStyle: {
                  color: "#00A2FF44",
                },
                tooltip: {
                  formatter: () => {
                    return ''
                  }
                }
              },
              {
                name: "green",
                symbol: "none",
                z: 2,
                value: [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100,
                  100, 100, 100,
                ],
                areaStyle: {
                  color: "#00FF9443",
                },
                tooltip: {
                  formatter: () => {
                    return ''
                  }
                }
              },
              {
                name: "Data",
                zlevel: 2,
                areaStyle: {
                  color: "#04BDDF",
                },
                symbol: 'circle',
                symbolSize: 4,
                itemStyle: {
                  color: "#ff0000",
                  opacity: 0.5
                },
                value: [
                  58, 60, 55, 61, 60, 70, 78, 42, 61, 41, 50, 35, 5, 5, 25, 12,
                  20, 10, 10, 21, 21, 18, 20, 12, 8, 19, 20, 10, 24, 18, 10, 5,
                  50, 40, 50, 51, 55, 55, 50, 60,
                ],
                label: {
                  show: true,
                  align: 'center',
                  color: '#0000ff',
                  formatter: param => {
                    let y = param.value
                    return Number(0.36 * y / (1 - 0.007 * y)).toFixed(1) + '%'
                  }
                },
                tooltip: {
                    show:true,
                    formatter: param=>{
                        console.log(param)
                        let hrmlstr =''
                        for(let i=0;i<indicator.length;i++){
                            let y = param.value[i]
                          hrmlstr+= param.marker +
                          '<span style=\"display:inline-block;width:150px;text-align:left;\">' +
                          indicator[i].name + ' : </span><span style=\"display:inline-block;width:40px;height:10px;text-align:right;\">'  + 
                          Number(0.36 * y / (1 - 0.007 * y)).toFixed(1) + '%' +'</span>'
                          if(i%4===3){
                             hrmlstr +='<br>'
                          }
                        }
                        return hrmlstr
                    }
                }
              },
            ],
          },
        ],
      }
      option.series[0].data.forEach(obj => {
        obj.value = obj.value.map(x => {
          return x / (0.36 + 0.007 * x)
        })
      })
      
      
