var uploadedDataURL = "/asset/get/s/data-1634457724732-G8-4CXo7t.json";

var dt = [
    { name: '梁弄镇', value: 1, selected: true },
    { name: '四明山镇', value: 2 },
    { name: '大岚镇', value: 3 },
    { name: '大隐镇', value: 4 },
    { name: '鹿亭乡', value: 5 },
    { name: '河姆渡镇', value: 6 },
    { name: '三七市镇', value: 7 },
    { name: '丈亭镇', value: 8 },
    { name: '凤山街道', value: 9 },
    { name: '梨洲街道', value: 10 },
    { name: '兰江街道', value: 11 },
    { name: '阳明街道', value: 12 },
    { name: '低塘街道', value: 13 },
    { name: '陆埠镇', value: 14 },
    { name: '牟山镇', value: 15 },
    { name: '马渚镇', value: 17 },
    { name: '朗霞街道', value: 18 },
    { name: '小曹娥镇', value: 19 },
    { name: '泗门镇', value: 20 },
    { name: '临山镇', value: 21 },
    { name: '黄家埠镇', value: 22 },
];

var option = {
    title: {
        text: '余姚市',
        subtext: '各区县',
        x: 'center',
    },
    tooltip: {
        show: false,
    },
    visualMap: {
        show: false,
        type: 'piecewise',
        min: 1, //13327.3,

        max: 22, //381.3,

        text: ['High', 'Low'],
        x: 'left',
        y: 'left',

        inRange: {
            color: ['#CCE2F5', '#026ECB'],
        },

        inverse: true,
    },
    toolbox: {
        show: false,
    },
    series: [
        {
            name: '余姚市',
            type: 'map',
            map: 'cs',

            roam: false,
            label: {
                normal: {
                    /*    formatter: '{b}\n{c}',*/
                    formatter: function (params) {
                        console.log(params);
                        let temp = '';
                        if (!isNaN(params.value)) {
                            temp = params.value;
                        }
                        return params.name + '\n' + temp;
                    },
                    //position: 'right',
                    show: true,
                    color: '#fff',
                    textBorderColor: '#004BD3',
                    textBorderWidth: 2,
                },
                rich: {
                    c: {
                        color: '#fff',
                    },
                },
                emphasis: {
                    show: true,
                },
            },

            layoutCenter: ['50%', '50%'], //属性定义地图中心在屏幕中的位置，一般结合layoutSize 定义地图的大小
            layoutSize: '100%',
            aspectScale: 1.2,
            itemStyle: {
                // color: 'red',
                normal: {
                    borderWidth: 1, //边际线大小
                    borderColor: '#fff', //边界线颜色
                },
                emphasis: {
                    areaColor: '#F35656',
                    label: {
                        color: '#fff',
                        textBorderColor: '#004BD3',
                        textBorderWidth: 2,
                    },
                },
            },
            select: {
                itemStyle: {
                    areaColor: '#F35656',
                },
                label: {
                    color: '#fff',
                    textBorderColor: '#004BD3',
                    textBorderWidth: 2,
                },
            },
            data:dt,
        },
    ],
};
 $.get(uploadedDataURL, function (csJson) {
          echarts.registerMap('cs', csJson);

          myChart.setOption(option, true);
        
});

