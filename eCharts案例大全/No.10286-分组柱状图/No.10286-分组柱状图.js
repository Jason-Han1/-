var source={交调数据:{交通事故:1,车辆故障:2,道口操作:3},
Link数据:{百度地图:1,高德地图:2},
交通数据流:{车辆流量:1,车道平均速度:2,车道占有率:3,车辆排队长度:4},
气象:{风速:1,风向:2,能见度:3,降水量:2,气压:3},
}
//获取x轴data数据
function getXaxisData(data){
    var xdata=[] 
    for(let i in data){
        for(let j in data[i]){
            xdata.push(j);
        }
        xdata.push('')
    }
    return xdata;
}

//获取series数据
function getSeries(data){
    var series=[]
    let xdata=getXaxisData(data);
    for(let i in data){
        let copyxdata=xdata.slice();
        xdata.map((val,index)=>{
            for(let j in data[i]){
                if(val===j){
                    copyxdata[index]=data[i][j]
                }
            }
        })
        copyxdata=copyxdata.map(val=>{
            if(typeof val==='number'){
                return val
            }else{
                return 0
            }
        })
        
        series.push({
            name:i,
            type:'bar',
            stack: "数据源",
            data:copyxdata
        })
    }
    return series;
}

option = {
    grid: {
        left: '7%',
        right: '5%',
        top: '25%',
        bottom: '19%',
    },
    legend:{
        show:true,
    },
    xAxis: {
        axisLabel: {
            margin: 8,
            interval:0 ,
            formatter:function(val){
                return val.split("").join("\n");
            }
        },
        type: 'category',
        // xdata: ['交通事故', '车辆故障','道口操作', '',
        // '百度地图', '高德地图', '',
        // '车辆流量'，'车道平均速度','车道占有率','车辆排队长度','',
        // '风速','风向','能见度','降水量','气压','']
        data:getXaxisData(source)
    },
    yAxis: {
        type: 'value'
    },
    series:getSeries(source)
    // series: [{
    //     name:'交调数据',
    //     type:'bar',
    //     stack: "数据源",
    //     data:[1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
    // },
    // {
    //     name:'Link数据',
    //     type:'bar',
    //     stack: "数据源",
    //     data:  [0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
    // },
    // {
    //     name:'交通数据流',
    //     type:'bar',
    //     stack: "数据源",
    //     data: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0]
    // },
    // {
    //     name:'气象',
    //     type:'bar',
    //     stack: "数据源",
    //     data:  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 2, 3, 0]
    // }]
};
