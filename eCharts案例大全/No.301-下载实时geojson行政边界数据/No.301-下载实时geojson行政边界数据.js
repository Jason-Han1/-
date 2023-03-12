/**
 自定义tooltips
边界数据的实时获取与应用，省市区县多级联动【附最新geoJson文件下载】
边界数据可以实时获取，也可以结合geojson本地文件加载

geojson文件下载地址：https://hxkj.vip/demo/echartsMap/

项目GitHub地址（欢迎star）：https://github.com/TangSY/echarts-map-demo

作者：TSY
作者个人空间（欢迎闲逛）：https://hxkj.vip

**/

$(`<div class="map_tips">
        <div v-cloak class="map_tips_city"></div>
        <div class="map_tips_group">
            <div class="map_tips_lol">英雄联盟玩家：856321人</div>
            <div class="map_tips_king">王者荣耀玩家：725654人</div>
            <div class="map_tips_cf">穿越火线玩家：254268人</div>
            <div class="map_tips_car">QQ飞车玩家：125436人</div>
        </div>
    </div>
    <div id="container"></div>
    <div class="back">返回</div>
    <div class="input-card">
            <h4>下属行政区查询</h4>
            <div class="input-item">
                <div class="input-item-prepend"><span class="input-item-text">省市区</span></div>
                <select id='province' style="width:100px"></select>
            </div>
            <div class="input-item">
                <div class="input-item-prepend"><span class="input-item-text">地级市</span></div>
                <select id='city' style="width:100px"></select>
            </div>
            <div class="input-item">
                <div class="input-item-prepend"><span class="input-item-text">区县</span></div>
                <select id='district' style="width:100px"></select>
            </div>
             <div class="input-item-" style='display: none;'>
        <div class="input-item-prepend"><span class="input-item-text" >街道</span></div>
        <select id='street' style="width:100px" onchange='setCenter(this)'></select>
    </div>
    <p>请选择文件命名方式</p>
    <div class="radio">
        <input type="radio" value="name" name="nameType">地域名称
        <input type="radio" value="code" checked name="nameType">地域行政编码
    </div>
    <div class="input-item download" @click="download">下载geoJson数据</div>
</div>`).appendTo(
    $('#chart-panel')
);

$('.back').css({
    'position': 'absolute',
    'width': '100px',
    'padding': '10px 0',
    'top': '30px',
    right: '50px',
    background: '#1c71fb',
    color: '#fff',
    'text-align': 'center',
    'border-radius': '5px',
    cursor:'pointer',
    'z-index': '100'
})

$('.map_tips').css({
    position: 'absolute',
    width: '273px',
    height: '218px',
    color: '#fff',
    'font-size': '14px',
    'background-repeat': 'no-repeat',
    'background-image': 'url(https://s2.ax1x.com/2019/04/26/EmXmcj.png)',
    'background-size': '100% 100%',
    'z-index': '9',
    'pointer-events': 'none',
    display: 'none'
})

$('.map_tips_city').css({
    'margin-top': '35px',
    'margin-left': '32px'
})

$('.map_tips_group').css({
    'margin-top': '29px',
    'margin-left': '82px'
})

$('.map_tips_group div').css({
    'margin-top': '10px'
})

$('*').css({
    'box-sizing': 'border-box'
})

$('#container').css({
    position: 'absolute',
    width: '100%',
    left: '0',
    top: '0',
    height: '100%',
})

$('.input-card').css({
    position: 'fixed',
    top: '10px',
    left: '10px',
    height: '300px',
    display: 'flex',
    'flex-direction': 'column',
    'min-width': '0',
    'word-wrap': 'break-word',
    'background-color': '#fff',
    'background-clip': 'border-box',
    'border-radius': '.25rem',
    width: '22rem',
    'border-width': '0',
    'border-radius': '0.4rem',
    'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
    bottom: '1rem',
    right: '1rem',
    '-ms-flex': '1 1 auto',
    flex: '1 1 auto',
    padding: '0.75rem 1.25rem',
    'z-index': '10'
})

$('.input-item').css({
    position: 'relative',
    display: '-ms-flexbox',
    display: 'flex',
    '-ms-flex-wrap': 'wrap',
    'flex-wrap': 'wrap',
    '-ms-flex-align': 'center',
    'align-items': 'center',
    width: '100%',
    height: '3rem'
})

$('.input-item-text').css({
    width: '6rem',
    'text-align': 'justify',
    padding: '0.4rem 0.7rem',
    display: 'inline-block',
    'text-justify': 'distribute-all-lines',
    'text-align-last': 'justify',
    '-moz-text-align-last': 'justify',
    '-webkit-text-align-last': 'justify',
    '-ms-flex-align': 'center',
    'align-items': 'center',
    'margin-bottom': '0',
    'font-size': '1rem',
    ' font-weight': '400',
    'line-height': '1.5',
    color: '#495057',
    'text-align': 'center',
    'white-space': 'nowrap',
    'background-color': '#e9ecef',
    border: '1px solid #ced4da',
    'border-radius': '.25rem',
    'border-bottom-right-radius': '0',
    'border-top-right-radius': '0',
    height: 'calc(2.2rem + 2px)'
})
var url = "";
var background = `#fff url(${url}) no-repeat right .75rem center`
$('select').css({
    display: 'inline-block',
    width: '100%',
    padding: '.375rem 1.75rem .375rem .75rem',
    'line-height': '1.5',
    color: '#495057',
    'vertical-align': 'middle',
    'background-size': '8px 10px',
    border: '1px solid #ced4da',
    'border-radius': '.25rem',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    appearance: 'none',
    position: 'relative',
    '-ms-flex': '1 1 auto',
    flex: '1 1 auto',
    width: '1%',
    'border-top-left-radius': '0',
    'border-bottom-left-radius': '0',
    height: 'calc(2.2rem + 2px)',
    'margin-bottom': '0'
})

$('.radio').css({
    margin: '3px 0'
})

$($('#chart-panel').children("div").get(0)).css({
    position: 'absolute',
    'z-index': '8'
})

$('.download').css({
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: 'flex',
    '-webkit-box-pack': 'center',
    '-ms-flex-pack': 'center',
    'justify-content': 'center',
    '-webkit-box-align': 'center',
    '-ms-flex-align': 'center',
    'align-items': 'center',
    border: '1px solid #ced4da',
    'border-radius': '.25rem',
    'background-color': '#e9ecef',
    color: '#495057',
    'text-align': 'center',
    cursor: 'pointer'
})

var map, district, polygons = [],
    mapData = [],
    cityCode = 100000,
    cityName = '中国',
    areaCode = 10000,
    geoJsonData = '';
var provinceSelect = document.getElementById('province');
var citySelect = document.getElementById('city');
var districtSelect = document.getElementById('district');
var areaSelect = document.getElementById('street');
var areaData = {};
var deepTree = [{mapData: mapData,code: 100000}];

$("select").change(function() {
    search(this);
});

$('.back').click(function(){
    console.log(deepTree)
    if(deepTree.length>1) {
        mapData = deepTree[deepTree.length - 1].mapData
        deepTree.pop();
        console.log(deepTree[deepTree.length - 1],'back')
        loadMapData(deepTree[deepTree.length - 1].code)
    }
})

map = new AMap.Map('container', {
    resizeEnable: true,
    center: [116.30946, 39.937629],
    zoom: 3
});
//行政区划查询
var opts = {
    subdistrict: 1, //返回下一级行政区
    showbiz: false //最后一级返回街道信息
};
district = new AMap.DistrictSearch(opts); //注意：需要使用插件同步下发功能才能这样直接使用
district.search('中国', function(status, result) {
    if (status == 'complete') {
        getData(result.districtList[0], '', 100000);
    }
});

function echartsMapClick(params) { //地图点击事件
    if (!params.data || params.data.level == 'street') return;
    cityName = params.data.name;
    cityCode = params.data.cityCode;
    district.setLevel(params.data.level); //行政区级别
    district.setExtensions('all');
    //行政区查询
    //按照adcode进行查询可以保证数据返回的唯一性
    district.search(params.data.cityCode, (status, result) => {
        if (status === 'complete') {
            deepTree.push({mapData: mapData,code: params.data.cityCode});
            getData(result.districtList[0], params.data.level, params.data.cityCode);
        }
    });

    setSearchOption(params.data, params.data.level, params.data.cityCode);

    var op = 'option[text=' + cityName + ']';
    if (params.data.level == 'province') {
        $("#province").find(op).attr("selected", true);
    } else if (params.data.level == 'city') {
        $("#city").find(op).attr("selected", true);
    } else {
        $("#district").find(op).attr("selected", true);
    }

};

function loadMapData(areaCode) {
    console.log(areaCode,'loadCode')
    AMapUI.loadUI(['geo/DistrictExplorer'], DistrictExplorer => {

        //创建一个实例
        var districtExplorer = window.districtExplorer = new DistrictExplorer({
            eventSupport: true, //打开事件支持
            map: map
        });

        districtExplorer.loadAreaNode(areaCode, (error, areaNode) => {

            if (error) {
                console.error(error);
                return;
            }
            let mapJson = {};
            mapJson.features = areaNode.getSubFeatures();
            console.log(cityName,mapJson,'loadmap')
            loadMap(cityName, mapJson);
            geoJsonData = mapJson;
        });
    });
};

function downloadJson() {
    var nameType = $("input[name='nameType']:checked").val();
    var blob = new Blob([JSON.stringify(geoJsonData)], {
        type: "text/plain;charset=utf-8"
    });
    let filename = cityName;
    if (nameType === 'code') {
        filename = cityCode;
    }
    saveAs(blob, `${filename}.geoJson`); //filename
};

function loadMap(mapName, data) {
    if (data) {
        echarts.registerMap(mapName, data);
        var option = {
            backgroundColor: 'rgba(0,0,0,.6)',
            visualMap: {
                type: 'piecewise',
                pieces: [{
                        max: 30,
                        label: '安全',
                        color: '#2c9a42'
                    },
                    {
                        min: 30,
                        max: 60,
                        label: '警告',
                        color: '#d08a00'
                    },
                    {
                        min: 60,
                        label: '危险',
                        color: '#c23c33'
                    },
                ],
                color: '#fff',
                textStyle: {
                    color: '#fff',
                },
                visibility: 'off'
            },
            series: [{
                name: '数据名称',
                type: 'map',
                roam: false,
                mapType: mapName,
                selectedMode: 'single',
                showLegendSymbol: false,
                visibility: 'off',
                itemStyle: {
                    normal: {
                        color: '#ccc',
                        areaColor: '#fff',
                        borderColor: '#fff',
                        borderWidth: 0.5,
                        label: {
                            show: true,
                            textStyle: {
                                color: "rgb(249, 249, 249)"
                            }
                        }
                    },
                    emphasis: {
                        areaColor: false,
                        borderColor: '#fff',
                        areaStyle: {
                            color: '#fff'
                        },
                        label: {
                            show: true,
                            textStyle: {
                                color: "rgb(249, 249, 249)"
                            }
                        }
                    }
                },
                data: mapData,
            }]
        };
        myChart.setOption(option);
    }
};
myChart.on('click', echartsMapClick);
$('.download').on('click', downloadJson);

var lastCode = '';
myChart.on('mousemove', function(params) {
    if ($('.map_tips').is(':hidden')) {
        $('.map_tips').show();
    }
    var city = params.data.name;
    var city = city.substring(0, 2);

    if (lastCode !== params.data.cityCode) {
        $('.map_tips_city').text(city);
        $('.map_tips_lol').text('英雄联盟玩家：' + person[Math.floor(Math.random() * 10)].lol + '人');
        $('.map_tips_king').text('王者荣耀玩家：' + person[Math.floor(Math.random() * 10)].king + '人');
        $('.map_tips_cf').text('穿越火线玩家：' + person[Math.floor(Math.random() * 10)].cf + '人');
        $('.map_tips_car').text('QQ飞车玩家：' + person[Math.floor(Math.random() * 10)].car + '人');
    }
    lastCode = params.data.cityCode
    var layerX = params.event.offsetX;
    var layerY = params.event.offsetY;
    var heightAdd = 80;
    $('.map_tips').css({
        'top': layerY + 10,
        'left': layerX + 10
    });
});

myChart.on('mouseout', function(params) {
    $('.map_tips').hide();
});

function getData(data, level, adcode) {
    var bounds = data.boundaries;
    if (bounds) {
        for (var i = 0, l = bounds.length; i < l; i++) {
            var polygon = new AMap.Polygon({
                map: map,
                strokeWeight: 1,
                strokeColor: '#0091ea',
                fillColor: '#80d8ff',
                fillOpacity: 0.2,
                path: bounds[i]
            });
            polygons.push(polygon);
        }
        map.setFitView(); //地图自适应
    }

    setSearchOption(data, level, adcode);

}

var person = [{
        lol: '123521',
        king: '5215463',
        cf: '6321525',
        car: '932154'
    },
    {
        lol: '532154',
        king: '3252152',
        cf: '321025',
        car: '302542'
    },
    {
        lol: '521345',
        king: '3452345',
        cf: '66734',
        car: '51235'
    },
    {
        lol: '4531235',
        king: '1285978',
        cf: '45612',
        car: '123571'
    },
    {
        lol: '123484',
        king: '678453',
        cf: '45612',
        car: '156786'
    },
    {
        lol: '9754158',
        king: '123453',
        cf: '4567812',
        car: '7541234'
    },
    {
        lol: '84536',
        king: '123654',
        cf: '4568',
        car: '15678'
    },
    {
        lol: '45611258',
        king: '123515',
        cf: '45612',
        car: '1452345'
    },
    {
        lol: '456847',
        king: '3157456',
        cf: '56456',
        car: '12357'
    },
    {
        lol: '314543',
        king: '312371',
        cf: '456878645',
        car: '45686'
    }
]

function setSearchOption(data, level, adcode) {
    //清空下一级别的下拉列表
    if (level === 'province') {
        citySelect.innerHTML = '';
        districtSelect.innerHTML = '';
    } else if (level === 'city') {
        districtSelect.innerHTML = '';
    }

    var subList = data.districtList;
    if (subList) {
        var contentSub = new Option('--请选择--');
        var curlevel = subList[0].level;
        if (curlevel === 'street') {
            let mapJsonList = geoJsonData.features;
            let mapJson = {};
            for (let i in mapJsonList) {
                if (mapJsonList[i].properties.name == cityName) {
                    mapJson.features = [].concat(mapJsonList[i]);
                }
            }
            mapData = [];
            mapData.push({
                name: cityName,
                value: Math.random() * 100,
                level: curlevel
            });
            loadMap(cityName, mapJson);
            geoJsonData = mapJson;
            return;
        }
        var curList = document.querySelector('#' + curlevel);
        curList.add(contentSub);
        mapData = [];
        for (var i = 0, l = subList.length; i < l; i++) {
            var name = subList[i].name;
            var citycode = subList[i].adcode;
            mapData.push({
                name: name,
                value: Math.random() * 100,
                cityCode: citycode,
                level: curlevel
            });
            var levelSub = subList[i].level;
            contentSub = new Option(name);
            contentSub.setAttribute("value", levelSub);
            contentSub.setAttribute("text", name);
            contentSub.center = subList[i].center;
            contentSub.adcode = subList[i].adcode;
            curList.add(contentSub);
        }
        loadMapData(adcode);
        areaData[curlevel] = curList;
    }
}

function search(obj) {
    console.log('111')
    //清除地图上所有覆盖物
    for (var i = 0, l = polygons.length; i < l; i++) {
        polygons[i].setMap(null);
    }
    var option = obj[obj.options.selectedIndex];
    var keyword = option.text; //关键字
    var adcode = option.adcode;
    cityName = keyword;
    cityCode = adcode;
    district.setLevel(option.value); //行政区级别
    district.setExtensions('all');
    //行政区查询
    //按照adcode进行查询可以保证数据返回的唯一性
    district.search(adcode, function(status, result) {
        if (status === 'complete') {
            deepTree.push({mapData: mapData,code:adcode});
            getData(result.districtList[0], obj.id, adcode);
        }
    });
}

function setCenter(obj) {
    map.setCenter(obj[obj.options.selectedIndex].center)
}

var saveAs = saveAs || (function(view) {
    "use strict";
    // IE <10 is explicitly unsupported
    if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
        return;
    }
    var
        doc = view.document
        // only get URL when necessary in case Blob.js hasn't overridden it yet
        ,
        get_URL = function() {
            return view.URL || view.webkitURL || view;
        },
        save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a"),
        can_use_save_link = "download" in save_link,
        click = function(node) {
            var event = new MouseEvent("click");
            node.dispatchEvent(event);
        },
        is_safari = /constructor/i.test(view.HTMLElement) || view.safari,
        is_chrome_ios = /CriOS\/[\d]+/.test(navigator.userAgent),
        throw_outside = function(ex) {
            (view.setImmediate || view.setTimeout)(function() {
                throw ex;
            }, 0);
        },
        force_saveable_type = "application/octet-stream"
        // the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
        ,
        arbitrary_revoke_timeout = 1000 * 40 // in ms
        ,
        revoke = function(file) {
            var revoker = function() {
                if (typeof file === "string") { // file is an object URL
                    get_URL().revokeObjectURL(file);
                } else { // file is a File
                    file.remove();
                }
            };
            setTimeout(revoker, arbitrary_revoke_timeout);
        },
        dispatch = function(filesaver, event_types, event) {
            event_types = [].concat(event_types);
            var i = event_types.length;
            while (i--) {
                var listener = filesaver["on" + event_types[i]];
                if (typeof listener === "function") {
                    try {
                        listener.call(filesaver, event || filesaver);
                    } catch (ex) {
                        throw_outside(ex);
                    }
                }
            }
        },
        auto_bom = function(blob) {
            // prepend BOM for UTF-8 XML and text/* types (including HTML)
            // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
            if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
                return new Blob([String.fromCharCode(0xFEFF), blob], {
                    type: blob.type
                });
            }
            return blob;
        },
        FileSaver = function(blob, name, no_auto_bom) {
            if (!no_auto_bom) {
                blob = auto_bom(blob);
            }
            // First try a.download, then web filesystem, then object URLs
            var
                filesaver = this,
                type = blob.type,
                force = type === force_saveable_type,
                object_url, dispatch_all = function() {
                    dispatch(filesaver, "writestart progress write writeend".split(" "));
                }
                // on any filesys errors revert to saving with object URLs
                ,
                fs_error = function() {
                    if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
                        // Safari doesn't allow downloading of blob urls
                        var reader = new FileReader();
                        reader.onloadend = function() {
                            var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
                            var popup = view.open(url, '_blank');
                            if (!popup) view.location.href = url;
                            url = undefined; // release reference before dispatching
                            filesaver.readyState = filesaver.DONE;
                            dispatch_all();
                        };
                        reader.readAsDataURL(blob);
                        filesaver.readyState = filesaver.INIT;
                        return;
                    }
                    // don't create more object URLs than needed
                    if (!object_url) {
                        object_url = get_URL().createObjectURL(blob);
                    }
                    if (force) {
                        view.location.href = object_url;
                    } else {
                        var opened = view.open(object_url, "_blank");
                        if (!opened) {
                            // Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
                            view.location.href = object_url;
                        }
                    }
                    filesaver.readyState = filesaver.DONE;
                    dispatch_all();
                    revoke(object_url);
                };
            filesaver.readyState = filesaver.INIT;
            if (can_use_save_link) {
                object_url = get_URL().createObjectURL(blob);
                setTimeout(function() {
                    save_link.href = object_url;
                    save_link.download = name;
                    click(save_link);
                    dispatch_all();
                    revoke(object_url);
                    filesaver.readyState = filesaver.DONE;
                });
                return;
            }
            fs_error();
        },
        FS_proto = FileSaver.prototype,
        saveAs = function(blob, name, no_auto_bom) {
            return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
        };
    // IE 10+ (native saveAs)
    if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
        return function(blob, name, no_auto_bom) {
            name = name || blob.name || "download";
            if (!no_auto_bom) {
                blob = auto_bom(blob);
            }
            return navigator.msSaveOrOpenBlob(blob, name);
        };
    }
    FS_proto.abort = function() {};
    FS_proto.readyState = FS_proto.INIT = 0;
    FS_proto.WRITING = 1;
    FS_proto.DONE = 2;
    FS_proto.error =
        FS_proto.onwritestart =
        FS_proto.onprogress =
        FS_proto.onwrite =
        FS_proto.onabort =
        FS_proto.onerror =
        FS_proto.onwriteend =
        null;
    return saveAs;
}(
    typeof self !== "undefined" && self ||
    typeof window !== "undefined" && window ||
    this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window
if (typeof module !== "undefined" && module.exports) {
    module.exports.saveAs = saveAs;
} else if ((typeof define !== "undefined" && define !== null) && (define.amd !== null)) {
    define("FileSaver.js", function() {
        return saveAs;
    });
}