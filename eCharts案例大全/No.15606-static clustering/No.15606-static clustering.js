//ecStat 是 ECharts 的统计扩展，需要额外添加扩展脚本，参加上方“脚本”
// 详情请移步 https://github.com/ecomfe/echarts-stat
// 右图是用聚类算法将原数据集分割成三个不同的簇


var uploadedDataURL = "/asset/get/s/data-1487209466925-BJQZVKGYx.json";

 $.getJSON(uploadedDataURL, function(data) {
               
                    var clusterNumber = 3;
                    var result = ecStat.clustering.hierarchicalKMeans(data, clusterNumber, false);
                    var centroids = result.centroids;

                    var ptsInCluster = result.pointsInCluster;
                    var series = [];

                    for (var i = 0; i < centroids.length; i++) {
                        series.push({
                            name: 'cluster' + i,
                            type: 'scatter',
                            data: ptsInCluster[i],
                            markPoint: {
                                symbolSize: 30,
                                label: {
                                    normal: {
                                        show: false
                                    },
                                    emphasis: {
                                        show: true,
                                        position: 'top',
                                        formatter: function (params) {

                                            return Math.round(params.data.coord[0] * 100) / 100 + '  '
                                                + Math.round(params.data.coord[1] * 100) / 100 + ' ';
                                        },
                                        textStyle: {
                                            color: '#000'
                                        }
                                    }
                                },

                                itemStyle: {
                                    normal: {
                                        opacity: 0.8
                                    }
                                },
                                data: [{
                                    coord: centroids[i]
                                }]
                            }
                        });
                    }

                    myChart.setOption({
                        legend: {
                            data: []
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        xAxis: {
                            type: 'value'
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: series
                    });

                });