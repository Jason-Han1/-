option = {
		 color: ['#a7324a','#ffd400','#45b97c'],
		title: {

			text: '热源出力',
			subtext: '345',
			left: 'center',
			top: '46.3%',
			textStyle: {
				color: '#fcaf17',
				fontWeight: 'normal',
				fontSize: 18
			},
			subtextStyle: {
				color: '#f47a55',
				fontWeight: 'normal',
				fontSize: 16,
				lineHeight: 8
			}
		},
		  legend: {
  	       show: true,
	        icon: "circle",
	        right: '1%',
	        top: 'center',
	        orient: "vertical",
	       //  orient: "horizontal",  
//	        itemGap: 30,
	        
        data: ['热源实供', '热源应供','热源实供率']
    },
		tooltip: {},
		// legend: {
		//     data: ['预算分配']
		// },
		radar: {
			  name: {
            textStyle: {
                color: '#3D91F7',
                borderRadius: 3,
                padding: [1, 3]
            }
        },
			indicator: [{
					name: '二电一期',
					max: 100
				},
				{
					name: '二电二期',
					max: 100
				},
				{
					name: '二电三期',
					max: 100
				},
				{
					name: '二电南线',
					max: 100
				},
				{
					name: '大唐一期',
					max: 100
				},
				{
					name: '大唐二期',
					max: 100
				}
			]
		},
		series: [{
			name: '热源出力',
			type: 'radar',
			// areaStyle: {normal: {}},
			// label: {
			//     show: true
			// },
			label: {
				normal: {
					
					show: true,
					position: "top",
				
					formatter: (params) => {
						if(params.name=="热源实供率")
						{
							let value = `${params.value}%`;
						let text = `${value}`;
						return text;
						}else{
							let value = ``;
						let text = ``;
						return text;
							
						}
					},
                    //  formatter: "{c} %",
                     

				}
			},
			data: [{
				value: [103, 130, 111, 120, 98, 102],
				name:'热源实供'
			},
			{
				value: [113, 131, 151, 90, 93, 92],
				 name:'热源应供'
			},
				{
				value: [93, 131, 111, 120, 98, 102],
				name:'热源实供率'
			},
			]
		}]
	};