<!DOCTYPE html>
<html>
<body>

<script>

function Student(name, age) {

    // properties
    this.name = name;
    this.age = age;

    // method
    this.display = function() {
        return "Name: " + this.name + " Age: " + this.age;
    };

    // accessor
    Object.defineProperty(this, "info", {
        get: function() {
            return this.name + " is " + this.age + " years old";
        }
    });
}

// constructor call
let s1 = new Student("Syam", 22);

document.write(s1.display() + "<br>");

document.write("Accessor Output: " + s1.info);

</script>

</body>
</html>
