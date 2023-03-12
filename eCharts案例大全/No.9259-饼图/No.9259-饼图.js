
var  colorList=['#afa3f5', '#00d488'];

option = {
    backgroundColor:"#0B1837",
    title: {
        text: '80%',
        //subtext: '总平均值(分)',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize:30,
            fontWeight:'normal',
            color: ['#333']
        },
        subtextStyle: {
            color: '#666',
            fontSize: 16
        },
    },
    grid: {
        bottom: 0,
        left: 0,
        right: '10%'
    },
    legend: {
        show:true,
        orient: 'horizontal',
        bottom: "bottom",
        textStyle: {
            color: '#fff',
            fontSize: 14,
        },
        data: ['已完成', '未完成'],
        icon: 'roundRect'
    },
    series: [
        // 主要展示层的
        {
            radius: ['25%', '51%'],
            center: ['50%', '50%'],
            type: 'pie',
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 15,
                    length2: 120,
                    lineStyle: {
                        color: '#d3d3d3'
                    },
                    align: 'right'
                },
                color: "#000",
                emphasis: {
                    show: true
                }
            },
            label:{
                normal:{
                    formatter: function(params){
                        var str = ''+'{rate|'+params.value+'}';
                       
                        return str
                    },
                    padding: [0, -50],
                    height: 40,
                    rich: {
                        
                        nameStyle: {
                            fontSize: 14,
                            color: "#555",
                            align: 'left'
                        },
                        rate: {
                            fontSize: 14,
                            color: "#1ab4b8",
                            align: 'left'
                        }
                    }
                }
            },
            data: [
                {
                    value:1685,
                    name:'已完成',
                },
                {value:235, name:'未完成'}],
        },
        // 边框的设置
        {
            radius: ['47%', '51%'],
            center: ['50%', '50%'],
            type: 'pie',
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
                },
                emphasis: {
                    show: false
                }
            },
            animation: false,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color:'rgba(250,250,250,0.5)'
                }
            },
            data: [{
                value: 1,
            }],
        }
    ]
};