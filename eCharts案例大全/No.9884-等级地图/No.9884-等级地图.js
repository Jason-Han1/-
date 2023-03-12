xAxisList = ['','level1','level2','level3','level4','level5','']
yAxisList = ['','grade1','grade2','grade3','grade4','grade5',''];
option = {
    grid: {
        right: '15%',
        containLabel: true
    },
    xAxis: {
        name: 'level',
        nameLocation:'end',
        splitLine:{
            lineStyle:{
                type:'dashed'
            }
        },
        axisLine:{
            lineStyle:{
                color:'#7EA3D2'
            }
        },
        axisLabel:{
            showMinLabel:false,
            showMaxLabel:false,
            color:'#5A5B5C',
            formatter:(data,index) => {
                return xAxisList[index]
            }
        },
        axisTick:{
            inside:true  
        },
        max: 3,
        min: -3,
        type: 'value'
    },
    yAxis: {
        name: 'grade',
        splitLine:{
            lineStyle:{
                type:'dashed'
            }
        },
        axisLine:{
            lineStyle:{
                color:'#7EA3D2'
            }
        },
        axisLabel:{
            showMinLabel:false,
            showMaxLabel:false,
            color:'#5A5B5C',
            formatter:(data,index) => {
                return yAxisList[index]
            }
        },
        axisTick:{
            inside:true  
        },
        max: 3,
        min: -3,
        type: 'value'
    },
    series:[{
        type:'scatter',
        symbolSize:data => {return data[2]*10},
        label:{
            show:true,
            formatter:'{@[2]}'
        },
        data:[[1,1,3],[2,1,2],[-1,1,7]]
    }]
}