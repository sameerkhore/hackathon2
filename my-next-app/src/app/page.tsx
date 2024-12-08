
import { DiscountItem } from "./component/Discountitems";
import { FeaturedProducts } from "./component/Feature";
import HeroSection  from "./component/Herosection";
import { LatestProducts } from "./component/Latest";
import { LatestBlog } from "./component/Latestblog";
import { Newsletter } from "./component/Newsletter";
import { ProductFeature } from "./component/ProductFeature";
import { PromotionalBanners } from "./component/PromotionalBanners";
import { ServicesSection } from "./component/Service";
import { TopCategories } from "./component/Topcategories";
import { TrendingProducts } from "./component/Trendingproducts";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <FeaturedProducts/>
    <LatestProducts/>
    <ProductFeature/>
    <ServicesSection/>
    <DiscountItem/>
    <LatestBlog/>
    <PromotionalBanners/>
    <TopCategories/>
    <TrendingProducts/>
    <Newsletter/>

     
   </div>
 
  );
}
