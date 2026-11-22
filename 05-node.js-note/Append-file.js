// Example 2

fs.writeFile("student.txt", "My name is Amit", function(err) {

    if (err) {
        console.log(err);
    } else {
        console.log("File Created Successfully");

        fs.appendFile("student.txt", "\nI am learning Node.js", function(err) {

            if (err) {
                console.log(err);
            } else {
                console.log("Data Added Successfully");

                fs.readFile("student.txt", "utf8", function(err, data) {

                    if (err) {
                        console.log(err);
                    } else {
                        console.log("File Data:");
                        console.log(data);
                    }

                });
            }

        });
    }

});
