<html>
  <head>
    <title>Map | IndoriGram</title>
    <script type="text/javascript">
      if('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('service-worker.js')
               .then(function() { console.log('Service Worker Registered'); });
      }
            function goBack() {
          window.history.back();
      }
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <script src="map.js"></script>
    <style>
      a.skiplink {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0;
        border: 0;
        height: 1px;
        width: 1px;
        overflow: hidden;
      }
      a.skiplink:focus {
        clip: auto;
        height: auto;
        width: auto;
        background-color: #fff;
        padding: 0.3em;
      }
      .map{
        width: 100%;
        height: 80%;
        margin-top: -30px;
      }
      #map:focus {
        outline: #4A74A8 solid 0.15em;
      }body{
        margin: 0px;
      }.pay-btn{
            width: 50%;
    float: left;
    border-radius: 0px;
      }
    </style>
  </head>
  <body>
    <div class="titlebar" style="background: #FFEC40;">
    <span class="btn-left" onclick="goBack()"> &larr;</span>
    <div class="header" style="font-variant: small-caps;font-weight: 800;">IndoriGram</div>
    <a href="https://www.instagram.com/indori_food_hipsters/">
      <div class="btn-right fa fa-instagram"></div>
    </a>

  </div><br><br><br><br><br>
    <a class="skiplink" href="#map">Go to map</a>
    <div id="map" class="map" tabindex="0"></div>
    <div style="position:fixed;width: 100%;"><button class="pay-btn" id="zoom-out">Zoom out</button>
    <button class="pay-btn" id="zoom-in">Zoom in</button></div>
    <script>
      var map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        target: 'map',
        controls: ol.control.defaults({
          attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
            collapsible: false
          })
        }),
        view: new ol.View({
          center: [21.412,77.124],
          zoom: 2
        })
      });

      document.getElementById('zoom-out').onclick = function() {
        var view = map.getView();
        var zoom = view.getZoom();
        view.setZoom(zoom - 1);
      };

      document.getElementById('zoom-in').onclick = function() {
        var view = map.getView();
        var zoom = view.getZoom();
        view.setZoom(zoom + 1);
      };
    </script>
  </body>
</html>