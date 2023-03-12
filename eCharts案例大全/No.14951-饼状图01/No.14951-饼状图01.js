option = {
    backgroundColor:'#05142B',
    tooltip: {
        trigger: 'item',
         formatter: "{b}:{c}({d}%)"
    },
   graphic:{
	 
		    type: 'text',
            left: 'center', // 相对父元素居中
            top: 'middle',  // 相对父元素居中
            style: {
               
                fill: 'white',
                text: [
                    '红标产地 3\n蓝标产地 22'
                ],
				
		 font: '40px Microsoft YaHei'
		   }
	   },
    series: [
	   {
           
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            
        },
	
        {
                        type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
             label: {
                normal: {
                    show: false,
                    position: 'center'
                },
               
            },
      
            labelLine: {
                normal: {
                    show: false,
		
                }
            },
            data:[
                {value:22,
				name:'蓝标产地',
				itemStyle:{
			normal:{color:'#00FFFF'}
			}	},
                {value:3,	
					name:'红标产地',
				itemStyle:{
			normal:{color:'#CC3333'}
			}
				}
				
            ]
        }
    ]
};