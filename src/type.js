"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 100,
}) // Software Engineer|
  .move(-18)
  .type("Passionate ") //  Passionate |Software Engineer
  .pause(1000)
  .move(null, { to: "END" }) // Passionate Software Engineer|
  .delete() // |
  .type("Machine Learning Engineer")
  .pause(1000)
  .move(-9)
  .delete(16)
  .type("Front-End")
  .pause(1000)
  .delete(9)
  .type("Back-End")
  .pause(1000)
  .delete(8)
  .type("Full-Stack")
  .pause(1000)
  .move(9)
  .delete()
  .go();
