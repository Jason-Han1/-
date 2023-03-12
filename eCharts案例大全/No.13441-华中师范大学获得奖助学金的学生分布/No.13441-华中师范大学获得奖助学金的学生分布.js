option = {
    title : {
        text: '2016-2017获得奖助学金的学生分布',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['生存型困难','生活型苦难','发展型困难','非贫困','未定级']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [

        {
            name:'面积模式',
            type:'pie',
            radius : [30, 120],
            center : ['50%', '50%'],
            roseType : 'area',
            data:[
                {value:677, name:'生存型困难'},
                {value:1601, name:'生活型困难'},
                {value:917, name:'发展型困难'},
                {value:177, name:'非贫困'},
                {value:1492, name:'未定级'},

            ]
        }
    ]
};
