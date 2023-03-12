option = {
    title : {
        text: '',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8','rose9','rose10','rose11']
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
            name:'重点人员分布',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            data:[
                {value:32, name:'重点国家入沪人数:32'},
                {value:5, name:'维族外国人入沪人数:5'},
                {value:15, name:'144过境免签入沪人数:15'},
                {value:25, name:'邮轮免签入沪人数:25'},
                {value:20, name:'记者类签证入沪人数:20'},
                {value:12, name:'“不干净”人员入沪人数:12'}
               
            ]
        }
    ]
};
