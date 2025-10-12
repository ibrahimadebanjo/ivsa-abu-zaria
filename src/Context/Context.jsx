import { createContext } from "react";
import PropTypes from "prop-types";
export const AppContext = createContext();
const ContextProvider = (props) => {

    const experience = {
        ilese:{
          date: "2012 - 2018",
          name: "Ilese Comprehensive High School",
          desc : "Completed high school diploma with strong foundation in sciences and Mathematics and Computer Science. laying the groundwork for my future pursuits in technology and Veterinary Medicine."
        },
        abu:{
          date: "2023 - Present",
          name: "Ahmadu Bello University Of Zaria.",
          desc : "Currently Pursuing a degree in Veterinary Medicine with a focus on leveraging technology to improve animal well-being"
        },
        code4you:{
          date: "2022 - 2023",
          name: "Frontend Developer Internship.",
          desc : `Participated in a 4-month Frontend Development Scholarship Program, 
        mastering HTML, CSS, JavaScript, and React through weekly hands-on projects, assignments, and testing. 
        The program consisted of three levels: Basic (HTML/CSS), Intermediate (JavaScript), and 
        Advanced (React with NPM, Yarn, and Vite). Consistently demonstrated expertise, 
        earning weekly Best Student of the Week certifications,
        and acquired skills in frontend development, problem-solving, and time management`
        },
        alxpf:{
          date: "2023 - 2024",
          name: "ALX Professional Foundations",
          desc : `Completed an 8-week professional development program,
        enhancing expertise in 8 key meta skills: Self-Awareness, Teamwork and Management, 
        Effective Communication, Quantitative Reasoning, Entrepreneurial Thinking, Critical Thinking, 
        Time Management, and Tech Foundations. This comprehensive program equipped me with essential skills to excel in 
        specialized fields, 
        fostering a strong foundation for career growth and professional success.`
        },
        codesmith:{
          date: "2022 - 2023",
          name: "Codesmith SWE Bootcamp",
          desc : "Joined software engineering bootcamp  where i learnt more about programming languages like Javascript."
        },
        aice:{
          date: "2023 - 2024",
          name: "ALX AI Career Essentials",
          desc : `ALX AICE focus on AI-powered tools and techniques, such as predictive analytics, generative adversarial networks,
        and deep learning, help software engineers build more efficient, reliable, and innovative software systems.
        ALX AICE empowers software engineers to build cutting-edge systems leveraging AI-powered tools and techniques, 
        including: Predictive Analytics, Generative Adversarial Networks (GANs) and Deep Learning`
        },
        alxfe:{
          date: "2023 - 2024",
          name: "ALX Frontend Programme",
          desc : `ALX Frontend Engineering program focus on building intuitive and interactive
        digital interfaces, frontend developers bring websites and applications to life using cutting-edge technologies
        like HTML, CSS, JavaScript, 
        and frameworks like React, Angular, or Vue and best practices.`
        },
        fcda:{
          date: "2023 - 2024",
          name: "Industrial Trainee",
          desc : `As a veterinary medical student, I enrolled in a comprehensive 2-month industrial training
        program at Nyanya veterinary clinic (FCTA), leveraging technology to enhance animal healthcare. This hands-on
        experience combined clinical expertise with digital 
        innovation. conducted post-mortem examinations on animal carcasses to identify disease/abnormalities,
        ensuring ethical compliance. performed meticulous examinations, documented findings, and maintained accurate records, 
        adhering to regulatory standards.`
        },
        }
        const framework = {
            github : "bx bxl-github text-8xl text-stone-600 p-2",
            tailwind : "bx bxl-tailwind-css text-8xl text-stone-600 p-2",
            react : "bx bxl-react text-8xl text-stone-600 p-2",
            bootstrap : "bx bxl-bootstrap text-8xl text-stone-600 p-2",
            redux : "bx bxl-redux text-8xl text-stone-600 p-2",
            vue : "bx bxl-vuejs  text-8xl text-stone-600 p-2",
            angular : "bx bxl-angular text-8xl text-stone-600 p-2",
          }
          
          const tools = {
            github : "bx bxl-github text-8xl text-stone-600 p-2",
           git : "bx bxl-git text-8xl text-stone-600 p-2",
            firebase : "bx bxl-firebase text-8xl text-stone-600 p-2",
            typescript : "bx bxl-typescript text-8xl text-stone-600 p-2",
            html : "bx bxl-html5 text-8xl text-stone-600 p-2",
            node : "bx bxl-nodejs text-8xl text-stone-600 p-2",
            javascript : "bx bxl-javascript text-8xl text-stone-600 p-2",
            css : "bx bxl-css3 text-8xl text-stone-600 p-2",
          }
  const contextValue = {
    experience,
framework,
tools
  }
    return(
        <AppContext.Provider value={contextValue}>
 {props.children}
        </AppContext.Provider>
    )
    
}
ContextProvider.propTypes = {
    framework: 
    PropTypes.objectOf(PropTypes.string).isRequired,
    tools: 
    PropTypes.objectOf(PropTypes.string).isRequired
  }
export default ContextProvider;