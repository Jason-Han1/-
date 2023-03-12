var data = [{
        value: 50,
        name: '直接访问'
    },
    {
        value: 20,
        name: '邮件营销'
    },
    {
        value: 15,
        name: '联盟广告'
    },
    {
        value: 5,
        name: '视频广告'
    },
    {
        value: 5,
        name: '搜索引擎'
    },
    {
        value: 5,
        name: '搜索引擎1'
    }  
];

var center = ['30%', '50%'];
var radius = {
    '内': ['54%', '60%'],
    'pie': ['60%', '70%'],
    '中': ['70%', '76%'],
    '外': ['70%', '85%'],
}

var text = '总任务数'
var num =  1234
var size = 32
// 称量字的中间位置
var titleLeft = size - text.length * 2 + '%'
var numLeft = 40 - num.length * 2 + '%'


var legenddata = data.map(item => item.name)
option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    title: [{
        text: text,
        y: '40%',
        x: titleLeft,
        textStyle: {
          color: '#000',
          fontSize: 30
        }
    },{
        text: num,
        y: '50%',
        x: '25%',
        textStyle: {
          color: '#000',
          fontSize: 30
        }
    }],
    legend: {
            type:"plain",
        
        orient: 'vertical',
        // x: 'right',
        // y: 'center',
        left: '65%',
        top: 'center',
        icon: "circle",
        data: ['直接访问', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '搜索引擎1'],
        formatter: function(name) {
            var oa = option.series[0].data;
            var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
            for (var i = 0; i < option.series[0].data.length; i++) {
                if (name == oa[i].name) {
                                          return '{name|' + name + '}{rate|' + (oa[i].value / num * 100).toFixed(2) + '%}{value|' +oa[i].value + '}'

                    
                    // return  name + '     ' + (oa[i].value / num * 100).toFixed(2) + '%' + '     ' + oa[i].value 
                }
            }
        },
        width: 150,
        height:400,
        padding: [15,20,15,20],
        borderColor: 'rgba(0,0,0,0.08)',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowBlur: 20,
        backgroundColor: '#fff',
        textStyle: {
            rich: {
                name: {
                    fontSize: 17,
                    fontWeight: 550,
                    fontFamily: '-webkit-pictograph',
                    width: 130,
                    height: 50,
                    // padding: [4,0,4,0]
                },
                rate: {
                    fontSize: 17,
                    fontFamily: '-webkit-pictograph',
                    fontWeight: 550,
                    height: 50,
                    width: 80
                    // padding: [0,0,0,0]
                    
                },
                value: {
                    fontSize: 17,
                    fontWeight: 550,
                    fontFamily: '-webkit-pictograph',
                    height: 50,
                    width: 60
                    // padding: [0,0,0,0]
                    
                }
            }
        }        

    },

        
        
        // legend: {
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     align: 'left',
        //     itemHeight: 20,
        //     itemWidth: 20,
        //     textStyle: {
        //         color: '#afb5b7'
        //     },
        //     data: legenddata
        // },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: radius['pie'],
        center: center,
        avoidLabelOverlap: false,
        color: ['#4c84ff', '#5b6378', '#ffc400', '#29cb97', '#ff86ad', '#815eff'],
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: '{b}\n\n{c}'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }, {
        name: '背景中圆环',
        type: 'pie',
        radius: radius['中'],
        center: center,
        color: '#f4f5f6',
        silent: true,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 100
        }]
    }, {
        name: '背景内圆环',
        type: 'pie',
        radius: radius['内'],
        center: center,
        color: 'rgba(0,0,0,.1)',
        silent: true,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 100
        }]
    }]
};

