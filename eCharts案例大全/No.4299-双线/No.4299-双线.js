let blueLegend = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAV1BMVEUAAAAA2v8Ayf8AyP8A1P8A0P8Azv8A0f8Az/8JwP8Az/8Cz/8TvP8KxP8EzP/H+P8owv8Nvf8HxP8Hw/8Hxv8EyP8Azf9l1/+T6P8Lu/8Luv9l2P/5///iYjOqAAAAHHRSTlMAAwcLEw8eJRhcNTB5VDn3kWVJSEdBK7ndcG+52DzZvAAAANlJREFUOMuVk9kSgyAMRbtoEcEKyOL2/9/ZEHAoHZ1M74Mv50yIkNz+yj3nmpac40fOiXLgJ+RQfjjSFgMOKhVH3DRN18EHFDRq3kb6gkSnrYzMgTIMONkoBZAzL3qI8CwZAEqByMXbWWOse4tolBKpQOTTwCHDFI1U4ruAB64XKRcNhi8lUIAOmHCDlioEJfXgBIMuUCgn9Javah7HWa3c9umMInQgGC7DuO9jkNyA0F0KWy3QR9RNblvdJPmbxEXRV00+FvXc5MBQI0cNLT329OLQq0cvL50PRJwRlR2MUmIAAAAASUVORK5CYII='
let yellowLegend = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEX/ygD/ywD/0QD/zwD/zwz/0wD/zhH/0AX/0BD/0gf/30//1Sj/0Rn/zxP/zhP/753/52//zhX/75z/+N4AO27MAAAAE3RSTlMBBgoPKBY8GzQhp3ZbT0T11VT1sV/+ZAAAAIxJREFUKM+90tsOgzAIBmDdoNCzzvd/19EmjrAY7vRP775AWuhyf9ZllXNNv1zaa0bV0HtGWU0IkQhR2OowpAiSSDj0zyJwkDDEUxUJuNVSamMgg7OQ255TynvjUWoRQs1b71uuAU7UrqGkfhw9laB9XbRtP9rWvZD/FH8I/vj8wfsr85ftfxONwAP5AvslBuoT2y5YAAAAAElFTkSuQmCC'


let historyData = [{
    name:'2019.9',
    value:10
},{
    name:'10',
    value:9
},{
    name:'11',
    value:8
},{
    name:'12',
    value:7
},{
    name:'2020.1',
    value:6
},{
    name:'2',
    value:5
}]

let predictData = [{
    name:'3',
    value:4
},{
    name:'4',
    value:5
},{
    name:'5',
    value:6
}]


let data1 = historyData.map(item=>{
    return [item.name,item.value]
})
let data2 = predictData.map(item=>{
    return [item.name,item.value]
})
data2.unshift(data1[data1.length-1])


option={
    backgroundColor:'#000',
    grid:{
        right: '0',
        bottom: '0',
        left: '0',
        top: '48px',
        containLabel: true
    },
    legend:{
        data:[{
            name:'实际消费金额',
            icon:'image://'+blueLegend
        },{
            name:'预测值',
            icon:'image://'+yellowLegend
        }],
        textStyle:{
            color:'rgba(134, 208, 255, 1)'
        },
        inactiveColor:'#333',
        itemWidth:28,
        itemHeight:28,
        left:0
    },
    xAxis:{
        type:'category',
        axisTick:{
            show:false
        },
        axisLabel:{
            color:'rgba(130, 175, 198, 1)'
        },
        axisLine:{
            lineStyle:{
            color:'rgba(49, 218, 255, 0.5)'
            }
        }
    },
    yAxis:{
        axisTick:{
            show:false
        },
        axisLine:{
            show:false
        },
        axisLabel:{
            color:'rgba(130, 175, 198, 1)'
        },
        splitLine:{
            lineStyle:{
                type:'dashed',
                color:'rgba(49, 218, 255, 0.5)'
            }
        }
    },
    series:[{
        name:'实际消费金额',
        type:'line',
        data:data1,
        itemStyle:{
            normal:{
                color:'rgba(49, 218, 255, 1)',
                shadowColor:'rgba(49, 218, 255, 1)',
                shadowBlur:10
            }
        },
        areaStyle:{
            color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                offset:0,
                color:'rgba(49, 218, 255, 0.1)'
            },{
                offset:1,
                color:'rgba(49, 218, 255, 0)'
            }])
        }
    },{
        name:'预测值',
        type:'line',
        data:data2,
        itemStyle:{
            normal:{
                color:'rgba(255, 236, 129, 1)'
            }
        },
        lineStyle:{
            type:'dashed'
        }
    }]
}

myChart.setOption(option)