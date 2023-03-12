option = {
    title : {
        text: 'e-FAI Total work time',
        subtext: '2016/11/01-2016/12/01',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['SQE','IQC','Procurement','PE','QA','R&D','Program','Procurement_Mgr']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'Work Time',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'SQE'},
                {value:310, name:'Procurement'},
                {value:234, name:'PE'},
                {value:135, name:'QA'},
		{value:100, name:'R&D'},
		{value:100, name:'Program'},
		{value:100, name:'Procurement_Mgr'},
                {value:1548, name:'IQC'}
            ]
        }
    ]
};
                    