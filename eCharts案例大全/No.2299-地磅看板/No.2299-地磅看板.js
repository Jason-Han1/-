let bgColor = "#040811";
let color = [
    "#0090FF",
    "#36CE9E",
    "#FFC005",
    "#FF515A",
    "#8B5CFF",
    "#00CA69"
];


let echartData = [{
        name: "4/1",
        value1: 100,
        value2: 233
    },
    {
        name: "4/2",
        value1: 138,
        value2: 233
    },
    {
        name: "4/3",
        value1: 350,
        value2: 200
    },
    {
        name: "4/4",
        value1: 173,
        value2: 180
    },
    {
        name: "4/5",
        value1: 180,
        value2: 199
    },
    {
        name: "4/6",
        value1: 150,
        value2: 233
    },
    {
        name: "4/7",
        value1: 180,
        value2: 210
    },
];


let legendItem = ['入场量','入场车次'];

let xAxisData = echartData.map(v => v.name);
//  ["1", "2", "3", "4", "5", "6", "7", "8"]
//let yAxisData1 = echartData.map(v => v.value1);
// [100, 138, 350, 173, 180, 150, 180, 230]
//let yAxisData2 = echartData.map(v => v.value2);
// [233, 233, 200, 180, 199, 233, 210, 180]

let yAxisData1 = [100, 138, 350, 173, 180, 150, 180, 230];
let yAxisData2 = [233, 233, 200, 180, 199, 233, 210, 180];
let acount = Array.from(new Set(yAxisData1.concat(yAxisData2)))
console.log('acount',acount)
const hexToRgba = (hex, opacity) => {
    let rgbaColor = "";
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
      "0x" + hex.slice(3, 5)
    )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
}

//计算最大值
function set_data( arr_data )
{
    var y_min = arr_data[0];
    var y_max = arr_data[acount.length-1];        
    for( var n = 0; n < arr_data.length; n++ )
    {
            if( arr_data[ n ] > y_max )
                    y_max = arr_data[ n ];
            else if( arr_data[ n ] < y_min )
                    y_min = arr_data[ n ];
    }
    y_max = Math.ceil( y_max / 10 ) * 10;
    y_min = Math.floor( y_min / 10 ) * 10;
    
    return [y_min,y_max]
}
console.log(set_data(acount))
option = {
    backgroundColor: bgColor,
    color: color,
    legend: {
      center: true,
      top: 10,
      data: legendItem,
      textStyle: {
            color: '#00DEFF',
      },
    },
    // calculable: true,
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            let html = '';
            params.forEach(v => {
                // console.log(v)
                html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
                ${v.seriesName}.${v.name}
                <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px">${v.value}</span>
                ${v.seriesName == "入场车次" ? '辆' :'t'}`;
            })
            
    

            return html
        },
        extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
        // axisPointer: {
        //     type: 'shadow',
        //     shadowStyle: {
        //         // color: '#ffffff',
        //         shadowColor: 'rgba(225,225,225,1)',
        //         shadowBlur: 5
        //     }
        // }
    },
    grid: {
        top: 100,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#0696f9',
            }
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: 'rgba(255, 255, 255,0.7)', // x轴颜色
                fontWeight: 'normal',
                fontSize: '14',
                lineHeight: 22
            }

        },
       
        data: xAxisData
    }],
    yAxis: [
        {
            type: "value",
            name: '(t)',
            splitNumber: 5,
            axisLabel: {
                textStyle: {
                    color: "rgba(255, 255, 255,0.7)",
                    padding:[0,20,0,0],
                }
            },
            min:set_data(acount)[0],
            max:set_data(acount)[1],
            nameTextStyle: {
                color: "rgba(255, 255, 255,0.7)",
                fontSize: 12,
                lineHeight: 40,
                padding:[0,0,0,-70],
                // width:20,
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: true,
                length:10,
                lineStyle:{
                    color:color[0],
                    width:3,
                    
                }
            }
        },
        {
            type: "value",
            name: '',
            splitNumber: 6,
            position: 'right',
            min:set_data(acount)[0],
            max:set_data(acount)[1],
            axisLabel: {
                textStyle: {
                    color: "rgba(255, 255, 255,0.7)",
                    padding:[0,0,0,20],
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: true,
                length:10,
                lineStyle:{
                    color:color[1],
                    width:3,
                    
                }
            }
        },
  
    ],
    series: [
    {
        name: legendItem[0],
        type: "line",
        smooth: true, //是否平滑
        // showSymbol: false,/
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
            normal: {
                color: color[0],
                shadowBlur: 3,
                shadowColor: hexToRgba(color[0], 0.5),
                shadowOffsetY: 8
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: hexToRgba(color[0], 0.3)
                        },
                        {
                            offset: 1,
                            color: hexToRgba(color[0], 0.1)
                        }
                    ],
                    false
                ),
                shadowColor: hexToRgba(color[0], 0.1),
                shadowBlur: 10
            }
        },
        data: yAxisData1
    }, {
        name: legendItem[1],
        type: "line",
        smooth: true,
        // showSymbol: false,
        symbolSize: 8,
        yAxisIndex: 1,
        zlevel: 3,
        lineStyle: {
            normal: {
                color: color[1],
                shadowBlur: 3,
                shadowColor: hexToRgba(color[1], 0.5),
                shadowOffsetY: 8
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: hexToRgba(color[1], 0.3)
                        },
                        {
                            offset: 1,
                            color: hexToRgba(color[1], 0.1)
                        }
                    ],
                    false
                ),
                shadowColor: hexToRgba(color[1], 0.1),
                shadowBlur: 10
            }
        },
        data: yAxisData2
    }]
};