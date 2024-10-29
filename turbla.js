document.addEventListener('DOMContentLoaded', () => {
    // Product data array containing multiple products
    const products = [
        {
            id: 1,
            name: "TURMERIC (CURCUMA LONGA)",
            details: "Turmeric Specifications",
            image: "turmeric.jpeg", 
            origin: "India (Andhra Pradesh, Telangana, Tamil Nadu, Maharashtra, Odisha)",
            qualitySpecifications: {
                Color: "Deep orange-yellow",
                "Moisture Content ": "10-12% max",
                "Curcumin Content ": "2-5% (depending on the variety)",
                "Foreign Matter ": "0.5% max",
                "Total Ash ": "7% max",
                "Acid Insoluble Ash ": "1.5% max",
                "Volatile Oil ": "3.5% min",
                "Extraneous Matter ": "0.5% max"
            },
            packagingOptions: [
                // "Jute Bag",
                // "PP Bag",
                // "BOPP Bag",
                // "Non-woven Bag",
                // "Custom packaging as per buyer's choice"
            ],
            keyFeatures: [
                "Aroma: Warm, earthy, and slightly bitter",
                "Texture: Fine powder or whole dried rhizomes",
                "Grain Type: Long-grain",
                "Nutritional Benefits: Rich in antioxidants, particularly curcumin, which has anti-inflammatory properties",
                
            ],
            culinaryUses: "Widely used as a spice in curries, soups, and stews Used as a natural food coloring agent Essential ingredient in traditional Indian and Southeast Asian cuisines.",
            IndurstrialUses: "Used in the production of cosmetics and skincare products Utilized in the pharmaceutical industry for its medicinal properties Employed in the dyeing industry for its vibrant color",
            shipment: `Inspection: SGS or any other agency as per your requirement for weight and quality.<br>
            Packing: Standard in 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.<br>
            Mode of Payment: TT, LC<br>
            Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of confirmed purchase order and receipt of advance.<br>
            Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the customer to their port of choice.<br><br>`
        },
        {
            id: 2,
            name: "BLACK PEPPER (PIPER NIGRUM)",
            details: "Black Pepper Specifications ",
            image: "pepper.jpeg", 
            origin: "India (Kerala, Karnataka, Tamil Nadu)",
            qualitySpecifications: {
                color : "Dark brown to black",
                "Moisture Content ": "12% max",
                "Piperine Content ": "4-9%",
                "Foreign Matter ": "0.5% max",
                "Total Ash": "6.5% max",
                "Acid Insoluble Ash ": "1.0% max",
                "Volatile Oil ": "2% min",
                "Extraneous Matter ": "0.5% max",
            },
            
            keyFeatures: [
                "Aroma: Strong, pungent fragrance",
                "Texture: Whole dried peppercorns or ground powder",
                "Grain Type: Medium-grain",
                "Nutritional Benefits: Rich in antioxidants, vitamins (K, C), and minerals (iron, manganese)",
                "Health Benefits: Supports digestion, boosts metabolism, has anti-inflammatory properties",
                
            ],
            shipment: `Inspection: SGS or any other agency as per your requirement for weight and quality.<br>
            Packing: Standard in 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.<br>
            Mode of Payment: TT, LC<br>
            Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of confirmed purchase order and receipt of advance.<br>
            Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the customer to their port of choice.<br><br>`
            // culinaryUses: "Ideal for South Indian dishes like idli, dosa, and daily meals."
        },
        
    ];

    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Find the product by its ID
    const product = products.find(p => p.id === productId);

    if (product) {
        // Populate product data into the template
       
        document.querySelector('.product-name-2').textContent = product.name;
        document.querySelector('.product-details').textContent = product.details;
        


        document.getElementById("product-image").src = product.image;
        document.querySelector('.origin').textContent = product.origin;

        const qualitySpecsList = document.querySelector('.quality-specifications');
        qualitySpecsList.innerHTML = '';  // Clear any previous content
        Object.keys(product.qualitySpecifications).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.qualitySpecifications[spec]}`;
            qualitySpecsList.appendChild(listItem);
        });

       
       

        const keyFeaturesList = document.querySelector('.key-features');
        keyFeaturesList.innerHTML = '';  // Clear any previous content
        product.keyFeatures.forEach(feature => {
            const listItem = document.createElement('li');
            listItem.textContent = feature;
            keyFeaturesList.appendChild(listItem);
        });

        document.querySelector('.culinary-uses').textContent = product.culinaryUses;
        document.querySelector('.Indurstrial-Uses').textContent = product.IndurstrialUses;
        document.querySelector('.shipment').innerHTML = product.shipment;
    }
});
