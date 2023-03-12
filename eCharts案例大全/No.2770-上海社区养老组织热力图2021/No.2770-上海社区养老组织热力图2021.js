var option = {
    bmap: {
        center: [121.4693, 31.2],
        zoom: 10,
        roam: true,
        enableMapClick: false,
        mapStyle: {
            styleJson: [
                {
                    featureType: 'all',
                    elementType: 'all',
                    stylers: {
                        lightness: 15,
                        saturation: -50,
                    },
                },
                {
                    featureType: 'highway',
                    elementType: 'geometry.fill',
                    stylers: {
                        color: '#ffffff',
                    },
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.icon',
                    stylers: {
                        visibility: 'off',
                    },
                },
                {
                    featureType: 'road',
                    elementType: 'labels',
                    stylers: {
                        visibility: 'off',
                    },
                },
            ],
        },
    },
    title: {
        x: 'center',
        text: '上海社区养老组织热力图',
        subtext: '',
        textStyle: {
            color: '#696969',
            fontSize: 25,
        },
    },
};

myChart.setOption(option);

setTimeout(init, 0);

function init() {
    initMap();
    initMapv();
}

function getMap() {
    return myChart.getModel().getComponent('bmap').getBMap();
}

function initMap() {
    var top_left_navigation = new BMap.NavigationControl({
        type: BMAP_NAVIGATION_CONTROL_SMALL,
    });
    var scale = new BMap.ScaleControl({
        offset: new BMap.Size(100, 50),
    });
    var map = getMap();
    map.addControl(top_left_navigation);
    map.addControl(scale);
    map.disableDoubleClickZoom();
    return map;
}

function initMapv() {
    var map = getMap();
    var data = [];
    var randomCount = points.length;

    // 构造数据
    while (randomCount--) {
        var cityCenter = points[randomCount];
        data.push({
            geometry: {
                type: 'Point',
                coordinates: [cityCenter[0], cityCenter[1]],
            },
            count: cityCenter[2],
        });
    }

    var dataSet = new mapv.DataSet(data);
    //console.log(dataSet)

    var options = {
        fillStyle: '#DC143C',
        strokeStyle: 'black', // 描边颜色
        lineWidth: 1,
        //shadowColor: 'white',
        //shadowBlur: 1,
        size: 15,
        globalAlpha: 1,
        gradient: { 0.25: 'rgb(0,0,255)', 0.5: 'rgb(0,255,0)', 0.75: 'yellow', 1.0: 'rgb(255,0,0)' },
        label: {
            show: true,
            fillStyle: 'white',
            average: false,
            //shadowColor: 'black',
            // font: '20px Arial',
            //shadowBlur: 10,
        },
        max: 3,

        draw: 'heatmap',
        methods: {
            // 一些事件回调函数
            click: function (item) {
                // 点击事件，返回对应点击元素的对象值
                console.log(item);
            },
        },
    };

    var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);
}

//---------------------------------------------

var points = [

[121.469876782248,31.273721070047,1],
[121.418394355386,31.3133588508395,1],
[121.435551001592,31.3331638901449,1],
[121.603444252899,31.2637399744409,1],
[121.4082002039,31.3554095254148,1],
[121.381213258565,31.1968148054537,1],
[121.547051017085,31.6848768942766,1],
[121.506950209967,31.3957964177403,1],
[121.353228595844,31.4213809943265,1],
[121.334125501258,31.4786349363326,1],
[121.472011425631,31.3370185112196,1],
[121.486850907148,31.4074878733841,1],
[121.462024244633,31.3421664706414,1],
[121.83914412654,31.5323043494477,1],
[121.396163113083,31.6257406126358,1],
[121.848411585164,31.3462218738458,1],
[121.494644682108,31.629976151533,1],
[121.778591777537,31.5226195290328,1],
[121.463925148922,31.6634600899975,1],
[121.574845856175,30.8687550756141,1],
[121.431713310199,30.7970595812757,1],
[121.447202672633,30.9989135285422,1],
[121.402277675672,30.9013332678464,1],
[121.478999434024,31.2795290407276,1],
[121.436839800508,31.1981679195382,1],
[121.45757790185,31.2340192321385,1],
[121.477838823305,31.2696724677033,1],
[121.494884436255,31.2700104379951,1],
[121.438597203187,31.2332038422688,1],
[121.538872933553,31.1493744070405,1],
[121.49872637304,31.2528239386035,1],
[121.650466349463,30.9107608151123,1],
[121.494601809579,31.2851591184254,1],
[121.494601809579,31.2851591184254,1],
[121.562638863447,31.1785229353569,1],
[121.522229630319,31.2436606691494,1],
[121.465034480769,30.9213199388172,1],
[121.58186080475,30.9343657196239,1],
[121.477782230058,31.2059297689316,1],
[121.491786273975,31.2358144902528,1],
[121.504246887094,31.300162317392,1],
[121.498025618386,31.2092019222985,1],
[121.193443473426,30.7910734817746,1],
[121.47393544961,31.2358220979302,1],
[121.47393544961,31.2358220979302,1],
[121.485418006554,31.2434306577266,1],
[121.504208940873,31.2322262554045,1],
[121.471235469332,31.2233013872603,1],
[121.180596716498,30.8994091451047,1],
[121.48837546814,31.2069387354708,1],
[121.507660410303,31.2256802515979,1],
[121.500852195063,31.2290587280869,1],
[121.253501574737,31.3850711747581,1],
[121.417200307041,30.8006612645052,1],
[121.348479349833,30.7409017252181,1],
[121.324938599977,30.7317373586464,1],
[121.198468324957,30.8061861005615,1],
[121.457946954499,31.2506236817808,1],
[121.378580082573,30.7732441036199,1],
[121.319089999599,30.8873008463566,1],
[121.319649531643,30.8872656426318,1],
[121.304126569888,30.8072778329687,1],
[121.4841865887,31.3071103454952,1],
[121.459176029572,31.2837208859099,1],
[121.445590643633,31.2343257646533,1],
[121.450767319575,31.2416996227765,1],
[121.451388487056,31.2327468756417,1],
[121.448035741401,31.2286574910561,1],
[121.465378786898,31.3183314925332,1],
[121.452886231832,31.3194700210451,1],
[121.446339650767,31.2906024110283,1],
[121.471494089692,31.2501917939364,1],
[121.465178716295,31.2436155028235,1],
[121.374185340256,31.1342326465834,1],
[121.316921045436,31.2195158003406,1],
[121.4725849937,31.2548368445297,1],
[121.38947099844,31.1572906243438,1],
[121.389665098007,31.1750964921128,1],
[121.405153690593,31.01617137005,1],
[121.537086024232,31.0631098480045,1],
[121.376119468374,31.1203169875427,1],
[121.388768812786,31.0961616422284,1],
[121.051392536692,31.0046648187979,1],
[121.755912887141,30.9774403937783,1],
[121.641542765781,31.322033620977,1],
[121.618422326786,31.3033771681635,1],
[121.586986279074,31.3510442518219,1],
[121.59250796901,31.0204593098916,1],
[121.758236923868,31.0544658639371,1],
[121.606591597406,31.1267073888516,1],
[121.849028271897,31.0410677402715,1],
[121.516924904519,31.1962142479104,1],
[121.813129585243,30.9169958810735,1],
[121.633719840807,31.1983083185316,1],
[121.879566423726,30.980637840397,1],
[121.666135785321,31.2135691381637,1],
[121.530528753332,31.2160875326289,1],
[121.826416060922,30.9777199195254,1],
[121.522177207006,31.2319240389101,1],
[121.650675879223,31.0278955789002,1],
[121.706043546585,31.0294313965473,1],
[121.504257000218,31.179374873885,1],
[121.464330194877,31.2677061674839,1],
[121.442621976584,31.270929990217,1],
[121.434214412824,31.2620876081042,1],
[121.352863234332,31.2891189982229,1],
[121.440564695271,31.250848772482,1],
[121.398997602933,31.2347923930579,1],
[121.392496433008,31.2584727823967,1],
[121.126167583461,31.1980928489199,1],
[121.235724378187,31.2062206414189,1],
[121.625068683542,31.5485599932156,1],
[121.356425913086,31.7210745946171,1],
[120.92386010344,31.0426354909736,1],
[121.276189250562,31.1756022413165,1],
[121.203262056854,31.1578639862529,1],
[121.18640574562,31.2084914103295,1],
[121.066455323483,31.0814911740177,1],
[121.534170006869,30.8377274555644,1],
[121.347464959895,30.8631520658324,1],
[121.273860441137,31.088183640434,1],
[121.207634814042,31.0458228145207,1],
[121.216451502962,30.9383673779042,1],
[121.325741881832,31.0165830193468,1],
[121.129473384568,30.9889316332928,1],
[121.074236445811,30.9402699569996,1],
[121.212398977315,31.0187378449706,1],
[121.700598707584,31.183978992634,1],
[121.402513515004,31.1785108234077,1],
[121.445298874003,31.2149036995576,1],
[121.463803608187,31.2145659882205,1],
[121.456942514193,31.1748381356108,1],
[121.431877291379,31.1799717669106,1],
[121.524052022707,31.2718683988739,1],
[121.527349531556,31.2913655466849,1],
[121.526101585778,31.266983963465,1],
[121.54838707226,31.2743313657549,1],
[121.518212212247,31.2821463993738,1],
[121.528355798117,31.3223568633638,1],
[121.54179038551,31.3079297876422,1],
[121.539475876211,31.2967671127292,1],
[121.549364602028,31.2941524096132,1],
[121.379243125463,31.2217764568648,1],
[121.420723031861,31.2037325598615,1],
[121.431444038631,31.2236732673273,1],
[121.43961834928,31.2222629408271,1],
[121.409828382636,31.2189619309826,1],
[121.394519884136,31.2093669050482,1],
[121.440010451551,31.2090510192176,1],
[121.365690395624,31.2205029239869,1],
[121.422396036043,31.2194698634332,1],
[121.224330720251,31.2752946603853,1],
[121.187414331606,31.4307448395091,1],
[121.291490327263,31.4765995987119,1],
[121.371655249312,31.2521376619119,1],
[121.499039605883,31.2249538348759,1],
[121.452965282717,31.1400515859375,1],
[121.551586064842,31.2480236122499,1],
[121.498617959243,31.181846684909,1],
[121.460385016738,31.2039629005213,1],
[121.256934269583,31.0117441895561,1],
[121.295093022832,31.7496307345151,1],
[121.581663896182,31.1200297902111,1],
[121.689658960727,31.2626247284332,1],
[121.330191263583,31.2598248869539,1],
[121.621010840824,31.2744384256708,1],
[121.416815559198,31.2688452352277,1],
[121.420014178983,31.2296612053128,1],
[121.434809899547,31.2641129829819,1],
[121.448262652474,31.2653877339353,1],
[121.440564695271,31.250848772482,1],
[121.23934158678,30.9999183941088,1],
[121.457675226964,31.2093335989581,1],
[121.460382717076,31.1257647490899,1],
[121.445620736868,31.180826009376,1],
[121.440664336216,31.1398144429822,1],
[113.558881651622,23.2998606949244,1],
[121.769799730935,31.1245378730823,1],
[121.380778537987,31.2438727043696,1],
[121.343206722286,30.7319638528111,1],
[121.352863234332,31.2891189982229,1],
[121.421233898205,31.2425519780091,1],
[121.441816608863,31.2445681421303,1],
[121.410004839483,31.2674394387813,1],
[121.414100993134,31.2602028726962,1],
[121.426917307387,31.2475075153791,1],
[121.43070430201,31.268186914502,1],
[121.397362327583,31.2385189297993,1],
[121.429452705519,31.2887959409089,1],
[121.408467359958,31.2619644451283,1],
[121.403599352569,31.2653093889399,1],
[121.747474002163,31.0523773939089,1],
[121.43269097651,31.4232414356542,1],
[121.225376158322,31.7738289250939,1],
[121.431567016656,31.2675755268894,1],
[121.53695675807,31.2692926683349,1],
[121.549870056979,31.2149917393287,1],
[121.276189250562,31.1756022413165,1],
[121.464330194877,31.2677061674839,1],
[120.926222900254,31.0429910353838,1],
[121.420117304456,30.8014761307708,1],
[121.173289311089,30.9046968965318,1],
[121.180994486177,30.8313525463332,1],
[121.023337842971,30.8921337500141,1],
[121.419440521085,31.6791664134338,1],
[121.411154773841,30.8022183035782,1],
[121.500003254136,31.279784424511,1],
[121.160305072994,31.1656480664878,1],
[121.053721114354,31.0159283556639,1],
[121.518296870355,31.1307312314605,1],
[121.461633861719,31.193104504312,1],
[121.124362710725,31.1434746672674,1],
[121.046774797218,31.0138914963003,1],
[121.389861117252,31.1526222413411,1],
[121.276098120163,31.2466431379876,1],
[121.342796645821,31.8350127406893,1],
[121.625068683542,31.5485599932156,1],
[121.727796575052,31.5265291918447,1],
[121.657819846028,31.5869215875581,1],
[121.415497985761,31.6276488982498,1],
[121.541856316643,31.6237584337351,1],
[121.857767711932,30.8623571358405,1],
[121.694537851088,31.3932797943169,1],
[121.112026397038,31.1674187739841,1],
[121.507171258699,31.2770354649283,1],
[121.478999434024,31.2795290407276,1],
[121.108364330661,31.2632601299497,1],
[121.144664406268,31.2481862366757,1],
[121.358299622973,31.1736101714907,1],
[121.49872637304,31.2528239386035,1],
[121.414859925645,31.0484942188142,1],
[121.252309792817,31.3877986482721,1],
[121.470161620552,31.0499687945684,1],
[121.523046137925,31.0814717670761,1],
[121.379664073222,31.0383065448668,1],
[121.476083714,31.2946064431643,1],
[121.453293888263,30.9347657465508,1],
[121.501723958341,30.9609738471784,1],
[121.508052161336,30.9948212975715,1],
[121.465387875954,30.9075689052954,1],
[121.729741923905,30.944572571737,1],
[121.729741923905,30.944572571737,1],
[121.589198253986,30.9371950696902,1],
[121.378580082573,30.7732441036199,1],
[121.734339879997,31.2223810672181,1],
[121.425269819573,31.0984150767787,1],
[121.554661910518,31.2979357156569,1],

];

//---------------------------------------------

var mapv = {};
(function (global, factory) {
    // console.log(global,factory)
    // typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    //     typeof define === 'function' && define.amd ? define(['exports'], factory) :
    //     (factory((global.mapv = global.mapv || {})));
    factory(mapv);
})(window, function (exports) {
    'use strict';

    var version = '2.0.13';

    /**
     * @author kyle / http://nikai.us/
     */

    var clear = function (context) {
        context && context.clearRect && context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        //context.canvas.width = context.canvas.width;
        //context.canvas.height = context.canvas.height;
    };

    /**
     * @author kyle / http://nikai.us/
     */

    var resolutionScale$1 = function (context) {
        var devicePixelRatio = window.devicePixelRatio;
        context.canvas.width = context.canvas.width * devicePixelRatio;
        context.canvas.height = context.canvas.height * devicePixelRatio;
        context.canvas.style.width = context.canvas.width / devicePixelRatio + 'px';
        context.canvas.style.height = context.canvas.height / devicePixelRatio + 'px';
        context.scale(devicePixelRatio, devicePixelRatio);
    };

    function Event() {
        this._subscribers = {}; // event subscribers
    }

    /**
     * Subscribe to an event, add an event listener
     * @param {String} event        Event name. Available events: 'put', 'update',
     *                              'remove'
     * @param {function} callback   Callback method. Called with three parameters:
     *                                  {String} event
     *                                  {Object | null} params
     *                                  {String | Number} senderId
     */
    Event.prototype.on = function (event, callback) {
        var subscribers = this._subscribers[event];
        if (!subscribers) {
            subscribers = [];
            this._subscribers[event] = subscribers;
        }

        subscribers.push({
            callback: callback,
        });
    };

    /**
     * Unsubscribe from an event, remove an event listener
     * @param {String} event
     * @param {function} callback
     */
    Event.prototype.off = function (event, callback) {
        var subscribers = this._subscribers[event];
        if (subscribers) {
            //this._subscribers[event] = subscribers.filter(listener => listener.callback != callback);
            for (var i = 0; i < subscribers.length; i++) {
                if (subscribers[i].callback == callback) {
                    subscribers.splice(i, 1);
                    i--;
                }
            }
        }
    };

    /**
     * Trigger an event
     * @param {String} event
     * @param {Object | null} params
     * @param {String} [senderId]       Optional id of the sender.
     * @private
     */
    Event.prototype._trigger = function (event, params, senderId) {
        if (event == '*') {
            throw new Error('Cannot trigger event *');
        }

        var subscribers = [];
        if (event in this._subscribers) {
            subscribers = subscribers.concat(this._subscribers[event]);
        }
        if ('*' in this._subscribers) {
            subscribers = subscribers.concat(this._subscribers['*']);
        }

        for (var i = 0, len = subscribers.length; i < len; i++) {
            var subscriber = subscribers[i];
            if (subscriber.callback) {
                subscriber.callback(event, params, senderId || null);
            }
        }
    };

    var classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    };

    var createClass = (function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    })();

    var get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ('value' in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    var inherits = function (subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
            },
        });
        if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
    };

    var possibleConstructorReturn = function (self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
    };

    /**
     * @author kyle / http://nikai.us/
     */

    /**
     * DataSet
     *
     * A data set can:
     * - add/remove/update data
     * - gives triggers upon changes in the data
     * - can  import/export data in various data formats
     * @param {Array} [data]    Optional array with initial data
     * the field geometry is like geojson, it can be:
     * {
     *     "type": "Point",
     *     "coordinates": [125.6, 10.1]
     * }
     * {
     *     "type": "LineString",
     *     "coordinates": [
     *         [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
     *     ]
     * }
     * {
     *     "type": "Polygon",
     *     "coordinates": [
     *         [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
     *           [100.0, 1.0], [100.0, 0.0] ]
     *     ]
     * }
     * @param {Object} [options]   Available options:
     *
     */
    function DataSet(data, options) {
        this._options = options || {};
        this._data = []; // map with data indexed by id

        // add initial data when provided
        if (data) {
            this.add(data);
        }
    }

    DataSet.prototype = new Event();

    /**
     * Add data.
     */
    DataSet.prototype.add = function (data, senderId) {
        if (Array.isArray(data)) {
            // Array
            for (var i = 0, len = data.length; i < len; i++) {
                if (data[i].time && data[i].time.length == 14 && data[i].time.substr(0, 2) == '20') {
                    var time = data[i].time;
                    data[i].time = new Date(
                        time.substr(0, 4) +
                            '-' +
                            time.substr(4, 2) +
                            '-' +
                            time.substr(6, 2) +
                            ' ' +
                            time.substr(8, 2) +
                            ':' +
                            time.substr(10, 2) +
                            ':' +
                            time.substr(12, 2)
                    ).getTime();
                }
                this._data.push(data[i]);
            }
        } else if (data instanceof Object) {
            // Single item
            this._data.push(data);
        } else {
            throw new Error('Unknown dataType');
        }
    };

    /**
     * get data.
     */
    DataSet.prototype.get = function (args) {
        args = args || {};

        //console.time('copy data time')
        var start = new Date();
        // TODO: 不修改原始数据，在数据上挂载新的名称，每次修改数据直接修改新名称下的数据，可以省去deepCopy
        // var data = deepCopy(this._data);
        var data = this._data;

        // console.timeEnd('copy data time')

        // console.time('transferCoordinate time')

        var start = new Date();

        if (args.filter) {
            var newData = [];
            for (var i = 0; i < data.length; i++) {
                if (args.filter(data[i])) {
                    newData.push(data[i]);
                }
            }
            data = newData;
        }

        if (args.transferCoordinate) {
            data = this.transferCoordinate(data, args.transferCoordinate, args.fromColumn, args.toColumn);
        }

        // console.timeEnd('transferCoordinate time')

        return data;
    };

    /**
     * set data.
     */
    DataSet.prototype.set = function (data) {
        this._set(data);
        this._trigger('change');
    };

    /**
     * set data.
     */
    DataSet.prototype._set = function (data) {
        this.clear();
        this.add(data);
    };

    /**
     * clear data.
     */
    DataSet.prototype.clear = function (args) {
        this._data = []; // map with data indexed by id
    };

    /**
     * remove data.
     */
    DataSet.prototype.remove = function (args) {};

    /**
     * update data.
     */
    DataSet.prototype.update = function (args) {};

    /**
     * transfer coordinate.
     */
    DataSet.prototype.transferCoordinate = function (data, transferFn, fromColumn, toColumnName) {
        toColumnName = toColumnName || '_coordinates';
        fromColumn = fromColumn || 'coordinates';

        for (var i = 0; i < data.length; i++) {
            var geometry = data[i].geometry;
            var coordinates = geometry[fromColumn];
            switch (geometry.type) {
                case 'Point':
                    geometry[toColumnName] = transferFn(coordinates);
                    break;
                case 'LineString':
                    var newCoordinates = [];
                    for (var j = 0; j < coordinates.length; j++) {
                        newCoordinates.push(transferFn(coordinates[j]));
                    }
                    geometry[toColumnName] = newCoordinates;
                    break;
                case 'Polygon':
                    var newCoordinates = getPolygon(coordinates);
                    geometry[toColumnName] = newCoordinates;
                    break;
                case 'MultiPolygon':
                    var newCoordinates = [];
                    for (var c = 0; c < coordinates.length; c++) {
                        var polygon = coordinates[c];
                        var polygon = getPolygon(polygon);
                        newCoordinates.push(polygon);
                    }

                    geometry[toColumnName] = newCoordinates;
                    break;
            }
        }

        function getPolygon(coordinates) {
            var newCoordinates = [];
            for (var c = 0; c < coordinates.length; c++) {
                var coordinate = coordinates[c];
                var newcoordinate = [];
                for (var j = 0; j < coordinate.length; j++) {
                    newcoordinate.push(transferFn(coordinate[j]));
                }
                newCoordinates.push(newcoordinate);
            }
            return newCoordinates;
        }

        return data;
    };

    DataSet.prototype.initGeometry = function (transferFn) {
        if (transferFn) {
            this._data.forEach(function (item) {
                item.geometry = transferFn(item);
            });
        } else {
            this._data.forEach(function (item) {
                if (!item.geometry && item.lng && item.lat) {
                    item.geometry = {
                        type: 'Point',
                        coordinates: [item.lng, item.lat],
                    };
                }
            });
        }
    };

    /**
     * 获取当前列的最大值
     */
    DataSet.prototype.getMax = function (columnName) {
        var data = this._data;

        if (!data || data.length <= 0) {
            return;
        }

        var max = parseFloat(data[0][columnName]);

        for (var i = 1; i < data.length; i++) {
            var value = parseFloat(data[i][columnName]);
            if (value > max) {
                max = value;
            }
        }

        return max;
    };

    /**
     * 获取当前列的总和
     */
    DataSet.prototype.getSum = function (columnName) {
        var data = this._data;

        if (!data || data.length <= 0) {
            return;
        }

        var sum = 0;

        for (var i = 0; i < data.length; i++) {
            if (data[i][columnName]) {
                sum += parseFloat(data[i][columnName]);
            }
        }

        return sum;
    };

    /**
     * 获取当前列的最小值
     */
    DataSet.prototype.getMin = function (columnName) {
        var data = this._data;

        if (!data || data.length <= 0) {
            return;
        }

        var min = parseFloat(data[0][columnName]);

        for (var i = 1; i < data.length; i++) {
            var value = parseFloat(data[i][columnName]);
            if (value < min) {
                min = value;
            }
        }

        return min;
    };

    /**
     * @author kyle / http://nikai.us/
     */

    var pathSimple = {
        drawDataSet: function drawDataSet(context, dataSet, options) {
            var data = dataSet instanceof DataSet ? dataSet.get() : dataSet;

            for (var i = 0, len = data.length; i < len; i++) {
                var item = data[i];
                this.draw(context, item, options);
            }
        },
        draw: function draw(context, data, options) {
            var type = data.geometry.type;
            var coordinates = data.geometry._coordinates || data.geometry.coordinates;
            var symbol = options.symbol || 'circle';
            switch (type) {
                case 'Point':
                    var size = data._size || data.size || options._size || options.size || 5;
                    if (options.symbol === 'rect') {
                        context.rect(coordinates[0] - size / 2, coordinates[1] - size / 2, size, size);
                    } else {
                        if (options.bigData === 'Point') {
                            context.moveTo(coordinates[0], coordinates[1]);
                        }
                        context.arc(coordinates[0], coordinates[1], size, 0, Math.PI * 2);
                    }
                    break;
                case 'LineString':
                    for (var j = 0; j < coordinates.length; j++) {
                        var x = coordinates[j][0];
                        var y = coordinates[j][1];
                        if (j == 0) {
                            context.moveTo(x, y);
                        } else {
                            context.lineTo(x, y);
                        }
                    }
                    break;
                case 'Polygon':
                    this.drawPolygon(context, coordinates);
                    break;
                case 'MultiPolygon':
                    for (var i = 0; i < coordinates.length; i++) {
                        var polygon = coordinates[i];
                        this.drawPolygon(context, polygon);
                    }
                    context.closePath();
                    break;
                default:
                    console.log('type' + type + 'is not support now!');
                    break;
            }
        },

        drawPolygon: function drawPolygon(context, coordinates) {
            for (var i = 0; i < coordinates.length; i++) {
                var coordinate = coordinates[i];

                context.moveTo(coordinate[0][0], coordinate[0][1]);
                for (var j = 1; j < coordinate.length; j++) {
                    context.lineTo(coordinate[j][0], coordinate[j][1]);
                }
                context.lineTo(coordinate[0][0], coordinate[0][1]);
            }
        },
    };

    /**
     * @author kyle / http://nikai.us/
     */

    var drawSimple = {
        draw: function draw(context, dataSet, options) {
            var data = dataSet instanceof DataSet ? dataSet.get() : dataSet;

            // console.log('xxxx',options)
            context.save();

            for (var key in options) {
                context[key] = options[key];
            }

            // console.log(data);
            if (options.bigData) {
                context.save();
                context.beginPath();

                for (var i = 0, len = data.length; i < len; i++) {
                    var item = data[i];

                    pathSimple.draw(context, item, options);
                }

                var type = options.bigData;

                if (type == 'Point' || type == 'Polygon' || type == 'MultiPolygon') {
                    context.fill();

                    if ((item.strokeStyle || options.strokeStyle) && options.lineWidth) {
                        context.stroke();
                    }
                } else if (type == 'LineString') {
                    context.stroke();
                }

                context.restore();
            } else {
                for (var i = 0, len = data.length; i < len; i++) {
                    var item = data[i];

                    context.save();

                    if (item.fillStyle) {
                        context.fillStyle = item.fillStyle;
                    }

                    if (item.strokeStyle) {
                        context.strokeStyle = item.strokeStyle;
                    }

                    var type = item.geometry.type;

                    context.beginPath();

                    pathSimple.draw(context, item, options);

                    if (type == 'Point' || type == 'Polygon' || type == 'MultiPolygon') {
                        context.fill();

                        if ((item.strokeStyle || options.strokeStyle) && options.lineWidth) {
                            context.stroke();
                        }
                    } else if (type == 'LineString') {
                        context.stroke();
                    }

                    context.restore();
                }
            }

            context.restore();
        },
    };

    function Canvas(width, height) {
        var canvas;

        if (typeof document === 'undefined') {
            var Canvas = require('canvas');
            canvas = new Canvas(width, height);
        } else {
            var canvas = document.createElement('canvas');

            if (width) {
                canvas.width = width;
            }

            if (height) {
                canvas.height = height;
            }
        }

        return canvas;
    }

    /**
     * @author kyle / http://nikai.us/
     */

    /**
     * Category
     * @param {Object} [options]   Available options:
     *                             {Object} gradient: { 0.25: "rgb(0,0,255)", 0.55: "rgb(0,255,0)", 0.85: "yellow", 1.0: "rgb(255,0,0)"}
     */
    function Intensity(options) {
        options = options || {};
        this.gradient = options.gradient || {
            0.25: 'rgba(0, 0, 255, 1)',
            0.55: 'rgba(0, 255, 0, 1)',
            0.85: 'rgba(255, 255, 0, 1)',
            1.0: 'rgba(255, 0, 0, 1)',
        };
        this.maxSize = options.maxSize || 35;
        this.minSize = options.minSize || 0;
        this.max = options.max || 100;
        this.min = options.min || 0;
        this.initPalette();
    }

    Intensity.prototype.setMax = function (value) {
        this.max = value || 100;
    };

    Intensity.prototype.setMin = function (value) {
        this.min = value || 0;
    };

    Intensity.prototype.setMaxSize = function (maxSize) {
        this.maxSize = maxSize || 35;
    };

    Intensity.prototype.setMinSize = function (minSize) {
        this.minSize = minSize || 0;
    };

    Intensity.prototype.initPalette = function () {
        var gradient = this.gradient;

        var canvas = new Canvas(256, 1);

        var paletteCtx = (this.paletteCtx = canvas.getContext('2d'));

        var lineGradient = paletteCtx.createLinearGradient(0, 0, 256, 1);

        for (var key in gradient) {
            lineGradient.addColorStop(parseFloat(key), gradient[key]);
        }

        paletteCtx.fillStyle = lineGradient;
        paletteCtx.fillRect(0, 0, 256, 1);
    };

    Intensity.prototype.getColor = function (value) {
        var imageData = this.getImageData(value);

        return 'rgba(' + imageData[0] + ', ' + imageData[1] + ', ' + imageData[2] + ', ' + imageData[3] / 256 + ')';
    };

    Intensity.prototype.getImageData = function (value) {
        var imageData = this.paletteCtx.getImageData(0, 0, 256, 1).data;

        if (value === undefined) {
            return imageData;
        }

        var max = this.max;
        var min = this.min;

        if (value > max) {
            value = max;
        }

        if (value < min) {
            value = min;
        }

        var index = Math.floor(((value - min) / (max - min)) * (256 - 1)) * 4;

        return [imageData[index], imageData[index + 1], imageData[index + 2], imageData[index + 3]];
    };

    /**
     * @param Number value
     * @param Number max of value
     * @param Number max of size
     * @param Object other options
     */
    Intensity.prototype.getSize = function (value) {
        var size = 0;
        var max = this.max;
        var min = this.min;
        var maxSize = this.maxSize;
        var minSize = this.minSize;

        if (value > max) {
            value = max;
        }

        if (value < min) {
            value = min;
        }

        size = minSize + ((value - min) / (max - min)) * (maxSize - minSize);

        return size;
    };

    Intensity.prototype.getLegend = function (options) {
        var gradient = this.gradient;

        var width = options.width || 20;
        var height = options.height || 180;

        var canvas = new Canvas(width, height);

        var paletteCtx = canvas.getContext('2d');

        var lineGradient = paletteCtx.createLinearGradient(0, height, 0, 0);

        for (var key in gradient) {
            lineGradient.addColorStop(parseFloat(key), gradient[key]);
        }

        paletteCtx.fillStyle = lineGradient;
        paletteCtx.fillRect(0, 0, width, height);

        return canvas;
    };

    var global$1 = typeof window === 'undefined' ? {} : window;

    var devicePixelRatio = global$1.devicePixelRatio;

    /**
     * @author kyle / http://nikai.us/
     */

    function createCircle(size) {
        var shadowBlur = size / 2;
        var r2 = size + shadowBlur;
        var offsetDistance = 10000;

        var circle = new Canvas(r2 * 2, r2 * 2);
        var context = circle.getContext('2d');

        context.shadowBlur = shadowBlur;
        context.shadowColor = 'black';
        context.shadowOffsetX = context.shadowOffsetY = offsetDistance;

        context.beginPath();
        context.arc(r2 - offsetDistance, r2 - offsetDistance, size, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
        return circle;
    }

    function colorize(pixels, gradient, options) {
        var maxOpacity = options.maxOpacity || 0.8;
        for (var i = 3, len = pixels.length, j; i < len; i += 4) {
            j = pixels[i] * 4; // get gradient color from opacity value

            if (pixels[i] / 256 > maxOpacity) {
                pixels[i] = 256 * maxOpacity;
            }

            pixels[i - 3] = gradient[j];
            pixels[i - 2] = gradient[j + 1];
            pixels[i - 1] = gradient[j + 2];
        }
    }

    function drawGray(context, dataSet, options) {
        var max = options.max || 100;
        var min = options.min || 0;
        // console.log(max)
        var size = options._size;
        if (size == undefined) {
            size = options.size;
            if (size == undefined) {
                size = 13;
            }
        }

        var intensity = new Intensity({
            gradient: options.gradient,
            max: max,
            min: min,
        });

        var circle = createCircle(size);
        var circleHalfWidth = circle.width / 2;
        var circleHalfHeight = circle.height / 2;

        var data = dataSet;

        var dataOrderByAlpha = {};

        data.forEach(function (item, index) {
            var count = item.count === undefined ? 1 : item.count;
            var alpha = Math.min(1, count / max).toFixed(2);
            dataOrderByAlpha[alpha] = dataOrderByAlpha[alpha] || [];
            dataOrderByAlpha[alpha].push(item);
        });

        for (var i in dataOrderByAlpha) {
            if (isNaN(i)) continue;
            var _data = dataOrderByAlpha[i];
            context.beginPath();
            if (!options.withoutAlpha) {
                context.globalAlpha = i;
            }
            context.strokeStyle = intensity.getColor(i * max);
            _data.forEach(function (item, index) {
                if (!item.geometry) {
                    return;
                }

                var coordinates = item.geometry._coordinates || item.geometry.coordinates;
                var type = item.geometry.type;
                if (type === 'Point') {
                    var count = item.count === undefined ? 1 : item.count;
                    context.globalAlpha = count / max;
                    context.drawImage(circle, coordinates[0] - circleHalfWidth, coordinates[1] - circleHalfHeight);
                } else if (type === 'LineString') {
                    var count = item.count === undefined ? 1 : item.count;
                    context.globalAlpha = count / max;
                    context.beginPath();
                    pathSimple.draw(context, item, options);
                    context.stroke();
                } else if (type === 'Polygon') {
                }
            });
        }
    }

    function draw(context, dataSet, options) {
        var strength = options.strength || 0.3;
        context.strokeStyle = 'rgba(0,0,0,' + strength + ')';
        var shadowCanvas = new Canvas(context.canvas.width, context.canvas.height);
        var shadowContext = shadowCanvas.getContext('2d');
        shadowContext.scale(devicePixelRatio, devicePixelRatio);

        options = options || {};

        var data = dataSet instanceof DataSet ? dataSet.get() : dataSet;

        context.save();

        var intensity = new Intensity({
            gradient: options.gradient,
        });

        //console.time('drawGray')
        drawGray(shadowContext, data, options);

        //console.timeEnd('drawGray');
        // return false;
        if (!options.absolute) {
            //console.time('changeColor');
            var colored = shadowContext.getImageData(0, 0, context.canvas.width, context.canvas.height);
            colorize(colored.data, intensity.getImageData(), options);
            //console.timeEnd('changeColor');
            context.putImageData(colored, 0, 0);

            context.restore();
        }

        intensity = null;
        shadowCanvas = null;
    }

    var drawHeatmap = {
        draw: draw,
    };

    /**
     * @author kyle / http://nikai.us/
     */

    var drawGrid = {
        draw: function draw(context, dataSet, options) {
            context.save();

            var data = dataSet instanceof DataSet ? dataSet.get() : dataSet;

            var grids = {};
            var gridIndexData = {};
            var size = options._size || options.size || 50;

            var offset = options.offset || {
                x: 0,
                y: 0,
            };

            for (var i = 0; i < data.length; i++) {
                var coordinates = data[i].geometry._coordinates || data[i].geometry.coordinates;
                var gridKey =
                    Math.floor((coordinates[0] - offset.x) / size) +
                    ',' +
                    Math.floor((coordinates[1] - offset.y) / size);

                if (!grids[gridKey]) {
                    grids[gridKey] = 0;
                    gridIndexData[gridKey] = [];
                }
                var count = ~~(data[i].count || 1);
                grids[gridKey] += count;
                gridIndexData[gridKey].push(data[i]);
            }

            for (var gridKey in grids) {
                var total = grids[gridKey];
                gridIndexData[gridKey].forEach((i) => {
                    i.total = total;
                    i.average = parseInt(total / gridIndexData[gridKey].length);
                });
            }

            var intensity = new Intensity({
                max: options.max || 100,
                gradient: options.gradient,
            });

            for (var gridKey in grids) {
                gridKey = gridKey.split(',');

                context.beginPath();
                context.rect(gridKey[0] * size + 0.5 + offset.x, gridKey[1] * size + 0.5 + offset.y, size, size);
                var text = grids[gridKey];
                if (options.label.average) {
                    text = parseInt(grids[gridKey] / gridIndexData[gridKey].length);
                }

                context.fillStyle = intensity.getColor(text);
                context.fill();
                if (options.strokeStyle && options.lineWidth) {
                    context.stroke();
                }
            }

            if (options.label && options.label.show !== false) {
                context.fillStyle = options.label.fillStyle || 'white';

                if (options.label.font) {
                    context.font = options.label.font;
                }

                if (options.label.shadowColor) {
                    context.shadowColor = options.label.shadowColor;
                }

                if (options.label.shadowBlur) {
                    context.shadowBlur = options.label.shadowBlur;
                }

                for (var gridKey in grids) {
                    gridKey = gridKey.split(',');
                    var text = grids[gridKey];
                    if (options.label.average) {
                        text = parseInt(text / gridIndexData[gridKey].length);
                    }

                    var textWidth = context.measureText(text).width;
                    context.fillText(
                        text,
                        gridKey[0] * size + 0.5 + offset.x + size / 2 - textWidth / 2,
                        gridKey[1] * size + 0.5 + offset.y + size / 2 + 5
                    );
                }
            }

            context.restore();
        },
    };

    /**
     * @author kyle / http://nikai.us/
     */

    function hex_corner(center, size, i) {
        var angle_deg = 60 * i + 30;
        var angle_rad = (Math.PI / 180) * angle_deg;
        return [center.x + size * Math.cos(angle_rad), center.y + size * Math.sin(angle_rad)];
    }

    var drawHoneycomb = {
        draw: function draw(context, dataSet, options) {
            context.save();

            var data = dataSet instanceof DataSet ? dataSet.get() : dataSet;

            for (var key in options) {
                context[key] = options[key];
            }

            var grids = {};

            var offset = options.offset || {
                x: 10,
                y: 10,
            };

            //
            var r = options._size || options.size || 40;
            r = r / 2 / Math.sin(Math.PI / 3);
            var dx = r * 2 * Math.sin(Math.PI / 3);
            var dy = r * 1.5;

            var binsById = {};

            for (var i = 0; i < data.length; i++) {
                var coordinates = data[i].geometry._coordinates || data[i].geometry.coordinates;
                var py = (coordinates[1] - offset.y) / dy,
                    pj = Math.round(py),
                    px = (coordinates[0] - offset.x) / dx - (pj & 1 ? 0.5 : 0),
                    pi = Math.round(px),
                    py1 = py - pj;

                if (Math.abs(py1) * 3 > 1) {
                    var px1 = px - pi,
                        pi2 = pi + (px < pi ? -1 : 1) / 2,
                        pj2 = pj + (py < pj ? -1 : 1),
                        px2 = px - pi2,
                        py2 = py - pj2;
                    if (px1 * px1 + py1 * py1 > px2 * px2 + py2 * py2) (pi = pi2 + (pj & 1 ? 1 : -1) / 2), (pj = pj2);
                }

                var id = pi + '-' + pj,
                    bin = binsById[id];
                if (bin) {
                    bin.push(data[i]);
                } else {
                    bin = binsById[id] = [data[i]];
                    bin.i = pi;
                    bin.j = pj;
                    bin.x = (pi + (pj & 1 ? 1 / 2 : 0)) * dx;
                    bin.y = pj * dy;
                }
            }

            var intensity = new Intensity({
                max: options.max || 100,
                maxSize: r,
                gradient: options.gradient,
            });

            for (var key in binsById) {
                var item = binsById[key];

                context.beginPath();

                for (var j = 0; j < 6; j++) {
                    var radius = r;

                    var result = hex_corner(
                        {
                            x: item.x + offset.x,
                            y: item.y + offset.y,
                        },
                        radius,
                        j
                    );
                    context.lineTo(result[0], result[1]);
                }
                context.closePath();

                var count = 0;
                for (var i = 0; i < item.length; i++) {
                    count += item[i].count || 1;
                }
                item.count = count;

                context.fillStyle = intensity.getColor(count);
                context.fill();
                if (options.strokeStyle && options.lineWidth) {
                    context.stroke();
                }
            }

            if (options.label && options.label.show !== false) {
                context.fillStyle = options.label.fillStyle || 'white';

                if (options.label.font) {
                    context.font = options.label.font;
                }

                if (options.label.shadowColor) {
                    context.shadowColor = options.label.shadowColor;
                }

                if (options.label.shadowBlur) {
                    context.shadowBlur = options.label.shadowBlur;
                }

                for (var key in binsById) {
                    var item = binsById[key];
                    var text = item.count;
                    if (text < 0) {
                        text = text.toFixed(2);
                    } else {
                        text = ~~text;
                    }
                    var textWidth = context.measureText(text).width;
                    context.fillText(text, item.x + offset.x - textWidth / 2, item.y + offset.y + 5);
                }
            }

            context.restore();
        },
    };

    function createShader(gl, src, type) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, src);
        gl.compileShader(shader);
        return shader;
    }

    function initShaders(gl, vs_source, fs_source) {
        var vertexShader = createShader(gl, vs_source, gl.VERTEX_SHADER);
        var fragmentShader = createShader(gl, fs_source, gl.FRAGMENT_SHADER);

        var glProgram = gl.createProgram();

        gl.attachShader(glProgram, vertexShader);
        gl.attachShader(glProgram, fragmentShader);
        gl.linkProgram(glProgram);

        gl.useProgram(glProgram);

        return glProgram;
    }

    function getColorData(color) {
        var tmpCanvas = document.createElement('canvas');
        var tmpCtx = tmpCanvas.getContext('2d');
        tmpCanvas.width = 1;
        tmpCanvas.height = 1;
        tmpCtx.fillStyle = color;
        tmpCtx.fillRect(0, 0, 1, 1);
        return tmpCtx.getImageData(0, 0, 1, 1).data;
    }

    var vs_s = [
        'attribute vec4 a_Position;',
        'void main() {',
        'gl_Position = a_Position;',
        'gl_PointSize = 30.0;',
        '}',
    ].join('');

    var fs_s = [
        'precision mediump float;',
        'uniform vec4 u_FragColor;',
        'void main() {',
        'gl_FragColor = u_FragColor;',
        '}',
    ].join('');

    function draw$1(gl, data, options) {
        if (!data) {
            return;
        }

        var program = initShaders(gl, vs_s, fs_s);

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

        //gl.clearColor(0.0, 0.0, 1.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        var halfCanvasWidth = gl.canvas.width / 2;
        var halfCanvasHeight = gl.canvas.height / 2;

        // Create a buffer object
        var vertexBuffer = gl.createBuffer();
        // Bind the buffer object to target
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        var a_Position = gl.getAttribLocation(program, 'a_Position');
        // Assign the buffer object to a_Position variable
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

        // Enable the assignment to a_Position variable
        gl.enableVertexAttribArray(a_Position);

        var uFragColor = gl.getUniformLocation(program, 'u_FragColor');

        var colored = getColorData(options.strokeStyle || 'red');

        gl.uniform4f(uFragColor, colored[0] / 255, colored[1] / 255, colored[2] / 255, colored[3] / 255);

        gl.lineWidth(options.lineWidth || 1);

        for (var i = 0, len = data.length; i < len; i++) {
            var _geometry = data[i].geometry._coordinates;

            var verticesData = [];

            for (var j = 0; j < _geometry.length; j++) {
                var item = _geometry[j];

                var x = (item[0] - halfCanvasWidth) / halfCanvasWidth;
                var y = (halfCanvasHeight - item[1]) / halfCanvasHeight;
                verticesData.push(x, y);
            }

            var vertices = new Float32Array(verticesData);
            // Write date into the buffer object
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
            gl.drawArrays(gl.LINE_STRIP, 0, _geometry.length);
        }
    }

    var line = {
        draw: draw$1,
    };

    var vs_s$1 = [
        'attribute vec4 a_Position;',
        'attribute float a_PointSize;',
        'void main() {',
        'gl_Position = a_Position;',
        'gl_PointSize = a_PointSize;',
        '}',
    ].join('');

    var fs_s$1 = [
        'precision mediump float;',
        'uniform vec4 u_FragColor;',
        'void main() {',
        'gl_FragColor = u_FragColor;',
        '}',
    ].join('');

    function draw$2(gl, data, options) {
        if (!data) {
            return;
        }

        var program = initShaders(gl, vs_s$1, fs_s$1);

        var a_Position = gl.getAttribLocation(program, 'a_Position');

        var a_PointSize = gl.getAttribLocation(program, 'a_PointSize');

        var uFragColor = gl.getUniformLocation(program, 'u_FragColor');

        //gl.clearColor(0.0, 0.0, 1.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        var halfCanvasWidth = gl.canvas.width / 2;
        var halfCanvasHeight = gl.canvas.height / 2;

        var verticesData = [];
        var count = 0;
        for (var i = 0; i < data.length; i++) {
            var item = data[i].geometry._coordinates;

            var x = (item[0] - halfCanvasWidth) / halfCanvasWidth;
            var y = (halfCanvasHeight - item[1]) / halfCanvasHeight;

            if (x < -1 || x > 1 || y < -1 || y > 1) {
                continue;
            }
            verticesData.push(x, y);
            count++;
        }

        var vertices = new Float32Array(verticesData);
        var n = count; // The number of vertices

        // Create a buffer object
        var vertexBuffer = gl.createBuffer();

        // Bind the buffer object to target
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        // Write date into the buffer object
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        // Assign the buffer object to a_Position variable
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

        // Enable the assignment to a_Position variable
        gl.enableVertexAttribArray(a_Position);

        gl.vertexAttrib1f(a_PointSize, options._size);

        var colored = getColorData(options.fillStyle || 'red');

        gl.uniform4f(uFragColor, colored[0] / 255, colored[1] / 255, colored[2] / 255, colored[3] / 255);
        gl.drawArrays(gl.POINTS, 0, n);
    }

    var point = {
        draw: draw$2,
    };

    function earcut(data, holeIndices, dim) {
        dim = dim || 2;

        var hasHoles = holeIndices && holeIndices.length,
            outerLen = hasHoles ? holeIndices[0] * dim : data.length,
            outerNode = linkedList(data, 0, outerLen, dim, true),
            triangles = [];

        if (!outerNode) return triangles;

        var minX, minY, maxX, maxY, x, y, size;

        if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

        // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
        if (data.length > 80 * dim) {
            minX = maxX = data[0];
            minY = maxY = data[1];

            for (var i = dim; i < outerLen; i += dim) {
                x = data[i];
                y = data[i + 1];
                if (x < minX) minX = x;
                if (y < minY) minY = y;
                if (x > maxX) maxX = x;
                if (y > maxY) maxY = y;
            }

            // minX, minY and size are later used to transform coords into integers for z-order calculation
            size = Math.max(maxX - minX, maxY - minY);
        }

        earcutLinked(outerNode, triangles, dim, minX, minY, size);

        return triangles;
    }

    // create a circular doubly linked list from polygon points in the specified winding order
    function linkedList(data, start, end, dim, clockwise) {
        var i, last;

        if (clockwise === signedArea(data, start, end, dim) > 0) {
            for (i = start; i < end; i += dim) {
                last = insertNode(i, data[i], data[i + 1], last);
            }
        } else {
            for (i = end - dim; i >= start; i -= dim) {
                last = insertNode(i, data[i], data[i + 1], last);
            }
        }

        if (last && equals(last, last.next)) {
            removeNode(last);
            last = last.next;
        }

        return last;
    }

    // eliminate colinear or duplicate points
    function filterPoints(start, end) {
        if (!start) return start;
        if (!end) end = start;

        var p = start,
            again;
        do {
            again = false;

            if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
                removeNode(p);
                p = end = p.prev;
                if (p === p.next) return null;
                again = true;
            } else {
                p = p.next;
            }
        } while (again || p !== end);

        return end;
    }

    // main ear slicing loop which triangulates a polygon (given as a linked list)
    function earcutLinked(ear, triangles, dim, minX, minY, size, pass) {
        if (!ear) return;

        // interlink polygon nodes in z-order
        if (!pass && size) indexCurve(ear, minX, minY, size);

        var stop = ear,
            prev,
            next;

        // iterate through ears, slicing them one by one
        while (ear.prev !== ear.next) {
            prev = ear.prev;
            next = ear.next;

            if (size ? isEarHashed(ear, minX, minY, size) : isEar(ear)) {
                // cut off the triangle
                triangles.push(prev.i / dim);
                triangles.push(ear.i / dim);
                triangles.push(next.i / dim);

                removeNode(ear);

                // skipping the next vertice leads to less sliver triangles
                ear = next.next;
                stop = next.next;

                continue;
            }

            ear = next;

            // if we looped through the whole remaining polygon and can't find any more ears
            if (ear === stop) {
                // try filtering points and slicing again
                if (!pass) {
                    earcutLinked(filterPoints(ear), triangles, dim, minX, minY, size, 1);

                    // if this didn't work, try curing all small self-intersections locally
                } else if (pass === 1) {
                    ear = cureLocalIntersections(ear, triangles, dim);
                    earcutLinked(ear, triangles, dim, minX, minY, size, 2);

                    // as a last resort, try splitting the remaining polygon into two
                } else if (pass === 2) {
                    splitEarcut(ear, triangles, dim, minX, minY, size);
                }

                break;
            }
        }
    }

    // check whether a polygon node forms a valid ear with adjacent nodes
    function isEar(ear) {
        var a = ear.prev,
            b = ear,
            c = ear.next;

        if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

        // now make sure we don't have other points inside the potential ear
        var p = ear.next.next;

        while (p !== ear.prev) {
            if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
            p = p.next;
        }

        return true;
    }

    function isEarHashed(ear, minX, minY, size) {
        var a = ear.prev,
            b = ear,
            c = ear.next;

        if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

        // triangle bbox; min & max are calculated like this for speed
        var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : b.x < c.x ? b.x : c.x,
            minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : b.y < c.y ? b.y : c.y,
            maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : b.x > c.x ? b.x : c.x,
            maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : b.y > c.y ? b.y : c.y;

        // z-order range for the current triangle bbox;
        var minZ = zOrder(minTX, minTY, minX, minY, size),
            maxZ = zOrder(maxTX, maxTY, minX, minY, size);

        // first look for points inside the triangle in increasing z-order
        var p = ear.nextZ;

        while (p && p.z <= maxZ) {
            if (
                p !== ear.prev &&
                p !== ear.next &&
                pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
                area(p.prev, p, p.next) >= 0
            )
                return false;
            p = p.nextZ;
        }

        // then look for points in decreasing z-order
        p = ear.prevZ;

        while (p && p.z >= minZ) {
            if (
                p !== ear.prev &&
                p !== ear.next &&
                pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
                area(p.prev, p, p.next) >= 0
            )
                return false;
            p = p.prevZ;
        }

        return true;
    }

    // go through all polygon nodes and cure small local self-intersections
    function cureLocalIntersections(start, triangles, dim) {
        var p = start;
        do {
            var a = p.prev,
                b = p.next.next;

            if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
                triangles.push(a.i / dim);
                triangles.push(p.i / dim);
                triangles.push(b.i / dim);

                // remove two nodes involved
                removeNode(p);
                removeNode(p.next);

                p = start = b;
            }
            p = p.next;
        } while (p !== start);

        return p;
    }

    // try splitting polygon into two and triangulate them independently
    function splitEarcut(start, triangles, dim, minX, minY, size) {
        // look for a valid diagonal that divides the polygon into two
        var a = start;
        do {
            var b = a.next.next;
            while (b !== a.prev) {
                if (a.i !== b.i && isValidDiagonal(a, b)) {
                    // split the polygon in two by the diagonal
                    var c = splitPolygon(a, b);

                    // filter colinear points around the cuts
                    a = filterPoints(a, a.next);
                    c = filterPoints(c, c.next);

                    // run earcut on each half
                    earcutLinked(a, triangles, dim, minX, minY, size);
                    earcutLinked(c, triangles, dim, minX, minY, size);
                    return;
                }
                b = b.next;
            }
            a = a.next;
        } while (a !== start);
    }

    // link every hole into the outer loop, producing a single-ring polygon without holes
    function eliminateHoles(data, holeIndices, outerNode, dim) {
        var queue = [],
            i,
            len,
            start,
            end,
            list;

        for (i = 0, len = holeIndices.length; i < len; i++) {
            start = holeIndices[i] * dim;
            end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            list = linkedList(data, start, end, dim, false);
            if (list === list.next) list.steiner = true;
            queue.push(getLeftmost(list));
        }

        queue.sort(compareX);

        // process holes from left to right
        for (i = 0; i < queue.length; i++) {
            eliminateHole(queue[i], outerNode);
            outerNode = filterPoints(outerNode, outerNode.next);
        }

        return outerNode;
    }

    function compareX(a, b) {
        return a.x - b.x;
    }

    // find a bridge between vertices that connects hole with an outer ring and and link it
    function eliminateHole(hole, outerNode) {
        outerNode = findHoleBridge(hole, outerNode);
        if (outerNode) {
            var b = splitPolygon(outerNode, hole);
            filterPoints(b, b.next);
        }
    }

    // David Eberly's algorithm for finding a bridge between hole and outer polygon
    function findHoleBridge(hole, outerNode) {
        var p = outerNode,
            hx = hole.x,
            hy = hole.y,
            qx = -Infinity,
            m;

        // find a segment intersected by a ray from the hole's leftmost point to the left;
        // segment's endpoint with lesser x will be potential connection point
        do {
            if (hy <= p.y && hy >= p.next.y) {
                var x = p.x + ((hy - p.y) * (p.next.x - p.x)) / (p.next.y - p.y);
                if (x <= hx && x > qx) {
                    qx = x;
                    if (x === hx) {
                        if (hy === p.y) return p;
                        if (hy === p.next.y) return p.next;
                    }
                    m = p.x < p.next.x ? p : p.next;
                }
            }
            p = p.next;
        } while (p !== outerNode);

        if (!m) return null;

        if (hx === qx) return m.prev; // hole touches outer segment; pick lower endpoint

        // look for points inside the triangle of hole point, segment intersection and endpoint;
        // if there are no points found, we have a valid connection;
        // otherwise choose the point of the minimum angle with the ray as connection point

        var stop = m,
            mx = m.x,
            my = m.y,
            tanMin = Infinity,
            tan;

        p = m.next;

        while (p !== stop) {
            if (
                hx >= p.x &&
                p.x >= mx &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)
            ) {
                tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

                if ((tan < tanMin || (tan === tanMin && p.x > m.x)) && locallyInside(p, hole)) {
                    m = p;
                    tanMin = tan;
                }
            }

            p = p.next;
        }

        return m;
    }

    // interlink polygon nodes in z-order
    function indexCurve(start, minX, minY, size) {
        var p = start;
        do {
            if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, size);
            p.prevZ = p.prev;
            p.nextZ = p.next;
            p = p.next;
        } while (p !== start);

        p.prevZ.nextZ = null;
        p.prevZ = null;

        sortLinked(p);
    }

    // Simon Tatham's linked list merge sort algorithm
    // http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
    function sortLinked(list) {
        var i,
            p,
            q,
            e,
            tail,
            numMerges,
            pSize,
            qSize,
            inSize = 1;

        do {
            p = list;
            list = null;
            tail = null;
            numMerges = 0;

            while (p) {
                numMerges++;
                q = p;
                pSize = 0;
                for (i = 0; i < inSize; i++) {
                    pSize++;
                    q = q.nextZ;
                    if (!q) break;
                }

                qSize = inSize;

                while (pSize > 0 || (qSize > 0 && q)) {
                    if (pSize === 0) {
                        e = q;
                        q = q.nextZ;
                        qSize--;
                    } else if (qSize === 0 || !q) {
                        e = p;
                        p = p.nextZ;
                        pSize--;
                    } else if (p.z <= q.z) {
                        e = p;
                        p = p.nextZ;
                        pSize--;
                    } else {
                        e = q;
                        q = q.nextZ;
                        qSize--;
                    }

                    if (tail) tail.nextZ = e;
                    else list = e;

                    e.prevZ = tail;
                    tail = e;
                }

                p = q;
            }

            tail.nextZ = null;
            inSize *= 2;
        } while (numMerges > 1);

        return list;
    }

    // z-order of a point given coords and size of the data bounding box
    function zOrder(x, y, minX, minY, size) {
        // coords are transformed into non-negative 15-bit integer range
        x = (32767 * (x - minX)) / size;
        y = (32767 * (y - minY)) / size;

        x = (x | (x << 8)) & 0x00ff00ff;
        x = (x | (x << 4)) & 0x0f0f0f0f;
        x = (x | (x << 2)) & 0x33333333;
        x = (x | (x << 1)) & 0x55555555;

        y = (y | (y << 8)) & 0x00ff00ff;
        y = (y | (y << 4)) & 0x0f0f0f0f;
        y = (y | (y << 2)) & 0x33333333;
        y = (y | (y << 1)) & 0x55555555;

        return x | (y << 1);
    }

    // find the leftmost node of a polygon ring
    function getLeftmost(start) {
        var p = start,
            leftmost = start;
        do {
            if (p.x < leftmost.x) leftmost = p;
            p = p.next;
        } while (p !== start);

        return leftmost;
    }

    // check if a point lies within a convex triangle
    function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
        return (
            (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
            (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
            (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0
        );
    }

    // check if a diagonal between two polygon nodes is valid (lies in polygon interior)
    function isValidDiagonal(a, b) {
        return (
            a.next.i !== b.i &&
            a.prev.i !== b.i &&
            !intersectsPolygon(a, b) &&
            locallyInside(a, b) &&
            locallyInside(b, a) &&
            middleInside(a, b)
        );
    }

    // signed area of a triangle
    function area(p, q, r) {
        return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    }

    // check if two points are equal
    function equals(p1, p2) {
        return p1.x === p2.x && p1.y === p2.y;
    }

    // check if two segments intersect
    function intersects(p1, q1, p2, q2) {
        if ((equals(p1, q1) && equals(p2, q2)) || (equals(p1, q2) && equals(p2, q1))) return true;
        return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 && area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
    }

    // check if a polygon diagonal intersects any polygon segments
    function intersectsPolygon(a, b) {
        var p = a;
        do {
            if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b))
                return true;
            p = p.next;
        } while (p !== a);

        return false;
    }

    // check if a polygon diagonal is locally inside the polygon
    function locallyInside(a, b) {
        return area(a.prev, a, a.next) < 0
            ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0
            : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
    }

    // check if the middle point of a polygon diagonal is inside the polygon
    function middleInside(a, b) {
        var p = a,
            inside = false,
            px = (a.x + b.x) / 2,
            py = (a.y + b.y) / 2;
        do {
            if (p.y > py !== p.next.y > py && px < ((p.next.x - p.x) * (py - p.y)) / (p.next.y - p.y) + p.x)
                inside = !inside;
            p = p.next;
        } while (p !== a);

        return inside;
    }

    // link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
    // if one belongs to the outer ring and another to a hole, it merges it into a single ring
    function splitPolygon(a, b) {
        var a2 = new Node(a.i, a.x, a.y),
            b2 = new Node(b.i, b.x, b.y),
            an = a.next,
            bp = b.prev;

        a.next = b;
        b.prev = a;

        a2.next = an;
        an.prev = a2;

        b2.next = a2;
        a2.prev = b2;

        bp.next = b2;
        b2.prev = bp;

        return b2;
    }

    // create a node and optionally link it with previous one (in a circular doubly linked list)
    function insertNode(i, x, y, last) {
        var p = new Node(i, x, y);

        if (!last) {
            p.prev = p;
            p.next = p;
        } else {
            p.next = last.next;
            p.prev = last;
            last.next.prev = p;
            last.next = p;
        }
        return p;
    }

    function removeNode(p) {
        p.next.prev = p.prev;
        p.prev.next = p.next;

        if (p.prevZ) p.prevZ.nextZ = p.nextZ;
        if (p.nextZ) p.nextZ.prevZ = p.prevZ;
    }

    function Node(i, x, y) {
        // vertice index in coordinates array
        this.i = i;

        // vertex coordinates
        this.x = x;
        this.y = y;

        // previous and next vertice nodes in a polygon ring
        this.prev = null;
        this.next = null;

        // z-order curve value
        this.z = null;

        // previous and next nodes in z-order
        this.prevZ = null;
        this.nextZ = null;

        // indicates whether this is a steiner point
        this.steiner = false;
    }

    // return a percentage difference between the polygon area and its triangulation area;
    // used to verify correctness of triangulation
    earcut.deviation = function (data, holeIndices, dim, triangles) {
        var hasHoles = holeIndices && holeIndices.length;
        var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

        var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
        if (hasHoles) {
            for (var i = 0, len = holeIndices.length; i < len; i++) {
                var start = holeIndices[i] * dim;
                var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
                polygonArea -= Math.abs(signedArea(data, start, end, dim));
            }
        }

        var trianglesArea = 0;
        for (i = 0; i < triangles.length; i += 3) {
            var a = triangles[i] * dim;
            var b = triangles[i + 1] * dim;
            var c = triangles[i + 2] * dim;
            trianglesArea += Math.abs(
                (data[a] - data[c]) * (data[b + 1] - data[a + 1]) - (data[a] - data[b]) * (data[c + 1] - data[a + 1])
            );
        }

        return polygonArea === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea) / polygonArea);
    };

    function signedArea(data, start, end, dim) {
        var sum = 0;
        for (var i = start, j = end - dim; i < end; i += dim) {
            sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
            j = i;
        }
        return sum;
    }

    // turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
    earcut.flatten = function (data) {
        var dim = data[0][0].length,
            result = {
                vertices: [],
                holes: [],
                dimensions: dim,
            },
            holeIndex = 0;

        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].length; j++) {
                for (var d = 0; d < dim; d++) {
                    result.vertices.push(data[i][j][d]);
                }
            }
            if (i > 0) {
                holeIndex += data[i - 1].length;
                result.holes.push(holeIndex);
            }
        }
        return result;
    };

    var vs_s$2 = [
        'attribute vec4 a_Position;',
        'void main() {',
        'gl_Position = a_Position;',
        'gl_PointSize = 30.0;',
        '}',
    ].join('');

    var fs_s$2 = [
        'precision mediump float;',
        'uniform vec4 u_FragColor;',
        'void main() {',
        'gl_FragColor = u_FragColor;',
        '}',
    ].join('');

    function draw$3(gl, data, options) {
        if (!data) {
            return;
        }

        // gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        var program = initShaders(gl, vs_s$2, fs_s$2);

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

        var halfCanvasWidth = gl.canvas.width / 2;
        var halfCanvasHeight = gl.canvas.height / 2;

        // Bind the buffer object to target
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());

        var a_Position = gl.getAttribLocation(program, 'a_Position');
        // Assign the buffer object to a_Position variable
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

        // Enable the assignment to a_Position variable
        gl.enableVertexAttribArray(a_Position);

        var uFragColor = gl.getUniformLocation(program, 'u_FragColor');

        var colored = getColorData(options.fillStyle || 'red');

        gl.uniform4f(uFragColor, colored[0] / 255, colored[1] / 255, colored[2] / 255, colored[3] / 255);

        gl.lineWidth(options.lineWidth || 1);

        var verticesArr = [];
        var trianglesArr = [];

        var maxSize = 65536;
        var indexOffset = 0;

        for (var i = 0, len = data.length; i < len; i++) {
            var flatten = earcut.flatten(data[i].geometry._coordinates || data[i].geometry.coordinates);
            var vertices = flatten.vertices;
            indexOffset = verticesArr.length / 2;
            for (var j = 0; j < vertices.length; j += 2) {
                vertices[j] = (vertices[j] - halfCanvasWidth) / halfCanvasWidth;
                vertices[j + 1] = (halfCanvasHeight - vertices[j + 1]) / halfCanvasHeight;
            }

            if ((verticesArr.length + vertices.length) / 2 > maxSize) {
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesArr), gl.STATIC_DRAW);
                gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(trianglesArr), gl.STATIC_DRAW);
                gl.drawElements(gl.TRIANGLES, trianglesArr.length, gl.UNSIGNED_SHORT, 0);
                verticesArr.length = 0;
                trianglesArr.length = 0;
                indexOffset = 0;
            }

            for (var j = 0; j < vertices.length; j++) {
                verticesArr.push(vertices[j]);
            }

            var triangles = earcut(vertices, flatten.holes, flatten.dimensions);
            for (var j = 0; j < triangles.length; j++) {
                trianglesArr.push(triangles[j] + indexOffset);
            }
        }

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesArr), gl.STATIC_DRAW);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(trianglesArr), gl.STATIC_DRAW);
        gl.drawElements(gl.TRIANGLES, trianglesArr.length, gl.UNSIGNED_SHORT, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    }

    var polygon = {
        draw: draw$3,
    };

    /**
     * @author kyle / http://nikai.us/
     */
    var webglDrawSimple = {
        draw: function draw(gl, dataSet, options) {
            var data = dataSet instanceof DataSet ? dataSet.get() : dataSet;
            if (data.length > 0) {
                if (data[0].geometry.type == 'LineString') {
                    line.draw(gl, data, options);
                } else if (data[0].geometry.type == 'Polygon' || data[0].geometry.type == 'MultiPolygon') {
                    polygon.draw(gl, data, options);
                } else {
                    point.draw(gl, data, options);
                }
            }
        },
    };

    /**
     * get the center by the city name
     * @author kyle / http://nikai.us/
     */

    function getCenter(g) {
        var item = g.split('|');
        item[0] = item[0].split(',');
        return {
            lng: parseFloat(item[0][0]),
            lat: parseFloat(item[0][1]),
        };
    }

    var cityCenter = {
        getCenterByCityName: function getCenterByCityName(name) {
            for (var i = 0; i < citycenter.municipalities.length; i++) {
                if (citycenter.municipalities[i].n == name) {
                    return getCenter(citycenter.municipalities[i].g);
                }
            }

            var provinces = citycenter.provinces;
            for (var i = 0; i < provinces.length; i++) {
                if (provinces[i].n == name) {
                    return getCenter(provinces[i].g);
                }
                var cities = provinces[i].cities;
                for (var j = 0; j < cities.length; j++) {
                    if (cities[j].n == name) {
                        return getCenter(cities[j].g);
                    }
                }
            }
            return null;
        },
    };

    /**
     * 根据弧线的坐标节点数组
     */
    function getCurvePoints(points) {
        var curvePoints = [];
        for (var i = 0; i < points.length - 1; i++) {
            var p = getCurveByTwoPoints(points[i], points[i + 1]);
            if (p && p.length > 0) {
                curvePoints = curvePoints.concat(p);
            }
        }
        return curvePoints;
    }

    /**
     * 根据两点获取曲线坐标点数组
     * @param Point 起点
     * @param Point 终点
     */
    function getCurveByTwoPoints(obj1, obj2) {
        if (!obj1 || !obj2) {
            return null;
        }

        var B1 = function B1(x) {
            return 1 - 2 * x + x * x;
        };
        var B2 = function B2(x) {
            return 2 * x - 2 * x * x;
        };
        var B3 = function B3(x) {
            return x * x;
        };

        var curveCoordinates = [];

        var count = 40; // 曲线是由一些小的线段组成的，这个表示这个曲线所有到的折线的个数
        var isFuture = false;
        var t, h, h2, lat3, lng3, j, t2;
        var LnArray = [];
        var i = 0;
        var inc = 0;

        if (typeof obj2 == 'undefined') {
            if (typeof curveCoordinates != 'undefined') {
                curveCoordinates = [];
            }
            return;
        }

        var lat1 = parseFloat(obj1.lat);
        var lat2 = parseFloat(obj2.lat);
        var lng1 = parseFloat(obj1.lng);
        var lng2 = parseFloat(obj2.lng);

        // 计算曲线角度的方法
        if (lng2 > lng1) {
            if (parseFloat(lng2 - lng1) > 180) {
                if (lng1 < 0) {
                    lng1 = parseFloat(180 + 180 + lng1);
                }
            }
        }

        if (lng1 > lng2) {
            if (parseFloat(lng1 - lng2) > 180) {
                if (lng2 < 0) {
                    lng2 = parseFloat(180 + 180 + lng2);
                }
            }
        }
        j = 0;
        t2 = 0;
        if (lat2 == lat1) {
            t = 0;
            h = lng1 - lng2;
        } else if (lng2 == lng1) {
            t = Math.PI / 2;
            h = lat1 - lat2;
        } else {
            t = Math.atan((lat2 - lat1) / (lng2 - lng1));
            h = (lat2 - lat1) / Math.sin(t);
        }
        if (t2 == 0) {
            t2 = t + Math.PI / 5;
        }
        h2 = h / 2;
        lng3 = h2 * Math.cos(t2) + lng1;
        lat3 = h2 * Math.sin(t2) + lat1;

        for (i = 0; i < count + 1; i++) {
            curveCoordinates.push([
                lng1 * B1(inc) + lng3 * B2(inc) + lng2 * B3(inc),
                lat1 * B1(inc) + lat3 * B2(inc) + lat2 * B3(inc),
            ]);
            inc = inc + 1 / count;
        }
        return curveCoordinates;
    }

    var curve = {
        getPoints: getCurvePoints,
    };

    /* 
    FDEB algorithm implementation [www.win.tue.nl/~dholten/papers/forcebundles_eurovis.pdf].

    Author:  (github.com/upphiminn)
    2013

    */

    var ForceEdgeBundling = function ForceEdgeBundling() {
        var data_nodes = {},
            // {'nodeid':{'x':,'y':},..}
            data_edges = [],
            // [{'source':'nodeid1', 'target':'nodeid2'},..]
            compatibility_list_for_edge = [],
            subdivision_points_for_edge = [],
            K = 0.1,
            // global bundling constant controling edge stiffness
            S_initial = 0.1,
            // init. distance to move points
            P_initial = 1,
            // init. subdivision number
            P_rate = 2,
            // subdivision rate increase
            C = 6,
            // number of cycles to perform
            I_initial = 70,
            // init. number of iterations for cycle
            I_rate = 0.6666667,
            // rate at which iteration number decreases i.e. 2/3
            compatibility_threshold = 0.6,
            invers_quadratic_mode = false,
            eps = 1e-8;

        /*** Geometry Helper Methods ***/
        function vector_dot_product(p, q) {
            return p.x * q.x + p.y * q.y;
        }

        function edge_as_vector(P) {
            return {
                x: data_nodes[P.target].x - data_nodes[P.source].x,
                y: data_nodes[P.target].y - data_nodes[P.source].y,
            };
        }

        function edge_length(e) {
            return Math.sqrt(
                Math.pow(data_nodes[e.source].x - data_nodes[e.target].x, 2) +
                    Math.pow(data_nodes[e.source].y - data_nodes[e.target].y, 2)
            );
        }

        function custom_edge_length(e) {
            return Math.sqrt(Math.pow(e.source.x - e.target.x, 2) + Math.pow(e.source.y - e.target.y, 2));
        }

        function edge_midpoint(e) {
            var middle_x = (data_nodes[e.source].x + data_nodes[e.target].x) / 2.0;
            var middle_y = (data_nodes[e.source].y + data_nodes[e.target].y) / 2.0;
            return {
                x: middle_x,
                y: middle_y,
            };
        }

        function compute_divided_edge_length(e_idx) {
            var length = 0;
            for (var i = 1; i < subdivision_points_for_edge[e_idx].length; i++) {
                var segment_length = euclidean_distance(
                    subdivision_points_for_edge[e_idx][i],
                    subdivision_points_for_edge[e_idx][i - 1]
                );
                length += segment_length;
            }
            return length;
        }

        function euclidean_distance(p, q) {
            return Math.sqrt(Math.pow(p.x - q.x, 2) + Math.pow(p.y - q.y, 2));
        }

        function project_point_on_line(p, Q) {
            var L = Math.sqrt(
                (Q.target.x - Q.source.x) * (Q.target.x - Q.source.x) +
                    (Q.target.y - Q.source.y) * (Q.target.y - Q.source.y)
            );
            var r =
                ((Q.source.y - p.y) * (Q.source.y - Q.target.y) - (Q.source.x - p.x) * (Q.target.x - Q.source.x)) /
                (L * L);

            return {
                x: Q.source.x + r * (Q.target.x - Q.source.x),
                y: Q.source.y + r * (Q.target.y - Q.source.y),
            };
        }

        /*** ********************** ***/

        /*** Initialization Methods ***/
        function initialize_edge_subdivisions() {
            for (var i = 0; i < data_edges.length; i++) {
                if (P_initial == 1) subdivision_points_for_edge[i] = [];
                //0 subdivisions
                else {
                    subdivision_points_for_edge[i] = [];
                    subdivision_points_for_edge[i].push(data_nodes[data_edges[i].source]);
                    subdivision_points_for_edge[i].push(data_nodes[data_edges[i].target]);
                }
            }
        }

        function initialize_compatibility_lists() {
            for (var i = 0; i < data_edges.length; i++) {
                compatibility_list_for_edge[i] = [];
            } //0 compatible edges.
        }

        function filter_self_loops(edgelist) {
            var filtered_edge_list = [];
            for (var e = 0; e < edgelist.length; e++) {
                if (
                    data_nodes[edgelist[e].source].x != data_nodes[edgelist[e].target].x &&
                    data_nodes[edgelist[e].source].y != data_nodes[edgelist[e].target].y
                ) {
                    //or smaller than eps
                    filtered_edge_list.push(edgelist[e]);
                }
            }

            return filtered_edge_list;
        }
        /*** ********************** ***/

        /*** Force Calculation Methods ***/
        function apply_spring_force(e_idx, i, kP) {
            var prev = subdivision_points_for_edge[e_idx][i - 1];
            var next = subdivision_points_for_edge[e_idx][i + 1];
            var crnt = subdivision_points_for_edge[e_idx][i];

            var x = prev.x - crnt.x + next.x - crnt.x;
            var y = prev.y - crnt.y + next.y - crnt.y;

            x *= kP;
            y *= kP;

            return {
                x: x,
                y: y,
            };
        }

        function apply_electrostatic_force(e_idx, i, S) {
            var sum_of_forces = {
                x: 0,
                y: 0,
            };
            var compatible_edges_list = compatibility_list_for_edge[e_idx];

            for (var oe = 0; oe < compatible_edges_list.length; oe++) {
                var force = {
                    x:
                        subdivision_points_for_edge[compatible_edges_list[oe]][i].x -
                        subdivision_points_for_edge[e_idx][i].x,
                    y:
                        subdivision_points_for_edge[compatible_edges_list[oe]][i].y -
                        subdivision_points_for_edge[e_idx][i].y,
                };

                if (Math.abs(force.x) > eps || Math.abs(force.y) > eps) {
                    var diff =
                        1 /
                        Math.pow(
                            custom_edge_length({
                                source: subdivision_points_for_edge[compatible_edges_list[oe]][i],
                                target: subdivision_points_for_edge[e_idx][i],
                            }),
                            1
                        );

                    sum_of_forces.x += force.x * diff;
                    sum_of_forces.y += force.y * diff;
                }
            }
            return sum_of_forces;
        }

        function apply_resulting_forces_on_subdivision_points(e_idx, P, S) {
            var kP = K / (edge_length(data_edges[e_idx]) * (P + 1)); // kP=K/|P|(number of segments), where |P| is the initial length of edge P.
            // (length * (num of sub division pts - 1))
            var resulting_forces_for_subdivision_points = [
                {
                    x: 0,
                    y: 0,
                },
            ];
            for (var i = 1; i < P + 1; i++) {
                // exclude initial end points of the edge 0 and P+1
                var resulting_force = {
                    x: 0,
                    y: 0,
                };

                var spring_force = apply_spring_force(e_idx, i, kP);
                var electrostatic_force = apply_electrostatic_force(e_idx, i, S);

                resulting_force.x = S * (spring_force.x + electrostatic_force.x);
                resulting_force.y = S * (spring_force.y + electrostatic_force.y);

                resulting_forces_for_subdivision_points.push(resulting_force);
            }
            resulting_forces_for_subdivision_points.push({
                x: 0,
                y: 0,
            });
            return resulting_forces_for_subdivision_points;
        }
        /*** ********************** ***/

        /*** Edge Division Calculation Methods ***/
        function update_edge_divisions(P) {
            for (var e_idx = 0; e_idx < data_edges.length; e_idx++) {
                if (P == 1) {
                    subdivision_points_for_edge[e_idx].push(data_nodes[data_edges[e_idx].source]); // source
                    subdivision_points_for_edge[e_idx].push(edge_midpoint(data_edges[e_idx])); // mid point
                    subdivision_points_for_edge[e_idx].push(data_nodes[data_edges[e_idx].target]); // target
                } else {
                    var divided_edge_length = compute_divided_edge_length(e_idx);
                    var segment_length = divided_edge_length / (P + 1);
                    var current_segment_length = segment_length;
                    var new_subdivision_points = [];
                    new_subdivision_points.push(data_nodes[data_edges[e_idx].source]); //source

                    for (var i = 1; i < subdivision_points_for_edge[e_idx].length; i++) {
                        var old_segment_length = euclidean_distance(
                            subdivision_points_for_edge[e_idx][i],
                            subdivision_points_for_edge[e_idx][i - 1]
                        );

                        while (old_segment_length > current_segment_length) {
                            var percent_position = current_segment_length / old_segment_length;
                            var new_subdivision_point_x = subdivision_points_for_edge[e_idx][i - 1].x;
                            var new_subdivision_point_y = subdivision_points_for_edge[e_idx][i - 1].y;

                            new_subdivision_point_x +=
                                percent_position *
                                (subdivision_points_for_edge[e_idx][i].x - subdivision_points_for_edge[e_idx][i - 1].x);
                            new_subdivision_point_y +=
                                percent_position *
                                (subdivision_points_for_edge[e_idx][i].y - subdivision_points_for_edge[e_idx][i - 1].y);
                            new_subdivision_points.push({
                                x: new_subdivision_point_x,
                                y: new_subdivision_point_y,
                            });

                            old_segment_length -= current_segment_length;
                            current_segment_length = segment_length;
                        }
                        current_segment_length -= old_segment_length;
                    }
                    new_subdivision_points.push(data_nodes[data_edges[e_idx].target]); //target
                    subdivision_points_for_edge[e_idx] = new_subdivision_points;
                }
            }
        }
        /*** ********************** ***/

        /*** Edge compatibility measures ***/
        function angle_compatibility(P, Q) {
            var result = Math.abs(
                vector_dot_product(edge_as_vector(P), edge_as_vector(Q)) / (edge_length(P) * edge_length(Q))
            );
            return result;
        }

        function scale_compatibility(P, Q) {
            var lavg = (edge_length(P) + edge_length(Q)) / 2.0;
            var result =
                2.0 /
                (lavg / Math.min(edge_length(P), edge_length(Q)) + Math.max(edge_length(P), edge_length(Q)) / lavg);
            return result;
        }

        function position_compatibility(P, Q) {
            var lavg = (edge_length(P) + edge_length(Q)) / 2.0;
            var midP = {
                x: (data_nodes[P.source].x + data_nodes[P.target].x) / 2.0,
                y: (data_nodes[P.source].y + data_nodes[P.target].y) / 2.0,
            };
            var midQ = {
                x: (data_nodes[Q.source].x + data_nodes[Q.target].x) / 2.0,
                y: (data_nodes[Q.source].y + data_nodes[Q.target].y) / 2.0,
            };
            var result = lavg / (lavg + euclidean_distance(midP, midQ));
            return result;
        }

        function edge_visibility(P, Q) {
            var I0 = project_point_on_line(data_nodes[Q.source], {
                source: data_nodes[P.source],
                target: data_nodes[P.target],
            });
            var I1 = project_point_on_line(data_nodes[Q.target], {
                source: data_nodes[P.source],
                target: data_nodes[P.target],
            }); //send acutal edge points positions
            var midI = {
                x: (I0.x + I1.x) / 2.0,
                y: (I0.y + I1.y) / 2.0,
            };
            var midP = {
                x: (data_nodes[P.source].x + data_nodes[P.target].x) / 2.0,
                y: (data_nodes[P.source].y + data_nodes[P.target].y) / 2.0,
            };
            var result = Math.max(0, 1 - (2 * euclidean_distance(midP, midI)) / euclidean_distance(I0, I1));
            return result;
        }

        function visibility_compatibility(P, Q) {
            return Math.min(edge_visibility(P, Q), edge_visibility(Q, P));
        }

        function compatibility_score(P, Q) {
            var result =
                angle_compatibility(P, Q) *
                scale_compatibility(P, Q) *
                position_compatibility(P, Q) *
                visibility_compatibility(P, Q);

            return result;
        }

        function are_compatible(P, Q) {
            // console.log('compatibility ' + P.source +' - '+ P.target + ' and ' + Q.source +' '+ Q.target);
            return compatibility_score(P, Q) >= compatibility_threshold;
        }

        function compute_compatibility_lists() {
            for (var e = 0; e < data_edges.length - 1; e++) {
                for (var oe = e + 1; oe < data_edges.length; oe++) {
                    // don't want any duplicates
                    if (e == oe) continue;
                    else {
                        if (are_compatible(data_edges[e], data_edges[oe])) {
                            compatibility_list_for_edge[e].push(oe);
                            compatibility_list_for_edge[oe].push(e);
                        }
                    }
                }
            }
        }

        /*** ************************ ***/

        /*** Main Bundling Loop Methods ***/
        var forcebundle = function forcebundle() {
            var S = S_initial;
            var I = I_initial;
            var P = P_initial;

            initialize_edge_subdivisions();
            initialize_compatibility_lists();
            update_edge_divisions(P);
            compute_compatibility_lists();
            for (var cycle = 0; cycle < C; cycle++) {
                for (var iteration = 0; iteration < I; iteration++) {
                    var forces = [];
                    for (var edge = 0; edge < data_edges.length; edge++) {
                        forces[edge] = apply_resulting_forces_on_subdivision_points(edge, P, S);
                    }
                    for (var e = 0; e < data_edges.length; e++) {
                        for (var i = 0; i < P + 1; i++) {
                            subdivision_points_for_edge[e][i].x += forces[e][i].x;
                            subdivision_points_for_edge[e][i].y += forces[e][i].y;
                        }
                    }
                }
                //prepare for next cycle
                S = S / 2;
                P = P * 2;
                I = I_rate * I;

                update_edge_divisions(P);
                // console.log('C' + cycle);
                // console.log('P' + P);
                // console.log('S' + S);
            }
            return subdivision_points_for_edge;
        };
        /*** ************************ ***/

        /*** Getters/Setters Methods ***/
        forcebundle.nodes = function (nl) {
            if (arguments.length == 0) {
                return data_nodes;
            } else {
                data_nodes = nl;
            }
            return forcebundle;
        };

        forcebundle.edges = function (ll) {
            if (arguments.length == 0) {
                return data_edges;
            } else {
                data_edges = filter_self_loops(ll); //remove edges to from to the same point
            }
            return forcebundle;
        };

        forcebundle.bundling_stiffness = function (k) {
            if (arguments.length == 0) {
                return K;
            } else {
                K = k;
            }
            return forcebundle;
        };

        forcebundle.step_size = function (step) {
            if (arguments.length == 0) {
                return S_initial;
            } else {
                S_initial = step;
            }
            return forcebundle;
        };

        forcebundle.cycles = function (c) {
            if (arguments.length == 0) {
                return C;
            } else {
                C = c;
            }
            return forcebundle;
        };

        forcebundle.iterations = function (i) {
            if (arguments.length == 0) {
                return I_initial;
            } else {
                I_initial = i;
            }
            return forcebundle;
        };

        forcebundle.iterations_rate = function (i) {
            if (arguments.length == 0) {
                return I_rate;
            } else {
                I_rate = i;
            }
            return forcebundle;
        };

        forcebundle.subdivision_points_seed = function (p) {
            if (arguments.length == 0) {
                return P;
            } else {
                P = p;
            }
            return forcebundle;
        };

        forcebundle.subdivision_rate = function (r) {
            if (arguments.length == 0) {
                return P_rate;
            } else {
                P_rate = r;
            }
            return forcebundle;
        };

        forcebundle.compatbility_threshold = function (t) {
            if (arguments.length == 0) {
                return compatbility_threshold;
            } else {
                compatibility_threshold = t;
            }
            return forcebundle;
        };

        /*** ************************ ***/

        return forcebundle;
    };

    /**
     * @author kyle / http://nikai.us/
     */

    /**
     * Category
     * @param {Object} splitList:
     *   {
     *       other: 1,
     *       1: 2,
     *       2: 3,
     *       3: 4,
     *       4: 5,
     *       5: 6,
     *       6: 7
     *   }
     */
    function Category(splitList) {
        this.splitList = splitList || {
            other: 1,
        };
    }

    Category.prototype.get = function (count) {
        var splitList = this.splitList;

        var value = splitList['other'];

        for (var i in splitList) {
            if (count == i) {
                value = splitList[i];
                break;
            }
        }

        return value;
    };

    /**
     * 根据DataSet自动生成对应的splitList
     */
    Category.prototype.generateByDataSet = function (dataSet) {
        var colors = [
            'rgba(255, 255, 0, 0.8)',
            'rgba(253, 98, 104, 0.8)',
            'rgba(255, 146, 149, 0.8)',
            'rgba(255, 241, 193, 0.8)',
            'rgba(110, 176, 253, 0.8)',
            'rgba(52, 139, 251, 0.8)',
            'rgba(17, 102, 252, 0.8)',
        ];
        var data = dataSet.get();
        this.splitList = {};
        var count = 0;
        for (var i = 0; i < data.length; i++) {
            if (this.splitList[data[i].count] === undefined) {
                this.splitList[data[i].count] = colors[count];
                count++;
            }
            if (count >= colors.length - 1) {
                break;
            }
        }

        this.splitList['other'] = colors[colors.length - 1];
    };

    /**
     * @author kyle / http://nikai.us/
     */

    /**
     * Choropleth
     * @param {Object} splitList:
     *       [
     *           {
     *               start: 0,
     *               end: 2,
     *               value: randomColor()
     *           },{
     *               start: 2,
     *               end: 4,
     *               value: randomColor()
     *           },{
     *               start: 4,
     *               value: randomColor()
     *           }
     *       ];
     *
     */
    function Choropleth(splitList) {
        this.splitList = splitList || [
            {
                start: 0,
                value: 'red',
            },
        ];
    }

    Choropleth.prototype.get = function (count) {
        var splitList = this.splitList;

        var value = false;

        for (var i = 0; i < splitList.length; i++) {
            if (
                (splitList[i].start === undefined ||
                    (splitList[i].start !== undefined && count >= splitList[i].start)) &&
                (splitList[i].end === undefined || (splitList[i].end !== undefined && count < splitList[i].end))
            ) {
                value = splitList[i].value;
                break;
            }
        }

        return value;
    };

    /**
     * 根据DataSet自动生成对应的splitList
     */
    Choropleth.prototype.generateByDataSet = function (dataSet) {
        var min = dataSet.getMin('count');
        var max = dataSet.getMax('count');

        this.generateByMinMax(min, max);
    };

    /**
     * 根据DataSet自动生成对应的splitList
     */
    Choropleth.prototype.generateByMinMax = function (min, max) {
        var colors = [
            'rgba(255, 255, 0, 0.8)',
            'rgba(253, 98, 104, 0.8)',
            'rgba(255, 146, 149, 0.8)',
            'rgba(255, 241, 193, 0.8)',
            'rgba(110, 176, 253, 0.8)',
            'rgba(52, 139, 251, 0.8)',
            'rgba(17, 102, 252, 0.8)',
        ];
        var splitNum = (max - min) / 7;
        var index = min;
        this.splitList = [];
        var count = 0;
        while (index < max) {
            this.splitList.push({
                start: index,
                end: index + splitNum,
                value: colors[count],
            });
            count++;
            index += splitNum;
        }
    };

    /**
     * @author Mofei<http://www.zhuwenlong.com>
     */

    var MapHelper = (function () {
        function MapHelper(id, type, opt) {
            classCallCheck(this, MapHelper);

            if (!id || !type) {
                console.warn('id 和 type 为必填项');
                return false;
            }

            if (type == 'baidu') {
                if (!BMap) {
                    console.warn('请先引入百度地图JS API');
                    return false;
                }
            } else {
                console.warn('暂不支持你的地图类型');
            }
            this.type = type;
            var center = opt && opt.center ? opt.center : [106.962497, 38.208726];
            var zoom = opt && opt.zoom ? opt.zoom : 5;
            var map = (this.map = new BMap.Map(id, {
                enableMapClick: false,
            }));
            map.centerAndZoom(new BMap.Point(center[0], center[1]), zoom);
            map.enableScrollWheelZoom(true);

            map.setMapStyle({
                style: 'light',
            });
        }

        createClass(MapHelper, [
            {
                key: 'addLayer',
                value: function addLayer(datas, options) {
                    if (this.type == 'baidu') {
                        return new mapv.baiduMapLayer(this.map, dataSet, options);
                    }
                },
            },
            {
                key: 'getMap',
                value: function getMap() {
                    return this.map;
                },
            },
        ]);
        return MapHelper;
    })();

    /**
     * 一直覆盖在当前地图视野的Canvas对象
     *
     * @author nikai (@胖嘟嘟的骨头, nikai@baidu.com)
     *
     * @param
     * {
     *     map 地图实例对象
     * }
     */

    function CanvasLayer(options) {
        this.options = options || {};
        this.paneName = this.options.paneName || 'mapPane';
        this.context = this.options.context || '2d';
        this.zIndex = this.options.zIndex || 0;
        this.mixBlendMode = this.options.mixBlendMode || null;
        this.enableMassClear = this.options.enableMassClear;
        this._map = options.map;
        this._lastDrawTime = null;
        this.show();
    }

    var global$3 = typeof window === 'undefined' ? {} : window;

    if (global$3.BMap) {
        CanvasLayer.prototype = new BMap.Overlay();

        CanvasLayer.prototype.initialize = function (map) {
            this._map = map;
            var canvas = (this.canvas = document.createElement('canvas'));
            canvas.style.cssText =
                'position:absolute;' + 'left:0;' + 'top:0;' + 'z-index:' + this.zIndex + ';user-select:none;';
            canvas.style.mixBlendMode = this.mixBlendMode;
            this.adjustSize();
            map.getPanes()[this.paneName].appendChild(canvas);
            var that = this;
            map.addEventListener('resize', function () {
                that.adjustSize();
                that._draw();
            });
            return this.canvas;
        };

        CanvasLayer.prototype.adjustSize = function () {
            var size = this._map.getSize();
            var canvas = this.canvas;

            var devicePixelRatio = (this.devicePixelRatio = global$3.devicePixelRatio);

            canvas.width = size.width * devicePixelRatio;
            canvas.height = size.height * devicePixelRatio;
            if (this.context == '2d') {
                canvas.getContext(this.context).scale(devicePixelRatio, devicePixelRatio);
            }

            canvas.style.width = size.width + 'px';
            canvas.style.height = size.height + 'px';
        };

        CanvasLayer.prototype.draw = function () {
            var self = this;
            clearTimeout(self.timeoutID);
            self.timeoutID = setTimeout(function () {
                self._draw();
            }, 15);
        };

        CanvasLayer.prototype._draw = function () {
            var map = this._map;
            var size = map.getSize();
            var center = map.getCenter();
            if (center) {
                var pixel = map.pointToOverlayPixel(center);
                this.canvas.style.left = pixel.x - size.width / 2 + 'px';
                this.canvas.style.top = pixel.y - size.height / 2 + 'px';
                this.dispatchEvent('draw');
                this.options.update && this.options.update.call(this);
            }
        };

        CanvasLayer.prototype.getContainer = function () {
            return this.canvas;
        };

        CanvasLayer.prototype.show = function () {
            if (!this.canvas) {
                this._map.addOverlay(this);
            }
            this.canvas.style.display = 'block';
        };

        CanvasLayer.prototype.hide = function () {
            this.canvas.style.display = 'none';
            //this._map.removeOverlay(this);
        };

        CanvasLayer.prototype.setZIndex = function (zIndex) {
            this.canvas.style.zIndex = zIndex;
        };

        CanvasLayer.prototype.getZIndex = function () {
            return this.zIndex;
        };
    }

    /**
     * Tween.js - Licensed under the MIT license
     * https://github.com/tweenjs/tween.js
     * ----------------------------------------------
     *
     * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
     * Thank you all, you're awesome!
     */

    var TWEEN =
        TWEEN ||
        (function () {
            var _tweens = [];

            return {
                getAll: function getAll() {
                    return _tweens;
                },

                removeAll: function removeAll() {
                    _tweens = [];
                },

                add: function add(tween) {
                    _tweens.push(tween);
                },

                remove: function remove(tween) {
                    var i = _tweens.indexOf(tween);

                    if (i !== -1) {
                        _tweens.splice(i, 1);
                    }
                },

                update: function update(time, preserve) {
                    if (_tweens.length === 0) {
                        return false;
                    }

                    var i = 0;

                    time = time !== undefined ? time : TWEEN.now();

                    while (i < _tweens.length) {
                        if (_tweens[i].update(time) || preserve) {
                            i++;
                        } else {
                            _tweens.splice(i, 1);
                        }
                    }

                    return true;
                },
            };
        })();

    // Include a performance.now polyfill.
    // In node.js, use process.hrtime.
    if (typeof window === 'undefined' && typeof process !== 'undefined') {
        TWEEN.now = function () {
            var time = process.hrtime();

            // Convert [seconds, nanoseconds] to milliseconds.
            return time[0] * 1000 + time[1] / 1000000;
        };
    }
    // In a browser, use window.performance.now if it is available.
    else if (
        typeof window !== 'undefined' &&
        window.performance !== undefined &&
        window.performance.now !== undefined
    ) {
        // This must be bound, because directly assigning this function
        // leads to an invocation exception in Chrome.
        TWEEN.now = window.performance.now.bind(window.performance);
    }
    // Use Date.now if it is available.
    else if (Date.now !== undefined) {
        TWEEN.now = Date.now;
    }
    // Otherwise, use 'new Date().getTime()'.
    else {
        TWEEN.now = function () {
            return new Date().getTime();
        };
    }

    TWEEN.Tween = function (object) {
        var _object = object;
        var _valuesStart = {};
        var _valuesEnd = {};
        var _valuesStartRepeat = {};
        var _duration = 1000;
        var _repeat = 0;
        var _repeatDelayTime;
        var _yoyo = false;
        var _isPlaying = false;
        var _reversed = false;
        var _delayTime = 0;
        var _startTime = null;
        var _easingFunction = TWEEN.Easing.Linear.None;
        var _interpolationFunction = TWEEN.Interpolation.Linear;
        var _chainedTweens = [];
        var _onStartCallback = null;
        var _onStartCallbackFired = false;
        var _onUpdateCallback = null;
        var _onCompleteCallback = null;
        var _onStopCallback = null;

        this.to = function (properties, duration) {
            _valuesEnd = properties;

            if (duration !== undefined) {
                _duration = duration;
            }

            return this;
        };

        this.start = function (time) {
            TWEEN.add(this);

            _isPlaying = true;

            _onStartCallbackFired = false;

            _startTime = time !== undefined ? time : TWEEN.now();
            _startTime += _delayTime;

            for (var property in _valuesEnd) {
                // Check if an Array was provided as property value
                if (_valuesEnd[property] instanceof Array) {
                    if (_valuesEnd[property].length === 0) {
                        continue;
                    }

                    // Create a local copy of the Array with the start value at the front
                    _valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);
                }

                // If `to()` specifies a property that doesn't exist in the source object,
                // we should not set that property in the object
                if (_object[property] === undefined) {
                    continue;
                }

                // Save the starting value.
                _valuesStart[property] = _object[property];

                if (_valuesStart[property] instanceof Array === false) {
                    _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                }

                _valuesStartRepeat[property] = _valuesStart[property] || 0;
            }

            return this;
        };

        this.stop = function () {
            if (!_isPlaying) {
                return this;
            }

            TWEEN.remove(this);
            _isPlaying = false;

            if (_onStopCallback !== null) {
                _onStopCallback.call(_object, _object);
            }

            this.stopChainedTweens();
            return this;
        };

        this.end = function () {
            this.update(_startTime + _duration);
            return this;
        };

        this.stopChainedTweens = function () {
            for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
                _chainedTweens[i].stop();
            }
        };

        this.delay = function (amount) {
            _delayTime = amount;
            return this;
        };

        this.repeat = function (times) {
            _repeat = times;
            return this;
        };

        this.repeatDelay = function (amount) {
            _repeatDelayTime = amount;
            return this;
        };

        this.yoyo = function (yoyo) {
            _yoyo = yoyo;
            return this;
        };

        this.easing = function (easing) {
            _easingFunction = easing;
            return this;
        };

        this.interpolation = function (interpolation) {
            _interpolationFunction = interpolation;
            return this;
        };

        this.chain = function () {
            _chainedTweens = arguments;
            return this;
        };

        this.onStart = function (callback) {
            _onStartCallback = callback;
            return this;
        };

        this.onUpdate = function (callback) {
            _onUpdateCallback = callback;
            return this;
        };

        this.onComplete = function (callback) {
            _onCompleteCallback = callback;
            return this;
        };

        this.onStop = function (callback) {
            _onStopCallback = callback;
            return this;
        };

        this.update = function (time) {
            var property;
            var elapsed;
            var value;

            if (time < _startTime) {
                return true;
            }

            if (_onStartCallbackFired === false) {
                if (_onStartCallback !== null) {
                    _onStartCallback.call(_object, _object);
                }

                _onStartCallbackFired = true;
            }

            elapsed = (time - _startTime) / _duration;
            elapsed = elapsed > 1 ? 1 : elapsed;

            value = _easingFunction(elapsed);

            for (property in _valuesEnd) {
                // Don't update properties that do not exist in the source object
                if (_valuesStart[property] === undefined) {
                    continue;
                }

                var start = _valuesStart[property] || 0;
                var end = _valuesEnd[property];

                if (end instanceof Array) {
                    _object[property] = _interpolationFunction(end, value);
                } else {
                    // Parses relative end values with start as base (e.g.: +10, -3)
                    if (typeof end === 'string') {
                        if (end.charAt(0) === '+' || end.charAt(0) === '-') {
                            end = start + parseFloat(end);
                        } else {
                            end = parseFloat(end);
                        }
                    }

                    // Protect against non numeric properties.
                    if (typeof end === 'number') {
                        _object[property] = start + (end - start) * value;
                    }
                }
            }

            if (_onUpdateCallback !== null) {
                _onUpdateCallback.call(_object, value);
            }

            if (elapsed === 1) {
                if (_repeat > 0) {
                    if (isFinite(_repeat)) {
                        _repeat--;
                    }

                    // Reassign starting values, restart by making startTime = now
                    for (property in _valuesStartRepeat) {
                        if (typeof _valuesEnd[property] === 'string') {
                            _valuesStartRepeat[property] =
                                _valuesStartRepeat[property] + parseFloat(_valuesEnd[property]);
                        }

                        if (_yoyo) {
                            var tmp = _valuesStartRepeat[property];

                            _valuesStartRepeat[property] = _valuesEnd[property];
                            _valuesEnd[property] = tmp;
                        }

                        _valuesStart[property] = _valuesStartRepeat[property];
                    }

                    if (_yoyo) {
                        _reversed = !_reversed;
                    }

                    if (_repeatDelayTime !== undefined) {
                        _startTime = time + _repeatDelayTime;
                    } else {
                        _startTime = time + _delayTime;
                    }

                    return true;
                } else {
                    if (_onCompleteCallback !== null) {
                        _onCompleteCallback.call(_object, _object);
                    }

                    for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
                        // Make the chained tweens start exactly at the time they should,
                        // even if the `update()` method was called way past the duration of the tween
                        _chainedTweens[i].start(_startTime + _duration);
                    }

                    return false;
                }
            }

            return true;
        };
    };

    TWEEN.Easing = {
        Linear: {
            None: function None(k) {
                return k;
            },
        },

        Quadratic: {
            In: function In(k) {
                return k * k;
            },

            Out: function Out(k) {
                return k * (2 - k);
            },

            InOut: function InOut(k) {
                if ((k *= 2) < 1) {
                    return 0.5 * k * k;
                }

                return -0.5 * (--k * (k - 2) - 1);
            },
        },

        Cubic: {
            In: function In(k) {
                return k * k * k;
            },

            Out: function Out(k) {
                return --k * k * k + 1;
            },

            InOut: function InOut(k) {
                if ((k *= 2) < 1) {
                    return 0.5 * k * k * k;
                }

                return 0.5 * ((k -= 2) * k * k + 2);
            },
        },

        Quartic: {
            In: function In(k) {
                return k * k * k * k;
            },

            Out: function Out(k) {
                return 1 - --k * k * k * k;
            },

            InOut: function InOut(k) {
                if ((k *= 2) < 1) {
                    return 0.5 * k * k * k * k;
                }

                return -0.5 * ((k -= 2) * k * k * k - 2);
            },
        },

        Quintic: {
            In: function In(k) {
                return k * k * k * k * k;
            },

            Out: function Out(k) {
                return --k * k * k * k * k + 1;
            },

            InOut: function InOut(k) {
                if ((k *= 2) < 1) {
                    return 0.5 * k * k * k * k * k;
                }

                return 0.5 * ((k -= 2) * k * k * k * k + 2);
            },
        },

        Sinusoidal: {
            In: function In(k) {
                return 1 - Math.cos((k * Math.PI) / 2);
            },

            Out: function Out(k) {
                return Math.sin((k * Math.PI) / 2);
            },

            InOut: function InOut(k) {
                return 0.5 * (1 - Math.cos(Math.PI * k));
            },
        },

        Exponential: {
            In: function In(k) {
                return k === 0 ? 0 : Math.pow(1024, k - 1);
            },

            Out: function Out(k) {
                return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
            },

            InOut: function InOut(k) {
                if (k === 0) {
                    return 0;
                }

                if (k === 1) {
                    return 1;
                }

                if ((k *= 2) < 1) {
                    return 0.5 * Math.pow(1024, k - 1);
                }

                return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
            },
        },

        Circular: {
            In: function In(k) {
                return 1 - Math.sqrt(1 - k * k);
            },

            Out: function Out(k) {
                return Math.sqrt(1 - --k * k);
            },

            InOut: function InOut(k) {
                if ((k *= 2) < 1) {
                    return -0.5 * (Math.sqrt(1 - k * k) - 1);
                }

                return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
            },
        },

        Elastic: {
            In: function In(k) {
                if (k === 0) {
                    return 0;
                }

                if (k === 1) {
                    return 1;
                }

                return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
            },

            Out: function Out(k) {
                if (k === 0) {
                    return 0;
                }

                if (k === 1) {
                    return 1;
                }

                return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
            },

            InOut: function InOut(k) {
                if (k === 0) {
                    return 0;
                }

                if (k === 1) {
                    return 1;
                }

                k *= 2;

                if (k < 1) {
                    return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
                }

                return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
            },
        },

        Back: {
            In: function In(k) {
                var s = 1.70158;

                return k * k * ((s + 1) * k - s);
            },

            Out: function Out(k) {
                var s = 1.70158;

                return --k * k * ((s + 1) * k + s) + 1;
            },

            InOut: function InOut(k) {
                var s = 1.70158 * 1.525;

                if ((k *= 2) < 1) {
                    return 0.5 * (k * k * ((s + 1) * k - s));
                }

                return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
            },
        },

        Bounce: {
            In: function In(k) {
                return 1 - TWEEN.Easing.Bounce.Out(1 - k);
            },

            Out: function Out(k) {
                if (k < 1 / 2.75) {
                    return 7.5625 * k * k;
                } else if (k < 2 / 2.75) {
                    return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
                } else if (k < 2.5 / 2.75) {
                    return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
                } else {
                    return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
                }
            },

            InOut: function InOut(k) {
                if (k < 0.5) {
                    return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
                }

                return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
            },
        },
    };

    TWEEN.Interpolation = {
        Linear: function Linear(v, k) {
            var m = v.length - 1;
            var f = m * k;
            var i = Math.floor(f);
            var fn = TWEEN.Interpolation.Utils.Linear;

            if (k < 0) {
                return fn(v[0], v[1], f);
            }

            if (k > 1) {
                return fn(v[m], v[m - 1], m - f);
            }

            return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
        },

        Bezier: function Bezier(v, k) {
            var b = 0;
            var n = v.length - 1;
            var pw = Math.pow;
            var bn = TWEEN.Interpolation.Utils.Bernstein;

            for (var i = 0; i <= n; i++) {
                b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
            }

            return b;
        },

        CatmullRom: function CatmullRom(v, k) {
            var m = v.length - 1;
            var f = m * k;
            var i = Math.floor(f);
            var fn = TWEEN.Interpolation.Utils.CatmullRom;

            if (v[0] === v[m]) {
                if (k < 0) {
                    i = Math.floor((f = m * (1 + k)));
                }

                return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
            } else {
                if (k < 0) {
                    return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
                }

                if (k > 1) {
                    return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
                }

                return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
            }
        },

        Utils: {
            Linear: function Linear(p0, p1, t) {
                return (p1 - p0) * t + p0;
            },

            Bernstein: function Bernstein(n, i) {
                var fc = TWEEN.Interpolation.Utils.Factorial;

                return fc(n) / fc(i) / fc(n - i);
            },

            Factorial: (function () {
                var a = [1];

                return function (n) {
                    var s = 1;

                    if (a[n]) {
                        return a[n];
                    }

                    for (var i = n; i > 1; i--) {
                        s *= i;
                    }

                    a[n] = s;
                    return s;
                };
            })(),

            CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
                var v0 = (p2 - p0) * 0.5;
                var v1 = (p3 - p1) * 0.5;
                var t2 = t * t;
                var t3 = t * t2;

                return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
            },
        },
    };

    /**
     * @author Mofei Zhu<mapv@zhuwenlong.com>
     * This file is to draw text
     */

    var drawText = {
        draw: function draw(context, dataSet, options) {
            var data = dataSet instanceof DataSet ? dataSet.get() : dataSet;
            context.save();

            // set from options
            for (var key in options) {
                context[key] = options[key];
            }

            var offset = options.offset || {
                x: 0,
                y: 0,
            };

            var rects = [];

            var size = options._size || options.size;
            if (size) {
                context.font = 'bold ' + size + 'px Arial';
            } else {
                size = 12;
            }

            var textKey = options.textKey || 'text';

            context.textAlign = 'center';
            context.textBaseline = 'middle';

            if (options.avoid) {
                // 标注避让
                for (var i = 0, len = data.length; i < len; i++) {
                    var coordinates = data[i].geometry._coordinates || data[i].geometry.coordinates;
                    var x = coordinates[0] + offset.x;
                    var y = coordinates[1] + offset.y;
                    var text = data[i][textKey];
                    var textWidth = context.measureText(text).width;

                    // 根据文本宽度和高度调整x，y位置，使得绘制文本时候坐标点在文本中心点，这个计算出的是左上角坐标
                    var px = x - textWidth / 2;
                    var py = y - size / 2;

                    var rect = {
                        sw: {
                            x: px,
                            y: py + size,
                        },
                        ne: {
                            x: px + textWidth,
                            y: py,
                        },
                    };

                    if (!hasOverlay(rects, rect)) {
                        rects.push(rect);
                        px = px + textWidth / 2;
                        py = py + size / 2;
                        context.fillText(text, px, py);
                    }
                }
            } else {
                for (var i = 0, len = data.length; i < len; i++) {
                    var coordinates = data[i].geometry._coordinates || data[i].geometry.coordinates;
                    var x = coordinates[0] + offset.x;
                    var y = coordinates[1] + offset.y;
                    var text = data[i][textKey];
                    context.fillText(text, x, y);
                }
            }

            context.restore();
        },
    };

    /*
     *  当前文字区域和已有的文字区域是否有重叠部分
     */
    function hasOverlay(rects, overlay) {
        for (var i = 0; i < rects.length; i++) {
            if (isRectOverlay(rects[i], overlay)) {
                return true;
            }
        }
        return false;
    }

    //判断2个矩形是否有重叠部分
    function isRectOverlay(rect1, rect2) {
        //minx、miny 2个矩形右下角最小的x和y
        //maxx、maxy 2个矩形左上角最大的x和y
        var minx = Math.min(rect1.ne.x, rect2.ne.x);
        var miny = Math.min(rect1.sw.y, rect2.sw.y);
        var maxx = Math.max(rect1.sw.x, rect2.sw.x);
        var maxy = Math.max(rect1.ne.y, rect2.ne.y);
        if (minx > maxx && miny > maxy) {
            return true;
        }
        return false;
    }

    /**
     * @author Mofei Zhu<mapv@zhuwenlong.com>
     * This file is to draw text
     */

    var drawIcon = {
        draw: function draw(context, dataSet, options) {
            var data = dataSet instanceof DataSet ? dataSet.get() : dataSet;

            context.fillStyle = 'white';
            context.textAlign = 'center';
            context.textBaseline = 'middle';

            var offset = options.offset || {
                x: 0,
                y: 0,
            };

            // set from options
            // for (var key in options) {
            //     context[key] = options[key];
            // }
            // console.log(data)
            for (var i = 0, len = data.length; i < len; i++) {
                if (data[i].geometry) {
                    var deg = data[i].deg || options.deg;
                    var icon = data[i].icon || options.icon;
                    var coordinates = data[i].geometry._coordinates || data[i].geometry.coordinates;
                    var x = coordinates[0];
                    var y = coordinates[1];
                    if (deg) {
                        context.save();
                        context.translate(x, y);
                        context.rotate((deg * Math.PI) / 180);
                        context.translate(-x, -y);
                    }
                    var width = options._width || options.width || icon.width;
                    var height = options._height || options.height || icon.height;
                    x = x - width / 2 + offset.x;
                    y = y - height / 2 + offset.y;
                    if (
                        options.sx &&
                        options.sy &&
                        options.swidth &&
                        options.sheight &&
                        options.width &&
                        options.height
                    ) {
                        context.drawImage(
                            icon,
                            options.sx,
                            options.sy,
                            options.swidth,
                            options.sheight,
                            x,
                            y,
                            width,
                            height
                        );
                    } else if (options.width && options.height) {
                        context.drawImage(icon, x, y, width, height);
                    } else {
                        context.drawImage(icon, x, y);
                    }

                    if (deg) {
                        context.restore();
                    }
                }
            }
        },
    };

    /**
     * @author kyle / http://nikai.us/
     */

    if (typeof window !== 'undefined') {
        requestAnimationFrame(animate);
    }

    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }

    var BaseLayer = (function () {
        function BaseLayer(map, dataSet, options) {
            classCallCheck(this, BaseLayer);

            if (!(dataSet instanceof DataSet)) {
                dataSet = new DataSet(dataSet);
            }

            this.dataSet = dataSet;
            this.map = map;
        }

        createClass(BaseLayer, [
            {
                key: 'getDefaultContextConfig',
                value: function getDefaultContextConfig() {
                    return {
                        globalAlpha: 1,
                        globalCompositeOperation: 'source-over',
                        imageSmoothingEnabled: true,
                        strokeStyle: '#000000',
                        fillStyle: '#000000',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 0,
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        lineWidth: 1,
                        lineCap: 'butt',
                        lineJoin: 'miter',
                        miterLimit: 10,
                        lineDashOffset: 0,
                        font: '10px sans-serif',
                        textAlign: 'start',
                        textBaseline: 'alphabetic',
                    };
                },
            },
            {
                key: 'initDataRange',
                value: function initDataRange(options) {
                    var self = this;

                    self.intensity = new Intensity({
                        maxSize: self.options.maxSize,
                        minSize: self.options.minSize,
                        gradient: self.options.gradient,
                        max: self.options.max || this.dataSet.getMax('count'),
                    });

                    self.category = new Category(self.options.splitList);
                    self.choropleth = new Choropleth(self.options.splitList);
                    if (self.options.splitList === undefined) {
                        self.category.generateByDataSet(this.dataSet);
                    }

                    if (self.options.splitList === undefined) {
                        var min = self.options.min || this.dataSet.getMin('count');
                        var max = self.options.max || this.dataSet.getMax('count');
                        self.choropleth.generateByMinMax(min, max);
                    }
                },
            },
            {
                key: 'getLegend',
                value: function getLegend(options) {
                    var draw = this.options.draw;
                    var legend = null;
                    if (self.options.draw == 'intensity' || self.options.draw == 'heatmap') {
                        return this.intensity.getLegend(options);
                    }
                },
            },
            {
                key: 'processData',
                value: function processData(data) {
                    var self = this;
                    var draw = self.options.draw;
                    if (
                        draw == 'bubble' ||
                        draw == 'intensity' ||
                        draw == 'category' ||
                        draw == 'choropleth' ||
                        draw == 'simple'
                    ) {
                        for (var i = 0; i < data.length; i++) {
                            var item = data[i];

                            if (self.options.draw == 'bubble') {
                                data[i]._size = self.intensity.getSize(item.count);
                            } else {
                                data[i]._size = undefined;
                            }

                            var styleType = 'fillStyle';

                            if (data[i].geometry.type === 'LineString' || self.options.styleType === 'stroke') {
                                styleType = 'strokeStyle';
                            }

                            if (self.options.draw == 'intensity') {
                                data[i][styleType] = self.intensity.getColor(item.count);
                            } else if (self.options.draw == 'category') {
                                data[i][styleType] = self.category.get(item.count);
                            } else if (self.options.draw == 'choropleth') {
                                data[i][styleType] = self.choropleth.get(item.count);
                            }
                        }
                    }
                },
            },
            {
                key: 'isEnabledTime',
                value: function isEnabledTime() {
                    var animationOptions = this.options.animation;

                    var flag = animationOptions && !(animationOptions.enabled === false);

                    return flag;
                },
            },
            {
                key: 'argCheck',
                value: function argCheck(options) {
                    if (options.draw == 'heatmap') {
                        if (options.strokeStyle) {
                            console.warn(
                                '[heatmap] options.strokeStyle is discard, pleause use options.strength [eg: options.strength = 0.1]'
                            );
                        }
                    }
                },
            },
            {
                key: 'drawContext',
                value: function drawContext(context, dataSet, options, nwPixel) {
                    var self = this;
                    switch (self.options.draw) {
                        case 'heatmap':
                            drawHeatmap.draw(context, dataSet, self.options);
                            break;
                        case 'grid':
                        case 'honeycomb':
                            self.options.offset = {
                                x: nwPixel.x,
                                y: nwPixel.y,
                            };
                            if (self.options.draw == 'grid') {
                                drawGrid.draw(context, dataSet, self.options);
                            } else {
                                drawHoneycomb.draw(context, dataSet, self.options);
                            }
                            break;
                        case 'text':
                            drawText.draw(context, dataSet, self.options);
                            break;
                        case 'icon':
                            drawIcon.draw(context, dataSet, self.options);
                            break;
                        case 'clip':
                            context.save();
                            context.fillStyle = self.options.fillStyle || 'rgba(0, 0, 0, 0.5)';
                            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
                            drawSimple.draw(context, dataSet, self.options);
                            context.beginPath();
                            pathSimple.drawDataSet(context, dataSet, self.options);
                            context.clip();
                            clear(context);
                            context.restore();
                            break;
                        default:
                            if (self.options.context == 'webgl') {
                                webglDrawSimple.draw(
                                    self.canvasLayer.canvas.getContext('webgl'),
                                    dataSet,
                                    self.options
                                );
                            } else {
                                drawSimple.draw(context, dataSet, self.options);
                            }
                    }
                },
            },
            {
                key: 'isPointInPath',
                value: function isPointInPath(context, pixel) {
                    var context = this.canvasLayer.canvas.getContext(this.context);
                    var data = this.dataSet.get();
                    for (var i = 0; i < data.length; i++) {
                        context.beginPath();
                        pathSimple.draw(context, data[i], this.options);
                        if (
                            context.isPointInPath(
                                pixel.x * this.canvasLayer.devicePixelRatio,
                                pixel.y * this.canvasLayer.devicePixelRatio
                            )
                        ) {
                            return data[i];
                        }
                    }
                },
            },
            {
                key: 'clickEvent',
                value: function clickEvent(pixel, e) {
                    var dataItem = this.isPointInPath(this.getContext(), pixel);

                    if (dataItem) {
                        this.options.methods.click(dataItem, e);
                    } else {
                        this.options.methods.click(null, e);
                    }
                },
            },
            {
                key: 'mousemoveEvent',
                value: function mousemoveEvent(pixel, e) {
                    var dataItem = this.isPointInPath(this.getContext(), pixel);
                    if (dataItem) {
                        this.options.methods.mousemove(dataItem, e);
                    } else {
                        this.options.methods.mousemove(null, e);
                    }
                },

                /**
                 * obj.options
                 */
            },
            {
                key: 'update',
                value: function update(obj, isDraw) {
                    var self = this;
                    var _options = obj.options;
                    var options = self.options;
                    for (var i in _options) {
                        options[i] = _options[i];
                    }
                    self.init(options);
                    if (isDraw !== false) {
                        self.draw();
                    }
                },
            },
            {
                key: 'setOptions',
                value: function setOptions(options) {
                    var self = this;
                    self.init(options);
                    self.draw();
                },
            },
            {
                key: 'set',
                value: function set$$1(obj) {
                    var self = this;
                    var ctx = this.getContext();
                    var conf = this.getDefaultContextConfig();
                    for (var i in conf) {
                        ctx[i] = conf[i];
                    }
                    self.init(obj.options);
                    self.draw();
                },
            },
            {
                key: 'destroy',
                value: function destroy() {
                    this.unbindEvent();
                    this.hide();
                },
            },
            {
                key: 'initAnimator',
                value: function initAnimator() {
                    var self = this;
                    var animationOptions = self.options.animation;

                    if (self.options.draw == 'time' || self.isEnabledTime()) {
                        if (!animationOptions.stepsRange) {
                            animationOptions.stepsRange = {
                                start: this.dataSet.getMin('time') || 0,
                                end: this.dataSet.getMax('time') || 0,
                            };
                        }

                        this.steps = {
                            step: animationOptions.stepsRange.start,
                        };
                        self.animator = new TWEEN.Tween(this.steps)
                            .onUpdate(function () {
                                self._canvasUpdate(this.step);
                            })
                            .repeat(Infinity);

                        this.addAnimatorEvent();

                        var duration = animationOptions.duration * 1000 || 5000;

                        self.animator.to(
                            {
                                step: animationOptions.stepsRange.end,
                            },
                            duration
                        );
                        self.animator.start();
                    } else {
                        self.animator && self.animator.stop();
                    }
                },
            },
            {
                key: 'addAnimatorEvent',
                value: function addAnimatorEvent() {},
            },
            {
                key: 'animatorMovestartEvent',
                value: function animatorMovestartEvent() {
                    var animationOptions = this.options.animation;
                    if (this.isEnabledTime() && this.animator) {
                        this.steps.step = animationOptions.stepsRange.start;
                        this.animator.stop();
                    }
                },
            },
            {
                key: 'animatorMoveendEvent',
                value: function animatorMoveendEvent() {
                    if (this.isEnabledTime() && this.animator) {
                        this.animator.start();
                    }
                },
            },
        ]);
        return BaseLayer;
    })();

    var AnimationLayer = (function (_BaseLayer) {
        inherits(AnimationLayer, _BaseLayer);

        function AnimationLayer(map, dataSet, options) {
            classCallCheck(this, AnimationLayer);

            var _this = possibleConstructorReturn(
                this,
                (AnimationLayer.__proto__ || Object.getPrototypeOf(AnimationLayer)).call(this, map, dataSet, options)
            );

            _this.map = map;
            _this.options = options || {};
            _this.dataSet = dataSet;

            _this.init(options);

            var canvasLayer = new CanvasLayer({
                map: map,
                update: _this._canvasUpdate.bind(_this),
            });
            _this.transferToMercator();
            var self = _this;
            dataSet.on('change', function () {
                self.transferToMercator();
                canvasLayer.draw();
            });
            _this.ctx = canvasLayer.canvas.getContext('2d');

            _this.start();
            return _this;
        }

        createClass(AnimationLayer, [
            {
                key: 'init',
                value: function init(options) {
                    var self = this;
                    self.options = options;
                    this.initDataRange(options);
                    this.context = self.options.context || '2d';

                    if (self.options.zIndex) {
                        this.canvasLayer && this.canvasLayer.setZIndex(self.options.zIndex);
                    }

                    if (self.options.max) {
                        this.intensity.setMax(self.options.max);
                    }

                    if (self.options.min) {
                        this.intensity.setMin(self.options.min);
                    }

                    this.initAnimator();
                },

                // 经纬度左边转换为墨卡托坐标
            },
            {
                key: 'transferToMercator',
                value: function transferToMercator() {
                    var projection = this.map.getMapType().getProjection();

                    if (this.options.coordType !== 'bd09mc') {
                        var data = this.dataSet.get();
                        data = this.dataSet.transferCoordinate(
                            data,
                            function (coordinates) {
                                var pixel = projection.lngLatToPoint({
                                    lng: coordinates[0],
                                    lat: coordinates[1],
                                });
                                return [pixel.x, pixel.y];
                            },
                            'coordinates',
                            'coordinates_mercator'
                        );
                        this.dataSet._set(data);
                    }
                },
            },
            {
                key: '_canvasUpdate',
                value: function _canvasUpdate() {
                    var ctx = this.ctx;
                    if (!ctx) {
                        return;
                    }
                    //clear(ctx);
                    var map = this.map;
                    var zoomUnit = Math.pow(2, 18 - map.getZoom());
                    var projection = map.getMapType().getProjection();

                    var mcCenter = projection.lngLatToPoint(map.getCenter());
                    var nwMc = new BMap.Pixel(
                        mcCenter.x - (map.getSize().width / 2) * zoomUnit,
                        mcCenter.y + (map.getSize().height / 2) * zoomUnit
                    ); //左上角墨卡托坐标

                    clear(ctx);

                    var dataGetOptions = {
                        fromColumn: this.options.coordType == 'bd09mc' ? 'coordinates' : 'coordinates_mercator',
                        transferCoordinate: function transferCoordinate(coordinate) {
                            if (!coordinate) {
                                return;
                            }
                            var x = (coordinate[0] - nwMc.x) / zoomUnit;
                            var y = (nwMc.y - coordinate[1]) / zoomUnit;
                            return [x, y];
                        },
                    };

                    this.data = this.dataSet.get(dataGetOptions);

                    this.processData(this.data);

                    this.drawAnimation();
                },
            },
            {
                key: 'drawAnimation',
                value: function drawAnimation() {
                    var ctx = this.ctx;
                    var data = this.data;
                    if (!data) {
                        return;
                    }

                    ctx.save();
                    ctx.globalCompositeOperation = 'destination-out';
                    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
                    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.restore();

                    ctx.save();
                    if (this.options.shadowColor) {
                        ctx.shadowColor = this.options.shadowColor;
                    }

                    if (this.options.shadowBlur) {
                        ctx.shadowBlur = this.options.shadowBlur;
                    }

                    if (this.options.globalAlpha) {
                        ctx.globalAlpha = this.options.globalAlpha;
                    }

                    if (this.options.globalCompositeOperation) {
                        ctx.globalCompositeOperation = this.options.globalCompositeOperation;
                    }

                    var options = this.options;
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].geometry.type === 'Point') {
                            ctx.beginPath();
                            var maxSize = data[i].size || this.options.size;
                            var minSize = data[i].minSize || this.options.minSize || 0;
                            if (data[i]._size === undefined) {
                                data[i]._size = minSize;
                            }
                            ctx.arc(
                                data[i].geometry._coordinates[0],
                                data[i].geometry._coordinates[1],
                                data[i]._size,
                                0,
                                Math.PI * 2,
                                true
                            );
                            ctx.closePath();

                            data[i]._size++;

                            if (data[i]._size > maxSize) {
                                data[i]._size = minSize;
                            }
                            ctx.lineWidth = 1;
                            ctx.strokeStyle = data[i].strokeStyle || options.strokeStyle || 'yellow';
                            ctx.stroke();
                            var fillStyle = data[i].fillStyle || options.fillStyle;
                            if (fillStyle) {
                                ctx.fillStyle = fillStyle;
                                ctx.fill();
                            }
                        } else if (data[i].geometry.type === 'LineString') {
                            ctx.beginPath();
                            var size = data[i].size || this.options.size || 5;
                            var minSize = data[i].minSize || this.options.minSize || 0;
                            if (data[i]._index === undefined) {
                                data[i]._index = 0;
                            }
                            var index = data[i]._index;
                            ctx.arc(
                                data[i].geometry._coordinates[index][0],
                                data[i].geometry._coordinates[index][1],
                                size,
                                0,
                                Math.PI * 2,
                                true
                            );
                            ctx.closePath();

                            data[i]._index++;

                            if (data[i]._index >= data[i].geometry._coordinates.length) {
                                data[i]._index = 0;
                            }

                            ctx.lineWidth = options.lineWidth || 1;
                            var strokeStyle = data[i].strokeStyle || options.strokeStyle;
                            var fillStyle = data[i].fillStyle || options.fillStyle || 'yellow';
                            ctx.fillStyle = fillStyle;
                            ctx.fill();
                            if (strokeStyle) {
                                ctx.strokeStyle = strokeStyle;
                                ctx.stroke();
                            }
                        }
                    }
                    ctx.restore();
                },
            },
            {
                key: 'animate',
                value: function animate() {
                    this.drawAnimation();
                    var animateTime = this.options.animateTime || 100;
                    this.timeout = setTimeout(this.animate.bind(this), animateTime);
                },
            },
            {
                key: 'start',
                value: function start() {
                    this.stop();
                    this.animate();
                },
            },
            {
                key: 'stop',
                value: function stop() {
                    clearTimeout(this.timeout);
                },
            },
        ]);
        return AnimationLayer;
    })(BaseLayer);

    /**
     * @author kyle / http://nikai.us/
     */

    var Layer = (function (_BaseLayer) {
        inherits(Layer, _BaseLayer);

        function Layer(map, dataSet, options) {
            classCallCheck(this, Layer);

            var _this = possibleConstructorReturn(
                this,
                (Layer.__proto__ || Object.getPrototypeOf(Layer)).call(this, map, dataSet, options)
            );

            var self = _this;
            var data = null;
            options = options || {};

            self.init(options);
            self.argCheck(options);
            self.transferToMercator();

            var canvasLayer = (_this.canvasLayer = new CanvasLayer({
                map: map,
                context: _this.context,
                paneName: options.paneName,
                mixBlendMode: options.mixBlendMode,
                enableMassClear: options.enableMassClear,
                zIndex: options.zIndex,
                update: function update() {
                    self._canvasUpdate();
                },
            }));

            dataSet.on('change', function () {
                self.transferToMercator();
                canvasLayer.draw();
            });

            _this.clickEvent = _this.clickEvent.bind(_this);
            _this.mousemoveEvent = _this.mousemoveEvent.bind(_this);
            _this.bindEvent();

            return _this;
        }

        createClass(Layer, [
            {
                key: 'clickEvent',
                value: function clickEvent(e) {
                    var pixel = e.pixel;
                    get(Layer.prototype.__proto__ || Object.getPrototypeOf(Layer.prototype), 'clickEvent', this).call(
                        this,
                        pixel,
                        e
                    );
                },
            },
            {
                key: 'mousemoveEvent',
                value: function mousemoveEvent(e) {
                    var pixel = e.pixel;
                    get(
                        Layer.prototype.__proto__ || Object.getPrototypeOf(Layer.prototype),
                        'mousemoveEvent',
                        this
                    ).call(this, pixel, e);
                },
            },
            {
                key: 'bindEvent',
                value: function bindEvent(e) {
                    var map = this.map;

                    if (this.options.methods) {
                        if (this.options.methods.click) {
                            map.setDefaultCursor('default');
                            map.addEventListener('click', this.clickEvent);
                        }
                        if (this.options.methods.mousemove) {
                            map.addEventListener('mousemove', this.mousemoveEvent);
                        }
                    }
                },
            },
            {
                key: 'unbindEvent',
                value: function unbindEvent(e) {
                    var map = this.map;

                    if (this.options.methods) {
                        if (this.options.methods.click) {
                            map.removeEventListener('click', this.clickEvent);
                        }
                        if (this.options.methods.mousemove) {
                            map.removeEventListener('mousemove', this.mousemoveEvent);
                        }
                    }
                },

                // 经纬度左边转换为墨卡托坐标
            },
            {
                key: 'transferToMercator',
                value: function transferToMercator() {
                    var projection = this.map.getMapType().getProjection();

                    if (this.options.coordType !== 'bd09mc') {
                        var data = this.dataSet.get();
                        data = this.dataSet.transferCoordinate(
                            data,
                            function (coordinates) {
                                var pixel = projection.lngLatToPoint({
                                    lng: coordinates[0],
                                    lat: coordinates[1],
                                });
                                return [pixel.x, pixel.y];
                            },
                            'coordinates',
                            'coordinates_mercator'
                        );
                        this.dataSet._set(data);
                    }
                },
            },
            {
                key: 'getContext',
                value: function getContext() {
                    return this.canvasLayer.canvas.getContext(this.context);
                },
            },
            {
                key: '_canvasUpdate',
                value: function _canvasUpdate(time) {
                    if (!this.canvasLayer) {
                        return;
                    }

                    var self = this;

                    var animationOptions = self.options.animation;

                    var map = this.canvasLayer._map;

                    var zoomUnit = Math.pow(2, 18 - map.getZoom());
                    var projection = map.getMapType().getProjection();

                    var mcCenter = projection.lngLatToPoint(map.getCenter());
                    var nwMc = new BMap.Pixel(
                        mcCenter.x - (map.getSize().width / 2) * zoomUnit,
                        mcCenter.y + (map.getSize().height / 2) * zoomUnit
                    ); //左上角墨卡托坐标

                    var context = this.getContext();

                    if (self.isEnabledTime()) {
                        if (time === undefined) {
                            clear(context);
                            return;
                        }
                        if (this.context == '2d') {
                            context.save();
                            context.globalCompositeOperation = 'destination-out';
                            context.fillStyle = 'rgba(0, 0, 0, .1)';
                            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
                            context.restore();
                        }
                    } else {
                        clear(context);
                    }

                    if (this.context == '2d') {
                        for (var key in self.options) {
                            context[key] = self.options[key];
                        }
                    } else {
                        context.clear(context.COLOR_BUFFER_BIT);
                    }

                    if (
                        (self.options.minZoom && map.getZoom() < self.options.minZoom) ||
                        (self.options.maxZoom && map.getZoom() > self.options.maxZoom)
                    ) {
                        return;
                    }

                    var scale = 1;
                    if (this.context != '2d') {
                        scale = this.canvasLayer.devicePixelRatio;
                    }

                    var dataGetOptions = {
                        fromColumn: self.options.coordType == 'bd09mc' ? 'coordinates' : 'coordinates_mercator',
                        transferCoordinate: function transferCoordinate(coordinate) {
                            var x = ((coordinate[0] - nwMc.x) / zoomUnit) * scale;
                            var y = ((nwMc.y - coordinate[1]) / zoomUnit) * scale;
                            return [x, y];
                        },
                    };

                    if (time !== undefined) {
                        dataGetOptions.filter = function (item) {
                            var trails = animationOptions.trails || 10;
                            if (time && item.time > time - trails && item.time < time) {
                                return true;
                            } else {
                                return false;
                            }
                        };
                    }

                    // get data from data set
                    var data = self.dataSet.get(dataGetOptions);

                    this.processData(data);

                    var nwPixel = map.pointToPixel(new BMap.Point(0, 0));

                    if (self.options.unit == 'm') {
                        if (self.options.size) {
                            self.options._size = self.options.size / zoomUnit;
                        }
                        if (self.options.width) {
                            self.options._width = self.options.width / zoomUnit;
                        }
                        if (self.options.height) {
                            self.options._height = self.options.height / zoomUnit;
                        }
                    } else {
                        self.options._size = self.options.size;
                        self.options._height = self.options.height;
                        self.options._width = self.options.width;
                    }

                    this.drawContext(context, data, self.options, nwPixel);

                    //console.timeEnd('draw');

                    //console.timeEnd('update')
                    self.options.updateCallback && self.options.updateCallback(time);
                },
            },
            {
                key: 'init',
                value: function init(options) {
                    var self = this;
                    self.options = options;
                    this.initDataRange(options);
                    this.context = self.options.context || '2d';

                    if (self.options.zIndex) {
                        this.canvasLayer && this.canvasLayer.setZIndex(self.options.zIndex);
                    }

                    if (self.options.max) {
                        this.intensity.setMax(self.options.max);
                    }

                    if (self.options.min) {
                        this.intensity.setMin(self.options.min);
                    }

                    this.initAnimator();
                },
            },
            {
                key: 'addAnimatorEvent',
                value: function addAnimatorEvent() {
                    this.map.addEventListener('movestart', this.animatorMovestartEvent.bind(this));
                    this.map.addEventListener('moveend', this.animatorMoveendEvent.bind(this));
                },
            },
            {
                key: 'show',
                value: function show() {
                    this.map.addOverlay(this.canvasLayer);
                },
            },
            {
                key: 'hide',
                value: function hide() {
                    this.map.removeOverlay(this.canvasLayer);
                },
            },
            {
                key: 'draw',
                value: function draw() {
                    this.canvasLayer.draw();
                },
            },
        ]);
        return Layer;
    })(BaseLayer);

    /**
     * Copyright 2012 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Extends OverlayView to provide a canvas "Layer".
     * @author Brendan Kenny
     */

    /**
     * A map layer that provides a canvas over the slippy map and a callback
     * system for efficient animation. Requires canvas and CSS 2D transform
     * support.
     * @constructor
     * @extends google.maps.OverlayView
     * @param {CanvasLayerOptions=} opt_options Options to set in this CanvasLayer.
     */
    function CanvasLayer$2(opt_options) {
        /**
         * If true, canvas is in a map pane and the OverlayView is fully functional.
         * See google.maps.OverlayView.onAdd for more information.
         * @type {boolean}
         * @private
         */
        this.isAdded_ = false;

        /**
         * If true, each update will immediately schedule the next.
         * @type {boolean}
         * @private
         */
        this.isAnimated_ = false;

        /**
         * The name of the MapPane in which this layer will be displayed.
         * @type {string}
         * @private
         */
        this.paneName_ = CanvasLayer$2.DEFAULT_PANE_NAME_;

        /**
         * A user-supplied function called whenever an update is required. Null or
         * undefined if a callback is not provided.
         * @type {?function=}
         * @private
         */
        this.updateHandler_ = null;

        /**
         * A user-supplied function called whenever an update is required and the
         * map has been resized since the last update. Null or undefined if a
         * callback is not provided.
         * @type {?function}
         * @private
         */
        this.resizeHandler_ = null;

        /**
         * The LatLng coordinate of the top left of the current view of the map. Will
         * be null when this.isAdded_ is false.
         * @type {google.maps.LatLng}
         * @private
         */
        this.topLeft_ = null;

        /**
         * The map-pan event listener. Will be null when this.isAdded_ is false. Will
         * be null when this.isAdded_ is false.
         * @type {?function}
         * @private
         */
        this.centerListener_ = null;

        /**
         * The map-resize event listener. Will be null when this.isAdded_ is false.
         * @type {?function}
         * @private
         */
        this.resizeListener_ = null;

        /**
         * If true, the map size has changed and this.resizeHandler_ must be called
         * on the next update.
         * @type {boolean}
         * @private
         */
        this.needsResize_ = true;

        /**
         * A browser-defined id for the currently requested callback. Null when no
         * callback is queued.
         * @type {?number}
         * @private
         */
        this.requestAnimationFrameId_ = null;

        var canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.pointerEvents = 'none';

        /**
         * The canvas element.
         * @type {!HTMLCanvasElement}
         */
        this.canvas = canvas;

        /**
         * The CSS width of the canvas, which may be different than the width of the
         * backing store.
         * @private {number}
         */
        this.canvasCssWidth_ = 300;

        /**
         * The CSS height of the canvas, which may be different than the height of
         * the backing store.
         * @private {number}
         */
        this.canvasCssHeight_ = 150;

        /**
         * A value for scaling the CanvasLayer resolution relative to the CanvasLayer
         * display size.
         * @private {number}
         */
        this.resolutionScale_ = 1;

        /**
         * Simple bind for functions with no args for bind-less browsers (Safari).
         * @param {Object} thisArg The this value used for the target function.
         * @param {function} func The function to be bound.
         */
        function simpleBindShim(thisArg, func) {
            return function () {
                func.apply(thisArg);
            };
        }

        /**
         * A reference to this.repositionCanvas_ with this bound as its this value.
         * @type {function}
         * @private
         */
        this.repositionFunction_ = simpleBindShim(this, this.repositionCanvas_);

        /**
         * A reference to this.resize_ with this bound as its this value.
         * @type {function}
         * @private
         */
        this.resizeFunction_ = simpleBindShim(this, this.resize_);

        /**
         * A reference to this.update_ with this bound as its this value.
         * @type {function}
         * @private
         */
        this.requestUpdateFunction_ = simpleBindShim(this, this.update_);

        // set provided options, if any
        if (opt_options) {
            this.setOptions(opt_options);
        }
    }

    var global$4 = typeof window === 'undefined' ? {} : window;

    if (global$4.google && global$4.google.maps) {
        CanvasLayer$2.prototype = new google.maps.OverlayView();

        /**
         * The default MapPane to contain the canvas.
         * @type {string}
         * @const
         * @private
         */
        CanvasLayer$2.DEFAULT_PANE_NAME_ = 'overlayLayer';

        /**
         * Transform CSS property name, with vendor prefix if required. If browser
         * does not support transforms, property will be ignored.
         * @type {string}
         * @const
         * @private
         */
        CanvasLayer$2.CSS_TRANSFORM_ = (function () {
            var div = document.createElement('div');
            var transformProps = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'];
            for (var i = 0; i < transformProps.length; i++) {
                var prop = transformProps[i];
                if (div.style[prop] !== undefined) {
                    return prop;
                }
            }

            // return unprefixed version by default
            return transformProps[0];
        })();

        /**
         * The requestAnimationFrame function, with vendor-prefixed or setTimeout-based
         * fallbacks. MUST be called with window as thisArg.
         * @type {function}
         * @param {function} callback The function to add to the frame request queue.
         * @return {number} The browser-defined id for the requested callback.
         * @private
         */
        CanvasLayer$2.prototype.requestAnimFrame_ =
            global$4.requestAnimationFrame ||
            global$4.webkitRequestAnimationFrame ||
            global$4.mozRequestAnimationFrame ||
            global$4.oRequestAnimationFrame ||
            global$4.msRequestAnimationFrame ||
            function (callback) {
                return global$4.setTimeout(callback, 1000 / 60);
            };

        /**
         * The cancelAnimationFrame function, with vendor-prefixed fallback. Does not
         * fall back to clearTimeout as some platforms implement requestAnimationFrame
         * but not cancelAnimationFrame, and the cost is an extra frame on onRemove.
         * MUST be called with window as thisArg.
         * @type {function}
         * @param {number=} requestId The id of the frame request to cancel.
         * @private
         */
        CanvasLayer$2.prototype.cancelAnimFrame_ =
            global$4.cancelAnimationFrame ||
            global$4.webkitCancelAnimationFrame ||
            global$4.mozCancelAnimationFrame ||
            global$4.oCancelAnimationFrame ||
            global$4.msCancelAnimationFrame ||
            function (requestId) {};

        /**
         * Sets any options provided. See CanvasLayerOptions for more information.
         * @param {CanvasLayerOptions} options The options to set.
         */
        CanvasLayer$2.prototype.setOptions = function (options) {
            if (options.animate !== undefined) {
                this.setAnimate(options.animate);
            }

            if (options.paneName !== undefined) {
                this.setPaneName(options.paneName);
            }

            if (options.updateHandler !== undefined) {
                this.setUpdateHandler(options.updateHandler);
            }

            if (options.resizeHandler !== undefined) {
                this.setResizeHandler(options.resizeHandler);
            }

            if (options.resolutionScale !== undefined) {
                this.setResolutionScale(options.resolutionScale);
            }

            if (options.map !== undefined) {
                this.setMap(options.map);
            }
        };

        /**
         * Set the animated state of the layer. If true, updateHandler will be called
         * repeatedly, once per frame. If false, updateHandler will only be called when
         * a map property changes that could require the canvas content to be redrawn.
         * @param {boolean} animate Whether the canvas is animated.
         */
        CanvasLayer$2.prototype.setAnimate = function (animate) {
            this.isAnimated_ = !!animate;

            if (this.isAnimated_) {
                this.scheduleUpdate();
            }
        };

        /**
         * @return {boolean} Whether the canvas is animated.
         */
        CanvasLayer$2.prototype.isAnimated = function () {
            return this.isAnimated_;
        };

        /**
         * Set the MapPane in which this layer will be displayed, by name. See
         * {@code google.maps.MapPanes} for the panes available.
         * @param {string} paneName The name of the desired MapPane.
         */
        CanvasLayer$2.prototype.setPaneName = function (paneName) {
            this.paneName_ = paneName;

            this.setPane_();
        };

        /**
         * @return {string} The name of the current container pane.
         */
        CanvasLayer$2.prototype.getPaneName = function () {
            return this.paneName_;
        };

        /**
         * Adds the canvas to the specified container pane. Since this is guaranteed to
         * execute only after onAdd is called, this is when paneName's existence is
         * checked (and an error is thrown if it doesn't exist).
         * @private
         */
        CanvasLayer$2.prototype.setPane_ = function () {
            if (!this.isAdded_) {
                return;
            }

            // onAdd has been called, so panes can be used
            var panes = this.getPanes();
            if (!panes[this.paneName_]) {
                throw new Error('"' + this.paneName_ + '" is not a valid MapPane name.');
            }

            panes[this.paneName_].appendChild(this.canvas);
        };

        /**
         * Set a function that will be called whenever the parent map and the overlay's
         * canvas have been resized. If opt_resizeHandler is null or unspecified, any
         * existing callback is removed.
         * @param {?function=} opt_resizeHandler The resize callback function.
         */
        CanvasLayer$2.prototype.setResizeHandler = function (opt_resizeHandler) {
            this.resizeHandler_ = opt_resizeHandler;
        };

        /**
         * Sets a value for scaling the canvas resolution relative to the canvas
         * display size. This can be used to save computation by scaling the backing
         * buffer down, or to support high DPI devices by scaling it up (by e.g.
         * window.devicePixelRatio).
         * @param {number} scale
         */
        CanvasLayer$2.prototype.setResolutionScale = function (scale) {
            if (typeof scale === 'number') {
                this.resolutionScale_ = scale;
                this.resize_();
            }
        };

        /**
         * Set a function that will be called when a repaint of the canvas is required.
         * If opt_updateHandler is null or unspecified, any existing callback is
         * removed.
         * @param {?function=} opt_updateHandler The update callback function.
         */
        CanvasLayer$2.prototype.setUpdateHandler = function (opt_updateHandler) {
            this.updateHandler_ = opt_updateHandler;
        };

        /**
         * @inheritDoc
         */
        CanvasLayer$2.prototype.onAdd = function () {
            if (this.isAdded_) {
                return;
            }

            this.isAdded_ = true;
            this.setPane_();

            this.resizeListener_ = google.maps.event.addListener(this.getMap(), 'resize', this.resizeFunction_);
            this.centerListener_ = google.maps.event.addListener(
                this.getMap(),
                'center_changed',
                this.repositionFunction_
            );

            this.resize_();
            this.repositionCanvas_();
        };

        /**
         * @inheritDoc
         */
        CanvasLayer$2.prototype.onRemove = function () {
            if (!this.isAdded_) {
                return;
            }

            this.isAdded_ = false;
            this.topLeft_ = null;

            // remove canvas and listeners for pan and resize from map
            this.canvas.parentElement.removeChild(this.canvas);
            if (this.centerListener_) {
                google.maps.event.removeListener(this.centerListener_);
                this.centerListener_ = null;
            }
            if (this.resizeListener_) {
                google.maps.event.removeListener(this.resizeListener_);
                this.resizeListener_ = null;
            }

            // cease canvas update callbacks
            if (this.requestAnimationFrameId_) {
                this.cancelAnimFrame_.call(global$4, this.requestAnimationFrameId_);
                this.requestAnimationFrameId_ = null;
            }
        };

        /**
         * The internal callback for resize events that resizes the canvas to keep the
         * map properly covered.
         * @private
         */
        CanvasLayer$2.prototype.resize_ = function () {
            if (!this.isAdded_) {
                return;
            }

            var map = this.getMap();
            var mapWidth = map.getDiv().offsetWidth;
            var mapHeight = map.getDiv().offsetHeight;

            var newWidth = mapWidth * this.resolutionScale_;
            var newHeight = mapHeight * this.resolutionScale_;
            var oldWidth = this.canvas.width;
            var oldHeight = this.canvas.height;

            // resizing may allocate a new back buffer, so do so conservatively
            if (oldWidth !== newWidth || oldHeight !== newHeight) {
                this.canvas.width = newWidth;
                this.canvas.height = newHeight;

                this.needsResize_ = true;
                this.scheduleUpdate();
            }

            // reset styling if new sizes don't match; resize of data not needed
            if (this.canvasCssWidth_ !== mapWidth || this.canvasCssHeight_ !== mapHeight) {
                this.canvasCssWidth_ = mapWidth;
                this.canvasCssHeight_ = mapHeight;
                this.canvas.style.width = mapWidth + 'px';
                this.canvas.style.height = mapHeight + 'px';
            }
        };

        /**
         * @inheritDoc
         */
        CanvasLayer$2.prototype.draw = function () {
            this.repositionCanvas_();
        };

        /**
         * Internal callback for map view changes. Since the Maps API moves the overlay
         * along with the map, this function calculates the opposite translation to
         * keep the canvas in place.
         * @private
         */
        CanvasLayer$2.prototype.repositionCanvas_ = function () {
            // TODO(bckenny): *should* only be executed on RAF, but in current browsers
            //     this causes noticeable hitches in map and overlay relative
            //     positioning.

            var map = this.getMap();

            // topLeft can't be calculated from map.getBounds(), because bounds are
            // clamped to -180 and 180 when completely zoomed out. Instead, calculate
            // left as an offset from the center, which is an unwrapped LatLng.
            var top = map.getBounds().getNorthEast().lat();
            var center = map.getCenter();
            var scale = Math.pow(2, map.getZoom());
            var left = center.lng() - (this.canvasCssWidth_ * 180) / (256 * scale);
            this.topLeft_ = new google.maps.LatLng(top, left);

            // Canvas position relative to draggable map's container depends on
            // overlayView's projection, not the map's. Have to use the center of the
            // map for this, not the top left, for the same reason as above.
            var projection = this.getProjection();
            var divCenter = projection.fromLatLngToDivPixel(center);
            var offsetX = -Math.round(this.canvasCssWidth_ / 2 - divCenter.x);
            var offsetY = -Math.round(this.canvasCssHeight_ / 2 - divCenter.y);
            this.canvas.style[CanvasLayer$2.CSS_TRANSFORM_] = 'translate(' + offsetX + 'px,' + offsetY + 'px)';

            this.scheduleUpdate();
        };

        /**
         * Internal callback that serves as main animation scheduler via
         * requestAnimationFrame. Calls resize and update callbacks if set, and
         * schedules the next frame if overlay is animated.
         * @private
         */
        CanvasLayer$2.prototype.update_ = function () {
            this.requestAnimationFrameId_ = null;

            if (!this.isAdded_) {
                return;
            }

            if (this.isAnimated_) {
                this.scheduleUpdate();
            }

            if (this.needsResize_ && this.resizeHandler_) {
                this.needsResize_ = false;
                this.resizeHandler_();
            }

            if (this.updateHandler_) {
                this.updateHandler_();
            }
        };

        /**
         * A convenience method to get the current LatLng coordinate of the top left of
         * the current view of the map.
         * @return {google.maps.LatLng} The top left coordinate.
         */
        CanvasLayer$2.prototype.getTopLeft = function () {
            return this.topLeft_;
        };

        /**
         * Schedule a requestAnimationFrame callback to updateHandler. If one is
         * already scheduled, there is no effect.
         */
        CanvasLayer$2.prototype.scheduleUpdate = function () {
            if (this.isAdded_ && !this.requestAnimationFrameId_) {
                this.requestAnimationFrameId_ = this.requestAnimFrame_.call(global$4, this.requestUpdateFunction_);
            }
        };
    }

    /**
     * @author kyle / http://nikai.us/
     */

    var Layer$2 = (function (_BaseLayer) {
        inherits(Layer, _BaseLayer);

        function Layer(map, dataSet, options) {
            classCallCheck(this, Layer);

            var _this = possibleConstructorReturn(
                this,
                (Layer.__proto__ || Object.getPrototypeOf(Layer)).call(this, map, dataSet, options)
            );

            var self = _this;
            var data = null;
            options = options || {};

            self.init(options);
            self.argCheck(options);

            var canvasLayerOptions = {
                map: map,
                animate: false,
                updateHandler: function updateHandler() {
                    self._canvasUpdate();
                },
                resolutionScale: resolutionScale,
            };

            var canvasLayer = (_this.canvasLayer = new CanvasLayer$2(canvasLayerOptions));

            _this.clickEvent = _this.clickEvent.bind(_this);
            _this.mousemoveEvent = _this.mousemoveEvent.bind(_this);
            _this.bindEvent();
            return _this;
        }

        createClass(Layer, [
            {
                key: 'clickEvent',
                value: function clickEvent(e) {
                    var pixel = e.pixel;
                    get(Layer.prototype.__proto__ || Object.getPrototypeOf(Layer.prototype), 'clickEvent', this).call(
                        this,
                        pixel,
                        e
                    );
                },
            },
            {
                key: 'mousemoveEvent',
                value: function mousemoveEvent(e) {
                    var pixel = e.pixel;
                    get(
                        Layer.prototype.__proto__ || Object.getPrototypeOf(Layer.prototype),
                        'mousemoveEvent',
                        this
                    ).call(this, pixel, e);
                },
            },
            {
                key: 'bindEvent',
                value: function bindEvent(e) {
                    var map = this.map;

                    if (this.options.methods) {
                        if (this.options.methods.click) {
                            map.setDefaultCursor('default');
                            map.addListener('click', this.clickEvent);
                        }
                        if (this.options.methods.mousemove) {
                            map.addListener('mousemove', this.mousemoveEvent);
                        }
                    }
                },
            },
            {
                key: 'unbindEvent',
                value: function unbindEvent(e) {
                    var map = this.map;

                    if (this.options.methods) {
                        if (this.options.methods.click) {
                            map.removeListener('click', this.clickEvent);
                        }
                        if (this.options.methods.mousemove) {
                            map.removeListener('mousemove', this.mousemoveEvent);
                        }
                    }
                },
            },
            {
                key: 'getContext',
                value: function getContext() {
                    return this.canvasLayer.canvas.getContext(this.context);
                },
            },
            {
                key: '_canvasUpdate',
                value: function _canvasUpdate(time) {
                    if (!this.canvasLayer) {
                        return;
                    }

                    var self = this;

                    var animationOptions = self.options.animation;

                    var context = this.getContext();

                    if (self.isEnabledTime()) {
                        if (time === undefined) {
                            clear(context);
                            return;
                        }
                        if (this.context == '2d') {
                            context.save();
                            context.globalCompositeOperation = 'destination-out';
                            context.fillStyle = 'rgba(0, 0, 0, .1)';
                            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
                            context.restore();
                        }
                    } else {
                        clear(context);
                    }

                    if (this.context == '2d') {
                        for (var key in self.options) {
                            context[key] = self.options[key];
                        }
                    } else {
                        context.clear(context.COLOR_BUFFER_BIT);
                    }

                    if (
                        (self.options.minZoom && map.getZoom() < self.options.minZoom) ||
                        (self.options.maxZoom && map.getZoom() > self.options.maxZoom)
                    ) {
                        return;
                    }

                    var scale = 1;
                    if (this.context != '2d') {
                        scale = this.canvasLayer.devicePixelRatio;
                    }

                    var map = this.map;
                    var mapProjection = map.getProjection();
                    var scale = Math.pow(2, map.zoom) * resolutionScale;
                    var offset = mapProjection.fromLatLngToPoint(this.canvasLayer.getTopLeft());
                    var dataGetOptions = {
                        //fromColumn: self.options.coordType == 'bd09mc' ? 'coordinates' : 'coordinates_mercator',
                        transferCoordinate: function transferCoordinate(coordinate) {
                            var latLng = new google.maps.LatLng(coordinate[1], coordinate[0]);
                            var worldPoint = mapProjection.fromLatLngToPoint(latLng);
                            var pixel = {
                                x: (worldPoint.x - offset.x) * scale,
                                y: (worldPoint.y - offset.y) * scale,
                            };
                            return [pixel.x, pixel.y];
                        },
                    };

                    if (time !== undefined) {
                        dataGetOptions.filter = function (item) {
                            var trails = animationOptions.trails || 10;
                            if (time && item.time > time - trails && item.time < time) {
                                return true;
                            } else {
                                return false;
                            }
                        };
                    }

                    // get data from data set
                    var data = self.dataSet.get(dataGetOptions);

                    this.processData(data);

                    var latLng = new google.maps.LatLng(0, 0);
                    var worldPoint = mapProjection.fromLatLngToPoint(latLng);
                    var pixel = {
                        x: (worldPoint.x - offset.x) * scale,
                        y: (worldPoint.y - offset.y) * scale,
                    };

                    if (self.options.unit == 'm' && self.options.size) {
                        self.options._size = self.options.size / zoomUnit;
                    } else {
                        self.options._size = self.options.size;
                    }

                    this.drawContext(context, new DataSet(data), self.options, pixel);

                    //console.timeEnd('draw');

                    //console.timeEnd('update')
                    self.options.updateCallback && self.options.updateCallback(time);
                },
            },
            {
                key: 'init',
                value: function init(options) {
                    var self = this;

                    self.options = options;

                    this.initDataRange(options);

                    this.context = self.options.context || '2d';

                    if (self.options.zIndex) {
                        this.canvasLayer && this.canvasLayer.setZIndex(self.options.zIndex);
                    }

                    this.initAnimator();
                },
            },
            {
                key: 'addAnimatorEvent',
                value: function addAnimatorEvent() {
                    this.map.addListener('movestart', this.animatorMovestartEvent.bind(this));
                    this.map.addListener('moveend', this.animatorMoveendEvent.bind(this));
                },
            },
            {
                key: 'show',
                value: function show() {
                    this.map.addOverlay(this.canvasLayer);
                },
            },
            {
                key: 'hide',
                value: function hide() {
                    this.map.removeOverlay(this.canvasLayer);
                },
            },
            {
                key: 'draw',
                value: function draw() {
                    self.canvasLayer.draw();
                },
            },
        ]);
        return Layer;
    })(BaseLayer);

    /**
     * @author kyle / http://nikai.us/
     */

    var geojson = {
        getDataSet: function getDataSet(geoJson) {
            var data = [];
            var features = geoJson.features;
            for (var i = 0; i < features.length; i++) {
                var feature = features[i];
                var geometry = feature.geometry;
                var properties = feature.properties;
                var item = {};
                for (var key in properties) {
                    item[key] = properties[key];
                }
                item.geometry = geometry;
                data.push(item);
            }
            return new DataSet(data);
        },
    };

    /**
     * @author kyle / http://nikai.us/
     */

    var csv = {
        CSVToArray: function CSVToArray(strData, strDelimiter) {
            // Check to see if the delimiter is defined. If not,
            // then default to comma.
            strDelimiter = strDelimiter || ',';

            // Create a regular expression to parse the CSV values.
            var objPattern = new RegExp(
                // Delimiters.
                '(\\' +
                    strDelimiter +
                    '|\\r?\\n|\\r|^)' +
                    // Quoted fields.
                    '(?:"([^"]*(?:""[^"]*)*)"|' +
                    // Standard fields.
                    '([^"\\' +
                    strDelimiter +
                    '\\r\\n]*))',
                'gi'
            );

            // Create an array to hold our data. Give the array
            // a default empty first row.
            var arrData = [[]];

            // Create an array to hold our individual pattern
            // matching groups.
            var arrMatches = null;

            // Keep looping over the regular expression matches
            // until we can no longer find a match.
            while ((arrMatches = objPattern.exec(strData))) {
                // Get the delimiter that was found.
                var strMatchedDelimiter = arrMatches[1];

                // Check to see if the given delimiter has a length
                // (is not the start of string) and if it matches
                // field delimiter. If id does not, then we know
                // that this delimiter is a row delimiter.
                if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
                    // Since we have reached a new row of data,
                    // add an empty row to our data array.
                    arrData.push([]);
                }

                var strMatchedValue;

                // Now that we have our delimiter out of the way,
                // let's check to see which kind of value we
                // captured (quoted or unquoted).
                if (arrMatches[2]) {
                    // We found a quoted value. When we capture
                    // this value, unescape any double quotes.
                    strMatchedValue = arrMatches[2].replace(new RegExp('""', 'g'), '"');
                } else {
                    // We found a non-quoted value.
                    strMatchedValue = arrMatches[3];
                }

                // Now that we have our value string, let's add
                // it to the data array.
                arrData[arrData.length - 1].push(strMatchedValue);
            }

            // Return the parsed data.
            return arrData;
        },

        getDataSet: function getDataSet(csvStr) {
            var arr = this.CSVToArray(csvStr, ',');

            var data = [];

            var header = arr[0];

            for (var i = 1; i < arr.length - 1; i++) {
                var line = arr[i];
                var item = {};
                for (var j = 0; j < line.length; j++) {
                    var value = line[j];
                    if (header[j] == 'geometry') {
                        value = JSON.parse(value);
                    }
                    item[header[j]] = value;
                }
                data.push(item);
            }

            return new DataSet(data);
        },
    };

    exports.version = version;
    exports.canvasClear = clear;
    exports.canvasResolutionScale = resolutionScale$1;
    exports.canvasDrawSimple = drawSimple;
    exports.canvasDrawHeatmap = drawHeatmap;
    exports.canvasDrawGrid = drawGrid;
    exports.canvasDrawHoneycomb = drawHoneycomb;
    exports.webglDrawSimple = webglDrawSimple;
    exports.webglDrawPoint = point;
    exports.webglDrawLine = line;
    exports.webglDrawPolygon = polygon;
    exports.utilCityCenter = cityCenter;
    exports.utilCurve = curve;
    exports.utilForceEdgeBundling = ForceEdgeBundling;
    exports.utilDataRangeIntensity = Intensity;
    exports.utilDataRangeCategory = Category;
    exports.utilDataRangeChoropleth = Choropleth;
    exports.Map = MapHelper;
    exports.baiduMapCanvasLayer = CanvasLayer;
    exports.baiduMapAnimationLayer = AnimationLayer;
    exports.baiduMapLayer = Layer;
    exports.googleMapCanvasLayer = CanvasLayer$2;
    exports.googleMapLayer = Layer$2;
    exports.DataSet = DataSet;
    exports.geojson = geojson;
    exports.csv = csv;

    Object.defineProperty(exports, '__esModule', {
        value: true,
    });
});
