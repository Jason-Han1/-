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
    福建: '/asset/get/s/data-1594957317412-_IqC6cGfe.json',
    江西: '/asset/get/s/data-1594957574860-XllJ4xelw.json',
    山东: '/asset/get/s/data-1594957742389-8f6xMmJyc.json',
    河南: '/asset/get/s/data-1594957480524-SL6qHJ-Fq.json',
    湖北: '/asset/get/s/data-1594957504930-HOA-bJ-4Z.json',
    湖南: '/asset/get/s/data-1594957530163-LdNpZfmvz.json',
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
};

// ADD ICON ADDRESS

var PLANT_icon = "image://asset/get/s/data-1631499569443-EUdcNFZT0.png";
var FDC_icon =  "image://asset/get/s/data-1631499754686-0zPV4b17t.jpg";
var RDC_icon = "image://asset/get/s/data-1631499767769-HPdrACPCo.png";
var HMJS_icon = "image://asset/get/s/data-1631499778359-i5IRottbk.png";
var MTYX_icon = "image://asset/get/s/data-1631499785555-tXRdDnUUS.png";
var DDMC_icon = "image://asset/get/s/data-1631499792103-Bw1p7ydXB.png";
var SHT_icon = "image://asset/get/s/data-1631499798473-nI9ZnNu92.png";
var XSYX_icon = "image://asset/get/s/data-1631499804517-O3YEZG9jO.png";
var JXPP_icon = "image://asset/get/s/data-1631500015473-gqyS0kaTF.png";

// ADD HEATMAP DATA
var seriesData = [
    {
        name: '广东',
        value: 100,
    },

    {
        name: '湖南',
        value: 100,
    },

];

// ADD ICON LONGTITUDE,LAGTITUDE INFO
var PLANT_ARR =[{name:"银鹭华中基地_湖北省汉川市经济开发区北桥工业园平章大道6号",value:[113.85013,30.66383]},{name:"银鹭华南基地_福建省厦门市翔安区厦门银鹭高科技园区",value:[118.243034,24.613544]}];
var FDC_ARR =[{name:"菜鸟长沙仓_长沙市岳麓区金桥路与金南路交汇处西北角丰树长沙物流园2期5栋2层",value:[112.847458,28.240797]},{name:"菜鸟东莞仓_东莞市石排镇安博物流园",value:[113.982607,23.08246]}];
var RDC_ARR =[{name:"雀巢东莞仓_广东省东莞市茶山镇南社管理区南塘路顺联雀巢仓库、 ",value:[113.8861,23.064608]}];
var HMJS_ARR =[{name:"盒马集市_湖南省长沙市雨花区东山路与牛角冲路交汇处宝湾物流园一层",value:[113.024763,28.14231]},{name:"盒马_广东省东莞市新兴路一巷20号增益供应链仓储物流(东莞)有限公司",value:[113.673908,22.7792]},{name:"盒马_广州市佛山三水乐平万纬物流园2号库（中心仓内）",value:[113.079459,23.334947]}];
var MTYX_ARR =[{name:"美团优选_长沙市开福区湘江北路与兴旺路交界处，（普洛斯斜对面，橙色房子",value:[112.92259,28.328358]},{name:"美团_广东省东莞市常平镇环常北路四纵路1号常平汽车站，张锦涛：13076718017",value:[114.017741,22.988038]},{name:"美团_广州市南沙区榄核镇民生工业区蔡新路349号洛德加印刷厂，邵中奇，13652928660",value:[113.333112,22.828173]},{name:"美团_佛山市南海区丹灶镇西城村普洛斯丹灶物流园A4栋",value:[112.888994,23.024095]},{name:"美团_广东省惠州市惠阳区秋长镇秋宝路新丰家具厂2号门仓库，陈林，18682413980",value:[114.40407,22.787365]},{name:"美团_广东省汕头市濠江区柏亚临港物流产业园C1，蔡佳慧，13790847775",value:[116.721973,23.281079]},{name:"美团_湛江市坡头区官渡镇石门村委会东岸村华思园产业园内，谢崇拍，13265166568",value:[110.422592,21.370944]},{name:"美团_广东省潮州市潮安区东山湖特色产业基地中兴大道莱芙家纺生产基地，左明亮，18620141135",value:[116.588172,23.487102]}];
var DDMC_ARR =[{name:"多多买菜_长沙万纬长沙雨花物流园1-2-02",value:[112.933814,28.223209]},{name:"多多_广东东莞市大岭山镇大岭山镇连平畔山北街7号 恒路物流",value:[113.797957,22.923483]},{name:"多多_广东省佛山市三水区乐平镇大岗村委桥头村厂房",value:[112.935956,23.267955]},{name:"多多_广东省佛山市顺德区盛龙路佛山安得物流园",value:[113.085976,22.914368]},{name:"多多_惠州市惠阳区沙田镇花塘村第一产业园",value:[114.569907,22.877396]},{name:"多多买菜_广东省茂名市电白区粤西农批市场东门对面胜大物流园",value:[110.975912,21.583065]},{name:"多多_广东汕头市金平区鮀江街道大学路66号通用物流园新四期第三栋（多多买菜汕头仓）",value:[116.659894,23.381356]}];
var SHT_ARR =[{name:"十荟团_湖南省长沙市开福区冯蔡东路与开福大道交叉口西侧 万纬长沙开福园区1号仓库",value:[112.986839,28.279956]},{name:"十荟团_广东省惠州市博罗县宇培惠州物流园十荟团",value:[114.284496,23.167899]}];
var XSYX_ARR =[{name:"兴盛优选_湖南省长沙市望城区普瑞大道1888号高星物流园",value:[112.82979,28.301634]},{name:"兴盛优选_番禺市化龙",value:[113.350504,22.947572]},{name:"兴盛优选_揭阳市榕城",value:[116.367831,23.544993]}];
var JXPP_ARR =[{name:"京喜拼拼_广东省东莞市沙田镇穗丰年路3号第一产业虎门港物流园",value:[113.614839,22.846724]},{name:"京喜拼拼_广东省广州市创展大道11号广州君建汽车零部件产业园-6号库-京喜拼拼广州中心仓",value:[113.259434,23.124162]},{name:"京喜拼拼_广东省揭阳市揭东区云路镇云宝大道易商物流园区二期二层C5,C7,C8",value:[116.455196,23.575047]}];
// ADD PATH INFO
var PLANT_FDC_PATH =[{coords:[[113.85013,30.66383],[112.847458,28.240797]]},{coords:[[118.243034,24.613544],[113.982607,23.08246]]}];
var FDC_CustomerDC_PATH =[{coords:[[112.847458,28.240797],[113.024763,28.14231]]},{coords:[[112.847458,28.240797],[112.92259,28.328358]]},{coords:[[112.847458,28.240797],[112.933814,28.223209]]},{coords:[[112.847458,28.240797],[112.986839,28.279956]]},{coords:[[112.847458,28.240797],[112.82979,28.301634]]},{coords:[[113.982607,23.08246],[113.673908,22.7792]]},{coords:[[113.982607,23.08246],[113.614839,22.846724]]},{coords:[[113.982607,23.08246],[114.017741,22.988038]]},{coords:[[113.982607,23.08246],[113.797957,22.923483]]},{coords:[[113.982607,23.08246],[113.259434,23.124162]]},{coords:[[113.982607,23.08246],[113.350504,22.947572]]}];

$.getJSON('/asset/get/s/data-1594956060000-wzSYdj4lt.json', null, function (data) {
    echarts.registerMap('中国', data);

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
            map: '中国',
            label: {
                normal: {
                    // show: true, //是否显示城市名
                    textStyle: {
                    color: '#1F4E79', //legend字体颜色  深蓝
                        fontSize: 10,
                    },
                    // verticalAlign: 'middle',
                    // align: 'left',
                },
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
                // myTool1: {
                //     show: true,
                //     title: '重置地图',
                //     icon:
                //         'M1007.772025 142.969542l-70.419421 53.799178A527.751816 527.751816 0 0 0 524.288347 0.003938C234.733768 0.003938 0.396208 228.591367 0.002363 511.371818-0.391482 794.467344 234.497461 1024 524.288347 1024c226.381899 0 419.287003-140.208692 492.699643-336.579629a9.688578 9.688578 0 0 0-6.065207-12.603028l-70.892035-23.709447a10.082423 10.082423 0 0 0-12.603029 5.8289 416.687628 416.687628 0 0 1-99.406387 151.551418 431.181111 431.181111 0 0 1-303.496679 122.879527c-58.0527 0-114.214945-11.106419-166.990127-32.925412a427.085127 427.085127 0 0 1-228.587428-223.30991 408.653197 408.653197 0 0 1-33.713101-163.287988c0-56.713628 11.421495-111.536802 33.713101-163.209218a416.687628 416.687628 0 0 1 92.080877-133.355795 431.181111 431.181111 0 0 1 303.496678-122.879527c58.0527 0 114.214945 11.02765 167.068896 32.925412a427.085127 427.085127 0 0 1 171.243649 128.235814l-75.224326 57.265011a9.688578 9.688578 0 0 0 3.780909 17.250395l219.213926 52.381337c6.301514 1.49661 12.366722-3.150757 12.366722-9.373503l1.023996-220.552998c-0.157538-8.034431-9.767347-12.603028-16.2264-7.561817z',
                //     onclick: function () {
                //         loadMap('中国');
                //     },
                // },
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
                // mySelectgroup: {
                //     show: true,
                //     title: '全选',
                //     icon:
                //         'M102.4 302.08c5.12 5.12 15.36 10.24 25.6 10.24s15.36-5.12 25.6-10.24l174.08-174.08c5.12-5.12 10.24-15.36 10.24-25.6s-5.12-15.36-10.24-25.6c-20.48-5.12-40.96-5.12-51.2 10.24l-148.48 153.6-71.68-76.8C51.2 158.72 40.96 158.72 35.84 158.72c-10.24 0-15.36 5.12-25.6 10.24-5.12 5.12-10.24 10.24-10.24 20.48s5.12 15.36 10.24 25.6L102.4 302.08zM276.48 409.6l-148.48 153.6-71.68-71.68C51.2 486.4 40.96 481.28 35.84 481.28c-10.24 0-15.36 5.12-25.6 10.24-5.12 10.24-10.24 15.36-10.24 25.6s5.12 15.36 10.24 25.6L102.4 629.76c5.12 5.12 15.36 10.24 25.6 10.24s15.36-5.12 25.6-10.24L322.56 460.8c5.12-5.12 10.24-15.36 10.24-25.6s-5.12-15.36-10.24-25.6c-10.24-10.24-30.72-10.24-46.08 0z m0 327.68l-148.48 153.6L56.32 819.2c-5.12-5.12-15.36-10.24-25.6-10.24s-15.36 5.12-25.6 10.24c0 5.12-5.12 15.36-5.12 25.6s5.12 15.36 10.24 25.6L102.4 957.44c5.12 5.12 15.36 10.24 25.6 10.24h5.12c10.24 0 15.36-5.12 25.6-10.24l174.08-174.08c5.12-5.12 10.24-15.36 10.24-25.6s-5.12-15.36-10.24-25.6c-25.6-5.12-40.96-5.12-56.32 5.12zM1024 153.6c0 30.72-25.6 56.32-56.32 56.32h-460.8c-30.72 0-61.44-25.6-61.44-56.32 0-30.72 25.6-56.32 56.32-56.32h455.68c35.84-5.12 66.56 20.48 66.56 56.32z m0 358.4c0 30.72-25.6 56.32-56.32 56.32h-460.8c-30.72 0-56.32-25.6-56.32-56.32s25.6-56.32 56.32-56.32h455.68c35.84 0 61.44 25.6 61.44 56.32z m-5.12 358.4c0 30.72-25.6 56.32-56.32 56.32h-460.8c-30.72 0-56.32-25.6-56.32-56.32 0-30.72 25.6-56.32 56.32-56.32h455.68c35.84 0 61.44 25.6 61.44 56.32z m0 0',
                //     onclick: function () {
                //         myChart.dispatchAction({
                //             type: 'legendSelect',
                //             name: 'PLANT',
                //         });
                //         myChart.dispatchAction({
                //             type: 'legendSelect',
                //             name: 'RDC',
                //         });
                //         myChart.dispatchAction({
                //             type: 'legendSelect',
                //             name: 'HUIDU',
                //         });
                //     },
                // },
                // myUnSelect_group: {
                //     show: true,
                //     title: '反选',
                //     icon:
                //         'M519.656727 472.459636l-160.512-160.488727a36.584727 36.584727 0 1 0-51.712 51.712l160.488728 160.512-160.488728 160.512a36.584727 36.584727 0 1 0 51.712 51.712l160.512-160.512 160.488728 160.512a36.584727 36.584727 0 1 0 51.735272-51.712l-160.512-160.512 160.512-160.512a36.584727 36.584727 0 1 0-51.735272-51.712L519.68 472.436364zM512 1024C229.236364 1024 0 794.763636 0 512S229.236364 0 512 0s512 229.236364 512 512-229.236364 512-512 512z',
                //     onclick: function () {
                //         myChart.dispatchAction({
                //             type: 'legendUnSelect',
                //             name: 'PLANT',
                //         });
                //         myChart.dispatchAction({
                //             type: 'legendUnSelect',
                //             name: 'RDC',
                //         });
                //         myChart.dispatchAction({
                //             type: 'legendUnSelect',
                //             name: 'HUIDU',
                //         });
                //     },
                // },
            },
        },

        legend: {
            //各标记图例
            orient: 'horizontal',
            id: 1,
            y: 'top',
            x: 'left',
            itemWidth: 20,
            // data: [
            // {name: 'PLANT',icon: PLANT_icon},
            // {name: 'FDC',icon: FDC_icon},
            // {name: 'RDC',icon: RDC_icon},
            // {name: 'HMJS',icon: HMJS_icon},
            // {name: 'MTYX',icon: MTYX_icon},
            // {name: 'DDMC',icon: DDMC_icon},
            // {name: 'SHT',icon: SHT_icon},
            // {name: 'XSYX',icon: XSYX_icon},
            // {name: 'JXPP',icon: JXPP_icon},
            // ],
            textStyle: {
                color: 'crimson', //legend图标颜色  深灰
                size: 20,
            },
        },
        title: {
            text: '社区团购物流路径图',
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
                    color: ['#ffffff', '#5496E6'],
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
                map: '中国',
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
                name: 'PLANT_CAINIAO_PATH',
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
                        curveness: 0.3, //尾迹线条曲直度
                        color: 'red',
                    },
                },
                data: PLANT_FDC_PATH,
            },

            {
                type: 'lines',
                name: 'CAINIAO_CustomerDC_PATH',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 5, //图标大小
                    color: 'blue',
                },
                lineStyle: {
                    normal: {
                        width: 1, //尾迹线条宽度
                        opacity: 1, //尾迹线条透明度
                        curveness: 0.3, //尾迹线条曲直度
                        color: 'blue',
                    },
                },
                data: FDC_CustomerDC_PATH,
            },

            // {
            //     type: 'lines',
            //     name: 'CUS_HUIDU_PATH',
            //     zlevel: 2,
            //     effect: {
            //         show: true,
            //         period: 4, //箭头指向速度，值越小速度越快
            //         trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
            //         symbol: 'arrow', //箭头图标
            //         symbolSize: 5, //图标大小
            //         color: 'orange',
            //     },
            //     lineStyle: {
            //         normal: {
            //             width: 1, //尾迹线条宽度
            //             opacity: 1, //尾迹线条透明度
            //             curveness: 0.3, //尾迹线条曲直度
            //             color: 'orange',
            //         },
            //     },
            //     data: CUS_HUIDU_PATH,
            // },

            // {
            //     type: 'lines',
            //     name: 'HUIDU_PLANT_PATH',
            //     zlevel: 2,
            //     effect: {
            //         show: true,
            //         period: 4, //箭头指向速度，值越小速度越快
            //         trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
            //         symbol: 'arrow', //箭头图标
            //         symbolSize: 5, //图标大小
            //         color: 'green',
            //     },
            //     lineStyle: {
            //         normal: {
            //             width: 1, //尾迹线条宽度
            //             opacity: 1, //尾迹线条透明度
            //             curveness: 0.3, //尾迹线条曲直度
            //             color: 'green',
            //         },
            //     },
            //     data: HUIDU_PLANT_PATH,
            // },
            //********************************************************

            // 图标的位置
            {name: 'PLANT',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: PLANT_ARR,
                symbol: PLANT_icon,
                symbolSize: function (val) {
                    return 30;},
                label: {normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;},
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',},
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
            {name: 'CAINIAO',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: FDC_ARR,
                symbol: FDC_icon,
                symbolSize: function (val) {
                    return 20;},
                label: {normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;},
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',},
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
            {name: 'NESTLE_RDC',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: RDC_ARR,
                symbol: RDC_icon,
                symbolSize: function (val) {
                    return 20;},
                label: {normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;},
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',},
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
            {name: 'HMJS',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: HMJS_ARR,
                symbol: HMJS_icon,
                symbolSize: function (val) {
                    return 20;},
                label: {normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;},
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',},
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
             {name: 'MTYX',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: MTYX_ARR,
                symbol: MTYX_icon,
                symbolSize: function (val) {
                    return 20;},
                label: {normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;},
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',},
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
             {name: 'DDMC',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: DDMC_ARR,
                symbol: DDMC_icon,
                symbolSize: function (val) {
                    return 20;},
                label: {normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;},
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',},
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
            {name: 'SHT',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: SHT_ARR,
                symbol: SHT_icon,
                symbolSize: function (val) {
                    return 20;},
                label: {normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;},
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',},
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
            {name: 'XSYX',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: XSYX_ARR,
                symbol: XSYX_icon,
                symbolSize: function (val) {
                    return 20;},
                label: {normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;},
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',},
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
             {name: 'JXPP',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: JXPP_ARR,
                symbol: JXPP_icon,
                symbolSize: function (val) {
                    return 20;},
                label: {normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;},
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',},
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