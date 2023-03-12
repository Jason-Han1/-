option = {
    title: {
        text: '新型冠状病毒肺炎疫情地图',
        subtext: '累计确诊人数（截止至北京时间2020-06-09 08:30）',
        left: 'center',
        top: 'top'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            var value = params.value + '';
            return params.seriesName + '<br/>' + params.name + ' : ' + value+'人';
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    visualMap: {
        min: 0,
        max: 2200000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        color: ['orangered', 'yellow', 'lightskyblue']
    },
    series: [{
        name: '新型冠状病毒肺炎疫情地图',
        type: 'map',
        mapType: 'world',
        roam: true,
        itemStyle: {
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        data: [{
                name: 'United States',
                value: 2025441
            },
            {
                name: 'China',
                value: 84635
            },
            {
                name: 'Brazil',
                value: 691758
            },
            {
                name: 'Russia',
                value: 476043
            },
            {
                name: 'United Kingdom',
                value: 288827
            },
            {
                name: 'Spain',
                value: 288797
            },
            {
                name: 'India',
                value: 265869
            },
            {
                name: 'Italy',
                value: 235278
            },
            {
                name: 'Peru',
                value: 196515
            },
            {
                name: 'France',
                value: 191313
            },
            {
                name: 'Germany',
                value: 186109
            },
            {
                name: 'Iran',
                value: 173832
            },
            {
                name: 'Turkey',
                value: 171121
            },
            {
                name: 'Chile',
                value: 138846
            },
            {
                name: 'Mexico',
                value: 117103
            },
            {
                name: 'Saudi Arabia',
                value: 105283
            },
            {
                name: 'Pakistan',
                value: 103671
            },
            {
                name: 'Canada',
                value: 97498
            },
            {
                name: 'Qatar',
                value: 70158
            },
            {
                name: 'Bengal',
                value: 68504
            },
            {
                name: 'Belgium',
                value: 59348
            },
            {
                name: 'South Africa',
                value: 50879
            },
            {
                name: 'Belarus',
                value: 49453
            },
            {
                name: 'Netherlands',
                value: 47945
            },
            {
                name: 'Sweden',
                value: 45133
            },
            {
                name: 'Ecuador',
                value: 43378
            },
            {
                name: 'UAE',
                value: 39376
            },
            {
                name: 'Colombia',
                value: 39364
            },
            {
                name: 'Singapore',
                value: 38296
            },
            {
                name: 'Egypt',
                value: 35444
            },
            {
                name: 'Portugal',
                value: 34885
            },
            {
                name: 'Kuwait',
                value: 32510
            },
            {
                name: 'Indonesia',
                value: 32033
            },
            {
                name: 'Switzerland',
                value: 30972
            },
            {
                name: 'Ukraine',
                value: 28077
            },
            {
                name: 'Poland',
                value: 27160
            },
            {
                name: 'Ireland',
                value: 25207
            },
            {
                name: 'Argentina',
                value: 22794
            },
            {
                name: 'Philippines',
                value: 22474
            },
            {
                name: 'Afghanistan',
                value: 20917
            },
            {
                name: 'Romania',
                value: 20604
            },
            {
                name: 'Dominica',
                value: 20126
            },
            {
                name: 'Israel',
                value: 18032
            },
            {
                name: 'Oman',
                value: 17486
            },
            {
                name: 'Japan',
                value: 17060
            },
            {
                name: 'Austria',
                value: 16968
            },
            {
                name: 'Panama',
                value: 16425
            },
            {
                name: 'Bahrain',
                value: 15417
            },
            {
                name: 'Bolivia',
                value: 13643
            },
            {
                name: 'Iraq',
                value: 13481
            },
            {
                name: 'Armenia',
                value: 13325
            },
            {
                name: 'Kazakhstan',
                value: 12859
            },
            {
                name: 'Nigeria',
                value: 12486
            },
            {
                name: 'Denmark',
                value: 12162
            },
            {
                name: 'Serbia',
                value: 11896
            },
            {
                name: 'Korea',
                value: 11814
            },
            {
                name: 'Algeria',
                value: 10265
            },
            {
                name: 'Ghana',
                value: 9910
            },
            {
                name: 'Moldova',
                value: 9807
            },
            {
                name: 'Czech Republic',
                value: 9670
            },
            {
                name: 'Norway',
                value: 8561
            },
            {
                name: 'Malaysia',
                value: 8329
            },
            {
                name: 'Morocco',
                value: 8302
            },
            {
                name: 'Cameroon',
                value: 8060
            },
            {
                name: 'Azerbaijan',
                value: 7876
            },
            {
                name: 'Australia',
                value: 7265
            },
            {
                name: 'Guatemala',
                value: 7055
            },
            {
                name: 'Finland',
                value: 7001
            },
            {
                name: 'Honduras',
                value: 6327
            },
            {
                name: 'Sudan',
                value: 6081
            },
            {
                name: 'Tajikistan',
                value: 4609
            },
            {
                name: 'Uzbekistan',
                value: 4440
            },
            {
                name: 'Senegal',
                value: 4427
            },
            {
                name: 'Djibouti',
                value: 4278
            },
            {
                name: 'Guinea',
                value: 4117
            },
            {
                name: 'Congo (DRC)',
                value: 4106
            },
            {
                name: 'Luxembourg',
                value: 4040
            },
            {
                name: 'Hungary',
                value: 4014
            },
            {
                name: 'Ivory Coast',
                value: 3881
            },
            {
                name: 'Nepal',
                value: 3762
            },
            {
                name: 'Haiti',
                value: 3334
            },
            {
                name: 'North Macedonia',
                value: 3152
            },
            {
                name: 'Thailand',
                value: 3119
            },
            {
                name: 'Salvador',
                value: 3104
            },
            {
                name: 'Gabon',
                value: 3101
            },
            {
                name: 'Greece',
                value: 3049
            },
            {
                name: 'Kenya',
                value: 2872
            },
            {
                name: 'Bulgaria',
                value: 2727
            },
            {
                name: 'Bosnia and Herzegovina',
                value: 2704
            },
            {
                name: 'Venezuela',
                value: 2377
            },
            {
                name: 'Somalia',
                value: 2368
            },
            {
                name: 'Croatia',
                value: 2247
            },
            {
                name: 'Cuba',
                value: 2200
            },
            {
                name: 'Ethiopia',
                value: 2156
            },
            {
                name: 'Kyrgyzstan',
                value: 2032
            },
            {
                name: 'Estonia',
                value: 1940
            },
            {
                name: 'Maldives',
                value: 1916
            },
            {
                name: 'Sri Lanka',
                value: 1857
            },
            {
                name: 'Central African Republic',
                value: 1850
            },
            {
                name: 'Iceland',
                value: 1807
            },
            {
                name: 'Lithuania',
                value: 1720
            },
            {
                name: 'Mali',
                value: 1547
            },
            {
                name: 'Slovakia',
                value: 1530
            },
            {
                name: 'new Zealand',
                value: 1504
            },
            {
                name: 'Slovenia',
                value: 1485
            },
            {
                name: 'Guinea-Bissau',
                value: 1368
            },
            {
                name: 'Lebanon',
                value: 1350
            },
            {
                name: 'Costa rica',
                value: 1342
            },
            {
                name: 'Equatorial Guinea',
                value: 1306
            },
            {
                name: 'Albania',
                value: 1263
            },
            {
                name: 'Zambia',
                value: 1200
            },
            {
                name: 'Paraguay',
                value: 1145
            },
            {
                name: 'Nicaragua',
                value: 1118
            },
            {
                name: 'Madagascar',
                value: 1094
            },
            {
                name: 'Latvia',
                value: 1088
            },
            {
                name: 'Tunisia',
                value: 1087
            },
            {
                name: 'Mauritania',
                value: 1049
            },
            {
                name: 'Sierra Leone',
                value: 1001
            },
            {
                name: 'Niger',
                value: 973
            },
            {
                name: 'Cyprus',
                value: 970
            },
            {
                name: 'Burkina Faso',
                value: 890
            },
            {
                name: 'Andorra',
                value: 852
            },
            {
                name: 'Uruguay',
                value: 845
            },
            {
                name: 'Chad',
                value: 839
            },
            {
                name: 'Jordan',
                value: 831
            },
            {
                name: 'Georgia',
                value: 812
            },
            {
                name: 'Diamond Cruise',
                value: 712
            },
            {
                name: 'San Marino',
                value: 687
            },
            {
                name: 'Republic of Congo)',
                value: 683
            },
            {
                name: 'Uganda',
                value: 646
            },
            {
                name: 'Malta',
                value: 630
            },
            {
                name: 'Jamaica',
                value: 598
            },
            {
                name: 'Cape verde',
                value: 567
            },
            {
                name: 'Tanzania',
                value: 509
            },
            {
                name: 'Togo',
                value: 497
            },
            {
                name: 'Yemen',
                value: 484
            },
            {
                name: 'Palestine',
                value: 473
            },
            {
                name: 'Rwanda',
                value: 451
            },
            {
                name: 'Malawi',
                value: 443
            },
            {
                name: 'Mozambique',
                value: 433
            },
            {
                name: 'Liberia',
                value: 370
            },
            {
                name: 'Swaziland',
                value: 340
            },
            {
                name: 'Mauritius',
                value: 337
            },
            {
                name: 'Vietnam',
                value: 332
            },
            {
                name: 'Montenegro',
                value: 324
            },
            {
                name: 'Benin',
                value: 288
            },
            {
                name: 'Zimbabwe',
                value: 287
            },
            {
                name: 'Libya',
                value: 270
            },
            {
                name: 'Myanmar',
                value: 244
            },
            {
                name: 'Mongolia',
                value: 194
            },
            {
                name: 'Guyana',
                value: 154
            },
            {
                name: 'Syria',
                value: 144
            },
            {
                name: 'Brunei',
                value: 141
            },
            {
                name: 'Comoros',
                value: 141
            },
            {
                name: 'Suriname',
                value: 128
            },
            {
                name: 'Cambodia',
                value: 126
            },
            {
                name: 'Trinidad and Tobago',
                value: 117
            },
            {
                name: 'Bahamas',
                value: 103
            },
            {
                name: 'Monaco',
                value: 99
            },
            {
                name: 'Angola',
                value: 92
            },
            {
                name: 'Barbados',
                value: 92
            },
            {
                name: 'Burundi',
                value: 83
            },
            {
                name: 'Principality of Liechtenstein',
                value: 82
            },
            {
                name: 'Bhutan',
                value: 59
            },
            {
                name: 'Botswana',
                value: 42
            },
            {
                name: 'Eritrea',
                value: 39
            },
            {
                name: 'Martinique',
                value: 37
            },
            {
                name: 'Namibia',
                value: 31
            },
            {
                name: 'Gambia',
                value: 28
            },
            {
                name: 'Saint Vincent and the Grenadines',
                value: 27
            },
            {
                name: 'Antigua and Barbuda',
                value: 26
            },
            {
                name: 'East Timor',
                value: 24
            },
            {
                name: 'Grenada',
                value: 23
            },
            {
                name: 'Santa lucia',
                value: 19
            },
            {
                name: 'Laos',
                value: 19
            },
            {
                name: 'Belize',
                value: 19
            },
            {
                name: 'Dominica',
                value: 18
            },
            {
                name: 'Fiji',
                value: 18
            },
            {
                name: 'Saint Kitts and Nevis',
                value: 15
            },
            {
                name: 'Vatican',
                value: 12
            },
            {
                name: 'Seychelles',
                value: 11
            },
            {
                name: 'Papua New Guinea',
                value: 8
            },
            {
                name: 'Lesotho',
                value: 4
            }

        ]
    }]
};