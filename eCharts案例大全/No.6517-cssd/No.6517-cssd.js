var date = {
  
}
option = {
     tooltip: {
        formatter: function (params) {
            return params.marker + `${params.value[1].toFixed(2)}-${params.value[2].toFixed(2)} | ${params.value[3].toFixed(2)}`
        }
    },
     visualMap: {
        orient: 'horizontal',
        left: 'center',
        show: false,
        min: 1,
        max: 10,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        dimension: 3,
        inRange: {
            color: ['#8EC9EB', '#253f5a']
        }
    },
    yAxis: {
        type: 'category',
        data: ['八通线', '15号线', '14号线（东段）', '6号线', '13号线'],
        axisTick: {
            show: false
        },
         axisLabel: {
           show: true,
           color: '#8EC9EB'
         },
         axisLine: {
           lineStyle: {
             color: '#8EC9EB'
           }
         }
    },
    xAxis: {
        type: 'value',
        min: 7.00,
        max: 8.40,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: 0.5,
            color: '#8EC9EB',
            formatter: (value) => String(Math.floor(value * 100)).charAt( String(Math.floor(value * 100)).length - 1) === '5' ? '' : value.toFixed(2)
        },
        splitLine: {
          lineStyle: {
              color: 'red',
              type: 'dash'
          }
        },
         axisLine: {
           lineStyle: {
             color: '#8EC9EB'
           }
         },
        interval: 0.05,
        data: [7,8]
    },
    series: [{
        data: [
            {value: [0,7.50,8.00, 2.02]},
            {value: [1,7.10,8.10, 6.03]}
         ],
        type: 'custom',
         label: {
            show: true,
            color: '#666',
            formatter: (params) => `${params.value[1].toFixed(2)}-${params.value[2].toFixed(2)} | ${params.value[3].toFixed(2)}`
        },
        renderItem: function (params, api) {
            var categoryIndex = api.value(0);
            var startPoint = api.coord([api.value(1), categoryIndex]);
            var endPoint = api.coord([api.value(2), categoryIndex]);
            var height = api.size([0, 1])[1] * 0.6;
            var rectShape = echarts.graphic.clipRectByRect({
                // 矩形的位置和大小。
                x: startPoint[0],
                y: startPoint[1] - height / 2,
                width: endPoint[0] - startPoint[0],
                height: height
            }, {
                // 当前坐标系的包围盒。
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            });

            // 这里返回为这个 dataItem 构建的图形元素定义。
            return rectShape && {
                // 表示这个图形元素是矩形。还可以是 'circle', 'sector', 'polygon' 等等。
                type: 'rect',
                shape: rectShape,
                // 用 api.style(...) 得到默认的样式设置。这个样式设置包含了
                // option 中 itemStyle 的配置和视觉映射得到的颜色。
                style: api.style()
            };
        }
    }]
};