const units = ['个', 'GW', '个'];
option = option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        backgroundColor: '#ffffff',
        textStyle: {
            color: '#2D4361',
        },
        formatter: (params) => {
            let p = params[0].name + '<br>';
            params.map((v, k) => {
                p += v.marker + v.seriesName + ': ' + v.value + ' ' + units[k] + '<br>';
            });
            p +=
                '<span style="display:inline-block;width:14px;height:10px;"></span>已备案占比: ' +
                Number(params[2].value / params[0].value) * 100 +
                ' %';
            return p;
        },
        position: function (point, params, dom, rect, size) {
          // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
          // 提示框位置
          var x = 0; // x坐标位置
          var y = 0; // y坐标位置

          // 当前鼠标位置
          var pointX = point[0];
          var pointY = point[1];

          // 外层div大小
          // var viewWidth = size.viewSize[0];
          // var viewHeight = size.viewSize[1];

          // 提示框大小
          var boxWidth = size.contentSize[0];
          var boxHeight = size.contentSize[1];

          // boxWidth > pointX 说明鼠标左边放不下提示框
          if (boxWidth > pointX) {
            x = 5;
          } else { // 左边放的下
            x = pointX - boxWidth;
          }

          // boxHeight > pointY 说明鼠标上边放不下提示框
          if (boxHeight > pointY) {
            y = 5;
          } else { // 上边放得下
            y = pointY - boxHeight;
          }

          return [x, y];
        }
    },
    grid: {
        bottom: 45
    },
    legend: {
        top: 'bottom',
        itemWidth: 10,
        itemHeight: 10,
        icon: 'roundRect',
    },
    xAxis: [
        {
            type: 'category',
            axisLine: { show: false },
            axisTick: { show: false },
            data: [
                '黑龙江',
                '山西',
                '黑龙江',
                '河南',
                '河北',
                '河南',
                '湖北',
                '云南',
                '黑龙江',
                '湖北',
                '安徽',
                '河北',
                '湖南',
                '安徽',
                '河北',
                '河北',
                '黑龙江',
                '湖南',
                '北京',
                '湖北',
                '河南',
                '河北',
                '安徽',
                '湖北',
                '安徽',
                '河南',
                '河南',
                '安徽',
            ],
        },
    ],
    yAxis: [
        { type: 'value', name: '个', splitLine: { show: false } },
        { type: 'value', name: 'MW', splitLine: { show: false } },
    ],
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 45,
            zoomLock: false,
        },
        {
            show: false,
            type: 'slider',
            start: 0, //数据窗口范围的起始百分比。范围是：0 ~ 100。
            end: 45, //数据窗口范围的结束百分比。范围是：0 ~ 100。
            textStyle: {
                color: 'rgba(255, 255, 255, .7)',
            },
            handleIcon:
                'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        },
    ],
    series: [
        {
            name: '项目数',
            type: 'bar',
            data: [1, 1, 1, 8, 12, 3, 1, 1, 1, 2, 10, 7, 2, 5, 11, 1, 1, 3, 2, 1, 3, 5, 23, 1, 7, 1, 3, 1],
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 3,
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [
                            { offset: 0, color: '#00FF9E' },
                            { offset: 1, color: '#00D27F' },
                        ],
                    },
                },
            },
        },
        {
            name: '容量数',
            type: 'bar',
            data: [
                null,
                8,
                321,
                58,
                33444444594,
                44444444622,
                null,
                5,
                null,
                null,
                1411,
                1000000978,
                23,
                190,
                276,
                1111111,
                null,
                10,
                10,
                null,
                33333752,
                2212222245635,
                10394,
                null,
                100604,
                4,
                null,
                null,
            ],
            barWidth: 10,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 3,
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [
                            { offset: 0, color: '#00D3FF' },
                            { offset: 1, color: '#0099FF' },
                        ],
                    },
                },
            },
        },
        {
            name: '已备案数',
            type: 'line',
            data: [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0],
            symbol: 'circle',
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            itemStyle: { normal: { width: 2.5, color: '#FFCC00' } },
        },
    ],
};
