document.addEventListener('DOMContentLoaded', () => {
    // Product data array containing multiple products
    const products = [
        {
            id: 1,
            name: "potato ",
            image: "potato .png", 
            details: "POTATO SPECIFICATIONS",
            para2:`Botanical Name: Solanum tuberosum Family: Solanaceae Plant Description: Potato is a herbaceous perennial plant with a short stem and tufted leaves. The leaves are green above and pale green below, with a length of 30-40 cm and a width of 8-12 cm. The plant produces white, pink, or purple flowers and small, green fruits that contain seeds.


            Soil Requirements: Potatoes can be grown in a variety of soils, including alluvial, black, red, and laterite soils. The ideal pH range is 6.5-7.5, and the soil should have good drainage to prevent waterlogging1.


            Climate Requirements: Potatoes are a cool-season crop, with optimal growth temperatures between 15-20°C1
            . They require long daylight hours and moderate temperatures for tuber formation1
            . High temperatures can inhibit tuber development.

          Major Growing States: Potatoes are widely cultivated in the states of Uttar Pradesh, West Bengal, Bihar, Gujarat, Madhya Pradesh, and Punjab1.`,

          
            

            
            
            nutritional: {
                "Nutritional Value (per 100g edible portion)":"",
                Moisture: "78g",
                Protein: "2g",
                Fat: "0.1g",
                Fiber: "2.2g",
                Carbohydrates: "17g",
                Energy: "77 kcal",
                Calcium: "12mg",
                Phosphorus:" 50mg",
                Iron: "1.1mg",
                // "Vitamin A": "765 µg",
                "Vitamin C":" 20mg",

            
            } ,

           varieties: {
            "Early Maturing ": "Kufri Chandermukhi, Kufri Lauvkar, Kufri Pukhraj1",

            "Medium Maturing ": "Kufri Jyoti, Kufri Surya1",
                
            "Late Maturing":" Kufri Ashoka, Kufri Badshah1",
                
                // Kesar:" Saffron-colored flesh with a rich flavor, grown in Gujarat.",
                
                // Himsagar:" Medium-sized fruits with a sweet and aromatic flavor, grown in West Bengal.",
                        
                               
               
            } ,
            ProductSpecifications:{
                Commodity : "potato",
                Origin : "India "

            },
            QualitySpecifications : {
                Size : "  Medium to large tubers, 5-10 cm in diameter",
                Color : "BCreamy white, yellow, or red",
                Moisture : "75-80%",
                "Free from " : "Insects, pests, diseases, and foreign matter",


            },

            
                       
                   
            shipment: `Inspection: As per the buyer's requirement (e.g., SGS)<br><br>
            Packing: Standard in 5 Kg cartons or as per customer requirements Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 15 days from the date of receipt of confirmed purchase order & advance payment. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020, as needed by the customer.`,
            uses:"Potatoes are a versatile vegetable used in a variety of culinary dishes, including boiling, baking, frying, and mashing. They are also used to make products like potato chips, fries, and crisps. Additionally, potatoes are a good source of carbohydrates and provide essential nutrients like vitamin C and potassium."
            
        },
        {
            id: 2,
            name: "Carrot  ",
            image: "Carrot  .png", 
            details: "CARROT SPECIFICATIONS",
            para2:`Botanical Name: Daucus carota subsp. sativus Family: Apiaceae Plant Description: Carrot is a biennial herbaceous plant with a rosette of green, feathery leaves. The edible root is typically orange, though it can be purple, black, red, white, or yellow. The roots are long and tapered, with a length ranging from 10-30 cm and a diameter of 2-5 cm.
             Soil Requirements: Carrots grow best in deep, loose, well-drained sandy loam soils with a pH range of 6.0-7.0. Heavy or clay soils can cause the roots to become malformed.
             Climate Requirements: Carrots thrive in cool to moderate climates with temperatures between 15-21°C. High temperatures can cause the roots to become woody and less sweet.
            Major Growing States: Carrots are widely cultivated in the states of Uttar Pradesh, Punjab, Haryana, Tamil Nadu, and Karnataka.`,
          
            

            
            
            nutritional: {
                "Nutritional Value (per 100g edible portion)":"",
                Moisture: "88g",
                Protein: "0.9g",
                Fat: "0.2g",
                Fiber: "2.8g",
                Carbohydrates: "9.6g",
                Energy: "41 kcal",
                Calcium: "33mg",
                Phosphorus:" 35mg",
                Iron: "0.3mg",
                "Vitamin A": "835 µg",
                "Vitamin C":"5.9mg",

            
            } ,

           varieties: {
             "Early Varieties " : "Nantes, Pusa Kesar",

             "Late Varieties ": "Danvers, Chantenay",
                
             "Hybrid Varieties ":"  Kuroda, Kuroda Improved",
                
            //  Satgudi :"  Sweet and juicy fruits, grown in Andhra Pradesh.",
                
                // Himsagar:" Medium-sized fruits with a sweet and aromatic flavor, grown in West Bengal.",
                                    
            } ,
            ProductSpecifications:{
                Commodity : "Carrot ",
                Origin : "India "

            },
            QualitySpecifications : {
                Size : " Medium to large roots, 10-30 cm in length, 2-5 cm in diameter",
                Color : "Orange, purple, black, red, white, or yellow",
                Moisture : "85-90%",
                "Free from " : "Insects, pests, diseases, and foreign matter",


            },

            
                       
                   
            shipment: `Inspection: As per the buyer's requirement (e.g., SGS)<br><br>
            Packing: Standard in 5 Kg cartons or as per customer requirements Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 15 days from the date of receipt of confirmed purchase order & advance payment. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020, as needed by the customer.`,
            uses:"Carrots are a versatile vegetable used in a variety of culinary dishes, both raw and cooked. They are often included in salads, soups, and stews. Carrots are also used in juices, desserts, and as a natural coloring agent. They are an excellent source of beta-carotene, fiber, vitamin K1, and potassium."
            
        },
        {
            id: 3,
            name: "Turnip  ",
            image: "Turnip.png", 
            details: "TURNIP SPECIFICATIONS",
            para2:`Botanical Name: Brassica rapa Family: Cruciferae Plant Description: The turnip is a biennial herbaceous plant with green leaves and fleshy roots. The plant typically grows to a height of 30-60 cm. The roots are usually white with a purple top. The leaves are green above, pale green below, and can reach 30-50 cm in length and 10-15 cm in width.
             Soil Requirements: Well-drained loam with a slightly acidic to neutral pH (5.5-7.0). Turnips thrive best in fertile soils free from waterlogging.
            Climate Requirements: Best suited to cool and moderate climates. The optimal temperature for growth ranges from 18-23°C. Turnips can tolerate frost but are sensitive to high temperatures which can lead to tough, woody roots.
            Major Growing Regions: Primarily grown in the states of Uttar Pradesh, Punjab, Haryana, Bihar, Himachal Pradesh, Karnataka, and Andhra Pradesh.`,
          
            
            nutritional: {
                "Nutritional Value (per 100g edible portion)":"",
                Moisture: "91.6g",
                Protein: "0.6g",
                Fat: "0.1g",
                Fiber: "1.8g",
                Carbohydrates: "6.1g",
                Energy: "28 kcal",
                Calcium: "30mg",
                Phosphorus:" 35mg",
                Iron: "0.3mg",
                // "Vitamin A": "765 µg",
                "Vitamin C":"21mg",

            
            } ,

           varieties: {
            "Local Varieties " : "Pusa Swarnima, Pusa Chandrima, Punjab Safed",

            "Hybrid Varieties ": " Purple Top White Globe, Golden Ball",
                
            // Chakaiya:"  High-yielding variety with medium-sized fruits, grown in Gujarat and Uttar Pradesh.",
                
            // "NA-7 ":"  High-yielding variety with large fruits, grown in various states.",
                
                // Himsagar:" Medium-sized fruits with a sweet and aromatic flavor, grown in West Bengal.",
                                    
            } ,
            ProductSpecifications:{
                Commodity : "Turnip ",
                Origin : "India "

            },
            QualitySpecifications : {
                Size : " Small to medium-sized roots, 5-10 cm in diameter",
                Color : "White or white with purple top",
                Moisture : "90-95%",
                "Free from " : "Insects, pests, diseases, and foreign matter",


            },

            
                       
                   
            shipment: `Inspection: As per the buyer's requirement (e.g., SGS)<br><br>
            Packing: Standard in 5 Kg cartons or as per customer requirements Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 15 days from the date of receipt of confirmed purchase order & advance payment. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020, as needed by the customer.`,
            uses:"Turnips are used in a variety of culinary dishes, both raw and cooked. They are often included in salads, soups, and stews. The leaves are also edible and can be used like spinach or kale."
            
        },
        {
            id: 4,
            name: "Dried Tomato ",
            image: "DriedTomato.png", 
            details: "DRIED TOMATO SPECIFICATIONS",
            para2:`Botanical Name: Solanum lycopersicum L. Family: Solanaceae Plant Description: The tomato plant is a tender perennial, usually grown as an annual, with a height of 1-3 meters. It has a weak, woody stem and hairy leaves. The flowers are yellow and the fruit is a fleshy berry, typically red when ripe.
            Soil Requirements: Tomatoes grow best in well-drained, loamy soils with a pH range of 6.0-7.0. They require fertile soil rich in organic matter.
            Climate Requirements: Tomatoes thrive in warm, sunny climates with temperatures between 20-30°C. They require consistent moisture and do not tolerate frost.      
            Major Growing States: Tomatoes are widely cultivated in the states of Maharashtra, Andhra Pradesh, Karnataka, Gujarat, and Tamil Nadu.`,
          
            
            nutritional: {
                "Nutritional Value (per 100g edible portion)":"",
                Moisture: "12g",
                Protein: "1.6g",
                Fat: "0.2g",
                Fiber: "1.5g",
                Carbohydrates: "7.9g",
                Energy: "150kcal",
                Calcium: "18mg",
                Phosphorus:" 40mg",
                Iron: "0.7mg",
                "Vitamin A": "833 µg",
                "Vitamin C":"13mg",

            
            } ,

           varieties: {
            "Cherry Tomatoes" : "Pusa Cherry, Pusa Ruby",

            "Plum Tomatoes" : "Pusa Early Dwarf, Pusa Ruby",
                
            "Beefsteak Tomatoes":"Pusa Gaurav, Pusa Ruby",
                
            // "Red Fleshed ":"   Medium to large fruits with a red flesh, grown in various states.",
                
                // Himsagar:" Medium-sized fruits with a sweet and aromatic flavor, grown in West Bengal.",
                                    
            } ,
            ProductSpecifications:{
                Commodity : "Dried Tomato ",
                Origin : "India "

            },
            QualitySpecifications : {
                Size : " Small to medium pieces, 10-25 mm in length",
                Color : " Red to dark red",
                Moisture : "12-15%",
                "Free from " : "Insects, pests, diseases, and foreign matter",


            },

            
                       
                   
            shipment: `Inspection: As per the buyer's requirement (e.g., SGS)<br><br>
            Packing: Standard in 5 Kg cartons or as per customer requirements Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 15 days from the date of receipt of confirmed purchase order & advance payment. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020, as needed by the customer.`,
            uses:"Dried tomatoes are a versatile ingredient used in a variety of culinary dishes, including pasta, salads, and sauces. They are also used in snacks and as a flavoring agent in various recipes. Dried tomatoes are rich in vitamins and minerals, making them a healthy addition to meals."
            
        },
        {
            id: 5,
            name: "Brinjal   ",
            image: "Brinjal.png", 
            details: "BRINJAL SPECIFICATIONS",
            para2:`Botanical Name: Solanum melongena Family: Solanaceae Plant Description: Brinjal, also known as eggplant or aubergine, is a tender perennial plant that is typically grown as an annual. It has a height of 60-90 cm with a sturdy, woody stem. The plant produces large, lobed leaves and purple or white flowers. The fruit is a fleshy berry, usually purple but can also be green, white, or striped, with a length of 5-30 cm depending on the variety.
            Soil Requirements: Brinjals thrive in well-drained, fertile loamy soils with a pH range of 5.5-6.8. Sandy loam soils are ideal for early crops, while clay loam soils are suitable for late-season crops.

            Climate Requirements: Brinjals prefer a warm climate with temperatures between 25-30°C. They require a long growing season and do not tolerate frost.
             Major Growing States: Brinjals are widely cultivated in the states of West Bengal, Andhra Pradesh, Maharashtra, Gujarat, and Bihar.`,
          
            
            nutritional: {
                "Nutritional Value (per 100g edible portion)":"",
                Moisture: "92.7g",
                Protein: "1.4g",
                Fat: "0.3g",
                Fiber: "1.5",
                Carbohydrates: "4.2g",
                Energy: "25 kcal",
                Calcium: "20mg",
                Phosphorus:" 47mg",
                Iron: "0.9mg",
                "Vitamin A": "27 µg",
                "Vitamin C":"5mg",

            
            } ,

           varieties: {
            "Long Varieties" : "Pusa Purple Long, Arka Kusumakar",

            "Round Varieties" : " Pusa Purple Round, Pusa Kranti",
                
            "Hybrid Varieties":" Arka Nidhi, Arka Navneet",
                
            // "Red Fleshed ":"   Medium to large fruits with a red flesh, grown in various states.",
                
                // Himsagar:" Medium-sized fruits with a sweet and aromatic flavor, grown in West Bengal.",
                                    
            } ,
            ProductSpecifications:{
                Commodity : "Brinjal   ",
                Origin : "India "

            },
            QualitySpecifications : {
                Size : "  Small to large fruits, 5-30 cm in length",
                Color : "Purple, green, white, or striped",
                Moisture : "90-95%",
                "Free from " : "Insects, pests, diseases, and foreign matter",
            },
          
            shipment: `Inspection: As per the buyer's requirement (e.g., SGS)<br><br>
            Packing: Standard in 5 Kg cartons or as per customer requirements Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 15 days from the date of receipt of confirmed purchase order & advance payment. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020, as needed by the customer.`,
            uses:"Brinjals are a versatile vegetable used in a variety of culinary dishes, including curries, stews, and roasted dishes. They are also used in traditional medicine for their potential health benefits, such as aiding digestion and reducing inflammation."
            
        },
        {
            id: 6,
            name: "Onion    ",
            image: "Onion.png", 
            details: "ONION SPECIFICATIONS",
            para2:`Botanical Name: Allium cepa Family: Amaryllidaceae Plant Description: Onions are biennial or perennial plants, grown as annuals. They have a short, bulbous stem with long, hollow leaves. The bulb is typically round to oblong, consisting of fleshy, concentric layers. Onions can be white, yellow, red, or purple.
            Soil Requirements: Onions grow best in well-drained, sandy loam soils with a pH range of 6.0-7.0. They require fertile soil rich in organic matter and good moisture retention.
            Climate Requirements: Onions thrive in cool to moderate climates with temperatures between 13-24°C. They require long daylight hours and moderate temperatures for bulb formation. High temperatures can cause bolting and poor bulb development.
            Major Growing States: Onions are widely cultivated in the states of Maharashtra, Gujarat, Uttar Pradesh, Karnataka, and Madhya Pradesh.`,
          
            
            nutritional: {
                "Nutritional Value (per 100g edible portion)":"",
                Moisture: "89g",
                Protein: "1.1g",
                Fat: "0.1g",
                Fiber: "1.7",
                Carbohydrates: "9.3g",
                Energy: "40 kcal",
                Calcium: "23mg",
                Phosphorus:" 29mg",
                Iron: "0.2mg",
                // "Vitamin A": "27 µg",
                "Vitamin C":"7.4mg",

            
            } ,

           varieties: {
            "White Onions" : "Pusa White Round, Pusa White Flat",

            "Red Onions" : " Pusa Red, Agrifound Dark Red",
                
            "Yellow Onions":" Arka Kalyan, Arka Pitambar",
                
            // "Red Fleshed ":"   Medium to large fruits with a red flesh, grown in various states.",
                
                // Himsagar:" Medium-sized fruits with a sweet and aromatic flavor, grown in West Bengal.",
                                    
            } ,
            ProductSpecifications:{
                Commodity : "Onion    ",
                Origin : "India "

            },
            QualitySpecifications : {
                Size : " Small to large bulbs, 3-10 cm in diameter",
                Color : "White, yellow, red, or purple",
                Moisture : "85-90%%",
                "Free from " : "Insects, pests, diseases, and foreign matter",
            },
          
            shipment: `Inspection: As per the buyer's requirement (e.g., SGS)<br><br>
            Packing: Standard in 5 Kg cartons or as per customer requirements Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 15 days from the date of receipt of confirmed purchase order & advance payment. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020, as needed by the customer.`,
            uses:"Onions are a versatile vegetable used in a variety of culinary dishes, both raw and cooked. They are often included in salads, soups, stews, and as a flavoring agent in various recipes. Onions are also used in traditional medicine for their potential health benefits, such as reducing inflammation and improving digestion."
            
        },
        {
            id: 7,
            name: "Dried Onion Powder",
            image: "DriedOnionPowder.png", 
            details: "DRIED ONION POWDER SPECIFICATIONS",
            para2:`Botanical Name: Allium cepa Family: Amaryllidaceae Plant Description: Onions used for making dried onion powder are typically biennial or perennial plants grown as annuals. They produce a short, bulbous stem with long, hollow leaves. The bulb is round to oblong and consists of fleshy, concentric layers that can be white, yellow, red, or purple.
            Soil Requirements: Onions grow best in well-drained, sandy loam soils with a pH range of 6.0-7.0. They require fertile soil rich in organic matter and good moisture retention.
            Climate Requirements: Onions thrive in cool to moderate climates with temperatures between 13-24°C. They require long daylight hours and moderate temperatures for bulb formation.
            Major Growing States: Onions for dried onion powder are widely cultivated in the states of Maharashtra, Gujarat, Uttar Pradesh, Karnataka, and Madhya Pradesh`,
          
            
            nutritional: {
                "Nutritional Value (per 100g edible portion)":"",
                Moisture: "8-10%",
                Protein: "10-12g",
                Fat: "0.5-1g",
                Fiber: " 3-5g",
                Carbohydrates: "70-75g",
                Energy: "350-370 kcall",
                Calcium: "50-70mg",
                Phosphorus:"150-200mg",
                Iron: "1.5-2.0mg",
                // "Vitamin A": "27 µg",
                "Vitamin C":"20-25mg",

            
            } ,

           varieties: {
            "White Onions" : "Pusa White Round, Pusa White Flat",

            "Red Onions" : " Pusa Red, Agrifound Dark Red",
                
            "Yellow Onions":" Arka Kalyan, Arka Pitambar",
                
            // "Red Fleshed ":"   Medium to large fruits with a red flesh, grown in various states.",
                
                // Himsagar:" Medium-sized fruits with a sweet and aromatic flavor, grown in West Bengal.",
                                    
            } ,
            ProductSpecifications:{
                Commodity : "Onion    ",
                Origin : "India "

            },
            QualitySpecifications : {
                Size : " Small to large bulbs, 3-10 cm in diameter",
                Color : "Pale yellow to light brown",
                Moisture : "5-8%",
                "Particle Size" : "Fine powder, 50-100 mesh",

                "Free from " : "Insects, pests, diseases, and foreign matter",
            },
          
            shipment: `Inspection: As per the buyer's requirement (e.g., SGS)<br><br>
            Packing: Standard in 5 Kg cartons or as per customer requirements Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 15 days from the date of receipt of confirmed purchase order & advance payment. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020, as needed by the customer.`,
            uses:"Dried onion powder is a versatile ingredient used in a variety of culinary dishes, including soups, stews, sauces, and seasoning blends. It is also used in processed foods and snacks for flavor enhancement. Dried onion powder retains the strong, pungent flavor of fresh onions and offers a convenient, long-lasting alternative for cooking."
            
        },
        
        
       
       
        

    ];   

    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Find the product by its ID
    const product = products.find(p => p.id === productId);

    if (product) {
        // Populate product data into the template
        
         document.querySelector('.para').textContent = product.para;
         document.querySelector('.para2').innerHTML = product.para2;
       
        document.querySelector('.product-details').textContent = product.details;
        
        document.querySelector('.shipment').innerHTML = product.shipment;
        document.querySelector('.uses').textContent = product.uses;


        document.getElementById("product-image").src = product.image;
        

       
        const productSpecsList = document.querySelector('.product-nutritional');
        productSpecsList.innerHTML = '';  // Clear any previous content
        Object.keys(product.nutritional).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.nutritional[spec]}`;
           productSpecsList.appendChild(listItem);
        });
        const proSpecsList = document.querySelector('.varieties');
        proSpecsList.innerHTML = '';  // Clear any previous content
        Object.keys(product.varieties).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.varieties[spec]}`;
            proSpecsList.appendChild(listItem);
        });


        const productSpecs = document.querySelector('.ProductSpecifications');
        productSpecs.innerHTML = '';  // Clear any previous content
        Object.keys(product.ProductSpecifications).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.ProductSpecifications[spec]}`;
            productSpecs.appendChild(listItem);
        });

        const qualitySpecs = document.querySelector('.QualitySpecifications');
        qualitySpecs.innerHTML = '';  // Clear any previous content
        Object.keys(product.QualitySpecifications).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.QualitySpecifications[spec]}`;
            qualitySpecs.appendChild(listItem);
        });

        









       
    }
});