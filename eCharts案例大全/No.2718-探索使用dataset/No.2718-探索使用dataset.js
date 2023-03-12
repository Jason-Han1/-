var dataset =  {
    // source: [
    //     ['product','Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    //     ['2016',220, 182, 191, 234, 290, 330, 310],
    //     ['2017',11, 22, 33, 44, 55, 66, 77]
    // ]
    
    // dimensions: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    // source: [
    //     [220, 182, 191, 234, 290, 330, 310],
    // ]
    
    // dimensions: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    // source: [
    //     220, 182, 191, 234, 290, 330, 310
    // ]
    
    // dimensions: ['product', '2016', '2017', '2018'],
    // source: [
    //     ['Sun', 220,220,220],
    //     ['Mon', 182,182,182],
    //     ['Tue', 191,191,191],
    //     ['Wed', 234,234,234],
    //     ['Thu', 290,290,290],
    //     ['Fri', 330,330,330],
    //     ['Sat', 310,310,310],
    // ]
    // dimensions:['product', ''],
    // // dimensions:['product', '2016', '2017', '2018'],
    // source: [
    //     ['Sun', 220],
    //     ['Mon', 182],
    //     ['Tue', 191],
    //     ['Wed', 234],
    //     ['Thu', 290],
    //     ['Fri', 330],
    //     ['Sat', 310],
    // ]
    dimensions: ["日期", "访问用户", "第三方"],
	source: [
		{ 日期: "1月1日", 访问用户: 1523, 第三方: 1200 },
		{ 日期: "1月2日", 访问用户: 1223, 第三方: 2200 },
		{ 日期: "1月3日", 访问用户: 2123, 第三方: 3200 },
		{ 日期: "1月4日", 访问用户: 4123, 第三方: 4200 },
		{ 日期: "1月5日", 访问用户: 3123, 第三方: 2800 },
		{ 日期: "1月6日", 访问用户: 7123, 第三方: 6200 }
	]
}

var series = [
        // line、bar、pie、scatter、effectScatter、funnel可直接用
        {
            // 柱状图
            type: 'bar', 
            // seriesLayoutBy: 'row',
            // name: '2016'
        },
        { type: 'bar' },
        // {
        //     // 折线图
        //     type: 'line', 
        //     // seriesLayoutBy: 'row',
        //     // name: '2017'
        // },
        {
            // 饼图
            type: 'pie', 
            // name: '2020',
            // seriesLayoutBy: 'row',
            radius: '30%',
            center: ['35%', '25%'],
            emphasis: {focus: 'data'},
            label: {
                // formatter: '{b}: {@2016} ({d}%)'
                // formatter: '{b}: {@第三方} ({d}%)'
                formatter: function(params){
                    // console.log(params)
                    return params.data[params.seriesName] + '：'
                    + params.data[params.dimensionNames[params.seriesIndex]] 
                    + '（' + params.percent + '）'
                }
            },
            // series.tooltip 仅在 tooltip.trigger 为 'item' 时有效。
            tooltip:{
                trigger: 'item',
                formatter: function(params){
                    // console.log(params)
                    return params.data[params.seriesName]
                    + `<br />${params.marker}`
                    + params.dimensionNames[params.seriesIndex]
                    + ' ' + params.data[params.dimensionNames[params.seriesIndex]]
                    // + '（' + params.percent + '）'
                }
            }
        },
        // {
        //     // 散点（气泡）图
        //     type: 'scatter'
        // },
        // {
        //     // 带有涟漪特效动画的散点（气泡）图
        //     type: 'effectScatter',
        //     // seriesLayoutBy: 'row',
        //     // name: '2018'
        // },
        // {
        //     // 漏斗图
        //     type: 'funnel'
        // }
        
        // parallel、candlestick、map、custom这四种需要配置（数据可用）

    ]


option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        trigger: 'axis'
    },
    dataset: dataset,
    xAxis: {
        type: 'category'
    },
    yAxis: {},
    grid: {top: '55%'}, // 位置大小
    series: series
};
