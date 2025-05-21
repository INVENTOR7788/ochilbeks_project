$(document).ready(function() {
    $.ajax({
        url: "http://localhost:3031/api/movies",
        type: "POST",
        success: function(data) {
            data = JSON.parse(data)
            var html = "";
            console.log(data)
            data.forEach(element => {
                html+=`
                <tr>
                    <th>${element.movie_title}</th>
                    <th>${element.movie_views}</th>
                    <th><a href="http://localhost:3031/api/movies/delete/${element.movie_id}" class="btn btn-danger btn-sm">Delete</a></th>
                </tr>
                    `
            });
            $("#tbody").html(html);
        }
    })
})

$(document).ready(function() {
    $("#add_btn").on('click', function() {
        $.ajax({
            url: "http://localhost:3031/api/movies/create/",
            type: "POST",
            data: {
                title: $("#title").val(),
                views: $("#views").val(),
            },
            success: function() {
                console.log("sa")
                window.location.href = "file:///home/hzkl/Documents/ochilbeks_project/index.html"
            }
        })
    })
})