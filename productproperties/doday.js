var todaysproducts=[                         //describing products
     {
       image:"image/rahul.jpg",
       cat: "shirts",
       brand:"ismav",
       price:1000
    },
    {
       image:"image/rahul.jpg",
       cat: "shirts",
       brand:"Ismav",
       price:1000
    },
    {
       image:"image/rahul.jpg",
       cat: "shirts",
       brand:"ismav",
       price:1000
    },
    {
       image:"image/rahul.jpg",
       cat: "shirts",
       brand:"ismav",
       price:1000
    }
         ]
 var prodcont= document.getElementById("dodaycont");    // getting id dodaycont from html file and storing in prodcont

   var text ="";                                        // temp variable -text
 for (p of todaysproducts){                           // using forloop to access todaysproducts
 	text+= "<div class ='product'><img src="+p.image+"><div>"+p.cat+"</div><div class ='brand'>"+p.brand+"</div><div class ='cost'>"+p.price+"</div></div>"                                                        
 	// created class for each property of products
 }


      prodcont.innerHTML= text;                       
