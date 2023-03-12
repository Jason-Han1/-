var x1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
        var x2 = ['', '', 'ness', '', '', '', '', '', '9，31123', '', '', '', '13,15', '', ''];
        //var x2 = [{value:'',label:{show:false}}, {value:'',label:{show:false}}, {value:'ness',label:{show:true}}, {value:'',label:{show:false}}, {value:'',label:{show:false}}, {value:'',label:{show:false}}, {value:'',label:{show:false}}, {value:'',label:{show:false}}, {value:'123\n456',label:{show:true}}, {value:'',label:{show:false}}, {value:'',label:{show:false}}, {value:'',label:{show:false}}, {value:'13,15',label:{show:true}}, {value:'',label:{show:false}}, {value:'',label:{show:false}}];
        option = {
            title: {
                text: 'Test Awesome Chart'
            },
            xAxis: [{
                data: x1,
                position: 'top',
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: 'black'
                    }
                },
                type: 'category',
                //显示刻度
                axisLabel: {
                    show: true
                },
                axisTick: {
                    //刻度线与标签对齐
                    alignWithLabel: true
                },
                boundaryGap: false,
                nameLocation: 'top',
                //X坐标轴指示器，竖线
                axisPointer: {
                    // tooltip.trigger 设置为 'axis' 同 show:true
                    //show:true,
                    type: 'none',
                    label: {
                        show: true,
                        backgroundColor: 'red'
                    }
                }
                //end
            },
            {
                data: x2,
                position: 'bottom',
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: 'black'
                    }
                },
                //轴值的设置
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'black',
                        fontSize: '14'
                    },
                    //设置刻度值样式
                    borderColor: 'black',
                    borderWidth: 1,
                    padding: 3
                    //end

                    //backgroundColor: {
                    //    image: 'xxx/xxx.png'
                    //    // 这里可以是图片的 URL，
                    //    // 或者图片的 dataURI，
                    //    // 或者 HTMLImageElement 对象，
                    //    // 或者 HTMLCanvasElement 对象。
                    //    //当使用图片的时候，可以使用 width 或 height 指定高宽，也可以不指定自适应
                    //},
                    //borderWidth:15,
                    //borderColor:'green'
                },
                //end
                type: 'category',
                axisTick: {
                    //刻度线与标签对齐
                    alignWithLabel: true
                },
                boundaryGap: false
                //splitArea:{
                //    interval:1,
                //    show:true
                //    
                //}
            }
            ],
            brush: {
                /* toolbox: ['rect'], */
                xAxisIndex: 'all',
                yAxisIndex: 'all',
                transformable: false,
                throttleType: 'debounce',
                removeOnClick: false,
                brushStyle: {
                    borderWidth: 1,
                    color: 'rgba(255,36,36,0.2)',
                    borderColor: '#ff2424'
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '10%']
            },
            visualMap: {
                type: 'piecewise',
                show: false,
                dimension: 0,
                seriesIndex: 0
            },
            series: [{
                type: 'line',
                smooth: 0.1, //线条棱角度
                symbol: 'none',
                //线条颜色
                lineStyle: {
                    color: 'red',
                    width: 1
                },
                //end
                //背景色填充
                //areaStyle: {
                //    normal: {
                //        color: {
                //
                //            colorStops: [{
                //                offset: 1,
                //                color: 'green' // 0% 处的颜色
                //            }, {
                //                offset: 1,
                //                color: 'white' // 100% 处的颜色
                //            }],
                //            globalCoord: false // 缺省为 false
                //        },
                //    }
                //},
                //end
                markArea: {
                    silent: true,
                    label: {
                        position: [10, 10],
                        color: '#53A58A',
                        fontSize: 14,
                        fontWeight: 'bold'
                    },
                    itemStyle: {
                        color: 'rgba(83,165,138,.1)'
                    },
                    data: [
                        [{
                            xAxis: '2',
                            name: '区间备注1'
                        }, {
                            xAxis: '5'
                        }],
                        [{
                            xAxis: '10',
                            name: '区间备注2'
                        }, {
                            xAxis: '12'
                        }]
                    ]
                },
                data: [3, 7, 19, 16, 4, 2, 1, 26, 31, 3, 0, 5, 15, 10, 6]
            }],
            //内容缩放功能，slider是滚动条控制，inside是鼠标滚轴
            dataZoom: [{
                type: 'slider',
                xAxisIndex: [0, 1],
                filterMode: 'none',
                bottom: -10
            },
            {
                type: 'inside',
                xAxisIndex: [0, 1],
                filterMode: 'none',
                bottom: -10
            },
            {
                type: 'slider',
                yAxisIndex: 0,
                filterMode: 'none'
            },
            {
                type: 'inside',
                yAxisIndex: 0,
                filterMode: 'none'
            }
            ],
            //end
            tooltip: {
                show: true,
                trigger: 'axis',
                //position:['80%','90%']
                showDelay: 0
                //axisPointer: {
                //    show: true,
                //    type: 'cross',
                //    lineStyle: {
                //        type: 'dashed',
                //        width: 1
                //    }
                //}
            },
            toolbox: {
                // y: 'bottom',
                feature: {
                    dataZoom: {
                        //Y轴不缩放
                        yAxisIndex: false
                    },
                    dataView: {},
                    saveAsImage: {}
                },
                left: 'right'
            }

        };

        myChart.getZr().on('contextmenu', function (e) {
            var pointInPixel = [e.offsetX, e.offsetY];
            if (myChart.containPixel('grid', pointInPixel)) {
                var index = myChart.convertFromPixel({
                    seriesIndex: 0
                }, pointInPixel)[0];
                if (e.event.button === 2) {
                    //alert(e.seriesName)
                    //e中有当前节点信息
                    showMenu(e, [{
                        "name": "删除",
                        "fn": function () {
                            x2.splice(index, 1, '');
                            option.xAxis[1].data = x2;
                            myChart.setOption(option, true);
                        }
                    }, {
                        "name": "菜单2",
                        "fn": function () {
                            alert("触发-菜单-Index-" + index);
                        },
                        "son": [{
                            "sname": "one"
                        }, {
                            "sname": "two"
                        }, {
                            "sname": "three"
                        }, {
                            "sname": "four"
                        }]
                    }]);
                }
            }
        });

        var style_ul = "padding:0px;margin:0px;border: 1px solid #ccc;background-color: #fff;position: absolute;left: 0px;top: 0px;z-index: 2;display: none;";
        var style_li = "list-style:none;padding: 5px; cursor: pointer; padding: 5px 20px;margin:0px;";
        var style_li_hover = style_li + "background-color: #00A0E9; color: #fff;";

        //右键菜单容器
        var menubox = $("<div class='echartboxMenu' style='" + style_ul + "'><div style='text-align:center;background:#ccc'></div><ul style='margin:0px;padding:0px;'></ul></div>").appendTo($(document.body));
        //var menubox = $(document.body).append("<div class='echartboxMenu' style='" + style_ul + "'><div style='text-align:center;background:#ccc'></div><ul style='margin:0px;padding:0px;'></ul></div>");
       
        //移除浏览器右键菜单
        myChart.getDom().oncontextmenu = menubox[0].oncontextmenu = function () {
            return false;
        }

        //点击其他位置隐藏菜单
        $(document).click(function () {
            menubox.hide()
        });

        //显示菜单
        var showMenu = function (e, menus) {
            $("div", menubox).text(e);
            var menulistbox = $("ul", menubox).empty();
            $(menus).each(function (i, item) {
                var li = $("<li style='" + style_li + "'>" + item.name + "</li>")
                    .mouseenter(function () {
                        $(this).attr("style", style_li_hover);
                    })
                    .mouseleave(function () {
                        $(this).attr("style", style_li);
                    })
                    .click(function () {
                        item["fn"].call(this);
                        menubox.hide();
                    });
                menulistbox.append(li);
            });
            menubox.css({
                "left": event.x,
                "top": event.y
            }).show();
        }
