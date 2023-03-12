
var  colorList=['#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c', '#3feed4'];
var  colorList1=['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.2)'];
var sportsIcon = {
    'a':'/asset/get/s/data-1559121268278-ozjd-lXoz.png',
    'b':'/asset/get/s/data-1559121263841-UC5w7mTJ9.png',
    'c':'/asset/get/s/data-1559121259198-sxyPSimU9.png',
    'd':'/asset/get/s/data-1559121254241-xj5JAIBzC.png',
    'e':'/asset/get/s/data-1559121249274-QxHDAdQGy.png',
    'f':'/asset/get/s/data-1559121259198-sxyPSimU9.png',
};
option = {

    silent: true,
    series: [
        
        // 主要展示层的
        {
            radius: ['0%', '75%'],
            center: ['50%', '50%'],
            type: 'sunburst',
            startAngle: 0,
            minAngle: 15,
            nodeClick:'link',
            z:1,
            label: {
                fontSize: 16,
                color: '#fff',
                normal:{
                    padding:[0,-60],
                    formatter: function(params){
                        var str = '';
                        switch(params.name){
                            case '体育技能':str = '{rate|01}'+'{nameStyle1| 体育技能 }\n{nameStyle| \xa0\xa0\xa0\xa0 aaaa }';break;
                            case '体育行为':str = '{rate|02}'+'{nameStyle1| 体育行为 }\n{nameStyle| \xa0\xa0\xa0\xa0 aaaa }';break;
                            case '体质健康':str = '{rate|03}'+'{nameStyle1| 体质健康 }\n{nameStyle| \xa0\xa0\xa0\xa0 aaaa }';break;
                            case '体育意识':str = '{rate|04}'+'{nameStyle1| 体育意识 }\n{nameStyle| \xa0\xa0\xa0\xa0 aaaa }';break;
                            case '健身体育':str = '{rate|05}'+'{nameStyle1| 健身体育 }\n{nameStyle| \xa0\xa0\xa0\xa0 aaaa }';break;
                            case '体育知识':str = '{rate|06}'+'{nameStyle1| 体育知识 }\n{nameStyle| \xa0\xa0\xa0\xa0 aaaa }';break;
                        }
                        return str
                    },
                    rich: {
                        rate: {
                            fontSize: 45,
                            color: '#fff',
                            fontWeight:'bold',
                            lineHeight:25,
                            textShadowColor:'transparent',
                        },
                        nameStyle: {
                            fontSize: 14,
                            color: '#fff',
                            align: 'center',
                            lineHeight:25,
                        },
                        nameStyle1: {
                            fontSize: 16,
                            color: '#fff',
                            align: 'center',
                            fontWeight:'bold',
                            lineHeight:25,
                        },
                        
                    }
                }
            },
            levels: [
               {},
                
                {
                    selectedMode: 'true',
                    itemStyle: {
                        color: '#fff'
                    },
                  label: {
                    rotate: 'tangential',
                    align: 'right',
                    position: 'insideRight',
                    distance: 70 ,
                  }
                }
              ],
            itemStyle: {
                borderWidth: 10,
                color:'#fff',
            },
            data: [
                   
                    {
                        value:16, 
                        name:'体质健康',
                        link:'https://worldcoffeeresearch.org/work/sensory-lexicon/',
                        target : 'blank',
                        itemStyle: {
                            
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{offset: 0, color: '#FFCA43'},
                                {offset: 1, color: '#FEC436'}]
                            )
                        },
                    },
                    
                    {
                        value:16, 
                        name:'体育意识',
                        link:'http://www.baidu.com',
                        target : 'blank',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{offset: 0, color: '#16FDA6'},
                                {offset: 1, color: '#49FDC7'}]
                            )
                        },
                    },
                    
                    {
                        value:16, 
                        name:'健身体育',
                        link:'http://www.baidu.com',
                        target : 'blank',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{offset: 0, color: '#389BFF'},
                                {offset: 1, color: '#65B3F9'}]
                            )
                        },
                    },
                    
                    {
                        value:16, 
                        name:'体育知识',
                        link:'http://www.baidu.com',
                        target : 'blank',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{offset: 0, color: '#FF6BDA'},
                                {offset: 1, color: '#FB6ED1'}]
                            )
                        },
                    },
                    
                    {
                        value:16,
                        name:'体育技能',
                        link:'http://www.baidu.com',
                        target : 'blank',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{offset: 0, color: '#FF5A4D'},
                                {offset: 1, color: '#FF7D77'}]
                            )
                        },
                    },
                    {
                        value:16,
                        name:'体育行为',
                        link:'http://www.baidu.com',
                        target : 'blank',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{offset: 0, color: '#FDA15F'},
                                {offset: 1, color: '#FF7727'}]
                            )
                        },
                    },
                    
                ],
        },
        {
            radius: ['0%', '30%'],
            center: ['50%', '50%'],
            type: 'pie',
            startAngle: 0,
            z:2,
            legendHoverLink:false,
            hoverAnimation:false,
            selectedOffset:0,
            label: {
                position: 'inner',
                fontSize: 14,
                normal:{
                    formatter: function(params){
                        var str = '';
                        switch(params.name){
                            case '1':str = '{a|}';break;
                            case '2':str = '{b|}';break;
                            case '3':str = '{c|}';break;
                            case '4':str = '{d|}';break;
                            case '5':str = '{e|}';break;
                            case '6':str = '{f|}';break;
                        }
                        return str
                    },
                    padding: [0, -20],
                    rich: {
                        a: {
                            width:30,
                            height:30,
                            lineHeight: 30,
                            backgroundColor: {
                                image: sportsIcon.a
                            },
                            align: 'center'
                        },
                        b: {
                            width:30,
                            height:30,
                            lineHeight: 30,
                            backgroundColor: {
                                image: sportsIcon.b
                            },
                            align: 'center'
                        },
                        c: {
                            width:30,
                            height:30,
                            lineHeight: 30,
                            backgroundColor: {
                                image: sportsIcon.c
                            },
                            align: 'center'
                        },
                        d: {
                            width:30,
                            height:30,
                            lineHeight: 30,
                            backgroundColor: {
                                image: sportsIcon.d
                            },
                            align: 'center'
                        },
                        e: {
                            width:30,
                            height:30,
                            lineHeight: 30,
                            backgroundColor: {
                                image: sportsIcon.e
                            },
                            align: 'center'
                        },
                        f: {
                            width:30,
                            height:30,
                            lineHeight: 30,
                            backgroundColor: {
                                image: sportsIcon.f
                            },
                            align: 'center'
                        },
                        textStyle: {
                            fontSize: 20,
                            color: "#1ab4b8",
                            align: 'left'
                        }
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList1[params.dataIndex]
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    length: -35,
                    length2: 0,
                    align: 'center'
                },
                emphasis: {
                    show: false
                },
            },
            data: [
                {
                    value:16,
                    name:'1',
                },
                {value:16, name:'2'},
                {value:16, name:'3'},
                {value:16, name:'4'},
                {value:16, name:'5'},
                {value:16, name:'6'}],
        },
        
        
    ]
};