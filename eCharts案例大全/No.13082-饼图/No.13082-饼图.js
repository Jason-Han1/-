var option = {
    backgroundColor: 'black',
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable: true,
    series : [
        {
            type: 'pie',
            radius:['58%', '55%'],
            center: ['50%', '60%'],
            labelLine: {
                normal: {
                    show: 0,
                }
            },
            itemStyle: {
                normal: {
                    color: function(a) {
                        if (a.data == 2) {
                            return '#2bc7a7';
                        }
                        if (a.data == 1) {
                            return 'rgba(0,0,0, 0)';
                        }
                    },
                },
            },
            data: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
        },
        {
            name: '',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:100, name:'空闲'},
                {value:250, name:'正在充电'},
                {value:450, name:'预约充电'},
                {value:200, name:'故障'}
            ],
            itemStyle: {
                 normal : {
                    label:{            //饼图图形上的文本标签
                        show:true,
                        position:'inner', //标签的位置
                        textStyle : {
                            fontWeight : 300 ,
                            fontSize : 12    //文字的字体大小
                        },
                        formatter:'{d}%'
                    },
                    labelLine : {
                        show : false   //隐藏标示线
                    }
                }
            }
        },
        {
            name: '',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:100, name:'空闲'},
                {value:250, name:'正在充电'},
                {value:450, name:'预约充电'},
                {value:200, name:'故障'}
            ],
            itemStyle : {
                normal : {
                    borderWidth: 4,
                    borderColor: '#2C33A7',
                    label:{            //饼图图形上的文本标签
                        show : true,
                         textStyle : {
                            fontWeight : 300 ,
                            fontSize : 12,
                            color: '#fff'//文字的字体大小
                        },
                    },
                    labelLine : {
                        show : true,//隐藏标示线
                        lineStyle : {
                            color: '#2bc7a7',
                            width : 3,
                            type : 'dotted'
                        }
                    }
                 }
            }
        }
    ],
    color: [
        '#fbc047',
        '#5cfdc7',
        '#859cff',
        '#00ffff',
        '#c8efff'
    ]
};