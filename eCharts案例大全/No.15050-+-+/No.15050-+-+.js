var uploadedDataURL = "/asset/get/s/data-1499305663708-ryOT8GsE-.json";

$.getJSON(uploadedDataURL, function(myJson) {
    
    echarts.registerMap('Singapore', myJson);
    
    var data = [{
        name: 'ANG MO KIO',
        value_0: 95905,
        value_1: 97718,
        value_2: 102846
    },
    {
        name: 'BEDOK',
        value_0: 142284,
        value_1: 145213,
        value_2: 152577
    },
    {
        name: 'BISHAN',
        value_0: 46450,
        value_1: 47810,
        value_2: 50074
    },
    {
        name: 'BOON LAY',
        value_0: 2091,
        value_1: 2096,
        value_2: 2159
    },
    {
        name: 'BUKIT BATOK',
        value_0: 75059,
        value_1: 76303,
        value_2: 79855
    },
    {
        name: 'BUKIT MERAH',
        value_0: 98208,
        value_1: 99778,
        value_2: 105413
    },
    {
        name: 'BUKIT PANJANG',
        value_0: 61145,
        value_1: 62378,
        value_2: 65550
    },
    {
        name: 'BUKIT TIMAH',
        value_0: 30966,
        value_1: 32621,
        value_2: 33940
    },
    {
        name: 'GEYLANG',
        value_0: 81438,
        value_1: 82504,
        value_2: 86647
    },
    {
        name: 'KALLANG',
        value_0: 55590,
        value_1: 56445,
        value_2: 59107
    },
    {
        name: 'NOVENA',
        value_0: 27924,
        value_1: 28664,
        value_2: 29993
    },
    {
        name: 'PASIR RIS',
        value_0: 75620,
        value_1: 77213,
        value_2: 82362
    },
    {
        name: 'HOUGANG',
        value_0: 111605,
        value_1: 113850,
        value_2: 119523
    },
    {
        name: 'JURONG EAST',
        value_0: 47285,
        value_1: 47958,
        value_2: 50435
    },
    {
        name: 'LIM CHU KANG',
        value_0: 86,
        value_1: 87,
        value_2: 90
    },
    {
        name: 'MANDAI',
        value_0: 901,
        value_1: 922,
        value_2: 986
    },
    {
        name: 'MARINE PARADE',
        value_0: 34444,
        value_1: 35179,
        value_2: 36445
    },
    {
        name: 'NORTH-EASTERN ISLANDS',
        value_0: 8,
        value_1: 9,
        value_2: 9
    },
    {
        name: 'PIONEER',
        value_0: 5425,
        value_1: 5436,
        value_2: 5647
    },
    {
        name: 'JURONG WEST',
        value_0: 150343,
        value_1: 152377,
        value_2: 160048
    },
    {
        name: 'PAYA LEBAR',
        value_0: 603,
        value_1: 603,
        value_2: 642
    },
    {
        name: 'PUNGGOL',
        value_0: 40230,
        value_1: 41135,
        value_2: 43868
    },
    {
        name: 'QUEENSTOWN',
        value_0: 47768,
        value_1: 48696,
        value_2: 51225
    },
    {
        name: 'SELETAR',
        value_0: 228,
        value_1: 239,
        value_2: 243
    },
    {
        name: 'SEMBAWANG',
        value_0: 42396,
        value_1: 43138,
        value_2: 45823
    },
    {
        name: 'SENGKANG',
        value_0: 94010,
        value_1: 95842,
        value_2: 101354
    },
    {
        name: 'SERANGOON',
        value_0: 64963,
        value_1: 66818,
        value_2: 69960
    },
    {
        name: 'CENTRAL WATER CATCHMENT',
        value_0: 76,
        value_1: 77,
        value_2: 77
    },
    {
        name: 'CHANGI',
        value_0: 2462,
        value_1: 2487,
        value_2: 2789
    },
    {
        name: 'SUNGEI KADUT',
        value_0: 2023,
        value_1: 2033,
        value_2: 2254
    },
    {
        name: 'TAMPINES',
        value_0: 135510,
        value_1: 138067,
        value_2: 146130
    },
    {
        name: 'DOWNTOWN CORE',
        value_0: 7707,
        value_1: 7855,
        value_2: 8280
    },
    {
        name: 'TANGLIN',
        value_0: 8499,
        value_1: 9022,
        value_2: 9301
    },
    {
        name: 'TENGAH',
        value_0: 14,
        value_1: 14,
        value_2: 14
    },
    {
        name: 'TOA PAYOH',
        value_0: 65672,
        value_1: 66869,
        value_2: 70343
    },
    {
        name: 'MARINA EAST',
        value_0: 2,
        value_1: 2,
        value_2: 2
    },
    {
        name: 'WOODLANDS',
        value_0: 115714,
        value_1: 117445,
        value_2: 124503
    },
    {
        name: 'MARINA SOUTH',
        value_0: 5,
        value_1: 5,
        value_2: 5
    },
    {
        name: 'MUSEUM',
        value_0: 377,
        value_1: 395,
        value_2: 399
    },
    {
        name: 'NEWTON',
        value_0: 2901,
        value_1: 3132,
        value_2: 3177
    },
    {
        name: 'CHANGI BAY',
        value_0: 0,
        value_1: 0,
        value_2: 0
    },
    {
        name: 'CHOA CHU KANG',
        value_0: 87715,
        value_1: 89174,
        value_2: 94075
    },
    {
        name: 'CLEMENTI',
        value_0: 45844,
        value_1: 46917,
        value_2: 49001
    },
    {
        name: 'SINGAPORE RIVER',
        value_0: 1700,
        value_1: 1764,
        value_2: 1846
    },
    {
        name: 'STRAITS VIEW',
        value_0: 5,
        value_1: 5,
        value_2: 5
    },
    {
        name: 'SIMPANG',
        value_0: 36,
        value_1: 36,
        value_2: 36
    },
    {
        name: 'SOUTHERN ISLANDS',
        value_0: 381,
        value_1: 401,
        value_2: 440
    },
    {
        name: 'TUAS',
        value_0: 6068,
        value_1: 6081,
        value_2: 6295
    },
    {
        name: 'WESTERN ISLANDS',
        value_0: 187,
        value_1: 189,
        value_2: 201
    },
    {
        name: 'WESTERN WATER CATCHMENT',
        value_0: 1333,
        value_1: 1357,
        value_2: 1440
    },
    {
        name: 'YISHUN',
        value_0: 94409,
        value_1: 95844,
        value_2: 101242
    },
    {
        name: 'ORCHARD',
        value_0: 1364,
        value_1: 1430,
        value_2: 1528
    },
    {
        name: 'OUTRAM',
        value_0: 20887,
        value_1: 21182,
        value_2: 22832
    },
    {
        name: 'RIVER VALLEY',
        value_0: 6136,
        value_1: 6587,
        value_2: 6770
    },
    {
        name: 'ROCHOR',
        value_0: 10735,
        value_1: 10854,
        value_2: 11594
    }]
    
    var resultdata0 = []
    var resultdata1 = [];
    var resultdata2 = [];
    var resultdata3 = [];
    var resultdata4 = [];
    var categoryData = [];
    var emailSum = 0;
    var smsSum = 0;
    
    for (var i = 0; i < data.length; i++) {
     var d0 = {
        name: data[i].name,
        value: data[i].value_0
    };
    var d1 = {
        name: data[i].name,
        value: data[i].value_1
    };
    var d2 = {
        name: data[i].name,
        value: data[i].value_2
    };
    resultdata0.push(d0);
    resultdata1.push(d1);
    resultdata2.push(d2);
    emailSum += data[i].value_1;
    smsSum += data[i].value_2;
    }
    
    function NumDescSort(a,b){
    return a.value-b.value;
    }

    resultdata0.sort(NumDescSort);
    resultdata1.sort(NumDescSort);
    resultdata2.sort(NumDescSort);
    
    for(var j = 0; j < 55; j++) {
        categoryData.push(resultdata1[j].name);
    }
    
    option = {
        title : {
            text: 'Email/SMS Subscription',
            left: 'right'
        },
        legend: {
            orient: 'horizontal',
            left: 'left',
            selectedMode: 'single',
            data: ['emailsub & smssub','emailsub','smssub']
        },
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            min: 0,
            max:250000,
            orient: 'horizontal',
            left: 'center',
            top: 'top',
            calculable: true,
            dimension: 0
        },
        grid: {
            left: 800,
            right: 40,
            top: '10%',
            bottom: 5
        },
        xAxis: [{
          position: 'top',
          type: 'value',
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
        }],
        yAxis: [{
          type: 'category',
          data: categoryData,
          axisTick: {
            alignWithLabel: true
          }
        }],
        series: [{
                name: 'emailsub & smssub',
                type: 'map',
                map: 'Singapore',
                left: 100,
                top: '10%',
                width: 580,
                height:380,
                itemStyle:{
                    normal:{label:{show:false}},
                    emphasis:{label:{show:false}}
                },
                data: resultdata0
        },{
                name: 'emailsub',
                type: 'map',
                map: 'Singapore',
                left: 100,
                top: '10%',
                width: 580,
                height:380,
                itemStyle:{
                    normal:{label:{show:false}},
                    emphasis:{label:{show:false}}
                },
                data: resultdata1
        },
        {
                name: 'smssub',
                type: 'map',
                map: 'Singapore',
                left: 'center',
                top: '15%',
                width: '70%',
                height:'55%',
                itemStyle:{
                    normal:{label:{show:false}},
                    emphasis:{label:{show:false}}
                },
                data: resultdata2
        },
        {
        name: 'emailsub',
        type: 'pie',
        selectedMode: 'single',
        radius: ['17%', '25%'],
        center: [220,530],
        label: {
            normal: {
                position: 'outside',
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 2040214,
            name: 'Y'
        }, {
            value: 100936,
            name: 'N'
        }, {
            value: 83517,
            name: 'NULL'
        }]
    },
    {
        name: 'smssub',
        type: 'pie',
        selectedMode: 'single',
        radius: ['17%', '25%'],
        center: [220,530],
        label: {
            normal: {
                position: 'outside',
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 2147989,
            name: 'Y'
        }, {
            value: 0,
            name: 'N'
        }, {
            value: 76678,
            name: 'NULL'
        }]
    },
    {
        type: 'pie',
        selectedMode: 'single',
        radius: ['17%', '25%'],
        center: [500,530],
        label: {
            normal: {
                position: 'outside',
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 2254656,
            name: 'Valid'
        },
        {
            value: 18388,
            name: 'Invalid'
        }]
    },
    {
            name: 'emailsub & smssub',
            z: 2,
            type: 'bar',
            label: {
            normal: {
                show: true,
                position: 'right'
              },
            emphasis: {
                show: true,
              }
          },
          itemStyle: {
            emphasis: {
                color: "rgb(254,153,78)"
            }
        },
            data: resultdata0
    },
    {
            name: 'emailsub',
            z: 2,
            type: 'bar',
            label: {
            normal: {
                show: true,
                position: 'right'
              },
            emphasis: {
                show: true,
              }
          },
          itemStyle: {
            emphasis: {
                color: "rgb(254,153,78)"
            }
        },
            data: resultdata1
        },
        {
            name: 'smssub',
            z: 2,
            type: 'bar',
            label: {
            normal: {
                show: true,
                position: 'right'
              },
            emphasis: {
                show: true,
              }
          },
          itemStyle: {
            emphasis: {
                color: "rgb(254,153,78)"
            }
        },
            data: resultdata2
        }]
    };
    myChart.setOption(option);
});
