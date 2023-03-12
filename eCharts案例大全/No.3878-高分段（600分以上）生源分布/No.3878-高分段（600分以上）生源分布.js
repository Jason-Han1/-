let xData = ['北京','天津','江西','上海','其他省']
let yData = [480,360,240,120,60]





let actValue = []
let stackValue = []
let actValueData = []
yData.map((item,index)=>{
    let isLast = index+1 == yData.length
    // 堆叠高度
    actValue.push({
        name:xData[index],
        value:isLast ? item : item-yData[index+1],
        itemStyle:{
            color:{
                x:0,
                y:0,
                x2:0,
                y2:1,
                colorStops:[
                    {
                        offset:0,
                        color:'#1890FF'
                    },
                    {
                        offset:1,
                        color:'#63B4FF'
                    }
                ]
            },
            barBorderRadius:3
        }
    })
    stackValue.push(isLast ? 0 : yData[index+1])
    
})

let totalData = {
    name:'总数',
    value:Math.max(...yData),
    itemStyle:{
        color:{
            x:0,
            y:0,
            x2:0,
            y2:1,
            colorStops:[
                {
                    offset:0,
                    color:'#FECB84'
                },
                {
                    offset:1,
                    color:'#FEAE5B'
                }
            ]
        }
    }
}


option = {
    title:{
        text:'高分段（600分以上）生源分布',
        textStyle:{
            color:'#24559E',
            fontSize:15
        }
    },
    grid:{
        top:70,
        left:0,
        right:0,
        bottom:20,
        containLabel:true
    },
    xAxis: {
        type: "category",
        data:['总数',...xData],
        axisTick:{
            show:false
        },
        axisLabel:{
            color:'#666666',
            fontSize:13
        },
        axisLine:{
            lineStyle:{
                color:'#B0C5DB'
            }
        },
        offset:10
        
    },
    yAxis: {
        name:'人',
        type: "value",
        nameTextStyle:{
            align:'left'  
        },
        splitLine:{
            lineStyle:{
                type:'dashed',
                color:'#CCDBEB'
            }  
        },
        labelLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        axisLine:{
            show:false
        },
        axisLabel:{
            color:'#666666',
            fontSize:13
        }
    },
    series:[
        {
            type:'bar',
            barWidth:10,
            data:[0,...stackValue],
            stack:'stack',
            itemStyle:{
                color:'transparent'
            }
        },
        {
            type:'bar',
            barWidth:10,
            itemStyle:{
                color:{
                      
                },
                barBorderRadius:[3,3,0,0],  
            },
            data:[totalData,...actValue],
            stack:'stack'
        }
    ]
}
console.log(option)