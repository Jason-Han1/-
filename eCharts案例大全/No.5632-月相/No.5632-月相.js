var moon30 = "/asset/get/s/data-1602120452196-diRVht_ky.jpg";

var moon29 = "/asset/get/s/data-1602120447555-I6XrEBYVt.jpg";

var moon28 = "/asset/get/s/data-1602120442467-h2lBBYbyw.jpg";

var moon27 = "/asset/get/s/data-1602120437703-JrMyM6ett.jpg";

var moon26 = "/asset/get/s/data-1602120432130-Q-KUmquR1.jpg";

var moon25 = "/asset/get/s/data-1602120427717-NlQDLFtd2.jpg";

var moon24 = "/asset/get/s/data-1602120422377-IhSRjoKgy.jpg";

var moon23 = "/asset/get/s/data-1602120416446-x5IGnu4Nq.jpg";

var moon22 = "/asset/get/s/data-1602118837196-MLg3ZIFyv.jpg";

var moon21 = "/asset/get/s/data-1602120411260-fl61S7t_k.jpg";

var moon20 = "/asset/get/s/data-1602120403590-6WJ1JW75z.jpg";

var moon19 = "/asset/get/s/data-1602120397176-b52bf8Tk1.jpg";

var moon17 = "/asset/get/s/data-1602120390574-GpmDmltrH.jpg";

var moon14 = "/asset/get/s/data-1602120377250-4UrSO9-le.jpg";

var moon13 = "/asset/get/s/data-1602120367881-qXJ-Mp3rG.jpg";

var moon12 = "/asset/get/s/data-1602120363941-Y_0jJodWA.jpg";

var moon11 = "/asset/get/s/data-1602120358662-8drDAH0d9.jpg";

var moon10 = "/asset/get/s/data-1602120352031-53PXxz9Xo.jpg";

var moon9 = "/asset/get/s/data-1602120345369-8wu14ZAc9.jpg";

var moon8 = "/asset/get/s/data-1602120340614-sPe5NLiZ9.jpg";

var moon6 = "/asset/get/s/data-1602120335071-h0zvx2KZ3.jpg";

var moon5 = "/asset/get/s/data-1602120329940-rByfQfZOE.jpg";

var moon4 = "/asset/get/s/data-1602120325642-LpcR8ebcQ.jpg";

var moon3 = "/asset/get/s/data-1602120317270-4kqQ7gjRF.jpg";

var moon2 = "/asset/get/s/data-1602120139031-e42DKQK3w.jpg";

var moon1 = "/asset/get/s/data-1602120100638-yNWQwhlec.jpg";



var anum = ['(盈凸月)九', '(盈凸月)十', '(盈凸月)十一', '(盈凸月)十二', '(盈凸月)十三', '(盈凸月)十四', '(望/满月)十五', '(望/满月)十六', '(亏凸月)十七', '(亏凸月)十八', '(亏凸月)十九', '(亏凸月)二十', '(亏凸月)廿一', '(下弦月)廿二', '(下弦月)廿三', '(残月)廿四', '(残月)廿五', '(残月)廿六', '(残月)廿七', '(残月)廿八', '(残月)廿九', '(晦)三十', '(新月/朔)一', '(峨嵋月)二', '(峨嵋月)三', '(峨嵋月)四', '(峨嵋月)五', '(峨嵋月)六', '(上弦月)七', '(上弦月)八']
var moons = [moon1, moon2, moon3, moon4, moon5, moon6, moon8, moon8, moon9, moon10, moon11, moon12, moon13, moon14, moon17, moon17, moon19, moon20, moon21, moon22, moon23, moon24, moon24, moon25, moon25, moon26, moon27, moon28, moon29, moon30]
var dt = new Date()
// 引入农历
var lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, //1900-1909
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, //1910-1919
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, //1920-1929
    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, //1930-1939
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, //1940-1949
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, //1950-1959
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, //1960-1969
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, //1970-1979
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, //1980-1989
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, //1990-1999
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, //2000-2009
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, //2010-2019
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, //2020-2029
    0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, //2030-2039
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, //2040-2049
    0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, //2050-2059
    0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, //2060-2069
    0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, //2070-2079
    0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, //2080-2089
    0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, //2090-2099
    0x0d520
];


function lYearDays(y) {
    var i, sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
        sum += (lunarInfo[y - 1900] & i) ? 1 : 0;
    }
    return (sum + leapDays(y));
};

function leapMonth(y) {
    return (lunarInfo[y - 1900] & 0xf);
};

function leapDays(y) {
    if (leapMonth(y)) {
        return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
    }
    return (0);
};

function monthDays(y, m) {
    if (m > 12 || m < 1) {
        return -1
    }
    return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
};


function solar2lunar(y, m, d) {
    //年份限定、上限
    if (y < 1900 || y > 2100) {
        return -1; // undefined转换为数字变为NaN
    }
    //公历传参最下限
    if (y == 1900 && m == 1 && d < 31) {
        return -1;
    }
    //未传参  获得当天
    if (!y) {
        var objDate = new Date();
    } else {
        var objDate = new Date(y, parseInt(m) - 1, d)
    }
    var i, leap = 0,
        temp = 0;
    //修正ymd参数
    var y = objDate.getFullYear(),
        m = objDate.getMonth() + 1,
        d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
    for (i = 1900; i < 2101 && offset > 0; i++) {
        temp = lYearDays(i);
        offset -= temp;
    }
    if (offset < 0) {
        offset += temp;
        i--;
    }

    //是否今天
    var isTodayObj = new Date(),
        isToday = false;
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
        isToday = true;
    }

    //农历年
    var year = i;
    var leap = leapMonth(i); //闰哪个月
    var isLeap = false;

    //效验闰月
    for (i = 1; i < 13 && offset > 0; i++) {
        //闰月
        if (leap > 0 && i == (leap + 1) && isLeap == false) {
            --i;
            isLeap = true;
            temp = leapDays(year); //计算农历闰月天数
        } else {
            temp = monthDays(year, i); //计算农历普通月天数
        }
        //解除闰月
        if (isLeap == true && i == (leap + 1)) {
            isLeap = false;
        }
        offset -= temp;
    }
    // 闰月导致数组下标重叠取反
    if (offset == 0 && leap > 0 && i == leap + 1) {
        if (isLeap) {
            isLeap = false;
        } else {
            isLeap = true;
            --i;
        }
    }
    if (offset < 0) {
        offset += temp;
        --i;
    }
    //农历月
    var month = i;
    //农历日
    var day = offset + 1;


    return {
        'lYear': year,
        'lMonth': month,
        'lDay': day
    };
};
//农历引入 end 

var year = dt.getFullYear()
var m = dt.getMonth() + 1
var d = dt.getDate()
var lunar = solar2lunar(year, m, d)
var d1 = lunar.lDay

if (d1 < 9) {
    day = d1 + 21
} else {
    day = d1 - 9
}


function roundDatas(num, n, mk) {
    var datas = [];
    if (mk == '地球') {
        label = '地球\n北极';
        for (var i = 0; i < num; i++) {
            var x = Math.cos(n * i * Math.PI / 180);
            var y = Math.sin(n * i * Math.PI / 180);
            datas.push({

                x: y,
                y: x,
                itemStyle: {
                    normal: {
                        color: '#94d6da'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        formatter: label,
                        fontSize: 14
                    }
                },
            });
        }
    } else if (mk == '太阳') {
        label = '太阳';
        for (var i = 0; i < num; i++) {
            var x = Math.cos(n * i * Math.PI / 180);
            var y = Math.sin(n * i * Math.PI / 180);
            datas.push({

                x: y,
                y: x,
                itemStyle: {
                    normal: {
                        color: '#d54a20'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        formatter: label,
                        fontSize: 16
                    }
                },

            });
        }
    } else {
        label = '{b}';

        for (var i = 0; i < num; i++) {
            var x = Math.cos(n * i * Math.PI / 180);
            var y = Math.sin(n * i * Math.PI / 180);
            datas.push({
                name: anum[i],
                x: y,
                y: x,
                itemStyle: {
                    normal: {
                        color: '#D3D3D3'
                    }
                },


            });
        }
        datas[day].symbolSize = 30;
        datas[day].symbol = 'image://' + moons[d1 - 1];
        datas[day].label = {
            normal: {
                show: true,
                formatter: label,
                fontSize: 16,
                color: '#fff',
                position: 'top'
            }
        }


    }

    return datas;
}

function linkDatas(num) {
    var ldatas = [];
    for (var i = 0; i < num; i++) {
        ldatas.push({

            lineStyle: {
                normal: {
                    color: '#94d6da',
                    width: 2,
                    curveness: 0.01,
                    opacity: 0.8,
                    type: 'dashed',
                }
            },
            source: i,
            target: i + 1
        });
    }


    ldatas.push({

        lineStyle: {
            normal: {
                color: '#94d6da',
                type: 'dashed',
                width: 2,
                curveness: 0.01,
                opacity: 0.8
            }
        },
        source: (i - 1),
        target: 0
    });

    return ldatas;
}
option = {
    backgroundColor: '#000',
    title: {
        text: '月相',
        textStyle: {
            color: '#fff',
        },
        subtext: `农历：${lunar.lYear}、${lunar.lMonth}、${lunar.lDay}\n\n人有悲欢离合 月有阴晴圆缺`,
        subtextStyle:{
            color:'#eee',
        },
        top: '10%',
        left: '10%'
    },

    series: [

        {
            name: '太阳',
            type: 'graph',

            symbol: 'circle',
            symbolSize: 60,
            top: '12%',
            left: '6%',
            width: '300',
            height: '300',
            data: roundDatas(1, 1, '太阳'),
            links: linkDatas(0)
        },

        {
            name: '地球',
            type: 'graph',

            symbol: 'circle',
            symbolSize: 50,
            top: '20%',
            left: '40%',
            width: '300',
            height: '300',
            data: roundDatas(1, 1, '地球'),
            links: linkDatas(0)
        }, {
            name: '月',
            type: 'graph',

            edgeSymbol: ['', 'arrow'],
            edgeSymbolSize: [3, 8],
            symbol: 'circle',
            symbolSize: 1,
            top: '20%',
            left: '40%',
            width: '300',
            height: '300',
            data: roundDatas(30, 12, 'm'),
            links: linkDatas(30)
        }
    ]
};

// setInterval(function() {
//     myChart.setOption(option)
//     if (d1 < 9) {
//         day = d1 + 21
//     } else {
//         day = d1 - 9
//     }
//     for (var j = 0; j < 30; j++) {
//         option.series[2].data[j].symbolSize = 1;
//         option.series[2].data[j].symbol = '';
//         option.series[2].data[j].label = {
//             normal: {
//                 show: false,
//                 formatter: label,
//                 fontSize: 16,
//                 color: '#fff',
//                 position: 'top'
//             }
//         }
//     }
//     option.series[2].data[day].symbolSize = 30;
//     option.series[2].data[day].symbol = 'image://' + moons[d1 - 1];
//     option.series[2].data[day].label = {
//         normal: {
//             show: true,
//             formatter: label,
//             fontSize: 16,
//             color: '#fff',
//             position: 'top'
//         }
//     }

//     d1++;
//     if (d1 > 30) {
//         d1 = 1;
//     }

// }, 1000)
