
// start----------------------------------------------------------------------------
// 一班数据
var one = [220, 182, 191, 234, 290, 330, 310];
// 二班数据
var two = [111, 182, 191, 234, 290, 330, 310];
// 柱形图宽度 自定义
var barWidth = 30;
// 柱形图间距 自定义
var barGap = 0;
/**

大概写了一下，不知道是不是你要的效果，要是可以用，细节上自己处理吧

*/
var option = {
    title: {
        text: '成績單',
        // x:'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter:function(params){
            console.log(params)
            return '<div><h5>成绩</h5>'+ 
            '<p>'+params[0].seriesName+'：'+ params[0].data +'分</p>'+
            '<p>'+params[1].seriesName+'：'+ params[1].data +'分</p>'+
            '<p>'+params[2].seriesName+'：'+ (params[2].data+params[3].data) +'分</p>'+
            '</div>'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    xAxis: {
        type: 'category',
        data: ['語文','數學','英語','物理','化學','生物','體育']
    },
     series: [
        {
            name:'一班',
            type: 'bar',
            barGap:barGap,
            barWidth:barWidth,
            data:one
        },
        {
            name:'二班',
            type: 'bar',
            barGap:barGap,
            barWidth:barWidth,
            data:two
        },{
            name:'总数',
            type: 'bar',
            stack:'每科總數',
            barWidth:barWidth,
            barGap:barGap,
            data:one,
            itemStyle:{
                normal:{
                    color:'pink'
                }
            },
        },{
            name:'總數',
            type: 'bar',
            stack:'每科總數',
            barGap:barGap,
            barWidth:barWidth,
            data:two
        },
    ]
};
// over----------------------------------------------------------------------------




// option = {
//     //其他代码省略
//     series: [
//         {
//         name:'一班',
//         type: 'bar',
//         data:[220, 182, 191, 234, 290, 330, 310]
//         },
//          {
//         name:'二班',
//         type: 'bar',
//         data:[220, 182, 191, 234, 290, 330, 310]
//         },
//     ],
    
// };
// 求助！想实现如下效果：
// 柱状图再增加一项，是一班、二班的合计，达到两个班堆叠效果。
// tooltip的显示为三项：一班220  二班220  合计440

// 按正常思路做，tooltip的显示有四项，一班220  二班220  一班220  二班220 
// 不知道如何才能实现？

// series: [
//         {
//         name:'一班',
//         type: 'bar',
//         data:[220, 182, 191, 234, 290, 330, 310]
//         },
//          {
//         name:'二班',
//         type: 'bar',
//         data:[220, 182, 191, 234, 290, 330, 310]
//         },
//          {
//         name:'一班',
//         type: 'bar',
//         stack:'合计',
//         data:[220, 182, 191, 234, 290, 330, 310]
//         },
//          {
//         name:'二班',
//         type: 'bar',
//         stack:'合计',
//         data:[220, 182, 191, 234, 290, 330, 310]
//         },
//     ],