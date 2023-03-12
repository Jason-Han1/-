var dataV = 90;
var option = {
    backgroundColor:'rgba(1,20,34,1)',
     title: [{
        text: dataV,
        left: '49%',
        top: '45%',
        textAlign: 'center',
        textStyle: {
            fontSize: '65',
            fontWeight: 'bold',
            color: 'rgba(191,140,61)',
            textShadowColor:'rgba(191,140,61)',
            textShadowBlur:2,
            textShadowOffsetX:2,
            textShadowOffsetY:2,
            textAlign: 'center',
            fontStyle:'italic'
        },
    }, {
        text: '身心能量指数',
        left: '50%',
        top: '53%',
        textAlign: 'center',
        textStyle: {
            fontSize: '22',
            fontWeight: '400',
            color: 'rgba(191,140,61)',
            textAlign: 'center',
        },
    }, {
        text: '❤❤❤❤❤❤',
        left: '50%',
        top: '57%',
        textAlign: 'center',
        textStyle: {
            fontSize: '16',
            fontWeight: '400',
            color: 'rgba(191,140,61)',
            textAlign: 'center',
        },
    }, ],
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {} 
        }
    },
    series: [
        {
            name: '由内而外第五个',
            type: 'pie',
            radius:['50%','52%'],
            hoverAnimation:false,
            startAngle:220, 
            endAngle:-40,
            min:0,
            max:100,
            itemStyle:{
                color:'rgba(141,199,218,0.15)',
                 shadowColor: 'rgba(141,199,218,1)',
                 shadowBlur: 10,
                 shadowOffsetX:5,
                 shadowOffsetY:5
            },
            labelLine:{
                show:false
            },
            pointer:{
                show:false //指针
            },
            axisLine:{  //整体颜色
                show:false,
            },
            axisTick:{
                show:false,
            },
            splitLine:{ //隐藏0和100旁边的白色刻度
              show:false,
            },
            axisLabel:{
                show:false
            },
            detail:{    //隐藏数据值
                show:false
            },
            data: [{value: dataV}]
        },
        {
            name: '由内而外第四个',
            type: 'pie',
            radius:['0%','50%'],
            hoverAnimation:false,
            startAngle:220, 
            endAngle:-40,
            min:0,
            max:100,
            itemStyle:{
                color:'rgba(10,60,95,0.3)',
            },
            labelLine:{
                show:false
            },
            pointer:{
                show:false //指针
            },
            axisLine:{  //整体颜色
                show:false,
            },
            axisTick:{
                show:false,
            },
            splitLine:{ //隐藏0和100旁边的白色刻度
              show:false,
            },
            axisLabel:{
                show:false
            },
            detail:{    //隐藏数据值
                show:false
            },
            data: [{value: dataV}],
            z:0
        },
       {
            name: '由内而外第三个',
            type: 'gauge',
            radius:'45%',
            startAngle:220, 
            endAngle:-40,
            min:0,
            max:100,
            pointer:{
                show:false //指针
            },
            axisLine:{  //整体颜色
                show:true,
                lineStyle:{
                     color: [
                        [1,'rgba(0,0,0,0)']
                    ]
                }
            },
            axisTick:{
                show:true,
                //length:-10,
                lineStyle:{
                    color:'rgba(141,199,218,1)'
                }
            },
            splitLine:{ //隐藏0和100旁边的白色刻度
               show:true,
               length:-10,
               lineStyle:{
                   color:'rgba(141,199,218,1)',
               }
            },
            axisLabel:{
                show:false
            },
            detail:{    //隐藏数据值
                show:false
            },
            data: [{value: 60}]
        },
        {
            name: '内圆2',
            type: 'pie',
            radius:['0%','30%'],
            hoverAnimation:false,
            label: {
                show: true,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            itemStyle:{
                color:'rgba(10,60,95,1)'
            },
            label:{
                show:true,
                position:'center'
            },
            data: [
                {value: dataV}
            ]
        },
        {
            name: '内仪表盘',
            type: 'gauge',
            radius:"40%",
            startAngle:220, 
            endAngle:-40,
            min:0,
            max:100,
            splitNumber:1,
            pointer:{
                show:false //指针
            },
            axisLine:{  //大刻度
                show:true,
                lineStyle:{
                     color: [
                        [dataV/100, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0, [{
                                    offset: 0,
                                    color: 'rgba(141,199,218,1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(234,98,40,1)',
                                }
                            ]
                        )],
                        [1,'rgba(10,60,95,0.9)']
                    ]
                }
            },
            axisTick:{
                show:false //小刻度
            },
            splitLine:{ //隐藏0和100旁边的白色刻度
                show:false
            },
            axisLabel:{
                show:true,
                distance:-15,   //距离刻度的距离
                lineHeight: -25,
                color:'rgba(128,206,242)',
                formatter:function(v){  
                    if(v == ""){
                        return  '\xa0' + v;
                    }
                    return v;
                }
            },
            detail:{    //隐藏数据值
                show:false
            },
            animationDuration:2000,
            animationDurationUpdate:1000,
            data: [{value: dataV}]
            
        }
    ]
};
function getRnum(min,max){
    return Math.random() * (max - min) + min;
}
setInterval(function(){
    var n = getRnum(0,100);
    dataV = n.toFixed(0);
    console.log(dataV);
    option.title[0].text = dataV;
    var nLove = getRnum(0,5);
    let nm="";
    for(let i=0;i<nLove;i++){
        nm+="❤";
    }
    option.title[2].text = nm;
    option.series[4].axisLine.lineStyle.color[0][0] = dataV/100;
    myChart.setOption(option,true);
    console.log(option);
},3000)