var oridata = [
    [120, 132, 101, 134, 90, 230, 210],
    [220, 182, 191, 234, 290, 330, 310],
    [150, 232, 201, 154, 190, 330, 410]
];
var data0 = [];
var data1 = [];
var data2 = [];
var total;
for (var i = 0, l = oridata[0].length; i < l; i++) {
    total = oridata[0][i] + oridata[1][i] + oridata[2][i];
    data0.push(Math.round(oridata[0][i] / total * 100));
    data1.push(Math.round(oridata[1][i] / total * 100));
    data2.push(100 - data0[data0.length - 1] - data1[data1.length - 1]);
}
option = {
    tooltip: {
        trigger: 'axis',
        enterable: false,
        // position: function(point, params, dom, rect, size) {
        //     // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
        //     // 提示框位置
        //     var x = 0; // x坐标位置
        //     var y = 0; // y坐标位置

        //     // 当前鼠标位置
        //     var pointX = point[0];
        //     var pointY = point[1];

        //     // 外层div大小
        //     // var viewWidth = size.viewSize[0];
        //     // var viewHeight = size.viewSize[1];

        //     // 提示框大小
        //     var boxWidth = size.contentSize[0];
        //     var boxHeight = size.contentSize[1];

        //     // boxWidth > pointX 说明鼠标左边放不下提示框
        //     if (boxWidth > pointX) {
        //         x = 5;
        //     } else { // 左边放的下
        //         x = pointX - boxWidth;
        //     }

        //     // boxHeight > pointY 说明鼠标上边放不下提示框
        //     if (boxHeight > pointY) {
        //         y = 5;
        //     } else { // 上边放得下
        //         y = pointY - boxHeight;
        //     }

        //     return [x, y];
        // },

        backgroundColor: 'rgba(255,255,255,0.7)',
        borderColor: 'rgba(0,0,0,.1)',
        borderWidth: 1,
        textStyle: {
            color: 'rgba(0,0,0,.65)',
            fontSize:12
        }

    },
    // width:360,
    height: 160,
    backgroundColor: '#fff',
    color: ['#5b8ff9', '#5ad8a6', '#5d7092', '#f6bd16', '#e8684a', '#6dc8ec', '#9270ca', '#ff9d4d', '#269a99', '#ff99c3'],
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告']
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#666',
            },
        },
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#666',
            },
        },
    }],
    series: [{
            name: '邮件营销',
            type: 'line',
            stack: '广告',
            areaStyle: {},
            symbol: false,
            data: data0
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '广告',
            areaStyle: {},
            symbol: false,
            data: data1
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '广告',
            areaStyle: {},
            symbol: false,
            data: data2
        }
    ]
};