option = {
            backgroundColor:"#000",
            legend:{
                data: ["内资企业", "外商投资企业","个体工商户","农业专业合作社"],
                orient: 'horizontal',
                x:'21%',      //可设定图例在左、右、居中
                y:'left',  //可设定图例在上、下、居中
                align:'left',
                top:95,
                icon:"rect",  //设置显示为矩形
                textStyle: { //图例文字的样式
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 19,
                    letterSpacing: 0,
                    fontFamily:'SourceHanSansCN-Regular'
                    },
                itemWidth: 13,//设置图表的大小
                itemHeight:5,
                itemGap: 20,  //图例之间的距离
            },
            grid: {
                left:'4%',
                right: '4%',
                bottom: '5%',
                top:140,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data:["2014年", "2015年", "2016年", "2017年", "2018年", "2019年"],
                axisTick:{   //去除刻度线
                    show:false
                }, 
                splitLine:{   //去除刻度线
                    show:false
                },
                axisLine:{  //轴线样式
                            lineStyle:{
                                color:'#666cb4',
                                width:1,//这里是为了突出显示加上的
                            }
                    },
                axisLabel:{
                    show: true,
                    interval:0,
                    textStyle: {
                        color: '#fff',  //更改坐标轴文字颜色
                        fontFamily: 'SourceHanSansSC-Regular',
                        fontSize: 14,
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 19,
                        letterSpacing: 0
                        },
                    },
                boundaryGap : false,  //设置从原点开始绘制
            },
            yAxis: [{
                type: 'value',
                position: 'left',
                name:'(亿元)',
                axisTick:{   //去除刻度线
                    show:false
                }, 
                splitLine:{  //设置网格颜色
                        show: true,
                        lineStyle:{
                                 color: ['#3e4172'],
                                 width: 1,
                                type: 'solid'
                        }
                },
                axisLine:{
                            lineStyle:{
                                color:'#666cb4',
                                width:1,//这里是为了突出显示加上的
                            }
                    },
                axisLabel:{
                    show: true,
                    textStyle: {
                        color: '#fff',  //更改坐标轴文字颜色
                        fontFamily: 'SourceHanSansSC-Regular',
                        fontSize: 14,
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 19,
                        letterSpacing: 0
                        },
                    },
	                nameTextStyle:{//y轴上方单位的颜色
	                    color:'#fff',
	                    fontFamily: 'SourceHanSansSC-Regular',
	                    fontSize: 14,
	                    fontWeight: 'normal',
	                    fontStretch: 'normal',
	                    lineHeight: 19,
	                    letterSpacing: 0,
	                    padding:[0,30,0,0]
	                },
	                splitNumber:6,
                // 双y轴两边段数一致
                // min: Min1,
                // max: Max1,
                // splitNumber: 5,
                // interval: (Max1 - Min1) / 5
            }],
            series:[{
                    name: '内资企业',
                    type: 'line',
                    data:["10","15","20","25","30","35","40","45","50","55","60","65"],
                    smooth: false,  //设置曲线平滑,
                    symbol: 'circle',  //取消折点圆圈
                    symbolSize: 7,
                    color:"#ff6162",
                    lineStyle:{
                        color: "#ff6162", //改变折线颜色
                        width:1,
                        type:'dotted'//设置线条为虚线
                    }
                },
                {
                    name: '外商投资企业',
                    type: 'line',
                    data: ["70","75","80","85","90","95","100","105","110","115","120","125"],
                    smooth: false,  //设置曲线平滑,
                    symbol: 'circle',  //取消折点圆圈
                    symbolSize: 7,
                    color:"#5bffae",
                    lineStyle:{
                        color: "#5bffae", //改变折线颜色
                        width:1,
                        type:'dotted'//设置线条为虚线
                    }
                },
                {
                    name: '个体工商户',
                    type: 'line',
                    data: ["130","135","140","145","150","155","160","165","170","175","180","185"],
                    smooth: false,  //设置曲线平滑,
                    symbol: 'circle',  //取消折点圆圈
                    symbolSize: 7,
                    color:"#00edff",
                    lineStyle:{
                        color: "#00edff", //改变折线颜色
                        width:1,
                        type:'dotted'//设置线条为虚线
                    }
                },
                {
                    name: '农业专业合作社',
                    type: 'line',
                    data: ["190","195","200","205","210","215","220","225","230","235","240","245"],
                    smooth: false,  //设置曲线平滑,
                    symbol: 'circle',  //取消折点圆圈
                    symbolSize: 7,
                    color:"#ffe954",
                    lineStyle:{
                        color: "#ffe954", //改变折线颜色
                        width:1,
                        type:'dotted'//设置线条为虚线
                    }
                }]
        };