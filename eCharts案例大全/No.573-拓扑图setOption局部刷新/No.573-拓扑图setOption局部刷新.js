
//一个简易版的demo
//期望:echarts5版本，拖拽一个节点后不影响其他节点
let dashOffsetNum = 0;
option = {
    series: [
        {
            id:'seres1',
            name:'series1',
            type:'graph',
            layout:'force',
            draggable:true,
            roam:true,
            force:{
                repulsion:20,
                gravity:0.1,
                edgeLength:15
            },
            lineStyle:{
                type:'dashed',
                opacity:0.9,
                width:2,
                curveness:0.2,
                color:'#409EFF',
                dashOffset:dashOffsetNum
            },
            data:[
                {
                    id:'data1',
                    x:0,
                    y:0,
                    fixed:true
                },
                {
                    id:'data2',
                    x:-34.8,
                    y:20,
                    fixed:true
                },
                {
                    id:'data3',
                    x:34.8,
                    y:20,
                    fixed:true
                },
                {
                    id:'data4',
                    x:0,
                    y:-32.9,
                    fixed:true
                }
            ],
            links:[
                {
                    id:'links1',
                    source:'data1',
                    target:'data2'
                },
                {
                    id:'links2',
                    source:'data1',
                    target:'data3'
                },
                {
                    id:'link3',
                    source:'data1',
                    target:'data4'
                }
            ]
        },
    ],
};
setInterval(function(){
    dashOffsetNum++;
    let dashOffsetOption = myChart.getOption();
    dashOffsetOption.series[0].lineStyle =  {
                type:'dashed',
                opacity:0.9,
                width:2,
                curveness:0.2,
                color:'#409EFF',
                dashOffset:dashOffsetNum
            };
    // let dashOffsetSeries = {series:dashOffsetOption.series};
    // myChart.setOption(dashOffsetSeries,{
    //     replaceMerge:'series'
    // });
    myChart.setOption(dashOffsetOption);
},100);

myChart.on('mouseup',function(params){

let coordinates = myChart.convertFromPixel({seriesName:'series1'},[params.event.offsetX,params.event.offsetY]);
console.log(coordinates)
console.log(params)
    //拖拽后重新定位
let newOption = myChart.getOption();
newOption.series[0].data = newOption.series[0].data.map((item)=>{
    if(item.id === params.data.id){
        item.x = coordinates[0];
        item.y = coordinates[1];
        item.fixed = true;
    }
    return item;
})

console.log(newOption)

//此版本使用replaceMerge属性后，采用下方任意一直setOption方式,series部分
//均更新，但整体图表貌似重渲染(猜测),关系图坐标轴相对位置改变，出现闪动
//效果，体验不友好。
//echarts@5.2.0
//此地址只使用echarts,存在两个不友好效果
//1、拖拽修改data的x、y赋值后，有时位置正确有时位置错误--按力引导布局自适
//应位置(实际项目额外使用了vue-echarts@6.0.0,未出现此现象)
//2、当拖拽修改data的x、y赋值且位置正确后,整体图表整体貌似重渲染,感官有闪
//动效果,不友好(猜测为data里的x、y最大值变更,所有节点位置相对变化)

    //  setTimeout(function() {
    //       myChart.setOption(newOption, {
    //           notMerge:false,
    //           replaceMerge:'series'
    //       });}, 1000);
      
    setTimeout(function() {
      myChart.setOption({series:newOption.series}, {
          notMerge:false,
          replaceMerge:'series'
      });}, 1000);

//此版本官网文档显示无 replaceMerge属性，但采用下方setOption方式可以
//更新series局部数据(确定)，且整体图表不会重渲染(猜测)
//echarts@4.7.0  
//此地址只使用echarts,存在一个不友好效果
//1、拖拽修改data的x、y赋值后，有时位置正确有时位置错误--按力引导布局自适
//应位置(实际项目额外使用了vue-echarts@5.0.0-beta.0,未出现此现象)

    // setTimeout(function() {
    //   myChart.setOption(newOption.series, {
    //       notMerge:false,
    //       replaceMerge:'series'
    //   });}, 1000);
});

