import React, { useState } from "react";

//next
import { useRouter } from "next/router";
const langs = ["en", "fr"];
const Lang = () => {
  const router = useRouter();

  const handleCloseCountry = (locale) => {
    router.push(router.asPath, undefined, {
      locale: locale,
    });
  };

  return (
    <div className="text-white">
      {langs?.map((lang, index) => (
        <button
          key={index}
          className={`uppercase ${
            router?.locale === lang ? "text-opacity-100" : "text-opacity-50"
          } transition-opacity text-white slash`}
          type="button"
          onClick={() => handleCloseCountry(lang)}>
          {lang}
        </button>
      ))}
    </div>
  );
};

export default Lang;
