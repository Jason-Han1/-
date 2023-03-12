// 指定图表的配置项和数据
    let [dataArr, allArr, erArr, sanArr] = [[], [], [], []];
    var items = [
        {
            name: "监管大屏",
            pointType: "cloud",
        },
        {
            name: "综合业务监管",
            pointType: "cloud",
        },
        {
            name: "传染性疾病监管",
            pointType: "cloud",
        },
        {
            name: "公共卫生监管",
            pointType: "cloud",
        },
        {
            name: "人口信息监管",
            pointType: "cloud",
        },
        {
            name: "民营医院监管",
            pointType: "cloud",
        },
        {
            name: "互联网医院监管",
            pointType: "cloud",
        },
        {
            name: "基建设备监管",
            pointType: "cloud",
        },
        {
            name: "数据中心",
            pointType: "cloud",
        },
        {
            name: "平台管理",
            pointType: "cloud",
        },
        {
            name: "平台监管大屏",
            pointType: "point",
            belong: "监管大屏",
        },
        {
            name: "综合业务监管大屏",
            pointType: "point",
            belong: "监管大屏",
        },
        {
            name: "民营机构监管大屏",
            pointType: "point",
            belong: "监管大屏",
        },
        {
            name: "公共卫生监管大屏",
            pointType: "point",
            belong: "监管大屏",
        },
        {
            name: "互联网医院监管大屏",
            pointType: "point",
            belong: "监管大屏",
        },
        {
            name: "平台监管大屏2",
            pointType: "point",
            belong: "综合业务监管",
        },
        {
            name: "综合业务监管大屏2",
            pointType: "point",
            belong: "综合业务监管",
        },
        {
            name: "民营机构监管大屏2",
            pointType: "point",
            belong: "综合业务监管",
        },
        {
            name: "公共卫生监管大屏2",
            pointType: "point",
            belong: "综合业务监管",
        },
        {
            name: "互联网医院监管大屏2",
            pointType: "point",
            belong: "综合业务监管",
        },
        {
            name: "平台监管大屏3",
            pointType: "point",
            belong: "传染性疾病监管",
        },
        {
            name: "综合业务监管大屏3",
            pointType: "point",
            belong: "传染性疾病监管",
        },
        {
            name: "民营机构监管大屏3",
            pointType: "point",
            belong: "传染性疾病监管",
        },
        {
            name: "公共卫生监管大屏3",
            pointType: "point",
            belong: "传染性疾病监管",
        },
        {
            name: "互联网医院监管大屏3",
            pointType: "point",
            belong: "传染性疾病监管",
        },
        {
            name: "平台监管大屏4",
            pointType: "point",
            belong: "公共卫生监管",
        },
        {
            name: "综合业务监管大屏4",
            pointType: "point",
            belong: "公共卫生监管",
        },
        {
            name: "民营机构监管大屏4",
            pointType: "point",
            belong: "公共卫生监管",
        },
        {
            name: "公共卫生监管大屏4",
            pointType: "point",
            belong: "公共卫生监管",
        },
        {
            name: "互联网医院监管大屏4",
            pointType: "point",
            belong: "公共卫生监管",
        },
        {
            name: "平台监管大屏5",
            pointType: "point",
            belong: "人口信息监管",
        },
        {
            name: "综合业务监管大屏5",
            pointType: "point",
            belong: "人口信息监管",
        },
        {
            name: "民营机构监管大屏5",
            pointType: "point",
            belong: "人口信息监管",
        },
        {
            name: "人口信息监管大屏5",
            pointType: "point",
            belong: "人口信息监管",
        },
        {
            name: "互联网医院监管大屏5",
            pointType: "point",
            belong: "人口信息监管",
        },
        {
            name: "平台监管大屏6",
            pointType: "point",
            belong: "民营医院监管",
        },
        {
            name: "综合业务监管大屏6",
            pointType: "point",
            belong: "民营医院监管",
        },
        {
            name: "民营机构监管大屏6",
            pointType: "point",
            belong: "民营医院监管",
        },
        {
            name: "民营医院监管大屏6",
            pointType: "point",
            belong: "民营医院监管",
        },
        {
            name: "互联网医院监管大屏6",
            pointType: "point",
            belong: "民营医院监管",
        },
        {
            name: "平台监管大屏7",
            pointType: "point",
            belong: "互联网医院监管",
        },
        {
            name: "综合业务监管大屏7",
            pointType: "point",
            belong: "互联网医院监管",
        },
        {
            name: "民营机构监管大屏7",
            pointType: "point",
            belong: "互联网医院监管",
        },
        {
            name: "民营医院监管大屏7",
            pointType: "point",
            belong: "互联网医院监管",
        },
        {
            name: "互联网医院监管大屏7",
            pointType: "point",
            belong: "互联网医院监管",
        },
        {
            name: "平台监管大屏8",
            pointType: "point",
            belong: "基建设备监管",
        },
        {
            name: "综合业务监管大屏8",
            pointType: "point",
            belong: "基建设备监管",
        },
        {
            name: "民营机构监管大屏8",
            pointType: "point",
            belong: "基建设备监管",
        },
        {
            name: "民营医院监管大屏8",
            pointType: "point",
            belong: "基建设备监管",
        },
        {
            name: "互联网医院监管大屏8",
            pointType: "point",
            belong: "基建设备监管",
        },
        {
            name: "平台监管大屏10",
            pointType: "point",
            belong: "平台管理",
        },
        {
            name: "综合业务监管大屏10",
            pointType: "point",
            belong: "平台管理",
        },
        {
            name: "民营机构监管大屏10",
            pointType: "point",
            belong: "平台管理",
        },
        {
            name: "民营医院监管大屏10",
            pointType: "point",
            belong: "平台管理",
        },
        {
            name: "互联网医院监管大屏10",
            pointType: "point",
            belong: "平台管理",
        },
    ];

    // 点
    items.forEach((el, ind) => {
        if (el.pointType === "cloud") {
            // 云
            el.symbol = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAhCAYAAACSllj+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTg5MEVERTdBNUZGMTFFOEIzNERDMzk3QjJGOEQ3REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTg5MEVERThBNUZGMTFFOEIzNERDMzk3QjJGOEQ3REMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ODkwRURFNUE1RkYxMUU4QjM0REMzOTdCMkY4RDdEQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5ODkwRURFNkE1RkYxMUU4QjM0REMzOTdCMkY4RDdEQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkQLbgwAAAtrSURBVHja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";
            el.symbolSize = [56, 35];
            el.label = {
                normal: {
                    show: true,
                    position: "bottom",
                    borderWidth: 1,
                    borderRadius: 12,
                    padding: [5, 10],
                    distance: 10,
                    color: "#5D77FE",
                    borderColor: "#5D77FE",
                    backgroundColor: 'rgba(93, 119, 254, 0.2)'
                },
            };
            erArr.push(el);
        } else if (el.pointType === "point") {
            // 球
            el.itemStyle = {
                borderColor: '#5D77FE',
                borderWidth: 3,
                color: "#5D77FE",
            };
            // 清除没有父节点的值
            if (el.belong && !items.some((iteP) => el.belong === iteP.name)) {
                items.splice(ind, 1);
            } else {
                sanArr.push(el);
            }
        }
        if (!el.belong) {
            el.children = [];
            items.forEach((es) => {
                if (es.belong === el.name) {
                    el.children.push(es);
                }
            });
            allArr.push(el);
        }
    });

    // 圆形分区
    function group(arr, r) {
        const newArray = [];
        const { length: arLen } = arr;
        let cloud = {}
        arr.forEach((e, ind) => {
            // 按角度均匀分布
            let ang = 0
            if (e.belong) {
                //point角度根据已经分配好的cloud的角度决定
                cloud = erArr.find(obj => {
                    return obj.name === e.belong
                });
                //多个point，在cloud的角度上递增偏移一些角度
                let index = 0
                for (let j = 0; j < cloud.children.length; j++) {
                    if (cloud.children[j].name === e.name) {
                        //是第几个子节点
                        index = j;
                        break;
                    }
                }
                //间隔角度
                var intervalDeg = 7
                let midIndex = cloud.children.length / 2
                //执行角度平均偏移
                ang = cloud.ang + intervalDeg * (index - midIndex)
            } else {
                //分配cloud角度，并记录下
                ang = 90 - (360 / arLen).toFixed(2) * (ind + 1);
                e.ang = ang
            }
            const x = (Math.cos(ang * Math.PI / 180)).toFixed(2) * r;
            const y = (Math.sin(ang * Math.PI / 180)).toFixed(2) * r;
            e.value = [x.toFixed(2), y.toFixed(2)];
            if (e.belong) {
                let rotate = '';
                const angle = (20 / arr.length).toFixed(2);
                if (x > 0 && y >= 0) {
                    rotate = (r - angle * (ind)).toFixed(2);
                } else if (x <= 0 && y > 0) {
                    rotate = (-r + angle * (arr.length - ind)).toFixed(2);
                } else if (x < 0 && y <= 0) {
                    rotate = (r - angle * (ind - arr.length * 0.5)).toFixed(2);
                } else if (x >= 0 && y < 0) {
                    rotate = (-8 + angle * (arr.length * 0.25 - ind)).toFixed(2);
                }
                e.label = {
                    show: true,
                    width: 200,
                    color: {
                        lineColor: {
                            color: "rgb(24,163,239)",
                        },
                    },
                    rotate,
                    align: x > 0 ? 'left' : 'right',
                    padding: x > 0 ? [0, 0, 0, 16] : [0, 16, 0, 0],
                };
                if (e.offset) {
                    e.label.offset = e.offset;
                }
            }
            newArray.push(e);
        });
        return newArray;
    }
    // 线配置
    function linesConfig(arr) {
        const [dataArr, targetCoord] = [[], [0, 0]];
        arr.forEach((el) => {
            if (!el.belong) {
                dataArr.push([
                    { coord: targetCoord },
                    {
                        coord: el.value,
                        lineStyle: el.lineStyle,
                        effect: {
                            symbolSize: [6, 20], // 动画的大小
                            period: 3, // 时间快慢
                            delay: 2, // 延时计算
                            ...el.effect,
                        }
                    },
                ]);
                arr.forEach((element) => {
                    if (element.belong === el.name) {
                        dataArr.push([
                            { coord: el.value },
                            {
                                coord: element.value,
                                lineStyle: element.lineStyle,
                                effect: {
                                    symbolSize: [5, 15], // 动画的大小
                                    period: 3, // 时间快慢
                                    delay: 2, // 延时计算
                                    ...element.effect,
                                },
                            },
                        ]);
                    }
                });
            }
        });
        return dataArr;
    }

    // 点分布
    erArr = group(erArr, 36);
    sanArr = group(sanArr, 50);
    allArr = [...erArr, ...sanArr];

    // 线坐标和配置
    dataArr = linesConfig(allArr);
    option = {
        xAxis: {
            show: false,
            type: "value",
            max: 50,
            min: -51,
        },
        grid: {
            top: 100,
            bottom: 100,
            left: 130,
            right: 130,
        },
        yAxis: {
            show: false,
            type: "value",
            max: 50,
            min: -50,
        },
        series: [{
            type: "graph",
            coordinateSystem: "cartesian2d",
            z: 3,
            itemStyle: {
                normal: {
                    shadowColor: "none",
                },
            },
            data: allArr,
        },
            {
                name: "",
                type: "lines",
                coordinateSystem: "cartesian2d",
                polyline: true,
                z: 1,
                lineStyle: {
                    width: 2,
                    color: '#5D77FE',
                    curveness: 0,
                },
                effect: {
                    show: true,
                    smooth: false,
                    trailLength: 0, // 拖尾的长度
                    symbol: 'pin', // 动画的类型
                },
                data: dataArr,
            },
        ],
    }