// 图片修改自用户ovilia1024的南丁格尔图的正确使用场景一图

var yourdata = [1,2,3,4,5,6,7,8,9,10,10,14,13,11,12,11,12,9,14,12,4,5,6,3];
var data=[];
var labelData = [];
for (var i = 0; i < 24; ++i) {
    data.push({
        value: yourdata[i],
        name: i + ':00'
    });
    labelData.push({
        value: 1,
        name: i + ':00'
    });
}

option = {
    title: {
        text: '基础能量消耗',
        left: '50%',
        textAlign: 'center',
        top: '20%'
    },
    tooltip:{
        formatter:function(params){
            return params.name+" "+params.value+'焦耳'
        }
    },
    color: ['#22C3AA'],
    series: [{
        type: 'pie',
        data: data,
        roseType: 'area',
        itemStyle: {
            normal: {
                color: 'white',
                borderColor: '#22C3AA'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        label: {
            normal: {
                show: false
            }
        }
    }, {
        type: 'pie',
        data: labelData,
        radius: ['75%', '100%'],
        zlevel: -2,
        itemStyle: {
            normal: {
                color: '#22C3AA',
                borderColor: 'white'
            }
        },
        label: {
            normal: {
                position: 'inside'
            }
        }
    }]
};
