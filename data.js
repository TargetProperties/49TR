var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.14070218157159964,
        "pitch": -0.36482103152301093,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.14373251687780986,
          "pitch": -0.10260989630643813,
          "rotation": 0,
          "target": "1-g-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-g-floor",
      "name": "G Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.6903196463335384,
        "pitch": 0.30135434283167584,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.4353681185612253,
          "pitch": 0.4656739859774639,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 1.7722943848902055,
          "pitch": 0.6678994020515283,
          "rotation": 5.497787143782138,
          "target": "2-g-staircase"
        },
        {
          "yaw": 1.369148586490848,
          "pitch": 0.9013197504985868,
          "rotation": 10.995574287564278,
          "target": "10-bedroom-1"
        },
        {
          "yaw": 1.726199365439812,
          "pitch": 0.3837828666319716,
          "rotation": 5.497787143782138,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-g-staircase",
      "name": "G Staircase",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.698427278333206,
        "pitch": 0.06946036132894662,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.055615082865872,
          "pitch": 0.5200697990034637,
          "rotation": 5.497787143782138,
          "target": "3-living-room"
        },
        {
          "yaw": -0.15412171598198654,
          "pitch": -0.3881154225686956,
          "rotation": 0,
          "target": "11-i-floor"
        },
        {
          "yaw": -1.7168726106477745,
          "pitch": 0.560599176062194,
          "rotation": 0,
          "target": "1-g-floor"
        },
        {
          "yaw": -1.2442345478937114,
          "pitch": 0.6315190293314785,
          "rotation": 0.7853981633974483,
          "target": "10-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.2810897528553156,
        "pitch": 0.3337911268240372,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.9786544754050652,
          "pitch": 0.49394393986760754,
          "rotation": 6.283185307179586,
          "target": "4-backyard"
        },
        {
          "yaw": 0.8538436352136998,
          "pitch": 0.6473600616379382,
          "rotation": 0.7853981633974483,
          "target": "2-g-staircase"
        },
        {
          "yaw": 2.261724973903859,
          "pitch": 0.6251004040054582,
          "rotation": 5.497787143782138,
          "target": "5-stairs-to-lg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-backyard",
      "name": "Backyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6996574998542506,
          "pitch": 0.26167075965612696,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stairs-to-lg",
      "name": "Stairs to LG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.9140714788607962,
        "pitch": 0.6203151105079847,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.4847726450796799,
          "pitch": 0.45735940950422993,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": 1.6163109923173469,
          "pitch": 0.9546360338143369,
          "rotation": 0,
          "target": "7-lower-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom-1",
      "name": "Bathroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -3.0735674182065633,
        "pitch": 0.7710934089598567,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.9770690706087937,
          "pitch": 0.7689127523748631,
          "rotation": 0,
          "target": "7-lower-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-lower-ground",
      "name": "Lower Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.420748122026783,
        "pitch": 0.20254641120326333,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.5224961638665295,
          "pitch": 0.5597906926663114,
          "rotation": 6.283185307179586,
          "target": "9-kitchen"
        },
        {
          "yaw": -2.8322432987515587,
          "pitch": 0.44086978327271886,
          "rotation": 6.283185307179586,
          "target": "6-bathroom-1"
        },
        {
          "yaw": -1.8874057515771216,
          "pitch": 0.5018410026663158,
          "rotation": 0,
          "target": "8-utility-room"
        },
        {
          "yaw": 2.7180406544450335,
          "pitch": -0.22885022437263203,
          "rotation": 0.7853981633974483,
          "target": "5-stairs-to-lg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-utility-room",
      "name": "Utility Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.5804634493302032,
        "pitch": 0.7771680305131241,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.3284443895717555,
          "pitch": 0.7790853711077741,
          "rotation": 0,
          "target": "7-lower-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.12251640811899911,
        "pitch": 0.301026022824189,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.937230478938205,
          "pitch": 0.5323084671010534,
          "rotation": 0,
          "target": "7-lower-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.511443134511822,
        "pitch": 0.3999744420210547,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.227853085935849,
          "pitch": 0.4528601798219434,
          "rotation": 0.7853981633974483,
          "target": "1-g-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.3062703474702158,
        "pitch": 0.5297426543979196,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -3.0428368388069806,
          "pitch": 0.4506671504734818,
          "rotation": 0,
          "target": "13-bedroom-2"
        },
        {
          "yaw": 0.16385639953707098,
          "pitch": 0.5092551392518452,
          "rotation": 6.283185307179586,
          "target": "12-bathroom-2"
        },
        {
          "yaw": 0.5733500133258751,
          "pitch": 0.38740946480606553,
          "rotation": 0.7853981633974483,
          "target": "14-bedroom-3"
        },
        {
          "yaw": 1.1743624424652097,
          "pitch": -0.08844657382398857,
          "rotation": 0.7853981633974483,
          "target": "16-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bathroom-2",
      "name": "Bathroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.4878804420809395,
        "pitch": 1.436240131286965,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.558124720669829,
          "pitch": 1.0864743171218763,
          "rotation": 0,
          "target": "11-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.2727816192787333,
        "pitch": 0.6779505284470062,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.0509500635905749,
          "pitch": 0.41517351308967676,
          "rotation": 0,
          "target": "11-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.9333405621429485,
        "pitch": 0.14591375299743703,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.7434243096009681,
          "pitch": 0.7298786945112141,
          "rotation": 0.7853981633974483,
          "target": "15-storage---bedroom-3"
        },
        {
          "yaw": 2.788566655700521,
          "pitch": 0.7412616164273533,
          "rotation": 0.7853981633974483,
          "target": "11-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-storage---bedroom-3",
      "name": "Storage - Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.8146793739684508,
        "pitch": 0.16548472719384044,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.8886120509267803,
          "pitch": 1.0030614975593313,
          "rotation": 0,
          "target": "14-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-ii-floor",
      "name": "II Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.7217698449642924,
        "pitch": 1.1319055843413413,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.6431971669570196,
          "pitch": 1.161093509017272,
          "rotation": 7.0685834705770345,
          "target": "18-bedroom-5"
        },
        {
          "yaw": 0.9556474671789097,
          "pitch": 1.2284014345438834,
          "rotation": 5.497787143782138,
          "target": "17-bedroom-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bedroom-4",
      "name": "Bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.9428627997677204,
        "pitch": 0.3045912385705041,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.9211305860002028,
          "pitch": 0.42767820932096257,
          "rotation": 0,
          "target": "16-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bedroom-5",
      "name": "Bedroom 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.3935909628118086,
        "pitch": 0.037368524315144924,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.8292536638578465,
          "pitch": 0.5881196557493666,
          "rotation": 6.283185307179586,
          "target": "16-ii-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "49 Thornville Road",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
