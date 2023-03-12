//自定义提示文字
var getname = ['A','B','C','D'];
var getvalue =[23,45,23,43];
var getvalue2 =[43,43,33,39];
var getvalue3 =[83,63,83,79];

//计算最大值  
function calMax(arr) {
    let max = 0;
    arr.forEach((el) => {
        el.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
                if (max < el1) {
                    max = el1;
                }
            }
        })
    })
    let maxint = Math.ceil(max / 9.5);
    //不让最高的值超过最上面的刻度    
    let maxval = maxint * 10;
    //让显示的刻度是整数    
    return maxval;
}


var max = Math.ceil(calMax([getvalue]) / 100) * 100;


var option = {
    grid: {
        top: 80,
        bottom: 40,
        left: 50,
        right: 50
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params){
            return '总床位数：'+getvalue3[params[0].dataIndex] + 
            '<br> 入住人数：' + getvalue[params[0].dataIndex]+
             '<br> 未入住：' + getvalue2[params[0].dataIndex]
            },
    },
    legend: {
        data: [{
            name: '住宿人数',
        }, {
            name: '未住宿人数',
        }],
        type: "scroll",
        right: '15',
        top: '10',
        itemGap: 25,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            fontSize: '13',
          
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#656565',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        
        name: '数量（人）',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, 0, 60]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: '#656565',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#FFAE00',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#D1D1D1',
                  type:'dashed'
            }
        }
    }],
    series: [{
        name: "住宿人数",
        type: 'bar',
        data: getvalue,
        barWidth: '10px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00d0bf'
                }, {
                    offset: 1,
                    color: '#00d0bf'
                }], false),
            
            }
        },
    },
    {
        name: "未住宿人数",
        type: 'bar',
        data: getvalue2,
        barWidth: '10px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#3a85d3'
                }, {
                    offset: 1,
                    color: '#3a85d3'
                }], false),
            
            }
        },
    }
    
    ]
};
return option;