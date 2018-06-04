console.log("Hello World");

var age = 25;

if (age < 20)
    {
        console.log("John is a teenager \n");
        
    }

else if (age > 20 && age < 30  )

{
    console.log("John is a young man");
    
}
else 
    {
        console.log("John is a man \n");
    }


//Using switch

var job = "teacher";
job = prompt("What does John do?");
switch(job){
        
    case "teacher" : console.log("John teaches!");
                        break;
    case "pilot"   : console.log("John flies planes");
                        break;
    case "cop"     : console.log("John helps fight crime! ");
                        break;
        
    default        : console.log("Jobless John");
                        break;
}
