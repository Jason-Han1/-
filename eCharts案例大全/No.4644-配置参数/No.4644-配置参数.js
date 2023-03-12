option = {
    //标题
    title:{
        show:true,
        text:"",
        textStyle:{
            color:"#333",
            fontStyle:"normal",
            fontWeight:"normal",
            fontFamily:"sans-serif",
            fontSize:18
        },
        subtext:"",
        subtextStyle:{
            color:"#333",
            fontStyle:"normal",
            fontWeight:"normal",
            fontFamily:"sans-serif",
            fontSize:18
        },
        padding:5,
        itemGap:10,
        left:"auto",
        top:"auto",
        right:"auto",
        bottom:"auto",
        backgroundColor:"transparent"
    },
    //图例
    legend:{
        show:true,
        left:"auto",
        top:"auto",
        right:"auto",
        bottom:"auto",
        itemGap:10,
        itemWidth:25,
        itemHeight:14,
        textStyle:{
            color:"#333",
            fontStyle:"normal",
            fontWeight:"normal",
            fontFamily:"sans-serif",
            fontSize:18
        },
    },
    //网格
    grid:{
        show:false,
        left:"10%",
        top:"60",
        right:"10%",
        bottom:"60",
        containLabel:false
    },
    //弹窗
    tooltip:{
        show:true,
        axisPointer:{
            type:"line",
            lineStyle:{
                color:"#555",
                width:1,
                type:"solid",
                opacity:1
            },
            shadowStyle:{
                color:"rgba(150,150,150,0.3)"
            },
            crossStyle:{
                color:"#555",
                width:1,
                type:"dashed",
                opacity:1
            }
        },
        position:"",
        formatter:"",
        backgroundColor:"rgba(50,50,50,0.7)",
        borderColor:"#333",
        borderWidth:0,
        padding:5,
        textStyle:{
            color:"#fff",
            fontStyle:"normal",
            fontWeight:"normal",
            fontFamily:"sans-serif",
            fontSize:18
        },
        extraCssText:""
    },
    //直角坐标系 x轴|y轴
    xAxis:{
        show:true,
        position:"bottom",
        type:"category",
        name:"",
        nameLocation:"end",
        nameTextStyle:{
            color:"#333",
            fontStyle:"normal",
            fontWeight:"normal",
            fontFamily:"sans-serif",
            fontSize:12
        },
        nameGap:15,
        nameRotate:0,
        inverse:false,
        splitNumber:5,
        axisLine:{
            show:true,
            symbol:"none",
            symbolSize:[10,15],
            symbolOffset:[0,0],
            lineStyle:{
                color:"#333",
                width:1,
                type:"solid",
                opacity:1
            }
        },
        axisTick:{
            show:true,
            interval:"auto",
            inside:false,
            length:5,
            lineStyle:{
                color:"#333",
                width:1,
                type:"solid",
                opacity:1
            }
        },
        axisLabel:{
            show:true,
            interval:"auto",
            inside:false,
            rotate:0,
            margin:8,
            formatter:"",
            color:"",//可使用回调函数
            fontStyle:"normal",
            fontWeight:"normal",
            fontFamily:"sans-serif",
            fontSize:12,
            backgroundColor:"transparent",
            borderColor:"transparent",
            borderWidth:0,
            borderRadius:0,
            padding:0,
            rich:{}
        },
        splitLine:{
            show:true,
            interval:"auto",
            lineStyle:{
                color:["#ccc"],
                width:1,
                type:"solid",
                opacity:1
            }
        }
    },
    yAxis:{
        show:true,
        position:"bottom",
        type:"category",
        name:"",
        nameLocation:"end",
        nameTextStyle:{
            color:"#333",
            fontStyle:"normal",
            fontWeight:"normal",
            fontFamily:"sans-serif",
            fontSize:12
        },
        nameGap:15,
        nameRotate:0,
        inverse:false,
        splitNumber:5,
        axisLine:{
            show:true,
            symbol:"none",
            symbolSize:[10,15],
            symbolOffset:[0,0],
            lineStyle:{
                color:"#333",
                width:1,
                type:"solid",
                opacity:1
            }
        },
        axisTick:{
            show:true,
            interval:"auto",
            inside:false,
            length:5,
            lineStyle:{
                color:"#333",
                width:1,
                type:"solid",
                opacity:1
            }
        },
        axisLabel:{
            show:true,
            interval:"auto",
            inside:false,
            rotate:0,
            margin:8,
            formatter:"",
            color:"",//可使用回调函数
            fontStyle:"normal",
            fontWeight:"normal",
            fontFamily:"sans-serif",
            fontSize:12,
            backgroundColor:"transparent",
            borderColor:"transparent",
            borderWidth:0,
            borderRadius:0,
            padding:0,
            rich:{}
        },
        splitLine:{
            show:true,
            interval:"auto",
            lineStyle:{
                color:["#ccc"],
                width:1,
                type:"solid",
                opacity:1
            }
        }
    },
    //极坐标系 径向轴|角度轴
    radiusAxis:{
        type:"value",
        name:"",
        nameLocation:"end",
        nameTextStyle:{
            color:"#333",
            fontStyle:"normal",
            fontWeight:"normal",
            fontFamily:"sans-serif",
            fontSize:12
        },
        nameGap:15,
        nameRotate:0,
        inverse:false,
        splitNumber:5,
        axisLine:{
            show:true,
            symbol:"none",
            symbolSize:[10,15],
            symbolOffset:[0,0],
            lineStyle:{
                color:"#333",
                width:1,
                type:"solid",
                opacity:1
            }
        },
        axisTick:{
            show:true,
            interval:"auto",
            inside:false,
            length:5,
            lineStyle:{
                color:"#333",
                width:1,
                type:"solid",
                opacity:1
            }
        },
        axisLabel:{
            show:true,
            interval:"auto",
            inside:false,
            rotate:0,
            margin:8,
            formatter:"",
            color:"",//可使用回调函数
            fontStyle:"normal",
            fontWeight:"normal",
            fontFamily:"sans-serif",
            fontSize:12,
            backgroundColor:"transparent",
            borderColor:"transparent",
            borderWidth:0,
            borderRadius:0,
            padding:0,
            rich:{}
        },
        splitLine:{
            show:true,
            interval:"auto",
            lineStyle:{
                color:["#ccc"],
                width:1,
                type:"solid",
                opacity:1
            }
        }
    },
    angleAxis:{
        startAngle:90,
        clockwise:true,
        type:"category",
        splitNumber:5,
        axisLine:{
            show:true,
            symbol:"none",
            symbolSize:[10,15],
            symbolOffset:[0,0],
            lineStyle:{
                color:"#333",
                width:1,
                type:"solid",
                opacity:1
            }
        },
        axisTick:{
            show:true,
            interval:"auto",
            inside:false,
            length:5,
            lineStyle:{
                color:"#333",
                width:1,
                type:"solid",
                opacity:1
            }
        },
        axisLabel:{
            show:true,
            interval:"auto",
            inside:false,
            rotate:0,
            margin:8,
            formatter:"",
            color:"",//可使用回调函数
            fontStyle:"normal",
            fontWeight:"normal",
            fontFamily:"sans-serif",
            fontSize:12,
            backgroundColor:"transparent",
            borderColor:"transparent",
            borderWidth:0,
            borderRadius:0,
            padding:0,
            rich:{}
        },
        splitLine:{
            show:true,
            interval:"auto",
            lineStyle:{
                color:["#ccc"],
                width:1,
                type:"solid",
                opacity:1
            }
        }
    },
    //雷达图坐标系
    // radar:{
    //     center:["50%","50%"],
    //     radius:"75%",
    //     startAngle:90,
    //     name:{
    //         show:true,
    //         formatter:""
    //     },
    //     textStyle:{
    //         color:"#333",
    //         fontStyle:"normal",
    //         fontWeight:"normal",
    //         fontFamily:"sans-serif",
    //         fontSize:12,
    //         backgroundColor:"transparent",
    //         borderColor:"transparent",
    //         borderWidth:0,
    //         borderRadius:0,
    //         padding:0
    //     },
    //     nameGap:15,
    //     splitNumber:5,
    //     axisLine:{
    //         show:true,
    //         symbol:"none",
    //         symbolSize:[10,15],
    //         symbolOffset:[0,0],
    //         lineStyle:{
    //             color:"#333",
    //             width:1,
    //             type:"solid",
    //             opacity:1
    //         }
    //     },
    //     axisTick:{
    //         show:true,
    //         interval:"auto",
    //         inside:false,
    //         length:5,
    //         lineStyle:{
    //             color:"#333",
    //             width:1,
    //             type:"solid",
    //             opacity:1
    //         }
    //     },
    //     axisLabel:{
    //         show:true,
    //         interval:"auto",
    //         inside:false,
    //         rotate:0,
    //         margin:8,
    //         formatter:"",
    //         color:"",//可使用回调函数
    //         fontStyle:"normal",
    //         fontWeight:"normal",
    //         fontFamily:"sans-serif",
    //         fontSize:12,
    //         backgroundColor:"transparent",
    //         borderColor:"transparent",
    //         borderWidth:0,
    //         borderRadius:0,
    //         padding:0,
    //         rich:{}
    //     },
    //     splitLine:{
    //         show:true,
    //         interval:"auto",
    //         lineStyle:{
    //             color:["#ccc"],
    //             width:1,
    //             type:"solid",
    //             opacity:1
    //         }
    //     },
    //     indicator:[{}]
    // },
    //视觉印射
    visualMap:[{
        min:0,
        max:100,
        calculable:false,
        realtime:true,
        inverse:false,
        itemWidth:20,
        itemHeight:140,
        align:"auto",
        text:["",""],
        textGap:10,
        show:true,
        inRange: {
            color: ["#121122", "rgba(3,4,5,0.4)", "red"],
            symbolSize: [30, 100]
        },
        left:0,
        top:"auto",
        right:"auto",
        bottom:0,
        textStyle:{
            color:"#333",
            fontStyle:"normal",
            fontWeight:"normal",
            fontFamily:"sans-serif",
            fontSize:18
        }
    }],
    //极坐标系
    polar:{
        center:["50%", "50%"],
        radius:"",//三种写法
        tooltip:{
            show:true,
            axisPointer:{
                type:"line",
                lineStyle:{
                    color:"#555",
                    width:1,
                    type:"solid",
                    opacity:1
                },
                shadowStyle:{
                    color:"rgba(150,150,150,0.3)"
                },
                crossStyle:{
                    color:"#555",
                    width:1,
                    type:"dashed",
                    opacity:1
                }
            },
            formatter:"",
            backgroundColor:"rgba(50,50,50,0.7)",
            borderColor:"#333",
            borderWidth:"0",
            padding:5,
            textStyle:{
                color:"#fff",
                fontStyle:"normal",
                fontWeight:"normal",
                fontFamily:"sans-serif",
                fontSize:14
            }
        }
    },
    //地图坐标系
    geo:{
        show:true,
        map:"",
        aspectScale:0.75,
        zoom:1,
        label:{
            normal:{
                show:false,
                position:"top",
                distance:5,
                offset:[0,0],
                formatter:"",
                color:"#fff",
                fontStyle:"normal",
                fontWeight:"normal",
                fontFamily:"sans-serif",
                fontSize:12
            },
            emphasis:{
                show:false,
                position:"top",
                distance:5,
                offset:[0,0],
                formatter:"",
                color:"#fff",
                fontStyle:"normal",
                fontWeight:"normal",
                fontFamily:"sans-serif",
                fontSize:12
            }
        },
        itemStyle:{
            normal:{
                areaColor:"#eee",
                color:"",
                borderColor:"#000",
                borderWidth:0,
                borderType:"solid",
                opacity:1
            },
            emphasis:{
                areaColor:"#eee",
                color:"",
                borderColor:"#000",
                borderWidth:0,
                borderType:"solid",
                opacity:1
            }
        },
        left:"auto",
        top:"auto",
        right:"auto",
        bottom:"auto",
        regions:[{
            name:"广东",
            itemStyle:{
                areaColor:"red",
                color:"red"
            }
        }]
    },
    //图形
    series:[
        //折线
        {
            type:"line",
            name:"",
            coordinateSystem:"cartesian2d",
            xAxisIndex:0,
            yAxisIndex:0,
            polarIndex:0,
            symbol:"emptyCircle",
            symbolSize:4,
            showSymbol:true,
            connectNulls:false,
            label:{
                normal:{
                    show:false,
                    position:"top",
                    distance:5,
                    rotate:0,
                    offset:[0,0],
                    formatter:"",
                    color:"#333",
                    fontStyle:"normal",
                    fontWeight:"normal",
                    fontFamily:"sans-serif",
                    fontSize:12,
                    backgroundColor:"transparent",
                    borderColor:"transparent",
                    borderWidth:0,
                    borderRadius:0,
                    padding:0,
                    rich:{}
                },
                emphasis:{
                    show:false,
                    position:"top",
                    distance:5,
                    rotate:0,
                    offset:[0,0],
                    formatter:"",
                    color:"#333",
                    fontStyle:"normal",
                    fontWeight:"normal",
                    fontFamily:"sans-serif",
                    fontSize:12,
                    backgroundColor:"transparent",
                    borderColor:"transparent",
                    borderWidth:0,
                    borderRadius:0,
                    padding:0,
                    rich:{}
                }
            },
            itemStyle:{
                normal:{
                    color:"",
                    borderColor:"#000",
                    borderWidth:0,
                    borderType:"solid",
                    opacity:1
                },
                emphasis:{
                    color:"",
                    borderColor:"#000",
                    borderWidth:0,
                    borderType:"solid",
                    opacity:1
                }
            },
            lineStyle:{
                color:"#000",
                width:2,
                type:"solid",
                opacity:1
            },
            areaStyle:{
                color:"#000",
                origin:"auto"
            },
            smooth:false,
            encode:{}
        },
        //柱状图
        {
            type:"bar",
            name:"",
            xAxisIndex:0,
            yAxisIndex:0,
            label:{
                show:false,
                position:"inside",
                distance:5,
                rotate:0,
                offset:[0,0],
                formatter:"",
                color:"#fff",
                fontStyle:"normal",
                fontWeight:"normal",
                fontFamily:"sans-serif",
                fontSize:12,
                backgroundColor:{
                    image:""
                },
                borderColor:"#000",
                borderWidth:0,
                borderRadius:0,
                padding:0
            },
            itemStyle:{
                color:"",
                borderColor:"#000",
                borderWidth:0,
                borderType:"solid",
                barBorderRadius:0,
                opacity:1
            },
            showBackground:false,
            backgroundStyle:{
                color:"rgba(180, 180, 180, 0.2)",
                borderColor:"#000",
                borderWidth:0,
                borderType:"solid",
                barBorderRadius:0,
                opacity:1
            },
            stack:"",
            barWidth:"",
            barGap:"30%",
            encode:{}
        },
        //饼图
        {
            type:"pie",
            name:"",
            hoverAnimation:true,
            clockwise:true,
            startAngle:90,
            label:{
                show:false,
                position:"outside",
                formatter:"",
                color:"#fff",
                fontStyle:"normal",
                fontWeight:"normal",
                fontFamily:"sans-serif",
                fontSize:12,
                backgroundColor:"transparent",
                borderColor:"transparent",
                borderWidth:0,
                borderRadius:0,
                padding:0,
                rich:{}
            },
            labelLine:{
                show:false,
                length:8,
                length2:8,
                smooth:false,
                lineStyle:{
                    color:"#000",
                    width:1,
                    type:"solid"
                }
            },
            itemStyle:{
                color:"",
                borderColor:"#000",
                borderWidth:0,
                borderType:"solid"
            },
            center:["50%","50%"],
            radius:["0%","75%"],
            encode:{}
        },
        //散点图
        // {
        //     type:"scatter",
        //     name:"",
        //     coordinateSystem:"cartesian2d",
        //     xAxisIndex:0,
        //     yAxisIndex:0,
        //     polarIndex:0,
        //     geoIndex:0,
        //     hoverAnimation:true,
        //     symbol:"circle",
        //     symbolSize:10,
        //     symbolOffset:[0,0],
        //     label:{
        //         show:false,
        //         position:"inside",
        //         distance:5,
        //         rotate:0,
        //         offset:[0,0],
        //         formatter:"",
        //         color:"#fff",
        //         fontStyle:"normal",
        //         fontWeight:"normal",
        //         fontFamily:"sans-serif",
        //         fontSize:12,
        //         backgroundColor:"transparent",
        //         borderColor:"transparent",
        //         borderWidth:0,
        //         borderRadius:0,
        //         padding:0,
        //         rich:{}
        //     },
        //     itemStyle:{
        //         color:"",
        //         borderColor:"#000",
        //         borderWidth:0,
        //         borderType:"solid",
        //         opacity:0.8
        //     },
        //     encode:{}
        // },
        //动效散点图
        // {
        //     type:"effectScatter",
        //     name:"",
        //     effectType:"ripple",
        //     showEffectOn:"render",
        //     coordinateSystem:"cartesian2d",
        //     xAxisIndex:0,
        //     yAxisIndex:0,
        //     polarIndex:0,
        //     geoIndex:0,
        //     symbol:"circle",
        //     symbolSize:10,
        //     symbolOffset:[0,0],
        //     label:{
        //         show:false,
        //         position:"inside",
        //         distance:5,
        //         rotate:0,
        //         offset:[0,0],
        //         formatter:"",
        //         color:"#fff",
        //         fontStyle:"normal",
        //         fontWeight:"normal",
        //         fontFamily:"sans-serif",
        //         fontSize:12,
        //         backgroundColor:"transparent",
        //         borderColor:"transparent",
        //         borderWidth:0,
        //         borderRadius:0,
        //         padding:0,
        //         rich:{}
        //     },
        //     itemStyle:{
        //         color:"",
        //         borderColor:"#000",
        //         borderWidth:0,
        //         borderType:"solid",
        //         opacity:0.8
        //     }
        // },
        //雷达图
        // {
        //     type:"radar",
        //     symbol:"circle",
        //     symbolSize:4,
        //     symbolOffset:[0,0],
        //     label:{
        //         show:false,
        //         position:"top",
        //         distance:5,
        //         rotate:0,
        //         offset:[0,0],
        //         formatter:"",
        //         color:"#fff",
        //         fontStyle:"normal",
        //         fontWeight:"normal",
        //         fontFamily:"sans-serif",
        //         fontSize:12,
        //         backgroundColor:"transparent",
        //         borderColor:"transparent",
        //         borderWidth:0,
        //         borderRadius:0,
        //         padding:0,
        //         rich:{}
        //     },
        //     itemStyle:{
        //         color:"",
        //         borderColor:"#000",
        //         borderWidth:0,
        //         borderType:"solid",
        //         opacity:1
        //     },
        //     lineStyle:{
        //         color:"#000",
        //         width:1,
        //         type:"solid",
        //         opacity:1
        //     },
        //     areaStyle:{
        //         color:"",
        //         opacity:1
        //     }
        // },
        //地图
        {
            type:"map",
            name:"",
            map:"",
            aspectScale:0.75,
            zoom:1,
            label:{
                normal:{
                    show:false,
                    position:"top",
                    distance:5,
                    offset:[0,0],
                    formatter:"",
                    color:"#fff",
                    fontStyle:"normal",
                    fontWeight:"normal",
                    fontFamily:"sans-serif",
                    fontSize:12
                },
                emphasis:{
                    show:false,
                    position:"top",
                    distance:5,
                    offset:[0,0],
                    formatter:"",
                    color:"#fff",
                    fontStyle:"normal",
                    fontWeight:"normal",
                    fontFamily:"sans-serif",
                    fontSize:12
                }
            },
            itemStyle:{
                normal:{
                    areaColor:"#eee",
                    color:"",
                    borderColor:"#000",
                    borderWidth:0,
                    borderType:"solid",
                    opacity:1
                },
                emphasis:{
                    areaColor:"#eee",
                    color:"",
                    borderColor:"#000",
                    borderWidth:0,
                    borderType:"solid",
                    opacity:1
                }
            },
            left:"auto",
            top:"auto",
            right:"auto",
            bottom:"auto"
        },
        //象形柱图
        {
            type:"pictorialBar",
            name:"",
            xAxisIndex:0,
            yAxisIndex:0,
            label:{
                show:false,
                position:"inside",
                distance:5,
                rotate:0,
                offset:[0,0],
                formatter:"",
                color:"#fff",
                fontStyle:"normal",
                fontWeight:"normal",
                fontFamily:"sans-serif",
                fontSize:12,
                backgroundColor:"transparent",
                borderColor:"transparent",
                borderWidth:0,
                borderRadius:0,
                padding:0,
                rich:{}
            },
            itemStyle:{
                color:"",
                borderColor:"#000",
                borderWidth:0,
                borderType:"solid",
                opacity:0.8
            },
            barWidth:"",
            barGap:"-100%",
            symbol:"circle",
            symbolSize:["100%","100%"],
            symbolPosition:"start",
            symbolOffset:[0,0],
            symbolRepeat:false,
            symbolMargin:"default",
            symbolClip:false,
            encode:{}
        },
        //仪表盘
        {
            type:"gauge",
            name:"",
            radius:"75%",
            startAngle:225,
            endAngle:-45,
            clockwise:true,
            axisLine:{
                show:true,
                lineStyle:{
                    color:[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']],
                    width:30,
                    opacity:1
                }
            },
            splitLine:{
                show:true,
                length:30,
                lineStyle:{
                    color:"#eee",
                    width:2,
                    type:"solid",
                    opacity:1
                }
            },
            axisTick:{
                show:true,
                splitNumber:5,
                length:8,
                lineStyle:{
                    color:"#eee",
                    width:1,
                    type:"solid",
                    opacity:1
                }
            },
            axisLabel:{
                show:true,
                distance:5,
                formatter:"",
                color:"#fff",
                fontStyle:"normal",
                fontWeight:"normal",
                fontFamily:"sans-serif",
                fontSize:12,
                backgroundColor:"transparent",
                borderColor:"transparent",
                borderWidth:0,
                borderRadius:0,
                padding:0,
                rich:{}
            },
            itemStyle:{
                color:"auto",
                borderColor:"#000",
                borderType:"solid",
                opacity:1
            },
            title:{
                show:true,
                offsetCenter:[0,"-40%"],
                color:"#333",
                fontStyle:"normal",
                fontWeight:"normal",
                fontFamily:"DIN",
                fontSize:15,
                backgroundColor:"transparent",
                borderColor:"transparent",
                borderWidth:0,
                borderRadius:0,
                padding:0,
                rich:{}
            },
            detail:{
                show:true,
                backgroundColor:"transparent",
                borderWidth:0,
                borderColor:"transparent",
                offsetCenter:[0,"40%"],
                formatter:"",
                color:"auto",
                fontStyle:"normal",
                fontWeight:"normal",
                fontFamily:"sans-serif",
                fontSize:15,
                borderRadius:0,
                padding:0,
                rich:{}
            }
        }
    ]
};