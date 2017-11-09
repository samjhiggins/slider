$(document).ready(function(){ 
		
		var gallery = { 

			init : function(){
				console.log('current counter' + gallery.counter)
				this.slides.hide();
				this.slides.eq(0).show();
			},

			container : $('.slide-gallery'),

			slides : $('.slide-gallery img'),

			activeSlide : $('.slide-gallery img.active-slide'),

			enablebuttonnav : true,

			counter : 0,

			navigation : { 

				rightButton : $('.right-button'),
				leftButton : $('.left-button'),

				forward : function(){ 
					if(!gallery.counter + 1 === gallery.slides.length -1);
					{ 
						gallery.setActiveSlide(gallery.counter++);
					}					
				},
				backward : function(){ 
					if(!gallery.counter == 0){
						gallery.setActiveSlide(gallery.counter--)
					} 
					else { 
						return;
					}
				}
			},

			setActiveSlide : function(e){ 
				gallery.slides.hide();
				gallery.slides.eq(gallery.counter).show();
			}
		}

		$(document).keydown(function(e){
			if(e.keyCode == 37) { 
				gallery.navigation.backward();
			}
			else if(e.keyCode == 39) { 
				gallery.navigation.forward();
			}
		});
		
		gallery.init();
	
		gallery.navigation.rightButton.click(function(){ 
			gallery.navigation.forward();
		})
		gallery.navigation.leftButton.click(function(){ 
			gallery.navigation.backward();
		})
		
	});