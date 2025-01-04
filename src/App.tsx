import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Skills from "./components/skill";
import Projects from "./components/projects";
import { BackendIcon } from "./img/backendIcon"
import { BlockchainIcon } from "./img/blockchainIcon"
import { HtmlIcon } from "./img/htmlIcon"
import Categories from "./components/categories";
import { ForkIcon } from "./img/forkIcon";
import { StarIcon } from "./img/starIcon";
import { LinkIcon } from "./img/linkIcon";
import Blog from "./components/blog";
import Divider from "./partials/divider";
import Footer from "./components/footer";
import { Love }from "./img/loveEmoji"
import Contact from "./components/contact";


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Divider />
      
      <Categories categories={[
        {
          name: "Backend",
          description: "I ensure seamless functionality and high performance on SaaS & APIs.",
          icon: <BackendIcon />
        },
        {
          name: "Blockchain",
          description: "I develop decentralized applications on the Ethereum/sui blockchain using solidity and move.",
          icon: <BlockchainIcon />
        },
        {
          name: "HTML",
          description: "I build responsive and accessible websites with React, JavaScript, Tailwindcss, and Bootstrap.",
          icon: <HtmlIcon />
        }
      ]} />
      
      <Projects projects={[
        {
          title: "WhatsApp Weave",
          description: "WhatsAppWeave is a powerful Node.js application designed to automate the management of WhatsApp through retrieval and saving data.",
          tags: ["Typescript", "NodeJs", "WhatsApp API"],
          link: "https://github.com/Kagirim/WhatsAppWeave/",
          starIcon: <StarIcon />,
          gitIcon: <ForkIcon />,
          linkIcon: <LinkIcon />
        },
        {
          title: "Thaka Secrets",
          description: "A web based cosmetics eCommerce site",
          tags: ["Django", "JavaScript", "HTML"],
          link: "https://github.com/Kagirim/thaka-secrets",
          starIcon: <StarIcon />,
          gitIcon: <ForkIcon />,
          linkIcon: <LinkIcon />
        },
        {
          title: "Over Network Dapp",
          description: "A move module for a decentralized social media platform. The platform allows users to create and manage accounts, follow other accounts, and post, comment, and like content. Account ownership is handled through NFTs.",
          tags: ["Move", "Sui", "Blockchain"],
          link: "https://github.com/Kagirim/over-network-nft/",
          starIcon: <StarIcon />,
          gitIcon: <ForkIcon />,
          linkIcon: <LinkIcon />
        }
      ]} />
      <Skills />
      <Blog blogs={[
        {
          isFeature: true,
          title: "Mastering Goal Setting",
          description: "Unlock the science of goal-setting with insights from Dr. Andrew David Huberman, with evidence-based strategies to navigate your personal and professional growth",
          tags: ["React", "JavaScript", "HTML"],
          date: "Mar 10, 2023"
        }
      ]}/>
      <Contact />
      <Footer Love={ Love } />
    </>
  );
}

export default App;
