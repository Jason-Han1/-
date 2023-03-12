labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        label : {
            formatter : function (params){
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline : 'top'
            }
        }
    },
}
var labelBottom = {
    normal : {
        color: '#ccc',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [40, 55];
option = {
    legend: {
        x : 'center',
        y : 'center',
        data:[
            '家庭', '学校', '职场', '宗教'
        ]
    },
    title : {
        text: '性少数受访者在日常生活环境中受到歧视的比率',
        subtext: '原始数据来自联合国统计数据',
        x: 'center'
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        width: '20%',
                        height: '30%',
                        itemStyle : {
                            normal : {
                                label : {
                                    formatter : function (params){
                                        return 'other\n' + params.value + '%\n'
                                    },
                                    textStyle: {
                                        baseline : 'middle'
                                    }
                                }
                            },
                        } 
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
   series : [
       
        {
            type : 'pie',
            center : ['30%', '30%'],
            radius : radius,
            x:'20%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:44, itemStyle : labelBottom},
                {name:'家庭', value:56,itemStyle : labelTop}
            ]
        },
        
        {
            type : 'pie',
            center : ['70%', '30%'],
            radius : radius,
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:61, itemStyle : labelBottom},
                {name:'学校', value:39,itemStyle : labelTop}
            ]
        },
       
       
        {
            type : 'pie',
            center : ['30%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'20%',    // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:79, itemStyle : labelBottom},
                {name:'职场', value:21,itemStyle : labelTop}
            ]
        },
       
        {
            type : 'pie',
            center : ['70%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:86, itemStyle : labelBottom},
                {name:'宗教', value:14,itemStyle : labelTop}
            ]
        },
       
    ]
};
