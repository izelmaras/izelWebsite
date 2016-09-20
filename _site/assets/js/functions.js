$(function(){
	openHamburgerMenu();

	$('.mobile-nav-toggle').on('click', function(){
		console.log('ehe')
	});
});

function openHamburgerMenu() {
	$('.mobile-nav-toggle').on('click', function(){
		$('.mobile-nav').addClass('.is-open')
			.siblings().removeClass('.is-open');
	});
	console.log('Clicked')
	//when I click this button
	//bring the menu 100 down
	//add the class
}

$('.mobile-nav-toggle').on('click', function(){
		$('.mobile-nav').addClass('.is-open')
			.siblings().removeClass('.is-open');
	});

$('.mobile-nav-toggle').click(function(){
    console.log('hey')
});