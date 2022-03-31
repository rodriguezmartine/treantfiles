+++
title = "SignUp"
+++
--------
--------
# Onboarding 

{{< column "grid-1">}}


Hola Chaval!!!

Enter your company, coupon and enjoy Treant!!! 

{{< tip >}}

<form action=""  id="signup">
	<div >
	  <input type="text" name="company_name" class="search_field" style="width: 100%"  placeholder="Company Name" required>
	</div>
	 <br>
	<div > 
	  <input type="text" name="coupon_code" class="search_field" style="width: 100%" placeholder="Coupon Code" required>
	</div>
	<br>
	<div >
	  <input type="email" name="contact_email" class="search_field" style="width: 100%" placeholder="Your Email" required>
	</div>
	<br>
    <div >
	  <input type="text" name="contact_name" class="search_field" style="width: 100%" placeholder="Name" required>
	</div>
	<br>
    <button type="submit"  class="button search_field"  id="btnSubmit">Send</button>
</form>

{{< /tip >}}


<div class="modal" class="modal" id="myModal">
  <div class="modal-content">
    We are sending information for your access.
    Please wait..
    <img class='img' src='../images/sleep.gif'>
  </div>
</div>

<script type="module" src="../js/signup.js"></script>



{{< /column >}}