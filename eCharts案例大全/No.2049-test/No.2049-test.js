let color = [
    {
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[
            {
                color:'rgba(134, 125, 255, 0.4)',
                offset:0
            },
            {
                color:'rgba(165, 158, 255, 0)',
                offset:1
            },
        ]
    },
    
    {
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[
            {
                color:'rgba(6, 202, 112, 0.4)',
                offset:0
            },
            {
                color:'rgba(6, 202, 112, 0)',
                offset:1
            },
        ]
    },
    
    {
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[
            {
                color:'rgba(0, 138, 255, 0.4)',
                offset:0
            },
            {
                color:'rgba(33, 247, 255, 0)',
                offset:1
            }
        ]
    },
    
    {
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[
            {
                color:'rgba(251, 106, 102, 0.4)',
                offset:0
            },
            {
                color:'rgba(255, 151, 123, 0)',
                offset:1
            }
        ]
    },
]

let colorList = [
    'rgba(134, 125, 255, 1)'
    ,'rgba(6, 202, 112, 1)'
    ,'rgba(0, 138, 255, 1)','rgba(251, 106, 102, 1)'
    ]
let nameList = [
    '2017'
    ,'2018','2019','2020','2021'
    ]
let valueList = [
    [52,62,68,50,45]
    ,[42,55,65,78,88],
    [32,40,58,62,78],
    [8,12,15,11,10]
]
let legendList = ['课程调课率','课程成绩优秀率','课程成绩合格率','课程缺课率']
let series = valueList.map((item,index)=>{
    return {
        name:legendList[index],
        type:'line',
        data:valueList[index],
        itemStyle:{
            color:colorList[index],
        },
        lineStyle:{
            shadowColor:colorList[index],
            shadowBlur:10,
        },
        areaStyle:{
            color:color[index]
        }
    }
})

option = {
    grid:{
        left:'3%',
        right:'3%',
        top:'5%',
        bottom:'5%',
        containLabel:true
    },
    legend:{
        data:legendList,
        icon:'circle'
    },
    xAxis: {
        data: nameList,
        axisTick:{
            show:false
        },
        axisLine:{
            lineStyle:{
                color:'#0D8AFF'
            }
        },
        axisLabel:{
            textStyle:{
                color:'#CAEEFF'
            }
        },
    },
    yAxis: {
        axisLabel:{
            textStyle:{
                color:'#CAEEFF'
            }
        },
        splitLine:{
            lineStyle:{
                color:'#31C2FF',
                opacity:0.2,
                type:'dashed'
            }
        }
    },
    series: series
};
