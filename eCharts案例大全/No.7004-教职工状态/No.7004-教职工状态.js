option = {
     title: {
        text: '教职工状态',
        top:20,
        left:'center',
        textStyle:{
            color:'black',
            fontSize:20
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['在职', '退休','离职','试用期']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
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
             
                {value: 1000, name: '在职'},
				{value: 200, name: '退休'},
				{value: 40, name: '离职'},
                {value: 230, name: '试用期'}
            ]
        }
    ]
};