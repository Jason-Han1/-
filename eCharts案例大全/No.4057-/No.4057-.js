var outname = ['吉林','辽宁','广东','黑龙江','内蒙古','安徽','河南','云南','新疆','海南','河北','台湾','青海','西藏','江苏'];
var outvalue = [107,49,20,11,8,6,6,5,4,2,2,2,2,2,2] ;
var outdata = [];
for (var i = 0; i < outname.length; i++) {
    outdata.push({
        name: outname[i],
        value: outvalue[i]
    })
}

option = {
    tooltip: {
        show: true,
        formatter: function(params) {
            if(params.value){
                return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value + '个&nbsp;&nbsp;';
            }else{
                return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;0个&nbsp;&nbsp;';
            }
        }
    },
    visualMap: {
        min: 0,
        max: 100,
        itemWidth: 10,
        itemHeight: 89,
        left: '20',
        bottom: '10',
        text: ['高', '低'],
        textStyle: {
            color: '#666666',
            fontSize: 13,
        },
        inRange: {
            color: ['#D9EEFF','#2F9BFF']
        },
        outOfRange: {
            show: false,
        }
    },

    geo: {
        map: 'china',
        show: true,
        roam: false,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                show: false
            }
        }
    },
    series: [{
        type: 'map',
        map: 'china',
        aspectScale: 0.75,
        //zoom:1.1,
        label: {
            normal: {
                formatter: function(para) {
                    return '{name|' + para.name + '}'
                },
                rich: {
                    cnNum: {
                        fontSize: 11,
                        color: '#333333',
                        align: 'center',
                    },
                    name: {
                        fontSize: 11,
                        color: '#333333',
                        align: 'center',
                        lineHeight: 20,
                    },
                },
                //formatter: '{b}',
                color: '#333333',
                show: true
            },
            emphasis: {
                show: false,
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#D9EEFF',
                borderColor: '#fff',
                borderWidth: 1,
            },
            emphasis: {
                areaColor: '#FFAE00',
            }
        },
        data: outdata
    }]
};
