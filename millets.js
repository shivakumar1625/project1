document.addEventListener('DOMContentLoaded', () => {
    // Product data array containing multiple products
    const products = [
        {
            id: 1,
            name: "FINGER MILLET",
            image: "image/png", 
            details: "FINGER MILLET SPECIFICATIONS",
            para2:"Comman Names : Ragi, Nachni, Kezhvaragu",

            para: "Scientific Name: Eleusine coracana",
            
            

            
            
            nutritional: {
                Proteins: " Rich in proteins.",
                Minerals: " High in calcium, iron, and magnesium.",
                "Dietary Fiber ": " Significant amounts of dietary fiber.",
                Polyphenols :" Rich in polyphenols with antioxidant properties."

            
            } ,

            proSpecifications: {
                Commodity: "Finger Millet",
                Variety: "Whole Grain",
                Origin: "India",
                "Quality Specifications" : " "         
                               
               
            } ,
            proSpecifications2:{
                Color: "Light brown to dark brown",
                Moisture: "12% max",
                Purity: "99% min",
                "Foreign Matter": "1% max ",
                "Broken Grains": "2% max"

            },
                       
                   
            shipment: `Inspection: SGS or any other agency as per your requirement for weight and quality.<br>
            Packing: Standard in 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.<br>
            Mode of Payment: TT, LC<br>
            Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of confirmed purchase order and receipt of advance.<br>
            Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the customer to their port of choice.<br><br>`,
            uses:"Food Products: Used to make traditional foods such as porridge, bread, and beverages. Product Specifications"
            
        },
        {
            id: 2,
            name: "KODO MILLET ",
            image: "KodoMillet .jpeg", 
            details: "KODO MILLET SPECIFICATIONS",
            para:"Scientific Name: Paspalum scrobiculatum",

            para2: "Common Names: Kodo, Varagu, Arikelu, Kodra",
            
            

            
            
            nutritional: {
                Energy: " 302 Kcal per 100g.",
                Protein: " 8.03 g per 100g.",
                Carbohydrate:" 69.9 g per 100g.",
                "Crude Fiber":" 8.5 g per 100g.",
                Calcium:" 22 mg per 100g.",
                Iron:" 9.9 mg per 100g."


            
            } ,
            uses:"Food Products: Used to make traditional dishes such as porridge, bread, and beverages.",

            proSpecifications: {
                Commodity:" Kodo Millet",
                Variety: "Whole Grain",
                Origin: " India",
                "Quality Specifications ": " "
       
                               
               
            } ,
            proSpecifications2:{
                Color:" Light yellow to dark grey",
                Moisture:" 12% max",
                Purity:" 99% min",
                "Foreign Matter":" 1% max",
                "Broken Grains": "2% max"
               


            },
                       
                   
            shipment: `Inspection: SGS or any other agency as per your requirement for weight and quality.<br>
            Packing: Standard in 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.<br>
            Mode of Payment: TT, LC<br>
            Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of confirmed purchase order and receipt of advance.<br>
            Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the customer to their port of choice.`,            
            
        },
        {
            id: 3,
            name: "BARNYARD MILLET ",
            image: "BarnyardMillet .jpeg", 
            details: "BARNYARD MILLET SPECIFICATIONS",
            para:"Scientific Name: Echinochloa frumentacea or Echinochloa esculenta",

            para2: "Common Names: Sanwa, Oodalu, Kuthiraivali",
            
            

            
            
            nutritional: {
                Energy : " 398 Kcal per 100g.",
                Protein : " 10.5 g per 100g.",
                Fat : "3.6 g per 100g.",
                "Crude Fiber":" 8.5 g per 100g.",
                "Total Carbohydrates ": "68.8 g per 100g.",
                "Total Dietary Fiber ": "12.6 g per 100g.",
                Calcium:" 22 mg per 100g.",
                Iron:" 9.9 mg per 100g.",
                "Phosphorus ": "281 mg per 100g.",
                "Magnesium ": "83 mg per 100g."



            
            } ,
            uses:"Food Products: Used to make traditional dishes such as porridge, bread, and beverages.",

            proSpecifications: {
                Commodity:" Barnyard  Millet",
                Variety: "Whole Grain",
                Origin: " India",
                "Quality Specifications ": " "
       
                               
               
            } ,
            proSpecifications2:{
                Color:" Light yellow to dark grey",
                Moisture:" 12% max",
                Purity:" 99% min",
                "Foreign Matter":" 1% max",
                "Broken Grains": "2% max"
               


            },
                       
                   
            shipment: `Inspection: SGS or any other agency as per your requirement for weight and quality.<br>
            Packing: Standard in 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.<br>
            Mode of Payment: TT, LC<br>
            Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of confirmed purchase order and receipt of advance.<br>
            Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the customer to their port of choice.`,            
            
        },
        {
            id: 4,
            name: "FOXTAIL MILLET ",
            image: "FoxtailMillet .jpeg", 
            details: "FOXTAIL MILLET SPECIFICATIONS",
            // para:"Scientific Name: Paspalum scrobiculatum",

            para2: "Common Names: Kangni, Tenai, Korra, Navane",
            
            

            
            
            nutritional: {
                Energy: " 351 Kcal per 100g.",
                Protein: " 11% g per 100g.",
                Fat : "4% g per 100g.",
                Carbohydrate:" 63% per 100g.",
                "Dietary Fiber ": "8% per 100g.",
                Calcium:" 22 mg per 100g.",
                Iron:" 9.9 mg per 100g."


            
            } ,
            uses:"Food Products:  Used to make traditional dishes such as porridge, bread, and beverages.",

            proSpecifications: {
                Commodity:" Foxtail  Millet",
                Variety: "Whole Grain",
                Origin: " India",
                "Quality Specifications ": " "
       
                               
               
            } ,
            proSpecifications2:{
                Color:" Light yellow to dark grey",
                Moisture:" 12% max",
                Purity:" 99% min",
                "Foreign Matter":" 1% max",
                "Broken Grains": "2% max"
               


            },
                       
                   
            shipment: `Inspection: SGS or any other agency as per your requirement for weight and quality.<br>
            Packing: Standard in 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.<br>
            Mode of Payment: TT, LC<br>
            Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of confirmed purchase order and receipt of advance.<br>
            Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the customer to their port of choice.`,            
            
        },
        {
            id: 5,
            name: "SORGHUM MILLET ",
            image: "Sorghum Millet .jpeg", 
            details: "SORGHUM MILLET SPECIFICATIONS",
            // para:"Scientific Name: Paspalum scrobiculatum",

            para2: "Common Names:  Jowar, Great Millet, Guinea Corn, Durra",
            
            

            
            
            nutritional: {
                Energy: " 329 Kcal per 100g.",
                Protein: " 11.3 g per 100g.",
                Fat : "3.3 g per 100g.",
                Carbohydrate:" 69.9 g per 100g.",
                "Dietary Fiber ": "6.7 g per 100g.",
                Calcium:" 25 mg per 100g.",
                Iron:" 4.1 mg per 100g."


            
            } ,
            uses:"Food Products:  Used to make traditional dishes such as porridge, bread, and beverages.",

            proSpecifications: {
                Commodity:" Sorghum  Millet",
                Variety: "Whole Grain",
                Origin: " India",
                "Quality Specifications ": " "
       
                               
               
            } ,
            proSpecifications2:{
                Color:" Light yellow to dark grey",
                Moisture:" 12% max",
                Purity:" 99% min",
                "Foreign Matter":" 1% max",
                "Broken Grains": "2% max"
               


            },
                       
                   
            shipment: `Inspection: SGS or any other agency as per your requirement for weight and quality.<br>
            Packing: Standard in 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.<br>
            Mode of Payment: TT, LC<br>
            Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of confirmed purchase order and receipt of advance.<br>
            Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the customer to their port of choice.`,            
            
        },
        {
            id: 6,
            name: "PEARL MILLET ",
            image: "PearlMillet .jpeg", 
            details: "PEARL MILLET SPECIFICATIONS",
            // para:"Scientific Name: Paspalum scrobiculatum",

            para2: "Common Names: Bajra, Cumbu, Sajjalu, Kambu",
            
            

            
            
            nutritional: {
                Energy: " 378 Kcal per 100g.",
                Protein: " 11.6 g per 100g.",
                Fat : "3.3 g per 100g.",
                Carbohydrate:" 67 g per 100g.",
                "Dietary Fiber ": "8.5 g per 100g.",
                Calcium:" 42 mg per 100g.",
                Iron:" 8 mg per 100g."


            
            } ,
            // uses:"Food Products: Used to make traditional dishes such as porridge, bread, and beverages.",

            proSpecifications: {
                Commodity:" Pearl  Millet",
                Variety: "Whole Grain",
                Origin: " India",
                "Quality Specifications ": " "
       
                               
               
            } ,
            proSpecifications2:{
                Color:" Light yellow to dark grey",
                Moisture:" 12% max",
                Purity:" 99% min",
                "Foreign Matter":" 1% max",
                "Broken Grains": "2% max"
               


            },
                       
                   
            shipment: `Inspection: SGS or any other agency as per your requirement for weight and quality.<br>
            Packing: Standard in 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.<br>
            Mode of Payment: TT, LC<br>
            Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of confirmed purchase order and receipt of advance.<br>
            Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the customer to their port of choice.<br><br>`,           
            
        },
        {
            id: 7,
            name: "LITTLE MILLET ",
            image: "LittleMillet .jpeg", 
            details: "LITTLE MILLET SPECIFICATIONS",
          //  para:"Scientific Name: Paspalum scrobiculatum",

            para2: "Kutki, Sama, Saamai, Samalu",
            
            

            
            
            nutritional: {
                Energy: " 378 Kcal per 100g.",
                Protein: " 9.7 g per 100g.",
                Fat : "5.2 g per 100g.",
                Carbohydrate:" 60.9 g per 100g.",
                "Dietary Fiber ": "7.6 g per 100g.",
                Calcium:" 17 mg per 100g.",
                Iron:" 9.3 mg per 100g."


            
            } ,
            // uses:"Food Products: Used to make traditional dishes such as porridge, bread, and beverages.",

            proSpecifications: {
                Commodity:" Little  Millet",
                Variety: "Whole Grain",
                Origin: " India",
                "Quality Specifications ": " "
       
                               
               
            } ,
            proSpecifications2:{
                Color:" Light yellow to dark grey",
                Moisture:" 12% max",
                Purity:" 99% min",
                "Foreign Matter":" 1% max",
                "Broken Grains": "2% max"
               


            },
                       
                   
            shipment: `Inspection: SGS or any other agency as per your requirement for weight and quality.<br>
            Packing: Standard in 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.<br>
            Mode of Payment: TT, LC<br>
            Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of confirmed purchase order and receipt of advance.<br>
            Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the customer to their port of choice.<br><br>`,            
            
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
         document.querySelector('.para2').textContent = product.para2;
       
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
        const proSpecsList = document.querySelector('.proSpecifications');
        proSpecsList.innerHTML = '';  // Clear any previous content
        Object.keys(product.proSpecifications).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.proSpecifications[spec]}`;
            proSpecsList.appendChild(listItem);
        });


        const proSpecsList2 = document.querySelector('.proSpecifications2');
        proSpecsList2.innerHTML = '';  // Clear any previous content
        Object.keys(product.proSpecifications2).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.proSpecifications2[spec]}`;
            proSpecsList2.appendChild(listItem);
        });


        const proSpecsList3 = document.querySelector('.proSpecifications3');
        proSpecsList3.innerHTML = '';  // Clear any previous content
        Object.keys(product.proSpecifications3).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.proSpecifications3[spec]}`;
            proSpecsList3.appendChild(listItem);
        });


        const proSpecsList4 = document.querySelector('.proSpecifications4');
        proSpecsList4.innerHTML = '';  // Clear any previous content
        Object.keys(product.proSpecifications4).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.proSpecifications4[spec]}`;
            proSpecsList4.appendChild(listItem);
        });


        const proSpecsList5 = document.querySelector('.proSpecifications5');
        proSpecsList5.innerHTML = '';  // Clear any previous content

        Object.keys(product.proSpecifications5).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.proSpecifications5[spec]}`;
            proSpecsList5.appendChild(listItem);
        });










       
    }
});