option = {            
    title: {               //【标题】
        text: 'Awesome Chart',
        //subtext:'abc',
        textStyle:{
            fontSize:30
        },
        //top:'center',
        left:'center',   //标题居中
        //textAlign:'right',
        
    },
    grid:[{         //图表显示范围（绘图区，可以添加多张表格,放到一个列表里面即可）
        bottom:'50%',
        containLabel:false       //grid 区域是否包含坐标轴的刻度标签
    }],  
    xAxis: [{                      //【x轴】
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }],
    yAxis: [{}],
    series: [{
        type: 'bar',
        data:[220, 182, 191, 234, 290, 330, 310]
    },{
        type:'pie',
        data:[220, 182, 191, 234, 290, 330, 310],
        center:['50%','80%'],
        radius:'30%'
    }]
};