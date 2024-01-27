https://teachablemachine.withgoogle.com/models/PvElK2Zlp/

function startClassification()

{

   navigator.mediaDevices.getUserMedia({audio:true});

   classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PvElK2Zlp/model.json', modelReady);

}

function modelReady()

{

   classifier.classify(gotResults);

}

 
if(error)

{

   console.error(error);

}

else 

{

   console.log(results);

   random_number_r = Math.floor(Math.random() * 255) +1;

  
   random_number_g = Math.floor(Math.random() * 255) +1; 

   
   random_number_b = Math.floor(Math.random() * 255) +1;

   document.getElementById("result_label").innerHTML = 'I can hear-'+

   results[0].label;

   document.getElementById("result_confidence").innerHTML = 'Accuracy - '+

   (results[0].confidence*100).toFixed(2)+"%";

   document.getElementById("result_label").style.color = "rgb("

   +random_number_r+","+random_number_g+","+random_number_r+")";

   document.getElementById("result_confidence").style.color = "rgb("

   +random_number_r+","+random_number_g+","+random_number_r+")";

   img = document.getElementById('Cat.webp');

   img1 = document.getElementById('Dog.png');


if (results[0].label == "Bark")

{

   img.src = 'Cat.webp';
   
   img1.src = 'dog gif';


}

else if(results[0].label == "Meow")

{

   img.src = 'cat gif';

   img1.src = 'Dog.png';

}

}

}