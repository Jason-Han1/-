var img =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAUCAYAAAAdmmTCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzQThFQjlBRjc0OTExRUJBMUJBOEVBQzQ3NkFDRkRCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgzQThFQjlCRjc0OTExRUJBMUJBOEVBQzQ3NkFDRkRCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNBOEVCOThGNzQ5MTFFQkExQkE4RUFDNDc2QUNGREIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODNBOEVCOTlGNzQ5MTFFQkExQkE4RUFDNDc2QUNGREIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6xDyqEAAAAsklEQVR42mKU/fz/PwMa+HX0bALDIANs1sYL0MUYQY7/tf9E1N/X7z7+//T5B8MgB4x8vBzMokL8bI4Wy1hAAiCH/7nz8P2fB4+/DXbHsyjIcsHZIAIU4iCH/7508zvDEADMYkKcIJqJYQgDpsGYOYkBIHcP7ZAfdfyo40cdP+r4UccPb8dja2oOBQBy95AOeRZYGxm5qTnYm8Qg98IdD2rcIzc1h0JnBN6TGqrdQIAAAwBCdT3RLn1YJgAAAABJRU5ErkJggg==';
option = {
    backgroundColor: '#00265f',
    tooltip: {
        show: false,
    },
    grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%',
    },
    xAxis: [
        {
            type: 'category',
            data: ['制造业', '建筑业', '农林牧渔', '房地产', '金融业', '居民服务及其他'],
            axisLine: {
                show: false,
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    fontFamily: 'PingFangSC-Regular',
                    fontSize: 14,
                    color: '#afd9ff',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            name: '单位：笔数',
            nameGap: 30,
            nameTextStyle: {
                fontFamily: 'PingFangSC-Regular',
                fontSize: 14,
                color: '#afd9ff',
            },
            axisLabel: {
                formatter: '{value}',
                fontFamily: 'PingFangSC-Regular',
                fontSize: 14,
                color: '#afd9ff',
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,1)',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        //上方圆圈
        {
            silent: true,
            type: 'pictorialBar',
            symbolSize: [18, 6],
            symbolOffset: [0, -4],
            symbolPosition: 'end',
            z: 12,
            label: {
                show: false,
                position: 'top',
                offset: [0, 0],
                fontSize: 14,
                color: '#fff',
            },
            color: 'rgba(29,221,255,0.9)',
            data: [23, 14, 56, 78, 89, 78],
        },
        //上方数据
        {
            type: 'pictorialBar',
            symbol: 'image://' + img,
            symbolSize: [50, 30],
            symbolOffset: [0, -60],
            symbolPosition: 'end',
            z: 12,
            label: {
                show: true,
                position: 'top',
                offset: [0, 25],
                fontFamily: 'DINPro-Medium',
                fontSize: 14,
            },
            color: '#ffffff',
            data: [23, 14, 56, 78, 89, 78],
        },
        //上方圆圈
        {
            silent: true,
            type: 'pictorialBar',
            symbolSize: [18, 6],
            symbolOffset: [0, 4],
            symbolPosition: 'start',
            z: 12,
            label: {
                show: false,
            },
            color: 'rgba(29,221,255,0.9)',
            data: [23, 14, 56, 78, 89, 78],
        },
        {
            name: '计划笔数',
            type: 'bar',
            //silent: true,
            stack: 'bar',
            barWidth: 18,
            // barGap: "10%", // Make series be overlap
            barCateGoryGap: '20%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: 'rgba(56,249,233,0.6)',
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(56,249,233,0.4)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(56,249,233,0.6)',
                        },
                    ]),
                    z: 10,
                    // opacity: 0.7,
                },
            },
            data: [23, 14, 56, 78, 89, 78],
        },
    ],
};
