//data from http://kepler.gl/#/

const URLS = [
    '/asset/get/s/data-1545048052616-gQB5B2AC2.txt',
    '/asset/get/s/data-1545048059447-gcWE5ECQt.txt',
    '/asset/get/s/data-1545048064249-kh4z-rD5z.txt',
    '/asset/get/s/data-1545048092463-6a4JT8yiT.txt',
    '/asset/get/s/data-1545048087945-r5NyeL8Zq.txt',
    '/asset/get/s/data-1545048081162-aEtkoqOv5.txt',
    '/asset/get/s/data-1545048075561-O8t-pYfG6.txt',
    '/asset/get/s/data-1545048069355-3nMgGCLRg.txt'
];

const LEN = URLS.length;
let lines = [];

function getColor(elevation) {
    let color = 'red';
    if (elevation < 50) color = '#0198BD';
    if (elevation >= 50 && elevation < 220) color = '#49E3CE';
    if (elevation >= 220 && elevation < 390) color = '#E8FEB5';
    if (elevation >= 390 && elevation < 460) color = '#FEEDB1';
    if (elevation >= 460 && elevation < 650) color = '#FEAD54';
    if (elevation >= 650) color = '#D50255';
    return color;

}

function getData(idx) {
    fetch(URLS[idx]).then(res => res.text()).then(data => {
        data = LZString.decompressFromBase64(data);
        data = JSON.parse(data);
        console.log(data.length);
        if (idx === LEN - 1) {
            console.log('getdata finish');
            myChart.hideLoading();
            initChart(lines);
        } else {
            data.forEach(d => {
                let lnglats = (d.geometry || {}).coordinates || [];
                const elevation = d.properties.elevation || 1;
                const color = getColor(elevation);

                for (let i = 0, len = lnglats.length; i < len; i++) {
                    lnglats[i] = lnglats[i].concat(elevation);
                }
                lines.push({
                    coords: lnglats,
                    lineStyle: {
                        color: color

                    }
                });
            })
            getData(++idx);
        }
    })
}
myChart.showLoading();
getData(0);


function initChart(data) {
    var option = {
        maptalks3D: {
            bearing: 0,
            center: [-122.45258435030888, 37.751668560326806],
            pitch: 52.40000000000002,
            zoom: 13,
            urlTemplate: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            altitudeScale: 2,
            // postEffect: {
            //     enable: true,
            //     FXAA: {
            //         enable: true
            //     }
            // },
            // light: {
            //     main: {
            //         intensity: 1,
            //         shadow: true,
            //         shadowQuality: 'high'
            //     },
            //     ambient: {
            //         intensity: 0.
            //     },
            //     ambientCubemap: {
            //         texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
            //         exposure: 1,
            //         diffuseIntensity: 0.5,
            //         specularIntensity: 2
            //     }
            // }
        },
        series: [{
            type: 'lines3D',
            coordinateSystem: 'maptalks3D',
            // effect: {
            //     show: true,
            //     constantSpeed:1,
            //     trailWidth: 1,
            //     trailLength: 1,
            //     trailOpacity: 1,
            //     spotIntensity: 10
            // },

            // blendMode: 'lighter',

            polyline: true,

            lineStyle: {
                width: 0.8,
                color: 'rgb(100, 100, 0)',
                opacity: 1.
            },

            data: data
        }]
    }
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}