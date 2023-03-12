 option = {
                    xAxis: {
                        triggerEvent: true,
                        type: 'category',
                        data: ['这是名称非常长的商品1', '这是名称比商品1还长很多的商品2', '这同样是名称很长的商品3', '短的商品4'],
                        axisLabel: {
                            formatter: function(value) {
                                var res = value;
                                if(res.length > 7) {
                                    res = res.substring(0, 6) + "..";
                                }
                                return res;
                            }
                        }
                    },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [120, 200, 150, 80],
                            type: 'bar'
                        }]
                    }

                    myChart.setOption(option);

                    extension(myChart);

                    function extension(mychart) {
　　　　　　　　　　　　　　//判断是否创建过div框,如果创建过就不再创建了
                        var id = document.getElementById("extension");
                        if(!id) {
                            var div = "<div id = 'extension' sytle=\"display:none\"></div>"
                            $('html').append(div);
                        }

                        mychart.on('mouseover', function(params) {
                            if(params.componentType == "xAxis") {
                                $('#extension').css({
                                    "position": "absolute",
                                    "color": "black",
                                    //"border":"solid 2px white",
                                    "font-family": "Arial",
                                    "font-size": "20px",
                                    "padding": "5px",
                                    "display": "inline"
                                }).text(params.value);

                                $("html").mousemove(function(event) {
                                    var xx = event.pageX - 30;
                                    var yy = event.pageY + 20;
                                    $('#extension').css('top', yy).css('left', xx);
                                });
                            }
                        });

                        mychart.on('mouseout', function(params) {
                            if(params.componentType == "xAxis") {
                                $('#extension').css('display', 'none');
                            }
                        });

                    };