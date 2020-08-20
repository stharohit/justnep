<template>
  <footer>
    <div class="col-11 m-auto pt-5">
      <div class="footer-top">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <h4>Justnep</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Riders Benefit</a></li>
              <li><a href="#">Who are we?</a></li>
              <li><a href="#">How it works?</a></li>
              <li><a href="#">Safety tips</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4>Featured</h4>
            <ul>
              <li><a href="#">Pizza House</a></li>
              <li><a href="#">Burger House</a></li>
              <li><a href="#">KFC</a></li>
              <li><a href="#">Quality Food</a></li>
              <li><a href="#">Chicken Station</a></li>
              <li><a href="#">The Hookah Bar</a></li>
              <li><a href="#">Biryani House</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4>Other</h4>
            <ul>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Register Restaurants</a></li>
              <li><a href="#">Customer Support</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4>Contact</h4>
            <ul>
              <li>Kathmandu Nepal</li>
              <li>Call Us 01-5199731</li>
              <li>info@justnep.com</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </div>
    <div class="footer-bottom">
      <div class="col-11 m-auto">
        <div class="row">
          <div class="col-md-4 text-sm-center text-lg-left">
            &copy; All Rights Reserved.
          </div>
          <div class="col-md-4 text-center">
            <img
              src="@/assets/logo-small.png"
              alt="justnep multi restaurants"
            />
          </div>
          <div class="col-md-4">
            <ul class="d-flex justify-content-lg-end">
              <li>
                <a href=""><i class="icofont-facebook"></i></a>
              </li>
              <li>
                <a href=""><i class="icofont-instagram"></i></a>
              </li>
              <li>
                <a href=""><i class="icofont-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    currentYear: function() {
      return Date("Y");
    }
  }
};
</script>
