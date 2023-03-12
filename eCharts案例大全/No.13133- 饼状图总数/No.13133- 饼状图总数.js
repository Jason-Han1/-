option = {
    backgroundColor: 'white',
    title : {
      text: '总数',
      subtext: '33333',
      subtextStyle: {
    	fontSize : 20,
    	padding: 20,
    	color: '#84aef5'
     },
        x: 'center',
        y: '54%',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['饮用水20%','废气10%','废水30%','其他10%','土壤60%']
    },
    color : ['#3AA7F9','#F56C7C','#FD9A36','#EBE028','#31CE65','#20DACD','#D671F5','#F430E8','#8A31FB'],
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : ['35%','55%'],
            center: ['50%', '60%'],
            data:[
                {value:335, name:'饮用水20%'},
                {value:310, name:'废气10%'},
                {value:234, name:'废水30%'},
                {value:135, name:'其他10%'},
                {value:1548, name:'土壤60%'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};