data = [
        {name:'item1',value:557,rate:28.09,n3rate:28.09,changes:'100PP',itemStyle: {color:'#75DF74'}},
        {name:'item2',value:423,rate:21.33,n3rate:28.09,changes:'100PP',itemStyle: {color:'#1290F3'}},
        {name:'item3',value:258,rate:13.01,n3rate:28.09,changes:'100PP',itemStyle: {color:'#16D1FF'}},
        {name:'item4',value:241,rate:12.15,n3rate:28.09,changes:'100PP',itemStyle: {color:'#8674EE'}},
        {name:'item5',value:210,rate:10.59,n3rate:28.09,changes:'100PP',itemStyle: {color:'#19C59A'}},
        {name:'item6',value:130,rate:6.56,n3rate:28.09,changes:'100PP',itemStyle: {color:'#FEAC5C'}}
        ];

option = {
        roseType: true,
        textStyle: {
            fontFamily: 'Microsoft YaHei',
        },
        tooltip: {
            backgroundColor:'rgba(0,0,0,0.7)',
            textStyle:{
                fontSize:16
            }
        },
        title: {
            text: '{header| 用户数}'+'{header| 占比}'+'{header| N-3月占比}'+'{header| 变化情况}',
            textAlign:"left",
            left: '53%',
            top: '15%',
            textStyle:{
                color : '#000',
                rich: {
                    header: {
                        width: 100,
                        color: '#000',
                        fontSize: 16
                    }
                }
            }
        },
        legend: {
            type:"scroll",
            orient: 'vertical',
            left:'40%',
            top:'20%',
            align:'left',
            selectedMode:false,
            height:250,
            textStyle: {
                color:'#8C8C8C',
                rich: {
                    name: {
                        width: 115,
                        color: '#000',
                        fontSize: 16
                    },
                    value: {
                        width: 100,
                        color: '#000',
                        fontSize: 16
                    },
                    rate: {
                        width: 100,
                        color: '#000',
                        fontSize: 16
                    },
                    n3rate: {
                        width: 100,
                        color: '#000',
                        fontSize: 16
                    },
                    changes: {
                        width: 100,
                        color: '#000',
                        fontSize: 16
                    }
                }
            },
            formatter: function(name){
                for(var i=0;i<data.length;i++){
                    if(name==data[i].name){
                        return  '{name| '+name+'}' +
                            '{value| '+data[i].value+'万户}' +
                            '{rate| '+data[i].rate+'%}' +
                            '{n3rate| '+data[i].n3rate+'%}' +
                            '{changes| '+data[i].changes+'}'
                    }
                }
            },
            data: data
        },
        series : [
            {
                type: 'pie',
                z: 10,
                // startAngle: 160,
                radius : ['10%', '40%'],
                center: ['20%', '30%'],
                hoverOffset: 10,
                label: {
                    show: true,
                    position: 'inside',
                    color: '#000',
                    formatter: '{d}%',
                    fontSize: 14
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: data
            }
        ]
    };