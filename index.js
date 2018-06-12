const key = 'a83cfe90';
var year;

$(document).ready(()=>{
	var selected = 'ID';

	$(".chosen").chosen({
		width: "95%"
	});


	$("select.chosen").change(function(){
        selected = $(".chosen option:selected").val();
        if (selected == 'Year'){
    		$('.search-section').append('<input type"text" name="year" class="year" placeholder="year"/>');
    		$('.year').css({'border-radius': '5px' , 'height':'25px'});
    		$('#search').attr("placeholder", "Enter ID here..");
    		year = $('.year').val();
    		console.log(year);
    	}
    	if (selected == 'ID' || selected=='Title'){
    		$('.year').hide();
    	}
    });

    $("#searchButton").click(function(){
    	var searchValue = $('#search').val();
    	console.log("value",searchValue);
    	if(selected == 'ID'){
    		$.ajax({
        		type: 'GET',
        		dataType: 'json',
        		async: true,
        		url: 'https://www.omdbapi.com/?i='+searchValue+'&apikey='+key,

        		success: (response) => {
            		console.log(response);
            		$('#name').text(response.Title);
            		$('#releaseYear').text(response.Year);
            		$('#genre').text(response.Genre);
            		$('#director').text(response.Director);
            		$('#language').text(response.Language);
            		//$('#movieDetail').append(JSON.stringify(response));

        		}, error: (err) => {

            		console.log(err.responseJSON.Error);
        		}

    		});
    	}
    	else if (selected == 'Title') {
    		$.ajax({
        		type: 'GET',
        		dataType: 'json',
        		async: true,
        		url: 'https://www.omdbapi.com/?apikey='+key+'&t='+searchValue,

        		success: (response) => {
            		console.log(response);
            		$('#name').text(response.Title);
            		$('#releaseYear').text(response.Year);
            		$('#genre').text(response.Genre);
            		$('#director').text(response.Director);
            		$('#language').text(response.Language);
            		//$('#movieDetail').append(JSON.stringify(response));

        		}, error: (err) => {

            		console.log(err.responseJSON.Error);

        		}

    		});
    	}
    	else if (selected == 'Year'){
    		$.ajax({
        		type: 'GET',
        		dataType: 'json',
        		async: true,
        		url: 'https://www.omdbapi.com/?apikey='+key+'&i='+searchValue+'&y='+year,

        		success: (response) => {
            		console.log(response);

            		$('#name').text(response.Title);
            		$('#releaseYear').text(response.Year);
            		$('#genre').text(response.Genre);
            		$('#director').text(response.Director);
            		$('#language').text(response.Language);
            		//$('#movieDetail').append(JSON.stringify(response));

        		}, error: (err) => {

            		console.log(err.responseJSON.Error);

        		}

    		});
    	}
    })
});