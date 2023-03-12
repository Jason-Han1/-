var dataAll = [389, 259, 262, 324, 232, 176, 196, 214, 133, 370];
	var option = {
	    
	    backgroundColor: '#0f375f',
	    
	    title:[
	        {text:"各渠道投诉占比",x: '2%', y: '1%',textStyle:{color:"#fff",fontSize:"14"}}
	    ],
	    grid: [
	        {x: '50%', y: '7%', width: '45%', height: '90%'},
	    ],
	    series: [
	        {
	            name: '各渠道投诉占比',
	            type: 'pie',
	            radius : '30%',
	            center: ['22%', '25%'],
	            color:['#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97'],
	            data:[
	                {value:335, name:'客服电话'},
	                {value:310, name:'奥迪官网'},
	                {value:234, name:'媒体曝光'},
	                {value:135, name:'质检总局'},
	                {value:105, name:'其他'},
	            ],
	            labelLine:{normal:{show:true}},
	            itemStyle: {normal: {label:{ show: true,  formatter: '{b} \n ({d}%)', textStyle:{color:'#B1B9D3'}} },},
	        }
	    ]
	};