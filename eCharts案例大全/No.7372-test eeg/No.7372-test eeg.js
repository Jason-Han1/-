var uploadedDataURL = "/asset/get/s/data-1591770442335-Z1n28JXXX.json";

// myChart.showLoading();

$.getJSON(uploadedDataURL, function (data) {
    
   var label = data.data.label;
                        var labelChannels = label.channels;
                        var labelLocation = label.location;

                        var bins = [];
                        for (var i = 0; i < labelChannels.length; i++) {
                            bins[i] = [];
                            var labelData = labelChannels[i].data;
                            for (var j = 0; j < labelData.length; j++) {
                                labelData[j] == 1 && bins[i].push(j);
                            }
                        }
                        
                        for (var i = 0; i < bins.length; i++) {
                            var bin = bins[i];
                            var len = bin.length;
                            var drawData = labelChannels[i].drawData = [];
                            var start = end = bin[0];
                            if (len === labelChannels[i].data.length) {
                            //    start = bin[0];
                               end = bin[len - 1];
                               drawData.push({
                                   start: start,
                                   end: end,
                                   duration: end - start
                               });
                            }
                            else if (len === 0) {
                                drawData.push({
                                    start: start,
                                    end: end,
                                    duration: 0
                                });
                            }
                            else {
                                // start = bin[0];
                                // end = bin[0];
                                var k = 1;
                                do {
                                    var j = k;
                                    while ( j < len) {
                                        if (bin[j] - bin[j - 1] === 1) {
                                            end = bin[j];
                                            j++; 
                                        }
                                    }

                                    drawData.push({
                                        start: start,
                                        end: end,
                                        duration: end - start
                                    });

                                    start = bin[j];
                                    end =  bin[j];
                                    k = ++j;

                                } while (k < len);
                            }
                        }

                        // ----------------------start
                        // 新的事件标注的可视化从这里开始，上面数据处理部分忽略
                        var eventData = [];
                        echarts.util.each(labelChannels, function (channel, index) {
                            // var baseTime = startTime;
                            for (var i = 0; i < channel.drawData.length; i++) {
                                var event = channel.drawData[i];
                                if (event.duration > 0) {
                                    eventData.push({
                                        name: channel.name,
                                        value: [
                                            channel.name,
                                            event.start,
                                            event.end,
                                            event.duration
                                        ]
                                    });
                                }
                            }
                        });

                        function renderEventItem(params, api) {
                            var categoryIndex = api.value(0);
                            var start = api.coord([api.value(1), categoryIndex]);
                            var end = api.coord([api.value(2), categoryIndex]);
                            var height = api.size([0, 1])[1] * 0.9;

                            var rectShape = {
                                x: start[0],
                                y: start[1] - height / 2,
                                width: end[0] - start[0],
                                height: height
                            };

                            return {
                                type: 'rect',
                                shape: rectShape,
                                style: {
                                    fill: '#660066'
                                }
                            };
                        }
                        // ---------------------- end
                        
                        //以下是之前绘制信道折线图部分，跟之前一样忽略
                        var rawData = data.data.data;
                        var channels = rawData.channels;
                        var location = rawData.location;

                        // 这里设置波幅
                        var Z_HEIGHT = 120;

                        var minX = Infinity;
                        var maxX = -Infinity;
                        var minZ = Infinity;
                        var maxZ = -Infinity;
                        
                        var drawData = [];
                        channels.forEach(function (channel) {
                            var lineData = [];
                            for (var i = 0; i < channel.data.length; i++) {
                                minX = Math.min(minX, i);
                                maxX = Math.max(maxX, i + 1);
                                var y = channel.name;
                                var z = channel.data[i];
                                minZ = Math.min(minZ, z);
                                maxZ = Math.max(maxZ, z);
                            
                                lineData.push(i, y, z);
                            }
                            drawData.push(lineData);
                        });

                        option = {
                            tooltip: {
                                trigger: 'item',
                                // axisPointer: {
                                //     axis: 'x'
                                // },
                                formatter: function (params) {
                                     console.log(params, 'params');
                                    if (params[0].componentIndex === 1) {
                                        var params = params[0];
                                        console.log(params);
                                       
                                        return params.marker + params.name + '<br />' 
                                            + 'start: ' + params.value[1] + '<br />'
                                            + 'end: ' + params.value[2] + '<br />'
                                            + 'duration: ' + params.value[3] + '<br />';
                                    }
                                    
                                }
                            },
                            xAxis: {
                                // bottom: 10,
                                offset: 25,
                                axisLine: {
                                    // show: false
                                },
                                min: minX,
                                max: maxX,
                                splitLine: {
                                    show: false
                                }
                            },
                            yAxis: {
                                type:'category',
                                position: 'left',
                                splitLine: {
                                    show: false
                                }
                            },
                            grid: {
                                left: '15%',
                                height: 850,
                                bottom: '10%'
                            },
                            series: [
                                {
                                    type: 'custom',
                                    dimensions: ['x', 'y'],
                                    renderItem: function (params, api) {
                                        var points = [];
                                        for (var i = 0; i < drawData[params.dataIndex].length;) {
                                            var x = api.value(i++);
                                            var y = api.value(i++);
                                            var z = api.value(i++);
                                            
                                            var pt = api.coord([x, y]);
                                            
                                            // Linear map in z axis
                                            pt[1] -= (z - minZ) / (maxZ - minZ) * Z_HEIGHT - Z_HEIGHT * 0.5;
                                            points.push(pt);
                                        }
                                        return {
                                            type: 'polyline',
                                            
                                            //----------start
                                            // 加一个这个让紫色的 bar 显示在下面，避免遮住曲线，参考eeg
                                            z2: 10,
                                            // ----------end
                                            shape: {
                                                points: points,
                                            },
                                            style: api.style({
                                                stroke: '#8dd3c7',
                                                lineWidth: 2,
                                                fill: "none"
                                            }),
                                            styleEmphasis: {
                                                stroke: 'blue'
                                            }
                                        }
                                    },
                                    data: drawData,
                                },
                                // --------------start
                                // 新的事件标注的系列
                                {
                                    type: 'custom',
                                    clip: true,
                                    renderItem:  renderEventItem,
                                    data: eventData,
                                    encode: {
                                        x: [1, 2],
                                        y: 0
                                    }

                                }
                                //-----------------end
                            ]
                        };

                        myChart.setOption(option);
                    });