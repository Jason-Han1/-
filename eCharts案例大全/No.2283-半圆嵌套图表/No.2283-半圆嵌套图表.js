 let title= "半圆嵌套最大值"
 let newData = [{name:"c1",value:10},{name:"c2",value:8},{name:"c3",value:2},{name:"c4",value:2},{name:"c5",value:2}];
    const maxData = newData.sort((a, b) => b.value - a.value);
    let max = maxData.length > 0 ? maxData[0].value : 0;
    let ageData = [];
    newData.forEach((v) => {
        let item = v;
        if (item.value === max) {
          
        }
        ageData.push(item);
    })
    
    var ages = [],
        len = ageData.length,
        colors = ["#3686C8", "#3691D9", "#449FE4", "#3D9CE1", "#3EA7F5", "#48ADFA", "#56B3FB", "#67BEFC", "#85C4F2", "#A9D8FC", "#ADD8FC", "#AFDBFC", "#BFE5FF", "#CEEAFC"],
        seriesData = [];
    // max = 120;
    seriesData = ageData.map((v, i) => {
        return {
            name: v.name,
            value: v.value,
            itemStyle: {
                normal:{
                    color: v.value === max ? '#F5A60F' : colors[i],
                    opacity: v.value === max ? 1 : (1 - i * 0.05)
                }
            }
        }
    })

    // 添加一些占位值
    ages = seriesData.map(function(e) {
    return {
    name: e.name,
    value: 100
    }
    });
    ages.push({
        name: '',
        value: 100 * len
   
    });

    for (var i = 0; i < len; i++) {
        seriesData.push({
            value: 0
        });
    }

  option = {
        title: {
            text: title,
            left: 'center',
            bottom: 'bottom',
            textStyle:{
                fontSize: 14,
                color: '#7B7C80'
            }
        },
    tooltip: {
        formatter: '{b}: {c}'
    },
    grid: {
        top: '75%',
        left: '25%',
        right: '25%',
        height: 2,
    },
    xAxis: [{
        type: 'value',
        min: -max,
        max: max,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#035de4",
                width: 1
            }
        },
        splitLine: {
            show: false
        },
        showMinLabel: false,
        showMaxLabel: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#99999B',
                fontSize: 12
            },
            formatter: function(value, index) {
                return Math.abs(value);
            }
        }
    }],
    yAxis: [{
       show:false,
    }],
    series: [
    //南丁格尔图 
    {
        type: 'pie',
        startAngle: 180,
        radius: ['10%', '100%'],
        center: ['50%', '75%'],
        roseType: 'area',
        // color: colorArr,
        hoverAnimation:false,
        labelLine: {
            normal: {
                show: false
            }
        },
        splitLine: {
            show: false
        },
        label: {
            normal: {
                show: false
            }
        },
        data: seriesData,
         itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 0,
                            shadowBlur: 0,
                            borderColor: 'transparent',
                            shadowColor: 'transparent',
                        },
                    },
    },
    // 年龄分布圆环 
    {
        type: 'pie',
        startAngle: 180,
        endAngle: 0,
        hoverAnimation: false,
        radius: ['130%', '130%'],
        center: ['50%', '75%'],
        label: {
            normal: {
                position: 'inner',
                textStyle: {
                    color: '#99999B',
                    fontSize: 12
                }
            },
        },
        data: ages,
    
    },
    // 最外层圆弧
    {
        type: 'gauge',
        radius: "120%",
        center: ['50%', '75%'],
        startAngle: 180,
        endAngle: 0,
        splitNumber: len,
        axisLine: {
            show: true,
            lineStyle: {
            type:'dotted',
                width: 1,
                color: [
                    [1, '#ccc']
                ]
            },
        },
        splitLine: {
            show: true,
            length: "100%",
            lineStyle: {
                type:'dotted',
                color: "#99999B",
                width: 0.2
            }
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false,
        },
        detail: {
            show: false
        },
        pointer: {
            show: false
        },
    
    }
    ]
    };