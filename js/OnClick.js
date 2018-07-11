

var detectSelection = false;
//var name = window.detectSelection;

console.log('loaded1');


var storeClickArray = [];
var storeClickArrayCount = [];
var flag = 0;
var storeClick = 0;
var tempDevice;


$('body').on("click", '.data', function(e){
	console.log('clicked');



	if(e.metaKey || e.ctrlKey){
		
		var clickData = [];
		var deviceName = [];
		detectSelection = true;
		

		if(storeClick > 0){
			
			for(var i=0; i<storeClick; i++){
				
				if(String(d3.select(this).data().map(function(d){return d.Device})) == String(storeClickArray[i].data().map(function(d){return d.Device}))){
					
					flag = 1;
					tempDevice = i;

				}
			}

			if(flag != 1){

				storeClickArray[storeClick] = d3.select(this);
				storeClick++;
				flag = 0;

			}

			else {

				storeClickArray.splice(tempDevice,1);
				storeClick--;
				flag = 0;
			}

			
		}

		else{
			storeClickArray[storeClick] = d3.select(this);
			storeClick++;
			
		}





		d3.selectAll('.point')
			.style('opacity', 0.15);

		d3.selectAll('.point2')
			.style('opacity', 0.15);

		d3.selectAll('.point3')
			.style('opacity', 0.15);

		d3.selectAll('.point4')
			.style('opacity', 0.15);

		d3.selectAll('.point5')
			.style('opacity', 0.15);

		d3.selectAll('.point61')
			.style('opacity', 0.15);

		d3.selectAll('.point62')
			.style('opacity', 0.15);

		d3.selectAll('.point63')
			.style('opacity', 0.15);

		d3.selectAll('.point64')
			.style('opacity', 0.15);

		d3.selectAll('.point65')
			.style('opacity', 0.15);

		d3.selectAll('.point66')
			.style('opacity', 0.15);


		d3.selectAll('.point71')
			.style('opacity', 0.15);

		d3.selectAll('.point72')
			.style('opacity', 0.15);

		d3.selectAll('.point73')
			.style('opacity', 0.15);

		d3.selectAll('.point74')
			.style('opacity', 0.15);

		d3.selectAll('.point75')
			.style('opacity', 0.15);


		d3.selectAll('.point81')
			.style('opacity', 0.15);

		d3.selectAll('.point82')
			.style('opacity', 0.15);

		d3.selectAll('.point83')
			.style('opacity', 0.15);

		d3.selectAll('.point84')
			.style('opacity', 0.15);

		d3.selectAll('.point85')
			.style('opacity', 0.15);


		



		console.log('storeClick= ' + storeClick);

		if(storeClick!=0){

			for(var i=0; i<storeClick; i++){
				
				

			clickData[i] = storeClickArray[i].data();


			clickData[i].forEach(function(d){
				deviceName[i] = d.Device;
			});



			//d3.selectAll('.data').filter(function(d){return d.Device == deviceName[i];}).style('opacity', 1);

			d3.selectAll('.point')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);


			d3.selectAll('.point2')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);


			d3.selectAll('.point3')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point4')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1); 

			d3.selectAll('.point5')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point61')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point62')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point63')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point64')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point65')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point66')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);


			d3.selectAll('.point71')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point72')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point73')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point74')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point75')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point81')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point82')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point83')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point84')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);

			d3.selectAll('.point85')
				.filter(function(d){return d.Device == deviceName[i];})
				.style('opacity', 1);
				

			}

		}

		else{
			d3.selectAll('.data').style('opacity', 1);
		    detectSelection = false;
		}



	}

	else{

		console.log('test-4');
		
		// Get the modal
		  var modal = document.getElementById('myModal');

		  // Get the button that opens the modal
		  

		  // Get the <span> element that closes the modal
		  var span = document.getElementsByClassName("close")[0];

		  // When the user clicks the button, open the modal 
		 
	      modal.style.display = "block";
		  

		  // When the user clicks on <span> (x), close the modal
		  span.onclick = function() {
		      modal.style.display = "none";
		  }

		  // When the user clicks anywhere outside of the modal, close it
		  window.onclick = function(event) {
		      if (event.target == modal) {
		          modal.style.display = "none";
		      }
		  }


		 

		$('.modal-header h2').html(String(d3.select(this).data().map(function(d){return d.Device})))

		
		
		var folder = 'https://ubc-haptipedia.github.io/' + String(d3.select(this).data().map(function(d){return d.Device}));
		$('.carousel-inner').html('');
		$('.carousel-indicators').html('');

		//Checking if image url is valid or not
		
        var imageTemp = [];
        
        var count=1;

        for(var i=0; i<15; i++){
        	imageTemp[i] = folder + '/Figure' + (i+1) + '-1.png';

        }

        function imageExists(url, callback) {
			var img = new Image();
			img.onload = function () { callback(true); };
			img.onerror = function () { callback(false); };
			img.src = url;
		}
		

		function imageurlcheck(i) 
		{
			imageExists(imageTemp[i], function (exists) {
			//Show the result
			if (exists == true) 
			{ 
				
				//console.log(imageData[i]);
				$('<li data-target="#carouselExampleIndicators" data-slide-to="'+count+'"></li>').appendTo('.carousel-indicators');
				$('<div class="carousel-item"><img src="'+imageTemp[i]+'"></div>').appendTo('.carousel-inner');
				count++;
				$('#carouselExampleIndicators').carousel();
				$('.carousel-item').eq(0).addClass('active');
				$('.carousel-indicators > li').eq(0).addClass('active');
				console.clear();
			}
			
			
			
			});

		}

		for (var i = 0; i < 15; i++)
		{ 
			imageurlcheck(i);
		} 

		
		
		

		
	}

});





d3.select('#reset').on('click', function(){

	window.location.assign("https://ubc-haptipedia.github.io/");
	
	
});

d3.select('#undo').on('click', function(){

	alert('To be Added');
	
	
});

//Definitions

var mouseX;
	var mouseY;
	$(document).mousemove( function(e) {
	   // mouse coordinates
	   mouseX = e.pageX; 
	   mouseY = e.pageY - 150;

	});  

	//Portability

	$('.body').on('mouseover', '.portability-label', function(){
		console.log('hover over portability');
		$('.portability-def').show();
	})


	$('.body').on('mousemove', '.portability-label', function(){
	      $('.portability-def').css({'top':mouseY,'left':mouseX + 30});   
	}); 


	$('.body').on('mouseout', '.portability-label', function(){

		$('.portability-def').hide();
	});

	//Robustness

	$('.body').on('mouseover', '.robustness-label', function(){

		$('.robustness-def').show();
	})


	$('.body').on('mousemove', '.robustness-label', function(){
	      $('.robustness-def').css({'top':mouseY,'left':mouseX + 30});   
	}); 


	$('.body').on('mouseout', '.robustness-label', function(){

		$('.robustness-def').hide();
	});


	//Fabricability

	$('.body').on('mouseover', '.fabricability-label', function(){

		$('.fabricability-def').show();
	})


	$('.body').on('mousemove', '.fabricability-label', function(){
	      $('.fabricability-def').css({'top':mouseY,'left':mouseX + 30});   
	}); 


	$('.body').on('mouseout', '.fabricability-label', function(){

		$('.fabricability-def').hide();
	});

	//Obtainability

	$('.body').on('mouseover', '.obtainability-label', function(){
		$('.obtainability-def').show();
	})


	$('.body').on('mousemove', '.obtainability-label', function(){
	      $('.obtainability-def').css({'top':mouseY,'left':mouseX + 30});   
	}); 


	$('.body').on('mouseout', '.obtainability-label', function(){

		$('.obtainability-def').hide();
	});

	//Repairability

	$('.body').on('mouseover', '.repairability-label', function(){

		$('.repairability-def').show();
	})


	$('.body').on('mousemove', '.repairability-label', function(){

	      $('.repairability-def').css({'top':mouseY,'left':mouseX + 30});   
	}); 


	$('.body').on('mouseout', '.repairability-label', function(){


		$('.repairability-def').hide();
	});



