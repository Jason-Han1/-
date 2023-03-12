let xData = [2017,2018,2019,2020,2021];
// 专任教师数量（人）
let yData1 = [5000,8000,10500,13500,17000];
// 近五年新增教师
let yData2 = [15000,16000,18000,20500,22000];
// 专任教师中硕博比例
let lineData1 = [38,28,50,37,63];
// 具有高级职称的专任教师比例（%）
let lineData2 = [62,57,79,62,95];





option = {
    legend:{  
        right:30,
        top:0,
    },
    grid:{
        left:'3%',
        right:'3%',
        top:'7%',
        bottom:'5%',
        containLabel:true
    },
    xAxis: {
        data: xData,
        axisTick:{
            show:false
        },
        axisLine:{
            lineStyle:{
                color:'#31C2FF'
            }
        },
        axisLabel:{
            color:'#CAEEFF',
            fontSize:12
        }
    },
    yAxis: [
        {
            type:'value',
            name:'单位：人',
            nameTextStyle:{
                color:'#CAEEFF',
                fontSize:12
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#31C2FF'
                }
            },
            axisLabel:{
                color:'#CAEEFF',
                fontSize:12,
            },
            splitLine:{
                lineStyle:{
                    color:'#31C2FF',
                    opacity:0.2,
                }
            }
        },
        {
            type:'value',
            max:100,
            min:0,
            splitLine:{
                show:false
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#31C2FF'
                }
            },
            axisLabel:{
                color:'#CAEEFF',
                fontSize:12,
                formatter:value=>{
                    console.log(value);
                    return `${value}%`
                }
            }
        }
    ],
    series: [{
        name:'专任教师数量（人）',
        type: 'bar',
        barGap:'-100%',
        itemStyle:{
            color:'#06CA70',
            borderRadius:[4,4,0,0]
        },
        z:3,
        data:yData1
    },{
        name:'近五年新增教师',
        type: 'bar',
        itemStyle:{
            color:'#008AFF',
            borderRadius:[4,4,0,0]
        },
        data:yData2
    },{
        name: '专任教师中硕博占比',
        type: 'line',
        data:lineData1,
        itemStyle:{
            color:'#867DFF'
        },
        yAxisIndex:1,
        symbolSize:10,
    },{
        name: '具有高级职称的专任教师比例（%）',
        type: 'line',
        data:lineData2,
        itemStyle:{
            color:'#FB6A66'
        },
        yAxisIndex:1,
        symbolSize:10
    }]
};
