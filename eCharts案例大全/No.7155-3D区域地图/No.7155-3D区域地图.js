  var timeData=["2020-06-22", "2020-06-23", "2020-06-24", "2020-06-25", "2020-06-26", "2020-06-27"],
        regionData=["郑州市", "开封市", "洛阳市", "平顶山市", "安阳市", "鹤壁市", "新乡市", "焦作市", "濮阳市", "许昌市", "漯河市", "三门峡市", "南阳市", "商丘市", "信阳市", "周口市", "驻马店市", "济源市"],
        chartData=[
            [1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        goalPFL=[
            [66.2, 4.8, 26, 16, 26.5, 9, 21, 24, 6, 11, 3, 19, 15, 12.3, 9.5, 5, 6.3, 14],
            [66.2, 4.8, 26, 16, 26.5, 9, 21, 24, 6, 11, 3, 19, 15, 12.3, 9.5, 5, 6.3, 14],
            [66.2, 4.8, 26, 16, 26.5, 9, 21, 24, 6, 11, 3, 19, 15, 12.3, 9.5, 5, 6.3, 14],
            [66.2, 4.8, 26, 16, 26.5, 9, 21, 24, 6, 11, 3, 19, 15, 12.3, 9.5, 5, 6.3, 14],
            [66.2, 4.8, 26, 16, 26.5, 9, 21, 24, 6, 11, 3, 19, 15, 12.3, 9.5, 5, 6.3, 14],
            [66.2, 4.8, 26, 16, 26.5, 9, 21, 24, 6, 11, 3, 19, 15, 12.3, 9.5, 5, 6.3, 14]
        ],
        PFL=[
            [38.8, 10.4, 45.5, 25.2, 48.9, 13.2, 19.1, 22.4, 5.1, 16.1, 5.6, 22.6, 25.5, 12.3, 14.5, 5.8, 9, 15.4],
            [5.9, 1.4, 7.5, 2.9, 7.1, 2.2, 0.1, 3.7, 0.8, 2.2, 0.9, 3.6, 4.1, 2, 2, 0.9, 1.4, 2.1],
            [66.2, 4.8, 26, 16, 26.5, 9, 21, 24, 6, 11, 3, 19, 15, 12.3, 9.5, 5, 6.3, 14],
            [32.3, 7.5, 39.8, 25.2, 45.9, 15, 25.9, 25.5, 5.2, 14.8, 5.7, 19.2, 18.5, 11.2, 14, 5.8, 7.2, 15.3],
            [36.9, 8.1, 42.8, 24.8, 47.8, 14.2, 27.6, 27.8, 4.9, 16.1, 5.8, 20.7, 17.9, 11.6, 15, 5.6, 7, 14.3],
            [38.7, 8.1, 41.5, 24.7, 49.6, 14.2, 28.3, 28.2, 4.8, 16, 5.8, 21.8, 16.7, 12.1, 17.5, 5.8, 6.8, 16.4],    
        ];
            
  var option={
                baseOption:{
                    color: ['#7dc3fe', '#3685fe'],
                    timeline: {
                        axisType: 'category',
                        loop: true,
                        autoPlay: true,
                        playInterval: 2000,
                        symbolSize: 12,
                        left: '5%',
                        right: '5%',
                        bottom: '0%',
                        width: '90%',
                        data: timeData,
                        tooltip: {
                            formatter: timeData
                        }
                    },
                    tooltip: {
                        show: true,
                        formatter: function(params) {
                            if(params.seriesType=='bar'){
                                return params.name + '<br/>' + params.seriesName+'：'+params.value
                            }else{
                                return params.name + '：' + getControlInfo(params.data['value'],'text')
                            }
                        }
                    },
                    legend: {
                        data: ['目标排放量','实际排放量'],
                        right:'120'
                    },
                    visualMap: {
                        type: 'piecewise',
                        inverse:true,
                        pieces: [
                            {
                                value: 0,
                                label:'未启动',
                                color: '#78b7bf'
                            },
                            {
                                value: 1,
                                label:'红色预警',
                                color: 'red'
                            },
                            {
                                value: 2,
                                label:'橙色预警',
                                color: 'orange'
                            },
                            {
                                value: 3,
                                label:'黄色预警',
                                color: 'yellow'
                            }
                        ],
                        orient: 'vertical',
                        itemWidth: 25,
                        itemHeight: 15,
                        showLabel: true,
                        seriesIndex: [0],
                        textStyle: {
                            color: '#7B93A7'
                        },
                        bottom: '10%',
                        left: "5%"
                    },
                    grid: {
                        right: '5%',
                        top: '8%',
                        bottom: '10%',
                        width: '20%'
                    },
                    xAxis: {
                        type: 'value',
                        scale: true,
                        position: 'top',
                        min: 0,
                        boundaryGap: false,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            margin: 2,
                            textStyle: {
                                color: '#333'
                            }
                        }
                    },
                    yAxis: [{
                        show:true,
                        inverse: true,
                        offset: '2',
                        type: 'category',
                        data: '',
                        nameTextStyle: {
                            color: '#333'
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            //rotate:45,
                            textStyle: {
                                fontSize: 14,
                                color: '#333'
                            },
                            interval: 0
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#333'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: '#333'
                            }
                        }
                    }],
                    series:[
                        {
                            type: 'map3D',
                            name: '河南',
                            map: 'henan',
                            roam: true,
                            right: '35%',
                            left: '5%',
                            bottom:'5%',
                            geoIndex: 0,
                            boxHeight: 16,
                            boxDepth: 95,
                            regionHeight: 4, //立体阴影高度
                            itemStyle: {
                                // areaColor: '#1d5e98',
                                opacity: 1,
                                borderWidth: 0.6,
                                borderColor: 'yellow'
                            },
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#00ffff', //地图初始化区域字体颜色
                                    fontSize: 14,
                                    opacity: 1, //图形不透明度
                                    backgroundColor: 'rgba(0,23,11,0.6)'
                                }
                            },
                            emphasis: { //当鼠标放上去  地区区域是否显示名称
                                label: {
                                    show: false,
                                    textStyle: {
                                        color: '#FFF',
                                        fontSize: 14,
                                        backgroundColor: 'rgba(0,23,11,0)'
                                    }
                                }
                            },
                            viewControl: { //用于鼠标的旋转，缩放等视角控制。
                                // autoRotate: true,    //自动旋转
                                damping: 0.8,
                                distance: 120, //距离中心原点的距离
                                //minDistance: 40,
                                alpha: 55, // 视角绕x轴的角度
                                beta: 0, // 视角绕y轴的角度
                                center: [0, 0, 0], //视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]
                                animation: true
                            }
                        },
                        {
                            name: '目标排放量',
                            type: 'bar',
                            zlevel: 2,
                            barWidth: '25%',
                            barGap: 0,
                            symbol: 'none',
                            label: {
                                normal: {
                                    show: true,
                                    fontSize: 12,
                                    position: 'right',
                                    formatter: '{c}'
                                }
                            }
                        },
                        {
                            name: '实际排放量',
                            type: 'bar',
                            zlevel: 2,
                            symbol: 'none',
                            barWidth: '25%',
                            barGap: 0,
                            label: {
                                normal: {
                                    show: true,
                                    fontSize: 12,
                                    position: 'right',
                                    formatter: '{c}'
                                }
                            }
                        }
                       
                    ]
                },
                animationDurationUpdate: 3000,
                animationEasingUpdate: 'quinticInOut',
                options: []
            };
            for(var n = 0;n<timeData.length; n++){
                var res = [],res1=[],barData1 = [], barData2 = [];
                for (var j = 0; j < chartData[n].length; j++) {
                    res.push({
                        label: regionData[j],
                        color:getControlInfo(chartData[n][j],'color')
                    });
                    res1.push({
                        name: regionData[j],
                        value:chartData[n][j]
                    });
                    barData1.push(goalPFL[n][j]);
                    barData2.push(PFL[n][j]);
                }
                option.options.push({
                    backgroundColor: '#013954',
                    yAxis: {
                       data: regionData
                    },
                    series: [
                        {
                            type: 'map3D',
                            dataRange: {
                                splitList: res
                            },
                            data: res1
                        },
                        {
                            name: '目标排放量',
                            type: 'bar',
                            zlevel: 1.5,
                            data: barData1
                        },
                        {
                            name: '实际排放量',
                            type: 'bar',
                            data: barData2
                        }
                    ]
                });
            }
            
            
         //转换颜色、文字
        function getControlInfo(value,type) {
            if(type=='color'){
                return value==0?'#78b7bf':value==1?'red':value==2?'orange':'yellow';
            }else{
                return value==0?'未启动':value==1?'红色预警':value==2?'橙色预警':'黄色预警';
            }
        }        