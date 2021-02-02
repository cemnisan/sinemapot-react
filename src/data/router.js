import Home from '../components/page/Home';
import About from '../components/page/About';
import Articles from '../components/articles/Articles';

const data = {
    "routerPath":[
        {
            "title":"ANASAYFA",
            "slug":"/",
            "exact":true,
            "component":Home,
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

    ]
}

export default data