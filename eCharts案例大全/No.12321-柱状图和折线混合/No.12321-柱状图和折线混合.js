var array = ['80%','100%','90%','60%','50%','75%','85%'];
option = {
    title:{
        text:'二次识别正确率',
        left: '5%',
        textStyle:{
            fontSize: 14,
            color: '#3D4D65'
        }
    },
    tooltip:{
        trigger:'item',
        axisPointer:{
             type:'cross',
        },
        //添加换行方法1
        // formatter:function(params){
        //     return '10-20'+'\n'+'jdkfjksdjfk';
        //     //console.log(params)
        // },
        // extraCssText:'width:220px; white-space:pre-wrap',
        //添加换行方法2
        formatter:function(params){
            return '10-20'+'<br>'+'jdkfjksdjfk';
        }
    },
    legend: {
        textStyle: {
            color:'#8C8C8C'
        },
        data:['AI识别正确率','AI识别正确数量（个）']
    },
    xAxis: {
        type: 'category',
        axisLabel:{
            color:'#000'
        },
        axisLine: {
            symbol:['none', 'arrow'],
            lineStyle:{
                color:'#BFBFBF'
            }
        },    
        data: ['10-20', '10-21', '10-22', '10-23', '10-24', '10-25', '10-26']
    },
    yAxis: {
        type: 'value',
        axisTick:{//去掉刻度显示
            show: false
        },
        axisLine: {//去掉y轴显示
            show : false
        },
        splitLine:{//虚线配置
            lineStyle: {
                color: '#e9e9e9',
                type: 'solid' //dashed,dotted
            }
        }
    },
    series: [{
        name:'AI识别正确数量（个）',
        data: [120, 200, 150, 80, 70, 110, 130],
        barWidth:'20%',
        itemStyle:{
            color:'#19AEDB'
        },
        barMaxHeight:300,
        type: 'bar'
    },{
        name:'AI识别正确率',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'line',
        itemStyle:{
            color:'#5DB75C'
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter:function(params){
                    //console.log(params);
                    return array[params.dataIndex]; 
                }
            }
        },
    }]
};
