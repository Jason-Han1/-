
let chartData=[
        {name:"上海光明特种水产有限公司1",count:55,unit:"头"},
        {name:"上海光明特种水产有限公司2",count:44,unit:"头"},
        {name:"上海光明特种水产有限公司3",count:33,unit:"头"},
        {name:"上海光明特种水产有限公司4",count:22,unit:"头"},
        {name:"上海光明特种水产有限公司5",count:11,unit:"头"},
        {name:"上海光明特种水产有限公司6",count:10,unit:"头"},
    ]
let colors=['#ff9500', '#02d8f9', '#027fff','rgba(12,121,144,1)'];
let seriesData=chartData?chartData.map((it,idx)=>{
            return {
                name:it.name,
                value:it.count,
                barGap: '-100%',
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color:'rgba(7,116,139,0.3)'
                        }, {
                            offset: 1,
                            color: idx<=2?colors[idx]:colors[3]
                        }], false),
                        barBorderRadius: 10
                    },
                    emphasis: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            };
        }):[];
let max= Math.max.apply(null,
         (chartData?chartData.map((it,idx)=>{
             return it.count;
         }):[]) );
        
option = {
    backgroundColor: '#244f97',
    title: {
        show: false
    },
    tooltip: {
        trigger: 'item',
        formatter: (p) => {
            if (p.seriesName === 'total') {
                return ''
            }
            return `${p.name}<br/>${p.value}`
        }
    },
    grid: {
        borderWidth: 0,
        top: 10,
        left: 20,
        right: 0,
        bottom: 10,
        containLabel:true,
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            inside: false,
            textStyle: {
                color: '#b3ccf8',
                fontSize: '14'
            },
            formatter: function(a,b) {
                   let num = ''
                   let str = ''
                   if (b + 1 < 10) {
                       num = '0' + (b + 1);
                   } else {
                       num = (b + 1);
                   }
                   if (b === 0) {
                       str = `{color1|${num}}`
                   } else if (b === 1) {
                       str = `{color2|${num}}`
                   } else if (b === 2){
                       str = `{color3|${num}}`
                   }else{
                       str = `{color4|${num}}`
                   }
                   return str;
                },
            rich: {
                    color1: {
                        color: colors[0],
                        fontWeight: 700,
                        fontSize: '10',
                        width: 18,
                        height: 18,
                        align: 'center',
                        verticalAlign: 'middle',
                        borderRadius: 10,
                        borderColor: colors[0],
                        borderWidth: 1,
                        shadowColor: colors[0],
                        shadowBlur: 5
                    },
                    color2: {
                        color: colors[1],
                        fontWeight: 700,
                        fontSize: '10',
                        width: 18,
                        height: 18,
                        align: 'center',
                        verticalAlign: 'middle',
                        borderRadius: 10,
                        borderColor: colors[1],
                        borderWidth: 1,
                        shadowColor: colors[1],
                        shadowBlur: 5
                    },
                    color3: {
                        color:colors[2],
                        fontWeight: 700,
                        fontSize: '10',
                        width: 18,
                        height: 18,
                        align: 'center',
                        verticalAlign: 'middle',
                        borderRadius: 10,
                        borderColor: colors[2],
                        borderWidth: 1,
                        shadowColor: colors[2],
                        shadowBlur: 5
                    },
                    color4: {
                        color: colors[3],
                        fontSize: '10',
                        width: 18,
                        height: 18,
                        align: 'center',
                        verticalAlign: 'middle',
                        borderRadius: 10,
                        borderColor: colors[3],
                        borderWidth: 1,
                        shadowColor:colors[3],
                        shadowBlur: 5
                    }
                }
        },
        data: chartData?chartData.map((it)=>{
            return it.name;
        }):[]
    }],
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        name: 'total',
        type: 'bar',
        zlevel: 1,
        barGap: '-100%',
        data:chartData?chartData.map((it,idx)=>{
            return {
                name:it.name,
                value:max,
                count:it.count,
                unit:it.unit,
                itemStyle: {
                    color: '#001235',
                    barBorderRadius: 10
                }
            };
        }):[],
        barWidth: 5,
        legendHoverLink: false,
        label: {
            normal: {
                color: '#b3ccf8',
                show: true,
                position: 'insideBottomRight',
                textStyle: {
                    fontSize: 16
                },
                formatter: function(a) {
                    return `{color4|${a.data.count}${a.data.unit}}`;
                },
                rich: {
                    color4: {
                        color: '#e5eaff'
                    }
                }
            }
        }
    }, {
        name: 'bar',
        type: 'bar',
        zlevel: 2,
        //data: lineY,
        data:seriesData,
        barWidth: 5,
        label: {
            normal: {
                color: '#b3ccf8',
                show: true,
                position: [0, '-15px'],
                textStyle: {
                    fontSize: 16
                },
                formatter: function(a) {
                    return `{color4|${a.name}}`;
                },
                rich: {
                    color4: {
                        color: '#e5eaff'
                    }
                }
            }
        }
    }],
}