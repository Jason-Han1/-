option = {
    backgroundColor:'#fff',
    title: {
            text: '企业对学历的最低要求情况----数据来自智联招聘',
            left:'center',
            top:'2%'
        },
    tooltip: {
        formatter:function(param){
            console.log(param)
            var len = param.data;
            var tip = len[len.length-1]+'<br>';
            var radar = ['不限', '大专', '本科', '硕士', '博士'];
            for(var i=0;i<len.length-1;i++){
                tip += radar[i] + ':' + len[i] + '<br>'
            }
            return tip;
        }
    },
    legend: {
        data: ['预算分配'],
        selectedMode:false,
        show:false
    },
    radar: {
        shape: 'circle',//图形形状'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
         nameGap : 20, // 图中工艺等字距离图的距离
        //splitNumber: 8, // 网格线的个数
        indicator: [
           { name: '不限', max: 5600000},
           { name: '大专', max: 5600000},
           { name: '本科', max: 5600000},
           { name: '硕士', max: 5600000},
           { name: '博士', max: 5600000},
        ]
    },
    dataset: {
        source: [
                ['不限', '大专', '本科', '硕士', '博士'],
                [3235507,5590240,  2999865, 103130, 9091,'预算分配'],
                ]
        },
    series: [{
        type: 'radar',radarIndex:0,
        name:'预算分配',
        label:{show:true}
    }]
};