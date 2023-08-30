let todoList = document.getElementById("todoList");


//print data 
const printData = (todo) => {
    todo.forEach(item) => {
        todoList.innerHTML += `<div class="card-container">
                                <article class ="card"
                                    <div class ="card-title>
                                        <h3> ${item.id} ${item.todo} </h3>
                                    </div>
                                    <div class="card-body>
                                        <p>Status = ${item.completed? `<strong class = "success">Completed</strong>` : <strong></strong> }`
                                    <div>
                                    <div classs="footer">
                                        <a href=""></a>
                                    </div>
    }
}