document.addEventListener('DOMContentLoaded', () => {
    // Product data array containing multiple products
    const products = [
        {
            id: 1,
            name: "Mango",
            image: "mango.png", 
            details: "MANGO SPECIFICATIONS",
            para2:`Botanical Name: Mangifera indica Family: Anacardiaceae Plant Description: The mango tree is a large, spreading evergreen that can grow up to 35-40 meters tall. It has a dense canopy of green leaves and small, fragrant white flowers. The fruit is typically oval or round, with a smooth, leathery skin that can be yellow, orange, red, or green when ripe.<br><br>

            Soil Requirements: Mangoes thrive in well-drained, sandy loam to clay loam soils with a pH range of 5.5-7.5. They require fertile soil rich in organic matter and good drainage to prevent root rot.<br><br>


            Climate Requirements: Mangoes prefer tropical and subtropical climates with temperatures between 24-30°C. They require a dry period during the flowering and fruiting stages and are sensitive to frost.`,         
            

            
            
            nutritional: {
                "Nutritional Value (per 100g edible portion)":"",
                Moisture: "81g",
                Protein: "0.8g",
                Fat: "0.4g",
                Fiber: "1.6g",
                Carbohydrates: "16g",
                Energy: "70 kcal",
                Calcium: "10mg",
                Phosphorus:" 14mg",
                Iron: "0.2mg",
                "Vitamin A": "765 µg",
                "Vitamin C":" 27mg",

            
            } ,

           varieties: {
                Alphonso: "Known for its sweetness and flavor, primarily grown in Maharashtra and Gujarat.",

                Banganapalli: "Large, oblong fruits with a sweet taste, grown in Andhra Pradesh and Telangana.",
                
                Dasheri:" Medium-sized fruits with a unique aroma, grown in Uttar Pradesh.",
                
                Kesar:" Saffron-colored flesh with a rich flavor, grown in Gujarat.",
                
                Himsagar:" Medium-sized fruits with a sweet and aromatic flavor, grown in West Bengal.",
                        
                               
               
            } ,
            ProductSpecifications:{
                Commodity : "Mango ",
                Origin : "India "

            },
            QualitySpecifications: {
                Size : " Medium to large fruits, 10-25 cm in diameter",
                Color : "Yellow, orange, red, or green",
                Moisture : "80-85%",
                "Free from " : "Insects, pests, diseases, and foreign matter",


            },

            
                       
                   
            shipment: `Inspection: As per the buyer's requirement (e.g., SGS)<br><br>
            Packing: Standard in 5 Kg cartons or as per customer requirements Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 15 days from the date of receipt of confirmed purchase order & advance payment. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020, as needed by the customer.`,
            uses:"Mangoes are a popular fruit used in a variety of culinary dishes, both raw and cooked. They are often included in desserts, smoothies, and salads. Mango pulp is used in juices, nectars, and jams. Mangoes are also rich in vitamins and minerals, making them a healthy addition to any diet."
            
        },
        {
            id: 5,
            name: "Orange ",
            image: "Orange .png", 
            details: "ORANGE SPECIFICATIONS",
            para2:`Botanical Name: Citrus × sinensis Family: Rutaceae Plant Description: Orange trees are small to medium-sized evergreen trees that grow up to 9-10 meters tall. They have glossy, dark green leaves and white, fragrant flowers.
             The fruit is typically round with a bright orange peel and juicy, sweet-tasting flesh inside. The size of the fruit ranges from 6-12 cm in diameter.
            Major Growing States: Oranges are widely cultivated in the states of Maharashtra, Andhra Pradesh, Karnataka, Punjab, and Rajasthan.`,
          
            

            
            
            nutritional: {
                "Nutritional Value (per 100g edible portion)":"",
                Moisture: "86-88g",
                Protein: "0.9g",
                Fat: "0.2g",
                Fiber: "2.4g",
                Carbohydrates: "11.8g",
                Energy: "47 kcal",
                Calcium: "40mg",
                Phosphorus:" 14mg",
                Iron: "0.1mg",
                // "Vitamin A": "765 µg",
                "Vitamin C":" 53.2mg",

            
            } ,

           varieties: {
             "NagpurOrange " : "Medium-sized fruits with a sweet and tangy flavor, grown in Maharashtra.",

             Kinnow: "High-yielding variety with large, juicy fruits, grown in Punjab.",
                
             "Coorg Mandarin ":" Medium to large fruits with a unique aroma and flavor, grown in Karnataka.",
                
             Satgudi :"  Sweet and juicy fruits, grown in Andhra Pradesh.",
                
                // Himsagar:" Medium-sized fruits with a sweet and aromatic flavor, grown in West Bengal.",
                                    
            } ,
            ProductSpecifications:{
                Commodity : "Orange",
                Origin : "India "

            },
            QualitySpecifications : {
                Size : " Medium to large fruits, 6-12 cm in diameter",
                Color : "Bright orange peel with juicy flesh",
                Moisture : "85-90%",
                "Free from " : "Insects, pests, diseases, and foreign matter",


            },

            
                       
                   
            shipment: `Inspection: As per the buyer's requirement (e.g., SGS)<br><br>
            Packing: Standard in 5 Kg cartons or as per customer requirements Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 15 days from the date of receipt of confirmed purchase order & advance payment. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020, as needed by the customer.`,
            uses:"Oranges are a versatile fruit used in a variety of culinary dishes, both raw and cooked. They are often included in desserts, juices, and salads. Orange zest is used as a flavoring agent in various recipes. Oranges are rich in vitamins and minerals, particularly vitamin C, making them a healthy addition to any diet."
            
        },
        {
            id: 4,
            name: "Indian Gooseberry ",
            image: "IndianGooseberry .png", 
            details: "INDIAN GOOSEBERRY SPECIFICATIONS",
            para2:`Botanical Name: Phyllanthus emblica Family: Phyllanthaceae Plant Description: Indian gooseberry, also known as Amla, is a small to medium-sized deciduous tree that grows up to 8-18 meters tall. It has a crooked trunk and spreading branches. 
             The leaves are simple, closely set along the branches, and are light green in color. The tree produces small, greenish-yellow flowers and round, smooth, fleshy fruit that is light green to yellowish in color.
            Major Growing States: Indian gooseberries are widely cultivated in the states of Uttar Pradesh, Gujarat, Maharashtra, Andhra Pradesh, and Tamil Nadu.`,
          
            
            nutritional: {
                "Nutritional Value (per 100g edible portion)":"",
                Moisture: "81.2g",
                Protein: "0.5g",
                Fat: "0.1g",
                Fiber: "3.4g",
                Carbohydrates: "14.1g",
                Energy: "44 kcal",
                Calcium: "25mg",
                Phosphorus:" 27mg",
                Iron: "0.4mg",
                // "Vitamin A": "765 µg",
                "Vitamin C":"600mg",

            
            } ,

           varieties: {
            Banarasi : "Known for its large fruit size and high vitamin C content, grown in Uttar Pradesh.",

            Francis : " Medium-sized fruits with a sour taste, grown in Maharashtra.",
                
            Chakaiya:"  High-yielding variety with medium-sized fruits, grown in Gujarat and Uttar Pradesh.",
                
            "NA-7 ":"  High-yielding variety with large fruits, grown in various states.",
                
                // Himsagar:" Medium-sized fruits with a sweet and aromatic flavor, grown in West Bengal.",
                                    
            } ,
            ProductSpecifications:{
                Commodity : "Indian Gooseberry (Amla)",
                Origin : "India "

            },
            QualitySpecifications : {
                Size : " Medium to large fruits, 2-5 cm in diameter",
                Color : "Light green to yellowish",
                Moisture : "80-85%",
                "Free from " : "Insects, pests, diseases, and foreign matter",


            },

            
                       
                   
            shipment: `Inspection: As per the buyer's requirement (e.g., SGS)<br><br>
            Packing: Standard in 5 Kg cartons or as per customer requirements Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 15 days from the date of receipt of confirmed purchase order & advance payment. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020, as needed by the customer.`,
            uses:"Indian gooseberries are a versatile fruit used in a variety of culinary dishes, both raw and cooked. They are often included in pickles, juices, and chutneys. Amla is also used in traditional medicine for its potential health benefits, such as boosting immunity and improving digestion. It is rich in vitamin C and antioxidants, making it a valuable addition to a healthy diet."
            
        },
        {
            id: 2,
            name: "Guava ",
            image: "Guava.png", 
            details: "GUAVA SPECIFICATIONS",
            para2:`Botanical Name: Psidium guajava Family: Myrtaceae Plant Description: Guava is a small evergreen tree or shrub that grows up to 3-10 meters tall. It has broad, dark green leaves and produces white flowers.
             The fruit is round to oval-shaped, with a thin skin that can be green, yellow, or red. The flesh inside is white, pink, or red, and contains numerous small seeds.
             Soil Requirements: Guavas grow best in well-drained, sandy loam to clay loam soils with a pH range of 5.5-7.5. They are tolerant of a wide range of soil types but prefer fertile, organic-rich soils.
             Climate Requirements: Guavas thrive in tropical and subtropical climates with temperatures between 23-28°C. They require a warm climate with moderate rainfall and are sensitive to frost.
            Major Growing States: Guavas are widely cultivated in the states of Uttar Pradesh, Maharashtra, Bihar, Andhra Pradesh, and Tamil Nadu.`,
          
            
            nutritional: {
                "Nutritional Value (per 100g edible portion)":"",
                Moisture: "80g",
                Protein: "2.6g",
                Fat: "0.4g",
                Fiber: "5.4g",
                Carbohydrates: "14g",
                Energy: "68kcal",
                Calcium: "18mg",
                Phosphorus:" 40mg",
                Iron: "0.3mg",
                "Vitamin A": "624 IU",
                "Vitamin C":"288mg",

            
            } ,

           varieties: {
            "Allahabad Safeda" : "Known for its large, white-fleshed fruits, grown in Uttar Pradesh.",

            "Lucknow 49" : " Medium-sized fruits with a sour taste, grown in Maharashtra.",
                
            "Arka Mridula":"  High-yielding variety with large, white-fleshed fruits, grown in Karnataka.",
                
            "Red Fleshed ":"   Medium to large fruits with a red flesh, grown in various states.",
                
                // Himsagar:" Medium-sized fruits with a sweet and aromatic flavor, grown in West Bengal.",
                                    
            } ,
            ProductSpecifications:{
                Commodity : "Guava ",
                Origin : "India "

            },
            QualitySpecifications : {
                Size : " Medium to large fruits, 5-10 cm in diameter",
                Color : "Green, yellow, or red skin with white, pink, or red flesh",
                Moisture : "80-85%",
                "Free from " : "Insects, pests, diseases, and foreign matter",


            },

            
                       
                   
            shipment: `Inspection: As per the buyer's requirement (e.g., SGS)<br><br>
            Packing: Standard in 5 Kg cartons or as per customer requirements Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 15 days from the date of receipt of confirmed purchase order & advance payment. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020, as needed by the customer.`,
            uses:"Guavas are a versatile fruit used in a variety of culinary dishes, both raw and cooked. They are often included in fruit salads, smoothies, and desserts. Guava pulp is used in juices, nectars, and jams. Guavas are rich in vitamins and minerals, making them a healthy addition to any diet."
            
        },
        {
            id: 3,
            name: "Coconut",
            image: "Coconut .png", 
            details: "COCONUT SPECIFICATIONS",
            para2:`Botanical Name: Cocos nucifera Family: Arecaceae Plant Description: The coconut palm is a large, single-trunked palm that can grow up to 30 meters tall. It has a crown of large, feathered leaves, each 4-6 meters long.
              The tree produces clusters of coconuts, which are large, oval-shaped fruits with a fibrous outer husk and a hard, woody shell surrounding the edible white flesh and coconut water inside.
            Major Growing States: Coconuts are widely cultivated in the states of Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, and West Bengal.`,
          
            
            nutritional: {
                "Nutritional Value (per 100g edible portion)":"",
                Moisture: "47g",
                Protein: "3.3g",
                Fat: "33.5g",
                Fiber: "9g",
                Carbohydrates: "15g",
                Energy: "354kcal",
                Calcium: "14mg",
                Phosphorus:" 113mg",
                Iron: "2.4mg",
                // "Vitamin A": "624 IU",
                "Vitamin C":"2.8mg",

            
            } ,

           varieties: {
            "Tall Varieties" : "West Coast Tall, East Coast Tall, Tiptur Tall",

            "Dwarf Varieties" : " Chowghat Orange Dwarf, Malayan Yellow Dwarf",
                
            "Hybrid Varieties":"   Kera Sankara, Chandrasankara",
                
            // "Red Fleshed ":"   Medium to large fruits with a red flesh, grown in various states.",
                
                // Himsagar:" Medium-sized fruits with a sweet and aromatic flavor, grown in West Bengal.",
                                    
            } ,
            ProductSpecifications:{
                Commodity : "Coconut  ",
                Origin : "India "

            },
            QualitySpecifications : {
                Size : " Medium to large fruits, 15-30 cm in diameter",
                Color : "Brown husk with white flesh inside",
                Moisture : "45-50%",
                "Free from " : "Insects, pests, diseases, and foreign matter",
            },
          
            shipment: `Inspection: As per the buyer's requirement (e.g., SGS)<br><br>
            Packing: Standard in 5 Kg cartons or as per customer requirements Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 15 days from the date of receipt of confirmed purchase order & advance payment. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020, as needed by the customer.`,
            uses:"Coconuts are a versatile fruit used in a variety of culinary and non-culinary applications. The flesh is used in cooking, baking, and as a snack. Coconut water is a popular beverage, and coconut milk and cream are used in various recipes. The oil extracted from coconuts is used for cooking, cosmetics, and industrial purposes. Additionally, the fibrous husk is used for making ropes, mats, and brushes."
            
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