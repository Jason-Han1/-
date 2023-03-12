var colors = [ '#81d0d7'];
var data2=[917,889,1264];
option= {
    backgroundColor:'#fff',
    title : {
        text: '餐饮服务经营者',
        x:'center',
        
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        align: 'left',
        left: '45%',
        top:'23%',
        
        data:['优秀','良好','一般']
    },
    series: [
        {
            name:'',
            type:'pie',
            radius: ['24%', '32%'],
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#c3b32c','#3d860d',
                           '#16afd3','#55a4ee','#d063f9'
                        ];
                        return colorList[params.dataIndex]
                    },/*
                    shadowBlur: 20,*/
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                normal: {
                    formatter: '{b|{b}：}{per|{d}%}  ',
                    backgroundColor: '#eee',
                    rich: {
                        
                        b: {
                            fontSize: 12,
                            lineHeight: 33
                        },
                        per: {
                            fontSize: 16,
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:917, name:'优秀'},
                {value:889, name:'良好'},
                {value:1264, name:'一般'},,
            ]
        }
    ]
};
