const Menu = [
  {
    id: 1,
    image: "python.jpg",
    name: "Programming with Python",
    category: "programming",
    price: "500₹",
    description:
      "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
  },

  {
    id: 2,
    image: "images/machine.jpg",
    name: "Machine Learning",
    category: "data science",
    price: "500₹",
    description:
      "Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so.",
  },
  {
    id: 3,
    image: "images/uiux.png",
    name: "UI/UX Design",
    category: "design",
    price: "500₹",
    description:
      " UI design and UX design are two of the most often confused and conflated terms in web and app design. And understandably so. They’re usually placed together in a single term, UI/UX design, and viewed from the surface they seem to be describing the same thing. ",
  },
  {
    id: 4,
    image: "/images/business.jpg",
    name: "Business Communication Skills",
    category: "career development",
    price: "500₹",
    description:
      "Business communication skills include traits that help professionals convey information in the workplace. These skills encompass primary forms of communication like active listening, along with communication techniques that are necessary to build professional relationships, like negotiation and networking skills.  ",
  },
  {
    id: 5,
    image: "images/c.jpg",
    name: "Programming with C",
    category: "programming",
    price: "500₹",
    description:
      "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions ",
  },
  {
    id: 6,
    image: "images/cpp.jpg",
    name: "Programming with C++",
    category: "programming",
    price: "500₹",
    description:
      "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes",
  },
  {
    id: 7,
    image: "images/web.jpg",
    name: "Web Development",
    category: "programming",
    price: "500₹",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
  },
  {
    id: 8,
    image: "images/ethical.jpg",
    name: "Ethical Hacing",
    category: "programming",
    price: "500₹",
    description:
      "Ethical hacking is a process of detecting vulnerabilities in an application, system, or organization's infrastructure that an attacker can use to exploit an individual or organization.",
  },
  {
    id: 9,
    image: "images/corejava.jpg",
    name: "Core Java",
    category: "programming",
    price: "500₹",
    description:
      "Java is one of the world's most important and widely used computer languages, and it has held this distinction for many years. Unlike some other computer languages whose influence has weared with passage of time, while Java's has grown.",
  },
  {
    id: 10,
    image: "images/advancejava.jpg",
    name: "Advanced Java",
    category: "programming",
    price: "500₹",
    description:
      "It is a part of Java programming language. It is an advanced technology or advance version of Java specially designed to develop web-based, network-centric or enterprise applications.",
  },
  {
    id: 11,
    image: "images/react.jpg",
    name: "React",
    category: "programming",
    price: "500₹",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. ",
  },
  {
    id: 12,
    image: "images/angular.jpg",
    name: "Angular",
    category: "programming",
    price: "500₹",
    description:
      "Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations",
  },
  {
    id: 13,
    image: "images/dsa.jpg",
    name: "Data Structure & Algorithm",
    category: "programming",
    price: "500₹",
    description:
      "A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem.",
  },
  {
    id: 14,
    image: "images/acecoding.jpg",
    name: "How to Ace Coding Interview",
    category: "programming",
    price: "500₹",
    description:
      "Write some pseudo-code, then write real code. Do all of this on paper, “walking through the code” as you write it. ",
  },
  {
    id: 15,
    image: "images/tableau.jpg",
    name: "Tableau",
    category: "data science",
    price: "500₹",
    description:
      "Tableau Software is an American interactive data visualization software company focused on business intelligence. It was founded in 2003 in Mountain View, California, and is currently headquartered in Seattle, Washington. ",
  },
  {
    id: 16,
    image: "images/deep.jpg",
    name: "Deep Learning",
    category: "data science",
    price: "500₹",
    description:
      "Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning",
  },
  {
    id: 17,
    image: "images/saas.jpg",
    name: "SAS Programming",
    category: "data science",
    price: "500₹",
    description:
      "SAS is a statistical software suite developed by SAS Institute for data management, advanced analytics, multivariate analysis, business intelligence, criminal investigation,",
  },
  {
    id: 18,
    image: "images/stat.jpg",
    name: "Statistics for Data Science",
    category: "data science",
    price: "500₹",
    description:
      "Statistics is a fundamental tool of data scientists, who are expected to gather and analyze large amounts of structured and unstructured data and report on their findings ",
  },
  {
    id: 19,
    image: "images/sql.jpg",
    name: "SQL for Data Analytics",
    category: "data science",
    price: "500₹",
    description:
      " SQL (Structured Query Language) is used for performing various operations on the data stored in the databases like updating records, deleting records, creating and modifying tables, views, etc.",
  },
  {
    id: 20,
    image: "images/graphics.jpg",
    name: "Graphics Design",
    category: "design",
    price: "500₹",
    description:
      "Graphic design is a craft where professionals create visual content to communicate messages. ",
  },
  {
    id: 21,
    image: "images/video.jpg",
    name: "Video Editing",
    category: "design",
    price: "500₹",
    description:
      "Video editing is the manipulation and arrangement of video shots. Video editing is used to structure and present all video information, including films ",
  },
  {
    id: 22,
    image: "images/animation.jpg",
    name: "Animation",
    category: "design",
    price: "500₹",
    description:
      "Animation is a method in which figures are manipulated to appear as moving images. ",
  },
  {
    id: 23,
    image: "images/word.jpg",
    name: "Word Press",
    category: "design",
    price: "500₹",
    description:
      " WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database.",
  },
  {
    id: 24,
    image: "/images/interview.jpg",
    name: "Interview Preparation",
    category: "career development",
    price: "500₹",
    description:
      "Prepare to go into every interview with three to five key selling points in mind, such as what makes you the best candidate for the position.",
  },
];

export default Menu;
