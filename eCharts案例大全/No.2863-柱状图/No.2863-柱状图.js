let xData = ['餐饮烧烤','企业厂区','宗教场所','网吧','其它']
let valueData = [80,190,200,110,70]
let tooData = [
    {
        name1: '一般厂区',
        value1: 22098,
        name2: '重点厂区',
        value2: 20544,
    },
    {
        name1: '一般厂区',
        value1: 21000,
        name2: '重点厂区',
        value2: 20544,
    },
    {
        name1: '一般厂区',
        value1: 20000,
        name2: '重点厂区',
        value2: 20544,
    },
    {
        name1: '一般厂区',
        value1: 25400,
        name2: '重点厂区',
        value2: 20544,
    },
    {
        name1: '一般厂区',
        value1: 19500,
        name2: '重点厂区',
        value2: 20544,
    },
    ]
option = {
    legend: {
        data: ["一般场所","重点场所"],
        top: "2%",
        right: '5%',
        textStyle: {
            color: "#000"
        },
        itemWidth: 12,
        itemHeight: 2,
        itemGap: 30,
    },
    tooltip: {
        trigger: 'axis',
        // formatter: (comp, value) => {
        //     const [serie] = comp;
        //     // return '{a|'+ `${serie.name}` + '}\n' + '' + '{b|'+ tooData[`${serie.dataIndex}`].name1 + '}' + '\n' + '{c|'+ tooData[`${serie.dataIndex}`].value1 + '}' + '\n' + '{b|'+ tooData[`${serie.dataIndex}`].name2 + '}'+ '\n' + '{d|'+ tooData[`${serie.dataIndex}`].value1 + '}'
        //     return "{a|" + `${serie.name}` + "}\n{b|" + tooData[`${serie.dataIndex}`].name1 +"}\n{c|" + tooData[`${serie.dataIndex}`].value1 +"}\n{b|" + tooData[`${serie.dataIndex}`].name2 +"}\n{b|" + tooData[`${serie.dataIndex}`].value2 +"}"
        // },
        formatter: function (comp) {  //自定义tooltip内容
        const [serie] = comp;
            var relVal = '';
            relVal += "<div style='color: #0A1832;background: rgba(255, 255, 255, 0.95);'>"+
                    "<div style='display: flex;align-items: center;margin-bottom: 0.15rem;'>"+
                        "<span style='width: 12px;height: 2px;background:#6C7DD3;display:inline-block;'></span>"+
                        "<span style='margin-left: 0.5rem;'>"+tooData[`${serie.dataIndex}`].name1+"</span>"+
                    "</div>"+
                    "<div style='font-size: 1.2rem;color: #203BBE;margin-bottom: 0.15rem;'>"+tooData[`${serie.dataIndex}`].value1+"</div>"+
                    "<div style='display: flex;align-items: center;margin-bottom: 0.15rem;'>"+
                        "<span style='width: 12px;height: 2px;background:#FF2323;display:inline-block;'></span>"+
                        "<span style='margin-left: 0.5rem;'>"+tooData[`${serie.dataIndex}`].name2+"</span>"+
                    "</div>"+
                    "<div style='font-size: 1.2rem;color: #FF2323;margin-bottom: 0.15rem;'>"+tooData[`${serie.dataIndex}`].value2+"</div>"+
                    "</div>"
            let textVal = `<div style="padding: 5px 10px 6px 10px;background: rgba(255, 255, 255, 0.95);border-radius: 2px;">
                <div style="color: #0A1832;margin-bottom: 0.2rem;">${serie.name}</div>
                ${relVal}
            </div>`
            return textVal;
        },
        textStyle: {
            rich: {
                a: {
                    fontSize: 16,
                    color: '#000',
                    fontWeight: 600
                },
                b: {
                    fontSize: 14,
                    color: '#000'
                },
                c: {
                    fontSize: 20,
                    color: '#203BBE'
                },
                d: {
                    fontSize: 20,
                    color: '#FF2323'
                }
            }
        },
        backgroundColor: '#fff',
        padding: [10,5,10,5],
        axisPointer: {
            show: true,
            status: 'shadow',
            z: -1,
            itemStyle: {
              color: 'rgba(000,000,000,0)'
            },
            shadowStyle: {
                color: 'rgba(000,000,000,0)'
            },
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            position: 'bottom',
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ECF1F6'
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                rotate: 0,
                fontSize: 12,
                color: '#3A3A3C'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#ECF1F6', '#ECF1F6'],
                    width: 0,
                    type: 'dashed'
                }
            },
            gridIndex: 0,
            data: xData,
        }
    ],
    yAxis: [
        {
            type: 'value',
            position: 'left',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                rotate: 0,
                fontSize: 12,
                color: '#6E7D9C',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#ECF1F6', '#ECF1F6'],
                    width: 1,
                    type: 'solid'
                }
            },
        }
    ],
    series: [
        {
            name: '重点场所',
            type: 'bar',
            stack: 'name',
            itemStyle: {
                color: '#FF0000'
            },
            data: [0,0,0,0,0],
            barMaxWidth: '100%',
            silent: false,
            z: 2
        },
        {
            name: '一般场所',
            xAxisIndex: 0,
            yAxisIndex: 0,
            stack: 'name',
            itemStyle: {
                color: '#6396E6',
                emphasis:{
                    // 普通图表的高亮颜色
                    color: '#70D4FF',
                }
            },
            type: 'bar',
            data: valueData,
            barMaxWidth: '35%',
            z: 3
        }
    ]
};