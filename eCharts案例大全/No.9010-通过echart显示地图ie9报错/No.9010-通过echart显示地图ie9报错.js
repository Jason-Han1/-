option = {
  'tooltip': {
    'trigger': 'item',
    'transitionDuration': 0,
    'show': true,
    // alwaysShowContent:true,   //鼠标离开区域不消失
    'triggerOn': 'none',
    'textStyle': {
      'fontSize': 10,
    },
  },
  'animation': false,
  'bmap': {
    'center': [117.30, 31.87],
    'zoom': 12,
    'roam': false,
    'enableMapClick': false,
    'mapStyle': {
      'styleJson': [
        {
          'featureType': 'land',
          'elementType': 'geometry',
          'stylers': {
            'color': '#ffffff',
          },
        }, {
          'featureType': 'subway',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#f4f4f6',
          },
        },
        {
          'featureType': 'building',
          'elementType': 'geometry',
          'stylers': {
            'color': '#f4f4f6',
          },
        },
        {
          'featureType': 'building',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
          },
        },
        {
          'featureType': 'highway',
          'elementType': 'geometry',
          'stylers': {
            'color': '#f4f4f6',
          },
        },
        {
          'featureType': 'highway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
          },
        },
        {
          'featureType': 'arterial',
          'elementType': 'geometry',
          'stylers': {
            'color': '#f4f4f6',
          },
        },
        {
          'featureType': 'arterial',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
          },
        },
        {
          'featureType': 'green',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
          },
        },
        {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': {
            'color': '#f4f4f6',
          },
        },

        {
          'featureType': 'railway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
          },
        },
        {
          'featureType': 'railway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
          },
        },
        {
          'featureType': 'all',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#ffffff',
          },
        },
        {
          'featureType': 'all',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#1890ff',
          },
        },
        {
          'featureType': 'manmade',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
          },
        },
        {
          'featureType': 'manmade',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
          },
        },
        {
          'featureType': 'local',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off',
          },
        },
        {
          'featureType': 'local',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off',
          },
        },

        {
          'featureType': 'railway',
          'elementType': 'all',
          'stylers': {
            'lightness': -40,
          },
        },
        {
          'featureType': 'boundary',
          'elementType': 'geometry',
          'stylers': {
            'color': '#8b8787',
            'weight': '1',
            'lightness': -29,
          },
        },
      ],
    },
  },
  'series': [
    {
      'type': 'effectScatter',
      'coordinateSystem': 'bmap',
      'symbolSize': 18,
      'data': [],
      'symbol': 'path://M512 1024C794.769792 1024 1024 794.769774 1024 512 1024 229.230226 794.769792 0 512 0 229.230208 0 0 229.230226 0 512 0 794.769774 229.230208 1024 512 1024L512 1024ZM512 950.857143C269.625893 950.857143 73.142857 754.374107 73.142857 512 73.142857 269.625893 269.625893 73.142857 512 73.142857 754.374107 73.142857 950.857143 269.625893 950.857143 512 950.857143 754.374107 754.374107 950.857143 512 950.857143ZM512 797.257143C669.543168 797.257143 797.257143 669.543168 797.257143 512 797.257143 354.456832 669.543168 226.742857 512 226.742857 354.456832 226.742857 226.742857 354.456832 226.742857 512 226.742857 669.543168 354.456832 797.257143 512 797.257143Z',
      'showEffectOn': 'emphasis',
      'silent': true,
      'rippleEffect': {
        'period': 2,
        'scale': 8,
      },
      'label': {
        'normal': {
          'position': 'right',
          'show': false,
          'textStyle': {
            'fontSize': 16,
            'color': 'white',
            'fontWeight': 'bold',
          },
        },
        'emphasis': {
          'show': false,
        },
      },
      'itemStyle': {
        'normal': {
          'color': '#0dcffe',
          'textStyle': {
            'color': '#5F9BFF',
          },
        },
        'emphasis': {
          'textStyle': {
            'color': '#5F9BFF',
          },
        },
      },
    },
  ],
};