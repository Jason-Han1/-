	var colors=['#1785ef','#20c8ff','#ff9921','#f36119'];
	var txtArr=['新项目','老客户','老项目','新客户']
    var index=-1;

option = {
    backgroundColor: '#fff',
    color:colors,
    calculable: true,
    polar: {
        center: ['50%', '50%'],
        radius: '90%'
    },
    radiusAxis: {
        // 极坐标半径刻度
        
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show:false
        },
        splitLine:{
            // lineStyle:{
            //     type: 'solid',
            //     color:'#01eced'
            // }
        },
    },
    angleAxis: {
        min: 0,
        max: 360,
        interval: 90,
        startAngle: 90,
        z:5,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                width: 2,
                type: 'solid',
                color:'#dee0ea'
            },
        },
        axisLine: {
            show:false
        },
        axisTick: {
            show: false
        },
        axisLabel:{
            show:true,
            fontSize:14,
            formatter:function(e){
                index++;
               return txtArr[index];
            }
        },
    
    },
   
    series: [{
        name: '客户-新签项目数',
        type: 'pie',
        clockwise: false,
        radius: ['0', '80%'],
        center: ['50%', '50%'],
        padding:10,
        roseType: 'area',
        hoverOffset:0,
        label: {
            show:true,
            rotate:0,
            padding:20,
            fontSize:14,
            color:'#16161d',
            formatter:'{c}'
        },
        labelLine:{
            show:false,
            length:0,
            length2:0
        },
       
        data: [{
            value: 70,
            name: 'rose1'
        }, {
            value: 55,
            name: 'rose2'
        }, {
            value: 15,
            name: 'rose3'
        }, {
            value: 25,
            name: 'rose4'
        }]
    }] 
};