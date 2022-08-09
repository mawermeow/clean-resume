import type { NextPage } from 'next';
import About from "../components/about/About";
import Work from "../components/work/Work";
import Interests from "../components/interests/Interests";
import Concept from "../components/concept/Concept";

const Home: NextPage = () => {
  return <>
    <About/>
    <Work/>
    <Concept/>
    <Interests/>
  </>
}

export default Home
