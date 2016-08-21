//javascript//
// iife immidiately  invoked function expression
(function(){
	
	"use strict";
	
 var RetrieveData;
    /*
     * This function reads data from the paragraphs.json file and aligns them with their 
     * respective ID's with the innerHTML using the if statement 
     */
    function read() {
        if ((RetrieveData.readyState === 4) && (RetrieveData.status === 200)) {

            var MyData = JSON.parse(RetrieveData.responseText);
            var paragraphs = MyData.paragraphs;
            paragraphs.forEach(function (paragraph) {
                var paragraphElement = document.getElementById(paragraph.id);
                //looks for the element id and aligns it with the paragraphs in the html
                if(paragraphElement) {
                     paragraphElement.innerHTML = paragraph.content;
                }
               
            }, this);
        }
    }
    /*
    This functions loads data from the paragraph.json file to the html file
    @method load
    @return void
    */
    function load(){
        RetrieveData = new XMLHttpRequest();
        RetrieveData.open("GET","Scripts/paragraphs.json",true);
        RetrieveData.send(null);
        RetrieveData.addEventListener("readystatechange",read);
    }
    function init() { 
     //calls the load function 
        load();
     };
     //loads the init function after loading all the html functions 
    window.addEventListener("load",init);
    })();
	