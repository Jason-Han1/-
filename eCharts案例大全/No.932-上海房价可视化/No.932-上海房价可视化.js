//关于这个图表我做的视频简介：https://www.bilibili.com/video/BV1pD4y127tW
//各位观众老爷们一键三连，下次一定！

var uploadedDataURL = "/asset/get/s/data-1495284690309-Bk9Ro3Te-.json";
var t_pos = {
    left: 0,
    top: 0
}

var last_point = [0, 0];
var counter = 0;
myChart.showLoading();
myChart.setOption(option = {
    title: {
        x: 'right',
        text: "上海房价可视化",
        subtext: '随机抽样10000个,数据提取自链家',
        textStyle: {
            color: '#000',
            fontSize: 30
        }
    },
    tooltip: {
        trigger: 'item',
        transitionDuration: 0,
        position: function(point, params, dom, rect, size) {
            var least_area = 20;
            var offset_x = 30; /* 相对于point的偏移 */
            var offset_y = 30;

            /* last_point的least_area范围内不会产生新的t_pos */
            if (Math.abs(point[0] - last_point[0]) < least_area &&
                Math.abs(point[1] - last_point[1]) < least_area &&
                counter >= 2) {
                return t_pos;
            }
            if (Math.abs(point[0] - last_point[0]) >= least_area ||
                Math.abs(point[1] - last_point[1]) >= least_area) {
                counter = 0;
            }
            counter += 1;
            /* 使real_x,real_y有数值 */
            if (counter == 1) {
                t_pos.left = point[0] + offset_x;
                t_pos.top = point[1] + offset_y;
                last_point = [point[0], point[1]];
            }
            /* 此处进行修正tooltip的位置 */
            if (counter == 2) {
                var real_x = $(dom).position().left;
                var real_y = $(dom).position().top;
                t_pos.left += point[0] - real_x + offset_x;
                t_pos.top += point[1] - real_y + offset_y;
            }
            return t_pos;
        },
        formatter: function(params) {
            return params.name + ' : ' + params.value[2] + '元/平方米';
        }
    },

    bmap: {
        center: [121.4693, 31.123070],
        zoom: 11,
       roam: true
        
    },
    visualMap: {
        //type: 'piecewise',
        top: '5%',
        splitNumber: 5,
        min: 0,
        max: 10,
        seriesIndex: 0,
        calculable: true,
        inRange: {
            color: ['green', '#eac736', '#d94e5d']
        },
        textStyle: {
            color: '#000',
            formatter: 'aaaa{value}bbbb{value2}' // 范围标签显示内容。
        }

    },
    series: [{
        type: 'scatter',
        coordinateSystem: 'bmap',
        symbolSize: 8,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
    }]
});
if (!app.inNode) {
    // 添加百度地图插件
    var bmap = myChart.getModel().getComponent('bmap').getBMap();
    bmap.addControl(new BMap.MapTypeControl());
}


if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

;
$.getJSON(uploadedDataURL, function(linedata) {

    myChart.hideLoading();
    myChart.setOption({

        visualMap: {
            max: linedata[1]
        },
        series: [{
            data: linedata[0]
        }]
    });
});