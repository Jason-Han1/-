option = {
    title : {
        text: '生源地',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
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
            radius : [20, 130],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:10, name:'上海市'},
                {value:24, name:'云南省'},
                {value:94, name:'内蒙古'},
                {value:2, name:'北京市'},
                {value:30, name:'四川省'},
                {value:64, name:'天津市'},
                {value:16, name:'宁夏'},
                {value:77, name:'安徽省'},
                {value:116, name:'山东省'},
                {value:103, name:'山西省'},
                {value:12, name:'广东省'},
                {value:36, name:'广西'},
                {value:47, name:'新疆'},
                {value:28, name:'江苏省'},
                {value:86, name:'江西省'},
                {value:161, name:'河北省'},
                {value:164, name:'河南省'},
                {value:28, name:'浙江省'},
                {value:26, name:'海南省'},
                {value:23, name:'湖北省'},
                {value:31, name:'湖南省'},
                {value:30, name:'甘肃省'},
                {value:24, name:'福建省'},
                {value:6, name:'西藏'},
                {value:50, name:'贵州省'},
                {value:100, name:'辽宁省'},
                {value:19, name:'重庆市'},
                {value:22, name:'陕西省'},
                {value:16, name:'青海省'},
                {value:145, name:'黑龙江省'}
            ]
        }
    ]
};
