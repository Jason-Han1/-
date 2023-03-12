option = {
    title : {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
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
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:40, name:'产品设计'},
                {value:127, name:'人力资源管理'},
                {value:156, name:'物理学'},
                {value:150, name:'体育教育'},
                {value:40, name:'俄语'},
                {value:120, name:'音乐学'},
                {value:40, name:'日语'},
                {value:40, name:'朝鲜语'},
                {value:85, name:'动画'},
                {value:156, name:'化学'},
                {value:50, name:'法学'},
              
                {value:84, name:'历史学'},
               
                {value:124, name:'地理科学'},
                {value:175, name:'学前教育'},
                {value:130, name:'小学教育'},
                {value:35, name:'市场营销'},
                {value:120, name:'广编'},
                {value:30, name:'德语'},
                {value:36, name:'心理学'},
                {value:86, name:'思想政治教育'},
                {value:40, name:'政治学与行政学'},
                {value:40, name:'教育学'},
                {value:60, name:'数媒'},
                {value:135, name:'数学与应用数学'},
                {value:125, name:'新闻学'},
                {value:86, name:'旅游管理'},
                {value:35, name:'光电信息科学与工程'},
                {value:36, name:'公共事业管理'},
                {value:30, name:'民族学'},
                {value:70, name:'汉语国际教育'},
                 {value:130, name:'汉语言文学'},
                {value:75, name:'国际经济与贸易'},
               
                {value:128, name:'环境科学'},
                {value:80, name:'环境设计'},
                {value:145, name:'生物技术'},
                {value:105, name:'电子信息工程'},
                {value:51, name:'社会工作'},
                {value:175, name:'绘画'},
                {value:35, name:'给排水科学与工程'},
                {value:45, name:'统计学'},
                {value:126, name:'编辑'},
                {value:185, name:'英语'},
                {value:80, name:'视觉传达设计'},
                {value:97, name:'计算机科学与技术'},
                {value:111, name:'财务管理'},
                 {value:114, name:'软件工程'},
                {value:54, name:'运动训练'},
                {value:35, name:'通信工程'},
                {value:108, name:'金融学'},
                {value:45, name:'信息管理与信息系统'}
               
            ]
        }
    ]
};
