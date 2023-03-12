var uploadedDataURL = "/asset/get/s/data-1483664927969-r1dX0P2Sl.json";

function showProvince() {
    var name = 'hn';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
           
            backgroundColor: '#404a59',//地图背景颜色
            title: {
				text:'河南省',//text: provincesText[currentIdx],地图名称
                left: 'center',
                textStyle: {
                    color: '#fff'
//                     color:'#4e9b41'//字体颜色
                }
            },
            series: [
                {
                    type: 'map',
                    mapType: name,
                    label: {
                        emphasis: {
                            textStyle: {
                                color: '#fff'
//                                 color:'#4e9b41'//鼠标悬浮显示的字体颜色
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#389BB7',
                            areaColor: '#fff',
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0
                        }
                    },
                    animation: false
                }
            ]
        });
    });
}
showProvince();
//点击市区返回名称(向后台发送数据)
myChart.on('click',function(params){
	var city = params.name;
    alert(city); 
})