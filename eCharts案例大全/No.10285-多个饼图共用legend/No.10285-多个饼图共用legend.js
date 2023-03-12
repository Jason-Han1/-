option = {
    title : [{
        text: '自动生成',
        x: '24%',
        y: '25%',
        subtext:'总计213',
        textAlign: 'center'
    }, {
        text: '人工确认',
        x: '74%',
        y: '25%',
        subtext:'总计213',
        textAlign: 'center'
    }],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        bottom:100,
        width:400,
        itemGap:20,
        // data:['旅行时间信息','交通路况信息','气象管理信息','道口管控信息',
        // '事故管控信息','施工管控信息']
    },
    series : [
        {
            name:'自动生成',
            type:'pie',
            radius : [0, 80],
            center : ['25%', '50%'],
            data:[
                {value:10, name:'旅行时间信息'},
                {value:5, name:'交通路况信息'},
                {value:15, name:'气象管理信息'},
                {value:25, name:'道口管控信息'},
                {value:20, name:'事故管控信息'},
                {value:35, name:'施工管控信息'}
            ]
        },
        {
            name:'人工确认',
            type:'pie',
            radius : [0, 80],
            center : ['75%', '50%'],
            data:[
                {value:10, name:'旅行时间信息'},
                {value:5, name:'交通路况信息'},
                {value:15, name:'气象管理信息'},
                {value:25, name:'道口管控信息'},
                {value:20, name:'事故管控信息'},
                {value:35, name:'施工管控信息'}
            ]
        }
    ]
};
