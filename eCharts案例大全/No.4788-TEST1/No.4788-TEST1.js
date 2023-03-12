var data0 = [20, 120, 70, 43, 116, 80, 45];
var data1 = [320, 302, 391, 243, 333, 280, 280];
var data2 = [250, 352, 201, 203, 283, 550, 260];
var data3 = [310, 312, 401, 423, 313, 420, 190];
var colorList = ["#97D7F3","#1f73aa","#004A78"]
option = {
    backgroundColor:'#121c52',
    legend: {
           data: ['REM', '浅睡', '深睡'],
           textStyle:{
               color:'#ffffff'
           }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        name: '时间',
        nameTextStyle:{
            // color:'red'
        },
        splitLine:{
            show:false
        },
        axisLabel:{
            formatter:function(index,item){
                console.log(index,item);
                if(item == "0"){
                   return "22:00" 
                }else if(item == "1"){
                    return "00:00" 
                }else if(item == "2"){
                    return "02:00" 
                }else if(item == "3"){
                    return "04:00" 
                }else if(item == "4"){
                    return "06:00" 
                }else if(item == "5"){
                    return "07:00" 
                }else{
                    return "09:00" 
                }
            },
            show:true
        }
        // axisLine:{
        //     show:false
        // },

    },
    yAxis: {
        type: 'category',
        data: ['12月01','12月02','12月03','12月04','12月05'],
        splitLine:{
            show:false
        },
        axisLine:{
           show:false
        },
        axisTick:{
             show:false
        },
        axisLabel:{
            color:'#ffffff'
        }
    },
    series: [
        {
            name: 'Z门店',
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            itemStyle:{
                normal: {
                    color: 'rgba(0,0,0,0)',
                    barBorderRadius: [20, 20, 20, 20],
                }
            },
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            z:  10,
            data: data0
        },
        {
            name: 'REM',
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            itemStyle:{
                normal: {
                    color: colorList[0],
                    barBorderRadius: [20, 0, 0, 20],
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            z:  10,
            data: data1
        },
        {
            name: '浅睡',
            type: 'bar',
            stack: '总量',
            itemStyle:{
                normal: {
                    color: colorList[1],
                    // shadowBlur: [0, 0, 0, 10],
                    // shadowColor: '#ebe806',
                    barBorderRadius: [0, 0, 0, 0],
                    // shadowOffsetX: -20,
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            z: 5,
            data: data2
        },
        {
            name: '深睡',
            type: 'bar',
            stack: '总量',
            itemStyle:{
                normal: {
                    color: colorList[2],
                    barBorderRadius: [0, 20, 20, 0],
                    // shadowBlur: [0, 0, 0, 10],
                    // shadowColor: '#ff5624',
                    // shadowOffsetX: -20,
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: data3
        }
    ]
};