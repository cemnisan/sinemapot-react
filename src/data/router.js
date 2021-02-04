import HomeCard from '../components/page/HomeCard';
import About from '../components/page/About';
import Articles from '../components/articles/Articles';
import ArticlesDetail from '../components/articles/ArticlesDetail';
import Search from '../components/Search';

const data = {
    "routerPath":[
        {
            "title":"ANASAYFA",
            "slug":"/",
            "exact":true,
            "component":HomeCard,
            "path":"/",
        },
        {
            "title":"HAKKIMDA",
            "slug":"/about",
            "exact":true,
            "component":About,
            "path":"/about",
        },
        {
            "title":"MAKALELER",
            "slug":"/articles",
            "exact":true,
            "component":Articles,
            "path":"/articles",
        },
        {
            "exact":false,
            "component":ArticlesDetail,
            "path":"/articles/:id/:slug",
            "slug":""
        },
        {
            "exact":false,
            "component":Search,
            "path":"/search",
            "slug":""
        },

    ]
}

export default data