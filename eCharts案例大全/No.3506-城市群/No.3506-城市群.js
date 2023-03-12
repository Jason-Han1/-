var chinacity = '/asset/get/s/data-1620817527698-8XFpYB5Al.json';

var bbw = '/asset/get/s/data-1620817553230-EdprRKa_7.json';

var cy = '/asset/get/s/data-1620817560750-fr_spFWbZ.json';

var dz = '/asset/get/s/data-1620817565649-_7-h9AFsa.json';

var gzpy = '/asset/get/s/data-1620817573181-cdAUh_OzX.json';

var hc = '/asset/get/s/data-1620817584963-BqsM9acAz.json';

var hxxa = '/asset/get/s/data-1620817590443-9wsDoZqTR.json';

var hbey = '/asset/get/s/data-1620817598909-vbI1YcMU5.json';

var jz = '/asset/get/s/data-1620817604017-MI43KUA7-.json';

var jjj = '/asset/get/s/data-1620817608783-k2JBZl-6o.json';

var lx = '/asset/get/s/data-1620817615149-m9vHBz_bI.json';

var lzn = '/asset/get/s/data-1620817623138-UupFVSk0b.json';

var nxyh = '/asset/get/s/data-1620817632118-otv5_v4lP.json';

var qz = '/asset/get/s/data-1620817640442-a1iwMDWak.json';

var sdbd = '/asset/get/s/data-1620817647277-FtpMzzTx3.json';

var tsbp = '/asset/get/s/data-1620817659510-E0C8xBI7u.json';

var yga = '/asset/get/s/data-1620817667731-ZvsoQp6KU.json';

var cjsj = '/asset/get/s/data-1620817673194-Hr2_H18Kk.json';

var cjzy = '/asset/get/s/data-1620817678713-GHbKEKODu.json';

var zy = '/asset/get/s/data-1620817685073-L4-fN8eV_.json';

let mapname = chinacity;
let silent = false;
let mapJson = [
    {
        name: '北部湾城市群',
        json: bbw,
    },
    {
        name: '成渝城市群',
        json: cy,
    },
    {
        name: '滇中城市群',
        json: dz,
    },
    {
        name: '关中平原城市群',
        json: gzpy,
    },
    {
        name: '哈长城市群',
        json: hc,
    },
    {
        name: '海峡西岸城市群',
        json: hxxa,
    },
    {
        name: '呼包鄂榆城市群',
        json: hbey,
    },
    {
        name: '晋中城市群',
        json: jz,
    },
    {
        name: '京津冀城市群',
        json: jjj,
    },
    {
        name: '兰西城市群',
        json: lx,
    },
    {
        name: '辽中南城市群',
        json: lzn,
    },
    {
        name: '宁夏沿黄城市群',
        json: nxyh,
    },
    {
        name: '黔中城市群',
        json: qz,
    },
    {
        name: '山东半岛城市群',
        json: sdbd,
    },
    {
        name: '天山北坡经济带',
        json: tsbp,
    },
    {
        name: '粤港澳大湾区',
        json: yga,
    },
    {
        name: '长江三角城市群',
        json: cjsj,
    },
    {
        name: '长江中游城市群',
        json: cjzy,
    },
    {
        name: '中原城市群',
        json: zy,
    },
];
setTimeout(function () {
    initMap();
}, 0);
myChart.on('click', function (e) {
    if (!silent) {
        var chooseName = mapJson.filter((item) => {
            return item.name == e.name;
        });
        mapname = chooseName[0].json;
        // silent = true;
        initMap();
        silent = true;
    }
});
myChart.on('mouseover', function (params) {
    if (params.name == '中华人民共和国') {
        myChart.dispatchAction({
            geoIndex: 0,
            type: 'downplay',
            name: '中华人民共和国',
        });
    }
});
myChart.getZr().on('click', function (event) {
    // 没有 target 意味着鼠标/指针不在任何一个图形元素上，它是从“空白处”触发的。
    if (!event.target) {
        mapname = chinacity;
        initMap();
        silent=false
    }
});
let initMap = function () {
    $.getJSON(mapname, function (geoJson) {
        echarts.registerMap('citymap', geoJson);
        let option = {
            geo: {
                map: 'citymap',
                aspectScale: 0.75, //长宽比
                zoom: 1.1,
                roam: false,
                // silent: silent,
            },
            series: {},
        };
        myChart.setOption(option);
    });
};
