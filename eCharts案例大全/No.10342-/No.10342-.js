 option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar = params[0];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            grid: {
                top: '3%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type : 'category',
                splitLine: {show:false},
                data : ['总收入','二级','互动','住宅部','工商铺','按揭','金融','房友圈','其他']
            },
            yAxis: {
                type : 'value',
                show:false
            },
            series: [
                {
                    name: '辅助',
                    type: 'bar',
                    stack:  '总量',
                    itemStyle: {
                        normal: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    data: [0, 1700, 1400, 1200, 800,600,400,200, 0]
                },
                {
                    name: '生活费',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data:[2900, 1200, 300, 200,426,185,200, 200, 300]
                }
            ]
        };