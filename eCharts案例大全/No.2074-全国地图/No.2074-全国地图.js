var uploadedDataURL = "/asset/get/s/data-1630141775159-gVh_vU0zT.json";

myChart.showLoading();
   
     
$.getJSON(uploadedDataURL, function(geoJson) {
        myChart.hideLoading();
    var option = {
    backgroundColor: "#FFFFFF",
    geo: {
        map: "china",
        roam: false,
        zoom: 1.2,
        scaleLimit: { min: 0, max: 3 }, // 缩放级别
        regions: [
            {
                name: "南海诸岛",
                value: 0,
                itemStyle: {
                    normal: {
                        opacity: 0,
                        label: {
                            show: false,
                        },
                    },
                },
            },
        ],
        itemStyle: {
            areaColor: "#BEDAEE", //默认的地图板块颜色
            borderWidth: 1,
            borderColor: "#009ce0",
        },
    },
    title: {
        text: "资源池分步",
        x: "center",
        y: 20,
    },
    tooltip: {
        trigger: "item",
    },

    //配置属性
    series: [
        {
            name: "数据",
            type: "map",
            mapType: "china",
            roam: false,
            geoIndex: 0,
            label: {
                normal: {
                    show: false, //省份名称,
                },
                emphasis: {
                    show: false,
                },
            },
            data: [
                { name: "北京", value: Math.round(Math.random() * 500) },
                { name: "天津", value: Math.round(Math.random() * 500) },
                { name: "上海", value: Math.round(Math.random() * 500) },
                { name: "重庆", value: Math.round(Math.random() * 500) },
                { name: "河北", value: Math.round(Math.random() * 500) },
                { name: "河南", value: Math.round(Math.random() * 500) },
                { name: "云南", value: Math.round(Math.random() * 500) },
                { name: "辽宁", value: Math.round(Math.random() * 500) },
                { name: "黑龙江", value: Math.round(Math.random() * 500) },
                { name: "湖南", value: Math.round(Math.random() * 500) },
                { name: "安徽", value: Math.round(Math.random() * 500) },
                { name: "山东", value: Math.round(Math.random() * 500) },
                { name: "新疆", value: Math.round(Math.random() * 500) },
                { name: "江苏", value: Math.round(Math.random() * 500) },
                { name: "浙江", value: Math.round(Math.random() * 500) },
                { name: "江西", value: Math.round(Math.random() * 500) },
                { name: "湖北", value: Math.round(Math.random() * 500) },
                { name: "广西", value: Math.round(Math.random() * 500) },
                { name: "甘肃", value: Math.round(Math.random() * 500) },
                { name: "山西", value: Math.round(Math.random() * 500) },
                { name: "内蒙古", value: Math.round(Math.random() * 500) },
                { name: "陕西", value: Math.round(Math.random() * 500) },
                { name: "吉林", value: Math.round(Math.random() * 500) },
                { name: "福建", value: Math.round(Math.random() * 500) },
                { name: "贵州", value: Math.round(Math.random() * 500) },
                { name: "广东", value: Math.round(Math.random() * 500) },
                { name: "青海", value: Math.round(Math.random() * 500) },
                { name: "西藏", value: Math.round(Math.random() * 500) },
                { name: "四川", value: Math.round(Math.random() * 500) },
                { name: "宁夏", value: Math.round(Math.random() * 500) },
                { name: "海南", value: Math.round(Math.random() * 500) },
                { name: "台湾", value: Math.round(Math.random() * 500) },
                { name: "香港", value: Math.round(Math.random() * 500) },
                { name: "澳门", value: Math.round(Math.random() * 500) },
            ], //数据
        },
    ],

}
        //地图组件
      echarts.registerMap("china", geoJson);
      //地图
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    
})


  