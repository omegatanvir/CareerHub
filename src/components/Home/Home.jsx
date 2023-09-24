import Banner from "../Banner/Banner";
import ChatagoryList from "../ChatagoryList/ChatagoryList";
import FeaturedList from "../Featured List/FeaturedList";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChatagoryList></ChatagoryList>
            <FeaturedList></FeaturedList>
            <h2>Home</h2>
        </div>
    );
};

export default Home;