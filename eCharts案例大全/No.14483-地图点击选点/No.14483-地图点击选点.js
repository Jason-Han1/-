//获取中国地图省份geo数据
$.getScript("https://gallerybox.echartsjs.com/dep/echarts/map/js/china.js", function() {
    option = {
        map:{},
        title: {
            text: "地图点击选点"
        },
        tooltip: {
            formatter: function(arg) {
                return arg.data[2] + ":" + arg.data[0] + "," + arg.data[1];
            }
        },
        geo: {
            map: 'china',
            roam: true,
            center: [114.878927, 33.4578]
        },
        series: [{
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            symbolSize: 30,
            name: "test",
            data: [
                [114.878, 33.458, "所选点"]
            ],
            label: {
                normal: {
                    position: "top",
                    show: true,
                    textBorderColor: "#fff",
                    textBorderWidth: 2,
                    fontWeight: 800,
                    fontSize: 10,
                    color: "auto",
                    formatter: function(arg) {
                        return arg.data[0] + "\n" + arg.data[1];
                    }
                }
            }
        }]
    };


    myChart.setOption(option);
    
    //实时展示当前鼠标所在地图位置的坐标
    $(myChart.getDom()).off("mousemove").on("mousemove", myChart, function(event) {
        var data = event.data.convertFromPixel("series", [event.offsetX, event.offsetY]);
        data = [Math.round(data[0] * 1000000) / 1000000, Math.round(data[1] * 1000000) / 1000000];
        $("#myinput").val(JSON.stringify(data));
    });

    
    //点击展示坐标
    $(myChart.getDom()).off("click").on("click", myChart, function(event) {
        var data = event.data.convertFromPixel("series", [event.offsetX, event.offsetY]);
        data = [Math.round(data[0] * 1000000) / 1000000, Math.round(data[1] * 1000000) / 1000000];
        data.push("所选点");
        myChart.setOption({
            series: [{
                data: [data]
            }]
        })
    });
});



var menubox = $("#myinput");
if(menubox.length==0){
    $('<input id="myinput" value="" style="position:fixed;top: 30px;right: 10px;z-index: 999999999999999999999;color: #000;"/>')
    .appendTo($(document.body));
}

