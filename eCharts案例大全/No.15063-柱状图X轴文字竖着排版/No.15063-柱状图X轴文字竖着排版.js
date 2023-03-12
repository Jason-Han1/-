var AmountName1='第一条';
var AmountName2='第二条';
var projectAmountProvince=['北京','天津','河北','黑龙江','湖北'];
var projectAmountData=[100,200,400,500,600];
var projectIncomeData=[55,104,508,900,200]
option = {
    backgroundColor:'#000',
    color: ['#00e5ff', '#dad83e'],
    legend: {
        data: [AmountName1,AmountName2],
        textStyle: {
            color: '#ffffff'
        }
    },
    xAxis: [
        {
            type: 'category',
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#ffffff'/*x坐标的文字颜色*/
                },
                formatter: function (val) {
                    console.log(val)
                    return val.split("").join("\n");/*换行*/
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#57617f'
                }
            },
            data:projectAmountProvince,
            axisTick: {
                inside: false
            },
            scale: true,
        }
    ],
    yAxis: {
        type: 'value',
        axisLabel: {
            textStyle: {
                color: '#ffffff'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617f'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#57617f'
            }
        }
    },
    series: [
        {
            name: AmountName1,
            type: 'bar',
            barMaxWidth : '4',
            itemStyle: {
                normal: {
                    barBorderRadius: 5
                }
            },
            data: projectAmountData
        },
        {
            name: AmountName2,
            type: 'bar',
            barMaxWidth : '4',
            itemStyle: {
                normal: {
                    barBorderRadius: 5
                }
            },
            data: projectIncomeData
        }
    ]
};