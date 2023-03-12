

loadMap('/asset/get/s/data-1591152454850-nnifVpUft.json', 'china'); //初始化全国地图
// 先请求全国数据
var item = [
    { 
        name: '贵州', 
        value: 9.143 ,
        per:'23.52%'
    },
    { 
        name: '江苏', 
        value: 80 ,
        per:'23.52%'
    },

]

function loadMap(mapCode, name) {
    $.get(mapCode, function(data) {
        if (data) {
            echarts.registerMap(name, data);
            var option = {
                backgroundColor: '#fff',
                tooltip: {
                    formatter: function(params) {
                        console.log(params)
                        let str = `<div style="width:153px;background:#fff;border: 1px solid #E5E5E5;border-radius: 3px;margin:-5px">
                            <div style="font-size:12px;color:#333;padding:10px 14px;border-bottom:1px solid #EBEBEB;">
                              ${params.name}
                            </div>`
                        if(params.data) {
                            str += `
                            <div style="padding:10px 14px;font-size:12px;color:#333">
                              <div style="margin-bottom:10px;">
                                <span style="display:inline-block;color:#6C767E;width:80px;font-weight: 400;">攻击量</span>
                                <span>${params.value}</span>
                              </div>
                              <div>
                                <span style="display:inline-block;color:#6C767E;width:80px;font-weight: 400;">攻击量占比</span>
                                <span>${params.data.per}</span>
                              </div>
                            </div>`
                        }else {
                            str += '</div>'
                        }
                        return str
                    }

                },
                visualMap: {
                    min: 0,
                    max: 38,
                    left: 40,
                    bottom: 40,
                    text: ['高', '低'],
                    calculable: false,
                    inRange: {
                        color: [ '#FEB71D','#FF0001'],
                        // symbolSize: [0, 100]
                    },
                    show: true
                },
                series: [{
                    type: 'map',
                    mapType: name,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            color: '#fff'
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: '#CCCCCC',
                            areaColor: '#fff',
                        },
                        emphasis: {
                            areaColor: '#6daade',
                            color: '#aa14ac'
                        }
                    },
                    data: item
                }]
            };
            myChart.setOption(option);
        } else {
            alert('无法加载该地图');
        }
    });
}