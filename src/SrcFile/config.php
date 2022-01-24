<?php

 	session_start();

	//initializing variable
	$email = "";
	$password = "";
	$pswrepeat = "";

	//database connection
	$dbHost = 'localhost';
	$dbUsername = 'root';
	$dbPassword = '';
	$dbName = 'PotGallery';
	$dbconn = mysqli_connect($dbHost,$dbUsername,$dbPassword,$dbName);

	if (!$dbconn) {
	    die("Connection failed: " . mysqli_connect_error());
	}

	//register user
	if (isset($_POST['signup'])) 
	{	
		$email = mysqli_real_escape_string($dbconn, $_POST['email']);
		$password = mysqli_real_escape_string($dbconn, $_POST['password']);
		$pswrepeat = mysqli_real_escape_string($dbconn, $_POST['pswrepeat']);
		
		//encrypt passowrd
		$pass = password_hash($password, PASSWORD_BCRYPT);
		$cpass = password_hash($pswrepeat, PASSWORD_BCRYPT);

		// Email Query 
		$emailquery = "SELECT * FROM register WHERE email='$email' ";

		$equery = mysqli_query($dbconn, $emailquery);
		
		// count same no of email are available
		if (mysqli_num_rows($equery) > 0) {

			?> <script>alert("Email already exists.."); </script> <?php
		}
		else{
			if (strlen($password) < 5) {
				?> <script > alert("The Password is 6 Character Long..."); </script> <?php
			}
			elseif (strlen($password) > 20) {
				?> <script > alert("Password: max Length 20 Characters..."); </script> <?php
			}
			elseif ($password === $pswrepeat) {

				$insquery = "INSERT INTO register ( email, password, pswrepeat) 
					VALUES ('$email', '$pass', '$cpass')";
				$result = mysqli_query ($dbconn, $insquery);
			
				if($result) {
					?>
					<div>
						<span style="font-size: 3rem">&#9989;</span>
						<script >
							alert("Data inserted successfuly..."); 
						</script>
					</div>
					<?php
				}

			}
			else{

				?> <script> alert("password are not match")</script><?php
				
			}				
		}		
	}
?>
