/* 
    <!-- QUALITY -->
    <aside class="card">
    <img src="./media/img/security-hero.jpg" alt="">
    <section>
        <h3>our quality guarantee</h3>
        <p>Quality is never an accident. It is always the result of effort and skill coming together. We at Tiger Security will always give our best effort to achieve the highest quality in serving our customers. High quality of work is our bottom line.</p>
    </section>
    </aside>
*/
/**
 * <div id="root-content">
        <div id="payments-container">
            <img src="./media/img/cash-app.jpeg" alt="">  
            </div>
        </div>
    </div>
    <!-- CO INFO -->
    <div id="co-info">
        <ul>
            <li>license number: PPO 12993</li>
        </ul>
    </div>
 */
const content = {
    about: `<div id="root-content">
    
    <!-- TEAM SECTION -->
    <div id="team-container">
       <h2 class="section-label">meet our team</h2>
       <div id="team-block">
           <div class="team-member">
               <div class="team-member-container">
                   <h4>Bryan Martin</h4>
                   <p>Founder</p>
               </div>
           </div>
           <div class="team-member">
               <div class="team-member-container">
                   <h4>Vernon Wells</h4>
                   <p>Spokes Person</p>
               </div>
           </div>
           <div class="team-member">
               <div class="team-member-container">
                   <h4>Capt. Arthur Battle</h4>
                   <p>Qualified Manager</p>
               </div>
           </div>
           <div class="team-member">
               <div class="team-member-container">
                   <h4>Matthew Silver</h4>
                   <p>Dep. Cmdr. of Operations</p>
               </div>
           </div>
           <div class="team-member">
               <div class="team-member-container">
                   <h4>Eric Martin</h4>
                   <p>Office Manager</p>
               </div>
           </div>
       </div>
   </div>
   
    </div>`,
    payments: ``,
    contact: `<div id="root-content"><!-- CONTACT -->
    <footer id="contact">
        <div id="contact-container">
            <h3 class="app-section-label">Contact Us</h3>
            <div id="contact-wrapper">
                <form id="contact-contact-form" action="mailto:thastings.707@gmail.com" target="blank_" method="POST" autocomplete="on" name="Contact">  

                    <!--name -->
                    <!-- <h3 class="name">Contact Us</h3> -->
                    <label for="fullname" class="sr-only">full name</label>
                    <input class="name" type="text" name="fullname" id="fullname" required autofocus>

                    <!--contact-->
                    <label for="email">Your Email</label>
                    <input type="email" name="email" id="email" required>
                    
                    <label for="phone">Phone</label>
                    <input type="tel" name="phone" id="phone"> 
                    
                    <!--MESSAGE SUBJECT-->
                    <label for="msg-subject">Message Subject</label>
                
                    <!--MESSAGE SUBJECT -->
                    <input  list="msg-subjects" name="msg-subject" id="msg-subject">
                    
                    <!--text area-->
                    <label for="msg-text">Message</label>
                    <textarea name="msg-text" id="msg-text" rows="10" cols="50" required></textarea>
                    <input type="submit" id="footer-contact-form-submit">
                </form>   
                <div id="contact-block">
                    <div class="contact-section">
                        <h5>phone: </h5><span class="phone-number">1 (916) 720-1229</span>
                    </div>
                    <ul class="contact-section">
                        <li><h5>mail</h5></li>
                            <li>PO Box 580404</li>
                            <li>Elk Grove, CA 95758 </li>
                    </ul>
                    <ul class="contact-section">
                        <li><h5>Office</h5></li>
                        <li>3925 Power Inn Road</li>
                        <li>Sacramento, CA 95826</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer></div>`
}
const nav = (component) => {
    const root = document.getElementById('root')
    const home_block = document.getElementById('home')
    home_block.style.display = 'none'
    switch (component) {
        case 'home':
            root.innerHTML = ``
            home_block.style.display = 'block'
            break;
        case 'about':
            // root.style.visibility = 'visible'
            root.innerHTML = content.about
            // home_block.style.display = 'none'
            break;
        case 'contact':
            // root.style.visibility = 'visible'
            root.innerHTML = content.contact
            // home_block.style.display = 'none'
            break;
        default:
            break;
    } 
}
const paypal = document.getElementById('paypal-container')
const payments = () => {
    const payments_visible = () => {
        paypal.style.visibility = 'visible'
        paypal.style.height = '200vh'
    }
    const payments_hidden = () => {
        paypal.style.visibility = 'hidden'
        paypal.style.height = '100vh'
    }
    paypal.style.visibility === 'hidden' ? payments_visible() : payments_hidden()
}