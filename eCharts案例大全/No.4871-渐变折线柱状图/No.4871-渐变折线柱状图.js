let opt = {
   xAxisData: ["一月", "二月", "三月", "四月"],
   aUnit:["万m²", "%"],
   series:[
     {name: "2018年", type: "bar", data:["75.89", "560.96", "186.41", "656.73"], symbol: "none",normalColor:["#FF0007","#FFAAAC"]},
     {name: "2019年", type: "line", data:["18.70", "318.75", "187.11", "147.70"], symbol: "none",normalColor:["#23BCBA","#FAD961"]},
     ]
}
let mainOpt = {
    color:[
     ["#FF0007", "#FFAAAC"], ["#F76B1C", "#FAD961"],
    ]
}

let { xAxisData = [], series = [], aUnit = [] } = opt;
let { color } = mainOpt;
let legend = series.map(item => item.name);

// let yAxis = baseyAxisSet(aUnit,series)
let realUnit = Array.from(new Set(aUnit))
let seriesType = Array.from(new Set(series.map(item => item.type)));
let yAxis = seriesType.map((yname, ind) => {
    let defOpt = {
        name:realUnit.length>1?realUnit[ind]:realUnit[0],
        nameTextStyle: {
            padding: ind ? [0, 0, 0, 10] : [0, 20, 0, 0],
            color: "#999",
            fontSize: 12
        },
        axisLabel: {
            formatter: '{value}',
            color: '#999',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: "none",
        axisTick: {
            show: false
        },
        // splitNumber : 4,
        splitLine: {
            show: false,
            // show: ind ? false : true,
            lineStyle: {
                color: 'rgba(131,101,101,0.2)',
                type: 'dashed',
            }
        }
    }
    return defOpt;
})


series = series.map((sery, ind) => {
    let newSery = {};
    let { type, normalColor = [] } = sery;
    let defBarOpt = {
        yAxisIndex: seriesType.indexOf(sery.type),
        barWidth: '10px',
        ...sery,
    };
    // let lineInd = 0
    // if (yAxis.length > 1 && ind == series.length - 1) {
    //     lineInd = 1;
    // }
    let defLineOpt = {
        yAxisIndex: seriesType.indexOf(sery.type),
        symbol: "none",
        lineStyle: {
            width: 2,
            color: normalColor[0]
        },
        itemStyle: {
            color: normalColor[0]
        },
    }
    if (type == 'bar') {
        let splicePice = normalColor.length;
        if (splicePice > 1) {
            let linearColor = [{
                offset: 0,
                color: normalColor[0]
            }, {
                offset: 1,
                color: normalColor[normalColor.length - 1]
            }]
            defBarOpt = {
                ...defBarOpt,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, linearColor, false),
                        opacity: 0.8
                    },
                },
            }
        } else {
            defBarOpt = {
                ...defBarOpt,
                itemStyle: {
                    normal: {
                        color: normalColor[0]
                    },
                },
            }
        }

        newSery = { ...sery, ...defBarOpt }
    } else if (type == 'line') {
        newSery = { ...sery, ...defLineOpt }
    }
    return newSery
});

option = {
    backgroundColor: '#071729',
    title: {
        text: ''
    },
    color: color,
    legend: {
        type: 'scroll',
        data: legend,
        bottom: 10,
        itemWidth: 11,
        itemHeight: 6,
        itemGap: 20,
        textStyle: {
            color: '#8998AC',
            fontSize: 12
        }
    },
    grid: {
        top: '10%',
        left: '30',
        right: '30',
        bottom: '5%',
        containLabel: true
    },
    toolbox: {
        feature: {
        }
    },
    tooltip: {
        "trigger": "axis",
        confine: true,
        formatter: function (params) {
            let titleText = '';
            let htmlStr = `<div class="jc_echarts_tooltip_box"><div class="tool_axisLabel">${params[0].axisValueLabel}${titleText}</div>`;

            params.forEach((ser, ind) => {
                let { seriesName, value, color, axisIndex, dataIndex } = ser;
                // console.log(ser,seriesName, value, color.colorStops,color ,axisIndex,dataIndex,ind,aUnit,666)


                let unit = '';
                if (ind >= aUnit.length) {
                    unit = aUnit[aUnit.length - 1] || '';
                } else {
                    unit = aUnit[ind];
                }

                if (value == 0 || value == null) {
                    unit = '';
                    value = '-';
                }
                if (typeof color == 'object' && color.colorStops) {
                    color = color.colorStops[color.colorStops.length - 1].color;
                }

                htmlStr += `<div class="flex_b flex_align line_tootip_box" style="min-width: 177px;">
                <div class="flex_align"><span class="seriy_icon" style="display:inline-block;
                background-color:${color};"></span> ${seriesName}：</div>
                <span class="value">${value}${unit}</span>
                </div>`
            })
            htmlStr += `</div>`
            return htmlStr
        },
        backgroundColor: 'transparent',
        textStyle: {
            color: '#8998AC',
            fontSize: 10,
        },
        position: function (point, params, dom, rect, size) {
            // 固定在顶部
            // return [point[0], '10%'];
            var obj = { top: '10%' };
            let pst = (point[0] < size.viewSize[0] / 2) ? 'right' : 'left'
            if (pst == 'left') {
                obj.right = size.viewSize[0] - point[0] + 15
            } else {
                obj.left = point[0] + 15
            }
            return obj

        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#727272',
            fontSize: 10,
        },
        axisLine: {
            lineStyle: {
                color: '#E9E9E9'
            }
        },

        data: xAxisData
    },
    yAxis: yAxis,
    series: series,
    ...mainOpt
};

let curDataIndex = 0;
setInterval(() => {
        if(curDataIndex==xAxisData.length-1){
            curDataIndex = 0;
        }else{
            curDataIndex++;
        }
        
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: curDataIndex,
        });
         myChart.dispatchAction({
            type: 'showTip',
            seriesIndex:0,  // 显示第几个tooltip
            dataIndex: curDataIndex // 显示第几个数据
        });
    }, 2000);

// tooltip样式
// .jc_echarts_tooltip_box {
//     background: rgba(255, 255, 255, 1);
//     box-shadow: 0px 5px 7px -3px rgba(0, 0, 0, 0.13);
//     border: 1px solid rgba(102, 107, 127, 0.1);
//     padding: 15px 10px 10px 10px;
//     border-radius: 4px;
//     .tool_axisLabel {
//         color: #666b7f;
//         font-size: 12px;
//         font-weight: bold;
//         padding-bottom: 5px;
//         display: block;
//         text-align: left;
//     }
//     .line_tootip_box {
//         line-height: 20px;
//         color: #666b7f;
//         .seriy_icon {
//             width: 5px;
//             height: 5px;
//             border-radius: 100%;
//             margin-right: 5px;
//         }
//         .value {
//             color: #000000;
//             font-size: 10px;
//             font-weight: bold;
//             &.emit_value {
//                 float: right;
//                 text-align: right;
//             }
//         }
//     }
//     .trade-block-month {
//         width: 132px;
//         height: 24px;
//         line-height: 24px;
//         background: #f6f6f6;
//         border-radius: 2px;
//         margin-top: 9px;
//         text-align: center;
//         font-size: 12px;
//         color: #8998ac;
//         margin-left: auto;
//         margin-right: auto;
//     }
//     .scatter_tootip_box {
//         line-height: 20px;
//         .seriy_icon {
//             width: 8px;
//             height: 8px;
//             border-radius: 100%;
//             margin-right: 5px;
//         }
//         .value {
//             color: #000000;
//             font-size: 10px;
//             font-weight: bold;
//         }
//     }
// }
