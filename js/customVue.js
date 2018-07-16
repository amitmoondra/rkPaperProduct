var app = new Vue({
        el: '#app',
        data: {
          products: [
            {src: 'images/product/Carton/salus.png', name:'Cartons'},
            {src: 'images/product/Catalogue/hawkins.png', name:'Catalogue'},
            {src: 'images/product/Fabric Boxes/mafatlal upahar.png', name:'Fabric Boxes'},
            {src: 'images/product/Folding Carton/ixacoco.png', name:'Folding Carton'},
            {src: 'images/product/Gift Boxes/chocolate box new.png', name:'Gift Boxes'}, 
            {src: 'images/product/INSERT/ps leaflet.png', name:'Insert'},
            {src: 'images/product/Notebook/long book.png', name:'Notebooks'},
            {src: 'images/product/E-Flute/wipro.png', name:'E-Flute'},
        ],
        currentProductName: '',
        currentProducts: '',
        detailProducts: {
            'Cartons': [
                {src: 'images/product/Carton/salus.png', info: 'Salus'},
                {src: 'images/product/Carton/sst.png', info: 'SST'}
            ],
            'Catalogue': [
                {src: 'images/product/Catalogue/hawkins.png', info: 'Hawkin Cook book cover'}
            ],
            'Fabric Boxes': [
                {src: 'images/product/Fabric Boxes/mafatlal upahar.png', info: 'Boxes'},
                {src: 'images/product/Fabric Boxes/mafatlal red.png', info: 'Boxes'},
                {src: 'images/product/Fabric Boxes/mafatlal yellow.png', info: 'Boxes'},
                {src: 'images/product/Fabric Boxes/raymond 1.png', info: 'Boxes'},
                {src: 'images/product/Fabric Boxes/raymond 3.png', info: 'Boxes'},
                {src: 'images/product/Fabric Boxes/raymond box.png', info: 'Boxes'},
                {src: 'images/product/Fabric Boxes/raymond 4.png', info: 'Boxes'},
                {src: 'images/product/Fabric Boxes/mafat glitz.png', info: 'Boxes'},
            ],
            'Folding Carton': [
                {src: 'images/product/Folding Carton/ixacoco.png', info: 'IXACOCO'},
                {src: 'images/product/Folding Carton/boston.png', info: 'Boston'},
                {src: 'images/product/Folding Carton/ctz.png', info: 'Ctz'},
                {src: 'images/product/Folding Carton/jalebi.png', info: 'Jalebi'},
                {src: 'images/product/Folding Carton/pretty secret.png', info: 'Pretty Secret'},
                {src: 'images/product/Folding Carton/thermacell 2.png', info: 'Thermacell'}
            ],
            'Gift Boxes':[
                {src: 'images/product/Gift Boxes/chocolate box new.png', info: 'New Chocolate box'},
                {src: 'images/product/Gift Boxes/chocolate box.png', info: 'Chocolate Box'},
                {src: 'images/product/Gift Boxes/invesco.png', info: 'Invesco'},
                {src: 'images/product/Gift Boxes/papabubble Y.png', info: 'Papa Bubble Y'}
            ],
            'Insert': [
                {src: 'images/product/INSERT/ps leaflet.png', info: 'PS Leaflet'},
            ],
            'Notebooks': [
                {src: 'images/product/Notebook/long book.png', info: 'Long Book'},
                {src: 'images/product/Notebook/notebook 2.png', info: 'Notebook Sample'},
            ],
            'E-Flute': [
                {src: 'images/product/E-Flute/wipro.png', info: 'Wipro Smart Lite Classic'},
                {src: 'images/product/E-Flute/thermacell.png', info: 'Thermacell'},
                {src: 'images/product/E-Flute/park avenue.png', info: 'Park Avenue'},
            ],
        },
    },
    methods: {
        openModal: function (product) {
            $('#productModal').modal('show');
            this.currentProductName = product;
            this.currentProducts = this.detailProducts[product];
        }
    }
})
