myChart.showLoading();
$.get(ROOT_PATH + '/data/asset/data/flare.json', function (data) {
    myChart.hideLoading();
var data = {
    "name": "一级",
    symbol: 'image://http://louruyue.notbad.cn/uploadimage/pic_201251143747.jpg',
    symbolSize:'45',
    symbolKeepAspect:true,
     itemStyle:{
            borderWidth:4,
            opacity:'0.9'
    } ,
    "children": [
        {
            "name": "二级1",
            value:'30',
            itemStyle:{ color: '#63d389'} ,
            lineStyle:{color: '#63d389'},
            "children": [
                {
                    "name": "三级1-1", 
                    itemStyle:{ color: '#63d389'} ,
                    lineStyle:{ color: '#63d389'},
                     "value": 4116
                    
                }
            ]
            
        },
        {
            "name": "二级2",
            itemStyle:{ color: '#7a84f5'} ,
            lineStyle:{color: '#7a84f5'},
            "children": [
                {"name": "三级2-1", "value": 2105,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-2", "value": 1316,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-3", "value": 3151,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-4", "value": 3770,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-5", "value": 2435,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-6", "value": 4839,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-7", "value": 2105,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-8", "value": 1316,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-9", "value": 3151,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-10", "value": 3770,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-11", "value": 2105,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-12", "value": 1316,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-13", "value": 3151,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-14", "value": 3770,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-15", "value": 2435,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}},
                {"name": "三级2-16", "value": 4839,itemStyle:{ color: '#7a84f5'} ,lineStyle:{color: '#7a84f5'}}
           ]
        },
        {
            "name": "三级2-3",
             itemStyle:{ color: '#fa9d29'} ,
             lineStyle:{color: '#fa9d29'} ,
            "children": [
                {"name": "三级3-1", "value": 8833,itemStyle:{ color: '#fa9d29'} ,lineStyle:{color: '#fa9d29'}}
           ]
        }
    ]
};


    myChart.setOption(option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series:[
            {
                type: 'tree',

                data: [data],

                left: '2%',
                right: '2%',
                top: '8%',
                bottom: '20%',

                symbol: 'emptyCircle',

                orient: 'vertical',

                expandAndCollapse: true,

                label: {
                    position: 'top',
                    rotate: -90,
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 9
                },

                leaves: {
                    label: {
                        position: 'bottom',
                        rotate: -90,
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                animationDurationUpdate: 750
            }
        ]
    });
});
