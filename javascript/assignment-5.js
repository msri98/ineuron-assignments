//Author: Srinivasu Machineni
//Email: machisri@gmail.com
//Course Attended: Full Stack Blockchain Development
//*********************************************************************/
//Write a JavaScript program to get the volume of a Cylinder, Sphere and
//Cone with four decimal places using objects and classes.
//***********************************************************************/
//Cylinder
class Cylinder {
    // Public variables    
    radius = 0;
    height = 0;
    //Constructor
    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
      }

    getNround(roundn , volume) 
      {
        const d = Math.pow(10, roundn);
        return Math.round((volume + Number.EPSILON) * d) / d;
      }  
    //Method to get Volume of a Cylinder  
    getVolume() {
        
        if ((this.height <= 0) || (this.radius <= 0)) {
           console.log("Please enter positive ingeters for Cylinder: radius and height !");
        }
        else { 
            const volm = ((22/7) * Math.pow(this.radius, 2) * this.height);
            const rounded_volm = this.getNround(4,volm);
            console.log(`Cylinder Volume:${rounded_volm}`);
        }
    }

}  
      
const acylinder = new Cylinder(height=9,radius=5);
acylinder.getVolume()


//  Sphere

class Sphere {
    // Public variables    
    radius = 0;
    
    //Constructor
    constructor(radius) {
        this.radius = radius;
      }

    static getNround(roundn , volume) 
      {
        const d = Math.pow(10, roundn);
        return Math.round((volume + Number.EPSILON) * d) / d;
      }  
    //Method to get Volume of a Cylinder  
    getVolume() {
        
        if  (this.radius <= 0) {
           console.log("Please enter positive ingeter for Sphere: radius !");
        }
        else { 
            const volm = ((4/3) * (22/7) * Math.pow(this.radius, 3));
            const rounded_volm = Sphere.getNround(4,volm);
            console.log(`Sphere Volume:${rounded_volm}`);
        }
    }

}  
      

const asphere = new Sphere(radius=5);
asphere.getVolume()


//Cone

class Cone {
    // Public variables    
    radius = 0;
    height = 0;
    //Constructor
    constructor(height,radius) {
        this.height = height;
        this.radius = radius;
      }

    static getNround(roundn , volume) 
      {
        const d = Math.pow(10, roundn);
        return Math.round((volume + Number.EPSILON) * d) / d;
      }  
    //Method to get Volume of a Cylinder  
    getVolume() {
        
        if ((this.height <= 0) || (this.radius <= 0)) 
        {
           console.log("Please enter positive ingeters for Cone: height and radius !");
        }
        else { 
            const volm = (((22/7) * Math.pow(this.radius, 2) * this.height)/3);
            const rounded_volm = Sphere.getNround(4,volm);
            console.log(`Cone Volume:${rounded_volm}`);
        }
    }

}  
      

const acone = new Cone(height=8,radius=5);
acone.getVolume()