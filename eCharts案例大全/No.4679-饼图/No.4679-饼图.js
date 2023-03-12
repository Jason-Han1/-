option = {
    color: ['#FF6464','#22CFE0','#9E93E7','#1E68BA','#53C96D','#FF894E','#FFC545','#E27F3D','#1890FF'],
    tooltip : {
        show: false,
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show : true,
       
    },
      legend: {
        icon: 'circle',
        orient: 'vertical',
        right:'10%',
        align:'left',
        top:'middle',
        textStyle: {
            color:'#333'
        },
    },
    series : [
        {
            name:'业务警种',
            type:'pie',
            radius : [0, '50%'],
            label: {
                formatter: '{c}%',
                padding: [0 , -30, 10, -30],
            },
            labelLine: {
                normal: {
                    length: 10,
                    length2: 30,
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 0.5
            },
            data:[
                {value:56, name:'启用'},
                {value:41, name:'停用'},
                {value:32, name:'故障'},
                {value:23, name:'丢失'},
                {value:21, name:'送检'},
                {value:18, name:'维护中'},
                {value:15, name:'检定到期'},
                {value:13, name:'报废'},
                {value:10, name:'封存'}
            ]
        }
    ]
};
