//var myChart = echarts.init(document.getElementById('main1'));

var rotateNum = 360, xinYongTimer;

function xingYongPie() {

    var pieData = [{
        name: 'A级',
        value: 80
    }, {
        name: 'B级',
        value: 50
    }, {
        name: 'C级',
        value: 20
    }];

    var colorList = ['#66CDAA', '#FFA54F', '#FF0000'];

    var option = {
        title:{
          text: '图形旋转示例'  
        },
        tooltip: {

            show: true,

            trigger: 'item',

            enterable: true,

            axisPointer: {
                type: 'shadow'
            },

            showDelay: 0, //显示延时，添加显示延时可以避免频繁切换

            hideDelay: 50, //隐藏延时

            transitionDuration: 0, //动画变换时长

            backgroundColor: 'rgba(0,0,0,0.7)', //背景颜色（此时为默认色）

            borderRadius: 8, //边框圆角

            padding: 10, // [5, 10, 15, 20] 内边距

            position: function(point, e, dom, rect, size) {

                $(dom).css("max-height", "300px");

                $(dom).css("overflow-y", "auto");

                return [point[0] + 10, point[1] - 10];

            },

            //triggerOn:'click',

            formatter: function(params) {

                var type = params.data.name;

                var color = params.color;

                var len = 20;

                if (type == "A级") {
                    len = 80
                };

                if (type == "B级") {
                    len = 50
                };

                var contentHtml = '<table id="xinYongTab" style="width:240px;height:300px;overflow-y:auto">';

                for (var i = 1; i <= len; i++) {

                    contentHtml += '<tr><td width="30px" style="color:' + color + '" >' + type + '</td><td class="infoText" title="览海特需门诊">览海特需门诊</td><td width="50px" class="infoText">98分</td></tr>';

                }

                contentHtml += '</table>';

                stopRotate();

                return contentHtml;

            }

        },

        series: [

            {

                name: '',

                type: 'pie',

                data: pieData,

                startAngle: rotateNum,

                center: ['50%', '45%'], //饼图的中心（圆心）坐标

                radius: ['40%', '80%'], //饼图的半径

                itemStyle: { //图形样式

                    normal: {

                        borderColor: '#1e2239',

                        borderWidth: 0.1,

                        color: function(params) {

                            return colorList[params.dataIndex]

                        }

                    },

                },

                label: { //标签的位置

                    normal: {

                        show: true,

                        position: 'inside', //标签的位置

                        formatter: "{b}",

                        textStyle: {

                            color: '#fff',

                        }

                    },

                    emphasis: {

                        show: true,

                        textStyle: {

                            fontWeight: 'bold'

                        }

                    }

                }

            }

        ]

    };

    myChart.clear();

    myChart.setOption(option, true);

    //鼠标事件：'click'，'dblclick'，'mousedown'，'mouseup'，'mouseover'，'mouseout'，'globalout'。

    myChart.on('mouseover', function(params) {

        var opt = myChart.getOption();

        stopRotate();

        myChart.setOption(opt);

    });

    myChart.on('mouseout', function(params) {

        var opt = myChart.getOption();

        startRotate();

        myChart.setOption(opt);

    });

}

function rotate() {

    rotateNum--;

    if (rotateNum == 0) {

        rotateNum = 360;

    }

    var option = myChart.getOption();

    option.series[0].startAngle = rotateNum;

    myChart.setOption(option);

}

function startRotate() {

    xinYongTimer = setInterval(rotate, 100);

}

function stopRotate() {

    clearInterval(xinYongTimer);

    xinYongTimer = null;

}

/*
window.onload = function() {
    xingYongPie();
    setTimeout(startRotate, 500);
}*/
xingYongPie();
setTimeout(startRotate, 500);
