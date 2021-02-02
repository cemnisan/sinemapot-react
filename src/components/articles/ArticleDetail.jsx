import React, { useContext } from 'react';
import { globalContext } from '../../data/context';
import { useParams } from 'react-router-dom';
import img from '../../headerPhoto.jpg';

function ArticleDetail(props) {
    const { id } = useParams();
    const { results } = useContext(globalContext);

    let movieDetail;

    if (results) {
        movieDetail = results.filter
            (item => item.id === Number(id))
            .map((item, index) => (
                <>
                    <div className="title text-center" key={index}>
                        <h2>{item.original_title}</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img id="detailImg" src={img} alt="..."></img>
                        </div>
                        <div className="col-md-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/cMFWFhTFohk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="detailParagph text-center mt-4">
                            <p>
                                {item.overview} Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, laboriosam. Repudiandae, quidem! Quibusdam pariatur minima aliquid eligendi laudantium nemo reiciendis enim, accusantium et, magnam dolorem eaque nostrum dicta, consectetur voluptatum.
                                Voluptas id recusandae similique saepe eum totam adipisci quasi laudantium molestias, autem maxime, a rem iusto! Praesentium consequatur esse soluta porro similique odio autem ullam quos fuga repudiandae? Consectetur, fuga.
                                Enim quam facilis corrupti, quos possimus adipisci soluta laudantium quisquam consequuntur tempore veniam! Quaerat commodi corrupti sapiente itaque pariatur molestiae ratione harum ab alias nihil. Necessitatibus eos expedita iusto deserunt!
                                Aspernatur natus, eos debitis hic sit expedita nesciunt veritatis animi labore consequatur exercitationem cumque repudiandae dolor officiis, perferendis corporis delectus mollitia recusandae, est adipisci doloribus non! Placeat, et maiores. Esse. lor
                            </p>
                            <p>{item.overview}</p>
                        </div>
                    </div>


                </>
            ))
    }

    return (
        <div className="container">
            {movieDetail}
        </div>
    )
}


export default ArticleDetail