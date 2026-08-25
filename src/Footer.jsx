import React from 'react'
import './footer.css'
import Map from './Map'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="Container">
          <div class="footer_inner">
            <div class="c-footer">
              <div class="layout">
                <div class="layout_item w-50">
                  <Map />
                </div>

                <div class="layout_item w-25">
                  <nav class="c-nav-tool">
                    <h4 class="c-nav-tool_title">Menu</h4>
                    <ul class="c-nav-tool_list">
                      {/* <li>
                        <Link to="/Service" class="c-link">Services</Link>
                      </li> */}

                      <li>
                        <Link to="/Contact" class="c-link">Contact-Us</Link>
                      </li>

                      <li>
                        <Link to="/Login" class="c-link">Sign-up</Link>
                      </li>
                      <li>
                        <Link to="/Sign_in" class="c-link">Login</Link>
                      </li>
                    </ul>
                  </nav>




                  <nav class="c-nav-tool">
                    <h4 class="c-nav-tool_title">Companies</h4>
                    <ul class="c-nav-tool_list">

                      <li class="c-nav-tool_item">
                        <Link to="/Audi" class="c-link">Audi</Link>
                      </li>

                      <li class="c-nav-tool_item">
                        <Link to="/BMW" class="c-link">BMW</Link>
                      </li>
                      <li class="c-nav-tool_item">
                        <Link to="/Bughati" class="c-link">Bughati</Link>
                      </li>
                      <li class="c-nav-tool_item">
                        <Link to="/Ferrari" class="c-link">Ferrari</Link>
                      </li>
                      <li class="c-nav-tool_item">
                        <Link to="/Ford" class="c-link">Ford</Link>
                      </li>
                      <li class="c-nav-tool_item">
                        <Link to="/Jaguar" class="c-link">Jaguar</Link>
                      </li>
                      <li class="c-nav-tool_item">
                        <Link to="/Lamb" class="c-link">Lamborgini</Link>
                      </li>
                      <li class="c-nav-tool_item">
                        <Link to="/Land" class="c-link">Land Rover</Link>
                      </li>
                      <li class="c-nav-tool_item">
                        <Link to="/Merc" class="c-link">Mercedes</Link>
                      </li>
                      <li class="c-nav-tool_item">
                        <Link to="/Porse" class="c-link">Porsche</Link>
                      </li>
                      <li class="c-nav-tool_item">
                        <Link to="/Rolls" class="c-link">Rolls Royce</Link>
                      </li>
                      <li class="c-nav-tool_item">
                        <Link to="/Toyo" class="c-link">Toyota</Link>
                      </li>
                    </ul>
                  </nav>


                </div>
              </div>

              <div class="footer_copyright text-light mt-2 mx-4">
                <p>&copy; 2024 The Afterlogo Company Inc.</p>
              </div>

            </div>
          </div>
        </div>
        {/* </div> */}

      </footer>

    </>
  )
}

export default Footer
