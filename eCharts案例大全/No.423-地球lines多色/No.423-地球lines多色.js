/**
 * @author liang
 * 3D的lines tooltip未开发，期待官方早点弄出来吧
 * github： https://github.com/Mying666/3dLines
 * 什么也没改不要点保存改动版本，谢谢
 * 什么也没改不要点保存改动版本，谢谢
 * 2018.12.12
 * 响应留言区好多小伙伴复制过去没法直接用，是少引入了一些脚本。
 * 单独给小白做了html的demo页，可以参考一下
 * 目前JSON名字并不能完全对上，有些地区无地图，大部分还是好使的
 */

// 使用 echarts 绘制世界地图的实例作为纹理
let canvas = document.createElement('canvas');
let mapChart = echarts.init(canvas, null, {
    width: 4096,
    height: 2048
});
mapChart.setOption({
    series: [{
        type: 'map',
        map: 'world',
        // 绘制完整尺寸的 echarts 实例
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boundingCoords: [
            [-180, 90],
            [180, -90]
        ]
    }]
});
option = {
    title: {
        text: '点击地球获取该区域地图',
        textStyle: {
            color: '#fff'
        }
    },
    backgroundColor: '#7bc3ef',
    tooltip: {
        show: true
    },
    visualMap: [{
        // show: false,
        type: 'continuous',
        seriesIndex: 0,
        text: ['scatter3D'],
        textStyle: {
            color: '#fff'
        },
        calculable: true,
        max: 3000,
        inRange: {
            color: ['#87aa66', '#eba438', '#d94d4c']
        }
    }],
    globe: {
        baseTexture: mapChart,
        environment: new echarts.graphic.LinearGradient(0, 1, 1, 1, [{
  offset: 0, color: '#000000' // 天空颜色
}, {
  offset: 0, color: '#000000' // 地面颜色
}, {
  offset: 0, color: '#000000' // 地面颜色
}], true),
        // shading: 'lambert',
        light: { // 光照阴影
            main: {
                color: '#fff', // 光照颜色
                intensity: 1.2, // 光照强度
                // shadowQuality: 'high', //阴影亮度
                shadow: false, // 是否显示阴影
                alpha: 40,
                beta: -30
            },
            ambient: {
                intensity: 0.5
            }
        },
        viewControl: {
            alpha: 30,
            beta: 160,
            // targetCoord: [116.46, 39.92],
            autoRotate: true,
            autoRotateAfterStill: 10,
            distance: 240
        }
    },
    series: [{
        name: 'lines3D',
        type: 'lines3D',
        coordinateSystem: 'globe',
        effect: {
            show: true
        },
        blendMode: 'lighter',
        lineStyle: {
            width: 2
        },
        data: [],
        silent: false
    }]
}
// 随机数据
for (let i = 0; i < 500; i++) {
    option.series[0].data = option.series[0].data.concat(rodamData())
}

function rodamData() {
    let name = '随机点' + Math.random().toFixed(5) * 100000
    // let longitude = Math.random() * 62 + 73
    let longitude = 105.18
    let longitude2 = Math.random() * 360 - 180
    // let latitude = Math.random() * 50 + 3.52
    let latitude = 37.51
    let latitude2 = Math.random() * 180 - 90
    return {
        coords: [
            [longitude2, latitude2],
            [longitude, latitude]
        ],
        value: (Math.random() * 3000).toFixed(2)
    }
}
// 添加地图详细canvas
$('<canvas id="sMap" style="position: absolute; top: 0; left: 0; width: 100%; height: calc(100% + 30px); background: #333; z-index: -1"></canvas>').appendTo($('#chart-panel'))
// 双击返回地球
$('#sMap').on('dblclick', () => {
    $('#sMap').css('z-index', '-1')
})
let sMap = echarts.init(document.getElementById('sMap'), null, {
    width: $('#sMap').width(),
    height: $('#sMap').height()
})

// 点击地球获取该区域地图
mapChart.on('click', function(params) {
    let name = params.name
    let mapJson = 'https://raw.githubusercontent.com/Mying666/EC-JSON/gh-pages/json/' + name + '.json'
    $('#sMap').css('z-index', '999')
    sMap.showLoading()
    $.getJSON(mapJson, geoJson => {
        let data = []
        geoJson.features.forEach(d => {
            data.push({
                name: d.properties.name,
                value: (Math.random() * 3000).toFixed(2)
            })
        })
        echarts.registerMap(name, geoJson);
        sMap.setOption({
            title: {
                text: '双击返回上一层',
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: [{
                show: false,
                type: 'continuous',
                seriesIndex: 0,
                text: ['scatter3D'],
                textStyle: {
                    color: '#fff'
                },
                calculable: true,
                max: 3000,
                inRange: {
                    color: ['#87aa66', '#eba438', '#d94d4c']
                }
            }],
            series: [{
                type: 'map',
                map: name,
                // roam: true,
                zoom: 1,
                // 绘制完整尺寸的 echarts 实例
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                data: data
            }]
        });
        sMap.hideLoading()
    })
});