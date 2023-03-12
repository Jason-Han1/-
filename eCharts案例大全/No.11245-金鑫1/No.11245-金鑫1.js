app.title = '折柱混合';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    barCategoryGap:"7%",
    xAxis: [{
            type: 'category',
            data: ['7月','8月','9月','10月'],
            axisPointer: {
                type: 'shadow'
            },
            offset:25,
        },{
            show: false,
            type: 'category',
            data: ['北京','上海', '广州','北京','上海', '广州','北京','上海', '广州','北京','上海', '广州']
    }],
    yAxis: [
        {
            type: 'value',
            name: '数值',
            min: 0,
            max: 200,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name:'北京',
            type:'bar',
            itemStyle: {
                 normal: {
                     label: {
                         show: true,
                         position: 'bottom',
                         formatter: '{a}'
                     }
                 }
             },
            data:[90, 150, 40, 130]
        },
        {
            name:'上海',
            type:'bar',
            itemStyle: {
                 normal: {
                     label: {
                         show: true,
                         position: 'bottom',
                         formatter: '{a}'
                     }
                 }
             },
            data:[180, 190, 120, 30]
        },
        {
            name:'成都',
            type:'bar',
            itemStyle: {
                 normal: {
                     label: {
                         show: true,
                         position: 'bottom',
                         formatter: '{a}'
                     }
                 }
             },
            data:[120, 30, 160, 100]
        },
        {
            name:'北京走势',
            type:'line',
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3,
                    }
                }
            },
            xAxisIndex: 1,
            connectNulls: true,
            data:[90,"-","-", 150,"-","-", 40,"-","-", 130]
        },
        {
            name:'上海走势',
            type:'line',
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3,
                    }
                }
            },
            xAxisIndex: 1,
            smooth:false,
            connectNulls: true,
            data:["-",180,"-","-", 190,"-","-", 120,"-","-", 30]
        },
        {
            name:'成都走势',
            type:'line',
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3,
                    }
                }
            },
            xAxisIndex: 1,
            smooth:false,
            connectNulls: true,
            data:["-","-",120,"-","-", 30,"-","-", 160,"-","-", 100]
        }
    ],
    color:["#e51c23","#009688","#ff9800","#c3171d","#009688","#ffb40c"]
};
