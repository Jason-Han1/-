option = {
    color:["#19AEDB","#5DB75C","#F58625","#13C2C2"],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        right:'5%',
        align:'left',
        top:'middle',
        textStyle: {
            color:'#8C8C8C'
        },
        data:['种类1','种类2'
        ,'种类3','种类4']
    },
    series: [
        {
            name:'demo',
            type:'pie',
            center: ['40%', '50%'],
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'outter',
                    formatter: "{d}%"
                }
               
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'种类1'},
                {value:310, name:'种类2'},
                {value:234, name:'种类3'},
                {value:1548, name:'种类4'}
            ]
        }
    ]
};
