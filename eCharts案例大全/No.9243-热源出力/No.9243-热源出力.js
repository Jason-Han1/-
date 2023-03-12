option = {
     backgroundColor: "#CCCCFF",
    color: ['#ef4136'],
    title: {
        
         text: '热源出力',
        subtext:'345',
        left: 'center',
        top:'46.3%',
        textStyle: {
            color:'#8A2BE2',
            fontWeight:'normal',
            fontSize: 18
        },
        subtextStyle:{
            color:'#c63c26',
            fontWeight:'normal',
            fontSize: 16,
            lineHeight:8
        }
    },
    tooltip: {},
  
    radar: {
         name: {
            textStyle: {
                color: '#6633FF',
                borderRadius: 3,
                padding: [2, 5]
            }
        },
        // shape: 'circle', //圆形边框
        indicator: [{
                name: '二电一期',
                max: 650
            },
            {
                name: '二电二期',
                max: 650
            },
            {
                name: '二电三期',
                max: 650
            },
            {
                name: '二电南线',
                max: 650
            },
            {
                name: '大唐一期',
                max: 650
            },
            {
                name: '大唐二期',
                max: 650
            }
        ]
    },
    series: [{
        name: '热源出力',
        type: 'radar',
        label: {
							normal: {
								show: true,
								position: "top",
									formatter: (params) => {
										let value = `${params.value}%`;								
										let text = `${value}`;
										return text;
									},

							}
						},
        data: [{
                value: [430, 300, 480, 450, 500, 390],
                areaStyle: {
                    normal: {
                        color: '#90d7ec'
                    },
                },
                name: '热源出力'
            }
        ]
    }]
};