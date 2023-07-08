import color1 from '../assets/1.png';
import color2 from '../assets/2.png';
import color3 from '../assets/3.png';
import color4 from '../assets/4.png';
import color5 from '../assets/5.png';
import color6 from '../assets/6.png';
import color7 from '../assets/7.png';
import color8 from '../assets/8.png';
import color9 from '../assets/9.png';
import color10 from '../assets/10.png';
import color11 from '../assets/11.png';
import color12 from '../assets/12.png';

const links = [
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  color7,
  color8,
  color9,
  color10,
  color11,
  color12
]

const code = "1-2-3-4-5-6-7-8-9-10-11-12".split("-")

const names = [
  "Ultra Preto (Azulado)",
  "Preto",
  "Castanho Escuro",
  "Castanho Médio",
  "Castanho Claro",
  "Loiro Escuro",
  "Loiro Médio",
  "Loiro Claro",
  "Loiro Muito Claro",
  "Loiro Clarissimo",
  "Loiro Ultra Claro",
  "Loiro Ultra Clarissimo",
];

const dataDefault = () => {
  return names.map((name, i) => ({
    frequecyUsed: 0,
    code: code[i],
    name,
    img: links[i],
    qtd: 0
  }))
}

export default dataDefault