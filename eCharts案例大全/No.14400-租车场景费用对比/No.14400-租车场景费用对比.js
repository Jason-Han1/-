option = {
    title : {
        text: '租车场景费用对比',
        subtext: '替代出行方式对比',
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
            radius : [30, 330],
            center : ['50%', '50%'],
            roseType : 'area',
            data:[
                {value:1919, name:'场景：1小时以内单次出行 53.88% \n平均：15.6元 30.36分钟 7.78公里 \n 对标：出租车，行程费用35元'},
                {value:742, name:'场景：1-2小时多次出行 20.83% \n平均：40.6元 85.73分钟 18.38公里 \n 对标：出租车，行程费用80元'},
                {value:861, name:'场景：2-12小时短途出游 24.17% \n平均：95.8元 238.45分钟 33.65公里 \n 对标：租车，行程费用130元'},
                {value:40, name:'场景：整天租用 1.12% \n平均：267.5元 23.28小时 55.78公里 \n 对标：租车，行程费用200元'},
 
            ]
        }
    ]
};
