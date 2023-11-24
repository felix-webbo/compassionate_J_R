import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Our Mission",
    detail:
      "To champion the rights of refugees and provide them with the support, resources, and opportunities they need to thrive in their new communities.",
  },
  {
    place: "Our Vission",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "Why We Exist",
    detail:
      "We exist believe that every human being, regardless of their background or circumstances, has inherent values and potential. We recognize the resilience and determination that refugees bring with them, and we are dedicated to unlocking that potential create positive change ",
  },
  {
    place: "The Heart We Have",
    detail:
      "Our organization is fueled by a diverse team of passionate individuals who have witnessed the resilience and strength of refugees firsthand. We bring together expertise from various fields-humanitarian aid, law, education, and more to ensure that our efforts are well-informed and effective",
  },
  {
    place: "Together, We Can Make A Diferrence",
    detail:
      "Join us in at Compassionate Journey in advocating for refugee rights and building a brighter tomorrow",
  },
];

export const comments = [
  {
    name: "Simeon Maranga",
    post: "President CEO",
    comment:
      "Overseeing the overall operations and strategic direction of the organisation.",
    img: "./Assets/simeon.jpg",
  },

  {
    name: "Carel Omwoyo",
    post: "Chairman board of directors",
    comment:
      "The chairman shall preside at all meetings of the trustees, shall be responsible for the execution of policies established by the trustees, and the administration of the trust.",
    img: "./Assets/carel.jpg",
  },
  {
    name: "Kennedy Ochieng",
    post: "Vice President",
    comment:
      "Assists the CEO in overseeing the overall operations and stragetic direction of the organization.",
    img: "./Assets/kennedy.jpg",
  },
  {
    name: "Antony Massu",
    post: "Treasurer",
    comment:
      "Overseeing the financial matters, particulary related to the company's funds, investments, and financial planning.",
    img: "./Assets/antony.jpg",
  },
  {
    name: "Felix Webbo",
    post: "Web Developer",
    comment:
      "Incharge of the website updates, Maintenance, and implementation to ensure the website always functioning as per customer requirement .",
    img: "./Assets/webbo.jpg",
  },
  {
    name: "Austin Bodi",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
