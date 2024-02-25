import React from "react";

import Link from "next/link";

import NavList from "./NavList";
import Lang from "./Lang";

const Nav = () => {
  return (
    <nav className="w-full px-20 relative">
      <div className="max-w-[1300px] mx-auto flex flex-row items-center justify-between w-full min-h-[120px] py-4">
        <NavList />
        <div className="max-w-[190px]">
          <img
            loading="lazy"
            width="255"
            height="51"
            src="https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/03/logo-3-255x51.png"
            alt="Logo"
            srcSet="https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/03/logo-3-255x51.png 255w, https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/03/logo-3-300x60.png 300w, https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/03/logo-3-370x74.png 370w, https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/03/logo-3.png 457w"
            sizes="(max-width: 255px) 100vw, 255px"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-x-10">
          {/* lang */}
          <Lang />
          <Link
            href={"/"}
            className="border border-[#ab916c] text-white px-6 py-3 text-sm font-marcellus hover:bg-[#ab916c] ease-linear duration-300">
            <span>Check Availability</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
