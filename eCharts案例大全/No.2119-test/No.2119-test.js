let color = [ 
    {
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[
            {
                color:'#FFA531',
                offset:0
            },
            {
                color:'#FFC949',
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
                color:'#008AFF',
                offset:0
            },
            {
                color:'#21F7FF',
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
                color:'#06CA70',
                offset:0
            },
            {
                color:'#43F2B6',
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
                color:'#867DFF',
                offset:0
            },
            {
                color:'#A59EFF',
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
                color:'#FF6061',
                offset:0
            },
            {
                color:'#FF7E7C',
                offset:1
            }
        ]
    },
]

let nameList = [
    '生均教学及辅助、行政办公用房面积（平方米生）',
    '生均实验室面积（平方米生）',
    '生均学校占地面积（平方米生）',
    '生均体育馆面积（平方米生）',
    '生均运动场面积（平方米生）'
]

let valueList = [
    200,
    200,
    150,
    180,
    200
]

let pieData = nameList.map((item,index)=>{
    return {
        name:item,
        value:valueList[index]
    }
})

option = {
    legend:{
        data:nameList,
        orient:'vertical',
        bottom:0,
        left:30,
        icon: 'circle'
    },
    color:color,
    series: [{
        type: 'pie',
        data:pieData,
        radius:['40%','70%'],
        center:['50%','50%'],
        labelLine:{
            show:false
        },
        label:{
            show:false
        }
    },{
      type:'pie',
      
    }]
};
