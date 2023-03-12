var name1 = ["新能源汽车企业", "电子信息企业", "新材料企业", "房地产业", "医药食品企业", "家电企业"]; //行业名称
var code =  ["001002", "001003", "001004", "K", "001005", "001001"]; //行业代码
var value = [-56.39, 30.6, -30.49, -28.68, 28.07, 14.73]; // 行业变动率

console.log(name1);
console.log(code);
console.log(value);

option = {
    backgroundColor: '#000',
    grid: {
        top: '15%',
        right: '10%',
        left: '10%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: name1,
        axisLabel: {
            margin: 20,
            color: '#fff',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            show:true,
            lineStyle: {
                color: '#ffffff',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
      
        axisLabel: {
            show:false,
            formatter: '{value}%',
            color: '#fff',
            textStyle: {
                fontSize: 16
            },
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: 'rgba(107,107,107,0.37)',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(131,101,101,0.2)',
                type: 'dashed',
            }
        }
    }],
    series: [{
        type: 'bar',
        data: value,
        barWidth: '80px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF9A22' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FFD56E' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 30, 30],
            }
        },
        label: {
            show: true,
            fontSize: 18,
            fontWeight: 'bold',
            position: 'top',
            color: 'blue',
            formatter: (params)=>{//单独对第一个label使用样式
                if (params.value>0) {
                   return '{a|'+params.value+'%}';
                }else{
                   return '{b|'+params.value+'%}';
                } 
                
            },
            rich: {//使用富文本编辑字体样式
                a: {
                    color: 'red',
                    fontSize:22
                },
                 b: {
                    color: 'green',
                    fontSize:22
                }
            }
        }
    }]
};
//return option;  //一定要返回新格式