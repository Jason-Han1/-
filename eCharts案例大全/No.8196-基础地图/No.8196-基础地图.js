var uploadedDataURL = "/asset/get/s/data-1519279347346-BkslpCjwf.json";

/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，
来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。
但是也可以用这个 geoIndex 指定一个 geo 组件。
这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。
并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，
以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('anhui', geoJson);
    myChart.hideLoading();
    option = {
        backgroundColor: '#091c3d',
        title: {
            top:20,
            text: '',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },    

        tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
        },
        legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
        textStyle: {
            color: '#fff'
        }
        }, 
        geo: {
            show: true,
            map: 'anhui',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series : []
    };
    myChart.setOption(option);
});