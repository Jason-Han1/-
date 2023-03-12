var uploadedDataURL = "/asset/get/s/data-1557130299866-ZFHZzyHqK.json";


var util = {
    //pollutionName 污染物名称,dateType 筛选类型
    getlevelValueByPollution: function(pollutionName) {
        var num0,
            num1,
            num2,
            num3,
            num4,
            num5,
            num6;
        switch (pollutionName.toUpperCase()) {
            case "SO2":
                num0 = 0;
                num1 = 75;
                num2 = 150;
                num3 = 500;
                num4 = 650;
                num5 = 800;
                num6 = 1600
                break;
            case "NO2":
                num0 = 0;
                num1 = 50;
                num2 = 100;
                num3 = 200;
                num4 = 700;
                num5 = 1200;
                num6 = 2340
                break;
            case "CO":
                num0 = 0;
                num1 = 2.5;
                num2 = 5;
                num3 = 10;
                num4 = 35;
                num5 = 60;
                num6 = 90;
                break;
            case "O3":
                num0 = 0;
                num1 = 80;
                num2 = 160;
                num3 = 200;
                num4 = 300;
                num5 = 400;
                num6 = 800;
                break;
            case "PM10":
                num0 = 0;
                num1 = 25;
                num2 = 50;
                num3 = 150;
                num4 = 250;
                num5 = 350;
                num6 = 420;
                break;
            case "PM25":
                num0 = 0;
                num1 = 17.5;
                num2 = 35;
                num3 = 75;
                num4 = 115;
                num5 = 150;
                num6 = 250;
                break;
            case "AQI":
                num0 = 0;
                num1 = 25;
                num2 = 50;
                num3 = 100;
                num4 = 150;
                num5 = 200;
                num6 = 300;
                break;
            default:
                break
        }
        return [
            num0,
            num1,
            num2,
            num3,
            num4,
            num5,
            num6
        ]
    },
    //传入污染物的值
    getLevelPollution: function(pollutionName, value) {
        var color = '';
        var num0, num1, num2, num3, num4, num5, num6;
        var result = this.getlevelValueByPollution(pollutionName);
        num0 = result[0];
        num1 = result[1];
        num2 = result[2];
        num3 = result[3];
        num4 = result[4];
        num5 = result[5];
        num6 = result[6];
        if (value > num0 && value <= num1) {
            color = "#79E73C";
        } else if (value >= num1 && value <= num2) {
            color = "#79E73C";
        } else if (value > num2 && value <= num3) {
            color = "#FFD800";
        } else if (value > num3 && value <= num4) {
            color = "#FF9000";
        } else if (value > num4 && value <= num5) {
            color = "#FF2A00";
        } else if (value > num5 && value <= num6) {
            color = "#EB007F";
        } else if (value > num6) {
            color = "#C7021D";
        } else {
            color = "#666666";
        }
        return color;
    }
}


var data = [{
        XZQDM: "500235",
        SSXZQ: "云阳县",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "108.852433",
        WD: "31.038281",
        YS: null,
        SO2: "10",
        NO2: "48",
        PM10: "101",
        CO: "1.1",
        O3: "30",
        PM25: "89",
        AQI: "118",
        airQuality: "轻度污染"
    },
    {
        XZQDM: "500116",
        SSXZQ: "江津区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "106.2595",
        WD: "29.031937",
        YS: null,
        SO2: "16",
        NO2: "70",
        PM10: "124",
        CO: "1.4",
        O3: "9",
        PM25: "80",
        AQI: "112",
        airQuality: "轻度污染"
    },
    {
        XZQDM: "500230",
        SSXZQ: "丰都县",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "107.826631",
        WD: "29.886878",
        YS: null,
        SO2: "23",
        NO2: "33",
        PM10: "99",
        CO: "0.9",
        O3: "42",
        PM25: "68",
        AQI: "92",
        airQuality: "良"
    },
    {
        XZQDM: "500236",
        SSXZQ: "奉节县",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "109.344248",
        WD: "30.953524",
        YS: null,
        SO2: "12",
        NO2: "55",
        PM10: "100",
        CO: "1.2",
        O3: "32",
        PM25: "67",
        AQI: "90",
        airQuality: "良"
    },
    {
        XZQDM: "500233",
        SSXZQ: "忠县",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "107.909746",
        WD: "30.338212",
        YS: null,
        SO2: "14",
        NO2: "16",
        PM10: "76",
        CO: "0.8",
        O3: "52",
        PM25: "61",
        AQI: "83",
        airQuality: "良"
    },
    {
        XZQDM: "500223",
        SSXZQ: "潼南区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "105.810528",
        WD: "30.145791",
        YS: null,
        SO2: "26",
        NO2: "64",
        PM10: "121",
        CO: "1.4",
        O3: "9",
        PM25: "57",
        AQI: "86",
        airQuality: "良"
    },
    {
        XZQDM: "500119",
        SSXZQ: "南川区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "107.167373",
        WD: "29.138118",
        YS: null,
        SO2: "14",
        NO2: "40",
        PM10: "68",
        CO: "1",
        O3: "21",
        PM25: "56",
        AQI: "80",
        airQuality: "良"
    },
    {
        XZQDM: "500240",
        SSXZQ: "石柱县",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "108.294041",
        WD: "30.095801",
        YS: null,
        SO2: "15",
        NO2: "37",
        PM10: "93",
        CO: "1.1",
        O3: "24",
        PM25: "72",
        AQI: "97",
        airQuality: "良"
    },
    {
        XZQDM: "500222",
        SSXZQ: "綦江区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "106.718868",
        WD: "28.881763",
        YS: null,
        SO2: "13",
        NO2: "55",
        PM10: "102",
        CO: "1.2",
        O3: "9",
        PM25: "69",
        AQI: "93",
        airQuality: "良"
    },
    {
        XZQDM: "500102",
        SSXZQ: "涪陵区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "107.329336",
        WD: "29.661068",
        YS: null,
        SO2: "18",
        NO2: "68",
        PM10: "108",
        CO: "1.2",
        O3: "18",
        PM25: "75",
        AQI: "95",
        airQuality: "良"
    },
    {
        XZQDM: "500237",
        SSXZQ: "巫山县",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "109.895861",
        WD: "31.116924",
        YS: null,
        SO2: "12",
        NO2: "67",
        PM10: "118",
        CO: "1.2",
        O3: "30",
        PM25: "63",
        AQI: "85",
        airQuality: "良"
    },
    {
        XZQDM: "500114",
        SSXZQ: "黔江区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "108.704115",
        WD: "29.437889",
        YS: null,
        SO2: "15",
        NO2: "31",
        PM10: null,
        CO: "1.4",
        O3: "13",
        PM25: null,
        AQI: "39",
        airQuality: "优"
    },
    {
        XZQDM: "500101",
        SSXZQ: "万州区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "108.402442",
        WD: "30.706082",
        YS: null,
        SO2: "13",
        NO2: "49",
        PM10: "117",
        CO: "0.8",
        O3: "36",
        PM25: "84",
        AQI: "98",
        airQuality: "良"
    },
    {
        XZQDM: "500111",
        SSXZQ: "双桥经开区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: null,
        WD: null,
        YS: null,
        SO2: "11",
        NO2: "26",
        PM10: "109",
        CO: "0.9",
        O3: "34",
        PM25: "77",
        AQI: "103",
        airQuality: "轻度污染"
    },
    {
        XZQDM: "500110",
        SSXZQ: "万盛经开区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: null,
        WD: null,
        YS: null,
        SO2: "10",
        NO2: "18",
        PM10: "60",
        CO: "0.8",
        O3: "36",
        PM25: "52",
        AQI: "75",
        airQuality: "良"
    },
    {
        XZQDM: "500234",
        SSXZQ: "开州区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "108.377979",
        WD: "31.272483",
        YS: null,
        SO2: "16",
        NO2: "46",
        PM10: "110",
        CO: "0.8",
        O3: "18",
        PM25: "61",
        AQI: "79",
        airQuality: "良"
    },
    {
        XZQDM: "500225",
        SSXZQ: "大足区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "105.738864",
        WD: "29.652544",
        YS: null,
        SO2: "13",
        NO2: "34",
        PM10: "87",
        CO: "1.1",
        O3: "10",
        PM25: "54",
        AQI: "74",
        airQuality: "良"
    },
    {
        XZQDM: "500117",
        SSXZQ: "合川区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "106.307896",
        WD: "30.115013",
        YS: null,
        SO2: "16",
        NO2: "52",
        PM10: "98",
        CO: "1.1",
        O3: "16",
        PM25: "64",
        AQI: "84",
        airQuality: "良"
    },
    {
        XZQDM: "500227",
        SSXZQ: "璧山区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "106.187758",
        WD: "29.563656",
        YS: null,
        SO2: "13",
        NO2: "53",
        PM10: "103",
        CO: "1.2",
        O3: "9",
        PM25: "65",
        AQI: "88",
        airQuality: "良"
    },
    {
        XZQDM: "500224",
        SSXZQ: "铜梁区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "106.029285",
        WD: "29.813962",
        YS: null,
        SO2: "13",
        NO2: "38",
        PM10: "81",
        CO: "1.1",
        O3: "25",
        PM25: "68",
        AQI: "92",
        airQuality: "良"
    },
    {
        XZQDM: "500226",
        SSXZQ: "荣昌区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "105.503387",
        WD: "29.467352",
        YS: null,
        SO2: "15",
        NO2: "49",
        PM10: "95",
        CO: "1.6",
        O3: "6",
        PM25: "64",
        AQI: "87",
        airQuality: "良"
    },
    {
        XZQDM: "500118",
        SSXZQ: "永川区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "105.869475",
        WD: "29.29305",
        YS: null,
        SO2: "49",
        NO2: "40",
        PM10: "70",
        CO: "0.8",
        O3: "38",
        PM25: "42",
        AQI: "51",
        airQuality: "良"
    },
    {
        XZQDM: "500115",
        SSXZQ: "长寿区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "107.136114",
        WD: "29.957552",
        YS: null,
        SO2: "20",
        NO2: "90",
        PM10: "98",
        CO: "1.3",
        O3: "21",
        PM25: "71",
        AQI: "105",
        airQuality: "轻度污染"
    },
    {
        XZQDM: "500231",
        SSXZQ: "垫江县",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "107.433181",
        WD: "30.255807",
        YS: null,
        SO2: "9",
        NO2: "61",
        PM10: "90",
        CO: "1.3",
        O3: "7",
        PM25: "90",
        AQI: "119",
        airQuality: "轻度污染"
    },
    {
        XZQDM: "500229",
        SSXZQ: "城口县",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "108.730395",
        WD: "31.884009",
        YS: null,
        SO2: "8",
        NO2: "26",
        PM10: "95",
        CO: "1",
        O3: "34",
        PM25: "54",
        AQI: "74",
        airQuality: "良"
    },
    {
        XZQDM: "500228",
        SSXZQ: "梁平区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "107.714509",
        WD: "30.660383",
        YS: null,
        SO2: "8",
        NO2: "64",
        PM10: "87",
        CO: "1",
        O3: "16",
        PM25: "52",
        AQI: "80",
        airQuality: "良"
    },
    {
        XZQDM: "500243",
        SSXZQ: "彭水县",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "108.262214",
        WD: "29.356126",
        YS: null,
        SO2: "32",
        NO2: "30",
        PM10: "49",
        CO: "0.9",
        O3: "12",
        PM25: "43",
        AQI: "60",
        airQuality: "良"
    },
    {
        XZQDM: "500232",
        SSXZQ: "武隆区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "107.705232",
        WD: "29.375485",
        YS: null,
        SO2: "16",
        NO2: "44",
        PM10: "78",
        CO: "1.1",
        O3: "22",
        PM25: "57",
        AQI: "78",
        airQuality: "良"
    },
    {
        XZQDM: "500242",
        SSXZQ: "酉阳县",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "108.795605",
        WD: "28.902354",
        YS: null,
        SO2: "11",
        NO2: "40",
        PM10: "49",
        CO: "1",
        O3: "11",
        PM25: "26",
        AQI: "50",
        airQuality: "优"
    },
    {
        XZQDM: "500107",
        SSXZQ: "九龙坡区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "106.361005",
        WD: "29.431187",
        YS: null,
        SO2: "6",
        NO2: "58",
        PM10: "97",
        CO: "0.681",
        O3: "22",
        PM25: "69",
        AQI: "93",
        airQuality: "良"
    },
    {
        XZQDM: "500106",
        SSXZQ: "沙坪坝区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "106.364299",
        WD: "29.626928",
        YS: null,
        SO2: "8",
        NO2: "56",
        PM10: "84",
        CO: "1.684",
        O3: "27",
        PM25: "70",
        AQI: "104",
        airQuality: "轻度污染"
    },
    {
        XZQDM: "500109",
        SSXZQ: "北碚区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "106.510275",
        WD: "29.863515",
        YS: null,
        SO2: "7",
        NO2: "43",
        PM10: "83",
        CO: "0.722",
        O3: "34",
        PM25: "61",
        AQI: "93",
        airQuality: "良"
    },
    {
        XZQDM: "500104",
        SSXZQ: "大渡口区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "106.454302",
        WD: "29.421028",
        YS: null,
        SO2: "6",
        NO2: "76",
        PM10: "136",
        CO: "1.118",
        O3: "4",
        PM25: "84",
        AQI: "114",
        airQuality: "轻度污染"
    },
    {
        XZQDM: "500108",
        SSXZQ: "南岸区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "106.657127",
        WD: "29.538524",
        YS: null,
        SO2: "6",
        NO2: "79",
        PM10: "120",
        CO: "1.505",
        O3: "10",
        PM25: "71",
        AQI: "80",
        airQuality: "良"
    },
    {
        XZQDM: "500105",
        SSXZQ: "江北区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "106.705325",
        WD: "29.616522",
        YS: null,
        SO2: "9",
        NO2: "81",
        PM10: "94",
        CO: "1.458",
        O3: "5",
        PM25: "66",
        AQI: "93",
        airQuality: "良"
    },
    {
        XZQDM: "500103",
        SSXZQ: "渝中区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "106.537519",
        WD: "29.55236",
        YS: null,
        SO2: "10",
        NO2: "95",
        PM10: "135",
        CO: "1.964",
        O3: "6",
        PM25: "86",
        AQI: "107",
        airQuality: "轻度污染"
    },
    {
        XZQDM: "500122",
        SSXZQ: "两江新区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: null,
        WD: null,
        YS: null,
        SO2: "9",
        NO2: "89",
        PM10: "134",
        CO: "1.837",
        O3: "3",
        PM25: "89",
        AQI: "112",
        airQuality: "轻度污染"
    },
    {
        XZQDM: "500112",
        SSXZQ: "渝北区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "106.742696",
        WD: "29.812327",
        YS: null,
        SO2: "9",
        NO2: "118",
        PM10: "115",
        CO: "1.591",
        O3: "4",
        PM25: "82",
        AQI: "120",
        airQuality: "轻度污染"
    },
    {
        XZQDM: "500113",
        SSXZQ: "巴南区",
        JCSJ: "2019-03-10 00:00:00.0",
        JD: "106.74749",
        WD: "29.374367",
        YS: null,
        SO2: "5",
        NO2: "49",
        PM10: "112",
        CO: "1.203",
        O3: "19",
        PM25: "83",
        AQI: "118",
        airQuality: "轻度污染"
    }
]


var seriesData = [];
data.forEach(function(item) {

    var color = util.getLevelPollution('AQI', item.AQI);
    var obj = {
        name: item.SSXZQ,
        itemStyle: {
            normal: {
                color: color
            }
        }

    }
    seriesData.push(obj);
})



myChart.showLoading();
$.get(uploadedDataURL, function(chinaJson) {
    echarts.registerMap('chongqing', chinaJson);
    myChart.hideLoading();
    myChart.setOption({

        series: [{
            type: 'map',
            map: 'chongqing',
             roam: true,
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: seriesData
        }]
    });
});