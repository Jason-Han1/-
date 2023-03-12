var chinaContourUrl = "/asset/get/s/data-1469097271266-SkyrH7CP.json";

$.getJSON(chinaContourUrl, function (json) {
    echarts.registerMap('china-contour', json);
    
    myChart.setOption({
        geo: [{
            map: 'china',
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    shadowBlur: 50,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: '#aaa',
                }
            }
        }]
    });
});
var uploadedDataURL = "/asset/get/s/data-1487164546975-SyiFER-Yg.txt";


function randomData() {
    return Math.round(Math.random()*1000);
}

option = {
    title: {
        text: '各省藏区药科研发机构',
        subtext: '空间分布图',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['2017年']
    },
    visualMap: {
        min: 0,
        max: 500,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true,
        inRange: {
                color: [ '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '2016年',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '北京',value: 298 },
                {name: '天津',value: 20 },
                {name: '上海',value: 15 },
                {name: '重庆',value: 51 },
                {name: '河北',value: 3 },
                {name: '河南',value: 0 },
                {name: '云南',value: 75 },
                {name: '辽宁',value: 11 },
                {name: '黑龙江',value: 11 },
                {name: '湖南',value: 14 },
                {name: '安徽',value: 0 },
                {name: '山东',value: 4 },
                {name: '新疆',value: 9 },
                {name: '江苏',value: 50 },
                {name: '浙江',value: 4 },
                {name: '江西',value: 52 },
                {name: '湖北',value: 14 },
                {name: '广西',value: 0 },
                {name: '甘肃',value: 325 },
                {name: '山西',value: 3 },
                {name: '内蒙古',value: 18 },
                {name: '陕西',value: 33 },
                {name: '吉林',value: 11 },
                {name: '福建',value: 1 },
                {name: '贵州',value: 2 },
                {name: '广东',value: 18 },
                {name: '青海',value: 492 },
                {name: '西藏',value: 219 },
                {name: '四川',value: 402 },
                {name: '宁夏',value: 0 },
                {name: '海南',value: 0 },
                {name: '台湾',value: 0 },
                {name: '香港',value: 0 },
                {name: '澳门',value: 0}
            ]
        },
        
        
    ]
};
