var piebg = {
    name: '相关背景',
    type: 'pie',
    labelLine: {
        normal: {
            show: false
        }
    },
    data: [{
        value: 0
    }],
    avoidLabelOverlap: false,
    animation: false
};

var option = {
    backgroundColor: '#032548',
    legend: {
        orient: 'vertical',
        top:'10',
        left:'10',
        itemWidth: 20,
        itemHeight: 6,
        itemGap: 10,
        padding: [0, 38],
        textStyle: {
          color: '#6a9cd5',
          fontSize: 14,
        },
        data: [
          {name: '直达',icon: 'rec'},
          {name: '邮件营销', icon: 'rec'},
          {name: '联盟广告',icon: 'rec'},
          {name: '数据',icon: 'rec'},
          {name: '操作',icon: 'rec'},
        ]
      },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['70%', '80%'],
            color:['#0eb35b','#42f0f6','#017ce0'],
            labelLine:{normal:{show:false}},
			label:{normal:{show:false}},
				itemStyle: {
				   normal: {
				     borderWidth: 5,
				     borderColor: '#0d1112',
				   },
				  emphasis: {
				      borderWidth: 0,
				      shadowBlur: 10,
				      shadowOffsetX: 0,
				      shadowColor: 'rgba(0, 0, 0, 0.5)'
				 }
			},
            data: [
                {value: 335,name: '直达'},
                {value: 310,name: '邮件营销'},
                {value: 234,name: '联盟广告'},
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            color:['#fc2424','#3b1d88'],
            labelLine:{normal:{show:false}},
			label:{normal:{show:false}},
				itemStyle: {
				   normal: {
				     borderWidth: 4,
				     borderColor: '#0d1112',
				   },
				   emphasis: {
				      borderWidth: 0,
				      shadowBlur: 10,
				      shadowOffsetX: 0,
				      shadowColor: 'rgba(0, 0, 0, 0.5)'
				 }
			},
            data: [
                {value: 335,name: '数据'},
                {value: 310,name: '操作'},
            ]
        },
        Object.assign({}, piebg, {
            radius: ['0%', '100%'],
            itemStyle: {
                normal: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                                offset: 0,
                                color: 'rgba(0,0,0,0.5)' // 0% 处的颜色
                            },
                            {
                                offset: 0.9,
                                color: 'rgba(0,0,0,0.23)' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(160,247,255,0.23)' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    }
                },
            },
            z: -10,
        }),

    ]
};