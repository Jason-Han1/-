	var data1=[
                {value:60, name:'水'},
                {value:50, name:'气'},
                {value:90, name:'voc'},
                {value:30, name:'恶臭'}
            ]

option = {
    backgroundColor: "#0a3b92",
    tooltip: {
       trigger:'item',
        show: true,
        formatter: "{a}:{c}%"
    },
    color:['#2ce9cd','#23b6ff','#eac622','#fff854'],
    legend: {
         data:[{
            name:'水', 
            value:60,
            textStyle:{
                fontSize:12,
                fontWeight:'bolder',
                color:'#cccccc'
            },
            icon:'image://./IMG/echou.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
           
        },{
            name:'气', 
            value:50,
            textStyle:{
                fontSize:12,
                fontWeight:'bolder',
                color:'#cccccc'
            },
            icon:'image://./IMG/voc.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
         
        },{
            name:'VOC', 
            value:90,
            textStyle:{
                fontSize:12,
                fontWeight:'bolder',
                color:'#cccccc'
            },
            icon:'image://./IMG/qi.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
            
        },{
           name:'恶臭', 
           value:30,
            textStyle:{
                fontSize:12,
                fontWeight:'bolder',
                color:'#cccccc'
            },
            icon:'image://./IMG/shui.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
            
        }],
        orient: 'horizontal',
        bottom:30,
        itemWidth : 20,
        itemHeight : 10,
        itemGap: 10,
        textStyle : {
                    color : '#FFF',
                    fontSize : 12,
                },
        formatter:  function(name){
                        var res = "";
                        for(var i=0;i<data1.length;i++) {
                           if (data1[i].name == name) {  
                            res=data1[i].value;
                           }
                        }
                        return name+''+res+'%';
                    }

       
    },
    series: [
     
        {
            name: '水',
            type: 'gauge',
            radius: '100%',
            startAngle: 180,
            endAngle: 0,
            splitNumber: 9, //刻度数量
            splitLine: {
                show: true,
                length: 8,
                lineStyle: {
                    width: 5,
                    color: '#0a3b92'
                }
            },
             data: [{
                value: 60,
            }],
            center: ["50%", "65%"],
              axisLine: {
                lineStyle: {
                    width:8,
                    shadowBlur: 0,
                    color: [
                        [
                            0.1, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#2ce9cd'},
                                {offset: 1, color: '#30f9d3'}
                            ]
                        )
                        ],
                        [
                            0.2, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#30f9d3'},
                                {offset: 1, color: '#2ff4d4'}
                            ]
                        )
                        ],
                        [
                            0.3, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#2ff4d4'},
                                {offset: 1, color: '#2eebd6'}
                            ]
                        )
                        ],
                        [
                            0.4, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#2eebd6'},
                                {offset: 1, color: '#2ddcda'}
                            ]
                        )
                        ],
                        [
                            0.5, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#2ddcda'},
                                {offset: 1, color: '#28ade4'}
                            ]
                        )
                        ],
                        [
                            0.6, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#28ade4'},
                                {offset: 1, color: '#2272f1'}
                            ]
                        )
                        ],
                        [
                            0.7, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#2272f1'},
                                {offset: 1, color: '#1f50f8'}
                            ]
                        )
                        ],
                        [
                            0.8, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#1f50f8'},
                                {offset: 1, color: '#1d44fb'}
                            ]
                        )
                        ],
                        [
                            0.9, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#1d44fb'},
                                {offset: 1, color: '#1d39ff'}
                            ]
                        )
                        ],
                        [
                            1, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#1d39ff'},
                                {offset: 1, color: '#1c36ff'}
                            ]
                        )
                        ]
                    ]
                }
            },
            axisLabel: {show: false},
            axisTick: {show: false},
            detail: {show: false},
            pointer: {
                show: true,
                length:'100%',
                 width: 3,
                 title:{
                     show:false
                 }
            }
        },
       
        {
            name: '气',
            type: 'gauge',
            radius: '80%',
            startAngle: 180,
            endAngle: 0,
             data: [{
                value: 50,
            }],
        	center: ["50%", "65%"],
            splitNumber: 7, //刻度数量
            splitLine: {
                show: true,
                length: 8,
                lineStyle: {
                    width: 5,
                    color: '#0a3b92'
                }
            }, 
                axisLine: {
                lineStyle: {
                    width:8,
                    shadowBlur: 0,
                    color: [
                        [
                            0.1, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#23b6ff'},
                                {offset: 1, color: '#23b3ff'}
                            ]
                        )
                        ],
                        [
                            0.2, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#23b3ff'},
                                {offset: 1, color: '#1f93e1'}
                            ]
                        )
                        ],
                        [
                            0.3, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#1f93e1'},
                                {offset: 1, color: '#2facff'}
                            ]
                        )
                        ],
                        [
                            0.4, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#2facff'},
                                {offset: 1, color: '#3ba2ff'}
                            ]
                        )
                        ],
                        [
                            0.5, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#3ba2ff'},
                                {offset: 1, color: '#5f89ff'}
                            ]
                        )
                        ],
                        [
                            0.6, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#5f89ff'},
                                {offset: 1, color: '#9367ff'}
                            ]
                        )
                        ],
                        [
                            0.7, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#9367ff'},
                                {offset: 1, color: '#a558ff'}
                            ]
                        )
                        ],
                        [
                            0.8, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#a558ff'},
                                {offset: 1, color: '#b150ff'}
                            ]
                        )
                        ],
                        [
                            0.9, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#b150ff'},
                                {offset: 1, color: '#c34bff'}
                            ]
                        )
                        ],
                        [
                            1, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#c34bff'},
                                {offset: 1, color: '#bc47ff'}
                            ]
                        )
                        ]
                    ]
                }
            },
            axisLabel: {show: false},
            axisTick: {show: false},
            detail: {show: false},
           pointer: {
                show: true,
                length:'100%',
                width: 3,
            }
        },
        
        {
            name: 'VOC',
            type: 'gauge',
            radius: '60%',
            startAngle: 180,
            endAngle: 0,
             data: [{
                value: 90,
            }],
        	center: ["50%", "65%"],
            splitNumber: 9, //刻度数量
            splitLine: {
                show: true,
                length: 8,
                lineStyle: {
                    width: 5,
                    color: '#0a3b92'
                }
            }, 
                axisLine: {
                lineStyle: {
                    width:8,
                    shadowBlur: 0,
                    color: [
                        [
                            0.1, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#eac622'},
                                {offset: 1, color: '#ffd21a'}
                            ]
                        )
                        ],
                        [
                            0.2, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#ffd21a'},
                                {offset: 1, color: '#ffcf1c'}
                            ]
                        )
                        ],
                        [
                            0.3, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#ffcf1c'},
                                {offset: 1, color: '#ffc621'}
                            ]
                        )
                        ],
                        [
                            0.4, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#ffc621'},
                                {offset: 1, color: '#e9a435'}
                            ]
                        )
                        ],
                        [
                            0.5, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#e9a435'},
                                {offset: 1, color: '#ff9539'}
                            ]
                        )
                        ],
                        [
                            0.6, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#ff9539'},
                                {offset: 1, color: '#ff6c4c'}
                            ]
                        )
                        ],
                        [
                            0.7, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#ff6c4c'},
                                {offset: 1, color: '#fb4e5f'}
                            ]
                        )
                        ],
                        [
                            0.8, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#fb4e5f'},
                                {offset: 1, color: '#ff376b'}
                            ]
                        )
                        ],
                        [
                            0.9, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#ff376b'},
                                {offset: 1, color: '#dc3071'}
                            ]
                        )
                        ],
                        [
                            1, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#dc3071'},
                                {offset: 1, color: '#ff2d70'}
                            ]
                        )
                        ]
                    ]
                }
            },
            axisLabel: {show: false},
            axisTick: {show: false},
            detail: {show: false},
           pointer: {
                show: true,
                length:'100%',
                width: 3,
            }
        },  
        
        {
            name: '恶臭',
            type: 'gauge',
            radius: '40%',
            startAngle: 180,
            endAngle: 0,
             data: [{
                value: 30,
            }],
            center: ["50%", "65%"],
            splitNumber: 7, //刻度数量
            splitLine: {
                show: true,
                length: 8,
                lineStyle: {
                    width: 5,
                    color: '#0a3b92'
                }
            }, 
                axisLine: {
                lineStyle: {
                    width:8,
                    shadowBlur: 0,
                    color: [
                        [
                            0.1, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#fff854'},
                                {offset: 1, color: '#fff256'}
                            ]
                        )
                        ],
                        [
                            0.2, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#fff256'},
                                {offset: 1, color: '#feeb56'}
                            ]
                        )
                        ],
                        [
                            0.3, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#feeb56'},
                                {offset: 1, color: '#fee754'}
                            ]
                        )
                        ],
                        [
                            0.4, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#fee754'},
                                {offset: 1, color: '#fdde4e'}
                            ]
                        )
                        ],
                        [
                            0.5, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#fdde4e'},
                                {offset: 1, color: '#fdd74b'}
                            ]
                        )
                        ],
                        [
                            0.6, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#fdd74b'},
                                {offset: 1, color: '#ffbb39'}
                            ]
                        )
                        ],
                        [
                            0.7, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#ffbb39'},
                                {offset: 1, color: '#fa9428'}
                            ]
                        )
                        ],
                        [
                            0.8, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#fa9428'},
                                {offset: 1, color: '#f98922'}
                            ]
                        )
                        ],
                        [
                            0.9, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#f98922'},
                                {offset: 1, color: '#f98520'}
                            ]
                        )
                        ],
                        [
                            1, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#f98520'},
                                {offset: 1, color: '#ff8515'}
                            ]
                        )
                        ]
                    ]
                }
            },
            axisLabel: {show: false},
            axisTick: {show: false},
            detail: {show: false},
            pointer: {
                show: true,
                length:'100%',
                width: 3,
            }
        },
    ]
};

