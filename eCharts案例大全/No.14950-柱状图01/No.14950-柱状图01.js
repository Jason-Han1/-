var dataAxis=["","","","","","",""]
config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 50 ,
}
        var labelOption = {
            normal: {
                rotate: config.rotate,
                align: config.align,
                verticalAlign: config.verticalAlign,
                position: config.position,
                distance: config.distance
            }
        
    
};


var labelOption = {
    normal: {
        show: true,
        position: config.position,
        distance: config.distance,
        align: config.align,
        verticalAlign: config.verticalAlign,
        rotate: config.rotate,
        formatter: '{a}  {b}',
        fontSize: 16,
        rich: {
            name: {
                textBorderColor: 'white'
            }
        }
    }
};

option = {
    backgroundColor:'#05142B',
  tooltip : {
        trigger: 'axis'
    },
    
    xAxis: [
        {
            type: 'category',
              data: dataAxis,
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
            axisTick: {show: false},
             splitLine: {show:false},
            axisLine: {
            show: true
        },
        },
        
    ],
    yAxis: [
        {
             type: 'value',
             axisLabel: {
            formatter: ''
        },
            axisLine: {
            show: true
        },
        axisTick: {show: false},
        }
    ],
    series: [
       {
            name: '母蟹',
            type: 'bar',
            stack:  '母',
            
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [
                {value:2000,
            name: '2.0以下',
           
            label:labelOption,
        },
       {value:2000,
            name: '2.0',
            label:labelOption,
            
        },
        {value:2000,
            name: '2.5',
             label:labelOption,
        },
      {value:2000,
            name: '3.0',
            label:labelOption,
        },
       {value:2000,
            name: '3.5',
            label:labelOption,
        },
        {value:2000,
            name: '4.0',
            label:labelOption,
        },
       {value:2000,
            name: '4.0以上',
            label:labelOption,
        },],
            
        },
        {
            name: '公蟹',
            type: 'bar',
            stack:  '公',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
        data: [{value:2000,
            name: '2.5以下',
            label:labelOption,
        },
       {value:2000,
            name: '2.5',
           label:labelOption,
        },
        {value:2000,
            name: '3.0',
           label:labelOption,
        },
      {value:2000,
            name: '3.5',
            label:labelOption,
        },
       {value:2000,
            name: '4.0',
            label:labelOption,
        },
        {value:2000,
            name: '4.5',
            label:labelOption,
        },
       {value:2000,
            name: '4.5以上',
            label:labelOption,
        },
      ],
            
        },
        {
            name: '母蟹',
            type: 'bar',
       
            
            stack: '母',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                    ,
                    color:"white",
                    formatter:'{c}'
                }
            },
       
            data: [
                
                 {value:12688,
                 
                   
             itemStyle:{
				  normal:{
					color:'#9370DB ',
					opacity: 0.6
				  }
					  }
				  },
				   {value:26121,
				    name: '2.0',
             itemStyle:{
				  normal:{
					color:'#800080',
					opacity: 0.6 
				  }
					  }
				  },
				   {value:27521,
				    name: '2.5',
             itemStyle:{
				  normal:{
					color:'	#A51550' ,
					opacity: 0.6
				  }
					  }
				  },
				   {value:26121,
				    name: '3.0',
             itemStyle:{
				  normal:{
					color:'orange',
					opacity: 0.6 
				  }
					  }
				  },
				   {value:26121,
				    name: '3.5',
             itemStyle:{
				  normal:{
					color:'#9370DB',
					opacity: 0.6 
				  }
					  }
				  },
				   {value:26121,
				    name: '3.5',
             itemStyle:{
				  normal:{
					color:'#800080',
					opacity: 0.6 
				  }
					  }
				  },
				   {value:17774,
				    name: '3.5以上',
             itemStyle:{
				  normal:{
					color:'#A51550',
					opacity: 0.6
				  }
					  }
				  },
               ]
        },
        {
            name: '公蟹',
            type: 'bar',
            stack: '公',
            
            label: {
                normal: {
                    show: true,
                    position: 'top'
                    ,
                    color:"white",
                    formatter:'{c}'
                }
            },
            data: [{value:15215,
             name: '2.0以下',
             itemStyle:{
				  normal:{
					color:'#9370DB',
					opacity: 0.6
					
				  }
					  }
				  },
				  {value:23434,
				   name: '2.0',
             itemStyle:{
				  normal:{
					color:'#800080',
					opacity: 0.6 
				  }
					  }
				  },
				  {value:22445,
				   name: '2.5',
             itemStyle:{
				  normal:{
					color:'	#A51550' ,
					opacity: 0.6
				  } 
					  }
				  },
				  {value:28434,
				   name: '3.0',
             itemStyle:{
				  normal:{
					color:'orange',
					opacity: 0.6 
				  }
					  }
				  },
				  {value:23434,
				   name: '3.5',
             itemStyle:{
				  normal:{
					color:'#9370DB' ,
					opacity: 0.6
				  }
					  }
				  },
				  {value:23434,
				   name: '4.0',
             itemStyle:{
				  normal:{
					color:'#800080' ,
					opacity: 0.6
				  }
					  }
				  },{value:17878,
				   name: '4.0以上',
             itemStyle:{
				  normal:{
					color:'#A51550' ,
					opacity: 0.6
				  }
					  }
				  }
				  ]
        },
       
    ]
};