let consump = [{
    name:'食堂',
    value:100
},{
    name:'商超',
    value:100
},{
    name:'水电',
    value:100
},{
    name:'其他',
    value:100
}]

let color = ['#0A7BFB','#41EFFF','#FFEC81','#EC2F7E']
let legendData1 = []
let legendData2 = []

let max = 0;
let series = consump.map((item,index)=>{
    max+=Number(item.value)
    index%2==0?legendData1.push(item.name):legendData2.push(item.name)
    return {
        type:'bar',
        name:item.name,
        data:[{
            value:item.value,
            itemStyle:{
                color:color[index],
                shadowColor:color[index],
                shadowBlur:3
            }
        }],
        barWidth:20,
        stack:'sameBar',
        coordinateSystem: 'polar',
        z:3
    }
})

series.push({
    type:'bar',
    barGap:'-100%',
    barWidth:30,
    data:[{
        value:max,
        itemStyle:{
            color:'rgba(10, 123, 251, 0.3)'
        }
    }],
    coordinateSystem: 'polar',
})
option = {
    title:{
        text:max+'\n万元',
        subtext:'本学期累计消费',
        top:'30%',
        left:'center',
        textStyle:{
            color:'#008AFF',
            fontSize:20
        },
        subtextStyle:{
            color:'#86D0FF',
            fontSize:15
        }
    },
    color:color,
    legend:[
        {
            orient: 'vertical',
            icon:'square',
            left: '33%',
            align: 'left',
            top: '60%',
            itemGap: 20,
            itemWidth:8,
            itemHeight:8,
            textStyle: {
                fontSize:13,
                color: '#86D0FF',
                padding:[2,0,0,0]
            },
            data: legendData1
        },{
            
            orient: 'vertical',
            icon:'square',
            left: '55%',
            align: 'left',
            top: '60%',
            itemGap: 20,
            itemWidth:8,
            itemHeight:8,
            textStyle: {
                fontSize:13,
                color: '#86D0FF',
                padding:[2,0,0,0]
            },
            data: legendData2
        }
    ],
    angleAxis: {
        show: false,
        max: max * 360 / 180,
        type: 'value',
        startAngle: 180,
        splitLine: {
            show: false
        }
    },
    radiusAxis: {
        show: false,
        type: 'category',
    },
    //圆环位置和大小
    polar: {
        center: ['50%', '50%'],
        radius: '150%'
    },
    series: series
}