```javascript
const roles = [
    "Python Developer",
    "Data Analyst",
    "AI & Data Science Student",
    "Machine Learning Enthusiast"
];

let roleIndex = 0;
let characterIndex = 0;

const typingText = document.getElementById("typing-text");

function typeRole() {

    if (characterIndex < roles[roleIndex].length) {

        typingText.textContent +=
            roles[roleIndex].charAt(characterIndex);

        characterIndex++;

        setTimeout(typeRole, 100);

    } else {

        setTimeout(deleteRole, 1500);
    }
}


function deleteRole() {

    if (characterIndex > 0) {

        typingText.textContent =
            roles[roleIndex].substring(0, characterIndex - 1);

        characterIndex--;

        setTimeout(deleteRole, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeRole, 300);
    }
}


typeRole();
```
