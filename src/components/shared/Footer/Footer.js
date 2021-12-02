import React from "react";
import { Rodape, IconeRodape } from "./StyledFooter";

export default function Footer() {
  return (
    <Rodape>
      <IconeRodape>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          content="twitter"
        >
          <i class="social-icon fab fa-twitter"></i>
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          content="facebook"
        >
          <i class="social-icon fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          content="instagram"
        >
          <i class="social-icon fab fa-instagram"></i>
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Email"
          target="_blank"
          rel="noopener noreferrer"
          content="email"
        >
          <i class="social-icon fas fa-envelope"></i>
        </a>
      </IconeRodape>
      <p>© Copyright 2021 LabeNinjas - Grupo 09</p>
    </Rodape>
  );
}
