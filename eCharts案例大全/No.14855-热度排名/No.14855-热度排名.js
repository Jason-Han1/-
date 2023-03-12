app.title = '极坐标系下的柱状图';

option = {
    title: {
        text: "热度排名(%)",
        subtext: "数值越大表示排名越靠前",
        top: "top",
        left: "center"
    },
    angleAxis: {
        max: 100
    },
    radiusAxis: {
        type: 'category',
        data: ['行业排名', '领域排名', '项目排名'],
        z: 10,
        
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [70, 0, 0],
        coordinateSystem: 'polar',
        name: '行业排名',
        stack: 'a'
    }, {
        type: 'bar',
        data: [0, 40, 0],
        coordinateSystem: 'polar',
        name: '领域排名',
        stack: 'a'
    },{
        type: 'bar',
        data: [0, 0, 80],
        coordinateSystem: 'polar',
        name: '项目排名',
        stack: 'a'
    }],
    legend: {
        show: true,
        top:"bottom",
        data: ['行业排名', '领域排名', '项目排名']
    }
};
