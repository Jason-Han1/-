var leiData = ['三会一课','远程教育','党费缴纳','发展党员','社会服务'];
var jdData = ['新碶','小港','大碶','柴桥','霞浦','戚家山','春晓','梅山','白峰','郭巨','区直机关','教育局','卫计局','公安局','保税局','开发区','市场','交通','农林','发改委','体育局','综合行政','广播电视','住房','商务局','供销社','分公司','邮政','水利局','粮食公司','公建中心','生态湿地']
var data1 = [100,80,30,120,90,98,99,99,110,140,89,100,80,30,120,90,98,99,99,110,140,89,100,80,30,120,90,98,99,99,110,140];
var data2 = [80,90,90,10,90,160,96,120,140,110,110,80,90,90,10,90,160,96,120,140,110,110,80,90,90,10,90,160,96,120,140,110]
var data3 = [80,90,97,120,90,97,99,98,120,110,90,80,90,97,120,90,97,99,98,120,110,90,80,90,97,120,90,97,99,98,120,110]
var data4 = [90,160,130,120,100,98,80,90,110,140,90,90,160,130,120,100,98,80,90,110,140,90,90,160,130,120,100,98,80,90,110,140]
var data5 = [100,90,80,120,90,90,80,60,170,180,120,100,90,80,120,90,90,80,60,170,180,120,100,90,80,120,90,90,80,60,170,180]
option = {
    baseOption: {
    timeline: {
        data: leiData,//第一个数据空白很重要
        axisType: 'category',
        show: true,
        autoPlay: true,
        playInterval: 1500,
    },
        backgroundColor:'#1b1b1b',
        title: {

            'text': '',
            'subtext': '',
            textStyle:{
                color:'#fff'
                },
            left:'center'
        },
        tooltip: {
            'trigger': 'axis'
        },

        calculable: true,
        grid: {
            left: '2%',
            right: '2%',
            bottom: '12%',
            top:'4%',
            containLabel: true
        },
        label:{
            normal:{
                textStyle:{
                    color:'#fff'
                    }
                }
            },
        xAxis: [{
            'type': 'category',
            data: jdData,
            nameTextStyle:{
                color:'#fff'
                },
            axisLabel:{
                rotate:45,
                textStyle:{
                    fontSize:12,
                    color:'#56617b',
                },
                interval: 0
            },
            axisLine:{
                lineStyle:{
                    color:'#56617b'
                   },
                },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#2e3547'
                }
             },
                
        }],
        yAxis: [{
            'type': 'value',
            'name': '', 
            splitNumber:8,
            nameTextStyle:{
                color:'#56617b'
                },
            axisLine:{
                lineStyle:{
                    color:'#56617b'
                   }
                },
            axisLabel: {
                formatter: '{value} '
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#56617b'
                }
             },
        }],
        series: [{
            'name': '',
            'type': 'bar',
            markLine : {
                label:{
                    normal:{
                        show:false
                        }
                    },
                lineStyle:{
                    normal:{
                        color:'red',
                        width:3
                        }
                    }, 
            },
            barWidth:'30%',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#eb4848','#eb6449','#eb7f49','#eb9a49','#ebb549',
                           '#ebd049','#ebeb49','#d0eb49','#b5eb49','#9aeb49',
                           '#7feb49','#64eb49','#49eb49','#49eb64','#49eb7f',

                           '#49eb9a','#49ebb5','#49ebd0','#49ebeb','#49d0eb',
                           '#49b5eb','#499aeb','#497feb','#4964eb','#4949eb',
                           '#6449eb','#7f49eb','#9a49eb','#b549eb','#d049eb',
                           '#eb49eb','#eb49d0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    
                }
            },
        }]
    },
    options: [ {
        title: {
            'text': ''
        },
        series: [{
            'data': data1
        }]
    }, {
        title: {
            'text': ''
        },
        series: [{
            'data': data2
        }]
    }, {
        title: {
            'text': ''
        },
        series: [{
            'data': data3
        }]
    }, {
        title: {
            'text': ''
        },
        series: [{
            'data': data4
        }]
    }, {
        title: {
            'text': ''
        },
       series: [{
            'data': data5
        }]
        }, ]
};