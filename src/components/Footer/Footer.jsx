import React from "react";
import qrcode from "../../assets/Qr Code.png";
import googleplay from "../../assets/GooglePlay.png";
import appstore from "../../assets/AppStore.png";
import sendmail from '../../assets/icon-send.png'
const Footer = () => {
  return (
    <footer className=" bg-black pt-20 pb-6">
      <div className="max-w-[1170px] mx-auto footer text-[#FAFAFA] pb-14">
        <aside>
          <p className="text-2xl font-bold mb-6">Exclusive</p>
          <form>
            <h6 className=" text-[#FAFAFA] text-xl font-medium mb-6">Subscribe</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-[#FAFAFA] mb-4">
                  Get 10% off your first order
                </span>
              </label>
              <div className="join relative">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input bg-black input-bordered border-2 border-white join-item"
                />
                <div className="absolute right-28 top-3">
                <img src={sendmail} alt="" />
                </div>
              </div>
            </fieldset>
          </form>
        </aside>
        <nav>
          <h6 className="  text-[#FAFAFA] text-xl font-medium mb-6">Support</h6>
          <a className="link link-hover">
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </a>
          <a className="link link-hover my-4">exclusive@gmail.com</a>
          <a className="link link-hover">+88015-88888-9999</a>
        </nav>
        <nav>
          <h6 className="  text-[#FAFAFA] text-xl font-medium mb-6 ">Account</h6>
          <a className="link link-hover">My Account</a>
          <a className="link link-hover my-4">Login/ Register</a>
          <a className="link link-hover">Cart</a>
          <a className="link link-hover my-4">Wishlist</a>
          <a className="link link-hover">Shop</a>
        </nav>
        <nav>
          <h6 className=" text-[#FAFAFA] text-xl font-medium mb-6 ">Quick Link</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover my-4">Terms of use</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover mt-4">Contact</a>
        </nav>
        <nav>
          <h6 className=" text-[#FAFAFA] text-xl font-medium mb-6">Download App</h6>
          <a className="link link-hover opacity-70">
            Save $3 with App New User Only
          </a>
          <div className="flex gap-2 mb-6">
            <div>
              <img src={qrcode} alt="" />
            </div>
            <div>
              <img src={googleplay} alt="" />
              <img src={appstore} alt="" />
            </div>
          </div>
          <div className="flex justify-between gap-6">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
      <hr className="opacity-50"/>
      <p className="text-center text-white pt-4 opacity-50">
       @ Copyright Md. Saharior Ridoy 2024. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
