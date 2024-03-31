const form = document.querySelector('.typing-area');
const inputField = form.querySelector('.input-field'); //dữ liệu người dùng nhập
const sendBtn = form.querySelector('button');			//khi người dùng ấn nút gửi
const chatBox = document.querySelector('.chat-box');	//lấy phần tử để hiển thị vào chatbox

const incoming_id = form.querySelector('.incoming_id').value;


form.onsubmit = (e) => {
	e.preventDefault();
}

inputField.focus();
inputField.onkeyup = () => {
	if(inputField.value != ""){
		sendBtn.classList.add("active")
	} else {
		sendBtn.classList.remove("active")
	}
}
//gửi tin nhắn ghi người dùng ấn nút gửi
sendBtn.onclick = () => {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", 'api/insert-chat.php', true);
	xhr.onload = () => {
		if((xhr.readyState === XMLHttpRequest.DONE) && (xhr.status === 200)){
			inputField.value = "";
			scrollToBottom();
		}
	}
	let formData = new FormData(form);
	xhr.send(formData);
}
//hàm lấy tin nhắn mới mỗi 500s
setInterval(() => {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", 'api/get-chat.php', true);
	xhr.onload = () => {
		if((xhr.readyState === XMLHttpRequest.DONE) && (xhr.status === 200)){
			chatBox.innerHTML = xhr.response;
			if(!chatBox.classList.contains('active')){
				scrollToBottom();
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send('incoming_id='+incoming_id);
}, 500)

//ngăn người dùng cuộn lên xem
chatBox.onmouseenter = () => {
	chatBox.classList.add('active')
}

chatBox.onmouseleave = () => {
	chatBox.classList.remove('active')
}

function scrollToBottom(){
	chatBox.scrollTop = chatBox.scrollHeight;
}