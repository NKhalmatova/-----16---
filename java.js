var studentData = [];

function createStudentInputs() {
  var studentCount = parseInt(document.getElementById("studentCount").value);
  var studentInputsContainer = document.getElementById("studentInputsContainer");
  studentInputsContainer.innerHTML = '';

  for (var i = 0; i < studentCount; i++) {
    var inputLabel = document.createElement("label");
    inputLabel.textContent = "Студент #" + (i + 1) + ": ";

    var firstNameInput = document.createElement("input");
    firstNameInput.type = "text";
    firstNameInput.placeholder = "Имя";
    firstNameInput.id = "firstName_" + i;

    var lastNameInput = document.createElement("input");
    lastNameInput.type = "text";
    lastNameInput.placeholder = "Фамилия";
    lastNameInput.id = "lastName_" + i;

    studentInputsContainer.appendChild(inputLabel);
    studentInputsContainer.appendChild(firstNameInput);
    studentInputsContainer.appendChild(lastNameInput);
    studentInputsContainer.appendChild(document.createElement("br"));
  }
}

function showStudentList() {
  var studentCount = parseInt(document.getElementById("studentCount").value);
  var studentList = document.getElementById("studentList");
  studentList.innerHTML = '';

  for (var i = 0; i < studentCount; i++) {
    var firstName = document.getElementById("firstName_" + i).value;
    var lastName = document.getElementById("lastName_" + i).value;

    if (firstName !== '' && lastName !== '') {
      var student = {
        firstName: firstName,
        lastName: lastName
      };

      studentData.push(student);

      var listItem = document.createElement("li");
      listItem.textContent = (i + 1) + ". " + firstName + " " + lastName;
      studentList.appendChild(listItem);
    }
  }
}