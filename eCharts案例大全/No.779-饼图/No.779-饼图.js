var labelName = ['总值','合格值'];

var getRate = 70;


series = [];
var color = [{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
            offset: 0,
            color: 'rgba(242, 164, 64, 1)' // 0% 处的颜色
        },
        {
            offset: 1,
            color: 'rgba(255, 213, 65, 1)' // 100% 处的颜色
        }
    ],
}, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
            offset: 0,
            color: 'rgba(29, 130, 255, 1)' // 0% 处的颜色
        },
        {
            offset: 1,
            color: 'rgba(0, 255, 246, 1)' // 100% 处的颜色
        }
    ],
}]




option = {
    polar:{
        center:['50%','50%'],
        radius:['38%','76%'],
    },
    angleAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        min: 0,
        max: 100,
        boundaryGap: ['0', '100'],
        startAngle: 90
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: labelName,
        z: 10
    },
    series: [{
        name:'',
        hoverAnimation:false,
        silent:true,
        type: 'pie',
        data:[{name:'合格值',value:100}],
        z:1,
        center:['50%','50%'],
        radius:['27%','68%'],
        label:{
            show:true,
            position:'center',
           
            formatter:'{total|'+getRate+'%}'+'\n\n'+'{lname|合格值}',
            rich:{
                total:{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'#0DDBFF'
                },
                lname:{
                    fontSize:12,
                    color:'#FFF'
                }
            }
        },
        itemStyle:{
            color:'rgba(62, 109, 255, 0.2)'
        }
    },{
        //hoverAnimation:false,
        name:labelName[0],
        barGap: '-100%',
        //silent:true,
        type: 'bar',
        data:[100],
        coordinateSystem:'polar',
        z:2,
        label:{
            show:false
        },
        itemStyle:{
            color:color[0]
        }
        
    },{
        //hoverAnimation:false,
        roundCap:true,
        //silent:true,
        name:labelName[1],
        type: 'bar',
        coordinateSystem:'polar',
        barGap: '-100%',
        data:[getRate],
        z:3,
        label:{
            show:false
        },
        itemStyle:{
            color:color[1]
        }
        
    }]
};
