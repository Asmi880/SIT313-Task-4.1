import './App.css';
import customHeader from './customHeader';
import highlightedTutes from './highlightedtutes';
import bannerImage from './bannerImage';
import customFooter from './customFooter';
import customsection from './customsection';
import bodySection from './bodySection';
import seekerInput from './seekerInput';
import staffList from './staffList';
import topBanner from './topBanner';
import FoodCourses from './FoodCourses';
import customCard from './customCard';

function App() {
  return (
    <div>
      <customHeader text="Welcome to Food University" />
      <highlightedTutes />
      <bannerImage />
      <customsection />
      <bodySection />
      <seekerInput />
      <staffList />
      <topBanner />
      <FoodCourses />
      <customFooter />
      <customCard/>
    </div>
  );
}

export default App;
