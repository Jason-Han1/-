/*
    最近本人发现了配置更简单，更容易理解，更容易修改，bug更少的写法
    
    所以更新了原图表，这里分享给大家
    
    不知道用以前写法的小伙伴有没有发现
    
    1.项目中如果数据为0的话，hover的时候用以前的写法文字会将圆点盖住...
    
    2.鼠标放上的时候，x轴Pointer文字可能会有些轻微的向上或向下的移动...
    
    3.文字下划线和文字见的距离过小，有的时候不是很符合需求...
    
    以下旧写法我都注释了哈，现在生效的是新写法，新写法我也解释说明了哦

*/

/*

    这个注释建议看完代码再看哦
    
    1.如果axisLabel和axisPointer的margin相同，则padding[0]必须等于0
    
    2.实现效果axisLabel和AxisPointer的字体大小必须相同
    
    3.此配置实现效果axisLabel和axisPointer的margin必须相同
    
    其他配置同样可以实现效果，如lineHeight等
    
    这是我整理、删除多余相同配置项后总结出的，使用方便，便于封装复用
    
    适用于大多数图表的配置

    更复杂的样式还是要参考配置文档的哦???

*/
option = {
    backgroundColor: '#fff',

    xAxis: [
        {
            data: ['北京', '上海', '广州', '深圳', '香港', '澳门', '台湾'],
        },
    ],
    yAxis: [
        {
            type: 'value',
        },
    ],
    series: [
        {
            type: 'line',
            data: [10, 10, 30, 12, 15, 3, 7],
            lineStyle: {
                width: 5,
                shadowColor: 'rgba(158,135,255, 1)',
                shadowBlur: 5,
                shadowOffsetY: 10,
            },
        },
    ],
};
