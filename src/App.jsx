import SingleSelection from "./SmallApps/Accordian/SingleSelection";
import MultipleSelection from "./SmallApps/Accordian/MultipleSelection";
import RandomColor from "./SmallApps/Random-Color/RandomColor";
import StarRating from "./SmallApps/Star-Rating/StarRating";
import ImageSlider from "./SmallApps/Image-Slider/ImageSlider";
const App = () => {
  return (
    <>
      {/* <SingleSelection/> */}
      <MultipleSelection />
      <RandomColor />
      <StarRating />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  );
};

export default App;
