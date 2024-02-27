function home_visible()
{
	var birthday_part = document.getElementById("birthday_part");
	var poem_part = document.getElementById("poem_part");
	var photo_part = document.getElementById("photo_part");
	var music_part = document.getElementById("music_part");
	var letter_part = document.getElementById("letter_part");
	birthday_part.style.display = 'flex';
	poem_part.style.display = 'none';
	photo_part.style.display = 'none';
	music_part.style.display = 'none';
	letter_part.style.display = 'none';
}

function poem_visible()
{
	var birthday_part = document.getElementById("birthday_part");
	var poem_part = document.getElementById("poem_part");
	var photo_part = document.getElementById("photo_part");
	var music_part = document.getElementById("music_part");
	var letter_part = document.getElementById("letter_part");
	birthday_part.style.display = 'none';
	poem_part.style.display = 'flex';
	photo_part.style.display = 'none';
	music_part.style.display = 'none';
	letter_part.style.display = 'none';
}

function photo_visible()
{
	var birthday_part = document.getElementById("birthday_part");
	var poem_part = document.getElementById("poem_part");
	var photo_part = document.getElementById("photo_part");
	var music_part = document.getElementById("music_part");
	var letter_part = document.getElementById("letter_part");
	birthday_part.style.display = 'none';
	poem_part.style.display = 'none';
	photo_part.style.display = 'flex';
	music_part.style.display = 'none';
	letter_part.style.display = 'none';
}

function music_visible()
{
	var birthday_part = document.getElementById("birthday_part");
	var poem_part = document.getElementById("poem_part");
	var photo_part = document.getElementById("photo_part");
	var music_part = document.getElementById("music_part");
	var letter_part = document.getElementById("letter_part");
	birthday_part.style.display = 'none';
	poem_part.style.display = 'none';
	photo_part.style.display = 'none';
	music_part.style.display = 'flex';
	letter_part.style.display = 'none';
}

function letter_visible()
{
	var birthday_part = document.getElementById("birthday_part");
	var poem_part = document.getElementById("poem_part");
	var photo_part = document.getElementById("photo_part");
	var music_part = document.getElementById("music_part");
	var letter_part = document.getElementById("letter_part");
	birthday_part.style.display = 'none';
	poem_part.style.display = 'none';
	photo_part.style.display = 'none';
	music_part.style.display = 'none';
	letter_part.style.display = 'flex';
}