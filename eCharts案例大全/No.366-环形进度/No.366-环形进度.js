nData=85
option = {
    backgroundColor: '#042130',
    tooltip: {
        formatter: '{b} : {c}',
        triggerOn: 'mousemove',
        backgroundColor: 'rgba(1,70,86,1)',
        borderColor: 'rgba(0,246,255,1)',
        borderWidth: 0.5,
    },
    angleAxis: {
        max: 0,
        clockwise: false,
        startAngle: -45,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    polar: {
        center: ['50%', '60%'],
        radius: '20%', //图形大小
    },
    series: [
        //由外往内第一层线色部分
        {
            name: 'ring5', //最里层圆环
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() * 0.5,
                        cy: api.getHeight() * 0.7,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2,
                        startAngle: (180 * Math.PI) / 180,
                        endAngle: (360 * Math.PI) / 180,
                    },
                    style: {
                        stroke: '#01B5DB',
                        fill: 'transparent',
                        lineWidth: 1,
                    },
                    silent: true,
                };
            },
            data: [0],
        },
        //由外往内第二层线色部分
        {
            zlevel: 1,
            type: 'pie',
            radius: ['94%', '92%'],
            center: ['50%', '70%'],
            data: [
                {
                    value: 180,
                    itemStyle: {
                        normal: {
                            color: '#01B5DB',
                        },
                    },
                },
                {
                    value: 180,
                    itemStyle: {
                        opacity: 0,
                    },
                },
            ],
            tooltip: { show: false },
            startAngle: 180,
            endAngle: 0,
            hoverAnimation: false,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
        },
        //由外往内第三层灰色部分
        {
            zlevel: 1,
            type: 'pie',
            radius: ['92%', '83%'],
            center: ['50%', '70%'],
            data: [
                {
                    value: 180,
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,213,255, 0.2)',
                        },
                    },
                },
                {
                    value: 188,
                    itemStyle: {
                        opacity: 0,
                    },
                },
            ],
            tooltip: { show: false },
            startAngle: 178,
            endAngle: 2,
            hoverAnimation: false,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
        },
        //由外往内第四层刻度部分
        {
            type: 'gauge',
            radius: '78%', // 1行3个
            center: ['50%', '70%'],
            splitNumber: 4,
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    color: '#00c8f1',
                },
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#00D5FF',
                    width: 1,
                },
                length: 8,
                splitNumber: 10,
            },
            splitLine: {
                show: true,
                length: 8,
                lineStyle: {
                    fontWeight: 400,
                    color: '#00D5FF',
                },
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: 0,
            },
            detail: {
                show: 0,
            },
        },
        //最里面黄色圆环进度部分
        {
            zlevel: 2,
            type: 'pie',
            radius: ['55%', '62%'],
            center: ['50%', '70%'],
            data: [
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: '#FFCF40',
                            borderWidth: 2,
                            shadowBlur: 3,
                            shadowColor: '#FFCF40',
                        },
                    },
                },
                {
                    value: 0,
                    itemStyle: {
                        opacity: 0,
                    },
                },
            ],
            tooltip: { show: false },
            startAngle: 180,
            endAngle: 0,
            hoverAnimation: false,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
        },
        //最里面圆环底色部分
        {
            zlevel: 1,
            type: 'pie',
            radius: ['55%', '62%'],
            center: ['50%', '70%'],
            data: [
                {
                    value: 180,
                    itemStyle: {
                        normal: {
                            color: '#1E3756',
                            borderWidth: 2,
                            borderColor: '#1E3756',
                        },
                    },
                },
                {
                    value: 180,
                    itemStyle: {
                        opacity: 0,
                    },
                },
            ],
            tooltip: { show: false },
            startAngle: 180,
            endAngle: 0,
            hoverAnimation: false,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
        },
        //标题和数字部分
        {
            type: 'gauge',
            radius: '45%',
            center: ['50%', '60%'],
            min: 0,
            max: 100,
            splitNumber: 5,
            axisLine: {
                show: false,
                lineStyle: {
                    opacity: 0,
                },
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            detail: {
                color: '#fff',
                fontSize: 100,
                offsetCenter: [0, 15],
                fontWeight: 700,
            },
            title: {
                //标题
                show: false,
            },
            data: [],
        },
        {
            name: 'ring5', //最里层圆环绿点
            type: 'custom',
            coordinateSystem: 'none',
            zIndex: 9,
            z: 9,
            renderItem: (params, api) => {
                let x0 = api.getWidth() * 0.502; //偏右一点
                let y0 = api.getHeight() * 0.7;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2;
                let point = getCirlPoint(x0, y0, r, 360);
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 2,
                    },
                    style: {
                        stroke: '#01B5DB', //绿
                        fill: '#01B5DB',
                    },
                    silent: true,
                };
            },
            data: [0],
        },
        {
            name: 'ring5', //最里层圆环绿点
            type: 'custom',
            coordinateSystem: 'none',
            zIndex: 9,
            z: 9,
            renderItem: (params, api) => {
                let x0 = api.getWidth() * 0.502; //偏右一点
                let y0 = api.getHeight() * 0.7;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.93;
                let point = getCirlPoint(x0, y0, r, 360);
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 4,
                    },
                    style: {
                        stroke: '#01B5DB', //绿
                        fill: '#01B5DB',
                    },
                    silent: true,
                };
            },
            data: [0],
        },

        {
            name: 'ring5', // 左第一绿点
            type: 'custom',
            coordinateSystem: 'none',
            zIndex: 9,
            z: 9,
            renderItem: (params, api) => {
                let x0 = api.getWidth() * 0.498; //偏左一点
                let y0 = api.getHeight() * 0.7;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2;
                let point = getCirlPoint(x0, y0, r, 180);
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 2,
                    },
                    style: {
                        stroke: '#01B5DB', //绿
                        fill: '#01B5DB',
                    },
                    silent: true,
                };
            },
            data: [0],
        },

        {
            name: 'ring5', //左第二绿点
            type: 'custom',
            coordinateSystem: 'none',
            zIndex: 9,
            z: 9,
            renderItem: (params, api) => {
                let x0 = api.getWidth() * 0.498; //偏左一点
                let y0 = api.getHeight() * 0.7;
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.93;
                let point = getCirlPoint(x0, y0, r, 180);
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 4,
                    },
                    style: {
                        stroke: '#01B5DB', //绿
                        fill: '#01B5DB',
                    },
                    silent: true,
                };
            },
            data: [0],
        },
    ],
};
option.series[4].data[0].value = (nData / 100) * 180
option.series[4].data[1].value = 360 - option.series[4].data[0].value
option.series[6].data = [nData]
function getCirlPoint(x0, y0, r, angle) {
    let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
    let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
    return {
        x: x1,
        y: y1
    }
}