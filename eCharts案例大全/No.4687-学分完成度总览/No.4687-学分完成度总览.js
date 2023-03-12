var legendPic = [
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAoUlEQVQoU3WQMQ7CMAxFv3uKngpGRNodjgRCDAxMDExIDCycpjlFP3JsV0klssSJv5+/LeOXG8w4A+gJQADorUdjABkdDjJ+OBHoIxEi11qBIMvwpuW8vMSB1m/6c3iRS68as4olPZ3Y+mp8lgbpYcQyRD1JY1KF94pY+6y9KijdTLieNuBRK/srJ/Ed/p1F17O7cCszTipehIGx1WR2OP4AFEs5r21vmJwAAAAASUVORK5CYII=',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAo0lEQVQoU2NkYGBg+H+h+ygDA4PVfwYGBkaQAAQcYzQotQYxwGL/z7b/R1YAYoMAk3ElWB5M/DvZ+J+RgZEBovA/w3+QMON/BiazeoSi/0erwSbBAEgGxGeybkUy6UDJf5gEkloGJoceJEW7c6EGITmb4T8Dk+tkJEXb0iGK0Ixj8pqJpGhTIrKT4DYy+c1HUrQ+BhxOYFmwF8FGHmMKXAIOJwASljQK0K70AgAAAABJRU5ErkJggg==',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABz0lEQVQ4T21STUsbURQ9dzIJVjTB+BWDJbiogqsmWUjVAVPtKqDi2i4U/R2O/8OPhd36CVmptH5EXdjElRBcSKiIRtswKiJJZm55b2bQSN5m5t1zz33n3nsItY6uKxjtD0lo6+gGum69T6OqQGY3AsIciCbAHJAYkQHGGpjnERvOu/mvxOz2EEAbAAfADixQ8S+zyAB4HNFvv+RNpqRTEXzwZMFocoMtXp8EC+WSXUVcCEWwGUUsmbeJv1NLxJgSYKe3Dj+6PkNrCEro4OkfJi/PcFV6cZRj2YonpwmsK3QaKwLsF8hezwC0xuaq1vcf/yKRS9sdEBkczwQJp6sdikXXItas+nAbTTr6X7mCEMqmcF+xZVsKh21ixZTEFtWHm/hYbWJmE/dOv5bqCUupnpPuIgC/6P5n71do/rYqqQcPBSTOd50hkWH25YJyOMrxypLCPCUkdfrqsfJpEJq/XSYePhQweXGIq9KzO91l88v3aWcdCxEP1CyB5TrEafXWye9d2Z6mOAwqmqhEMTDjrEOWXkyowIYt2XWA+wjABKNi8Ti02TcGcEumFyJei+cYPAEg4NjGIMJ6mRRdvOSmVnvVjQqTj3y0Tb7zp6bJ/wPnvaE10CeFfwAAAABJRU5ErkJggg==',
]

var color = [
    new echarts.graphic.LinearGradient(0,1,0,0,[{
        offset:0,
        color:'#5998FF'
    },{
        offset:1,
        color:'#5CC0FF'
    }]),
    new echarts.graphic.LinearGradient(0,0,1,0,[{
        offset:0,
        color:'transparent'
    },{
        offset:0.33,
        color:'transparent'
    },{
        offset:0.33,
        color:'#FFD18C'
    },{
        offset:0.66,
        color:'#FFD18C'
    },{
        offset:0.66,
        color:'transparent'
    },{
        offset:1,
        color:'transparent'
    }]),
    new echarts.graphic.LinearGradient(0,1,0,0,[{
        offset:0,
        color:'#05C399'
    },{
        offset:1,
        color:'#00D0BF'
    }])
]
var data = [
    {
        name:'公必',
        barValue1:85,
        barValue2:70,
    },
    {
        name:'公选',
        barValue1:90,
        barValue2:66,
    },
    {
        name:'专必',
        barValue1:95,
        barValue2:88,
    },
    {
        name:'专选',
        barValue1:80,
        barValue2:10,
    }
]


var barData1 = []
var barData2 = []
var lineData = []
var xData = []
data.map((item,index)=>{
    xData.push(item.name)
    barData1.push(item.barValue1)
    barData2.push(item.barValue2)
    let percent = item.barValue2 / item.barValue1 * 100
    lineData.push(parseInt(percent))
})


option = {
    tooltip:{
        trigger:'axis',
        axisPointer:{type:'shadow'},
        formatter:params=>{
            let colorList= ['#5998FF','#FEAD5A','#05C399']
            console.log(params)
            let html = `${params[0].axisValue}<br/>`
            params.map((item,index)=>{
                html+=`
                <span style='display:inline-block;width:10px;height:10px;
                border-radius:5px;background-color:${colorList[index]};
                margin-right:10px'></span>${item.seriesName}：${item.value}${item.seriesName == '完成度'?'%':''}<br/>`
            })
            return html
        }
    },
    grid:{
        left:0,
        right:0,
        bottom:0,
        top:100,
        containLabel:true
    },
    legend:{
        right:0,
        top:16,
        itemWidth:10,
        itemHeight:10,
        data:[{
            name:'毕业要求',
            icon:'image://' + legendPic[0]
        },{
            name:'已获学分',
            icon:'image://' + legendPic[1]
        },{
            name:'完成度',
            icon:'image://' + legendPic[2]
        }]
    },
    title: {
        text: 'Awesome Chart',
        show:false
    },
    xAxis: {
        data: xData,
        axisTick:{
            show:false
        }
    },
    yAxis: [
        {
        name:'学分',
        nameTextStyle:{
            align:'left'
        },
        axisTick:{
            show:false
        },
        position:'left',
    },
    {
        name:'完成度（%）',
        nameTextStyle:{
            align:'right'
        },
        max:100,
        axisTick:{
            show:false
        },
        position:'right',
        axislabel:{
            show:true,
            formatter:name=>{
                return name
            }
        }
    }],
    series: [
        {
        name:'毕业要求',
        type: 'bar',
        barWidth:18,
        data:barData1,
        yAxisIndex:0,
        itemStyle:{
            normal:{
                barBorderRadius:[4,4,0,0],
                color:color[0]
            }
        },
        silent:true,
    },
    {
        name:'已获学分',
        type: 'bar',
        yAxisIndex:0,
        barWidth:18,
        barGap:'-100%',
        data:barData2,
        itemStyle:{
            normal:{
                color:color[1]
            }
        },
        silent:true,
    },
    {
        name:'完成度',
        type: 'line',
        barWidth:18,
        yAxisIndex:1,
        symbolSize:10,
        data:lineData,
        itemStyle:{
            normal:{
                barBorderRadius:[4,4,0,0],
                color:color[2],
                borderColor:color[2],
                borderWidth:3,
                shadowColor:'#79FFDB',
                shadowBlur:10,
            }
        },
        lineStyle:{
            shadowBlur:10,
            shadowColor:'#79FFDB',
        },
        silent:true,
    }
    ]
};