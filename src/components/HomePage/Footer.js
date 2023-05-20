import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFacebook, BsLinkedin, BsYoutube, BsGithub } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg';

export default function Footer() {
  return (
    <>
      <section class="footer" id="Contact">

        <div class="box-container">

          <div class="box">
            <h3>locations</h3>
            <a href="#/">India</a>
            <a href="#/">Puducherry</a>
            <a href="#/">Andhra</a>
            <a href="#/">Vizag</a>
          </div>

          <div class="box">
            <h3>Quick links</h3>
            <NavLink class="active" to="/">Home</NavLink>
            <NavLink to="/about" target="_blank">About</NavLink>
            <NavLink to="/products" target="_blank">Products</NavLink>
            <NavLink to="/contact" target="_blank">contact</NavLink>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <a href="#/">+91-999-9999</a>
            <a href="#/">+111-222-3333</a>
            <a href="#/">chandrika.450@gmail.com</a>
            <a href="#/">India</a>
          </div>

          <div class="box">
            <h3>follow us</h3>
            <NavLink className="" to="https://www.facebook.com/" target="_blank">
              <BsFacebook /> Facebook
            </NavLink>
            <NavLink className="" to="https://www.linkedin.com/in/poorna-chandrika-konathala-2b3376232/" target="_blank">
              <BsLinkedin /> Linkedin
            </NavLink>
            <NavLink className="https://www.gmail.com/" to="" target="_blank">
              <CgMail /> Mail
            </NavLink>
            <NavLink className="" to="https://www.youtube.com/" target="_blank">
              <BsYoutube /> Youtube
            </NavLink>
            <NavLink className="" to="https://github.com/chandrika-kp" target="_blank">
              <BsGithub /> GitHub
            </NavLink>

          </div>

        </div>

        <div class="copyright"> 2023 © <span>Chandu's React Ecommerce Store</span> </div>

      </section>

    </>
  );
}