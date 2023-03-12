app.title = '极坐标系下的堆叠柱状图';

option = {
     textStyle: {
            fontSize: 24, 
            fontWeight: 'bold',
            fontFamily: 'Arial',
            color:'#f2f2f2',
        },

    backgroundColor: '#003366',
    angleAxis: {
                nameTextStyle:{
            fontSize: 20,
        },
    },
    radiusAxis: {
        type: 'category',
        data: ['China', 'Japan', 'UK', 'Germany', 'US'],
        z: 10,
        nameTextStyle:{
            fontSize: 20,
            fontWeight: 'bold'
        },
    },
    polar: {},
    series: [
        {
            type: 'bar',
            data: [15, 23, 32, 34, 83],
            coordinateSystem: 'polar',
            name: '医药科学',
            stack: 'a',
            label:{
            fontSize:20,
        },
        }, 
        {
            type: 'bar',
            data: [14, 22, 21, 29, 48],
            coordinateSystem: 'polar',
            name: '生命农学',
            stack: 'a'
            
        }, {
            type: 'bar',
            data: [13, 18, 18, 19, 41],
            coordinateSystem: 'polar',
            name: '基础理科',
            stack: 'a'
        }, {
            type: 'bar',
            data: [8, 13, 11, 17, 40],
            coordinateSystem: 'polar',
            name: '工程技术',
            stack: 'a'
        }, {
            type: 'bar',
            data: [3, 3, 8, 7, 35],
            coordinateSystem: 'polar',
            name: '社科交叉',
            stack: 'a'
        },
    ],
    legend: {
        show: true,
        orient: 'vertical',
        top: "center",
        right: "6%",
        data: ['医药科学', '生命农学', '基础理科', '工程技术', '社科交叉'],
        textStyle: {
            color: '#f2f2f2',
            fontSize: 20, // 主标题文字颜色
        },

    }
};