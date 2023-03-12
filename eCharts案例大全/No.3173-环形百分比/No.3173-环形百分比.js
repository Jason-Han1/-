let angle = 0; //角度，用来做简单的动画效果的
let value = 80;
var timerId;
option = {
    backgroundColor: '#000E1A',
    angleAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    radiusAxis: {
        type: 'category',
        data: ['其他', '资源加工工业', '轻纺工业', '机械电子制造业'],
        z: 100,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            // margin: 20,
            padding: 50,
            fontSize: 10,
            formatter: function (value, index) {
                var list = [12, 25, 48, 60];
                return list[index] + '%';
            },
            textStyle: {
                color: '#96F5F6',
            },
            interval: 0,
        },
    },
    polar: {
        center: ['50%', '50%'],
        radius: ['20%', '94.5%'],
    },
    tooltip: {
        show: false,
    },
    series: [
        {
            type: 'pie',
            name: '内层细圆环',
            animation: false,
            radius: ['85.3%', '85.3%'],
            startAngle: 0,
            hoverAnimation: false,
            clockWise: true,
            itemStyle: {
                borderWidth: 1,
                borderColor: '#fff',
                borderType: 'dashed',
            },
            label: {
                show: false,
            },
            data: [0],
            z: 1,
        },
        {
            type: 'pie',
            name: '内层细圆环',
            animation: false,
            radius: ['66.5%', '66.5%'],
            startAngle: 0,
            hoverAnimation: false,
            clockWise: true,
            itemStyle: {
                borderWidth: 1,
                borderColor: '#fff',
                borderType: 'dashed',
            },
            label: {
                show: false,
            },
            data: [0],
            z: 1,
        },
        {
            type: 'pie',
            name: '内层细圆环',
            animation: false,
            radius: ['47.8%', '47.8%'],
            startAngle: 0,
            hoverAnimation: false,
            clockWise: true,
            itemStyle: {
                borderWidth: 1,
                borderColor: '#fff',
                borderType: 'dashed',
            },
            label: {
                show: false,
            },
            data: [0],
            z: 1,
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['29.1%', '29.1%'],
            startAngle: 0,
            animation: false,
            hoverAnimation: false,
            clockWise: true,
            itemStyle: {
                borderWidth: 1,
                borderColor: '#fff',
                borderType: 'dashed',
            },
            label: {
                show: false,
            },
            data: [0],
            z: 1,
        },
        {
            type: 'bar',
            barWidth: '20%',
            data: [12, 0, 0, 0],
            coordinateSystem: 'polar',
            name: '其他',
            stack: 'a',
            roundCap: true,
            itemStyle: {
                color: '#CC1CAA',
                barBorderRadius: 5,
            },
            z: 2,
        },
        {
            type: 'bar',
            data: [0, 25, 0, 0],
            coordinateSystem: 'polar',
            name: '资源加工工业',
            stack: 'a',
            roundCap: true,
            itemStyle: {
                color: '#8D67FF',
            },
        },
        {
            type: 'bar',
            data: [0, 0, 40, 0],
            coordinateSystem: 'polar',
            name: '轻纺工业',
            stack: 'a',
            roundCap: true,
            itemStyle: {
                color: '#00FFFF',
                barBorderRadius: 5,
            },
        },
        {
            type: 'bar',
            data: [0, 0, 0, 60],
            coordinateSystem: 'polar',
            name: '机械电子制造业',
            stack: 'a',
            roundCap: true,
            itemStyle: {
                color: '#48DE13',
                barBorderRadius: 5,
            },
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['15%', '15.1%'],
            startAngle: 0,
            animation: false,
            hoverAnimation: false,
            clockWise: true,
            itemStyle: {
                borderWidth: 1,
                borderColor: '#FF8E89',
                // borderType: 'dashed',
            },
            label: {
                show: false,
            },
            data: [0],
            z: 1,
        },
        {
            name: 'ring5', //紫点
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.15;
                let point = getCirlPoint(x0, y0, r, 90 + angle);
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 8,
                    },
                    style: {
                        stroke: '#FF8E89', //粉
                        fill: '#FF8E89',
                    },
                    silent: true,
                };
            },
            data: [0],
        },
    ],
};
//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
function getCirlPoint(x0, y0, r, angle) {
    let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
    let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
    return {
        x: x1,
        y: y1,
    };
}

function draw() {
    angle = angle + 3;
    myChart.setOption(option, true);
    //window.requestAnimationFrame(draw);
}
if (timerId) {
    clearInterval(timerId);
}
timerId = setInterval(function () {
    //用setInterval做动画感觉有问题
    draw();
}, 30);
