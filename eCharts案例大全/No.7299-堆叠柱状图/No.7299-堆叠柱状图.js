option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['办理量','办结量'],
        left:'right',
        icon:'path://M0,0L0,1L1,1L1,0Z'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['无权利楼盘新建', '无权利楼盘变更', '期房转现房', '无权利楼盘注销', '期房转现房注销', '国有建设用地使用权首次登记权籍调查', '国有建设用地使用权变更登记权籍调查', '宅基地使用权首次登记权籍调查', '宅基地使用权变更登记权籍调查', '林权权籍调查首次登记', '林权权籍调查变更登记'],
        axisLabel:{
            color:'#666',
            margin:12,
            rotate:-60,
            formatter:function(params){
                if(params.length>7&&params.length<=10){
                    return params.slice(0,7) + '\n' + params.slice(7);
                }else if(params.length>10&&params.length<=14){
                    return params.slice(0,8) + '\n' + params.slice(8);
                }else if(params.length>14){
                    return params.slice(0,9) + '\n' + params.slice(9);
                }else{
                    return params
                }
            }
        },
        axisLine:{
            lineStyle:{
                color:'#EDEDED'
            }
        },
        axisTick:{
            show:false
        }
    },
    yAxis: {
        type: 'value',
        axisLabel:{
            color:'#666'
        },
        axisLine:{
            lineStyle:{
                color:'#EDEDED'
            }
        },
        axisTick:{
            show:false
        },
        splitLine:{
            show:false
        }
    },
    color:['#DFE6F3','#5A81CB'],
    series: [{
            name: '办结量',
            type: 'bar',
            stack: 'all',
            barWidth:8,
            data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 234, 290]
        },{
            name: '办理量',
            type: 'bar',
            stack: 'all',
            data: [220, 182, 191, 234, 290, 330, 310, 230, 210, 134, 90]
        }
    ]
};