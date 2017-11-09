$(document).ready(function(){ 
		
		var gallery = { 

			init : function(){
				this.slides.hide();
				this.activeSlide.show();
			},

			container : $('.slide-gallery'),

			slides : $('.slide-gallery img'),

			activeSlide : $('.slide-gallery img.active-slide'),

			navigation : { 
				rightButton : $('.right-button'),
				leftButton : $('.left-button'),
				forward : function(){ 
					gallery.activeSlide.removeClass('active-slide');					
				},
				backward : function(){ 
					console.log('back');
				}
			}
		}

		
		gallery.init();
	
		gallery.navigation.rightButton.click(function(){ 
			gallery.navigation.forward();
		})
		gallery.navigation.leftButton.click(function(){ 
			gallery.navigation.backward();
		})
		
	});