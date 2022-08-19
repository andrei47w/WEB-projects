$((function () {
    function refresh() {
        let model = $("#model")
        $.getJSON("showCars.php", {model: model.val()}, function (json) {
            $("table tr:gt(0)").remove()
            json.forEach(function (thing) {
                $("table").append(`<tr>
                                <td>${thing[0]}</td>
                                <td>${thing[1]}</td>
                                <td>${thing[2]}</td>
                                <td>${thing[3]}</td>
                                <td>${thing[4]}</td>
                                <td>${thing[5]}</td>
                                <td>${thing[6]}</td>
                                <td>
                                    <button type="submit" onclick="window.location.href='updateCar.html?id=${thing[7]}'">update</button>
                                    <br>
                                    <form action="deleteCar.php" method="post">
                                        <input type="hidden" name="id" value="${thing[7]}">
                                        <button type="submit">delete</button>
                                    </form>
                                    <br>
                                </td>
                                </tr>`)
            })
        })
        $("#info").text(`Searched by "${model.val()}"`)
    }

    $("#model").on("input", function () {
        refresh()
    })
    refresh()
}));
