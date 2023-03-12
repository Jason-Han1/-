var  colorList=['#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c','#aff', "rgba(250,250,250,0.5)"];
option = {
    title: {
        text: '规划建筑总面积',
        subtext: '200',
        x: 'center',
        y: '47%',
        textStyle: {
            fontSize:20,
            fontWeight:'normal',
            color: ['#000']
        },
        subtextStyle: {
            color: '#2B93DF',
            fontSize: 16
        },
    },
    grid: {
        bottom: 150,
        left: 0,
        right: '10%'
    },
    legend: {
        show:false,
        orient: 'vertical',
        top: "middle",
        right: "5%",
        textStyle: {
            color: '#f2f2f2',
            fontSize: 25,

        },
        icon: 'roundRect'
    },
    series: [
        // 主要展示层的
        {
            radius: ['29%', '59%'],
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
                        var str = '';
                        str = params.name + "：" + params.value
                        return str
                    },
                    height: 35,
                }
            },
            data: [
                {
                    value:12.4,
                    name:'嵩明县',
                },
                {value:20.3, name:'盘龙区'},
                {value:24.7, name:'晋宁区'},
                {value:23.1, name:'官渡区'},
                {value:30.1, name:'五华区'},
                {value:15.7, name:'西山区'},
                {value:10.1, name:'呈贡区'}],
        },
        // 边框的设置
        {
            radius: ['54%', '59%'],
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