var uploadedDataURL = "/asset/get/s/data-1641799723453-_SqgBq685.json";
// 1. 初始化地图
$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap("tianjin", geoJson);
    option = {
        legend: {
            orient: "vertical",
            top: 20,
            left: 20,
            data: [
                { name: "失能评估申请", textStyle: { color: "#fff" } },
                { name: "符合享受待遇", textStyle: { color: "#fff" } },
            ],
            selectedMode: false,
        },
        geo: {
            map: "tianjin",
            roam: true,
            zoom: 1.2,
            label: { show: false, color: "#fff" },
            itemStyle: { areaColor: "#033786", borderWidth: 2, borderColor: "#48D6FD", color: "#eee" },
            emphasis: {
                label: { color: "#fff", show: true },
                itemStyle: {
                    areaColor: "#FFE700",
                    borderWidth: 2,
                    borderColor: "#48D6FD",
                    color: "rgba(255,215,0,0.8)",
                },
            },
            silent: true,
            scaleLimit: { min: 1.2, max: 7 },
            zlevel: 0,
            z: 0,
            show: true,
            left: "center",
            top: "center",
            aspectScale: null,
            boundingCoords: null,
            center: null,
            select: { label: { show: true, color: "rgb(100,0,0)" }, itemStyle: { color: "rgba(255,215,0,0.8)" } },
            regions: [
                { name: "滨海新区", label: { show: true } },
                { name: "西青区", label: { show: true } },
                { name: "河东区", label: { show: true } },
                { name: "津南区", label: { show: true } },
                { name: "东丽区", label: { show: true } },
                { name: "红桥区", label: { show: true } },
                { name: "蓟州区", label: { show: true } },
                { name: "静海区", label: { show: true } },
                { name: "河北区", label: { show: false } },
                { name: "北辰区", label: { show: true } },
                { name: "武清区", label: { show: true } },
                { name: "宝坻区", label: { show: true } },
                { name: "宁河区", label: { show: true } },
                { name: "南开区", label: { show: false } },
                { name: "河西区", label: { show: true } },
                { name: "和平区", label: { show: false } },
            ],
            selectedMap: {},
        },
        series: [
            {
                name: "失能评估申请",
                coordinateSystem: "geo",
                type: "effectScatter",
                showEffectOn: "render",
                rippleEffect: { brushType: "stroke" },
                itemStyle: { color: "#2CD050", shadowBlur: 10, shadowColor: "#333" },
                symbolSize: 10,
                data: [],
            },
            {
                name: "符合享受待遇",
                coordinateSystem: "geo",
                type: "effectScatter",
                showEffectOn: "render",
                rippleEffect: { brushType: "stroke" },
                itemStyle: { color: "#F66B72", shadowBlur: 10, shadowColor: "#333" },
                symbolSize: 10,
                data: [],
            },
        ],
    };
    myChart.setOption(option);
});

// 2. 添加缩放区域展示
// 根据视图缩放判断区域名称是否展示
const controlLabelShowByZoom = (zoom, data) => {
    data = data || [
        { name: "滨海新区" },
        { name: "西青区" },
        { name: "河东区" },
        { name: "津南区" },
        { name: "东丽区" },
        { name: "红桥区" },
        { name: "蓟州区" },
        { name: "静海区" },
        { name: "河北区" },
        { name: "北辰区" },
        { name: "武清区" },
        { name: "宝坻区" },
        { name: "宁河区" },
        { name: "南开区" },
        { name: "河西区" },
        { name: "和平区" },
    ];
    zoom = zoom || 1.2;
    return data.map((v) => {
        if (v.name === "南开区") {
            v.label = { ...v.label, show: zoom >= 1.45 };
        } else if (["河北区", "和平区"].includes(v.name)) {
            v.label = { ...v.label, show: zoom >= 2.6 };
        } else {
            v.label = { ...v.label, show: true };
        }
        return v;
    });
};
// 缩放事件监听
myChart.on("georoam", (params) => {
    option.series = myChart.getOption().series;
    option.geo = myChart.getOption().geo[0];
    if (params.dy === undefined && params.dx === undefined) {
        let zoom = myChart.getOption()?.geo[0].zoom;
        option.geo.regions = controlLabelShowByZoom(zoom);
        myChart.clear();
        // true => noMerge:true 不进行选项合并，使用覆盖方式
        myChart.setOption(option || {}, true);
    }
});

// 3. 随机生成闪烁点
/**
 * 生成指定区域内随机点
 * @param {*} echartInstance 当前地图组件
 * @param {*} areaName 区域名称
 * @returns [lon,lat]
 */
const generatePointLAL = (echartInstance, areaName) => {
    let region = echartInstance.getModel().getComponent("geo").coordinateSystem.getRegion(areaName);
    let rect = region.getBoundingRect();
    let coord = [Infinity, Infinity];
    while (!region.contain(coord)) {
        coord[0] = rect.x + Math.random() * rect.width;
        coord[1] = rect.y + Math.random() * rect.height;
    }
    return coord;
};

const datas = ["蓟州区", "武清区", "和平区"];
setInterval(function () {
    let d1 = datas.map((v) => ({ name: v, value: generatePointLAL(myChart, v) }));
    let d2 = datas.map((v) => ({ name: v, value: generatePointLAL(myChart, v) }));
    option.series[0].data = d1;
    option.series[1].data = d2;
    myChart.clear();
    // true => noMerge:true 不进行选项合并，使用覆盖方式
    myChart.setOption(option || {}, true);
}, 1000);
