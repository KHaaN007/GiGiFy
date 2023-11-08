
import TestomonialCard from "../RowCssComponent/TestomonialCard/TestomonialCard";
import Banner from "../component/Banner/Banner";
import CategoryTabs from "../component/CategoryTabs/CategoryTabs";

import TrustedBy from "../component/TrustedBy/TrustedBy";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrustedBy></TrustedBy>
            <CategoryTabs></CategoryTabs>
            <TestomonialCard></TestomonialCard>
        </div>
    );
};

export default Home;