option = {
    title: {
        text: '振捣位置(顶视图)',
        textStyle: {
            color: 'RGB(180,184,188)',
        },
    },
    tooltip: {
        trigger: 'none',
    },
    // grid: { left: '5%', right: '50px', top: '1%', bottom: '1%' },
    yAxis: [{
        type: 'value',
        data: [100],
        show: true,
        axisLabel: {
            show: false,
        },
        splitLine: false,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    }],
    xAxis: {
        type: 'category',
        axisLabel: {
            interval: 0,
            show: true,
            color: '#00ff67',
            align: 'right',
            fontSize: 18,
            // backgroundColor: {
            //   image: vibratingRing,
            //   width: '135',
            //   height: '35',
            // },
            width: 55,
            height: 55,
            borderColor: '#99999920',
            borderWidth: 2,
        },
        splitLine: false,
        axisTick: false,
        show: true,
        // interval: 10,
        axisLine: {
            show: false,
        },
        data: ['A1', 'A2', 'A3', 'A4', 'A5'],
    },
    series: getSeriesData(),
}

function getSeriesData() {
    const seriesData = [{
        type: 'bar',
        data: [100, 100, 100, 100, 100],
        stack: 'item',
        barMaxHeight: '120px',
        barMaxWidth: '120px',
        itemStyle: {
            color: '#24354820',
            borderColor: '#0bb8d7',
            borderWidth: 2,
            // borderType: 'dashed',
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10,
        },
        barGap: '0%',
        barCategoryGap: '0%',
    }];

    seriesData.push({
        name: '当前',
        type: 'effectScatter',
        coordinateSystem: 'cartesian2d',
        data: [
            ['A1', 85],
            ['A1', 50],
            ['A1', 15],
            ['A2', 85],
            ['A2', 50],
            ['A2', 15],
            ['A3', 85],
            ['A3', 50],
            ['A3', 15],
        ], // 2d坐标系
        symbolSize: 10,
        symbolOffset: [25, 0],
        showEffectOn: 'render',
        // rippleEffect: {
        //   brushType: 'stroke',
        // },
        rippleEffect: {
            period: 10,
            scale: 5,
            brushType: 'stroke',
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true,
            },
        },
        itemStyle: {
            normal: {
                color: 'orange',
                shadowBlur: 10,
                shadowColor: '#333',
            },
        },
        zlevel: 1,
    });
    seriesData.push({
        name: '当前',
        type: 'effectScatter',
        coordinateSystem: 'cartesian2d',
        data: [
            ['A1', 85],
            ['A1', 50],
            ['A1', 15],
            ['A2', 85],
            ['A2', 50],
            ['A2', 15],
            ['A3', 85],
            ['A3', 50],
            ['A3', 15],
        ], // 2d坐标系
        symbolSize: 10,
        symbolOffset: [-25, 0],
        showEffectOn: 'render',
        // rippleEffect: {
        //   brushType: 'stroke',
        // },
        rippleEffect: {
            period: 10,
            scale: 5,
            brushType: 'stroke',
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true,
            },
        },
        itemStyle: {
            normal: {
                color: 'orange',
                shadowBlur: 10,
                shadowColor: '#333',
            },
        },
        zlevel: 1,
    });

    return seriesData;
}