var uploadedDataURL = "/asset/get/s/data-1630471071487-BNqv8oeLY.json";




var jsonMapData = {
    中国: '/asset/get/s/data-1594956060000-wzSYdj4lt.json',
    上海: '/asset/get/s/data-1594958113307-cxRUVth12.json',
    河北: '/asset/get/s/data-1594957443106-mUbmYqE_T.json',
    山西: '/asset/get/s/data-1594957766868-uxxAlaOQg.json',
    内蒙古: '/asset/get/s/data-1594957676205-3QrKkEs35.json',
    辽宁: '/asset/get/s/data-1594957651717-Gpv1HF9L3.json',
    吉林: '/asset/get/s/data-1594957628423-QcNxuZC4W.json',
    黑龙江: '/asset/get/s/data-1594957464890-ReTKD9z2j.json',
    江苏: '/asset/get/s/data-1594957547861-KHdRNauVp.json',
    浙江: '/asset/get/s/data-1594957975764-hU_4mjjCM.json',
    安徽: '/asset/get/s/data-1594956457905-qkfohCrdY.json',
    江西: '/asset/get/s/data-1594957574860-XllJ4xelw.json',
    山东: '/asset/get/s/data-1594957742389-8f6xMmJyc.json',
    河南: '/asset/get/s/data-1594957480524-SL6qHJ-Fq.json',
    湖北: '/asset/get/s/data-1594957504930-HOA-bJ-4Z.json',
    湖南: '/asset/get/s/data-1594957530163-LdNpZfmvz.json',
    福建: '/asset/get/s/data-1594957317412-_IqC6cGfe.json',   
    广东: '/asset/get/s/data-1594957374153-nlVvqecih.json',
    广西: '/asset/get/s/data-1594957389111-PYkaJMOc7.json',
    海南: '/asset/get/s/data-1594957424894-jIDqZ7UZi.json',
    四川: '/asset/get/s/data-1594957804051-2CAptA9LX.json',
    贵州: '/asset/get/s/data-1594957404398-tHnBWFTJS.json',
    云南: '/asset/get/s/data-1594957958466-t8sorr-Eh.json',
    西藏: '/asset/get/s/data-1594957940133-OoVRveNig.json',
    陕西: '/asset/get/s/data-1594957786745-Q7bywuAwG.json',
    甘肃: '/asset/get/s/data-1594957335316-fAoKcplcm.json',
    青海: '/asset/get/s/data-1594957718199-FGvYekca9.json',
    宁夏: '/asset/get/s/data-1594957693688-bKgaSBp5A.json',
    新疆: '/asset/get/s/data-1594957899456-0opYrqO1x.json',
    北京: '/asset/get/s/data-1594956490489-Sr9M4AyTs.json',
    天津: '/asset/get/s/data-1594957840497-nj8mwSNuj.json',
    重庆: '/asset/get/s/data-1594957282133-TKWoEZjqH.json',
    香港: '/asset/get/s/data-1594957863764-lSsoVf8U2.json',
    澳门: '/asset/get/s/data-1594956484374-Els_HG1wo.json',
    台湾: '/asset/get/s/data-1594957826344-_a_9jgYdN.json',
    两省:  "/asset/get/s/data-1630471071487-BNqv8oeLY.json"
};

// ADD ICON ADDRESS

var plant_icon = 'image://asset/get/s/data-1629789121972--mtyq3wHu.jpg';
var cs_group_icon = 'image://asset/get/s/data-1629789156615-j2CIgmZFb.jpg';
var fdc_icon = 'image://asset/get/s/data-1629789197674-M0N5Bh095.jpg';

// ADD HEATMAP DATA
var seriesData = [
    {
        name: '芙蓉区',
        value: 1,
    },

    {
        name: '望城区',
        value: 1,
    },

    {
        name: '开福区',
        value: 1,
    },
    {
        name: '岳麓区',
        value: 1,
    },
    {
        name: '天心区',
        value: 1,
    },
    {
        name: '雨花区',
        value: 1,
    },
];

// ADD ICON LONGTITUDE,LAGTITUDE INFO
var PLANT_ARR =[{name:"PLANT_福建省厦门市翔安区厦门银鹭高科技园区",value:[118.248034,24.618544]}];
var FDC_ARR =[{name:"FDC_广东省东莞市茶山镇南社管理区南塘路顺联雀巢仓库、",value:[113.8911,23.069608]}];
var CustomerDC_ARR =[{name:"CustomerDC_广州增城市新塘镇陈家林凤凰城园区（京东华南第三物流中心）进入园区门口直走第二个路口右转后再左转",value:[113.560225,23.128099]},{name:"CustomerDC_广东省东莞市大岭山镇第一产业集团东莞大岭山松湖物流园2号楼1层",value:[113.842223,22.899965]},{name:"CustomerDC_广东省广州市增城区新塘镇新塘大道东45号（原奔马实业有限公司）",value:[113.630936,23.113506]},{name:"CustomerDC_广东省东莞市洪梅镇望沙路115号仓库",value:[113.608904,22.994717]},{name:"CustomerDC_广东省佛山市顺德区北滘镇碧桂园正苑对面十荟团佛山仓",value:[113.274089,22.954801]},{name:"CustomerDC_广东省佛山市顺德区北滘镇碧桂园正门斜对面",value:[113.268029,22.923338]},{name:"CustomerDC_广东省东莞常平大京九物流园物流大道318号龙地东莞常平物流园 W1二层1,2,3单元",value:[114.043894,22.98004]},{name:"CustomerDC_广东省顺德市五沙新宇路普洛斯物流园二期",value:[113.352507,22.808691]},{name:"CustomerDC_广东省佛山市南海区狮山红沙工业园区海元仓储区C3库区",value:[112.995084,23.207265]},{name:"CustomerDC_广东省深圳市宝安区朝阳路5号",value:[113.869086,22.806938]},{name:"CustomerDC_广东省佛山市南海区狮山海元里水物流园",value:[113.160865,23.237893]},{name:"CustomerDC_广东省广州市增城区永宁街创立路1号2棟",value:[113.619877,23.177012]},{name:"CustomerDC_广东省中山市小榄镇绩东二大吉祥装饰材料城B栋厂房",value:[113.228241,22.654881]},{name:"CustomerDC_广东省中山市小榄镇绩东二大吉祥装饰材料城A栋厂房",value:[113.233241,22.659881]},{name:"CustomerDC_广东省广州市黄埔区开发大道1338号",value:[113.514661,23.112908]},{name:"CustomerDC_广东省广州市增城区永宁街沙宁路创业大道161号菜鸟网络园区（6号库一楼）（DG）",value:[113.5773,23.127578]},{name:"CustomerDC_东莞市长安镇步步高大道126号乐其仓库",value:[113.78088,22.778727]},{name:"CustomerDC_广东省佛山市三水区万贞仓储服务公司",value:[112.896668,23.156065]},{name:"CustomerDC_东莞市大岭山镇莞长路大岭山段19号",value:[113.777287,22.989076]},{name:"CustomerDC_广东省佛山市三水区工业大道闽川铝业公司对面，复融供应链仓库",value:[112.814505,23.095211]},{name:"CustomerDC_东莞市石排镇安博物流园1号库1号门",value:[113.940312,23.090291]},{name:"CustomerDC_广东省广州市增城区沙宁路永宁街创业大道161号阿里巴巴物流园3号库2楼5号门",value:[113.5823,23.132578]},{name:"CustomerDC_广东省深圳市宝安区洲石路同和工业园捷安物流配送中心",value:[113.875022,22.667723]},{name:"CustomerDC_广东省东莞市东莞辖区洪梅镇望沙路115号仓库129-132号门 。",value:[113.613904,22.999717]},{name:"CustomerDC_广东省深圳市光明区粤宝工业区11栋",value:[113.901528,22.741556]},{name:"CustomerDC_广东省中山市东升镇宏昌物流园B区8-3仓库",value:[113.291471,22.622846]},{name:"CustomerDC_广东省佛山市顺德区陈村镇国通大道西4号仓库8号2楼准时达仓库（从斜坡上二楼左转就是）",value:[113.196227,22.997675]},{name:"CustomerDC_广东省东莞市东莞辖区石排镇赤坎村石崇大道安博物流园内7-1\/8-1号库",value:[113.960811,23.098122]},{name:"CustomerDC_广东省中山市神湾港工业园北区",value:[113.36656,22.297979]},{name:"CustomerDC_广东省东莞市大岭山镇连平畔山北街恒路物流",value:[113.802957,22.928483]},{name:"CustomerDC_广东省佛山市三水区万贞仓储服务公司",value:[112.901668,23.161065]},{name:"CustomerDC_ 广东省东莞市塘厦镇 环市东路421号宏诚基智造产业园一懂二楼 ",value:[114.110169,22.792185]},{name:"CustomerDC_广东省东莞市常平镇京九路318号（龙地东莞景昌园区一楼）响应云仓",value:[114.024762,22.963709]},{name:"CustomerDC_广东省广州市花都区平步大道13号天天乐工业园3栋1楼",value:[113.198984,23.427929]},{name:"CustomerDC_广东省佛山市三水区万贞仓储服务公司",value:[112.906668,23.166065]},{name:"CustomerDC_广东省佛山市顺德区五沙良五路15号顺德农商银行（大良联盛支行）",value:[113.235278,22.848418]},{name:"CustomerDC_广东省东莞市常平镇漱新村常马路578-580号，，",value:[114.039356,22.981246]},{name:"CustomerDC_广东省深圳市南山区牛成村牛成路200号（进厂左转30米）",value:[113.931034,22.612808]}];
// ADD PATH INFO
var PLANT_CustomerDC_PATH =[{coords:[[118.248034,24.618544],[113.560225,23.128099]]},{coords:[[118.248034,24.618544],[113.842223,22.899965]]},{coords:[[118.248034,24.618544],[113.630936,23.113506]]},{coords:[[118.248034,24.618544],[113.608904,22.994717]]},{coords:[[118.248034,24.618544],[113.274089,22.954801]]},{coords:[[118.248034,24.618544],[113.268029,22.923338]]},{coords:[[118.248034,24.618544],[114.043894,22.98004]]},{coords:[[118.248034,24.618544],[113.352507,22.808691]]},{coords:[[118.248034,24.618544],[112.995084,23.207265]]},{coords:[[118.248034,24.618544],[113.869086,22.806938]]},{coords:[[118.248034,24.618544],[113.160865,23.237893]]},{coords:[[118.248034,24.618544],[113.619877,23.177012]]},{coords:[[118.248034,24.618544],[113.228241,22.654881]]},{coords:[[118.248034,24.618544],[113.233241,22.659881]]},{coords:[[118.248034,24.618544],[113.514661,23.112908]]},{coords:[[118.248034,24.618544],[113.5773,23.127578]]},{coords:[[118.248034,24.618544],[113.78088,22.778727]]},{coords:[[118.248034,24.618544],[112.896668,23.156065]]},{coords:[[118.248034,24.618544],[113.777287,22.989076]]},{coords:[[118.248034,24.618544],[112.814505,23.095211]]},{coords:[[118.248034,24.618544],[113.940312,23.090291]]},{coords:[[118.248034,24.618544],[113.5823,23.132578]]},{coords:[[118.248034,24.618544],[113.875022,22.667723]]},{coords:[[118.248034,24.618544],[113.613904,22.999717]]},{coords:[[118.248034,24.618544],[113.901528,22.741556]]},{coords:[[118.248034,24.618544],[113.291471,22.622846]]},{coords:[[118.248034,24.618544],[113.196227,22.997675]]},{coords:[[118.248034,24.618544],[113.960811,23.098122]]},{coords:[[118.248034,24.618544],[113.36656,22.297979]]},{coords:[[118.248034,24.618544],[113.802957,22.928483]]},{coords:[[118.248034,24.618544],[112.901668,23.161065]]},{coords:[[118.248034,24.618544],[114.110169,22.792185]]},{coords:[[118.248034,24.618544],[114.024762,22.963709]]},{coords:[[118.248034,24.618544],[113.198984,23.427929]]},{coords:[[118.248034,24.618544],[112.906668,23.166065]]},{coords:[[118.248034,24.618544],[113.235278,22.848418]]},{coords:[[118.248034,24.618544],[114.039356,22.981246]]},{coords:[[118.248034,24.618544],[113.931034,22.612808]]}];
var PLANT_FDC_PATH =[{coords:[[118.248034,24.618544],[113.8911,23.069608]]}];
var FDC_CustomerDC_PATH =[{coords:[[113.8911,23.069608],[113.560225,23.128099]]},{coords:[[113.891100,23.069608],[113.842223,22.899965]]},{coords:[[113.891100,23.069608],[113.630936,23.113506]]},{coords:[[113.891100,23.069608],[113.608904,22.994717]]},{coords:[[113.891100,23.069608],[113.274089,22.954801]]},{coords:[[113.891100,23.069608],[113.268029,22.923338]]},{coords:[[113.891100,23.069608],[114.043894,22.980040]]},{coords:[[113.891100,23.069608],[113.352507,22.808691]]},{coords:[[113.891100,23.069608],[112.995084,23.207265]]},{coords:[[113.891100,23.069608],[113.869086,22.806938]]},{coords:[[113.891100,23.069608],[113.160865,23.237893]]},{coords:[[113.891100,23.069608],[113.619877,23.177012]]},{coords:[[113.891100,23.069608],[113.228241,22.654881]]},{coords:[[113.891100,23.069608],[113.228241,22.654881]]},{coords:[[113.891100,23.069608],[113.514661,23.112908]]},{coords:[[113.891100,23.069608],[113.577300,23.127578]]},{coords:[[113.891100,23.069608],[113.780880,22.778727]]},{coords:[[113.891100,23.069608],[112.896668,23.156065]]},{coords:[[113.891100,23.069608],[113.777287,22.989076]]},{coords:[[113.891100,23.069608],[112.814505,23.095211]]},{coords:[[113.891100,23.069608],[113.940312,23.090291]]},{coords:[[113.891100,23.069608],[113.577300,23.127578]]},{coords:[[113.891100,23.069608],[113.875022,22.667723]]},{coords:[[113.891100,23.069608],[113.608904,22.994717]]},{coords:[[113.891100,23.069608],[113.901528,22.741556]]},{coords:[[113.891100,23.069608],[113.291471,22.622846]]},{coords:[[113.891100,23.069608],[113.196227,22.997675]]},{coords:[[113.891100,23.069608],[113.960811,23.098122]]},{coords:[[113.891100,23.069608],[113.366560,22.297979]]},{coords:[[113.891100,23.069608],[113.802957,22.928483]]},{coords:[[113.891100,23.069608],[112.896668,23.156065]]},{coords:[[113.891100,23.069608],[114.110169,22.792185]]},{coords:[[113.891100,23.069608],[114.024762,22.963709]]},{coords:[[113.891100,23.069608],[113.198984,23.427929]]},{coords:[[113.891100,23.069608],[112.896668,23.156065]]},{coords:[[113.891100,23.069608],[113.235278,22.848418]]},{coords:[[113.891100,23.069608],[114.039356,22.981246]]},{coords:[[113.891100,23.069608],[113.931034,22.612808]]}];

// $.getJSON('/asset/get/s/data-1594956060000-wzSYdj4lt.json', null, function (data) {    //china
// $.getJSON('/asset/get/s/data-1594957374153-nlVvqecih.json', null, function (data) {       //GD
$.getJSON('/asset/get/s/data-1630471071487-BNqv8oeLY.json', null, function (data) {      //GD FJ
    echarts.registerMap('两省', data);   

    option = {
        backgroundColor: '#FFFFFF', //地图背景色深蓝
        tooltip: {
            trigger: 'item',
            // formatter: function (params) {
            //     if (typeof params.value[2] == 'undefined') {
            //         return params.name + ' : ' + params.value;
            //     } else {
            //         return params.name + ' : ' + params.value[2];
            //     }
            // },
            formatter: function (params) {
                return params.name;
            },
        },

        geo: {
            show: true,
            map: '两省',
            label: {
                // normal: {
                //     // show: true, //是否显示城市名
                //     // textStyle: {
                //     // color: '#1F4E79', //legend字体颜色  深蓝
                //     //     fontSize: 10,
                //     },
                //     // verticalAlign: 'middle',
                //     // align: 'left',
                // },
                emphasis: {
                    show: false,
                },
            },
            zoom: 1.2,
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#BFBFBF', //地图填充颜色
                    borderColor: '#FFFFFF', //地图边框颜色  蓝色
                    borderWidth: 2,
                    //     shadowColor: 'rgba(63, 218, 255, 0.5)',    //地图边框阴影颜色
                    //   shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#52B3D6',
                },
            },
        },
        toolbox: {
            show: true,
            left: 'left',
            top: '25',
            iconStyle: {
                borderColor: 'crimson',
            },
            feature: {
                dataView: { readOnly: false },
                // restore: {},
                // saveAsImage: {},
                saveAsImage: { show: true },
                restore: { show: true },
                mySelectAll: {
                    show: true,
                    title: '全选',
                    icon:
                        'M102.4 302.08c5.12 5.12 15.36 10.24 25.6 10.24s15.36-5.12 25.6-10.24l174.08-174.08c5.12-5.12 10.24-15.36 10.24-25.6s-5.12-15.36-10.24-25.6c-20.48-5.12-40.96-5.12-51.2 10.24l-148.48 153.6-71.68-76.8C51.2 158.72 40.96 158.72 35.84 158.72c-10.24 0-15.36 5.12-25.6 10.24-5.12 5.12-10.24 10.24-10.24 20.48s5.12 15.36 10.24 25.6L102.4 302.08zM276.48 409.6l-148.48 153.6-71.68-71.68C51.2 486.4 40.96 481.28 35.84 481.28c-10.24 0-15.36 5.12-25.6 10.24-5.12 10.24-10.24 15.36-10.24 25.6s5.12 15.36 10.24 25.6L102.4 629.76c5.12 5.12 15.36 10.24 25.6 10.24s15.36-5.12 25.6-10.24L322.56 460.8c5.12-5.12 10.24-15.36 10.24-25.6s-5.12-15.36-10.24-25.6c-10.24-10.24-30.72-10.24-46.08 0z m0 327.68l-148.48 153.6L56.32 819.2c-5.12-5.12-15.36-10.24-25.6-10.24s-15.36 5.12-25.6 10.24c0 5.12-5.12 15.36-5.12 25.6s5.12 15.36 10.24 25.6L102.4 957.44c5.12 5.12 15.36 10.24 25.6 10.24h5.12c10.24 0 15.36-5.12 25.6-10.24l174.08-174.08c5.12-5.12 10.24-15.36 10.24-25.6s-5.12-15.36-10.24-25.6c-25.6-5.12-40.96-5.12-56.32 5.12zM1024 153.6c0 30.72-25.6 56.32-56.32 56.32h-460.8c-30.72 0-61.44-25.6-61.44-56.32 0-30.72 25.6-56.32 56.32-56.32h455.68c35.84-5.12 66.56 20.48 66.56 56.32z m0 358.4c0 30.72-25.6 56.32-56.32 56.32h-460.8c-30.72 0-56.32-25.6-56.32-56.32s25.6-56.32 56.32-56.32h455.68c35.84 0 61.44 25.6 61.44 56.32z m-5.12 358.4c0 30.72-25.6 56.32-56.32 56.32h-460.8c-30.72 0-56.32-25.6-56.32-56.32 0-30.72 25.6-56.32 56.32-56.32h455.68c35.84 0 61.44 25.6 61.44 56.32z m0 0',
                    onclick: function () {
                        myChart.dispatchAction({
                            type: 'legendAllSelect',
                        });
                    },
                },
                myUnSelectAll: {
                    show: true,
                    title: '反选',
                    icon:
                        'M519.656727 472.459636l-160.512-160.488727a36.584727 36.584727 0 1 0-51.712 51.712l160.488728 160.512-160.488728 160.512a36.584727 36.584727 0 1 0 51.712 51.712l160.512-160.512 160.488728 160.512a36.584727 36.584727 0 1 0 51.735272-51.712l-160.512-160.512 160.512-160.512a36.584727 36.584727 0 1 0-51.735272-51.712L519.68 472.436364zM512 1024C229.236364 1024 0 794.763636 0 512S229.236364 0 512 0s512 229.236364 512 512-229.236364 512-512 512z',
                    onclick: function () {
                        // myChart.dispatchAction({
                        //     type: 'legendAllSelect',
                        // });
                        myChart.dispatchAction({
                            type: 'legendInverseSelect',
                        });
                    },
                },
   
            },
        },

        legend: {
            //各标记图例
            orient: 'horizontal',
            id: 1,
            y: 'top',
            x: 'left',
            // itemWidth: 20,
            // data: [
            //     {
            //         name: 'PLANT',
            //         icon: plant_icon,
            //     },
            // ],
            textStyle: {
                color: 'crimson', //legend图标颜色  深灰
                size: 20,
            },
        },
        title: {
            text: 'RTD工厂直发客户物流路径图',
            left: 'left',
            top: '60',
            textStyle: {
                color: 'crimson',
                size: 20,
            },
        },

        visualMap: [
            {
                min: 0, //IF NO WAREHOUSES IN THIS CITY
                max: 1, //填写城市的最大值
                seriesIndex: 0,
                show: false,
                inRange: {
                    color: ['#ffffff', 'white'],
                },
                //       calculable: true,
                textStyle: {
                    color: '#F7F7F7', //legend图标颜色  深灰
                    size: 20,
                },
                formatter: function (value) {
                    return value.toFixed(1);
                    //       return "";    左下角图例滑过时显示空值
                },
            },
        ],
        series: [
            {
                type: 'map',
                // map: '长沙市',
                geoIndex: 0,
                // showLegendSymbol: true, // 存在legend时显示
                // label: {
                //     normal: {
                //         show: true,
                //     },
                // },
                data: seriesData,
            },

            // add pathdata into map
            {
                type: 'lines',
                name: 'PLANT_FDC_PATH',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 5, //图标大小
                    color: 'red',
                },
                lineStyle: {
                    normal: {
                        width: 1, //尾迹线条宽度
                        opacity: 1, //尾迹线条透明度
                        curveness: 0.8, //尾迹线条曲直度
                        color: 'red',
                    },
                },
                data: PLANT_FDC_PATH,
            },
              {
                type: 'lines',
                name: 'PLANT_CustomerDC_PATH',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 3, //图标大小
                    color: '#0B1C51',
                },
                lineStyle: {
                    normal: {
                        width: 0.5, //尾迹线条宽度
                        opacity: 1, //尾迹线条透明度
                        curveness: 0, //尾迹线条曲直度  控制线条形状
                        color: '#0B1C51',
                    },
                },
                data: PLANT_CustomerDC_PATH,
            },          
            {
                type: 'lines',
                name: 'FDC_CustomerDC_PATH',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 5, //图标大小
                    color: 'green',
                },
                lineStyle: {
                    normal: {
                        width: 1, //尾迹线条宽度
                        opacity: 1, //尾迹线条透明度
                        curveness: 0.3, //尾迹线条曲直度
                        color: 'green',
                    },
                },
                data: FDC_CustomerDC_PATH,
            },
            //********************************************************

            // 图标的位置
            {
                name: 'PLANT',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: PLANT_ARR,
                symbol: plant_icon,
                symbolSize: function (val) {
                    return 20;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',
                    },
                    emphasis: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#4bbbb2',
                        borderWidth: 2,
                        borderColor: '#b4dccd',
                    },
                },
            },

            {
                name: 'FDC',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: FDC_ARR,
                symbol: fdc_icon,
                symbolSize: function (val) {
                    return 15;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',
                    },
                    emphasis: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#4bbbb2',
                        borderWidth: 2,
                        borderColor: '#b4dccd',
                    },
                },
            },
             {
                name: 'Customer_DC',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: CustomerDC_ARR,
                symbol: fdc_icon,
                symbolSize: function (val) {
                    return 15;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',
                    },
                    emphasis: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#4bbbb2',
                        borderWidth: 2,
                        borderColor: '#b4dccd',
                    },
                },
            },     
        ],
    };
    myChart.setOption(option);
});
