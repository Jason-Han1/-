var labelimg = "/asset/get/s/data-1575019476644-Rak5eXt1.png";
const colorList = ['#47A2FF ', '#53C8D1', '#59CB74', '#FBD444', '#7F6AAD', '#585247']

var color = ["#534EE1","#ECD64F","#00E4F0","#44D16D","#124E91","#BDC414","#C8CCA5"],
option = {
    backgroundColor:'#fff',
    grid: {
        left: '3%',
        right: '4%',
        bottom:'5%',
        top: 45,
        containLabel: true
    },
    legend: {
        data: ['互联网','新闻','法律','教师','翻译','会计','金融'],
        top: "92%",
        icon: "circle",
        textStyle: {
            color: "#0DCAD2"
        }
    },
    tooltip: {
        position: "top",
    },
    xAxis: {
        type: "category",
        data: ['互联网','新闻','法律','教师','翻译','会计','金融'],
        axisLabel:{          //坐标轴字体颜色
        	textStyle:{
                color: '#a6afbe'
            }
        },
        axisLine:{
            lineStyle:{
                color:'#eee',
            }
        }, 
        splitLine:{    //网格
        	show: false,

        }
    },
    yAxis : {
        type : 'value',
        axisLabel:{        //坐标轴字体颜色
        	textStyle:{
                color: '#a6afbe'
            }
        },
        axisLine:{
        	show:false,
            lineStyle:{
                color:'#eee',
            }
        }, 
        splitLine:{    //网格
        	show: true,
        	lineStyle:{
        		color:'#eee'
        	}
        }
    },
    series: [
        {
            type: "pictorialBar",
            name: "数量",
            stack: "a",
            symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            data: [{
                    name: "",
                    value: 868,
                    itemStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,  
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: "rgba(45,217,193,1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(45,217,193,.4)"
                                    }
                                ],
                                global: false
                            }
                        }
                    }
                },
                {
                    name: "",
                    value: 608,
                    itemStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: "rgba(31,168,248,1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(31,168,248,.4)"
                                    }
                                ],
                                global: false
                            }
                        }
                    }
                },
                {
                    name: "",
                    value: 808,
                    itemStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: "rgba(28,215,246,1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(28,215,246,.4)"
                                    }
                                ],
                                global: false
                            }
                        }
                    }
                },
                {
                    name: "",
                    value: 368,
                    itemStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: "rgba(31,123,250,1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(31,123,250,.4)"
                                    }
                                ],
                                global: false
                            }
                        }
                    }
                },
                {
                    name: "",
                    value: 267,
                    itemStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: "rgba(83,78,225,1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(83,78,225,.4)"
                                    }
                                ],
                                global: false
                            }
                        }
                    }
                },
                {
                    name: "",
                    value: 368,
                    itemStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: "rgba(55,82,231,1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(55,82,231,.4)"
                                    }
                                ],
                                global: false
                            }
                        }
                    }
                },
                {
                    name: "",
                    value: 492,
                    itemStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: "rgba(78,85,254,1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(78,85,254,.4)"
                                    }
                                ],
                                global: false
                            }
                        }
                    }
                }
            ],
        }
    ]
};
