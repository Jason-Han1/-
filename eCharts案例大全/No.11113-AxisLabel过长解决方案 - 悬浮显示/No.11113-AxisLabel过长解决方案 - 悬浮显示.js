//1、设置triggerEvent: true,
//2、设置axisLabel->formatter指定显示...
//3、调用hAxisLabel(myChart,"bottom | top","y | x | xy");

let option = {
    xAxis: {
        triggerEvent: true,
        type: 'value'

    },
    yAxis: {
        triggerEvent: true,
        type: 'category',
        data: ['测试列名测试萨达萨达', '哈哈哈哈哈哈哈哈哈', '巴巴爸爸巴巴爸爸', '发反反复复反反复复', '发反反复复反反复复反复发啊', '萨达萨达萨达萨达', '萨达萨达其实达阿斯顿'],
        axisLabel: {
            formatter: function(value) {
                var res = value;
                if (res.length > 5) {
                    res = res.substring(0, 4) + "...";
                }
                return res;
            }
        }

    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};
myChart.setOption(option);

//调用方法启用悬浮框
hAxisLabel(myChart, "bottom", "y");


function hAxisLabel(mychart, position, axis) {
    var id = document.getElementById("hAxisLabelContainer");
    if (!id) {
        var div = "<div id='hAxisLabelContainer' sytle='display:none'></div>"
        $('html').append(div);
    }
    mychart.on('mouseover', function(params) {
        if (axis == "x" ? params.componentType == "xAxis" : (axis == "y" ? params.componentType == "yAxis" : (params.componentType == "yAxis" || params.componentType == "xAxis"))) {
            $('#hAxisLabelContainer').css({
                "position": "absolute",
                "color": "white",
                "font-size": "14px",
                "padding": "4px 8px",
                "display": "inline",
                "background": "#2b2a2a",
                "border-radius": "4px",
                "opacity": "0.9",
                "transition": "all .2s ease"
            }).text(params.value);

            $("html").mousemove(function(event) {

                var _x = event.pageX - 30;
                var _y = 0;
                switch (position) {
                    case 'top':
                        _y = event.pageY - 40;
                        break;
                    case 'bottom':
                        _y = event.pageY + 20;
                        break;
                    default:
                        _y = event.pageY + 20;
                        break;
                }
                $('#hAxisLabelContainer').css('top', _y).css('left', _x);
            });
        }
    });

    mychart.on('mouseout', function(params) {
        if (axis == "x" ? params.componentType == "xAxis" : (axis == "y" ? params.componentType == "yAxis" : (params.componentType == "yAxis" || params.componentType == "xAxis"))) {
            $('#hAxisLabelContainer').css('display', 'none');
        }
    });

};