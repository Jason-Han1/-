var uploadedDataURL = "/asset/get/s/data-1587646076398-KzuFR3nhk.gexf";



myChart.showLoading();
            $.get(uploadedDataURL, function (xml) {
                myChart.hideLoading();

                var graph = echarts.dataTool.gexf.parse(xml);
                var categories = [
                    {name : '基础架构部'},
                    {name : '前端技术中心'},
                    {name : '基础设施部'},
                    {name : '服务运维部'},
                    {name : '质效中心'},
                    {name : '产品项目中心'}
                ];
                graph.nodes.forEach(function (node) {
                    node.itemStyle = null;
                    node.value = node.symbolSize;
					node.symbolSize = node.symbolSize   ;

                    node.label = {
                        normal: {
                            show: node.symbolSize > 0
                        }
                    };
                    node.label.normal.show = node.symbolSize > 0;
                    node.category = node.attributes.modularity_class;
                });
                option = {
                    title: {
                        text: 'Les Miserables',
                        subtext: 'Circular layout',
                        top: 'bottom',
                        left: 'right'
                    },
                    tooltip: {},
                    toolbox: {
                        show : true,
						orient: 'vertical',
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    legend: [{
                        // selectedMode: 'single',
                        data: categories.map(function (a) {
                            return a.name;
                        })
                    }],
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    series: [
                        {
                            name: 'Les Miserables',
                            type: 'graph',
                            layout: 'circular',
                            data: graph.nodes,
                            links: graph.links,
                            categories: categories,
                            roam: true,
							edgeSymbol: ['none', 'arrow'],
                            label: {
                                normal: {
                                    position: 'right',
                                    formatter: '{b}'
                                }
                            },
							circular: {
								rotateLabel: true
							},
							toolbox: {
								show: true,
								orient: 'vertical',
								right: '20%',
								feature: {
									dataZoom: {
									yAxisIndex: 'none'
									},
								dataView: {readOnly: false},
								magicType: {type: ['line', 'bar']},
								restore: {},
								saveAsImage: {}
								}
							},
                            lineStyle: {
                                normal: {
									
                                    curveness: 0.3

                                }
                            },
							itemStyle: { 
								normal: { 
								label: {
									show: true
								},
								borderType: 'solid', // 图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
								// borderColor: 'rgba(205, 149, 12, 0.4)', // 设置图形边框为淡金色,透明度为0.4
								borderWidth: 2, // 图形的描边线宽。为 0 时无描边。
								opacity: 1 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5

								},
								emphasis: { // 高亮状态

								}
							},
							lineStyle: { // ========关系边的公用线条样式。
								normal: {
									color: 'source',
									width: '1', //线的粗细
									type: 'solid', // 线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
									curveness: 0.3, // 线条的曲线程度，从0到1
									opacity: 0.5 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
								},
								emphasis: { // 高亮状态

								}
							},
							label: { // ========结点图形上的文本标签
								normal: {
									show: true, // 是否显示标签。
									//show: data.value > 2,
									position: 'right', //'inside', // 标签的位置。['50%', '50%'] [x,y]
									
								// 	textStyle: { // 标签的字体样式
								// 		color: 'black', // 字体颜色 #cde6c7 #d1c7b7 #d9d6c3 #d3d7d4
								// 		fontStyle: 'normal', // 文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
								// 		fontWeight: 'bolder', // 'normal'标准，'bold'粗的，'bolder'更粗的，'lighter'更细的，或100 | 200 | 300 | 400...
								// 		fontFamily: 'sans-serif', // 文字的字体系列
								// 		fontSize: 10, // 字体大小
								// 	}
								},
								emphasis: { // 高亮状态

								}
							},
                        }
                    ]
                };

                myChart.setOption(option);
            }, 'xml');