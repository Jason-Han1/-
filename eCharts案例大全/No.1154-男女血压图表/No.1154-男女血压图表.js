
option = {
    backgroundColor:'#001c91',
    grid: {
        left: '3%',
        right: '5%',
        bottom: '5%',
        top:'15%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor:"rgba(50,50,50,0.7)",            //标题背景色
        borderWidth:0,
        padding:10,
        formatter :function(params){
            console.log(params)
            var name = params[0].name + '<br>';
            var barName2 = params[0].marker+'收缩压:' + params[0].value +'mmHg, ';
            var barName = '舒张压:' + params[1].value +'mmHg<br>';
            var lineName = params[2].marker+'收缩压:' + params[2].value +'mmHg, ';
            var santName = '舒张压:' + params[3].value +'mmHg<br>';
            return name + barName2 + barName + lineName+santName
        },
        textStyle: {
            color: "#fff",
            fontSize:'13'
        }
    },
    legend: {
        data: [{
            name:"收缩压(男)",
            icon:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAICAYAAADjoT9jAAAAkElEQVQokaXSwQnCQBCF4W8lBaQJsQXPYgV6SCuCd7GUXEwFFmAJEZsIWMB6yAoiYbPoD3PYN/tmmGGCNipgiTO26X3FAY/Y5I1VQfEVbqg/tB02WOOeMy8KGpy+ir+pUy5L0MaiHf1KyQR/USHM/LkYdz5FFxv7nLlkgiOGCX1IuSwlDXrjtXR4puiS1s+ZX8gUGBXgDJGMAAAAAElFTkSuQmCC"
        },{
            name:"舒张压(男)",
            icon:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAICAYAAADjoT9jAAAApklEQVQokaXSwQnCQBQE0BfxKJImxBY8ixXoIa0I3sVS9JICxAIsIWITEb2vh6yiEuOCA3v4M8z8nWUz2yABI2wwi/MBS5xD0W3sJ4SPcUT+ws0xxQSnLnMvYcH6I/yBPGqdyGxDQPbChafW4ILhF/8NAwjFW4Zs1+SkNPgLfe+31zIfNG/ehn0oLNqER6OUBivULXwdtU6kLKg0v6XENZ4yctUv8x3dxR+I2KAVAgAAAABJRU5ErkJggg=="
        },{
            name:"收缩压(女)",
            icon:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAICAYAAADjoT9jAAAAlUlEQVQokaWSMQqDQBBF3waLLb1E8ArWQbCPlwmklxxGt97CA3gEJZcQUlgmhRMQkXFIHmyxf/bPZ5Zxc1lh4Aw8gELuHXADnj42qjExNM+AHkhX2hW4ADkwauaTIaDeNP+SSk3FzWX1NoT8jGWCv0gAd/CmZfnzPYKPjbollgnuwLSjT1JTsQQMLNsSgJecINpwZP4ArGgYFYxQSi8AAAAASUVORK5CYII="
        },{
            name:"舒张压(女)",
            icon:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAICAYAAADjoT9jAAAArklEQVQokaWSQQrCMBBFX6SLLER6CfEKrkWoa+thBPfiYULXRXoAj1DxEi0KdRcXnUCUGAN+CGH+8P/kh1FDUZKAOXAC1lI3wB646dpEhVmC+QK4ALnHbYEVsASuMfEkYcDxw9whl14UaihKCyiPs64ndw/MvugfwBRA18b34LnZWUhL8Bcy3l9PoG4Y/zyEs65NcEtcopQEB6AL8J30okgZ0DJuSwXc5VTCtb/EL106IJ6ZnOSFAAAAAElFTkSuQmCC"
        }],
        itemWidth: 24,
        itemHeight: 8,
        itemGap: 20,
        right: "2%",
        top:"5%",
        textStyle: {
            color: "#fff",
            fontSize: 13
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap:false,//坐标轴两边留白
        data: ['0-10岁', '11-20岁', '21-40岁','41-60','>60'],
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
            margin:20,
            textStyle: {
                color: '#EBEBEB',
                fontSize: 12
            }
        },
        axisTick:{
            show: false,
        },
        axisLine:{//坐标轴轴线相关设置
            lineStyle:{
                color:'#cbcace'
            }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false,
        }
    },
    yAxis: [
        {
            name: '单位：mmHg',
            nameTextStyle: {
                color: '#fff'
            },
            minInterval: 1,
            type: 'value',
            axisLabel: {
                margin:15,
                textStyle: {
                    color: '#fff',
                    fontSize: 13,
                }
            },
            axisLine:{
                show: true,
                lineStyle: {
                    color: '#fff',
                }
            },
            axisTick:{
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#fff',
                    opacity:0.2
                }
            }

        }
    ],
    series: [
        {
            name: '收缩压(男)',
            symbol: 'circle',
            symbolSize: 8,
            type: 'line',
            itemStyle: {
                normal: {
                    color:'#00a0e9',
                    lineStyle:{
                        width:2//设置线条粗细
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0.4,
                            color: 'rgba(0,168,255,0.0)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(0,160,233,0.3)'
                        }])
                    }
                }
            },
            data: [100, 100, 300, 120, 150]
        },{
            name: '舒张压(男)',
            symbol: 'circle',
            symbolSize: 8,
            type: 'line',
            itemStyle: {
                normal: {
                    color:'#00a0e9',
                    lineStyle:{
                        width:2,//设置线条粗细
                        type:'dotted' 
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0.4,
                            color: 'rgba(0,168,255,0.0)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(0,160,233,0.3)'
                        }])
                    }
                }
            },
            data: [70, 80, 90, 85, 75]
        },{
            name: '收缩压(女)',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color:'#ce5a60',
                    lineStyle:{
                        width:2,//设置线条粗细
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0.4,
                            color: 'rgba(247,71,83,0.0)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(247,71,83,0.3)'
                        }])
                    }
                }
            },
            data: [120, 140, 110, 180, 170]
        },{
            name: '舒张压(女)',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            legendHoverLink: false,
            itemStyle: {
                normal: {
                    color:'#ce5a60',
                    lineStyle:{
                        width:2,//设置线条粗细
                        type:'dotted' 
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0.4,
                            color: 'rgba(247,71,83,0.0)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(247,71,83,0.3)'
                        }])
                    }
                }
            },
            data: [150, 120, 170, 140, 120]
        }
        
    ]
};