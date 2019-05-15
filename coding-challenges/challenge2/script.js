function findInitials(name) {
    var p = 0;
    var initials = name.charAt(p);
    p = name.indexOf(" ", p + 1);
    while (p != -1) {
      initials = initials + name.charAt(p + 1);
      p = name.indexOf(" ", p + 1);
    }
    console.log(initials);
  }
  findInitials("Mahendra Singh Dhoni");
  findInitials("Shah Rukh Khan");