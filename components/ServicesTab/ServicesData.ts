export interface IServiceDataItem {
    heading: string;
    sub_heading: string;
    imageShow: string;
  }
  
  const ServiceData: IServiceDataItem[] = [
    {
      heading: "Front-End",
      sub_heading: "Engaging user interfaces with HTML, CSS, and JavaScript",
      imageShow: "/assets/icons/react.svg",
    },
    {
      heading: "Back-End",
      sub_heading: "Robust server-side applications with Node.js and Express",
      imageShow: "/assets/icons/nextjs.svg",
    },
    {
      heading: "Automation",
      sub_heading: "Automate tasks and streamline processes with Python",
      imageShow: "/assets/icons/python.png",
    },
    {
      heading: "Database",
      sub_heading: "Efficient database design and management",
      imageShow: "/assets/icons/expressjs.png",
    },
    {
      heading: "Cloud",
      sub_heading: "Application deployment and management in the cloud",
      imageShow: "/assets/icons/docker.png",
    },
  ];
  
  export default ServiceData;
  