function mySolution(){
	let questionInput = document.querySelector("#inputSection > textarea");
	let usernameInput = Array.from(document.querySelectorAll("input"))[0];
	let sendBtn = document.querySelector("button").addEventListener('click', addQuestion);
    let pendingQuestions = document.getElementById("pendingQuestions");
    let openQuestions = document.getElementById("openQuestions");

	function addQuestion(e){
		e.preventDefault();

		if (questionInput.value) {
			const div = document.createElement('div');
			const img = document.createElement('img');
			const span = document.createElement('span');
			const p = document.createElement('p');
			const div2 = document.createElement('div');
			const button1 = document.createElement('button');
			const button2 = document.createElement('button');
            const button3 = document.createElement('button');

			img.src = "./images/user.png";
			div.classList.add("pendingQuestion");
			if (usernameInput.value === "") {
				span.textContent = `Anonymous`;
			} else {
				span.textContent = `${usernameInput.value}`;
			}
			p.textContent = `${questionInput.value}`;
			div2.classList.add("actions");

			button1.classList.add("archive");
			button1.textContent = "Archive";
			button2.classList.add("open");
			button2.textContent = "Open";
            button3.classList.add("reply");
            button3.textContent = "Reply";


			img.width=32;
			img.height=32;
			div.appendChild(img);
			div.appendChild(span);
			div.appendChild(p);
			div2.appendChild(button1);
			div2.appendChild(button2);
			div.appendChild(div2);

			pendingQuestions.appendChild(div);

			button1.addEventListener('click',function (e) {
				div.remove();
			});

			button2.addEventListener('click',function (e) {
				div.remove();
				div.classList.remove("pendingQuestion");
				button1.remove();
				button2.remove();
				div.classList.add("openQuestion");
				div2.appendChild(button3);
				openQuestions.appendChild(div);
			});

			button3.addEventListener('click', function (e) {
                 const replyDiv = document.createElement("div");
                 replyDiv.classList.add("replySection");
				const input = document.createElement("input");
                 input.classList.add("replyInput");
                 input.placeholder="Reply to this question here...";
                 const replyBtn = document.createElement("button");
                 replyBtn.classList.add("replyButton");
                 replyBtn.textContent = "Send";

				if (button3.textContent === 'Reply') {
					replyDiv.style.display = 'block';
					button3.textContent = 'Back';
				} else {
					replyDiv.style.display = 'none';
					button3.textContent = 'Reply';
				}

                 replyBtn.addEventListener('click',function () {
					 const li = document.createElement("li");
					 li.textContent = `${input.value}`;
					 ol.appendChild(li);
				 });

				const ol = document.createElement("ol");
				ol.classList.add("reply");
				ol.type = "1";



				replyDiv.appendChild(input);
				replyDiv.appendChild(replyBtn);

				replyDiv.appendChild(ol);
				openQuestions.appendChild(replyDiv)

			})
		}
	}
}