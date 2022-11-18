<!doctype html>
<html>
    
    <head>
        <style>
            #calculatior-box {
                text-align:center;
                width:420;
                height:640;
                border-radius:5px;
                background:#ffd;
                font:monospace;
                font-family:monospace;
            }
        </style>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>
        <div id="calculator-box">
        <h1>put * for multiplication and / for division</h1>
        <form action="calculator.php" method="post">
            <h3>first number:</h3> <input type="number" mame="num1"><br>
            <h3>second number:</h3> <input type="number" name="num2"><br>
            <h3>operation:</h3> <input type="text" name="operation"><br>
            <input type="submit">
        </form>
        
        <?php 
        $num1 = $_POST["num1"];
        $num2 = $_POST["num2"];
        $operation = $_POST["operation"];
        
        if($operation == "+"){
            echo $num1 + $num2;
        } elseif($operation == "-"){
            echo $num1 - $num2;
        } elseif($operation == "*"){
            echo $num1 * $num2;
        } elseif($operation == "/"){
            echo $num1 / $num2;
        }
        
        ?>
        </div>
    </body>
</html>