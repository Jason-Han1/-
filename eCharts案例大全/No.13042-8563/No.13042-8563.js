 option = { 
		      color:['#440e1e','#2b041f','#3c041f','#320420','#21051e'],
	          title:{
		   text:'8563',
		   subtext:'资产总量',
		   textStyle:{ //主标题
			  color:'#3E4956',
			  fontWeight:'bold',
			  fontSize:50,
			   fontFamily:'Haettenschweiler',
		   },
		   subtextStyle:{//副标题
			  color:'#3E4956',
			   fontSize:12,
		   },
		   itemGap:12,//主副标题之间的距离
		     top:'36%',
			 left:'1%',
		 },
	   //       tooltip: {
				//   trigger: 'item',
				//   formatter: "{b}: {c}"
			 // },
			  calculable: true,
			  
			 series: [{
				  name: '资产接入',
				  type: 'treemap',
				  width:'48%',
		          height:'50%',
				  left:'20%',
				  //right:'30%',
				  roam: false, //是否开启拖拽漫游（移动和缩放）
				  nodeClick: false,//点击节点后的行为,false无反应 
				  label: {
					  normal: {
						  textStyle: {
						      fontWeight: 'bold',
						      fontSize: '15',
						      color: '#e5ddb8',
						  }
					  }
				  },
				  itemStyle: {
					  normal: {
						  label: {
							  show: true,
							  formatter: "{b}"
							  
						  },
						borderWidth: 2,
					borderColor: '#ffffff',
					  },
					 
				  },
				  data: [
					  { value: 25,name: '对公银行',}, 
					  { value: 70, name: '个人网银\n43%',}, 
					  { value: 25, name: '直销银行\n43%',}, 
					  { value: 25, name:'瑶瑶缴费\n43%', }, 
					  { value: 10, name: '手机银行',}
				  ]
			  }]
		  };