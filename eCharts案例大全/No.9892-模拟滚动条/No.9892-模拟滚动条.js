option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        top:0,
        right:'6px',
        padding:10,
        itemGap:20,
        textStyle:{
            color:'#fff'
        },
        data:['热线','网格']
    },
    grid: {
        top:'34px',
        left: '23px',
        right: '27px',
        bottom:'20px',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        splitNumber:9,
        axisLine:{
            lineStyle:{
                color:'#457bd5'
            }
        },
        axisTick:{
            show:true,
            alignWithLabel: true
        },
        axisLabel:{
            margin:22,
            color:'#fff'
        },
        axisPointer:{
            show:true,
            type:'none'
        },
        data: ['12-28','12-29','12-30','12-31','01-01','01-02','01-03','01-04','01-05','01-06','01-07','01-08','01-09','01-10','01-11','01-12','01-13','01-14','01-15','01-16','01-17','01-18','01-19','01-20','01-21','01-22','01-23','01-24','01-25','01-26']
    },
    yAxis: {
        type: 'value',
        name:'人',
        nameTextStyle:{
            padding:[10,0,0,30],
            fontSize:14,
            color:'#fff'
        },
        nameGap:6,
        axisLine:{
            lineStyle:{
                color:'#457bd5'
            }
        },
        axisTick:{
            show:false
        },
        axisLabel:{
            color:'#fff'
        },
        splitLine:{
            lineStyle:{
                color:'rgba(69,123,213,.73)',
                width:1,
                type:'dashed'
            }
        }
    },
    dataZoom:[{
        type:'slider',
        show: true,
        bottom: '-21px',
        borderColor:'transparent',
        lineStyle:{
            opacity:0
        },
        backgroundColor:'#0e2d70',
        fillerColor:'#014ba6',
        showDetail:false,
        start:0,
        end:30,
        handleStyle:{
            opacity:0
        },
        showDataShadow:false,
        textStyle:{
            fontSize:0
        },
        zoomLock:true
    }],
    series: [
        {
            name:'热线',
            type:'line',
            symbolSize:[9,9],
            lineStyle:{
                color:'#0498f9'
            },
            itemStyle:{
                color:'#0498f9'
            },
            data:[100,200,300,400,500,110,120,310,402,103,113,241,321,223,345,532,612,123,643,273,465,543,275,895,432,895,345,631,987,321]
        },
        {
            name:'网格',
            type:'line',
            symbolSize:[9,9],
            lineStyle:{
                color:'#43ffba'
            },
            itemStyle:{
                color:'#43ffba'
            },
            data:[400,500,110,120,310,402,103,113,241,432,895,345,631,987,321,100,200,300,400,500,103,113,241,321,223,321,534,552,678,632]
        }
    ]
};