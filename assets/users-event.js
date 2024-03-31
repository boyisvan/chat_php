const searchBar = document.querySelector(".search input"); //lấy dữ liệu tìm kiếm 
const searchIcon = document.querySelector(".search button");//nút tìm kiếm
const usersList = document.querySelector(".users-list");//danh sách người dùng

searchIcon.onclick = function(){
	searchBar.classList.toggle("show");
	searchIcon.classList.toggle("active");
	searchBar.focus();

	if(searchBar.classList.contains("active")){
		searchBar.value = "";
		searchBar.classList.remove("active")
	}
}

searchBar.onkeyup = () => {
	let searchTerm = searchBar.value;
	if(searchTerm !== ""){
		searchBar.classList.add("active");
	} else {
		searchBar.classList.remove("active")
	}

	let xhr = new XMLHttpRequest();
	xhr.open("POST", 'api/search.php', true);
	xhr.onload = () => {
		if((xhr.readyState === XMLHttpRequest.DONE) && (xhr.status === 200)){
			usersList.innerHTML = xhr.response;
		}
	}
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("searchTerm="+searchTerm);
}

setInterval(() => {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", 'api/users.php', true);
	xhr.onload = () => {
		if((xhr.readyState === XMLHttpRequest.DONE) && (xhr.status === 200)){
			if(!searchBar.classList.contains("active")){
				usersList.innerHTML = xhr.response;
			}
		}
	}
	xhr.send();
}, 500)