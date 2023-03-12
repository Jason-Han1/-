option = {
        backgroundColor:'rgba(15,25,56,0.6)',
        title:{
            show:true,
            left:15,
            top:15,
            text:'风向玫瑰图',
            textStyle:{
                color:"#fff",
                fontSize:12,
                fontFamily:'Microsoft YaHei'
            }
        },
        tooltip : {
            trigger: 'series',
            axisPointer : {            
                type : 'shadow'        
            },
        },
        grid:{
            top:'15%'
        },
        angleAxis: {
            type: 'category',
            data:["N","NNE","NE","ENE",'E',"ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],
            startAngle:90,
            splitNumber: 16,
            boundaryGap:false,
            axisLine: { 
                lineStyle: {
                    color:'#22d8ff',
                    type:'dashed'
                },
            },
            splitLine: { 
                show: true,
                lineStyle:{
                    color:'#22d8ff',
                    type:'dashed'
                }
            },
            axisPointer:{
                show:true,
            }
        },
        radiusAxis: {
            type: 'value',
            splitNumber:5,
            min:0,
            max:100,
            silent:false,
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#22d8ff',
                    type:'dashed'
                }
            },
            splitLine: {
                show: true,
                lineStyle:{
                    color:'#22d8ff',
                    type:'dashed'
                }
            },
            axisLabel:{
                formatter: '{value}%'
            }
        },  
        polar: {
            center: ['50%', '50%'],
            radius:'80%'
        },
        animation:false,
        series: [{
        　　coordinateSystem: 'polar',
        　　name: '风向频率(%)',
        　　type: 'bar',
        　　showSymbol: false,
        　　data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
            itemStyle:{
                color:'#22d8ff',
                borderColor:'#22d8ff',
        　　}
        }]
    };