option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    grid: {left: '0',right: 100,bottom: '0%',top: '10%',containLabel: true},
    legend: {
        orient: 'vertical',
        right:'right',
        top:'middle',
        textStyle:{
            color:"#ffffff"
        },
         height:100,
        data: ['Ⅰ类','Ⅱ类','Ⅲ类','Ⅳ类','Ⅴ类','劣Ⅴ','暂无'] 
    },
	color:['#3ee72a','#dfe320', '#f77c00', '#f50000', '#930048','#780020',  '#dddddd'],
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '75%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: 'Ⅰ类'},
                {value: 310, name: 'Ⅱ类'},
                {value: 234, name: 'Ⅲ类'},
                {value: 135, name: 'Ⅳ类'},
                {value: 548, name: 'Ⅴ类'},
								 {value: 148, name: '劣Ⅴ'},
								  {value: 48, name: '暂无'}
            ]
        }
    ]
};
