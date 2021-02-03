ymaps.ready(init);
    
function init() {
        var myMap = new ymaps.Map("map", {
            center: [59.94727933529815,30.31857960489242],
            zoom: 11
        });

        var myPlacemark1 = new ymaps.Placemark([59.989729205041854,30.266903090982712], {
            iconContent: 'Первый'
        }, {
            preset: 'islands#darkOrangeStretchyIcon'
        });

        myMap.geoObjects.add(myPlacemark1);

        var myPlacemark2 = new ymaps.Placemark([59.91565241058324,30.494278694826146], {
            iconContent: 'Второй'
        }, {
            preset: 'islands#darkOrangeStretchyIcon'
        });

        myMap.geoObjects.add(myPlacemark2);

        var myPlacemark3 = new ymaps.Placemark([59.94524562108685,30.38264612248942], {
            iconContent: 'Третий'
        }, {
            preset: 'islands#darkOrangeStretchyIcon'
        });

        myMap.geoObjects.add(myPlacemark3);

        // var myPlacemark4 = new ymaps.Placemark([59.88895709324912,30.316041508231613], {}, {
        //   iconLayout: 'default#image',
        //   iconImageHref: '/img/icons/map-marker.svg',
        //   iconImageSize: [46, 57],
        //   iconImageOffset: [-23, -57]
        // });

        // myMap.geoObjects.add(myPlacemark4);
}