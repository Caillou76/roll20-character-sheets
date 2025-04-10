const skills = [
  { name: "melee", a: "force", b: "int" },
  { name: "parade", a: "force", b: "cha" },
  { name: "tir", a: "dex", b: "int" },
  { name: "concentration", a: "con", b: "sag" }
];
skills.forEach(({ name, a, b }) => {
  on(`change:${a} change:${b} change:${name}_deg`, function () {
    getAttrs([a, b, `${name}_deg`], function (v) {
      const valA = parseInt(v[a]) || 0;
      const valB = parseInt(v[b]) || 0;
      const deg = parseInt(v[`${name}_deg`]) || 0;
      const caracs = valA + valB;
      const total = caracs + deg;
      setAttrs({
        [`${name}_caracs`]: caracs,
        [`${name}_total`]: total,
      });
    });
  });
});
