option = {
   
    color: ['#24A4EB','#FFCD26','#EB5C5A'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show : true,
       
    },
      legend: {
        type:"scroll",
        orient: 'vertical',
        left:'5%',
        align:'left',
        top:'middle',
        itemWidth: 20,
        itemHeight: 8,
        textStyle: {
            color:'#000',
            fontSize: 12
        },
        data: ['子类规划','生态环境保护','社会发展']
    },
    series : [
        {
            name:'审计问题趋势情况',
            type:'pie',
            radius : ['50%', '70%'],
            hoverAnimation: false,
            clockwise: false,
            labelLine: {
                length: 20,
                length2: 120,
        },
        label: {
                formatter:'{b}：{d}%',
                padding: [0 , -120, 25, -100],
        },
            data:[
                {value:20, name:'子类规划'},
                {value:30, name:'生态环境保护'},
                {value:40, name:'社会发展'},
            ]
        },
        {
            name: '',
            type: 'pie',
            radius : ['72%', '72.5%'],
            itemStyle: {
                color: "#3A9DFF"
            },
            hoverAnimation: false,
            cursor: 'default',
            tooltip: {
                show: false
            },
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            data: [{value: 1,name: 'a'}]
        }
    ]
};
