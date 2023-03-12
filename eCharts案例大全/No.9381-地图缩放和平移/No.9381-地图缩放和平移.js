option = {
    title: {
        text: '世界地图'
    },
    geo: {
                map: 'world',
                center: [115.97, 29.71],    // 当前视角的中心点，用经纬度表示
                roam: true,        // 缩放平移
                zoom: 3.2,    // 当前视角的缩放比例
                silent: true
            },
};


            echarts.registerMap('world', mapJson);
            
            