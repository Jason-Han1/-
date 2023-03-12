
var builderJson = {
  "all": 200,
  "yName":["1月","2月","3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月"],
  "data0":[185.77, 186.92, 188.37, 190.02, 190.94, 192.37,193.46,195.24,197.27,197.89, 199.3],//总存量
  "data1":[121.7, 122.72, 123.86, 124.96, 126.1,127.78,129.07,130.38,131.81,132.53,133.76],//人民币贷款
  "data2":[2.46, 2.46, 2.46, 2.48, 2.49, 2.53,2.52,2.49,2.45,2.40, 2.31],//外币贷款
  "data3":[13.89, 13.82, 13.63, 13.49, 13.33,13.17,13.07,12.95,12.81,12.71, 12.58],//委托贷款
  "data4":[8.59, 8.65, 8.62, 8.61, 8.52, 8.35, 8.23,8.17,8.08,7.95,7.9],//信托贷款
  "data5":[4.58, 4.59, 4.56, 4.71, 4.53, 4.17, 3.89,3.82,3.76,3.72,3.7],//未贴现银行承兑汇票
  "data6":[18.51, 18.58, 18.87, 19.18, 19.14, 19.19, 19.26,19.51,19.45,19.51,19.79],//企业债券
  "data7":[6.7, 6.74, 6.78, 6.83, 6.87, 6.9, 6.92, 6.93, 6.96, 6.97, 7],//非金融企业境内股票融资
  "data8":[5.48, 5.49, 5.56, 5.64, 5.74, 5.84, 6.03, 6.44, 7.18, 7.23],//地方政府专项债
  "rate0":[12.7, 12.7, 11.9, 11.9, 11.6, 11.1, 10.8, 10.8, 10.6, 10.2, 9.9],//总存量
  "rate1":[13.2, 13.1, 12.9, 12.8, 12.6, 12.7, 12.9, 12.9, 13.0, 13.0, 12.9],//人民币贷款
  "rate2":[-6, -7.2, -8.6, -6.9, -5.9, -3.4, -2.0, -0.1, -1.6, -3.5, -7.3],//外币贷款
  "rate3":[2.9, 1.4, -1.4, -2.4, -3.4, -4.6, -5.4, -6.2, -7.7, -8.4, -9.6],//委托贷款
  "rate4":[30.2, 29.1, 22.9, 20.2, 16, 10.1, 6.8, 4.4, 0.2, -2.6, -4.9],//信托贷款
  "rate5":[1.5, 5.8, -0.4, 2, 0.9, -6.7, -8.7, -11, -13.9, -15, -15.3],//未贴现银行承兑汇票
  "rate6":[3.4, 4.3, 5.7, 7.1, 8.3, 8.6, 7.7, 8.2, 7.0, 6.6, 7.6],//企业债券
  "rate7":[13.6, 13.2, 12.3, 11.8, 11.7, 11.2, 10.5, 9.6, 9.2, 8.3, 6.5],//非金融企业境内股票融资
  "rate8":[57.3, 57.6, 51.6, 45.8, 41.3, 37.1, 31.2, 34.5, 42.5, 40.5, 34]//地方债增长率
};
var currentMonthIdx = 10;
var pie0 = [
    {name:"人民币贷款",value:builderJson.data1[currentMonthIdx]},
    {name:"外币贷款",value:builderJson.data2[currentMonthIdx]},
    {name:"委托贷款",value:builderJson.data3[currentMonthIdx]},
    {name:"信托贷款",value:builderJson.data4[currentMonthIdx]},
    {name:"未贴现银行承兑汇票",value:builderJson.data5[currentMonthIdx]},
    {name:"企业债券",value:builderJson.data6[currentMonthIdx]},
    {name:"地方政府专项债券",value:builderJson.data8[currentMonthIdx]},
    {name:"非金融企业境内股票融资",value:builderJson.data7[currentMonthIdx]}
    
];

var title = "2018年11月社会融资规模存量占比";
var waterMarkText = '新华财经';
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = canvas.height = 100;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.globalAlpha = 0.08;
ctx.font = '20px Microsoft Yahei';
ctx.translate(50, 50);
ctx.rotate(-Math.PI / 4);
ctx.fillText(waterMarkText, 0, 0);
option = {
    backgroundColor: {
        type: 'pattern',
        image: canvas,
        repeat: 'repeat'
    },
    color:['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C','#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF']
    ,toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c}万亿 ({d}%)"
    },
    legend: {
        //x: '25%',
        y: '7%',
        data:['人民币贷款', '外币贷款', '委托贷款', '信托贷款', '未贴现银行承兑汇票', 
        '企业债券', '地方政府专项债券','非金融企业境内股票融资']
    },
    title: [{
        text: '2018年11月社会融资规模存量占比',
        x: '50%',
        //y: '5%',
        textAlign: 'center'
    }],
    series: [{
        center: ['53%', '50%'],
        name: "11月社融存量占比",
        type: 'pie',
        radius: ['40%', '60%'],
        startAngle:120,
        data: pie0,
        label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c|{c}万亿}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#000',
                            lineHeight: 22,
                            align: 'center'
                        },
                        //abg: {
                        //     //backgroundColor: '#333',
                        //     color: '#37A2DA',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            color: '#37A2DA',
                            fontSize: 16,
                            lineHeight: 33
                        },
                        c: {
                            color: '#37A2DA',
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
    }]
}