p1="";
p2="";
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  camera=document.getElementById("camera");
  function take_snapshot()
{
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById("result").innerHTML = 
         '<img id="imageprev" src="'+data_uri+'"/>';
        } );
}
console.log('ml5',ml5.version);
daksh=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Vo0vfNh3S/model.json',modelLoaded)
function modelLoaded()
 {
   console.log('Model Loaded!');
  }
  function speak()
  {
    var s=window.speechSynthesis;
    s1="The first prediction is "+p1;
    s2="The second prediction is "+p2;
    var utter=new SpeechSynthesisUtterance(s1+s2);
    s.speak(utter);
  }
  function check()
  {
   img=document.getElementById('imageprev');
    daksh.classify(img,gotresult);
  }
  function gotresult(error,results)
{
   if (error)
   {
    
    console.error(error);

   }
   else
   {
     console.log (results);
     document.getElementById("result1").innerHTML = results[0].label;
     document.getElementById("result2").innerHTML = results[1].label;
     p1=results[0].label;
     p2=results[1].label;
     speak();
     if(results[0].label=="victory")
     {
      document.getElementById("update1").innerHTML="&#9996;"; 
     }
     if(results[0].label=="up")
     {
      document.getElementById("update1").innerHTML="&#128070;"; 
     }
     if(results[0].label=="writting")
     {
      document.getElementById("update1").innerHTML="&#9997;"; 
     }
     if(results[1].label=="victory")
     {
      document.getElementById("update1").innerHTML="&#9996;"; 
     }
     if(results[1].label=="up")
     {
      document.getElementById("update1").innerHTML="&#128070;"; 
     }
     if(results[1].label=="writting")
     {
      document.getElementById("update1").innerHTML="&#9997;"; 
     }
    }
  }
  
