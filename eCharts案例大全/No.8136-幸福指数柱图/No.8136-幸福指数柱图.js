//数据格式
var data ={
    happiness:[ '1', '2', '3','4','5'],
    genter1:[43, 216,588,2306,599],
    genter2:[61, 281, 571,2512,811]
}

option = {
    title: {
        text: '幸福指数',
        subtext: '仅供参考'
    },
    //color: ['#000', 'rgba(58,146,58)', 'rgba(192,61,62)', '#e5323e'],
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['happiness', ...data.happiness],
            ['1',  ...data.genter1],
            ['2',  ...data.genter2],
           
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar', barGap:0, legendHoverLink:false},
        {type: 'bar', barGap:0, legendHoverLink:false},
        {type: 'bar', barGap:0, legendHoverLink:false},
        {type: 'bar', barGap:0, legendHoverLink:false},
        {type: 'bar', barGap:0, legendHoverLink:false},

      
    ]
};
