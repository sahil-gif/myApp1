class dq{
    constructor(){
      this.quest = createElement('h2');
      this.quest.style('font-size', '24px');
      this.quest.style('color', 'green');
      
      this.radio1 = createRadio('h3');
      this.radio1.option('Yes');
      this.radio1.option('No');
      this.radio1.hide();
     // this.radio1.visible = false ;
     // this.radio2= createRadio('h3');

      this.quest2 = createElement('h2');
      this.quest2.style('color', 'yellow');
      this.radio3 = createRadio('h3');
      this.radio3.option('Yes');
      this.radio3.option('No');
      this.radio3.hide();
     // this.radio3.visible = false ;
     // this.radio4 = createRadio('h3');

      this.quest3 = createElement('h2');
      this.radio5 = createRadio('h3');
      this.radio5.option('Yes');
      this.radio5.option('No');
      this.radio5.hide();
     // this.radio6 = createRadio('h3');

      this.quest4 = createElement('h2');
      this.radio7 = createRadio('h3');
      this.radio7.option('Yes');
      this.radio7.option('No');
      this.radio5.hide();
    //  this.radio8 = createRadio('h3');

      this.quest5 = createElement('h2');
      this.radio9 = createRadio('h3');
      this.radio9.option('Yes');
      this.radio9.option('No');
      this.radio9.hide();
     // this.radio10 = createRadio('h3');

      this.quest6 = createElement('h2');
      this.radio11 = createRadio('h3');
      this.radio11.option('Yes');
      this.radio11.option('No');
      this.radio11.hide();
     // this.radio12 = createRadio('h3');

      this.quest7 = createElement('h2');
      this.radio13 = createRadio('h3');
      this.radio13.option('Yes');
      this.radio13.option('No');
      this.radio13.hide();

      this.back = createButton('BACK');

      this.back.hide();


    }
    display(){
        this.quest.html("Q) Are you Urinating often ?");
        this.quest.position(displayWidth/2-600,displayHeight/2-390);
        
        this.radio1.position(displayWidth/2-550,displayHeight/2-325);
        
        this.radio1.position(displayWidth/2-400,displayHeight/2-325);
        this.radio1.show();

        this.quest2.html("Q) Are you Feeling very thirsty ?");
        this.quest2.position(displayWidth/2-600,displayHeight/2-290);
     
        this.radio3.position(displayWidth/2-550,displayHeight/2-225);
       
        this.radio3.position(displayWidth/2-400,displayHeight/2-225);
        this.radio3.show();

       
          this.quest3.html("Q) Are you Feeling very hungry—even though you are eating ?");
         this.quest3.position(displayWidth/2-600,displayHeight/2-190);
        
         this.radio5.position(displayWidth/2-550,displayHeight/2-125);
        
         this.radio5.position(displayWidth/2-400,displayHeight/2-125); 
         this.radio5.show();
 
         this.quest4.html("Q) Are you experiencing Extreme fatigue ?");
         this.quest4.position(displayWidth/2-600,displayHeight/2-90);
       
         this.radio7.position(displayWidth/2-550,displayHeight/2-25);
        
         this.radio7.position(displayWidth/2-400,displayHeight/2-25);
         this.radio7.show();

         this.quest5.html("Q) Are you experiencing Blurry vision ?");
         this.quest5.position(displayWidth/2-600,displayHeight/2+10);
        
         this.radio9.position(displayWidth/2-550,displayHeight/2+75);
        
         this.radio9.position(displayWidth/2-400,displayHeight/2+75);
         this.radio9.show();

         this.quest6.html("Q) Are you experiencing Cuts/bruises that are slow to heal ?");
         this.quest6.position(displayWidth/2-600,displayHeight/2+110);
        
         this.radio11.position(displayWidth/2-550,displayHeight/2+175);
         
         this.radio11.position(displayWidth/2-400,displayHeight/2+175);
         this.radio11.show();

         this.quest7.html("Q) Are you experiencing  Weight Loss- even though you are eating more (type 1) ?");
         this.quest7.position(displayWidth/2-600,displayHeight/2+210);
        
         this.radio13.position(displayWidth/2-550,displayHeight/2+275);
        
         this.radio13.position(displayWidth/2-400,displayHeight/2+275);
         this.radio13.show();


       /*   this.quest8.html("Q) Are you experiencing Tingling, pain, or numbness in the hands/feet (type 2) ?");
         this.quest8.position(displayWidth/2-600,displayHeight/2+310);
         this.radio15.option('Yes');
         this.radio15.position(displayWidth/2-550,displayHeight/2+375);
         this.radio16.option('No');
         this.radio16.position(displayWidth/2-400,displayHeight/2+375);
 */

//this.back.html('BACK
this.back.show();
this.back.position(displayWidth/2+400,displayHeight/2-350);

this.back.mousePressed (()=>{

    form2.display();
    this.back.hide();
    this.radio3.hide();
    this.radio1.hide();
    
    this.quest.hide();
   
    this.radio5.hide();
    
    this.radio7.hide();
    
    this.radio9.hide();
    
    this.radio11.hide();
   
    this.radio13.hide();
    
    
    this.quest2.hide();
    this.quest3.hide();
    this.quest4.hide();
    this.quest5.hide();
    this.quest6.hide();
    this.quest7.hide();
   

   
   })
    }
}