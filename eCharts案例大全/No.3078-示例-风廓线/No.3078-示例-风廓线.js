function getRandom (min, max, isInt) {
  isInt = isInt === false ? 0 : 1
  min = Math.random() * ( max - min + isInt) + min; // 节省一个变量
  return isInt ? Math.floor(min) : min
}




var dataByMonth = [
    // 第一列
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    
    // 第二列
    [1, 0],
    [1, 0.5],
    [1, 1],
    [1, 1.5],
    [1, 2],
];

// x轴
var months = ['张三', '李四'];


function renderTrendItem(params, api) {
    const point = api.coord([api.value(0), api.value(1)]);
    point[0] -= 15 // x轴偏移量，根据svg宽度的一半调整
    point[1] -= 15 // y轴偏移量，根据svg高度的一半调整
    return {
        type: 'path',
        position: point,
        shape: {
            pathData: 'M377.80484 890.404372c-10.491803 0-18.985168-8.493365-18.985168-18.985168V330.441842L635.303669 136.893052c8.593286-5.995316 20.384075-3.896956 26.479313 4.696331s3.896956 20.384075-4.696331 26.479313L396.790008 350.226386v521.192818c0 10.491803-8.493365 18.985168-18.985168 18.985168z M391.993755 483.322404c-5.995316 0-11.790788-2.797814-15.4879-8.093676-5.995316-8.593286-3.996877-20.384075 4.596409-26.479313L522.591725 349.027322c8.593286-5.995316 20.384075-3.996877 26.479313 4.596409 5.995316 8.593286 3.996877 20.384075-4.596409 26.479313l-141.489461 99.722093c-3.397346 2.398126-7.294301 3.497268-10.991413 3.497267z',
            width: 30,
            height: 30
        },
        originX: 15, // X旋转中心点（宽度的一半）
        originY: 15, // Y旋转中心点（高度的一半）
        rotation: Math.PI / 180 * getRandom(0, 180), // 旋转角度，这里取的随机值
        style: {
            fill: 'red' // svg颜色
        }
    };
}



option = {
    tooltip: {
    },
    xAxis: {
        data: months
    },
    yAxis: {
        
    },
    series: [ {
        type: 'custom',
        name: '风廓线',
        renderItem: renderTrendItem,
        data: dataByMonth
    }]
};