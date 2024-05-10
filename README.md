<!DOCTYPE html>
<html>


  <!-- Link your JavaScript file -->
  <script src="C:/users/apple/oneDrive/Documents/The Informative Fours/script.js"></script>
</body>
</html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>The Informative Four</title>
    
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!--Montserrat font-->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css" />
    <script src="https://unpkg.com/feather-icons@4.28.0/dist/feather.min.js"></script>
  </head>
  <body>   
    <section>
      <!-- MOBILE NAVIGATION -->
      <div class="w3-container w3-padding-16 w3-border-bottom w3-hide-medium w3-hide-large">
        <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="toggleNavigation()">&#9776;</a>
      </div>
      <div id="mobile-nav" class="w3-bar-block w3-hide w3-hide-large w3-hide-medium w3-sticky">
        <a href="file:///C:/Users/Apple/OneDrive/Documents/The%20Informative%20Four/Contact%20page/Index.html" class="w3-bar-item w3-button w3-center w3-hover-none w3-border-white w3-bottombar w3-hover-border-green w3-hover-text-green" onclick="toggleNavigation()">ABOUT</a>
        <a href="file:///C:/Users/Apple/OneDrive/Documents/The%20Informative%20Four/ABOUT%20page/index.html" class="w3-bar-item w3-button w3-center w3-hover-none w3-border-white w3-bottombar w3-hover-border-green w3-hover-text-green" onclick="toggleNavigation()">Channel</a>
      </div>


        <!--IMAGE/AVATAR-->
        <div>
        <img src="avatar.png" class="w3-rectangle w3-border w3-border-sand" style="border-width: 3px !important; width: 400px; height: 175px;"/>
        </div>
        

        <!--DESKTOP NAVIGATION-->
        <div class="w3-container w3-padding-large w3-border-bottom w3-hide-small">
          <a href="Quarter 2.html" class="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-green w3-hover-text-green w3-right w3-hide-small" style="border-width: 2px !important;" onclick="toggleNavigation()">Quarter 2</a> 
          <a href="Quater 1.html" class="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-green w3-hover-text-green w3-right w3-hide-small" style="border-width: 2px !important;" onclick="toggleNavigation()">Quarter 1</a> 
          <a href="Contact.html" class="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-green w3-hover-text-green w3-right w3-hide-small" style="border-width: 2px !important;" onclick="toggleNavigation()">CONTACT</a>
          <a href="about.html" class="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-green w3-hover-text-green w3-right w3-hide-small" style="border-width: 2px !important;" onclick="toggleNavigation()">ABOUT</a>
          <a href="Home.html"class="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-green w3-hover-text-green w3-right w3-hide-small" style="border-width: 2px !important;" onclick="toggleNavigation()">HOME</a> 
        </div>
        <div class="content-container w3-margin-top-2">
         <!--HOME SECTION-->
         <head>
          <style>
          .image-paragraph {
              display: inline-block;
              vertical-align: top;
          }
          </style>
          </head>
          <body>

 <body class="white-text" style="width: 100%;"></body>
 <div id="home" class="home w3-container w3-margin-top-4 w3-cursive center-text">
  <p style="font-style: Montserrat; font-size:48px; text-align:center;" px="200px">The Informative Four</p>
    <h2>We are a group dedicated to covering unsolved cases in the Philippines. Watch as we dig into mysteries that have  left a mark on the Philippines. We will take you on a journey in the depths of these cold cases "Join us as we delve deeply into mysterious cases that have profoundly affected the country. Embark on an engrossing journey as we explore the intricate layers of these perplexing cold cases, aiming to bring closure and understanding to the communities affected by these lingering enigmas." We are a passionate group dedicated to unraveling the mysteries surrounding the Philippines.</h3>
    </div>

</body>

</div>
        </section>

          <!--ABOUT SECTION-->
      <div id="about" class="w3-container w3-margin-top-20-percent w3-cursive w3-large">
        <h2 class="w3-border-bottom w3-border-amber" style="border-width: 3px !important;">Youtube Channel</h2>
        <script>
          jwplayer("player").setup({
             file: "your-video.mp4",
             width: 640,
             height: 360,
             primary: "html5"
          });
         </script>

         <video id="player" width="640" height="360" controls>
          <source src="intro.mp4" type="video/mp4">
          <source src="intro.mp4" type="video/webm">
          <p>Intro videos of The informative four</p>
         </video>
        <p class="w3-margin-top-2"> 
        
         
        </p>
        <p class=""> 
       
        </p>
        <p class=""> 
         
        </p>
      </div>

      <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

        <!--FOOTER-->
    
        <footer class="w3-container w3-border-top w3-center w3-margin-top-4">
            <style>
                .white-text {
                    color: rgb(0, 0, 0);
                }
            </style>
           <body class="white-text">
           <p>© 2023 - The Informative Four</p>
           <p class="w3-small">Group 4 LL IPBA</p>
       </body>

        <!-- End footer -->
        </footer>

        <!--END OF CV SECTION-->
      </section>      
    </section>
    <script>
      // Function to toggle mobile navigation
      function toggleNavigation() {
        let nav = document.getElementById("mobile-nav");
        if (nav.classList.contains('w3-show')) {
          nav.classList.remove('w3-show');
        } else { 
          nav.classList.add('w3-show');
        }
      }
    </script>
    <script>
      // Script to load feather icons
      feather.replace()
    </script>
  </body>
</html>
