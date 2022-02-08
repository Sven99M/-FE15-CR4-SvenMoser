let data = JSON.parse(tasks);


// sort button doesnt work

for (let index in data) {
    document.getElementById("sortbutton").addEventListener("click", function() {

        function sorter() {
            data.sort(function(a, b) {
                return b.importance - a.importance
            });
        }
        sorter();

    })
}

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
        <div class="importance btn" id="importanceicon${index}"><i class="fas fa-exclamation-circle"></i>
        <p>Priority Level: </p>
        <p class="btn greenbg" id="importancetext${index}">${data[index].importance}</p>
        </div>

        <div class="importance btn"><i class="fas fa-calendar-alt"></i>
        <p>Deadline:</p>
        <p class="date">${data[index].date}</p></div>
        <hr>
        <div class="cardButtons">
            <a href="#" class="btn btn-danger"><i class="fas fa-trash-alt"></i>Delete</a>
            <a href="#" class="btn btn-success"><i class="fas fa-check"></i>Done</a>
        </div>
          </div>
        </div>
        </div>
    </div>`;

}
for (let index in data) {
    document.getElementById(`importanceicon${index}`).addEventListener("click", function() {
        var increase = document.getElementById(`importancetext${index}`);
        if (increase.innerHTML < 5)
            increase.innerHTML++;
        if (increase.innerHTML <= 1) {
            increase.style.backgroundColor = "#198754";
        } else if (increase.innerHTML <= 3) {
            increase.style.backgroundColor = "#ffc107";
        } else if (increase.innerHTML <= 5) {
            increase.style.backgroundColor = "#dc3545";
        }
    })

}
// tried to do the sortbutton


let btns = document.getElementsByClassName("product-button");

for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function() {

        addToCart(products[i], i);

    })

}
//Comparer Function   
// document.getElementById("sortbutton").addEventListener("click", GetSortOrder() {

//             function GetSortOrder(prop) {
//                 return function(a, b) {
//                     if (a[prop] > b[prop]) {
//                         return 1;
//                     } else if (a[prop] < b[prop]) {
//                         return -1;
//                     }
//                     return 0;
//                 }
//             }

//             array.sort(GetSortOrder("sortbutton")); //Pass the attribute to be sorted on    
//             document.write("Sorted Employee Names : ");
//             for (var item in array) {
//                 document.write("<br>" + array[item].EmployeeName);
//             }