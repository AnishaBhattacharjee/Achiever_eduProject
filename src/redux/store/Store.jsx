import { configureStore } from "@reduxjs/toolkit";
import { BlogSlice } from "../BlogSlice";
import { CategoryData } from "../CategorySlice";
import { RecentPostData } from "../RecentPostSlice";
import { DetailsSlice } from "../BlogDetailsSlice";
import { ServiceSlice } from "../ServiceSlice";
import { AuthSlice } from "../AuthSlice";
import { BannerSlice } from "../BannerSlice";
import { TestimonialSlice } from "../TestimonialSlice";
import { TeamSlice } from "../TeamSlice";
import { CourseSlice } from "../CourseSlice";
import { CatDetailsSlice } from "../CategoryDetailsSlice";
import { CommentSlice } from "../CommentSlice";
import { ContactSlice } from "../ContactSlice";




const Store=configureStore({
    reducer:{
        blog: BlogSlice.reducer,
        recentPost: RecentPostData.reducer,
        category:CategoryData.reducer,
        blogdetails:DetailsSlice.reducer,
        serviceData:ServiceSlice.reducer,
        bannerData:BannerSlice.reducer,
        testimonialData:TestimonialSlice.reducer,
        teamData:TeamSlice.reducer,
        courseData:CourseSlice.reducer,
        catdetailsData :CatDetailsSlice.reducer,
        Auth:AuthSlice.reducer,
        commentData:CommentSlice.reducer,
        Contact: ContactSlice.reducer,
        
    }
})

export default Store