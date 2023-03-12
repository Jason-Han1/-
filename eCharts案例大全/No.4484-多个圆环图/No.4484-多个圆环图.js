var data = [{
    name: 'matchRate',
    value: 170
}, {
    name: 'Strawberries',
    value: 68
}];

option = {
    color:['#78beff','#efefef'],
    title: [{
        text: 'Pie label alignTo'
    }, {
        subtext: '项目符合率',
        left: '16.67%',
        top: '75%',
        textAlign: 'center',
        subtextStyle:{
            fontFamily:'Microsoft YaHei',
            color:'#666'
        }
    }, {
        subtext: '批号20200703符合率',
        left: '50%',
        top: '75%',
        textAlign: 'center',
        subtextStyle:{
            fontFamily:'Microsoft YaHei',
            color:'#666'
        }
    }, {
        subtext: '批号20201116符合率',
        left: '83.33%',
        top: '75%',
        textAlign: 'center',
        subtextStyle:{
            fontFamily:'Microsoft YaHei',
            color:'#666'
        }
    }],
    series: [{
        type: 'pie',
        radius: ['25%','50%'],
        center: ['50%', '50%'],
        data: data,
        animation: false,
        label: {
            position: 'center',
            color:'#333',
            fontSize:'18px',
            formatter:function(params){
                if(params.name == 'matchRate'){
                    return params.value + '%';
                }else{
                    return ''
                }
            },
            alignTo: 'none',
            bleedMargin: 5
        },
        left: 0,
        right: '66.6667%',
        top: 0,
        bottom: 0
    }, {
        type: 'pie',
        radius: ['25%','50%'],
        center: ['50%', '50%'],
        data: data,
        animation: false,
        label: {
            position: 'center',
            color:'#333',
            fontSize:'18px',
            formatter:function(params){
                if(params.name == 'matchRate'){
                    return params.value + '%';
                }else{
                    return ''
                }
            },
            alignTo: 'none',
            bleedMargin: 5
        },
        left: '33.3333%',
        right: '33.3333%',
        top: 0,
        bottom: 0
    }, {
        type: 'pie',
        radius: ['25%','50%'],
        center: ['50%', '50%'],
        data: data,
        animation: false,
        label: {
            position: 'center',
            color:'#333',
            fontSize:'18px',
            formatter:function(params){
                if(params.name == 'matchRate'){
                    return params.value + '%';
                }else{
                    return ''
                }
            },
            alignTo: 'none',
            bleedMargin: 5
        },
        left: '66.6667%',
        right: 0,
        top: 0,
        bottom: 0
    }]
};
