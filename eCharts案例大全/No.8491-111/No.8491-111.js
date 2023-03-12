option = {
    //     legend: {
    //     color: ["#F58080", "#47D8BE", "#F9A589"],
    //     data: ['新报', '流失', '续费'],
    //     left: 'center',
    //     top: 'top'
    // },
    xAxis: {
        type: 'category',
        name:"t",
        nameTextStyle:{
            fontSize:30
        },
        nameLocation:"center",
        nameGap:"20",
        data: [1,2,3,4,5,6,7,8],
        axisTick:{
            show:false,
        },
        axisLabel:{
            show:false
        },
        axisLine:{
          symbol:["none","arrow"],
          symbolOffset:10,
          symbolSize:[9,15]
        },
    },
    yAxis: {
        name:"n",
        nameTextStyle:{
            fontSize:30
        },
        nameLocation:"center",
        nameGap:"20",
        type: 'value',
        splitLine: {
            show:false,
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            show:false
        },
         axisLine:{
          symbol:["none","arrow"],
          symbolOffset:10,
          symbolSize:[9,15]
        },
        

    },
    series: [
        {
            name: '新报',
            symbol: 'none',  
            type: 'line',
            data: [10,40,80,89,92,93,95],
            color: "#F58080",
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#FFCAD4' // 0% 处的颜色
                        }, {
                            offset: 0.4,
                            color: '#F58080' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '#F58080' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(245,128,128, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7
                }
            },
            itemStyle: {
                normal: {
                    color: '#F58080',
                    borderWidth: 10,
                    borderColor: "#F58080"
                }
            },
            smooth: true
        },
        {
            name: '流失',
            symbol: 'none',  
            type: 'line',
            data: [22,40,66,75,78,80,82],
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                                offset: 0,
                                color: '#AAF487' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#47D8BE' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#47D8BE' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(71,216,190, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7
                }
            },
            itemStyle: {
                normal: {
                    color: '#AAF487',
                    borderWidth: 10,
                    borderColor: "#AAF487"
                }
            },
            smooth: true
        },
        {
            name: '续费',
            symbol: 'none',  
            type: 'line',
            data: [30,40,50,60,66,70,70],
            
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',

                        colorStops: [{
                                offset: 0,
                                color: '#525252' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#46648C' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#3d72b4' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(249,165,137, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7
                }
            },
            itemStyle: {
                normal: {
                    color: '#F6D06F',
                    borderWidth: 10,
                    borderColor: "#F6D06F"
                }
            },
            smooth: true
        }
    ]
};