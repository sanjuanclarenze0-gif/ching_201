 $("#submit").click(function(){
    if($("#email").val()==='' && $("#password").val()===''){
    //alert('Email And Password is Required');
    Swal.fire({
        title: "Invalid!",
        text: "Email And Password is Required",
        icon: "error"
});    
} else{
    //alert('Email And Password is Accepted');
    Swal.fire({
        title: "Accepted!",
        text: "Email And Password is Accepted ",
        icon: "success"
});
}
});
 
 const userForm = document.getElementById('userForm');
        const tableBody = document.getElementById('userTableBody');

        // Store data in an array (The "List")
        let userDataList = [];

        userForm.addEventListener('submit', function(e) {
            e.preventDefault();

            
            const newUser = {
                fname: document.getElementById('fname').value,
                mname: document.getElementById('mname').value,
                lname: document.getElementById('lname').value,
                age: document.getElementById('age').value,
                email: document.getElementById('email').value
            };

            userDataList.push(newUser);

            renderTable();

            userForm.reset();
        });

        function renderTable() {
  
            tableBody.innerHTML = "";

            userDataList.forEach(user => {
                const row = `<tr>
                    <td>${user.fname}</td>
                    <td>${user.mname}</td>
                    <td>${user.lname}</td>
                    <td>${user.age}</td>
                    <td>${user.email}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        }