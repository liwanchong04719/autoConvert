//定义mapbox底图
import { appConfig } from './config';
export const maplayer = {
  simple: {
    "version": 8,
    "name": "Bright",
    "sources": {
      "ProvincialPoint":{
        "tiles": [
          appConfig.developUrl+"monitor/pbf/midpoint/{z}/{x}/{y}"
        ],
        "type": "vector"
      }
    },
   // "glyphs": appConfig.webLocation+"/static/map/{fontstack}/{range}.pbf",
   "glyphs":"http://minedata.cn/minemapapi/v1.3/fonts/{fontstack}/{range}.pbf",
    "sprite": appConfig.webLocation+"/static/map/sprite/sprite",
    "layers": [
      {
        "id": "background",
        "maxzoom": 18.0,
        "source": "",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "background-color": "#112138"
        },
        "source-layer": "",
        "minzoom": 3.0,
        "type": "background"
      },
      {
        id: 'ProvincialPoint_name',
        type: 'symbol',
        interactive: true,
        "source" : "ProvincialPoint",
        'source-layer': 'poi',
        layout:{
            'icon-image': 'circle-brown-11',
            "text-field": "{provinceName}",
            "text-offset":[0,1],
            'text-size':12,
            "text-justify": "center",
            "visibility": "visible",
            "icon-allow-overlap":true,
            "icon-ignore-placement":true,
            "text-allow-overlap":true,
            "icon-padding":0,
            "text-padding":0
          },
        paint: {
            "text-color": "#ffffff"
          }
      }
    ]
  }
}
