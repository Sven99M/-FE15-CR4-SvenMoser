let data = JSON.parse(tasks);
console.log(data)

for (let index in data) {
    document.getElementById("result").innerHTML +=
        `<div class="col">
        <div class="card p-2 w-75" style="width: 18rem;">
        <section>
            <a href="#" class="btn btn-primary w-25 m-2">Task</a>
            <a href="#" class="w-25 m-2 "><i class="far fa-bookmark"></i></a>
            <a href="#" class="w-25 m-2 "><i class="fas fa-list"></i></a>
        </section>
          <img src="${data[index].img}" class="card-img-top" alt="...">
         
          <div class="card-body">
        <h5 class="card-title text-center">${data[index].title}</h5>
        <p class="card-text text-center">${data[index].text}</p>
        <hr>
        <div class="importance"><i class="fas fa-exclamation-circle"></i>
        <p>Priority Level: </p><p class="btn btn-secondary importancetext">${data[index].importance}</p></div>

        <div class="importance"><i class="fas fa-calendar-alt"></i>
        <p>Deadline:</p><p >${data[index].date}</p></div>
        <hr>
        <div class="cardButtons">
            <a href="#" class="btn btn-danger">Delete</a>
            <a href="#" class="btn btn-success">Done</a>
        </div>
          </div>
        </div>
        </div>
    </div>`
}